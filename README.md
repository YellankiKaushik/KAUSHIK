# Kaushik Yellanki — Portfolio

The portfolio presents Kaushik's work as an AI systems builder and software developer. It opens with six featured technical case studies and includes experience, challenges, credentials, Signal Daily, and a portfolio assistant.

Production lives at [kaaush.vercel.app](https://kaaush.vercel.app/). The [alternate hostname](https://kaaushik.vercel.app/) redirects there.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open the URL Vite prints. The default base path is `/KAUSHIK/` for GitHub Pages. Vercel sets `VERCEL=1` to use the root path.

| Command | Purpose |
| --- | --- |
| `npm run build` | Build into `dist/` for GitHub Pages. |
| `VERCEL=1 npm run build` | Build for Vercel. In PowerShell run `$env:VERCEL='1'`, then `npm run build`. |
| `npm run preview` | Serve the production build locally. Use the same `VERCEL` setting as the build. |
| `npm test` | Run route, content, and API contract tests. |
| `npx tsc --noEmit -p tsconfig.app.json` | Check frontend types. |
| `npx eslint .` | Lint the repository. |

## Architecture

- React 18, TypeScript, Vite 7, Tailwind CSS, React Router, and Lucide. The shared shell lives in `src/components/SiteShell.tsx`, the route table in `src/PortfolioRoutes.tsx`, and the main design rules in `src/index.css`.
- `src/data/projects.ts` holds project records, including preserved archive routes. `src/data/projectStories.ts` adds architecture flows, engineering decisions, and limitations for the featured case studies. The project visuals are labeled illustrations.
- Lenis and GSAP run in a lazy-loaded desktop motion chunk when reduced motion is off. The hero text and card spotlight use custom implementations inspired by React Bits. The site has no Vanta background.
- The assistant loads separately and can answer from local portfolio knowledge. Vercel serves `POST /api/portfolio-chat` for optional OpenRouter enrichment. The assistant falls back to local answers when the endpoint or model is unavailable.
- Signal Daily reads the public catalog at `src/data/newsletters.json`. The archive opens with an empty state until an approved edition is available. Subscriptions also require a configured Buttondown username. See [the publication workflow](portfolio-docs/NEWSLETTER_ARCHITECTURE.md).

## Browser QA

Start a local production preview, then run the following in another terminal. Playwright and axe are optional QA tools and do not ship in the portfolio.

```sh
npm install --no-save --package-lock=false playwright @axe-core/playwright
npx playwright install chromium
npm run test:browser
```

The suite defaults to `http://127.0.0.1:4173/KAUSHIK/`. Set `QA_BASE_URL` to test a different local preview or an authorized deployment. With a root-base preview, use `http://127.0.0.1:4173/`. Screenshots and accessibility and timing results are written to `browser-results.local/`. The assistant API request is intercepted with a test response and the suite never submits a newsletter form.

## Deployment

Vercel is the primary host. Its route table serves existing static files and functions before the browser route fallback. The retired résumé URL returns HTTP 410. Set these variables in the relevant Vercel environment when enabling integrations. For local development, copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `OPENROUTER_API_KEY` | Server-only key for the optional assistant API. |
| `OPENROUTER_MODEL` | Optional model override. |
| `OPENROUTER_SITE_URL`, `OPENROUTER_SITE_NAME` | Optional OpenRouter request metadata. |
| `VITE_GA_MEASUREMENT_ID` | Public, optional Google Analytics ID. |
| `VITE_BUTTONDOWN_USERNAME` | Public, optional Signal Daily subscription account. |

Use a non-production Git branch for Vercel preview deployments. GitHub Pages remains a manually published static backup. It serves the local assistant fallback without the Vercel function. Keep credentials in the hosting environment.

[Redesign reports](docs/redesign/reports/) track verification, release status, and content gaps.
