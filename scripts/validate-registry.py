#!/usr/bin/env python3
import yaml, pathlib, collections, sys
root=pathlib.Path(__file__).resolve().parents[1]
r=yaml.safe_load((root/'docs/decisions/registry.yaml').read_text(encoding='utf-8'))['decisions']
sections=['PRINCIPLES','UX_FOUNDATION','WIREFRAME','VISUAL','TOKENS','COMPONENTS','PAGES','VALIDATION','IMPLEMENTATION','EXECUTION','MATERIALIZATION']
errors=[]; ids=[x['id'] for x in r]
if len(ids)!=len(set(ids)): errors.append('duplicate IDs')
for s in sections:
    nums=sorted(x['topic_number'] for x in r if x['section']==s)
    if nums!=list(range(1,11)):errors.append(f'{s}: expected 1..10, got {nums}')
for x in r:
    for k in ('id','title','status','source','version','section','topic_number'):
        if k not in x: errors.append(f'{x.get("id","?")}: missing {k}')
    if x.get('status') not in ('approved','proposed','open','superseded'):errors.append(f'{x.get("id")}: illegal status')
print(f'Registry records: {len(r)}; 11-section topic coverage: {"PASS" if not errors else "FAIL"}')
for e in errors:print('ERROR',e)
sys.exit(bool(errors))
