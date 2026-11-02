# paipak.com — agent entrypoint (planning scope)

**Execution mode: USER-INITIATED, ONE TASK PER CONVERSATION.** On 2 November 2026 (Asia/Bangkok), the owner adopted this entire handoff pack as the latest project direction, superseding conflicting earlier directions. The existing application remains a legacy mock homepage; adoption does not approve final visual artifacts, historical source provenance, completed implementation or release. Read the active repository entrypoint `AGENTS.md` for current integration and local runtime safeguards.

## Required steps for any agent
1. Ask the user which **Task ID** they want to discuss, unless already given. Do not autonomously select the next task.
2. Read the relevant Task Packet at `tasks/design/<ID>.md` (for design work) or the high-level implementation backlog; check `tasks/design/manifest.yaml` for prerequisites.
3. Read applicable current entries in `docs/decisions/registry.yaml`, and flags in `docs/decisions/open-decisions.yaml` and `docs/decisions/superseded.yaml`. Registry's *decision status approved* means user selected that direction; it does **not** mean the reconstructed record or screenshots received formal baseline sign-off.
4. Summarize locked scope, exclusions, dependencies and deliverables. Discuss **task-local undecided details** with the user; do not reopen approved global decisions without explicit permission.
5. Create artifacts or code **only after the user explicitly authorizes that work within that task conversation**. The master planning chat only defines high-level scope.
6. Provide real evidence, mark items not tested as not tested, and ask the user to approve finished designs. Never self-approve or run unrelated next tasks.

## Design lock
- Brand: `#072D59` navy, `#DBF2FC` light blue, `#FD6E88` pink; white primary background; font Mitr.
- Product: modern vibrant Thai pool-villa consumer marketplace, *not* a SaaS dashboard; cinematic villa imagery; gentle rounding.
- Browse villas without specifying dates; 7 approved categories; 4-column dense cards on sufficiently wide desktop; Overlay Property Cards with carousel/favorite; suggested search chips in results; Apply Filters interaction.
- Page templates include Premium Marketplace Home, Search Results, Premium Booking Focus Detail, Premium Member Checkout, Adaptive Authentication, Tabbed My Bookings, Hybrid Confirmation, Favorites Grid, Modern Split Profile, Contextual Premium feedback.
- White text on `#FD6E88` does not meet WCAG 2.2 AA for normal text. **Keep visual reference as approved, do not silently change branding, and do not claim accessible CTA finalized; escalate decision.**

## Architecture lock (for later coding tasks)
- One Next.js repository; modular features + shared design system; TypeScript strict with user constraint no `any`/`unknown`; Tailwind; Supabase separate project; Cloudflare; BeamCheckout requires provider verification.
- Hybrid BFF: server components for suitable reads, route handlers for HTTP/webhooks, server-only domain services for sensitive business logic.
- Booking requires member login; preserve pre-login booking intent; recheck quote/availability; protect concurrency; separate booking and payment statuses; validate webhook and idempotency.
- Preview/Staging must not use production database/live payment credentials. Do not deploy production or rotate secrets autonomously.

## Source-of-truth and permissions
- `docs/decisions/registry.yaml` and task packets are the owner-adopted planning contract as of 2 November 2026. Original reference assets, source-level provenance checks and final visual/task approvals remain pending; planned tasks have not been executed merely by adopting the pack.
- Never fabricate approved screenshots, test results, CI run IDs, credentials, provider endpoints, or task status.
- If file/scope needs modification outside your selected task, propose a scope change and ask permission.
- Respect dependency gate: a task is not truly Ready just because its manifest has no dependencies; required outputs must be approved.
