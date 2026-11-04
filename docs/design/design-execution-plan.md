# papaipak — Design Execution Before Frontend Coding

**Status:** Owner-adopted planning workflow as of 2 November 2026 (Asia/Bangkok). No visual assets are approved screenshots. Adoption does not start design/implementation tasks or approve their deliverables. This workflow supersedes the earlier homepage-first acceptance sequence; the existing mock homepage is implementation evidence to reconcile against the adopted direction.

## Workflow

1. Existing approved design decisions establish constraints.
2. User manually selects one Design Task and discusses only that task with an AI Design Agent.
3. Agent reviews linked specs, requests only genuinely undecided details and presents the task plan/scope. The owner explicitly approves G0 before creating or revising UI Design artifacts, including direction studies, Wireframes, High-Fi, tokens and component/state designs. Then the agent prepares only the authorized deliverables, subject to the applicable G1–G4 gates. Existing task-specific authorizations remain valid within their approved scope; do not request the same approval again.
4. User reviews and explicitly approves final high-fidelity screens and responsive/interaction states.
5. Approved reference and version are registered.
6. User manually selects related implementation task; Coding Agent implements exact approved design and tests it.
7. No autonomous continuation to the next task.

### Order amendment — 3 November 2026

The owner selected Visual Direction before Wireframe. After UXD-001, DSD-001 prepares direction alternatives inside the approved brand, page-layout and UX/business constraints; the owner approves a named direction/version at G1. UXD-002 then creates/revises and submits responsive Wireframe at G2. G3 covers High-Fi/components and G4 final visual baseline/handoff. Remaining DSD-001 token specs are still required for downstream component/frontend work; the G1 direction approval alone is not token or final screen approval.

Keep UXD-002 review-5 as existing draft evidence awaiting owner review. Before another wireframe revision or G2 acceptance, obtain G1 and review alignment within the user-selected task. This document change starts no task and changes no prior deliverable approval.

Before each Design Task, read [Governance README](governance/README.md) and `01`–`05`, then use `06` alongside the Task Packet. The owner approved the integrated v1.0 kit as the project-wide standard on 3 November 2026. Each task's design/version still requires explicit owner approval before related frontend implementation. Mitr remains primary, supplementary fonts require approval before use, and `07` is only an illustrative review example.

## Important distinctions

- Selected design direction is not final high-fidelity design.
- Candidate image/mockup is not an approved baseline.
- Design deliverables are separate from coded UI components.
- Backend/database work without visual dependencies may run concurrently.
- Design-token implementation (`FND-002`) must use an approved token specification (`DSD-001`); do not require finished page designs to bootstrap.
- `UID-009` signoff is per relevant screen/component; it is not a demand that every screen be approved before any frontend coding starts.

## Design agent handoff script

> Work on Task ID [ID] only. Read the linked Approved Decisions, Design Contract, previous approved artifacts, and stated dependencies. Briefly confirm locked constraints; ask only for missing details within this task, preferably one decision at a time. Do not reopen Pink Accent Premium or selected layouts. Present the task plan/scope and wait for my explicit G0 approval before creating or revising UI Design artifacts. Use existing authorization if this work is already explicitly approved within the same scope. Then produce the authorized desktop/mobile designs and states, observing the applicable gates. Present the resulting design/version for my explicit approval before Frontend. Do not code or select another task unless I ask.

## Coding agent handoff script

> Work on Implementation Task [ID] only. Read AGENTS.md, the Task Packet, and linked approved design artifacts/version. Verify dependencies and avoid altering the visual design. Implement scope, execute relevant tests, and show real evidence. Ask me to approve changes to design/scope or risky transactions. Do not begin the next task on your own.
