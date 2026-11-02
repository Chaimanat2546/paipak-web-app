# Implementation boundaries — planning only (not executable task packets)

These are **high-level** Coding Agent scope bundles; detailed implementation choices are to be discussed in separate task-specific coding-agent chats. Do not treat as authorized work or as an approved technical specification.

| Area | Scope | Required design dependency |
|---|---|---|
| FND-001 Bootstrap | Next.js strict TS, Tailwind, module boundaries, test harness | none (respect architecture decisions) |
| FND-002 Tokens implementation | Implement approved typography/colors/spacing/motion | DSD-001 approval |
| FND-003 Workshop tooling | Storybook and visual test harness | Can set up tool independently; approved baselines require DSD-002/UID-009 |
| FND-004 Shared UI | Buttons, input, popover, modal, cards | DSD-002 approval; visual baselines as appropriate |
| DATA-001 / DATA-002 | Property read model, local Supabase, migrations/RLS | Domain contracts; may run parallel to design |
| DISC (Phase 1) | Home, categories, results, search/filter/pagination | UID-001 + UID-002 approval for corresponding pages |
| PROP (Phase 2) | Detail, gallery, booking panel, availability read | UID-003 approval; server contracts independent |
| MEM (Phase 3) | Adaptive Auth, profile, favorites, bookings | UID-005 + UID-006 approval for corresponding pages |
| BOOK/PAY (Phase 4) | Holds, quote, transactions, payment integration | UID-004 approval for Checkout UI; payment external contract verification |
| REL (Phase 5) | Staging, gates, launch, monitoring and recovery | all required testing evidence and human approval |

**Hard rules:** do not connect Preview/Staging to live payment or production DB; do not claim payment endpoint names/behavior until verified; no live deployment without owner approval; no frontend completion before required final visual approval.
