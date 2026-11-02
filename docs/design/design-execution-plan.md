# paipak.com — Design Execution Before Frontend Coding

**Status:** Owner-adopted planning workflow as of 2 November 2026 (Asia/Bangkok). No visual assets are approved screenshots. Adoption does not start design/implementation tasks or approve their deliverables. This workflow supersedes the earlier homepage-first acceptance sequence; the existing mock homepage is implementation evidence to reconcile against the adopted direction.

## Workflow

1. Existing approved design decisions establish constraints.
2. User manually selects one Design Task and discusses only that task with an AI Design Agent.
3. Agent reviews linked specs, requests only genuinely undecided design details, prepares design deliverables.
4. User reviews and explicitly approves final high-fidelity screens and responsive/interaction states.
5. Approved reference and version are registered.
6. User manually selects related implementation task; Coding Agent implements exact approved design and tests it.
7. No autonomous continuation to the next task.

## Important distinctions

- Selected design direction is not final high-fidelity design.
- Candidate image/mockup is not an approved baseline.
- Design deliverables are separate from coded UI components.
- Backend/database work without visual dependencies may run concurrently.
- Design-token implementation (`FND-002`) must use an approved token specification (`DSD-001`); do not require finished page designs to bootstrap.
- `UID-009` signoff is per relevant screen/component; it is not a demand that every screen be approved before any frontend coding starts.

## Design agent handoff script

> Work on Task ID [ID] only. Read the linked Approved Decisions, Design Contract, previous approved artifacts, and stated dependencies. Briefly confirm locked constraints; ask only for missing details within this task, preferably one decision at a time. Do not reopen Pink Accent Premium or selected layouts. Produce desktop/mobile designs and states as specified. Present for my explicit approval. Do not code or select another task unless I ask.

## Coding agent handoff script

> Work on Implementation Task [ID] only. Read AGENTS.md, the Task Packet, and linked approved design artifacts/version. Verify dependencies and avoid altering the visual design. Implement scope, execute relevant tests, and show real evidence. Ask me to approve changes to design/scope or risky transactions. Do not begin the next task on your own.
