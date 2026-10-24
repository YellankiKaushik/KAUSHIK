# Dependency release review

## Current local Phase 3 remediation — 25 October 2026

Portfolio HEAD remains `7909c58e409bf316d57d2c2d17c85f6ea144979f` on `feat/signal-daily-newsletter`, plus uncommitted changes. The old protected preview still serves that committed SHA; production remains `fd0f0be68e9434854ffb702928c2fadd92ced17d`. This local audit does not update or certify either deployed build.

Phase 2 found 1 high/6 moderate overall and 1 high/2 moderate in production, differing from the historical snapshot below. The new high was Zod 3.23.8, [GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5). `npm ls zod` and `npm explain zod` identified only the direct root requirement. Frontend/API/config/build searches found no imports, runtime calls or resolver integration using Zod. The installed `@hookform/resolvers` Zod adapter is an unimported separate entry point; that package's required peer is React Hook Form, not Zod.

Removed only the unused root Zod dependency with `npm uninstall zod --ignore-scripts --no-audit --no-fund`. npm updated its manifest/lockfile entries and removed one package. No other locked version changed, no override was added and no forced upgrade was used. Verified `npm ci --no-audit --no-fund`; `npm ls zod` is empty and `npm explain zod` reports no matching dependency (expected).

Fresh local full audit: **6 moderate, 0 high, 0 critical**. Fresh production audit: **2 moderate, 0 high, 0 critical**. `npm audit --omit=dev --audit-level=high` passes; ordinary full/production audits remain nonzero because moderate findings remain. Counts are affected package entries, not distinct CVEs.

Remaining moderate packages: build-only `@tailwindcss/typography`, `postcss-nested`, `postcss-selector-parser`, `tailwindcss` via GHSA-rj75-hqrm-r3gf; production `react-router`/`react-router-dom` via GHSA-wrjc-x8rr-h8h6 and GHSA-337j-9hxr-rhxg. Vite 7.3.7, Router/Router DOM 6.30.6, Tailwind 3.4.19 and typography 0.5.20 remain unchanged. The old seven-high braces chain is not reproduced by the fresh registry evaluation; do not claim those packages were upgraded or patched here.

Build and TypeScript pass locally; fresh browser/Python results are recorded in sibling Signal Daily `docs/PHASE_3_LOCAL_VERIFICATION.md`. GitHub's last exact-commit run remains runnerless/failed with a payment/spending annotation; current account clearance is unverified. Local passing checks do not substitute for a successful GitHub run. A new commit and protected preview require authorization; none were created in Phase 3.

## Historical release review — 23 October 2026

The inherited audit contained 32 affected package entries: 2 critical, 23 high and 7 moderate. Removed unused `@huggingface/transformers` and its ONNX/protobuf/tar/sharp dependency tree after confirming no source imports. Removed unused `lovable-tagger`. Applied `npm audit fix --ignore-scripts` without `--force`, retaining the existing major versions. `tailwindcss-animate` is now a development dependency because its sole import is the Tailwind build configuration; it has no application/API import.

After the compatible fixes: **12 full-tree findings: 0 critical, 7 high, 5 moderate**. Production dependency audit: **2 moderate, 0 high/critical**. These are affected-package counts, not distinct CVE counts.

Remaining high entries (`braces`, `chokidar`, `micromatch`, `fast-glob`, `globby`, `gh-pages`, `tailwindcss`) derive from [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). No upstream patch is listed. The actual `fast-glob` call passes developer-supplied patterns into `micromatch.braces`; Tailwind patterns are fixed in `tailwind.config.ts`. The public deployment serves compiled static files and the unchanged portfolio-chat API; neither accepts glob patterns nor imports these tools. Do not build untrusted pull requests with secrets or treat this exposure analysis as an audit suppression. The high finding remains unresolved in the tooling tree.

Remaining build-only moderate entries (`postcss-selector-parser`, `postcss-nested`, `@tailwindcss/typography`) derive from [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf). The maintained 6.x parser consumers need a coordinated major dependency migration to use the patched 7.x parser. Current inputs are repository CSS, not public request bodies.

Remaining production moderate entries (`react-router`, `react-router-dom`) derive from [navigation](https://github.com/remix-run/react-router/security/advisories/GHSA-wrjc-x8rr-h8h6) and [SSR hydration](https://github.com/advisories/GHSA-337j-9hxr-rhxg) advisories. The retained Router 6.30.6 portfolio is a client-rendered BrowserRouter application without SSR hydration/error deserialization. Newsletter links use fixed internal paths plus validated exported slugs; existing navigation uses repository data. No attacker-controlled redirect target or hydration payload was identified. Moving to Router 7 is a separate compatibility migration, not an automatic audit force fix.

Clean install, build, TypeScript and browser acceptance passed after remediation. Full package/advisory/version classification is published in the [Signal Daily dependency report](https://github.com/YellankiKaushik/AI-el-bolet-n/blob/main/docs/DEPENDENCY_REMEDIATION_REPORT.md). The GitHub runner is currently blocked by the owner's account billing/spending restriction; no setting, payment, repository visibility or runner infrastructure was changed to bypass it. Production is unchanged while that release verification gate is unresolved.
