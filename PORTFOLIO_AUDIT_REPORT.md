# Portfolio Audit Report

Audit date: 2026-06-19  
Repository path: `C:\Users\YellankiKaushik\Desktop\Portfolio\Portfolio Code Files`  
Live URL: `https://yellankikaushik.github.io/KAUSHIK/`  
Scope: Phase 0 audit only. No portfolio implementation files were changed.

## 1. Executive Summary

The portfolio is an existing Vite + React + TypeScript single-page app deployed to GitHub Pages. It is already functional and has the right core ingredients for a developer portfolio: project cards, project detail routes, experience detail routes, measurable project outcomes, a resume link, GitHub/LinkedIn/contact links, Google Analytics, responsive Tailwind layouts, and a GitHub Actions deployment workflow.

The site is stronger than a generic student resume site because it includes actual builder evidence: AI projects, shipped demos, GitHub links, project detail pages, hackathon/community signals, certifications, and quantified outcomes. The current design is cohesive: dark glassmorphism, orange accent color, compact section spacing, animated cards, and real personal/project imagery.

The biggest gaps are content positioning and production polish. The hero currently shows the name and CTA buttons but the role/value copy is commented out in `src/components/HeroSection.tsx`, which weakens the first impression. Project cards are duplicated between `src/components/ProjectsSection.tsx` and `src/data/projects.ts`, creating content drift risk. SEO is minimal, analytics only tracks page load, contact conversion relies on external Gmail links, no EmailJS/form is implemented, and GitHub Pages direct deep links may fail because there is no `404.html` SPA fallback.

Best first implementation task after this audit: restore and improve the hero positioning copy in `src/components/HeroSection.tsx`, using the current design, without changing routes or architecture.

## 2. Current Codebase Structure

Generated folders such as `node_modules` and `dist` are present locally. `node_modules` is intentionally omitted from the main structure below because it is dependency output, not source.

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy.yml
|-- dist/                         # Generated production build output
|-- public/
|   |-- about.txt
|   |-- android-chrome-192x192.png
|   |-- android-chrome-512x512.png
|   |-- apple-touch-icon.png
|   |-- favicon-16x16.png
|   |-- favicon-32x32.png
|   |-- favicon.ico
|   `-- site.webmanifest
|-- src/
|   |-- assets/
|   |   |-- profile.jpeg
|   |   `-- logos/
|   |       |-- Aashayvbit.jpg
|   |       |-- crowdsourcevbit.jpg
|   |       |-- edunet-logo.png
|   |       |-- gym.png
|   |       |-- instagram-logo.png
|   |       |-- krishi.png
|   |       |-- tab.png
|   |       |-- uptoskills.png
|   |       |-- vaaniplan.png
|   |       `-- youtube.png
|   |-- components/
|   |   |-- AchievementsSection.tsx
|   |   |-- CertificationsSection.tsx
|   |   |-- CursorGlow.tsx
|   |   |-- EducationSection.tsx
|   |   |-- ExperienceSection.tsx
|   |   |-- FeaturedInSection.tsx
|   |   |-- GetInTouchSection.tsx
|   |   |-- HeroSection.tsx
|   |   |-- Navigation.tsx
|   |   |-- ProjectsSection.tsx
|   |   |-- ScrollToTop.tsx
|   |   |-- SkillsSection.tsx
|   |   `-- ui/                       # shadcn/Radix component library scaffold
|   |-- data/
|   |   |-- experiences.ts
|   |   `-- projects.ts
|   |-- hooks/
|   |   |-- use-mobile.tsx
|   |   `-- use-toast.ts
|   |-- lib/
|   |   `-- utils.ts
|   |-- pages/
|   |   |-- ExperienceDetail.tsx
|   |   |-- Index.tsx
|   |   |-- NotFound.tsx
|   |   `-- ProjectDetail.tsx
|   |-- utils/
|   |   `-- imageProcessor.ts
|   |-- App.css
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|   `-- vite-env.d.ts
|-- .gitignore
|-- bun.lockb
|-- components.json
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- portfolio_extracted_data.md
|-- postcss.config.js
|-- README.md
|-- tailwind.config.ts
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
`-- vite.config.ts
```

### Important Files

| File | Purpose | Status |
|---|---|---|
| `package.json` | Scripts, dependencies, GitHub Pages homepage | Functional; project name still generic |
| `vite.config.ts` | Vite config, React SWC plugin, alias, `base: "/KAUSHIK/"` | Correct for GitHub Pages subpath |
| `index.html` | Root HTML, GA script, favicon links, meta description, font links | Functional but SEO is minimal |
| `.github/workflows/deploy.yml` | Builds and deploys `dist` on pushes to `main` | Functional pattern |
| `src/App.tsx` | Providers, router, route definitions, global cursor glow | Functional, but has unused providers |
| `src/pages/Index.tsx` | Home page section composition | Clear and simple |
| `src/pages/ProjectDetail.tsx` | Dynamic project detail route | Useful developer signal |
| `src/pages/ExperienceDetail.tsx` | Dynamic experience detail route | Useful proof/detail signal |
| `src/pages/NotFound.tsx` | Fallback route | Works in-app; home link is not GitHub Pages subpath-safe |
| `src/data/projects.ts` | Project detail data source | Strong content; should become single source |
| `src/data/experiences.ts` | Experience detail data source | Good structure; some proof gaps |
| `src/components/ProjectsSection.tsx` | Home project grid | Duplicates data instead of importing `src/data/projects.ts` |
| `src/components/HeroSection.tsx` | First impression, profile image, resume/social/email links | Visually clean but missing role/value copy |
| `src/components/GetInTouchSection.tsx` | Contact CTA links | Clear but no form/event tracking |
| `src/index.css` | Tailwind layers, theme utilities, global body styling | Central style system |
| `src/App.css` | Default Vite demo styles | Not imported; likely leftover |
| `src/utils/imageProcessor.ts` | Background removal utilities using Hugging Face Transformers | Not referenced; adds dependency concern |
| `public/site.webmanifest` | PWA manifest | Present but empty name fields and root-relative icon paths |
| `README.md` | Repo README | Content exists; terminal output showed encoding artifacts in some environments |

## 3. Tech Stack Findings

| Technology | Actual usage | Necessary? | Status / cleanup recommendation |
|---|---|---:|---|
| React | App is built with React components in `src/components`, `src/pages`, `src/App.tsx` | Yes | Keep |
| TypeScript | All app files are `.ts`/`.tsx`; `tsc --noEmit` passes | Yes | Keep; consider stricter TS later |
| Vite | `vite.config.ts`, `npm run build`, GitHub Actions build | Yes | Keep |
| Tailwind CSS | Used heavily via utility classes and `src/index.css` custom utilities | Yes | Keep |
| React Router | `BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`, `useParams` | Yes | Keep; add GitHub Pages deep-link fallback |
| Framer Motion | Used in every main section and detail page animations | Yes | Keep; consider reduced-motion support |
| Radix UI | Only active through shadcn `TooltipProvider`, toast/toaster components, and unused UI library files | Partly | Keep only components actually used; cleanup later |
| Lucide React | Used for icons across hero, nav-related sections, cards, contact | Yes | Keep |
| Heroicons | Installed in `package.json`; no source import found | No | Remove later if unused |
| Google Analytics | Inline gtag in `index.html` with ID `G-E5L9TZR005` | Yes | Preserve; add event tracking |
| gh-pages | `deploy` script uses `gh-pages -d dist`; Actions uses peaceiris instead | Optional | Keep if manual deploy is useful |
| GitHub Actions | `.github/workflows/deploy.yml` deploys on `main` push | Yes | Preserve |
| EmailJS | No `emailjs` dependency or source usage found | No | Add only if contact form is implemented |
| React Query | Provider is mounted in `src/App.tsx`, but no query hooks found | No current need | Remove later unless planned |
| Sonner / Toast | Providers mounted, no toast usage found | No current need | Remove later unless contact form needs feedback |
| Hugging Face Transformers | Imported only in unused `src/utils/imageProcessor.ts` | No current need | Remove/defer; avoid accidental bundle growth |
| shadcn extras | Calendar, chart, command, drawer, sidebar, forms, etc. exist but are not used by app pages | No current need | Cleanup in a later dependency hygiene phase |
| `lovable-tagger` | Dev dependency, no config usage found | No current need | Candidate cleanup |

### Unused / likely over-installed dependencies

Installed packages with no app-level usage found outside unused shadcn components or unused utilities: `@heroicons/react`, `@hookform/resolvers`, `@huggingface/transformers`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `vaul`, `zod`, and likely `@tanstack/react-query`.

Do not remove these immediately during a branding/content pass. Remove them in a separate cleanup phase after confirming no hidden future branch or generated component depends on them.

## 4. Routes and Pages

Routes are defined in `src/App.tsx`.

| Route | Component | Purpose | Status | Risk |
|---|---|---|---|---|
| `/` | `src/pages/Index.tsx` | Main portfolio page | Working | None for in-app navigation |
| `/project/:slug` | `src/pages/ProjectDetail.tsx` | Project case-study/detail pages | Working | Direct URL may fail on GitHub Pages without SPA fallback |
| `/experience/:slug` | `src/pages/ExperienceDetail.tsx` | Experience detail pages | Working | Direct URL may fail on GitHub Pages without SPA fallback |
| `*` | `src/pages/NotFound.tsx` | In-app fallback | Basic | Link uses `href="/"`, which points to domain root, not `/KAUSHIK/` |

### Homepage Sections

Section order in `src/pages/Index.tsx`:

1. `#home` - `HeroSection`
2. `#FeaturedInSection` - `FeaturedInSection`
3. `#experience` - `ExperienceSection`
4. `#skills` - `SkillsSection`
5. `#projects` - `ProjectsSection`
6. `#education` - `EducationSection`
7. `#certifications` - `CertificationsSection`
8. `#achievements` - `AchievementsSection`
9. `#contact` - `GetInTouchSection`

### Routing Findings

- `BrowserRouter basename={import.meta.env.BASE_URL}` is correct for `/KAUSHIK/` when users enter through the home page.
- `ScrollToTop` resets scroll on route change, which is good for detail pages.
- Project and experience links use React Router `Link`, preserving SPA navigation.
- GitHub Pages direct navigation to `/KAUSHIK/project/vaaniplan` may return a static 404 because no `public/404.html` exists.
- `NotFound.tsx` should use React Router `Link` or `import.meta.env.BASE_URL`; current `href="/"` can send users away from the GitHub Pages subpath.
- The navigation bar has no `Contact` item, so recruiters do not have a direct top-nav jump to contact.

## 5. UI Section Audit

### Navigation - `src/components/Navigation.tsx`

Purpose: fixed top navigation with active section tracking and smooth scroll.

Current content: Home, Experience, Skills, Projects, Education, Certificates, Achievements.

Layout: centered pill navigation inside fixed glass nav. Uses flex wrap and horizontal overflow.

Visual quality: cohesive with the site style; compact and polished.

Mobile behavior: wrapping and `overflow-x-auto` help on smaller screens, but many nav items may feel dense.

Strong:
- Active state gives orientation.
- Smooth scroll improves one-page experience.
- Compact enough for a portfolio.

Incomplete:
- No Contact item.
- No About label in nav even though About Me is a major section.
- Active section tracking does not include contact or about/featured section.

Improve:
- Add Contact and About/Focal section thoughtfully, or reduce nav to highest-value recruiter paths: Home, About, Projects, Experience, Contact.

### Hero - `src/components/HeroSection.tsx`

Purpose: first impression, identity, profile image, recruiter CTAs.

Current visible text:
- `Kaushik Yellanki`
- `Resume`
- `LinkedIn`
- `Email`

Commented-out text:
- `AI Engineer and Data Analyst`
- `AI Engineer building intelligent, data-driven systems with real-world business impact.`

Layout: two-column desktop grid, image first on mobile, name/buttons below.

Visual quality: clean profile image, strong spacing, restrained CTAs.

Mobile behavior: responsive image sizing and ordering are good.

Strong:
- Real profile photo adds trust.
- Resume, LinkedIn, Email are immediately available.
- Minimal and uncluttered.

Incomplete:
- No visible role, builder positioning, or memorable value proposition.
- Does not immediately say AI builder/software developer/project builder/hackathon participant.
- No GitHub CTA in hero.

Improve:
- Restore a concise role line and one human builder sentence.
- Keep the current layout; do not redesign the hero.

### About / Focus - `src/components/FeaturedInSection.tsx`

Purpose: personal context and career direction.

Current visible text:
- Heading: `About Me`
- Cards: `About Me`, `My Focus`, `Career Goals`
- Copy emphasizes CS graduate, AI/ML/Data Analytics, full-stack AI-driven analytics platforms, AI/NLP/data visualization, entry-level roles and internships.

Layout: three cards in responsive grid.

Visual quality: clean, but card titles are somewhat generic.

Mobile behavior: stacks via `sm:grid-cols-2 md:grid-cols-3`.

Strong:
- Gives personal direction.
- Clear recruiter role targeting.
- Mentions product thinking and user-centric design.

Incomplete:
- Does not mention current building/learning.
- Feels more like career summary than personal brand.
- The section id is `FeaturedInSection`, which is not semantic.

Improve:
- Reframe into sharper builder identity: what you build, why you care, what you are currently exploring.

### Experience - `src/components/ExperienceSection.tsx`, `src/data/experiences.ts`

Purpose: professional and community experience cards with links to detail pages.

Current entries:
- AI Research Intern, UptoSkills, Feb 2026 - Present
- AI Engineer, Tech Saksham Program (Edunet Foundation), Feb 2025 - Mar 2025
- Marketing Associate, Google Crowdsource VBIT, 2023 - 2024
- Social Media & Promotions Associate, Aashay VBIT, 2023 - 2024

Layout: vertical glass cards with logo, role, company, period, description, skill pills, View Details link.

Visual quality: strong and recruiter-friendly.

Mobile behavior: cards stay readable, but logo + content row may be tight on very small widths.

Strong:
- Detail pages create depth.
- Experience includes technical and community/community-growth signals.
- Logos make it more credible.

Incomplete:
- UptoSkills has empty `projectLink`, so the detail page has no proof link.
- Some impact metrics are commented out in `src/data/experiences.ts`.
- Marketing/community roles may need clearer relationship to AI builder identity.

Improve:
- Restore or refine impact statements if they are accurate.
- Add proof links where available.
- Add one sentence per non-technical role tying it to leadership, communication, growth, or community building.

### Experience Detail Pages - `src/pages/ExperienceDetail.tsx`

Purpose: role-level deep dive.

Current content blocks: Impact Summary, Role Overview, Responsibilities, Tech Stack, Results / Achievements, Screenshots / Proof, View Work.

Layout: one large glass card with sections.

Visual quality: consistent with project detail pages.

Mobile behavior: responsive vertical stack.

Strong:
- Good information architecture.
- Skills and results are easy to scan.

Incomplete:
- `impact` is commented out in current data, so Impact Summary may not render.
- Screenshots are supported but not currently used in `experiences.ts`.
- Empty proof link for UptoSkills weakens trust.

Improve:
- Add verified impact/proof where possible.

### Skills - `src/components/SkillsSection.tsx`

Purpose: skill categories.

Current categories:
- Languages
- AI / Machine Learning
- Web Development
- Tools & Deployment
- Visualization
- Professional Skills

Layout: stacked cards with category icon and pill tags.

Visual quality: clean but long.

Mobile behavior: readable; stacked cards are safe.

Strong:
- Categorized instead of one giant list.
- Good mix of AI, web, tools, and professional skills.

Incomplete:
- Core CS and APIs sections are commented out.
- Some skills are broad or duplicated: `Problem Solving`, `Structured Problem Solving & Communication`.
- Tech stack is visible but could be more tied to project evidence.

Improve:
- Keep fewer, stronger categories.
- Move proof-heavy tech into projects and detail pages rather than expanding this list.

### Projects - `src/components/ProjectsSection.tsx`

Purpose: home project showcase.

Current projects:
- Integrated Review of YouTube Videos - Sentiment Analysis using AI
- VaaniPlan - Voice-First AI Daily Planning Assistant
- Gym Membership Management System
- Public Interest Analysis of Google Products
- Krishi Seva - Intelligent Agricultural Decision Agent

Layout: two-column responsive card grid, image, title, description, tags, View Project.

Visual quality: strong and relevant.

Mobile behavior: `md:grid-cols-2` collapses to one column; good.

Strong:
- Strong project mix: NLP, LLM assistant, admin system, Tableau, AI agents/agritech.
- Outcome metrics in card descriptions improve recruiter readability.
- Internal detail pages avoid overwhelming cards.

Incomplete:
- This component defines its own `projects` array instead of importing from `src/data/projects.ts`.
- Some cards do not surface GitHub/live buttons directly; users must click View Project.
- Krishi image is commented out in the home component but present in detail data.
- No featured/priority treatment for the strongest AI builder projects.

Improve:
- Make `src/data/projects.ts` the single source of truth.
- Add compact GitHub/demo indicators on cards while keeping cards uncluttered.

### Project Detail Pages - `src/pages/ProjectDetail.tsx`, `src/data/projects.ts`

Purpose: case-study pages for developer proof.

Current content blocks: description, key achievements, tech stack, project overview, problem, solution, results, screenshots, GitHub/live/Medium links.

Visual quality: good structure; polished enough to signal engineering depth.

Strong:
- Problem/solution/results framing is exactly right for developer portfolio completeness.
- Includes measurable impact.
- Supports Medium links.

Incomplete:
- Architecture, challenges, tradeoffs, and learnings are not separate sections.
- Screenshots currently reuse logos/project images, not actual UI screenshots.
- Some projects have no live demo or GitHub link.
- No related project navigation.

Improve:
- Add concise Architecture, Challenges, Learnings fields for top projects first.
- Replace logo screenshots with real screenshots.

### Education - `src/components/EducationSection.tsx`

Purpose: academic background.

Current entries: B.Tech CSE at VBIT, Intermediate MPC, SSC.

Layout: stacked cards with score, description, coursework.

Visual quality: consistent.

Mobile behavior: readable, though school/period row can wrap.

Strong:
- Gives academic legitimacy.
- B.Tech coursework supports AI/developer role.

Incomplete:
- School-level details take similar visual weight as B.Tech.

Improve:
- Keep B.Tech prominent; compress earlier education if page length becomes an issue.

### Certifications - `src/components/CertificationsSection.tsx`

Purpose: credential proof.

Current content: 13 certifications from Alteryx, Wipro, IBM, AWS, Cisco, Coursera, Forage.

Layout: animated carousel, 4 per page, arrow buttons and dots, draggable.

Visual quality: interactive and compact.

Mobile behavior: grid changes to single/two columns; drag helps but carousel controls need accessible labels.

Strong:
- Prevents certificate list from becoming huge.
- Good credibility layer.

Incomplete:
- Arrow buttons and dot buttons have no accessible names.
- Carousel may hide important credentials from recruiters who do not interact.

Improve:
- Add `aria-label`s.
- Consider showing the most relevant AI/cloud certifications first.

### Achievements - `src/components/AchievementsSection.tsx`

Purpose: proof of community, writing, hackathons, recognition, products.

Current entries:
- Hackathon Organizer - Google Crowdsource VBIT
- The Abundance of Space Theory - Medium Blog
- Farmer OS selected in Top 50 at Lyzr Agentathon 2026
- 1M1B recognized open-source LLM project
- Topmate AI Project Documentation

Layout: stacked glass cards.

Visual quality: strong, but some copy needs tightening.

Mobile behavior: safe stacked layout.

Strong:
- Adds memorable non-resume signals.
- Hackathon and recognition items are valuable personal brand proof.
- Writing/product documentation signal is distinctive.

Incomplete:
- Some descriptions have grammar issues.
- Achievement titles are mixed between formal and informal.
- The relevance of "The Abundance of Space Theory" to AI/software brand needs clearer framing.

Improve:
- Refine copy for professionalism while keeping personality.

### Contact / Get in Touch - `src/components/GetInTouchSection.tsx`

Purpose: conversion section.

Current visible text:
- `Get in Touch`
- `Let's connect and create something impactful together.`
- Links: Email, LinkedIn, GitHub, Resume

Layout: centered CTA heading and buttons.

Visual quality: clean, recruiter-friendly.

Mobile behavior: buttons wrap well and have minimum width.

Strong:
- Recruiter can reach email/resume/LinkedIn/GitHub.
- Simple and not cluttered.

Incomplete:
- No contact form.
- Email opens Gmail compose, which may not work well for users not logged into Gmail.
- No `mailto:` fallback.
- No event tracking on CTA clicks.

Improve:
- Add `mailto:` or dual email option before EmailJS.
- Later add EmailJS only if you want an in-site form.

### Footer

No dedicated footer component was found.

Impact:
- Missing final trust/navigation layer.
- No copyright, location/timezone, social links, or "built with" note.

Improve:
- Add a small footer only after the hero/contact/project foundations are improved.

## 6. Developer Portfolio Audit

### Strengths

- The portfolio has five visible projects, mostly aligned with AI/software/data.
- Project detail pages already use recruiter-friendly case study blocks: problem, solution, results, tech stack.
- Several projects include quantified outcomes: 70% manual review reduction, 60-70% planning reduction, 65-70% admin reduction.
- GitHub and live links are present for several important projects.
- Experience detail pages show responsibilities, skills, and results.
- Skills are categorized and do not dominate the whole site.

### Weaknesses

- The hero does not clearly state "AI builder", "software developer", or "project builder" because the subtitle is commented out.
- Project details do not yet explain architecture, tradeoffs, challenges, or learnings.
- Screenshots are mostly logos or representative images, not product screenshots.
- Project data duplication can cause cards and detail pages to disagree.
- Some projects have empty `github`, `live`, or `medium` fields.
- No direct "currently building" signal.

### Missing developer signals

- Architecture diagrams or concise architecture sections for top projects.
- Technical decisions/tradeoffs.
- Challenges and debugging stories.
- What changed after shipping.
- Clear demo/GitHub availability badges on project cards.
- Current build status or "Now building" note.

### Recommended improvements

1. Use `src/data/projects.ts` as the single project source.
2. Add architecture/challenges/learnings fields for VaaniPlan, YouTube Sentiment, Farmer OS/Krishi, and Gym Membership.
3. Add real screenshots for top projects.
4. Add compact CTA row to project cards: GitHub, Demo, Case Study.
5. Keep tech pills limited and outcome-focused.

## 7. Personal Brand Audit

### Strengths

- Real profile photo builds trust.
- About section communicates AI/ML/data direction.
- Achievements include hackathon/community/writing/product signals.
- Contact section sounds collaborative and human.
- The visual identity is consistent and memorable.

### Weaknesses

- Hero lacks a visible human positioning line.
- About copy is professional but generic in places.
- No "currently building" or "currently learning" area.
- Community/hackathon signals exist but are lower on the page.
- The site does not yet tell a crisp story: "I build AI systems that turn messy inputs into useful workflows."

### Missing personal signals

- Current build focus.
- Personal operating style.
- What kinds of problems you like solving.
- A short human sentence that is not just resume copy.
- Optional writing/open-source/community section grouping.

### Recommended improvements

- Add one strong hero line and one personal builder sentence.
- Rework About cards to avoid repeating "AI/ML/Data Analytics" too many times.
- Surface hackathon/Agentathon recognition closer to projects or achievements.
- Add a compact "Currently building / learning" block only if it stays lean.

## 8. Content Audit

### Hero copy

Current visible copy:

```text
Kaushik Yellanki
Resume
LinkedIn
Email
```

Issue:
- Too sparse. It does not communicate role, value, or builder identity.

Suggested direction:
- Add a concise role line and value sentence. Keep it specific to AI systems, shipped projects, and technical problem solving.

### About copy

Current copy summary:
- CS graduate with AI/ML/Data Analytics foundation.
- Experience building full-stack AI-driven analytics platforms and intelligent systems.
- Interested in AI, NLP, and data visualization for real-world problems.
- Targeting entry-level roles and internships in AI Engineering, Data Analysis, ML, and Data Science.

Issue:
- Clear but slightly broad and resume-like.
- Repeats AI/data terms without a memorable personal angle.

Suggested direction:
- Make it more builder-centered and less category-centered.

### Project copy

Current copy summary:
- Strong outcome language for YouTube review, VaaniPlan, Gym Membership, Tableau analysis, Krishi Seva.

Issue:
- Some metrics may need proof/context.
- Detail pages could better explain engineering thinking.
- Home project data duplicates detail project data.

Suggested direction:
- Keep metrics, but add context and case-study depth for top projects.

### Experience copy

Current copy summary:
- Technical internship and AI engineer roles are clear.
- Marketing/community roles describe campaigns and engagement.

Issue:
- Some impact statements are commented out.
- Non-technical roles need clearer connection to leadership/community/building.

Suggested direction:
- Use results and proof links where available.

### Achievements copy

Current issue examples:
- "Wrote a blog on The Abundance of Space Theory on Medium" is too thin.
- "makes use of unstructural thoughts into Structural plan" needs grammar/professional refinement.
- "Made a AI project Documentation Guide..." needs grammar correction.

Suggested direction:
- Tighten language and make each achievement answer: what, proof, why it matters.

### Contact copy

Current copy:

```text
Get in Touch
Let's connect and create something impactful together.
```

Issue:
- Friendly but generic.

Suggested direction:
- Keep friendly tone, but make recruiter action obvious: roles, collaborations, AI/product projects.

## 9. Contact / Conversion Audit

### Current conversion assets

| Asset | Location | Status |
|---|---|---|
| Resume link | `HeroSection`, `GetInTouchSection` | Present, Google Drive |
| LinkedIn | `HeroSection`, `GetInTouchSection` | Present |
| GitHub profile | `GetInTouchSection` | Present |
| Email link | `HeroSection`, `GetInTouchSection` | Present, Gmail compose URL |
| Project GitHub links | `src/data/projects.ts`, `ProjectsSection.tsx` | Present for most |
| Live demos | `src/data/projects.ts`, `ProjectsSection.tsx` | Present for VaaniPlan, Gym, Tableau |
| Medium links | Project detail supports Medium; VaaniPlan has one in `src/data/projects.ts` | Present but not consistently surfaced |
| EmailJS | N/A | Not implemented |

### Findings

- Recruiters can contact you, but Gmail compose links are not ideal for every user.
- Resume is easy to access.
- GitHub profile is not in the hero, only in contact.
- Contact section is clear but near the bottom and absent from navigation.
- No analytics events track resume, contact, project, GitHub, or demo clicks.

### Recommended improvements

1. Add Contact to navigation.
2. Use a `mailto:kaushikyellanki@gmail.com` fallback or replace Gmail compose with `mailto:`.
3. Add GitHub CTA to hero if the hero can stay uncluttered.
4. Add GA events for `resume_click`, `email_click`, `linkedin_click`, `github_click`, `project_detail_click`, `project_github_click`, `project_demo_click`.
5. Add EmailJS later only if a form is desired.

## 10. Analytics Audit

### Current analytics status

- Google Analytics gtag is present in `index.html`.
- Measurement ID: `G-E5L9TZR005`.
- It is loaded in the document head.
- It tracks page load/config only.
- No event tracking was found in `src`.

### Missing tracking events

- Resume clicks.
- Email/contact clicks.
- LinkedIn/GitHub clicks.
- Project detail clicks.
- Project GitHub/live/Medium clicks.
- Experience proof link clicks.
- Certification credential clicks.

### Suggested event tracking plan

| Event | Trigger | Suggested params |
|---|---|---|
| `resume_click` | Resume button in hero/contact | `{ location: "hero" | "contact" }` |
| `contact_click` | Email/LinkedIn/GitHub contact buttons | `{ type, location }` |
| `project_detail_click` | Home project card detail link | `{ slug, title }` |
| `project_outbound_click` | GitHub/live/Medium on project detail | `{ slug, type }` |
| `experience_detail_click` | Home experience detail link | `{ slug, title }` |
| `credential_click` | Certification link | `{ title, issuer }` |

Keep the existing GA script. Add a small typed helper in a later implementation phase instead of scattering `window.gtag` calls everywhere.

## 11. SEO Audit

### Current SEO status

Present:
- `<title>Kaushik Yellanki | Portfolio</title>`
- `<meta name="description" content="Personal portfolio of Kaushik Yellanki" />`
- `<meta name="author" content="Kaushik Yellanki" />`
- Favicons and web manifest are linked.
- Google fonts are linked.

Missing:
- Canonical URL.
- Open Graph title/description/image/url/type.
- Twitter card tags.
- Structured data.
- `robots.txt`.
- `sitemap.xml`.
- Strong descriptive meta description.
- Manifest `name` and `short_name`.
- Route-specific metadata for project pages.

### Recommended SEO improvements

Add to `index.html`:

- Canonical: `https://yellankikaushik.github.io/KAUSHIK/`
- Stronger description: "Kaushik Yellanki is an AI builder and software developer building practical AI, data, and web projects across LLMs, NLP, dashboards, and automation."
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- JSON-LD Person schema with name, URL, GitHub, LinkedIn, sameAs links, job focus.

Add to `public/`:

- `robots.txt`
- `sitemap.xml`
- Optional `404.html` for GitHub Pages SPA fallback.

Update `public/site.webmanifest`:

- Set `name` and `short_name`.
- Ensure icon paths work under `/KAUSHIK/` after deploy.

## 12. Accessibility Audit

### Issues

| Issue | File | Severity | Recommendation |
|---|---|---:|---|
| Global `body { cursor: none; }` hides the native cursor even before `CursorGlow` initializes | `src/index.css`, `src/components/CursorGlow.tsx` | Medium | Scope cursor hiding to desktop/fine pointer and ensure fallback |
| Carousel arrow buttons have no accessible label | `src/components/CertificationsSection.tsx` | Medium | Add `aria-label="Previous certifications"` and `aria-label="Next certifications"` |
| Carousel dot buttons have no accessible label | `src/components/CertificationsSection.tsx` | Low/Medium | Add page labels |
| 404 home link uses raw anchor to `/` | `src/pages/NotFound.tsx` | Medium | Use React Router `Link` or basename-safe URL |
| Project/experience screenshot alt text is generic | `ProjectDetail.tsx`, `ExperienceDetail.tsx` | Low | Use project/experience title in alt text |
| Back buttons are text-only and rely on browser history | detail pages | Low | Add clearer fallback behavior for direct entry |
| Heading hierarchy starts with hero `h1`, then section `h2`s; detail pages have `h1` | Good | Keep |
| Focus styles rely mostly on browser/Tailwind defaults | Several buttons/links | Medium | Add consistent `focus-visible` rings |
| Motion animations do not check reduced-motion preference | Many sections | Medium | Add reduced-motion handling later |

### Positive accessibility notes

- Profile image has descriptive alt text.
- Project card images use project title as alt text.
- Real buttons are used for scroll nav and carousel controls.
- Links have visible text labels.

## 13. Performance Audit

### Build status

Commands run:

```text
npm run build
```

Result:
- Failed before Vite because local/global npm shim points to missing `npm-cli.js`.

```text
.\node_modules\.bin\vite.cmd build
```

Result:
- Succeeded when run outside the sandbox after filesystem permission denial inside sandbox.

Production output:

| Asset | Size |
|---|---:|
| `dist/index.html` | 1.56 kB |
| `dist/assets/index-C4BSi1JB.js` | 478.45 kB, gzip 157.97 kB |
| `dist/assets/index-CRRXzZzz.css` | 59.15 kB, gzip 10.45 kB |
| `dist/assets/krishi-B3IKPqOH.png` | 538.95 kB |
| `dist/assets/crowdsourcevbit-BXRY85Ux.jpg` | 127.46 kB |
| `dist/assets/Aashayvbit-Cl0K0DDl.jpg` | 89.14 kB |
| `dist/assets/uptoskills-Dc9zbfSG.png` | 58.54 kB |
| `dist/assets/profile-c29ErbeY.jpeg` | 19.24 kB |

Warnings:
- Browserslist/caniuse-lite data is 20 months old.

### Bundle concerns

- Single JS bundle is acceptable but can improve.
- `src/utils/imageProcessor.ts` imports Hugging Face Transformers but is not referenced. Because it is not imported by the app, it does not appear to inflate the current production bundle, but the dependency greatly increases install footprint and future risk.
- Many shadcn UI components and dependencies exist but are not part of the visible app.
- `krishi.png` is the largest shipped image at 538.95 kB.
- No route-level lazy loading for project/experience detail pages.
- Framer Motion is used throughout; acceptable, but reduced-motion support is missing.

### Recommended optimizations

1. Compress/replace `src/assets/logos/krishi.png`.
2. Add lazy route imports for `ProjectDetail` and `ExperienceDetail` only after functionality is stable.
3. Remove unused Hugging Face image processor and dependency in a cleanup phase.
4. Remove unused shadcn components/dependencies in a separate cleanup PR.
5. Add `prefers-reduced-motion` handling.

## 14. Deployment Audit

### Current deployment status

`package.json`:

- `build`: `vite build`
- `predeploy`: `npm run build`
- `deploy`: `gh-pages -d dist`
- `homepage`: `https://yellankikaushik.github.io/KAUSHIK`

`vite.config.ts`:

- `base: "/KAUSHIK/"`

`.github/workflows/deploy.yml`:

- Triggers on pushes to `main`.
- Uses Node 18.
- Runs `npm install`.
- Runs `npm run build`.
- Deploys `./dist` using `peaceiris/actions-gh-pages@v3`.

### Deployment risks

- No `404.html` SPA fallback, so direct project/experience URLs may fail on GitHub Pages.
- Manual `npm run deploy` depends on local npm working; current local npm shim is broken in this audit environment.
- Workflow uses `npm install` rather than `npm ci`; reproducibility could be improved because `package-lock.json` exists.
- Both `bun.lockb` and `package-lock.json` exist; the active workflow uses npm, so `package-lock.json` is authoritative.
- Vite 7 is installed while GitHub Actions uses Node 18. The build succeeded locally with Node 24; confirm CI compatibility if future builds fail.

### What should not be changed casually

- Do not remove `base: "/KAUSHIK/"`.
- Do not switch routing strategy without considering GitHub Pages.
- Do not remove GA script.
- Do not rewrite deployment workflow during content/UI phases.
- Do not delete `dist` unless deployment process is intentionally cleaned up.

## 15. Bugs / Risks

| Risk | Severity | Evidence | Recommended fix |
|---|---:|---|---|
| Project data duplicated between home cards and detail pages | High | `ProjectsSection.tsx` has local `projects`; `ProjectDetail.tsx` uses `src/data/projects.ts` | Use `src/data/projects.ts` as single source |
| Direct detail URLs may 404 on GitHub Pages | High | `BrowserRouter`, no `public/404.html` | Add SPA fallback or GitHub Pages-compatible redirect |
| Hero lacks visible positioning copy | High | Role/value copy commented out in `HeroSection.tsx` | Restore concise role and builder sentence |
| Contact section missing from nav | Medium | `Navigation.tsx` navItems excludes contact | Add Contact or simplify nav |
| 404 home link routes to `/` | Medium | `NotFound.tsx` uses `<a href="/">` | Use `Link to="/"` with basename |
| ESLint toolchain crashes | Medium | ESLint TypeError in `@typescript-eslint/no-unused-expressions` | Align ESLint and TypeScript ESLint versions/config |
| Empty proof links | Medium | UptoSkills `projectLink` empty | Add proof link or hide link cleanly |
| Missing SEO social tags | Medium | `index.html` only has title/description/author | Add OG/Twitter/canonical |
| Missing analytics events | Medium | Only page config found | Add typed GA event helper |
| Large `krishi.png` | Low/Medium | 538.95 kB output asset | Compress image |
| Global hidden cursor | Medium | `body { cursor: none; }` | Scope to fine pointer or disable for accessibility |
| Many unused dependencies | Low/Medium | Package scan | Cleanup separately |

## 16. Recommended Roadmap

### Phase 1 - Quick Trust and Branding Fixes

Priority: High  
Risk level: Low  
Expected impact: Immediate first-impression improvement.

Likely files:
- `src/components/HeroSection.tsx`
- `src/components/FeaturedInSection.tsx`
- `src/components/Navigation.tsx`
- `src/components/GetInTouchSection.tsx`

Tasks:
- Restore/improve hero role and value sentence.
- Add a GitHub CTA to hero only if spacing remains clean.
- Add Contact to nav or simplify nav around recruiter intent.
- Tighten About copy so it feels less generic and more builder-focused.
- Improve contact line to be more recruiter/action oriented.

### Phase 2 - Developer Portfolio Completeness

Priority: High  
Risk level: Medium  
Expected impact: Stronger proof of engineering depth.

Likely files:
- `src/data/projects.ts`
- `src/components/ProjectsSection.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/assets/logos/*` or new screenshot assets

Tasks:
- Remove duplicate project data from `ProjectsSection.tsx`; import from `src/data/projects.ts`.
- Add architecture/challenges/learnings fields for top projects.
- Add real screenshots for top projects.
- Add compact GitHub/demo indicators to cards.
- Prioritize AI/LLM/NLP projects visually without adding clutter.

### Phase 3 - Personal Brand Completeness

Priority: Medium  
Risk level: Low/Medium  
Expected impact: More memorable and human portfolio.

Likely files:
- `src/components/FeaturedInSection.tsx`
- `src/components/AchievementsSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/data/experiences.ts`

Tasks:
- Reframe About cards around builder identity, focus, and direction.
- Tighten achievement copy and grammar.
- Add current building/current learning only if it is concise.
- Tie community/hackathon/marketing roles to leadership, communication, and shipping.

### Phase 4 - Contact and Recruiter Conversion

Priority: Medium  
Risk level: Low/Medium  
Expected impact: Better recruiter follow-through.

Likely files:
- `src/components/GetInTouchSection.tsx`
- `src/components/HeroSection.tsx`
- `src/components/Navigation.tsx`
- Potential future EmailJS form component

Tasks:
- Replace Gmail compose URL with `mailto:` or provide fallback.
- Add Contact to nav.
- Add recruiter-friendly CTA copy.
- Consider EmailJS form only after simple links are polished.
- Add visible GitHub profile access in hero or nav if it does not clutter the design.

### Phase 5 - Analytics, SEO, Accessibility, Performance

Priority: Medium  
Risk level: Medium  
Expected impact: Production-quality polish.

Likely files:
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html`
- `public/site.webmanifest`
- `src/lib/analytics.ts` or similar
- `src/components/CertificationsSection.tsx`
- `src/index.css`
- `package.json`
- `eslint.config.js`

Tasks:
- Add canonical, OG, Twitter card, and structured data.
- Add robots and sitemap.
- Add GitHub Pages SPA fallback.
- Add GA event tracking helper and events.
- Add accessible labels to carousel controls.
- Scope hidden cursor behavior.
- Compress `krishi.png`.
- Fix ESLint version/config mismatch.
- Remove unused dependencies in a dedicated cleanup pass.

## 17. First Implementation Recommendation

The single best first implementation task is:

Restore and sharpen the hero positioning in `src/components/HeroSection.tsx`.

Why this first:
- It is low-risk and does not touch routing, deployment, data models, or architecture.
- It immediately fixes the highest-value first impression gap.
- It helps the site communicate "AI builder + software developer + real project shipper" before recruiters scroll.
- The current hero layout is already good, so this is a precise improvement rather than a redesign.

Recommended scope:
- Add one role line under `Kaushik Yellanki`.
- Add one concise builder sentence.
- Keep the existing profile image and buttons.
- Optionally add GitHub as a fourth CTA only if the button row still feels balanced on mobile.

