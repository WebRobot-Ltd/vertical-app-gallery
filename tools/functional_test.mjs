// Functional test of every app on the local runtime (port 3101, memory store, dev login links, mock platform on 3999).
// For each app: home and every page for the right role; every form view filled with test values (also by visitors
// when allowed) and the saved record looked for in the pages that read its collection; the triggers' effects
// (emails, agent starts, records written); CSV exports; the run form end to end (start → report); a template
// instance created and run; pages a role must not open.
// node run.mjs <rt_manifests dir> <out.json> [slug,…]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const DIR = process.argv[2], OUT = process.argv[3];
const only = (process.argv[4] || '').split(',').filter(Boolean);
const PORT = 3101;
const TOKEN = 'Collaudo';
const ERR_MARK = /Application error|Unhandled Runtime Error|__next_error__|Internal Server Error|digest:/;

function req(slug, method, p, { cookie, body, headers = {}, raw } = {}) {
  return new Promise((resolve) => {
    const host = `${slug}.localhost:${PORT}`;
    const h = { Host: host, ...headers };
    if (cookie) h.Cookie = cookie;
    let data = null;
    if (body !== undefined && !raw) { data = JSON.stringify(body); h['Content-Type'] = 'application/json'; }
    if (raw) data = raw;
    if (method !== 'GET') h.Origin = `http://${host}`;
    const r = http.request({ host: '127.0.0.1', port: PORT, method, path: p, headers: h, timeout: 90000 }, (res) => {
      let b = ''; res.setEncoding('utf8'); res.on('data', (c) => { b += c; });
      res.on('end', () => { let j = null; try { j = JSON.parse(b); } catch { /* html */ } resolve({ status: res.statusCode, headers: res.headers, text: b, json: j }); });
    });
    r.on('timeout', () => { r.destroy(); resolve({ status: 0, text: 'timeout', json: null, headers: {} }); });
    r.on('error', (e) => resolve({ status: 0, text: String(e), json: null, headers: {} }));
    if (data) r.write(data);
    r.end();
  });
}

async function login(slug, email) {
  const a = await req(slug, 'POST', '/api/auth/request', { body: { email } });
  const link = a.json?.devLink;
  if (!link) return null;
  const v = await req(slug, 'GET', link.replace(/^https?:\/\/[^/]+/, ''));
  const sc = [].concat(v.headers['set-cookie'] || []).map((x) => x.split(';')[0]).filter(Boolean);
  return sc.length ? sc.join('; ') : null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const inspect = async (slug) => (await req(slug, 'GET', '/api/dev-inspect')).json;
const calls = (p) => { try { return fs.readFileSync(path.join(path.dirname(OUT), 'mock-calls.jsonl'), 'utf8').split('\n').filter((l) => l && (!p || l.includes(`"path":"${p}"`))).length; } catch { return 0; } };

// a value for a field: a recognisable token in text, sensible values elsewhere; selects take an option of the page
function valueFor(f, opts, emails, me, coll = '') {
  const t = f.type;
  if (!opts?.length && Array.isArray(f.options)) opts = f.options.map((o) => (typeof o === 'string' ? o : o?.value)).filter(Boolean);
  if (opts?.length && (t === 'select' || t === 'multiselect' || f.optionsFrom || f.options)) return t === 'multiselect' ? [opts[0]] : opts[0];
  if (t === 'number' || t === 'integer') return 3;
  if (t === 'boolean') return true;
  if (t === 'date') return new Date(Date.now() + 10 * 864e5).toISOString().slice(0, 10);
  if (t === 'datetime') return new Date(Date.now() + 10 * 864e5).toISOString().slice(0, 16);
  if (t === 'email') return emails[`${coll}.${f.name}`] || me || 'cliente.collaudo@example.com';
  if (t === 'url') return 'https://example.org/collaudo';
  if (t === 'urls') return ['https://example.org/collaudo'];
  if (t === 'array') return [me || `${TOKEN} ${f.name}`];
  if (t === 'json' || t === 'object') return {};
  if (t === 'file') return undefined;
  if (t === 'select' || t === 'multiselect') return undefined;
  const txt = `${TOKEN} ${f.name}`;
  return f.maxLength ? txt.slice(0, f.maxLength) : txt;
}

// options of the selects of a form page: <select name="x"> … <option value="v">
function selectOptions(html) {
  const out = {};
  for (const m of html.matchAll(/<select[^>]*name="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)) {
    out[m[1]] = [...m[2].matchAll(/<option[^>]*value="([^"]*)"/g)].map((x) => x[1]).filter((v) => v !== '');
  }
  return out;
}

async function uploadFile(slug, cookie, view, field) {
  const accept = field.accept || ['pdf', 'docx', 'xlsx', 'csv', 'txt', 'jpg', 'jpeg', 'png', 'webp'];
  const ext = accept.includes('txt') ? 'txt' : accept.includes('csv') ? 'csv' : accept.includes('md') ? 'md' : accept.includes('json') ? 'json' : accept.includes('pdf') ? 'pdf' : accept.includes('png') ? 'png' : accept[0];
  const bytes = ext === 'pdf' ? fs.readFileSync(path.join(path.dirname(new URL(import.meta.url).pathname), 'fixture.pdf')) : ext === 'png' ? Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64')
    : ext === 'json' ? Buffer.from('{"collaudo": true}') : Buffer.from(`${TOKEN}, file di prova\n`);
  const b = '----collaudo' + Date.now();
  const parts = [
    `--${b}\r\nContent-Disposition: form-data; name="field"\r\n\r\n${field.name}\r\n`,
    ...(view ? [`--${b}\r\nContent-Disposition: form-data; name="view"\r\n\r\n${view}\r\n`] : []),
    `--${b}\r\nContent-Disposition: form-data; name="file"; filename="collaudo.${ext}"\r\nContent-Type: application/octet-stream\r\n\r\n`,
  ];
  const raw = Buffer.concat([Buffer.from(parts.join('')), bytes, Buffer.from(`\r\n--${b}--\r\n`)]);
  const r = await req(slug, 'POST', '/api/files', { cookie, raw, headers: { 'Content-Type': `multipart/form-data; boundary=${b}`, 'X-VK-Upload': '1' } });
  return r.status === 201 ? r.json?.id : { error: `${r.status} ${String(r.json?.error || r.text).slice(0, 120)}` };
}

async function testApp(file) {
  const m = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8'));
  const slug = m.metadata.slug, s = m.spec;
  const R = { app: file.replace('.vertical.yaml', ''), slug, checks: [] };
  const ok = (code, where, msg) => R.checks.push({ code, ok: true, where, msg });
  const ko = (code, where, msg, sev = 'error') => R.checks.push({ code, ok: false, sev, where, msg });
  const ins0 = await inspect(slug);
  const starts0 = calls('/agentic/start'), mails0 = calls('/email/send');
  if (!ins0?.counts) { ko('NOT_LOADED', 'app', 'the runtime does not serve this app (invalid manifest?)'); return R; }

  const views = s.views || [];
  const roles = (s.auth?.roles || []).map((r) => r.key);
  const colls = Object.fromEntries(((s.data?.collections) || []).map((c) => (typeof c === 'string' ? { name: c } : c)).map((c) => [c.name, c]));
  const anonViews = new Set(s.auth?.anonymous?.views || []);
  const signupRole = (s.auth?.roles || []).find((r) => r.assignedBy === 'signup')?.key || 'user';
  // derived roles: the email that will hold them, written in the field they derive from
  const emails = {}; const derived = {}; const derivedColl = {};
  for (const r of s.auth?.roles || []) if (r.assignedBy === 'derived') for (const fr of [].concat(r.from || [])) {
    const f = String(fr).split('.')[1]; if (f) { emails[`${String(fr).replace(/^collection:/, '').split('.')[0]}.${f}`] = `${r.key}.collaudo@example.com`; derived[r.key] = `${r.key}.collaudo@example.com`; derivedColl[r.key] = String(fr).replace(/^collection:/, '').split('.')[0]; }
  }

  // home
  const home = await req(slug, 'GET', '/');
  if (home.status !== 200 || ERR_MARK.test(home.text)) ko('HOME', '/', `status ${home.status}${ERR_MARK.test(home.text) ? ', error page' : ''}`); else ok('HOME', '/', 'renders');

  const S = { admin: await login(slug, 'admin@example.com'), [signupRole]: await login(slug, 'user@example.com') };
  const EMAIL = { admin: 'admin@example.com', [signupRole]: 'user@example.com' };
  if (!S.admin || !S[signupRole]) { ko('LOGIN', 'auth', 'dev sign-in failed'); return R; }
  const pick = (v) => {   // a session allowed to open the view
    const rs = v.roles || [];
    if (!rs.length) return [signupRole, S[signupRole]];
    for (const r of rs) if (S[r]) return [r, S[r]];
    return [rs[0], null];
  };

  // credits for the user, so paid runs are not refused for an empty balance
  const users = (await inspect(slug))?.users || [];
  const uid = users.find((u) => u.email === 'user@example.com')?.id;
  if (uid && (s.billing?.modes || []).includes('credits')) await req(slug, 'POST', '/api/admin/credits', { cookie: S.admin, body: { userId: uid, credits: 5000 } });

  const saved = [];
  // the admins' data page: catalogues, app data and back office filled by hand (two records each), so the selects and
  // the pages that read them have rows
  const adminColls = Object.values(colls).filter((c) => ['shared', 'app', 'org'].includes(c.ownedBy || 'user'));
  if (adminColls.length) {
    const pg = await req(slug, 'GET', '/admin/data', { cookie: S.admin });
    if (pg.status !== 200 || ERR_MARK.test(pg.text)) ko('ADMIN_DATA', '/admin/data', `status ${pg.status}`); else ok('ADMIN_DATA', '/admin/data', 'renders');
    for (let pass = 0; pass < 2; pass++) for (const c of adminColls) {
      if (saved.filter((x) => x.coll === c.name && x.role === 'admin-data').length >= 2) continue;
      const page = await req(slug, 'GET', `/admin/data?c=${encodeURIComponent(c.name)}`, { cookie: S.admin });
      const opts = selectOptions(page.text);
      const values = {}; let blocked = '';
      for (const f of (c.fields || []).filter((f) => f.type !== 'file')) {
        const x = valueFor(f, opts[f.name], emails, 'admin@example.com', c.name);
        if (x === undefined) { if (f.required) blocked = `required ${f.name}${f.optionsFrom ? ` (options from ${f.optionsFrom})` : ''} has no option`; continue; }
        values[f.name] = x;
      }
      if (blocked) { if (pass) ko('ADMIN_ADD', `collection ${c.name}`, blocked); continue; }
      for (let k = 0; k < 2; k++) {
        const r = await req(slug, 'POST', '/api/admin/records', { cookie: S.admin, body: { collection: c.name, values } });
        if (r.status === 201) saved.push({ view: '/admin/data', coll: c.name, role: 'admin-data', cookie: S.admin, id: r.json?.id, values });
        else { if (pass) ko('ADMIN_ADD', `collection ${c.name}`, `${r.status} ${String(r.json?.error || r.text).slice(0, 160)}`); break; }
      }
    }
  }

  // forms first (so the pages that read the records have rows), selects with options before those that need them
  const forms = views.filter((v) => v.type === 'form');
  for (let pass = 0; pass < 2; pass++) for (const v of forms) {
    if (saved.some((x) => x.view === v.key)) continue;
    const c = colls[v.collection]; if (!c) continue;
    let [role, ck] = pick(v);
    const anon = anonViews.has(v.key);
    if (!ck && !anon) { if (pass) ko('FORM', `form ${v.key}`, `only role ${role} may fill it, and the test cannot hold that role`, 'warn'); continue; }
    if (anon && !ck) { role = 'visitor'; ck = null; }
    const page = await req(slug, 'GET', `/v/${v.key}`, { cookie: ck || undefined });
    const opts = selectOptions(page.text);
    const fields = (c.fields || []).filter((f) => !v.fields || v.fields.includes(f.name));
    const values = {}; let blocked = '';
    for (const f of fields) {
      if (f.type === 'file') {
        if (!f.required) continue;
        if (!ck) { blocked = `required file ${f.name}, visitors cannot upload`; break; }
        const id = await uploadFile(slug, ck, v.key, f);
        if (typeof id !== 'string') { blocked = `upload of ${f.name} refused: ${id.error}`; break; }
        values[f.name] = f.multiple ? [id] : id; continue;
      }
      const val = valueFor(f, opts[f.name], emails, ck ? EMAIL[role] : null, v.collection);
      if (val === undefined) { if (f.required) { blocked = f.optionsFrom ? `required ${f.name} (options from ${f.optionsFrom}) has no option to choose` : `required ${f.type} ${f.name} has no option to choose`; } continue; }
      values[f.name] = val;
    }
    if (blocked) { if (pass) ko('FORM_DEP', `form ${v.key}`, blocked); continue; }
    const r = await req(slug, 'POST', '/api/records', { cookie: ck || undefined, body: { view: v.key, values } });
    if (r.status === 201) { saved.push({ view: v.key, coll: v.collection, role, cookie: ck, id: r.json?.id, values }); ok('FORM', `form ${v.key}`, `saved as ${role}`); }
    else if (pass) ko('FORM', `form ${v.key}`, `${r.status} ${String(r.json?.error || r.text).slice(0, 200)} (as ${role})`);
  }
  if (anonViews.size) for (const v of forms.filter((x) => anonViews.has(x.key) && !saved.some((y) => y.view === x.key && y.role === 'visitor'))) {
    // visitors' path when a session also could: post once more without a cookie
    const c = colls[v.collection]; const values = {};
    for (const f of (c?.fields || []).filter((f) => f.type !== 'file' && (!v.fields || v.fields.includes(f.name)))) { const x = valueFor(f, null, emails); if (x !== undefined) values[f.name] = x; }
    const r = await req(slug, 'POST', '/api/records', { body: { view: v.key, values } });
    if (r.status === 201) ok('FORM_ANON', `form ${v.key}`, 'a visitor can send it'); else ko('FORM_ANON', `form ${v.key}`, `visitor: ${r.status} ${String(r.json?.error || '').slice(0, 160)}`);
  }

  // derived roles: sign in with the email the records name
  for (const [r, e] of Object.entries(derived)) S[r] = await login(slug, e);

  // the run form, end to end
  const main = (s.agents || []).find((a) => (a.role || 'main') === 'main');
  const nr = views.find((v) => v.type === 'new_run');
  if (main && nr) {
    const [role, ck] = pick(nr);
    if (ck) {
      const page = await req(slug, 'GET', `/v/${nr.key}`, { cookie: ck });
      const opts = selectOptions(page.text); const values = {}; let blocked = '';
      for (const f of s.inputForm?.fields || []) {
        if (f.type === 'file') { if (!f.required) continue; const id = await uploadFile(slug, ck, null, f); if (typeof id !== 'string') { blocked = `upload ${f.name}: ${id.error}`; break; } values[f.name] = f.multiple ? [id] : id; continue; }
        const x = valueFor(f, opts[f.name], emails, EMAIL[role]); if (x !== undefined) values[f.name] = x; else if (f.required) blocked = f.optionsFrom ? `required ${f.name} (options from ${f.optionsFrom}) has no option` : `required ${f.name} has no option`;
      }
      if (blocked) ko('RUN', `view ${nr.key}`, blocked);
      else {
        const r = await req(slug, 'POST', '/api/runs', { cookie: ck, body: { values } });
        if (r.status === 402) ko('RUN_PLAN', `view ${nr.key}`, `start needs a plan: ${String(r.json?.error || '').slice(0, 120)}`, 'warn');
        else if (r.status === 503 && /slots/.test(r.text)) ko('RUN_SLOTS', `view ${nr.key}`, 'the app uses Python slots: no slot runner in the local test', 'warn');
        else if (r.status !== 201) ko('RUN', `view ${nr.key}`, `start: ${r.status} ${String(r.json?.error || r.text).slice(0, 200)} (as ${role})`);
        else {
          let st = '', run = null;
          for (let i = 0; i < 6 && !/done|error|failed/i.test(st); i++) { await sleep(1000); run = (await req(slug, 'GET', `/api/runs/${r.json.id}`, { cookie: ck })).json?.run; st = run?.status || ''; }
          const rep = await req(slug, 'GET', `/r/${r.json.id}`, { cookie: ck });   // the report itself is loaded by the page in the browser
          if (/done/i.test(st) && String(run?.report || '').includes('Report di collaudo') && rep.status === 200 && !ERR_MARK.test(rep.text)) ok('RUN', `view ${nr.key}`, 'started, finished, report ready, report page renders');
          else ko('RUN', `view ${nr.key}`, `run status '${st}' (${String(run?.error || '').slice(0, 120)}), report ${run?.report ? 'ready' : 'missing'}, report page ${rep.status}`);
        }
      }
    }
  }

  // a template instance, created and run now
  for (const tp of (s.templates || []).slice(0, 2)) {
    const ck = S[signupRole];
    const params = {};
    const iv = views.find((v) => v.type === 'instances' && (!v.template || v.template === tp.key));
    const popts = iv ? selectOptions((await req(slug, 'GET', `/v/${iv.key}`, { cookie: ck })).text) : {};
    for (const p of tp.params || []) { const x = valueFor(p, popts[p.name]?.length ? popts[p.name] : (p.options || []).map((o) => (typeof o === 'string' ? o : o.value)), emails, 'user@example.com'); if (x !== undefined) params[p.name] = x; }
    const c = await req(slug, 'POST', '/api/instances', { cookie: ck, body: { template: tp.key, title: `${TOKEN} ${tp.key}`, params } });
    if (c.status === 403 && (tp.roles || []).length) { ko('TEMPLATE', `template ${tp.key}`, `reserved to ${tp.roles.join('/')}`, 'warn'); continue; }
    if (c.status !== 201) { ko('TEMPLATE', `template ${tp.key}`, `create: ${c.status} ${String(c.json?.error || c.text).slice(0, 200)}`); continue; }
    const r2 = await req(slug, 'PATCH', '/api/instances', { cookie: ck, body: { id: c.json.instance.id, action: 'run' } });
    if (r2.status < 300) ok('TEMPLATE', `template ${tp.key}`, 'instance created and run'); else ko('TEMPLATE', `template ${tp.key}`, `run: ${r2.status} ${String(r2.json?.error || r2.text).slice(0, 160)}`);
  }

  await sleep(1500);
  const ins1 = await inspect(slug);

  // triggers: the effects expected from what the test did
  const delta = (k) => (ins1.counts[k] || 0) - (ins0.counts[k] || 0);
  const starts = calls('/agentic/start') - starts0;
  for (const tr of s.triggers || []) {
    const on = tr.on || {};
    if (!on.collection) continue;
    const hit = saved.filter((x) => x.coll === on.collection && (on.op || 'insert') === 'insert' && Object.entries(on.where || {}).every(([k, v]) => x.values[k] === v));
    if (!hit.length) continue;
    if (tr.notify) {
      const to = [].concat(tr.notify.to || 'owner');
      const reach = to.some((t) => t === 'owner' ? hit.some((x) => x.role !== 'visitor') : t === 'admins' ? true : String(t).startsWith('role:') ? ['admin', signupRole].includes(String(t).slice(5)) : String(t).startsWith('record.') ? hit.some((x) => x.values[String(t).slice(7)]) : true);
      if (!reach) { ko('TRIGGER', `trigger ${tr.key}`, `email to ${to.join(', ')}: no such recipient in the test (role nobody holds or empty field)`, 'warn'); continue; }
    }
    const kind = tr.notify ? 'notify' : tr.write ? 'write' : tr.charge ? 'charge' : 'start';
    const seen = kind === 'notify' ? delta('outbox') > 0 : kind === 'write' ? delta(tr.write.collection || tr.write.into) > 0 : kind === 'start' ? starts > 0 : true;
    const why = kind === 'notify' ? `outbox ${delta('outbox')}, last: ${JSON.stringify(ins1.outbox?.slice(-1)[0] || {})}` : kind === 'write' ? `${tr.write.collection || tr.write.into} +${delta(tr.write.collection || tr.write.into)}` : `agent starts +${starts}`;
    if (seen) ok('TRIGGER', `trigger ${tr.key}`, `${kind} fired (${why})`); else ko('TRIGGER', `trigger ${tr.key}`, `${kind} expected after a ${on.collection} record, nothing seen (${why}); log: ${JSON.stringify(ins1.log?.slice(-2))}`);
  }
  const badMail = (ins1.outbox || []).filter((o) => o.status === 'error');
  if (badMail.length) ko('EMAIL', 'outbox', `send failed: ${JSON.stringify(badMail[0])}`);

  // every page, for a role that may open it; the saved records shown where their collection is read
  for (const v of views) {
    if (v.type === 'report') continue;
    const [role, ck] = pick(v);
    if (!ck && !(v.roles || []).length) continue;
    if (!ck) { ko('VIEW', `view ${v.key}`, `only role ${(v.roles || []).join('/')} may open it, the test cannot hold it`, 'warn'); continue; }
    const r = await req(slug, 'GET', `/v/${v.key}`, { cookie: ck });
    if (r.status === 404 && derived[role] && !saved.some((x) => x.coll === derivedColl[role] && Object.values(x.values).includes(derived[role]))) { ko('ROLE_NOT_HELD', `view ${v.key}`, `role ${role} is derived from a record that the test could not save (see FORM_DEP)`, 'warn'); continue; }
    if (r.status !== 200 || ERR_MARK.test(r.text)) { ko('VIEW', `view ${v.key}`, `status ${r.status}${ERR_MARK.test(r.text) ? ', error page' : ''} (as ${role})`); continue; }
    const src = String(v.source || '');
    if (src.startsWith('collection:')) {
      const c = src.slice(11).split('.')[0];
      const mine = saved.filter((x) => x.coll === c);
      if (mine.length && !(v.data?.filters || []).length) {
        if (r.text.includes(TOKEN) || mine.some((x) => Object.values(x.values).some((val) => typeof val === 'number' ? false : String(val).length > 6 && r.text.includes(String(val))))) ok('VIEW_DATA', `view ${v.key}`, `shows the record saved in ${c}`);
        else ko('VIEW_DATA', `view ${v.key}`, `a record was saved in ${c} (by ${mine.map((x) => x.role).join(', ')}) but the page does not show it (as ${role})`, 'warn');
      }
    } else ok('VIEW', `view ${v.key}`, `renders (as ${role})`);
    if (v.export) {
      const e = await req(slug, 'GET', `/api/export/${v.key}`, { cookie: ck });
      if (e.status === 402) ko('EXPORT', `view ${v.key}`, 'export reserved to a plan', 'warn');
      else if (e.status === 200 && /text\/csv/.test(String(e.headers['content-type']))) ok('EXPORT', `view ${v.key}`, `CSV, ${e.text.split('\n').length - 1} rows`); else ko('EXPORT', `view ${v.key}`, `${e.status} ${e.text.slice(0, 120)}`);
    }
  }

  // what a role must NOT open: a signed-in user on pages of other roles, a visitor on private pages
  for (const v of views) {
    const rs = v.roles || [];
    if (rs.length && !rs.includes(signupRole)) {
      const r = await req(slug, 'GET', `/v/${v.key}`, { cookie: S[signupRole] });
      if (r.status === 200) ko('ACCESS', `view ${v.key}`, `restricted to ${rs.join('/')}, but a ${signupRole} opens it`); else ok('ACCESS', `view ${v.key}`, `refused to ${signupRole} (${r.status})`);
    }
    if (!anonViews.has(v.key) && v.type !== 'page' && !s.auth?.public) {
      const r = await req(slug, 'GET', `/v/${v.key}`);
      if (r.status === 200) ko('ACCESS', `view ${v.key}`, 'a visitor without an account opens it');
    }
  }
  // org records stay with the admins: a user must not see a visitor's or admin's org record
  for (const x of saved) {
    if ((colls[x.coll]?.ownedBy) !== 'org') continue;
    for (const v of views.filter((w) => String(w.source || '') === `collection:${x.coll}` && (!(w.roles || []).length || (w.roles || []).includes(signupRole)))) {
      const r = await req(slug, 'GET', `/v/${v.key}`, { cookie: S[signupRole] });
      const leaked = r.status === 200 && Object.values(x.values).some((val) => typeof val === 'string' && val.length > 8 && r.text.includes(val));
      const assigned = (colls[x.coll].access || []).some((a) => a.role === signupRole);
      if (leaked && !assigned) ko('LEAK', `view ${v.key}`, `a ${signupRole} sees a back-office record of ${x.coll}`);
    }
  }
  R.mockCalls = calls();
  return R;
}

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.vertical.yaml')).filter((f) => !only.length || only.includes(f.replace('.vertical.yaml', '')));
const res = fs.existsSync(OUT) && only.length ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
let i = 0;
for (const f of files) {
  const t0 = Date.now();
  try { res[f.replace('.vertical.yaml', '')] = await testApp(f); } catch (e) { res[f.replace('.vertical.yaml', '')] = { app: f, checks: [{ code: 'CRASH', ok: false, sev: 'error', where: '-', msg: String(e?.stack || e).slice(0, 300) }] }; }
  const r = res[f.replace('.vertical.yaml', '')];
  const bad = r.checks.filter((c) => !c.ok && c.sev === 'error').length;
  console.log(`${++i}/${files.length} ${f.replace('.vertical.yaml', '')} ${r.checks.length} checks, ${bad} errors, ${Math.round((Date.now() - t0) / 1000)}s`);
  fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
}
