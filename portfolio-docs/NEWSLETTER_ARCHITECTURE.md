# Signal Daily reader architecture and maintenance

Technical implementation verified 25 October 2026. This document does not approve personal portfolio facts or any newsletter edition.

## Content-to-code mapping

| Surface | Implementation | Content authority |
|---|---|---|
| Homepage section after Contact (`#newsletter`) | `SignalDailySection` in `src/components/SignalDaily.tsx`, mounted by `src/pages/Index.tsx` | Original reader copy and approved public catalog |
| `/newsletter` archive | `NewsletterPage` in `SignalDaily.tsx`, route in `src/App.tsx` | `src/data/newsletters.json`; title/intro search and topic filter |
| `/newsletter/:slug` edition | Same component and router | Exact matching exported public edition; missing slugs show an absent-edition state |
| Newsletter SEO | `NewsletterPage` effect and `src/utils/seo.ts` | Archive copy or the actual exported edition title/intro; absent editions have no canonical URL |
| Canonical host | `index.html`, SEO helper, `public/sitemap.xml`, `public/robots.txt`, package homepage | Owner-selected `https://kaaush.vercel.app/`, confirmed against Vercel mappings |
| Optional email signup | Private `Subscribe` component in `SignalDaily.tsx` | Valid public `VITE_BUTTONDOWN_USERNAME`; currently unset/disabled |
| Portfolio facts | Relevant `portfolio-docs/` files and mapped portfolio surfaces | Reviewed and approved personal/project facts; unreviewed extraction remains unreviewed |

## Editorial boundary and data flow

```text
Private Signal Daily: RSS -> local Ollama/Gemma -> draft -> human review
  -> explicit approval -> publish online only with email disabled
  -> tools/publish_portfolio.py (approved/published exact revision only)
  -> reviewed allowlisted JSON diff in portfolio/src/data/newsletters.json
  -> authorized feature commit/push -> protected Vercel preview acceptance
  -> successful release gates -> separately authorized production release
```

The sibling Python application owns SQLite, drafts, source evidence, approval history, credentials and subscriber/delivery state. The portfolio is a static reader and does not require the laptop to serve exported editions. No Python editor, SQLite database or Ollama service is deployed into the portfolio's Vercel project. Keep Ollama private on loopback. Never copy the entire database, admin response or private edition JSON into this repository.

The exporter reads SQLite in read-only mode, requires the current published version and matching approval history, and emits only public fields: ID/version/slug, title/topic, introduction/closing, publication date and story headline/summary/rationale/source/URL/date. It rejects stale/conflicting revisions, makes identical repeat exports a no-op, and uses a destination lock plus atomic replacement. It does not commit, push, publish a provider email or send mail. Keep one authoritative database/catalog pairing.

`portfolio-docs/` governs approved portfolio facts. The Signal Daily review/publication/export workflow governs newsletter editions. Editing this Markdown, changing a project description or passing a synthetic test never authorizes publication. Internal documentation is not imported into the client or copied into `public/`.

## Deployment and canonical URL

Existing deployment: React/Vite SPA in Vercel project `kaushik` (`prj_XgrIOPf3xzxQpsZ16fLZLafMd3sn`), with the existing optional `api/portfolio-chat.ts` serverless function. Existing SPA rewrites support direct archive and edition routes. Vercel builds use `/`; ordinary local Vite uses `/KAUSHIK/`. No new service, database, rewrite or paid infrastructure is needed.

On 25 October 2026 authenticated Vercel project-domain inspection showed verified `kaaush.vercel.app` without a redirect and verified `kaaushik.vercel.app` redirecting to it with status 307. The owner also selected `https://kaaush.vercel.app/`. The latter alias responding is not the basis for canonical selection. Local static metadata, sitemap/robots and newsletter canonical links now agree on `kaaush`; no Vercel alias or redirect was changed.

The SEO helper retains the existing two-argument API (default root canonical) and accepts an optional canonical path; `null` removes canonical/OG URL for absent editions. Newsletter paths explicitly supply their canonical path. Titles/descriptions and matching OG/Twitter fields update after client rendering. This remains a client-rendered SPA: crawlers that do not execute JavaScript see the base HTML portfolio metadata; no SSR or prerendering was added. Existing unrelated route canonical behavior was not redesigned.

## Email and subscription boundary

The public catalog remains `[]`; the homepage and archive show honest empty states. `VITE_BUTTONDOWN_USERNAME` remains unset. Once separately accepted and enabled, its standard HTML form posts directly to Buttondown for confirmation and unsubscribe. The username is public; `BUTTONDOWN_API_KEY` must remain private and must never use a `VITE_` prefix. There is no second subscriber database or public provider-token endpoint here.

Email activation requires separate owner authorization and live account/sender, double-opt-in, one-owner-mailbox inbox and unsubscribe acceptance. Keep automations and subscriber delivery off during acceptance. The private Python adapter supports reserved provider drafts, status reconciliation and an explicitly gated one-mailbox test; neither this reader nor these docs authorize a broadcast. A static reader release does not authorize subscription activation or delivery.

## Future edition update procedure

Only when explicitly authorized for a real edition:

1. Use the private editor to check primary sources and factual claims, save and review the exact revision, and obtain explicit editorial approval. Edits invalidate approval.
2. Publish online only in the private application with email disabled. Note the authoritative database, issue ID and published version.
3. From Signal Daily, run `python tools/publish_portfolio.py --database PRIVATE_DATABASE --issue ID --version VERSION --output ../portfolio/src/data/newsletters.json` with real approved values. This step was not performed during Phase 3.
4. Inspect the public catalog diff for only the intended edition and allowlisted fields. Do not add fictional fixtures. Do not silently overwrite a correction; follow the documented correction/new-edition procedure.
5. Validate clean install, TypeScript, build, full audit and `npm audit --omit=dev --audit-level=high`. Test archive search/topic, article sources/dates, missing slugs, mobile/keyboard, metadata and portfolio preservation. Use synthetic data only in isolated memory/storage.
6. Commit/push only when authorized, then test a protected preview tied to the exact new SHA. Existing preview URLs for older SHAs do not validate new changes.
7. Require actually executed successful release checks and review applicable repository rules before a separately authorized production release. Keep signup disabled unless separately accepted.

## Local and deployed state after Phase 3

Portfolio HEAD remains `7909c58e409bf316d57d2c2d17c85f6ea144979f` on `feat/signal-daily-newsletter`, plus uncommitted local remediation/SEO/docs. Existing preview `kaushik-aky7tp2xe-kaushik-yellanki-project.vercel.app` still serves that committed SHA, without these edits. Production remains `main` at `fd0f0be68e9434854ffb702928c2fadd92ced17d`. Signal Daily is a separate Git history at `5f25e04461afd3cb7e0699fd2ce12285fc83a738` (one existing local documentation commit ahead), plus Phase 3 documentation edits.

Phase 2's 60 effective browser checks are historical evidence for the old preview. Fresh local Phase 3 results are recorded separately in `../../signal-daily/docs/PHASE_3_LOCAL_VERIFICATION.md` (sibling workspace path). Dependency findings are in [the local dependency report](../docs/DEPENDENCY_SECURITY.md). GitHub's last exact-commit workflow failed before execution with a payment/spending-limit annotation; current account clearance remains unverified. No commit, push, merge or deployment is authorized by this document.
