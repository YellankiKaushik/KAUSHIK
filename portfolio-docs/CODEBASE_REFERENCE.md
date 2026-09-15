# Codebase Reference

## Repository Overview

## Evidence Status

EXTRACTED from repository files.

## Repository Sources

- `package.json`
- `vite.config.ts`
- `src/App.tsx`
- `src/main.tsx`
- `src/pages/Index.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/pages/ExperienceDetail.tsx`
- `src/pages/ChallengeOverview.tsx`
- `src/pages/ChallengeDetail.tsx`
- `src/components/*`
- `src/data/*`
- `src/utils/*`
- `api/*`
- `index.html`
- `tailwind.config.ts`
- `src/index.css`
- `public/*`
- `docs/*`

## Framework And Language

- Framework: React 18.
- Build tool: Vite 7 with `@vitejs/plugin-react-swc`.
- Language: TypeScript.
- Routing: `react-router-dom` with `BrowserRouter`, `Routes`, dynamic route params, and `Link`.
- Styling: Tailwind CSS with custom utilities in `src/index.css` and theme extension in `tailwind.config.ts`.
- Animation: Framer Motion.
- Icons: `lucide-react`.
- UI foundation: shadcn/Radix-style component scaffold in `src/components/ui`.
- Data fetching/state: `@tanstack/react-query` provider is mounted, but no active query usage was identified in the inspected portfolio surfaces.
- Deployment architecture: Vercel-oriented SPA with serverless API functions in `api/`. `package.json` also retains `gh-pages` scripts, and `vite.config.ts` changes base path depending on `process.env.VERCEL`.
- Analytics: Google Analytics 4 helper in `src/utils/analytics.ts`, configured from `VITE_GA_MEASUREMENT_ID`.
- AI assistant: local deterministic portfolio engine plus optional OpenRouter rewrite via Vercel API.

## Package Manager Evidence

- `package-lock.json` exists, so npm is the clearest active package-lock source.
- `bun.lockb` also exists, but repository scripts are npm scripts.
- `package.json` scripts use `npm run` style commands.

## Important Directories

### `src/`

Main React application source.

### `src/pages/`

Route-level pages:

- `Index.tsx` composes the homepage sections.
- `ProjectDetail.tsx` renders dynamic project detail pages from `src/data/projects.ts`.
- `ExperienceDetail.tsx` renders dynamic experience detail pages from `src/data/experiences.ts`.
- `ChallengeOverview.tsx` renders challenge participation overview from `src/data/challenges.ts`.
- `ChallengeDetail.tsx` renders individual challenge detail pages from `src/data/challenges.ts` and related project lookups from `src/data/projects.ts`.
- `NotFound.tsx` renders fallback route content.

### `src/components/`

Homepage sections, persistent UI, and shared UI elements.

Important section components:

- `Navigation.tsx`
- `HeroSection.tsx`
- `FeaturedInSection.tsx`
- `ExperienceSection.tsx`
- `SkillsSection.tsx`
- `ProjectsSection.tsx`
- `EducationSection.tsx`
- `CertificationsSection.tsx`
- `AchievementsSection.tsx`
- `GetInTouchSection.tsx`
- `PortfolioChatbot.tsx`
- `CursorGlow.tsx`
- `ScrollToTop.tsx`

### `src/components/ui/`

shadcn/Radix-style UI support components. Currently visible app usage includes `toaster`, `sonner`, and `tooltip` providers through `src/App.tsx`.

### `src/data/`

Structured portfolio content:

- `projects.ts` - project records, detail content, links, visible/hidden flags, order, tech stacks.
- `experiences.ts` - experience records, responsibilities, results, skills, links, logos.
- `challenges.ts` - challenge participation records, proof links, data status, route slugs.
- `portfolioKnowledge.ts` - consolidated chatbot knowledge base, identity, positioning, contact, writing, education, skills, certifications, achievements, safe claims, unsafe claims, missing information, and imported project/experience/challenge data.

### `src/utils/`

- `seo.ts` updates `document.title` and the page description meta tag.
- `analytics.ts` initializes GA4 and tracks events/page views.
- `portfolioChatbotEngine.ts` maps portfolio questions to verified local answers using `portfolioKnowledge`.

### `api/`

Vercel serverless functions:

- `portfolio-chat.ts` validates chatbot requests, calls OpenRouter if configured, and falls back to local answers.

### `public/`

Static assets:

- favicons
- web manifest
- robots and sitemap
- SPA fallback `404.html`
- `about.txt` with Twemoji favicon attribution

Important missing asset directory: project data references `public/projects/<image>`, but `public/projects/` was not present in the inspected file list.

### `src/assets/`

Bundled assets imported by React components/data:

- `profile.jpeg`
- logos under `src/assets/logos/`

### `docs/`

Existing implementation/support docs:

- `FINAL_PORTFOLIO_REBUILD_REPORT.md`
- `GOOGLE_SERVICES_SETUP.md`
- `VERCEL_OPENROUTER_SETUP.md`

These are useful historical architecture references but are not the same as the new long-term content knowledge base.

### `dist/`

Generated build output. It is present locally but should not be treated as source-of-truth content.

## Application Structure

Routes are defined in `src/App.tsx`:

- `/` -> `src/pages/Index.tsx`
- `/project/:slug` -> `src/pages/ProjectDetail.tsx`
- `/experience/challenge-participation` -> `src/pages/ChallengeOverview.tsx`
- `/experience/:slug` -> `src/pages/ExperienceDetail.tsx`
- `/challenges/:slug` -> `src/pages/ChallengeDetail.tsx`
- `*` -> `src/pages/NotFound.tsx`

`src/App.tsx` also mounts:

- `QueryClientProvider`
- `TooltipProvider`
- toast providers
- `CursorGlow`
- `PortfolioChatbot`
- `BrowserRouter` with `basename={import.meta.env.BASE_URL}`
- `ScrollToTop`

## Homepage Section Order

Defined in `src/pages/Index.tsx`:

1. `#home` -> `HeroSection`
2. `#FeaturedInSection` -> `FeaturedInSection`
3. `#experience` -> `ExperienceSection`
4. `#skills` -> `SkillsSection`
5. `#projects` -> `ProjectsSection`
6. `#education` -> `EducationSection`
7. `#certifications` -> `CertificationsSection`
8. `#achievements` -> `AchievementsSection`
9. `#contact` -> `GetInTouchSection`

## Portfolio Content Sources

### Identity And Hero

- Name, title, short hero pitch, profile image, GitHub/LinkedIn/email CTAs:
  - `src/components/HeroSection.tsx`
- Identity and broader summary used by chatbot:
  - `src/data/portfolioKnowledge.ts`
- Base page title/description and JSON-LD identity:
  - `index.html`
- Homepage runtime SEO title/description:
  - `src/pages/Index.tsx`

### About / Positioning

- Visible About Me cards:
  - `src/components/FeaturedInSection.tsx`
- Chatbot/knowledge positioning:
  - `src/data/portfolioKnowledge.ts`

### Experience

- Experience data:
  - `src/data/experiences.ts`
- Homepage experience rendering:
  - `src/components/ExperienceSection.tsx`
- Detail rendering:
  - `src/pages/ExperienceDetail.tsx`
- Challenge overview route:
  - `src/pages/ChallengeOverview.tsx`

### Projects

- Project data:
  - `src/data/projects.ts`
- Homepage project grid:
  - `src/components/ProjectsSection.tsx`
- Project detail route:
  - `src/pages/ProjectDetail.tsx`
- Related challenge links:
  - `src/data/challenges.ts`
  - `src/pages/ChallengeDetail.tsx`
- Referenced project images:
  - `public/projects/*.png` via `projectImage()` in `src/data/projects.ts`

### Skills

- Visible skills:
  - `src/components/SkillsSection.tsx`
- Chatbot skill taxonomy:
  - `src/data/portfolioKnowledge.ts`

### Education

- Visible education:
  - `src/components/EducationSection.tsx`
- Chatbot education:
  - `src/data/portfolioKnowledge.ts`

### Certifications

- Visible certification carousel:
  - `src/components/CertificationsSection.tsx`
- Chatbot certification data:
  - `src/data/portfolioKnowledge.ts`

### Achievements

- Visible achievements:
  - `src/components/AchievementsSection.tsx`
- Chatbot achievement data:
  - `src/data/portfolioKnowledge.ts`

### Contact And Links

- Hero links:
  - `src/components/HeroSection.tsx`
- Contact section links:
  - `src/components/GetInTouchSection.tsx`
- Chatbot contact links:
  - `src/data/portfolioKnowledge.ts`

### AI Assistant

- Chat UI:
  - `src/components/PortfolioChatbot.tsx`
- Local answer engine:
  - `src/utils/portfolioChatbotEngine.ts`
- Knowledge base:
  - `src/data/portfolioKnowledge.ts`
- Server route:
  - `api/portfolio-chat.ts`

## Important Components

- `Navigation.tsx` - fixed top navigation, active section tracking, smooth scroll, logo button.
- `HeroSection.tsx` - name, title, hero pitch, profile image, social/contact CTA buttons.
- `FeaturedInSection.tsx` - About Me cards describing builder mindset, what Kaushik builds, and direction.
- `ExperienceSection.tsx` - maps `experiences` into homepage cards and links to detail routes.
- `ProjectsSection.tsx` - filters visible projects and maps them into project cards.
- `SkillsSection.tsx` - visible skill taxonomy with icons and pill tags.
- `EducationSection.tsx` - local education array and coursework display.
- `CertificationsSection.tsx` - local certification array with paginated/draggable carousel.
- `AchievementsSection.tsx` - local achievement array with descriptions and external proof links.
- `GetInTouchSection.tsx` - contact and writing CTA grid.
- `ProjectDetail.tsx` - generic project detail renderer over `projects`.
- `ExperienceDetail.tsx` - generic experience detail renderer over `experiences`.
- `ChallengeOverview.tsx` - challenge participation overview.
- `ChallengeDetail.tsx` - individual challenge details plus proof links and related project link.
- `PortfolioChatbot.tsx` - floating chatbot UI, starter questions, local answer gate, optional API call.
- `CursorGlow.tsx` - custom cursor visual.
- `ScrollToTop.tsx` - scroll reset on route changes.

## Important Data And Content Files

- `src/data/projects.ts` controls project slugs, visible flags, ordering, descriptions, highlights, tech stacks, overview/problem/solution/results, links, screenshots, and optional case study sections.
- `src/data/experiences.ts` controls experience slugs, roles, companies, periods, descriptions, overview, responsibilities, skills, results, proof links, link type, and logos.
- `src/data/challenges.ts` controls challenge slugs, organizer/platform/category/date/status, data status, summary, problem statement, build notes, role, technologies, skills, outcomes, learnings, proof links, related project slugs, featured flags, and display order.
- `src/data/portfolioKnowledge.ts` consolidates facts for the chatbot and defines safe/unsafe claims and missing information.

## Metadata And SEO

### Static HTML

`index.html` contains:

- `<title>`
- description meta
- author meta
- canonical URL
- favicon links
- web manifest link
- Open Graph type/title/description/url/site name
- Twitter card/title/description
- JSON-LD `Person` structured data
- Google font links
- SPA redirect script for path handling

### Runtime SEO

- `src/utils/seo.ts` sets `document.title` and updates/creates `meta[name="description"]`.
- `src/pages/Index.tsx` sets homepage title and description.
- `src/pages/ChallengeOverview.tsx` sets challenge overview title and description.
- `src/pages/ChallengeDetail.tsx` sets challenge detail title and description.

NEEDS VERIFICATION: `ProjectDetail.tsx` and `ExperienceDetail.tsx` do not appear to call `setPageSeo`, so dynamic project and experience pages may keep prior/default metadata.

### Sitemap And Robots

- `public/sitemap.xml` lists homepage, visible project detail routes, and experience detail routes.
- `public/robots.txt` allows all crawling and points to `https://kaaushik.vercel.app/sitemap.xml`.

NEEDS VERIFICATION: challenge routes were not present in `public/sitemap.xml` during inspection.

### Open Graph Image

MISSING: no `og:image`/`twitter:image` metadata was identified in `index.html`, and no `public/og-image.png` was present in the initial file list.

## Assets

### Profile

- `src/assets/profile.jpeg` is used in `src/components/HeroSection.tsx`.

### Experience Logos

- `src/assets/logos/uptoskills.png` used by UptoSkills experience.
- `src/assets/logos/edunet-logo.png` used by Edunet/Tech Saksham experience.
- `src/assets/logos/crowdsourcevbit.jpg` used by Google Crowdsource VBIT experience.
- `src/assets/logos/Aashayvbit.jpg` used by Aashay VBIT experience.

### Other Logo Files

Present but not clearly used in current visible data after inspection:

- `src/assets/logos/youtube.png`
- `src/assets/logos/vaaniplan.png`
- `src/assets/logos/gym.png`
- `src/assets/logos/krishi.png`
- `src/assets/logos/tab.png`
- `src/assets/logos/instagram-logo.png`

### Project Images

Project records reference:

- `public/projects/agroguia-ai.png`
- `public/projects/youtube-review.png`
- `public/projects/hazlo.png`
- `public/projects/ai-crowd-intelligence.png`
- `public/projects/sistemaa-electoral.png`
- `public/projects/fitzone-gym-membership.png`
- `public/projects/krishi-seva.png`
- `public/projects/psymatch.png`
- `public/projects/vaaniplan.png`
- `public/projects/google-product-analysis.png`

MISSING / NEEDS VERIFICATION: `public/projects/` was not found in the inspected file list. The UI has error fallback blocks for missing card/detail images.

### Portfolio Document Boundary

The portfolio does not host or maintain a canonical resume. Job-specific resumes are managed outside this repository, so there should be no resume asset, route, CTA, analytics event, notification API, or repository-side configuration.

## Build And Validation Commands

Extracted from `package.json`:

```text
npm run dev
npm run build
npm run preview
npm run predeploy
npm run deploy
```

No `lint` or `test` script was present in `package.json` during inspection.

Vercel setup docs also identify:

```text
npm install
npm run build
```

## Environment Variables

From `.env.example` and docs:

- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`
- `OPENROUTER_SITE_URL`
- `OPENROUTER_SITE_NAME`
- `VITE_GA_MEASUREMENT_ID`

Important rule from existing docs: do not prefix secret OpenRouter keys with `VITE_`.

## Architecture Notes For Future Agents

- Keep portfolio facts separate from presentation. After approval, `portfolio-docs/` should drive content changes.
- Do not blindly copy long Markdown paragraphs into compact UI elements.
- `src/data/portfolioKnowledge.ts` currently duplicates many facts from component-local arrays and data files. Synchronize carefully.
- Project detail pages already support more fields than most project entries use, including optional `caseStudy`.
- The app has hidden/preserved projects with `visible: false`; do not remove them just because they are absent from the homepage.
- Challenge participation has its own overview and detail routing architecture.
- The chatbot uses verified local answers as the first layer; preserve this fact-first design if updating chatbot content.
- `vite.config.ts` uses `base = process.env.VERCEL ? "/" : "/KAUSHIK/"`; changes to deployment context affect asset and route paths.
- Existing app copy and docs migrated toward Vercel production URL `https://kaaushik.vercel.app/`, while older audit docs mention GitHub Pages.
- Do not treat `dist/` as the source for portfolio facts.
- If updating metadata, inspect `index.html`, `src/utils/seo.ts`, route-level `setPageSeo` calls, `public/sitemap.xml`, `public/robots.txt`, and `public/site.webmanifest`.
