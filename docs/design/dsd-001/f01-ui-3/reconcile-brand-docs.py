"""Reconcile displayed brand prose; keep file paths and historical source records."""
from pathlib import Path
import json
import re
import subprocess

root = Path(__file__).resolve().parents[4]
out = Path(__file__).resolve().parent
paths = subprocess.check_output(
    ['rg', '--files', '-g', '*.md', '-g', '*.yaml', '-g', '*.yml'],
    cwd=root, text=True, encoding='utf-8'
).splitlines()
brand = re.compile(r'(?<![A-Za-z0-9_./\\-])paipak(?:\.com)?(?![A-Za-z0-9_./\\-])', re.I)
protected = re.compile(r'```[\s\S]*?```|`[^`\n]+`|“[^”]*”|https?://[^\s)\]>]+|^\s*(?:source|approval_source):[^\n]*', re.M)
before, changes, remaining = {}, [], []
for relative in paths:
    path = root / relative
    original = path.read_text(encoding='utf-8')
    parts, cursor, count = [], 0, 0
    for match in protected.finditer(original):
        changed, n = brand.subn('papaipak', original[cursor:match.start()])
        parts.extend([changed, match.group()])
        count += n
        cursor = match.end()
    changed, n = brand.subn('papaipak', original[cursor:])
    parts.append(changed)
    count += n
    result = ''.join(parts)
    if count:
        before[relative] = original
        path.write_text(result, encoding='utf-8', newline='')
        changes.append({'path': relative, 'replacements': count})
    if brand.search(result):
        remaining.append(relative)
backup = out / 'before-document-text.json'
if backup.exists():
    previous = json.loads(backup.read_text(encoding='utf-8'))
    for path, content in before.items():
        previous.setdefault(path, content)
    before = previous
backup.write_text(json.dumps(before, ensure_ascii=False, indent=2), encoding='utf-8')
previous_report = out / 'document-reconciliation.json'
if previous_report.exists():
    prior = json.loads(previous_report.read_text(encoding='utf-8'))
    counts = {x['path']: x['replacements'] for x in prior['changes']}
    for item in changes:
        counts[item['path']] = counts.get(item['path'], 0) + item['replacements']
    changes = [{'path': path, 'replacements': count} for path, count in counts.items()]
report = {'brand': 'papaipak', 'files_changed': len(changes),
          'replacements': sum(x['replacements'] for x in changes),
          'changes': changes, 'protected_mentions': remaining,
          'preserved': ['real paths and filenames', 'inline code and fenced source',
                        'quoted source instructions', 'public URLs',
                        'historical JSON snapshots and raster images'],
          'domain': 'papaipak.com; owner confirmed on 2026-11-04; historical source labels and URLs retained',
          'application_code_changed': False}
(out / 'document-reconciliation.json').write_text(
    json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({k: report[k] for k in ['files_changed', 'replacements', 'domain']}, ensure_ascii=False))
