#!/usr/bin/env python3
"""Validate planning structure only; NOT real implementation/test approval."""
from pathlib import Path
import yaml
root = Path(__file__).resolve().parent.parent
registry = yaml.safe_load((root/'docs/decisions/registry.yaml').read_text(encoding='utf-8'))['decisions']
manifest = yaml.safe_load((root/'tasks/design/manifest.yaml').read_text(encoding='utf-8'))['tasks']
ids = [d['id'] for d in registry]
task_ids = [t['id'] for t in manifest]
assert len(ids) == len(set(ids)) == 110, 'Decision count or duplicate failure'
assert len(task_ids) == len(set(task_ids)) == 14, 'Design task count or duplicate failure'
for t in manifest:
    for dep in t.get('depends_on', []):
        assert dep in task_ids, f"{t['id']} unknown dependency {dep}"
    for ref in t.get('decision_refs', []):
        assert ref in ids, f"{t['id']} unknown decision ref {ref}"
    assert (root / 'tasks/design' / f"{t['id']}.md").exists(), f"missing task file {t['id']}"
seen, active = set(), set()
by_id = {t['id']:t for t in manifest}
def visit(k):
    if k in seen: return
    assert k not in active, f'cycle involving {k}'
    active.add(k)
    for d in by_id[k].get('depends_on',[]): visit(d)
    active.remove(k); seen.add(k)
for i in task_ids: visit(i)
print(f'PASS structure: {len(ids)} decision records; {len(task_ids)} design tasks; no missing refs/dependency cycles')
print('NOTE: Does not verify source provenance, approved visual baselines, test runs, or actual task readiness.')
