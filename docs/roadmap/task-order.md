# Manual design-first execution order

**No automatic task chaining.** User initiates one task in one separate design-agent conversation.

## UX track
- `UXD-001` journeys & information architecture
- `UXD-002` detailed responsive wireframes (after UXD-001)
- `UXD-003` usability prototype/user test spec (after UXD-002; can run while visual track proceeds)

## Visual foundation
- `DSD-001` visual token specs (per manifest, after UXD-001)
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
