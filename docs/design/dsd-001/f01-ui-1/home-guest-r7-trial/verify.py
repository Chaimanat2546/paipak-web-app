import json
from pathlib import Path

folder = Path(__file__).parent
before = json.loads((folder / 'before-snapshot.json').read_text(encoding='utf-8'))
after = json.loads((folder / 'after-snapshot.json').read_text(encoding='utf-8'))
candidate = json.loads((folder.parent / 'header-r7-guest/layer-snapshot.json').read_text(encoding='utf-8'))

def nodes(value):
    if isinstance(value, dict):
        if 'id' in value:
            yield value
        for item in value.values():
            yield from nodes(item)
    elif isinstance(value, list):
        for item in value:
            yield from nodes(item)

def find(value, node_id):
    return next(n for n in nodes(value) if n['id'] == node_id)

def semantic(value):
    if isinstance(value, dict):
        return {k: semantic(v) for k, v in value.items() if k not in ('id', 'name')}
    if isinstance(value, list):
        return [semantic(v) for v in value]
    return value

def artwork(node):
    return {k: v for k, v in node.items() if k not in ('x', 'y', 'name', 'placeholder')}

main = find(after, 'A1ks07')
header = find(after, 'awwwD')
checks = {
    'main_home_at_canvas_origin': main['x'] == 0 and main['y'] == 0,
    'main_home_body_unchanged_including_ids': main['children'][1:] == find(before, 'A1ks07')['children'][1:],
    'header_matches_guest_r7_candidate': semantic(header) == semantic(find(candidate, 'SBf2x')),
    'guest_sign_in_label_present': any(n.get('content') == 'เข้าสู่ระบบ' for n in nodes(header)),
    'no_profile_avatar': not any(n.get('icon') == 'user-round' for n in nodes(header)),
    'header_height_124': header['height'] == 124,
    'old_header_preserved_in_history': find(find(after, 'Xvgbv'), 'QUgsg') == find(before, 'QUgsg'),
    'original_a_study_artwork_preserved': all(artwork(find(before, i)) == artwork(find(after, i)) for i in ('diQ8i', 'vRrpq')),
    'no_path_geometry_placeholders': not any(n.get('geometry') == '...' for n in nodes(after)),
}
result = {'version': 'Home-Guest-Header-r7-trial', 'status': 'pending_owner_review', 'checks': checks, 'visual_review': 'Opened exported full Home PNG; sign-in button visible with Hero and villa cards.', 'scope': 'Static Home Desktop only', 'OPEN-001': 'open'}
(folder / 'verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
assert all(checks.values()), 'Trial verification failed'
