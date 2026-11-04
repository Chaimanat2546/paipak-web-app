# Manual design-first execution order

**No automatic task chaining.** User initiates one task in one separate design-agent conversation.

## Owner-confirmed order amendment — 3 November 2026

The owner selected Visual Direction before Wireframe and subsequently approved [Design Governance Kit v1.0](../design/governance/README.md) as the project-wide standard on 3 November 2026. Each task's design/version still requires explicit owner approval before related frontend implementation. Approved product requirements, selected layouts and UX/business rules remain constraints for direction exploration.

Order: UX/IA → G1 Visual Direction in DSD-001 → G2 responsive Wireframe in UXD-002 → component specs → High-Fi → final review/approval → explicitly selected implementation. Remaining DSD-001 token work can continue after G1; Wireframe requires the approved direction output, not completion of the entire token specification.

## UX and direction track
- `UXD-001` journeys & information architecture
- `DSD-001` first proposes Visual Directions within the adopted brand/layout/UX constraints; the owner approves `visual-direction.md` and its version at G1 before Wireframe. Keep Mitr primary; supplementary fonts require separate approval before use.
- `UXD-002` detailed responsive wireframes (after approved UXD-001 and the owner-approved DSD-001 G1 direction/version)
- `UXD-003` usability prototype/user test spec (after UXD-002; can run while visual track proceeds)

## Visual foundation
- `DSD-001` remaining visual token specs (after UXD-001; direction is approved first as above)
- `DSD-002` component state & interaction design (after DSD-001 + UXD-002)

## High-fidelity page design
- `UID-001` home
- `UID-002` results
- `UID-003` detail/availability
- `UID-004` checkout/confirmation
- `UID-005` authentication/account
- `UID-006` favorites/bookings
These can be separate conversations and progress in parallel after prerequisites, without altering shared design tokens.

## Final design review
- `UID-007` empty/loading/error/offline states (requires high-fidelity screens)
- `UID-008` accessibility and responsive review
- `UID-009` final visual baseline approval and developer handoff

## Implementation gate
Coding Agent may implement UI only after its required approved design output(s), not merely the approval of the planning direction. Backend schema, nonvisual domain contracts and tooling may be planned/implemented separately if they do not depend on unfinished UI designs. See `tasks/design/implementation-gates.yaml` and `tasks/implementation/scope-backlog.md`.

## Existing work at the order change

UXD-001 review-2 remains approved. UXD-002 review-5 was produced under the earlier order and remains retained as a draft awaiting owner review. DSD-001 is still planned/not started; no G1 direction output is implied by adoption of the brand or import of the kit. Before new wireframe revisions and final G2 acceptance, obtain the G1 direction/version and review review-5 against it within a user-selected UXD-002 task. Record alignment or required revisions; do not regenerate screens, invalidate prior UX decisions or approve the draft automatically.

## Current design checkpoint — 5 November 2026

DSD-001 is in progress. The owner accepted Home Desktop-r15 combined appearance and foundation-3-desktop confirmed Desktop specification with proposed/open/deferred items retained. The earlier not-started description above records the state at the order amendment, not the current checkpoint. OPEN-001 and remaining accessibility/responsive/runtime items remain open; UXD-002 review-5 remains pending; no Frontend or automatic next task is authorized. See [DSD-001](../../tasks/design/DSD-001.md) and its version-specific approval records.
