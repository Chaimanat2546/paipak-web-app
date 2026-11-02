# paipak.com — project workflow

## Current source of truth

- On 2 November 2026 (Asia/Bangkok), the project owner explicitly adopted the entire imported handoff pack as the latest project direction: “ยึดตามเอกสารใหม่ทั้งหมดเพราะพึ่งได้ข้อสรุปใหม่วันนี้”.
- Use `docs/decisions/registry.yaml`, `docs/decisions/open-decisions.yaml`, `docs/decisions/superseded.yaml`, `docs/design/approved-ux-ui-scope.md`, and the task packets in `tasks/` as the current planning contract. Where earlier project directions conflict, the imported direction takes precedence.
- This adoption approves project direction and planning workflow. It does not certify historical source provenance, approve final screenshots, complete tasks, resolve listed open decisions, or authorize automatic implementation or deployment.
- `AGENTS.md` is the active repository entrypoint. `AGENTS.handoff.md` contains the imported planning guidance and must be read together with this file; local runtime and application safeguards below remain applicable where they do not conflict with the latest direction.

## Repository boundary

- This repository contains the application plus the owner-adopted handoff documents. `package.json`, `app/`, `public/`, config and tests live at its root; planning documents, task packets and validators live in `docs/`, `tasks/` and `scripts/`.
- Original reference captures, Pencil files and other external design archives are not included merely because their names appear in the documents. Do not assume `../docs/` exists after cloning.
- The old `paipak.pen` / poolapoolvilla.com implementation is historical reference where it conflicts with the latest direction. Final visual source files and approved screenshot versions must be registered through the new design workflow; do not invent or certify missing assets.
- Reference HTML, images, branding, business claims and contacts are research evidence, not authorized production assets.

## Current authorization and stage

- Existing dependencies, local Workers testing and homepage mock implementation were authorized on 29–30 October 2026. Preserve that work as implementation evidence; the blue/yellow Kanit homepage is not the approved visual baseline for the new direction.
- Follow `docs/roadmap/task-order.md`: UX journeys/IA → responsive wireframes and visual foundations → component specifications → page designs → relevant design review/approval → explicitly selected implementation tasks. This supersedes the previous homepage-first acceptance sequence as the project plan.
- Execution is USER-INITIATED, ONE TASK PER CONVERSATION. For design or implementation, use the Task ID selected by the user; if absent, ask which task to discuss. Do not autonomously select or chain tasks. Explicitly requested repository maintenance/document reconciliation can proceed without selecting a design task.
- Read the selected task packet, `tasks/design/manifest.yaml`, applicable decisions and open issues; summarize scope, dependencies, deliverables and acceptance criteria. Discuss only unresolved task-local details and do not reopen adopted global directions without an explicit change request.
- Create design artifacts or application code only after the user authorizes that work in the selected task. Obtain explicit approval of the relevant final design/version before dependent frontend implementation; task readiness requires approved outputs, not merely existing dependency IDs.
- Nonvisual backend/tooling work may be selected independently when its contracts and dependencies are ready. The plan itself does not authorize SDK integration, cloud resources, analytics, payment or deployment.
- Report actual evidence and untested items. Do not mark tasks complete or visual references approved from planning adoption alone.

## Adopted design and architecture

- Brand: navy `#072D59`, light blue `#DBF2FC`, pink `#FD6E88`, white primary background and Mitr typography. Use the complete token/component direction in the new documents; old blue/yellow Kanit styling is implementation to be reconciled in authorized tasks.
- Build a modern, vibrant Thai pool-villa consumer marketplace with cinematic imagery and gentle rounding. Follow the adopted page layouts rather than generic SaaS dashboard patterns.
- Browsing does not require dates or login. Use seven villa category shortcuts, four-column dense cards when space permits, image-led property cards with carousel/favorite, Suggested Search Chips and explicit Apply Filters behavior as specified.
- Owner-confirmed UXD-001 clarifications on 2 November 2026: Favorites requires login with no temporary Guest favorites; preserve Booking Intent only during uninterrupted navigation/authentication and never recover it after reload, tab close or intent/session expiry; use one total guest count without adult/child separation plus pets separately. Cancelling Auth returns to its origin with still-active selections. Supporting Footer links do not authorize a listing-owner portal. See `docs/design/uxd-001/edge-flows.md` Q-01 through Q-05.
- White normal text on `#FD6E88` remains an open contrast issue. Keep the adopted palette; resolve the accessible CTA treatment in the relevant design task before claiming it finalized.
- Use one Next.js repository with modular features and a shared design system. For authorized backend work, use server components for suitable reads, route handlers for APIs/webhooks and server-only domain services for sensitive logic.
- Booking requires login with preserved booking intent, price/availability revalidation, concurrency protection, separate booking/payment states, verified webhooks and idempotency. Exact hold and catalog authority policies remain open; do not invent provider behavior.

## Wireframe authoring rules

- For future wireframe creation or revisions, read and follow [Wireframe Guidelines](docs/design/wireframe-guidelines.md).
- Apply these rules within the selected task's existing scope, sequence and dependencies. Owner-approved project decisions take precedence over generic examples or open-question examples in the guidelines. This addition does not authorize revising existing artifacts or starting another task.

## Application constraints

- Keep Next.js, Tailwind CSS and TypeScript strict. Do not substitute a different application framework.
- Use shadcn/ui (Radix) as the base UI primitives and Kibo UI for suitable composed components, as requested on 30 October 2026. Preserve paipak styling via `app/globals.css` semantic tokens and component variants. Reuse `components/ui/`, `components/kibo-ui/`, and `lib/utils.ts` before creating new primitives; add only components needed by the authorized scope.
- No explicit `any` or `unknown` types in Application code. Do not bypass errors with type suppression, unsafe assertions or non-null assertions. Use typed fixtures, validated inputs, discriminated unions and narrowing.
- Use Mock Data first. Installed Supabase packages do not authorize SDK calls or real Auth, Database, Storage or Admin integration.
- Membership, booking, profile, favorites and booking history are planned capabilities, not existing backend features. Additional legacy requirements must be reconciled with the adopted task scope rather than silently added to implementation.
- Beam Checkout integration is a later, separately authorized phase.
- Keep future paipak Cloudflare/Supabase resources, credentials and bindings isolated from other sites. Never copy another site's environment files.
- Keep secrets out of source control and client bundles. Do not request credentials for mock/local runtime work.
- Do not submit real booking, payment, contact, newsletter, owner or recruitment forms while inspecting a reference website. Do not bypass protections or access unauthorized data.

## Local runtime and verification

- Use npm and preserve `package-lock.json`. Consult [README.md](README.md) for setup and commands.
- `npm run dev` and `npm run build` use Next.js tooling; neither proves Workers runtime compatibility.
- `npm run preview` builds with OpenNext and starts local Wrangler/workerd on `127.0.0.1:8787`. `preview:workers` reuses an existing adapted artifact.
- Keep preview local. Do not run remote preview/deploy, authenticate to Cloudflare or introduce cloud bindings merely to complete a local test.
- Current config uses only ASSETS, `nodejs_compat` and compatibility date `2026-10-23`. Persistent caches and image optimization are not verified.
- `cacheComponents` and `partialPrefetching` are disabled because the enabled config hung during the recorded local runtime test. Re-enabling either requires a focused runtime test of the chosen toolchain.
- Runtime diagnostics belong in `tests/runtime/`. Remove temporary wrappers with `npm run test:runtime:clean`, then build again before handing off a clean artifact.
- When runtime behavior changes, check SSR/request context, static assets/local fonts, hydration, 404, redirects and concurrent requests in workerd. A Node build alone is insufficient.
- Run checks appropriate to the change and report actual results. Do not rerun the full runtime suite for documentation-only edits. Do not claim Production, backend or business-flow compatibility from starter smoke tests.

## Next.js generated guidance

Keep the generated block below intact. Read version-matched installed Next.js docs before changing framework behavior.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
