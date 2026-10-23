# Signal Daily portfolio integration

23 October 2026. Feature branch only; production aliases are unchanged.

The existing Vite/React/TypeScript portfolio retains all routes and homepage sections. `SignalDaily.tsx` adds the homepage section, `/newsletter` and `/newsletter/:slug`. `src/data/newsletters.json` is deliberately empty until an edition has been reviewed, approved, published locally and explicitly exported. No database, private draft, API token or subscriber list belongs in this repository.

In the private Signal Daily checkout run `python tools/publish_portfolio.py --database PRIVATE_DATABASE --issue ID --version VERSION --output PORTFOLIO/src/data/newsletters.json`. Review that JSON diff, commit on a feature branch and validate a Vercel preview before merging. Duplicate exports are no-ops; stale/conflicting versions are rejected. Never copy the whole editor database or API response.

Vercel builds use root `/`; local Vite uses the existing `/KAUSHIK/` base. Existing rewrites support direct newsletter routes. No rewrite or API behavior was changed.

Subscriptions remain disabled unless `VITE_BUTTONDOWN_USERNAME` identifies the owner's actual newsletter. That username is public, not a credential. The standard hosted Buttondown signup form handles confirmation/unsubscribe without a second subscriber database. Never put `BUTTONDOWN_API_KEY` into any `VITE_` variable. Preview tests intercept the fictional signup URL; no real mail is sent.

Validation: production build and `tsc --noEmit -p tsconfig.app.json` pass. The repository had no existing test script. Twelve actual local Chromium scenarios tested original section IDs, archive/search/topic/edition/private-route behavior, 390px layout, scoped Axe A/AA, mocked signup and the separate private editor's topic UI. Two existing type errors were repaired with optional property typing without changing data or rendered content. Build warnings about the old Browserslist database and a >500KB bundle remain.

Full engineering reports live in [Signal Daily](https://github.com/YellankiKaushik/AI-el-bolet-n/blob/main/docs/PORTFOLIO_INTEGRATION.md). Public production promotion is deferred until the owner reviews the preview and approves the first real edition. Email delivery requires a connected provider, authorized mailbox test and explicit delivery approval.
