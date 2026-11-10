"""Bulk run of the app builder (profile 69) on clone descriptions.

python3 runner.py <descriptions.jsonl> <outdir> [--parallel N] [--only slug1,slug2]
Each line: {"slug": ..., "startup": ..., "classe": ..., "goal": ...}
Writes <outdir>/<slug>.json = {slug, eids, status, manifest|needs|error, problems, fixed}
API key read from the WEBROBOT_API_KEY environment variable (key_id:secret), never printed.
"""
import json, re, sys, time, subprocess, threading, urllib.request, pathlib, argparse
from concurrent.futures import ThreadPoolExecutor

import os
KEY = os.environ['WEBROBOT_API_KEY']  # key_id:secret
API = 'https://api.webrobot.eu/api/webrobot/api'
import os
KIT = pathlib.Path(os.environ.get('KIT', '${VERTICAL_KIT_DIR}'))
PROFILE = int(os.environ.get('PROFILE', '69'))
TSV = os.environ.get('TSV', 'tsvalidate.ts')
lock = threading.Lock()


def call(path, body=None):
    req = urllib.request.Request(API + path, data=json.dumps(body).encode() if body is not None else None,
                                 headers={'X-API-Key': KEY, 'Content-Type': 'application/json'},
                                 method='POST' if body is not None else 'GET')
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read() or b'{}')


def lenient(s):
    s = s.strip()
    for cut in range(0, 4):
        t = s[:len(s) - cut] if cut else s
        try: return json.loads(t)
        except Exception: pass
    depth = 0; ins = False; esc = False
    for i, ch in enumerate(s):
        if ins:
            if esc: esc = False
            elif ch == '\\': esc = True
            elif ch == '"': ins = False
        elif ch == '"': ins = True
        elif ch in '{[': depth += 1
        elif ch in '}]':
            depth -= 1
            if depth == 0:
                try: return json.loads(s[:i + 1])
                except Exception: return None
    return None


def extract(result):
    found = []; strings = []
    def walk(v, d=0):
        if d > 8 or v is None or found: return
        if isinstance(v, str):
            s = v.strip()
            if s[:1] in '{[':
                j = lenient(s)
                if j is not None: walk(j, d + 1); return
            strings.append(s)
        elif isinstance(v, list):
            for x in v: walk(x, d + 1)
        elif isinstance(v, dict):
            if v.get('kind') == 'VerticalApp' and v.get('spec'): found.append(v); return
            for x in v.values(): walk(x, d + 1)
    walk(result)
    if found: return {'manifest': found[0]}
    for s in strings:
        m = re.search(r'```(?:json)?\s*([\s\S]*?)```', s)
        body = m.group(1) if m else s[max(0, s.find('{')):]
        j = lenient(body) if body else None
        if isinstance(j, dict) and j.get('kind') == 'VerticalApp': return {'manifest': j}
        n = re.search(r'^NEEDS:\s*(.+)$', s, re.M)
        if n: return {'needs': n.group(1).strip()}
    return {'raw': (strings[-1] if strings else json.dumps(result))}


def validate(manifest, tmpdir):
    p = tmpdir.resolve() / f"_v_{manifest.get('metadata', {}).get('slug', 'x')}_{threading.get_ident()}.json"
    p.write_text(json.dumps(manifest))
    r = subprocess.run(['python3', str(KIT / 'scripts/validate.py'), str(p)], capture_output=True, text=True, cwd=KIT)
    ts = subprocess.run([str(KIT / 'node_modules/.bin/tsx'), str(pathlib.Path(__file__).parent / TSV), str(p)], capture_output=True, text=True)
    p.unlink()
    try: tserr = ['runtime: ' + e for e in json.loads(ts.stdout.strip() or '[]')]
    except Exception: tserr = []
    out = (r.stdout + r.stderr).strip().splitlines()
    probs = [l.strip(' -') for l in out if l.strip() and not re.search(r'\bOK\b', l) and not l.startswith('FAIL ')]
    py = [] if r.returncode == 0 else (probs or ['validator failed'])
    return py + [e for e in tserr if e[9:] not in ' '.join(py)]


def run_one(goal, spec='{}'):
    st = call('/agentic/start', {'profileId': PROFILE, 'organizationId': '2', 'inputs': {'goal': goal, 'current_spec': spec}})
    eid = st['executionId']; t0 = time.time()
    while True:
        time.sleep(15)
        try: r = call(f'/agentic/{eid}')
        except Exception as e:
            if time.time() - t0 > 1800: return eid, {'error': f'poll: {e}'}
            continue
        s = str(r.get('persistedStatus') or r.get('status') or '').upper()
        if s in ('COMPLETED', 'SUCCEEDED'): return eid, {**extract(r.get('result')), 'tokens': r.get('tokens') or r.get('usage')}
        if s in ('FAILED', 'ERROR', 'STOPPED'): return eid, {'error': r.get('errorMessage') or s}
        if time.time() - t0 > 1800: return eid, {'error': 'timeout 30 min'}


def job(item, outdir):
    out = outdir / f"{item['slug']}.json"
    if out.exists(): return
    rec = {'slug': item['slug'], 'startup': item['startup'], 'classe': item['classe'], 'goal': item['goal'], 'eids': []}
    try:
        eid, res = run_one(item['goal']); rec['eids'].append(eid)
        if 'error' in res and 'memory' in str(res['error']).lower():
            rec['oom_first'] = res['error'][:200]; time.sleep(60)
            eid, res = run_one(item['goal']); rec['eids'].append(eid)
        if 'raw' in res and res['raw'].lstrip().startswith('{'):
            try: json.loads(res['raw']); perr = 'not a VerticalApp'
            except Exception as e: perr = str(e)
            rec['malformed_first'] = perr
            goal2 = (item['goal'] + f"\n\nYour previous answer was not valid JSON ({perr}). Answer again with the whole manifest "
                     "as one valid JSON object, checking that every bracket is balanced.")
            eid, res = run_one(goal2); rec['eids'].append(eid)
        rec.update(res)
        if 'manifest' in res:
            probs = validate(res['manifest'], outdir); rec['problems_first'] = probs
            if probs:
                goal2 = (item['goal'] + "\n\nYour previous answer (the manifest given as current) failed validation. Fix exactly these "
                         "problems, keep everything else, and answer the whole corrected manifest:\n" + '\n'.join(f'- {p}' for p in probs[:30]))
                eid2, res2 = run_one(goal2, json.dumps(res['manifest'])); rec['eids'].append(eid2); rec['fixed'] = True
                if 'manifest' in res2: rec['manifest'] = res2['manifest']; rec['problems'] = validate(res2['manifest'], outdir)
                else: rec['problems'] = probs; rec['fix_result'] = res2
            else: rec['problems'] = []
    except Exception as e:
        rec['error'] = f'{type(e).__name__}: {e}'
    out.write_text(json.dumps(rec, ensure_ascii=False, indent=1))
    with lock:
        print(item['slug'], 'manifest' if 'manifest' in rec else ('NEEDS' if 'needs' in rec else 'ERR'),
              len(rec.get('problems', [])) if 'manifest' in rec else rec.get('needs') or rec.get('error', '')[:120], flush=True)


if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('outdir')
    ap.add_argument('--parallel', type=int, default=4); ap.add_argument('--only', default='')
    a = ap.parse_args(); outdir = pathlib.Path(a.outdir); outdir.mkdir(parents=True, exist_ok=True)
    items = [json.loads(l) for l in open(a.src) if l.strip()]
    if a.only: items = [i for i in items if i['slug'] in a.only.split(',')]
    with ThreadPoolExecutor(a.parallel) as ex:
        list(ex.map(lambda i: job(i, outdir), items))
    print('done', len(items))
