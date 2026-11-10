// Screenshots of every generated app on the local runtime: home (anonymous) + every view (admin, else user).
// node shoot.mjs [slug,...]   — skips apps already shot unless listed
import { chromium } from 'playwright/index.mjs';
import fs from 'node:fs'; import path from 'node:path';
import yaml from 'js-yaml/dist/js-yaml.mjs';

const DIR = path.dirname(new URL(import.meta.url).pathname);
const MAN = path.join(DIR, 'rt_manifests'), OUT = path.join(DIR, 'shots'), PORT = 3101;
const only = (process.argv[2] || '').split(',').filter(Boolean);
const slugs = fs.readdirSync(MAN).filter((f) => f.endsWith('.vertical.yaml')).map((f) => f.replace('.vertical.yaml', ''))
  .filter((s) => (only.length ? only.includes(s) : !fs.existsSync(path.join(OUT, s, 'report.json'))));

const browser = await chromium.launch({ ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}), args: ['--host-resolver-rules=MAP *.localhost 127.0.0.1'] });

async function session(slug, email) {
  const origin = `http://${slug}.localhost:${PORT}`;
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, locale: 'it-IT' });
  const p = await ctx.newPage();
  await p.goto(origin + '/', { waitUntil: 'domcontentloaded' }).catch(() => {});
  const j = await p.evaluate(async (email) => {
    const r = await fetch('/api/auth/request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
    return r.json().catch(() => ({ status: r.status }));
  }, email).catch((e) => ({ err: String(e) }));
  if (!j.devLink) { console.log('  login', email, JSON.stringify(j).slice(0, 160)); await ctx.close(); return null; }
  await p.goto(j.devLink.replace(/^https?:\/\/[^/]+/, origin), { waitUntil: 'networkidle' }).catch(() => {});
  await p.close();
  return ctx;
}

async function shot(ctx, url, file, rep, label) {
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', (e) => errs.push(String(e).slice(0, 200)));
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 200)); });
  let status = 0;
  try { const resp = await p.goto(url, { waitUntil: 'networkidle', timeout: 30000 }); status = resp?.status() || 0; } catch (e) { errs.push('goto: ' + e.message.slice(0, 120)); }
  p.on('crash', () => errs.push('page crashed'));
  await p.waitForTimeout(400).catch(() => {});
  const h = await p.evaluate(() => document.documentElement.scrollHeight).catch(() => 900);
  await p.screenshot({ path: file, fullPage: h <= 3200, clip: h > 3200 ? { x: 0, y: 0, width: 1366, height: 3200 } : undefined }).catch((e) => errs.push('shot: ' + e.message));
  const text = await p.evaluate(() => document.body?.innerText?.slice(0, 300) || '').catch(() => '');
  rep.push({ label, url: url.replace(/^http:\/\/[^/]+/, ''), status, errors: errs, height: h, text: text.replace(/\s+/g, ' ').slice(0, 160) });
  await p.close().catch(() => {});
}

for (const slug of slugs) { try { await one(slug); } catch (e) { console.log(slug, 'ERRORE', String(e).slice(0, 160)); } }
await browser.close();

async function one(slug) {
  const m = yaml.load(fs.readFileSync(path.join(MAN, `${slug}.vertical.yaml`), 'utf8'));
  const out = path.join(OUT, slug); fs.mkdirSync(out, { recursive: true });
  const origin = `http://${slug}.localhost:${PORT}`; const rep = [];
  const anon = await browser.newContext({ viewport: { width: 1366, height: 900 }, locale: 'it-IT' });
  await shot(anon, origin + '/', path.join(out, '00-home-anon.png'), rep, 'home (anonimo)');
  const mob = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: 'it-IT', isMobile: true, deviceScaleFactor: 2 });
  await shot(mob, origin + '/', path.join(out, '01-home-mobile.png'), rep, 'home (mobile)');
  await anon.close(); await mob.close();
  const admin = await session(slug, 'admin@example.com'); const user = await session(slug, 'user@example.com');
  let i = 2;
  for (const v of m.spec?.views || []) {
    if (v.type === 'report') continue;                       // needs a run id
    const roles = v.roles || [];
    const ctx = !roles.length || roles.includes('admin') ? admin : user;
    if (!ctx) { rep.push({ label: v.key, error: 'no session' }); continue; }
    const url = v.key === 'home' && v.type === 'page' ? origin + '/' : `${origin}/v/${v.key}`;
    await shot(ctx, url, path.join(out, `${String(i++).padStart(2, '0')}-${v.key}.png`), rep, `${v.key} (${v.type}, ${ctx === admin ? 'admin' : 'utente'})`);
  }
  await admin?.close(); await user?.close();
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify({ slug, name: m.metadata?.displayName, shots: rep }, null, 1));
  const bad = rep.filter((r) => r.status >= 400 || r.errors?.length || r.error).length;
  console.log(slug, rep.length, 'shots', bad ? `${bad} con problemi` : 'ok');
}
