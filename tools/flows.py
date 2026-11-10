"""Functional consistency of a VerticalApp manifest, beyond the contract (which checks shape and references):
does the app WORK once opened? Who writes each collection and who reads it, whether the columns of a view exist,
whether every role sees something, whether every agent can be started, whether triggers, links and templates point
at things a user can reach.

python3 flows.py <manifests dir> <out.json>
Each finding: {code, sev: error|warn, where, msg}. error = a user hits it (an always-empty page, an agent nobody can
start, a role with nothing to see); warn = suspicious but may be intended.
"""
import json, re, sys, pathlib

SYSTEM_FIELDS = {'id', 'createdAt', 'updatedAt', 'userId', 'submittedBy', 'instanceId', 'runId', 'status',
                 'start', 'end', 'date', 'resource', 'resourceId', 'title', 'email', 'name'}
BOOKING_FIELDS = {'start', 'end', 'date', 'resource', 'resourceId', 'status', 'slot'}
RUN_VIEWS = {'new_run', 'history', 'report'}
PLACE = re.compile(r'\{record\.([A-Za-z0-9_]+)\}')


def T(x):
    return x if isinstance(x, str) else ''


def analyse(m):
    s = m.get('spec', {})
    out = []
    add = lambda code, sev, where, msg: out.append({'code': code, 'sev': sev, 'where': where, 'msg': msg})
    views = s.get('views') or []
    vkeys = {v.get('key') for v in views}
    agents = s.get('agents') or []
    akeys = {a.get('key') for a in agents}
    roles = (s.get('auth') or {}).get('roles') or []
    rkeys = {r.get('key') for r in roles}
    anon = (s.get('auth') or {}).get('anonymous') or {}
    colls = {}
    for c in (s.get('data') or {}).get('collections') or []:
        c = {'name': c} if isinstance(c, str) else c
        colls[c.get('name')] = c
    fields = {n: {f.get('name'): f for f in (c.get('fields') or [])} for n, c in colls.items()}
    declared = {n: bool(c.get('fields')) for n, c in colls.items()}

    writers = {n: [] for n in colls}
    readers = {n: [] for n in colls}

    def coll_of(src):
        src = T(src)
        return src.split(':', 1)[1].split('.')[0] if src.startswith('collection:') else None

    # writers / readers --------------------------------------------------------------------------------------------
    for v in views:
        t = v.get('type')
        if t in ('form', 'booking') and v.get('collection') in colls:
            writers[v['collection']].append(f"{t} view {v['key']}")
            if v.get('edit'):
                readers[v['collection']].append(f"form view {v['key']} (edit)")
        c = coll_of(v.get('source'))
        if c in colls:
            readers[c].append(f"view {v['key']}")
        if t == 'booking' and coll_of(v.get('resources')) in colls:
            readers[coll_of(v.get('resources'))].append(f"booking view {v['key']} (resources)")
        for b in v.get('sections') or []:
            c = coll_of(b.get('source'))
            if b.get('type') == 'data' and c in colls:
                readers[c].append(f"data block in {v['key']}")
    for a in agents:
        wt = (a.get('writesTo') or {}).get('collection')
        if wt in colls:
            writers[wt].append(f"agent {a['key']} (writesTo)")
        for tl in a.get('appTools') or []:
            c = tl.get('collection')
            if c not in colls:
                continue
            if tl.get('action') in ('write', 'append'):
                writers[c].append(f"agent {a['key']} tool {tl.get('name')}")
            if tl.get('action') in ('read', 'search', 'show', 'write'):
                readers[c].append(f"agent {a['key']} tool {tl.get('name')}")
        for cx in a.get('context') or []:
            c = coll_of(cx.get('from'))
            if c in colls:
                readers[c].append(f"agent {a['key']} context")
    for tr in s.get('triggers') or []:
        on = tr.get('on') or {}
        c = on.get('collection') or (on.get('date') or {}).get('collection')
        if c in colls:
            readers[c].append(f"trigger {tr.get('key')}")
        w = (tr.get('write') or {}).get('collection') or (tr.get('write') or {}).get('into')
        if w in colls:
            writers[w].append(f"trigger {tr.get('key')} (write)")
    for r in roles:
        if r.get('assignedBy') == 'derived':
            for fr in (r.get('from') if isinstance(r.get('from'), list) else [r.get('from')]):
                c = coll_of(fr)
                if c in colls:
                    readers[c].append(f"role {r.get('key')}")

    for n, c in colls.items():   # the admins' data page (/admin/data) fills shared catalogues, app data and the back office
        if (c.get('ownedBy') or 'user') in ('shared', 'app', 'org'):
            writers[n].append('the admins\' data page')
    for n, c in colls.items():
        if not writers[n]:
            add('NO_WRITER', 'error', f'collection {n}', f"nothing writes it (no form, no agent tool, no trigger): "
                f"{', '.join(readers[n]) or 'nobody reads it either'} {'always empty' if readers[n] else ''}".strip())
        elif not readers[n]:
            add('NO_READER', 'warn', f'collection {n}', f"written by {', '.join(writers[n])} but no view, block, tool or trigger reads it")

    # columns of the views that read a collection ---------------------------------------------------------------
    def check_cols(where, c, keys, d=None):
        d = d or {}
        if c not in colls or not declared.get(c):
            return
        if d.get('path'):   # path: the columns are those of a nested list; its first step must be a field
            if d['path'].split('.')[0] not in fields[c]:
                add('COLUMN', 'error', where, f"reads the list {d['path']}, but collection {c} has no field {d['path'].split('.')[0]}")
            return
        gb = d.get('groupBy') or {}
        known = set(fields[c]) | SYSTEM_FIELDS | {'count', 'sum', 'avg', 'min', 'max', 'value', 'group'} \
            | {g.get('key') for g in gb.get('aggs') or []}
        bad = [k for k in keys if k and k.split('.')[0] not in known]
        if bad:
            add('COLUMN', 'error', where, f"shows {bad} which collection {c} does not have (fields: {sorted(fields[c])})")

    for v in views:
        c = coll_of(v.get('source'))
        keys = list(v.get('columns') or []) + [f.get('key') for f in ((v.get('data') or {}).get('fields') or []) if isinstance(f, dict)]
        keys += [f.get('field') for f in ((v.get('data') or {}).get('filters') or []) if isinstance(f, dict)]
        srt = ((v.get('data') or {}).get('sort') or {})
        if isinstance(srt, dict):
            keys.append(srt.get('field'))
        check_cols(f"view {v['key']}", c, keys, v.get('data') or {})
        for b in v.get('sections') or []:
            if b.get('type') == 'data':
                bk = [f.get('key') if isinstance(f, dict) else f for f in (b.get('fields') or [])]
                bk += [k.get('field') for k in b.get('kpis') or [] if isinstance(k, dict)]
                check_cols(f"data block in {v['key']}", coll_of(b.get('source')), bk, b)
        if v.get('type') in ('form', 'booking'):
            c = v.get('collection')
            if c not in colls:
                add('FORM_TARGET', 'error', f"view {v['key']}", f"{v['type']} saves into unknown collection {c}")
            else:
                own = set(fields[c]) - BOOKING_FIELDS if v['type'] == 'booking' else set(fields[c])
                if v['type'] == 'form' and not fields[c]:
                    add('FORM_EMPTY', 'error', f"view {v['key']}", f"form on collection {c}, which declares no fields: nothing to fill")
                bad = [f for f in (v.get('fields') or []) if f not in fields[c]]
                if bad:
                    add('FORM_FIELDS', 'error', f"view {v['key']}", f"asks fields {bad} that collection {c} does not have")
        if v.get('type') == 'map':
            c = coll_of(v.get('source'))
            mp = v.get('map') or {}
            check_cols(f"map view {v['key']}", c, [mp.get('lat', 'lat'), mp.get('lon', 'lon'), mp.get('title', 'name')] + list(mp.get('popup') or []))

    # roles: each one sees something, and can be obtained ----------------------------------------------------------
    def visible(v, role):
        rs = v.get('roles') or []
        return (not rs) or role in rs or role == 'admin'

    for r in roles:
        k = r.get('key')
        if k == 'admin':
            continue
        seen = [v['key'] for v in views if visible(v, k) and v.get('type') not in ('account',) and v.get('key') != 'home']
        if not seen:
            add('ROLE_NOTHING', 'error', f'role {k}', 'a user with this role sees no page besides home and account')
        if r.get('assignedBy') == 'derived':
            for fr in (r.get('from') if isinstance(r.get('from'), list) else [r.get('from')]):
                c = coll_of(fr)
                f = T(fr).split('.', 1)[1] if '.' in T(fr) else ''
                if c in colls and declared.get(c) and f not in fields[c]:
                    add('ROLE_FROM', 'error', f'role {k}', f"derived from {fr}, but collection {c} has no field {f}")
                elif c in colls and not writers[c]:
                    add('ROLE_FROM', 'error', f'role {k}', f"derived from {fr}, but nothing writes {c}: nobody can get the role")
        if r.get('assignedBy') == 'invite' and not any(v.get('type') == 'admin' for v in views):
            add('ROLE_INVITE', 'warn', f'role {k}', 'assigned by invitation, but the app has no admin view to invite from')
    for v in views:
        for rk in v.get('roles') or []:
            if rk not in rkeys and rk not in ('anonymous',):
                add('VIEW_ROLE', 'error', f"view {v['key']}", f"restricted to role {rk}, which does not exist")

    # agents: each one can be started -------------------------------------------------------------------------------
    started = {}
    has_new_run = any(v.get('type') == 'new_run' for v in views) or any(b.get('type') == 'view' and b.get('view') in {x['key'] for x in views if x.get('type') == 'new_run'} for v in views for b in v.get('sections') or [])
    for v in views:
        if v.get('type') == 'chat' and T(v.get('source')).startswith('agent:'):
            started.setdefault(T(v['source'])[6:], []).append(f"chat {v['key']}")
    for a in agents:
        if (a.get('role') or 'main') == 'main' and has_new_run:
            started.setdefault(a['key'], []).append('run form')
        for tl in a.get('appTools') or []:
            if tl.get('action') == 'delegate' and tl.get('agent'):
                started.setdefault(tl['agent'], []).append(f"delegated by {a['key']}")
        inl = (a.get('profile') or {}).get('inline') or {}
        orch = inl.get('orchestration') or {}
        for e in orch.get('edges') or []:
            if isinstance(e, dict) and e.get('to'):
                started.setdefault(a['key'], []).append('team')
    for sc in s.get('schedules') or []:
        if sc.get('agent'):
            started.setdefault(sc['agent'], []).append('schedule')
    for tp in s.get('templates') or []:
        if tp.get('agent'):
            started.setdefault(tp['agent'], []).append(f"template {tp.get('key')}")
    for tr in s.get('triggers') or []:
        ag = (tr.get('start') or {}).get('agent')
        if ag:
            started.setdefault(ag, []).append(f"trigger {tr.get('key')}")
    for e in s.get('edges') or s.get('team', {}).get('edges', []) if isinstance(s.get('team'), dict) else s.get('edges') or []:
        if isinstance(e, dict) and e.get('to'):
            started.setdefault(e['to'], []).append('edge')
    for a in agents:   # edge tools: an agent hands work to the agents it delegates to (agentic-graph.ts)
        for d in (a.get('delegates') or []):
            started.setdefault(d if isinstance(d, str) else (d or {}).get('agent'), []).append(f"delegated by {a['key']}")
    # a team runs its steps (chain) or its lead and members (swarm) when a trigger or a template starts it
    team_start = {}
    for tr in s.get('triggers') or []:
        if (tr.get('start') or {}).get('team'):
            team_start.setdefault(tr['start']['team'], []).append(f"trigger {tr.get('key')}")
    for tp in s.get('templates') or []:
        if tp.get('team'):
            team_start.setdefault(tp['team'], []).append(f"template {tp.get('key')}")
    for t in s.get('teams') or []:
        keys = [t.get('lead')] + list(t.get('members') or []) if t.get('mode') == 'swarm' else [st.get('agent') for st in t.get('steps') or []]
        if t.get('key') not in team_start:
            add('TEAM_IDLE', 'error', f"team {t.get('key')}", 'no trigger or template starts this team')
            continue
        for k in keys:
            if k:
                started.setdefault(k, []).append(f"team {t.get('key')}")
    for a in agents:
        if a['key'] not in started:
            add('AGENT_IDLE', 'error', f"agent {a['key']}", f"role {a.get('role') or 'main'}: no form, chat, schedule, template, trigger, team or delegation starts it")
    if any((a.get('role') or 'main') == 'main' for a in agents) and (s.get('inputForm') or {}).get('fields') and not has_new_run:
        add('NO_RUN_FORM', 'error', 'inputForm', 'the run form has fields but no new_run view (or page block) shows it')
    if has_new_run and not any(v.get('type') in ('report', 'history') for v in views):
        add('NO_RESULT', 'error', 'views', 'runs can be started but no report or history view shows their result')

    # triggers --------------------------------------------------------------------------------------------------------
    for tr in s.get('triggers') or []:
        on = tr.get('on') or {}
        k = tr.get('key')
        c = on.get('collection') or (on.get('date') or {}).get('collection')
        fs = fields.get(c, {})
        if on.get('date'):
            f = on['date'].get('field')
            if c in colls and declared.get(c) and f not in fs and f not in SYSTEM_FIELDS:
                add('TRIGGER_FIELD', 'error', f'trigger {k}', f"on a date in {c}.{f}, which does not exist")
            elif f in fs and fs[f].get('type') not in ('date', 'datetime'):
                add('TRIGGER_FIELD', 'error', f'trigger {k}', f"on a date in {c}.{f}, which is a {fs[f].get('type')}, not a date")
        where = dict(on.get('where') or {}, **((on.get('date') or {}).get('where') or {}))
        if c in colls and declared.get(c):
            bad = [f for f in where if f not in fs and f not in SYSTEM_FIELDS]
            if bad:
                add('TRIGGER_FIELD', 'error', f'trigger {k}', f"filters on {bad}, not fields of {c}")
            for f, val in where.items():
                opts = [o if isinstance(o, str) else o.get('value') for o in (fs.get(f, {}).get('options') or [])]
                if opts and isinstance(val, str) and val not in opts:
                    add('TRIGGER_VALUE', 'error', f'trigger {k}', f"waits for {f} = '{val}', not one of its options {opts}: never fires")
            text = json.dumps({x: tr.get(x) for x in ('goal', 'notify', 'write')}, ensure_ascii=False)
            bad = sorted({f for f in PLACE.findall(text) if f not in fs and f not in SYSTEM_FIELDS})
            if bad:
                add('TRIGGER_PLACEHOLDER', 'error', f'trigger {k}', f"uses {{record.{bad[0]}}}… which {c} does not have: {bad}")
            to = (tr.get('notify') or {}).get('to')
            for t in (to if isinstance(to, list) else [to]):
                if isinstance(t, str) and t.startswith('record.') and t[7:] not in fs:
                    add('NOTIFY_TO', 'error', f'trigger {k}', f"emails {t}, not a field of {c}")
                elif isinstance(t, str) and t.startswith('record.') and fs[t[7:]].get('type') not in ('email', 'text'):
                    add('NOTIFY_TO', 'warn', f'trigger {k}', f"emails {t}, a {fs[t[7:]].get('type')} field")
        if on.get('collection') and c not in colls:
            add('TRIGGER_COLL', 'error', f'trigger {k}', f"on unknown collection {c}")
        if on.get('collection') and c in colls and not writers[c]:
            add('TRIGGER_DEAD', 'error', f'trigger {k}', f"on {c}, which nothing writes: never fires")
        link = (tr.get('notify') or {}).get('link')
        if link and T(link).lstrip('/').replace('v/', '', 1) not in vkeys and not T(link).startswith('http'):
            add('LINK', 'error', f'trigger {k}', f"email link to '{link}', not a view")

    # links in pages and header ---------------------------------------------------------------------------------------
    def check_href(where, href):
        h = T(href)
        if not h or h.startswith(('http', 'mailto:', 'tel:', '#')):
            return
        key = h.split('?')[0].lstrip('/')
        key = key[2:] if key.startswith('v/') else key
        if key in ('', 'login', 'account', 'signin', 'logout', 'billing', 'pricing') or key in vkeys:
            return
        add('LINK', 'error', where, f"links to '{href}', not a page of the app")

    hd = s.get('header') or {}
    for l in hd.get('links') or []:
        check_href('header', l.get('href'))
    if hd.get('cta'):
        check_href('header cta', hd['cta'].get('href'))
    for v in views:
        for b in v.get('sections') or []:
            for a in (b.get('actions') or []) + (b.get('buttons') or []):
                if isinstance(a, dict):
                    check_href(f"view {v['key']} {b.get('type')}", a.get('href') or a.get('link'))
            anchors = {x.get('id') for x in v.get('sections') or [] if x.get('id')}
            for a in (b.get('actions') or []):
                h = T(a.get('href') if isinstance(a, dict) else '')
                if h.startswith('#') and len(h) > 1 and h[1:] not in anchors and h[1:] not in vkeys:
                    add('ANCHOR', 'warn', f"view {v['key']}", f"button to {h}, no block with that id")

    # templates, approvals, billing ---------------------------------------------------------------------------------------
    if (s.get('templates') or []) and not any(v.get('type') == 'instances' for v in views) \
            and not any(b.get('type') == 'view' and b.get('view') in {x['key'] for x in views if x.get('type') == 'instances'} for v in views for b in v.get('sections') or []):
        add('TEMPLATE_UI', 'error', 'templates', 'templates exist but no instances view lets a user switch one on')
    for ap in s.get('approvals') or []:
        deciders = [ap.get('role')] if ap.get('role') else (['requester'] if ap.get('decidedBy') == 'requester' else ['admin'])
        apv = [v for v in views if v.get('type') == 'approvals']
        if not apv:
            add('APPROVAL_UI', 'error', f"approval {ap.get('key')}", 'no approvals view: nobody can decide it')
        elif deciders[0] not in ('requester',) and not any(visible(v, deciders[0]) for v in apv):
            add('APPROVAL_UI', 'error', f"approval {ap.get('key')}", f"decided by {deciders[0]}, who cannot open the approvals view")
    b = s.get('billing') or {}
    modes = b.get('modes') or []
    costs = b.get('costs') or {}
    paid = [k for k, c in costs.items() if (c if isinstance(c, (int, float)) else (c or {}).get('estimate') or (c or {}).get('perUnit')) ]
    if 'credits' in modes and paid and not (b.get('packs') or any((p or {}).get('credits') for p in b.get('plans') or [])) and not b.get('signupCredits'):
        add('BUY', 'error', 'billing', f"{paid} cost credits, but there are no packs, no plan with credits and no sign-up credits: nobody can run them")
    for k in costs:
        kind, _, name = k.partition(':')
        if kind == 'agent' and name not in akeys:
            add('COST_REF', 'error', 'billing', f"cost for unknown agent {name}")
    if b.get('plans') and 'subscription' not in modes:
        add('PLAN_MODE', 'warn', 'billing', 'plans declared but subscription is not among the payment modes')
    if (b.get('plans') or b.get('packs')) and not any(v.get('type') == 'account' for v in views):
        add('BUY_UI', 'error', 'views', 'plans or packs for sale, but no account view to buy them')
    for l in s.get('limits') or []:
        a = T(l.get('action'))
        if a.startswith('agent:') and a[6:] not in akeys:
            add('LIMIT_REF', 'error', 'limits', f"limit on unknown agent {a[6:]}")
    for av in anon.get('views') or []:
        if av not in vkeys:
            add('ANON_VIEW', 'error', 'auth.anonymous', f"view {av} does not exist")
    return out


if __name__ == '__main__':
    d = pathlib.Path(sys.argv[1])
    res = {}
    for f in sorted(d.glob('*.vertical.yaml')):
        try:
            res[f.name.replace('.vertical.yaml', '')] = analyse(json.load(open(f)))
        except Exception as e:  # a manifest the analysis cannot read is itself a finding
            res[f.name.replace('.vertical.yaml', '')] = [{'code': 'CRASH', 'sev': 'error', 'where': '-', 'msg': repr(e)}]
    json.dump(res, open(sys.argv[2], 'w'), indent=1, ensure_ascii=False)
