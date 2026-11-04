# papaipak — Project Scope & Agent Handoff Pack

**Purpose:** Copy the contents of this folder into the root of your papaipak project. This is the **planning contract for separate AI-agent conversations**, NOT an instruction to implement the site automatically.

**Owner adoption — 2 November 2026 (Asia/Bangkok):** The project owner confirmed that this entire pack is the latest project direction and supersedes conflicting earlier directions. It is now the planning contract for this repository. Historical source provenance, original assets and final visual approvals remain outstanding; adoption does not complete or start tasks. The imported entrypoint is stored as `AGENTS.handoff.md`; the active `AGENTS.md` integrates this direction with local application/runtime safeguards. The legacy mock homepage is not an approved visual baseline for the new direction.

## What is present
- The owner approved [UX/UI Design Governance Kit v1.0](docs/design/governance/README.md) as the project-wide standard on 3 November 2026, including Mitr primary with supplementary fonts subject to approval, Visual Direction before Wireframe, and the illustrative-only Homepage review example. Each task's design/version still requires explicit owner approval before related frontend implementation. Current order and existing-draft handling are in `docs/roadmap/task-order.md`.
- **110 reconstructed decision records across 11 sections** (`docs/decisions/registry.yaml`) plus 7 open issues. The owner has adopted their planning direction; historical source provenance and final visual baselines are not independently verified.
- **14 design task packets**, manual handoff (`tasks/design/`), with explicit dependencies and UX/UI approval gate for frontend.
- High-level **implementation task boundaries** (`tasks/implementation/`); detailed technical choices are discussed separately inside each task chat.
- `AGENTS.md` entrypoint, shared `docs/design/approved-ux-ui-scope.md`, reusable `tasks/templates/task-conversation.md`, validation script.
- Existing audit notes, reference inventory (unverified images only), and candidate traceability mapping.

## How to use
1. Unzip to the **repository root** (avoid nesting another `paipak-project-handoff/` directory inside the code tree).
2. Open `docs/roadmap/task-order.md` and select a single Task ID, e.g. `UXD-001`.
3. In a separate AI **Design** Agent chat, attach/read `AGENTS.md`, `tasks/design/UXD-001.md`, relevant decisions and `tasks/templates/task-conversation.md`.
4. Discuss only that task's implementation details with the agent; approve the plan before the agent makes its deliverables.
5. Explicitly approve final designs/screenshots **before the connected frontend implementation tasks**. Backend work independent of final UI may proceed separately.
6. Keep task statuses as *planned* until actual evidence and owner approval exist.

## Important limitations
- `tasks/design/manifest.yaml` contains **14 design tasks**, not 15; former README mismatch corrected.
- No screenshot in this pack should be treated as an approved reference baseline. `docs/design/reference-inventory.yaml` is a candidate inventory; source image ownership/identity must be confirmed.
- No Supabase/Cloudflare/BeamCheckout accounts, Git branches or CI have been configured by this pack.
- The `approved` label on individual decision entries records a user selection, **not completed implementation or formal audit**.
- Security: no live secret values committed, and payment details not invented.

## Recommended starting task
`UXD-001 — User journeys and information architecture audit`; independent `DSD-001` can start after its listed prerequisites (or the owner explicitly revises dependency).

Run local structural checks: `python scripts/validate-handoff.py` (requires PyYAML).
