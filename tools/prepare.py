"""Test copy of the manifests for the functional test: every inline agent and every team gets a fake profile ref (as if
published), so the runtime starts them against the mock platform. Nothing else changes.

python3 prepare.py <manifests dir> <out dir>
"""
import json, pathlib, sys

src, dst = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
dst.mkdir(parents=True, exist_ok=True)
for f in dst.glob('*.vertical.yaml'):
    f.unlink()
for i, f in enumerate(sorted(src.glob('*.vertical.yaml'))):
    m = json.load(open(f))
    s = m.get('spec', {})
    m['metadata']['slug'] = f.name.replace('.vertical.yaml', '')   # unique host per app (two apps may share a slug)
    for j, a in enumerate(s.get('agents') or []):
        p = a.get('profile') or {}
        if p.get('ref') is None:   # published: the inline definition becomes a platform profile (ref only)
            a['profile'] = {'ref': 900000 + i * 100 + j}
    for j, t in enumerate(s.get('teams') or []):
        if (t.get('profile') or {}).get('ref') is None:
            t['profile'] = {'ref': 950000 + i * 100 + j}
    json.dump(m, open(dst / f.name, 'w'), ensure_ascii=False)
print('prepared', i + 1)
