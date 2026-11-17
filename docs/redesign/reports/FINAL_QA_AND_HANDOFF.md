# Final QA and handoff

QA date: November 17, 2026

## Implementation status

The existing branch was continued from `925e6bf` in the isolated `redesign.local` checkout. It contains the original redesign (`590e920`), the earlier handoff (`925e6bf`), and the final fixes and QA harness (`e688c75`). This report and the owner checklist are committed on top. Local and remote `main` were checked at `87dc1b99f216c8ad68a49527be9d72e4ea4d734e`. No changes were made to production.

- Both Cloud Run case studies show a status message and retain their source links. The Crowd Intelligence challenge and assistant answers no longer direct readers to the unavailable demos.
- The Wipro credential remains listed with a proof-unavailable label. The failing Google Drive URL was removed from the rendered profile and assistant data.
- Vercel routing uses one ordered route table. Headers apply first, the retired résumé URL returns 410, static assets and functions resolve from the filesystem, then GET and HEAD requests outside the API namespace can fall back to the SPA.
- The newsletter keeps subscriptions closed when the archive has no approved editions. The archive uses the correct heading level for published entries.
- The assistant uses 44px controls, visible focus styling, an input limit consistent with the API, and IME-safe Enter handling. It keeps local answers on the GitHub Pages build and enables the optional API in the root-base build. Browser Back and Forward use native scroll restoration on ordinary routes.
- The canonical domain stays `kaaush.vercel.app`. The sitemap adds the challenge overview and three substantive challenge pages and removes stale update dates. Missing routes and newsletter editions emit a client-side `noindex`. The web app manifest uses relative URLs for both deployment bases. The new portfolio-wide [1,200 × 630 social card](../../../public/social-preview.jpg) uses the existing portrait and was opened and visually inspected. Deep-link social cards remain shared because the site is a client-rendered SPA.

## Tests and measurements

| Check | Result |
| --- | --- |
| Clean `npm ci` in an isolated directory | Blocked. Online npm exited with `Exit handler never called!` in the network-restricted environment. The offline retry identified missing cached tarballs, including `yocto-queue@0.1.0`. The existing dependency tree was preserved. |
| GitHub Pages build | Passed with the available dependencies. The app assets use `/KAUSHIK/`. |
| Vercel build with `VERCEL=1` | Passed with the available dependencies. The app assets use `/`. |
| `npm test` | 11 passed. Covers route rendering, ten project paths, challenge and newsletter routes, assistant local replies and API validation, demo availability, and deployment and metadata contracts. |
| TypeScript | Passed for the app, Vite config, and assistant API. |
| ESLint and Git whitespace validation | Passed. |
| Browser harness syntax | `node --check tests/browser/run.mjs` passed. |
| Browser harness execution | Blocked. Playwright was unavailable, and installation of Playwright and axe hit `ENOTFOUND registry.npmjs.org`. |
| Vercel hosted function | The current production endpoint returned its JSON method rejection on GET. The local handler passed 405, malformed and missing input, and fallback tests. Hosted behavior for the new branch and OpenRouter requests remain unverified. |
| Bundle size | Entry JavaScript was 76.28 kB gzip on Pages and 76.27 kB on Vercel. CSS was 8.38 kB gzip and the separate motion chunk was 32.36 kB gzip. Both builds reported stale Browserslist data. Browser timing and Lighthouse scores were unavailable. |
| Static accessibility checks | Selected contrast pairs measured from the source palette included body 16.22:1, muted body 6.92:1, rust on paper 6.15:1, portrait label 5.19:1, process text 10.11:1, contact label 5.62:1, and assistant starter text 10.07:1. This does not establish conformance across the rendered site. |

## Browser QA and visual review

The reference homepage was captured and inspected in a real browser. Its light grid, headline scale, italic accent and primary action establish a clear opening hierarchy. Its process pairs a short explanation with specific examples. The existing redesign uses its own portrait and product architecture illustrations to serve comparable roles. The redesigned page's actual visual balance and interaction quality could not be compared in this environment.

Vite started, but the in-app browser timed out on both loopback hostnames. A local HTTP client returned `EACCES`, and a separate Chromium QA run could not reach the local server. The browser also declined local file navigation. No redesigned screenshots were captured or inspected.

| Width | Required evidence | Status |
| --- | --- | --- |
| 390px | Home sections, mobile menu, assistant, newsletter, three full case studies | Blocked |
| 768px | Home sections, assistant, newsletter, three full case studies | Blocked |
| 1440px | Home sections, assistant, newsletter, three full case studies | Blocked |

Visual QA for overflow, alignment, responsive spacing, and keyboard focus remains pending. The assistant changes above address source-level control size, focus, contrast, and composition behavior. The browser suite exercises navigation, hash focus, disclosures, the archive, back navigation, project and challenge routes, local and mocked API answers, contact link markup, width overflow, axe, and reduced-motion toggling. See [README](../../../README.md#browser-qa) for setup. The suite does not submit a real subscription or exercise OpenRouter with an actual key.

Lenis and GSAP remain lazy-loaded for desktop fine pointers with motion enabled. The card spotlight and hero accent remain custom, React Bits-inspired effects. Vanta remains excluded. The production build confirmed the module split. Browser animation quality and performance remain unmeasured.

## External links

| Destination | Observed result |
| --- | --- |
| Crowd Intelligence and Sistemaa Electoral Cloud Run deployments | Both showed 500 server error pages in a real browser. Public calls to action were replaced with availability text. |
| Hazlo, FitZone, and archived VaaniPlan | Their deployed pages rendered. |
| Featured GitHub sources and FitZone implementation guide | Featured project repositories were reached in the audit. The FitZone explanation document, Krishi Seva AI, and PsyMatch repository pages rendered. |
| Kaushik's alternate Vercel hostname | Redirected to the canonical production homepage. Production still serves the previous portfolio. |
| Credly | All nine sampled public badge URLs reached named badge pages. |
| Coursera | The share URL redirected to a verification destination. The credential detail itself was not confirmed. |
| Wipro certificate | Google Drive reported that the file does not exist. The replacement proof URL is owner-supplied. |
| Medium, DEV, Topmate | The Medium article heading, DEV profile, and Topmate page title were observed. |
| LinkedIn and Instagram | LinkedIn showed an auth wall. Instagram posts showed login-dependent or empty views. Content could not be independently verified. |
| Lyzr Agentathon and 1M1B | The organizer's public event page rendered and the Google Drive recognition link opened a PDF viewer. These checks do not independently verify the placement or the PDF's claims. |
| Tableau, Streamlit, Forage | Tableau and Streamlit destinations responded but their contents were not confirmed. The remaining Forage PDF destinations were not independently verified. |

The public-link audit was partial where sites required sign-in, did not render their contents, or were not reachable. The certificate and demo repairs above address the confirmed public failures.

## GitHub, preview, and recovery

GitHub rejected feature-branch creation with HTTP 403, `Resource not accessible by integration`. Git transport also failed with `getaddrinfo() thread failed to start`, and the local GitHub CLI reports an invalid token. There is no remote branch, pull request, or Vercel preview URL. A Vercel preview requires the connected project to receive the feature branch or another authorized non-production deployment.

Extract the handoff ZIP. In a KAUSHIK clone containing base commit `87dc1b9`, run these commands after substituting the extracted bundle's absolute path.

```sh
git cat-file -t 87dc1b99f216c8ad68a49527be9d72e4ea4d734e
git bundle verify "/path/to/KAUSHIK-redesign-QA.bundle"
git fetch "/path/to/KAUSHIK-redesign-QA.bundle" refs/heads/redesign/sove7gn-inspired-portfolio
git switch -c redesign/sove7gn-inspired-portfolio FETCH_HEAD
git log --oneline 87dc1b9..HEAD
```

If the redesign branch already exists, replace the `git switch -c` line with `git switch redesign/sove7gn-inspired-portfolio` followed by `git merge --ff-only FETCH_HEAD`. A divergence stops the fast-forward. The bundle contains commits newer than the base and leaves the `main` ref untouched. When GitHub access is restored, push only the redesign branch and open a pull request against `main`. Run browser QA on the resulting preview before release.

## Complete changed-file list from the main base

```text
M  .env.example
M  .github/workflows/deploy.yml
A  docs/redesign/CODEX_START_HERE.md
A  docs/redesign/DESIGN_SPEC.md
A  docs/redesign/MASTER_PLAN.md
A  docs/redesign/REFERENCE_AUDIT.md
A  docs/redesign/reports/FINAL_IMPLEMENTATION_REPORT.md
A  docs/redesign/reports/FINAL_QA_AND_HANDOFF.md
A  docs/redesign/reports/OWNER_CONTENT_CHECKLIST.md
A  docs/redesign/reports/PHASE-00.md
A  docs/redesign/reports/PHASE-01.md
A  docs/redesign/reports/PHASE-02.md
A  docs/redesign/reports/PHASE-03.md
A  docs/redesign/reports/PHASE-04.md
A  docs/redesign/reports/PHASE-05.md
A  docs/redesign/reports/PHASE-06.md
M  index.html
M  package-lock.json
M  package.json
M  portfolio-docs/CERTIFICATIONS.md
M  public/site.webmanifest
M  public/sitemap.xml
A  public/social-preview.jpg
M  README.md
M  src/App.tsx
D  src/components/AchievementsSection.tsx
D  src/components/CertificationsSection.tsx
D  src/components/CursorGlow.tsx
A  src/components/DetailPage.tsx
D  src/components/EducationSection.tsx
D  src/components/ExperienceSection.tsx
D  src/components/FeaturedInSection.tsx
M  src/components/GetInTouchSection.tsx
M  src/components/HeroSection.tsx
D  src/components/Navigation.tsx
M  src/components/PortfolioChatbot.tsx
A  src/components/PortfolioMotion.tsx
A  src/components/ProfileSections.tsx
M  src/components/ProjectsSection.tsx
A  src/components/ProjectVisual.tsx
M  src/components/ScrollToTop.tsx
M  src/components/SignalDaily.tsx
A  src/components/SiteShell.tsx
D  src/components/SkillsSection.tsx
M  src/data/challenges.ts
A  src/data/contact.ts
A  src/data/newsletters.ts
M  src/data/portfolioKnowledge.ts
A  src/data/profile.ts
M  src/data/projects.ts
A  src/data/projectStories.ts
M  src/index.css
M  src/pages/ChallengeDetail.tsx
M  src/pages/ChallengeOverview.tsx
M  src/pages/ExperienceDetail.tsx
M  src/pages/Index.tsx
A  src/pages/NewsletterPage.tsx
M  src/pages/NotFound.tsx
M  src/pages/ProjectDetail.tsx
A  src/PortfolioRoutes.tsx
M  src/utils/portfolioChatbotEngine.ts
A  src/utils/portfolioMotion.ts
M  src/utils/seo.ts
A  tests/browser/run.mjs
A  tests/deployment.test.mjs
A  tests/portfolio-content.test.mjs
A  tests/portfolio-routes.test.mjs
M  vercel.json
```
