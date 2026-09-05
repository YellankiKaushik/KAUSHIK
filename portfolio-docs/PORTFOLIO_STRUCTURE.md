# Portfolio Structure

## Evidence Status

EXTRACTED from implementation files.

## Repository Sources

- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/pages/ExperienceDetail.tsx`
- `src/pages/ChallengeOverview.tsx`
- `src/pages/ChallengeDetail.tsx`
- `src/components/*`
- `src/data/*`
- `src/config/resume.ts`
- `src/utils/*`
- `api/*`
- `index.html`
- `public/*`

## Navigation

### Knowledge Domain

- `PORTFOLIO_OVERVIEW.md`
- `PORTFOLIO_STRUCTURE.md`

### Current Implementation

- `src/components/Navigation.tsx`
- `src/pages/Index.tsx`

### Current Purpose

Provides fixed top navigation across homepage sections with active-section tracking and smooth scrolling.

### Content Flow

Navigation labels are hardcoded in `navItems` inside `Navigation.tsx`.

### Notes

Nav includes Home, Experience, Skills, Projects, Education, Certificates, Achievements, and Contact.

## Homepage Hero

### Knowledge Domain

- `PERSONAL_PROFILE.md`
- `PROFESSIONAL_SUMMARY.md`
- `CONTACT_AND_LINKS.md`

### Current Implementation

- `src/components/HeroSection.tsx`
- `src/config/resume.ts`
- `src/assets/profile.jpeg`
- `src/utils/analytics.ts`
- `src/utils/resumeDownload.ts`

### Current Purpose

Communicates identity, title, value statement, profile image, and primary CTAs.

### Content Flow

Hero content is hardcoded inside `HeroSection.tsx`. Resume path comes from `src/config/resume.ts`.

### Notes

Hero includes Resume, GitHub, LinkedIn, and Email buttons.

## About Me

### Knowledge Domain

- `PERSONAL_PROFILE.md`
- `PROFESSIONAL_SUMMARY.md`

### Current Implementation

- `src/components/FeaturedInSection.tsx`
- `src/pages/Index.tsx`
- `src/data/portfolioKnowledge.ts`

### Current Purpose

Summarizes builder mindset, what Kaushik builds, and future direction.

### Content Flow

Visible content comes from a local `featuredHighlights` array in `FeaturedInSection.tsx`. Similar but not identical positioning data exists in `src/data/portfolioKnowledge.ts`.

### Notes

Section id is `FeaturedInSection`, while the visible heading is About Me.

## Professional Experience

### Knowledge Domain

- `EXPERIENCE.md`
- `CHALLENGES_AND_EVENTS.md`

### Current Implementation

- `src/data/experiences.ts`
- `src/components/ExperienceSection.tsx`
- `src/pages/ExperienceDetail.tsx`
- `src/pages/ChallengeOverview.tsx`
- `src/pages/ChallengeDetail.tsx`

### Current Purpose

Displays professional, program, community, and challenge-track experience with detail pages and proof links where available.

### Content Flow

`ExperienceSection.tsx` maps `experiences` from `src/data/experiences.ts`. Standard experience records route to `/experience/:slug`. The challenge record uses `detailRoute: "/experience/challenge-participation"`.

### Notes

Challenge participation is explicitly not employment.

## Challenge Detail Pages

### Knowledge Domain

- `CHALLENGES_AND_EVENTS.md`
- `PROJECTS.md`
- `ACHIEVEMENTS.md`

### Current Implementation

- `src/data/challenges.ts`
- `src/pages/ChallengeOverview.tsx`
- `src/pages/ChallengeDetail.tsx`
- `src/data/projects.ts`

### Current Purpose

Organizes challenge proof, verified/needs-details status, proof links, and related project links.

### Content Flow

`sortedChallenges` from `src/data/challenges.ts` drives overview and detail routes. Related project cards are resolved via `relatedProjectSlug`.

### Notes

Proof links render only when URL fields are present.

## Skills

### Knowledge Domain

- `SKILLS.md`

### Current Implementation

- `src/components/SkillsSection.tsx`
- `src/data/portfolioKnowledge.ts`

### Current Purpose

Displays skill categories and tags.

### Content Flow

Visible skill categories are hardcoded in `SkillsSection.tsx`. The chatbot uses a separate skills object in `portfolioKnowledge.ts`.

### Notes

These duplicate sources should be synchronized carefully in future updates.

## Projects

### Knowledge Domain

- `PROJECTS.md`
- `CHALLENGES_AND_EVENTS.md`

### Current Implementation

- `src/data/projects.ts`
- `src/components/ProjectsSection.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/data/challenges.ts`
- `public/sitemap.xml`

### Current Purpose

Shows selected projects on the homepage and provides detail pages for all project slugs.

### Content Flow

`ProjectsSection.tsx` imports `projects`, filters `visible !== false`, sorts by `order`, and links to `/project/:slug`.

`ProjectDetail.tsx` finds a project by `slug` and renders available fields.

### Notes

Hidden/preserved projects still have potential detail routes even if not shown on homepage.

## Education

### Knowledge Domain

- `EDUCATION.md`

### Current Implementation

- `src/components/EducationSection.tsx`
- `src/data/portfolioKnowledge.ts`

### Current Purpose

Shows academic background, scores, and coursework.

### Content Flow

Visible content comes from a local `education` array in `EducationSection.tsx`. Chatbot education comes from `portfolioKnowledge.ts`.

### Notes

Sources are currently duplicated but mostly consistent.

## Certifications

### Knowledge Domain

- `CERTIFICATIONS.md`

### Current Implementation

- `src/components/CertificationsSection.tsx`
- `src/data/portfolioKnowledge.ts`

### Current Purpose

Shows credential cards with links in a carousel.

### Content Flow

Visible certifications are hardcoded in `CertificationsSection.tsx`. Chatbot certifications are duplicated in `portfolioKnowledge.ts`.

### Notes

Future updates must update both sources unless data is centralized.

## Achievements

### Knowledge Domain

- `ACHIEVEMENTS.md`
- `CHALLENGES_AND_EVENTS.md`

### Current Implementation

- `src/components/AchievementsSection.tsx`
- `src/data/portfolioKnowledge.ts`
- `src/data/challenges.ts`

### Current Purpose

Shows recognition, writing, community, and documentation achievements.

### Content Flow

Visible achievements are hardcoded in `AchievementsSection.tsx`. Chatbot achievements are duplicated in `portfolioKnowledge.ts`.

### Notes

Achievement objects in the visible component include descriptions; `portfolioKnowledge.ts` stores title/year/link only.

## Contact

### Knowledge Domain

- `CONTACT_AND_LINKS.md`
- `SERVICES.md`

### Current Implementation

- `src/components/GetInTouchSection.tsx`
- `src/components/HeroSection.tsx`
- `src/config/resume.ts`
- `src/utils/resumeDownload.ts`
- `src/utils/analytics.ts`
- `api/resume-download-notification.ts`

### Current Purpose

Provides contact/social/resume/writing CTAs and tracks interactions.

### Content Flow

Contact items are hardcoded in `GetInTouchSection.tsx` and duplicated in `HeroSection.tsx` and `portfolioKnowledge.ts`.

### Notes

Resume downloads are tracked and can trigger optional serverless email notification.

## Footer

### Knowledge Domain

MISSING.

### Current Implementation

No dedicated footer component was identified.

### Current Purpose

MISSING.

### Content Flow

MISSING.

### Notes

Contact section acts as the closing section.

## Resume

### Knowledge Domain

- `CONTACT_AND_LINKS.md`
- `PERSONAL_PROFILE.md`

### Current Implementation

- `src/config/resume.ts`
- `public/resume/Kaushik-Resume.pdf`
- `src/components/HeroSection.tsx`
- `src/components/GetInTouchSection.tsx`
- `src/utils/resumeDownload.ts`
- `api/resume-download-notification.ts`

### Current Purpose

Provides downloadable resume CTA from hero and contact sections.

### Content Flow

Resume filename is centralized in `src/config/resume.ts`.

### Notes

Verify the PDF before approval.

## Metadata And SEO

### Knowledge Domain

- `CODEBASE_REFERENCE.md`
- `PERSONAL_PROFILE.md`
- `PROFESSIONAL_SUMMARY.md`
- `CONTACT_AND_LINKS.md`

### Current Implementation

- `index.html`
- `src/utils/seo.ts`
- `src/pages/Index.tsx`
- `src/pages/ChallengeOverview.tsx`
- `src/pages/ChallengeDetail.tsx`
- `public/sitemap.xml`
- `public/robots.txt`
- `public/site.webmanifest`

### Current Purpose

Defines static and route-level discoverability metadata.

### Content Flow

Base metadata is static in `index.html`. Some route descriptions are updated at runtime through `setPageSeo`.

### Notes

Project and experience dynamic pages do not appear to set route-specific metadata.

## AI Portfolio Assistant

### Knowledge Domain

- All portfolio content docs
- `CODEBASE_REFERENCE.md`

### Current Implementation

- `src/components/PortfolioChatbot.tsx`
- `src/utils/portfolioChatbotEngine.ts`
- `src/data/portfolioKnowledge.ts`
- `api/portfolio-chat.ts`
- `docs/VERCEL_OPENROUTER_SETUP.md`

### Current Purpose

Answers recruiter questions from verified local portfolio knowledge, optionally rewritten by OpenRouter.

### Content Flow

Visitor question -> local deterministic answer -> category -> AI usage gate -> optional API rewrite -> local fallback on failure.

### Notes

The verified local answer is the source of truth for chatbot responses.

