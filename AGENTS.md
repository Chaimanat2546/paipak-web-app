# paipak-web-app workflow

## Repository boundary

- This is the application-only repository. `package.json`, `app/`, `public/`, config and tests live at its root.
- Audit documents, DESIGN.md, reference captures and Pencil files belong to a separate workspace. Do not copy that archive into this repository or assume `../docs/` exists after cloning.
- Use external reference/design material when supplied for the requested task. Treat an available approved DESIGN.md as the visual source of truth; do not invent a conflicting token document.
- Reference HTML, images, branding, business claims and contacts are research evidence, not authorized production assets.

## Current authorization and stage

- Dependencies and local Workers runtime testing were explicitly authorized on 29 October 2026.
- Homepage implementation with mock data was authorized on 30 October 2026 using `paipak.pen` and poolapoolvilla.com as references. It is pending homepage acceptance; do not expand to remaining pages yet.
- The user selected paipak branding with mock imagery/data, retained date/login/favorite controls as demo UI, and requested a demo cookie banner. No booking, membership, admin, database, analytics or payment integration is authorized by that choice.
- Do not expand into product UI, connect external services, provision resources or deploy without explicit authorization for that scope. Creating the repository and updating documentation do not authorize those stages.
- After audit acceptance and authorization, follow: Foundation → Workers runtime test → Homepage → Homepage acceptance → Remaining pages → Visual/Functional QA. Pause expansion at the homepage review gate.
- Explicit later user instructions take precedence over this stage description.

## Application constraints

- Keep Next.js, Tailwind CSS and TypeScript strict. Do not substitute a different application framework.
- Use shadcn/ui (Radix) as the base UI primitives and Kibo UI for suitable composed components, as requested on 30 October 2026. Preserve paipak styling via `app/globals.css` semantic tokens and component variants. Reuse `components/ui/`, `components/kibo-ui/`, and `lib/utils.ts` before creating new primitives; add only components needed by the authorized scope.
- No explicit `any` or `unknown` types in Application code. Do not bypass errors with type suppression, unsafe assertions or non-null assertions. Use typed fixtures, validated inputs, discriminated unions and narrowing.
- Use Mock Data first. Installed Supabase packages do not authorize SDK calls or real Auth, Database, Storage or Admin integration.
- Membership, online booking, booking/viewing history and a paipak admin system separate from Webooks are future requirements, not existing features.
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
