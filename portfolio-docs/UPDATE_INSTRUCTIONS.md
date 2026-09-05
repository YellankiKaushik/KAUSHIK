# Update Instructions For Future Codex Sessions

## Purpose

Use this file when asked to update the portfolio from the approved documentation in `portfolio-docs/`.

The safe synchronization model is:

```text
APPROVED DOCUMENTATION
        -> DIFF AGAINST CURRENT IMPLEMENTATION
        -> TARGETED CODE CHANGES
        -> VALIDATION
```

The unsafe model is:

```text
blindly regenerate entire website
```

Do not do that.

## Core Rules

1. Treat reviewed and approved `portfolio-docs/` content as authoritative for portfolio facts.
2. Treat the codebase as implementation and presentation.
3. Compare documentation against implementation before editing.
4. Determine exactly what changed.
5. Do not blindly dump Markdown into UI components.
6. Adapt content to the presentation surface.
7. Keep compact UI surfaces concise.
8. Use detailed information on suitable detail pages.
9. Preserve the existing visual hierarchy unless the user explicitly asks for redesign.
10. Preserve existing architecture unless content changes require structural changes.
11. Do not redesign merely because content changed.
12. Update duplicate representations consistently.
13. Update metadata and SEO when facts that affect search/social previews change.
14. Preserve valid functionality not mentioned in Markdown.
15. Never invent missing information.
16. Flag contradictions before choosing.
17. Maintain links consistently.
18. Validate using commands that actually exist in the repository.
19. Review resulting changes.
20. Summarize exactly what was synchronized.

## Recommended Synchronization Process

1. Read `portfolio-docs/README.md`.
2. Read `portfolio-docs/CODEBASE_REFERENCE.md`.
3. Read the content file(s) relevant to the requested change.
4. Inspect the implementation paths listed in `PORTFOLIO_STRUCTURE.md`.
5. Compare approved docs against current source.
6. Create a small change plan.
7. Edit only the needed files.
8. Update all duplicate content surfaces.
9. Update SEO/metadata/sitemap when affected.
10. Run available validation commands.
11. Inspect the git diff.
12. Report changed files, validation results, and any remaining gaps.

## Content Adaptation Rules

### Hero

Use only the tightest approved identity, title, and value proposition. Do not paste long biography text into the hero.

### About

Use approved profile and professional summary material, but keep it readable as short cards or brief paragraphs.

### Project Cards

Project cards should stay concise:

- title;
- short description;
- top technologies;
- high-confidence proof links or detail link.

Use detail pages for:

- problem;
- solution;
- architecture;
- challenges;
- decisions;
- metrics;
- lessons learned.

### Project Detail Pages

Use `PROJECTS.md` as the main source, but only include information with evidence status that is approved or clearly labeled. Do not promote `MISSING`, `NEEDS VERIFICATION`, or `INFERRED` material as factual UI copy unless the user approves it.

### Experience

Preserve the distinction between:

- employment;
- internship;
- program;
- community experience;
- challenge participation.

Do not convert challenge participation into employment.

### Skills

Do not invent proficiency levels. Use categories from `SKILLS.md` and technologies supported by projects, experience, certifications, or explicit approved profile text.

### Certifications And Achievements

Preserve exact titles, issuers, years, and links. Verify external links when asked or when changing them.

### Contact And Links

Update all duplicate contact surfaces:

- `HeroSection.tsx`
- `GetInTouchSection.tsx`
- `portfolioKnowledge.ts`
- `index.html` structured data / metadata if relevant
- README if relevant

## Metadata And SEO Rules

When title, positioning, primary URL, project visibility, or public routes change, inspect:

- `index.html`
- `src/utils/seo.ts`
- `src/pages/Index.tsx`
- `src/pages/ChallengeOverview.tsx`
- `src/pages/ChallengeDetail.tsx`
- `public/sitemap.xml`
- `public/robots.txt`
- `public/site.webmanifest`

Add or update route-specific SEO only if the implementation supports it or the task requires it.

## AI Assistant Rules

The chatbot must remain knowledge-first.

When content changes, update:

- `src/data/portfolioKnowledge.ts`
- `src/utils/portfolioChatbotEngine.ts` if aliases, categories, or answer logic must change
- `src/components/PortfolioChatbot.tsx` if starter questions or UI text must change
- `api/portfolio-chat.ts` only if server behavior changes

Do not allow the OpenRouter rewrite layer to invent facts beyond verified local answers.

## Validation Commands

Use only commands from `package.json` unless the user asks for something else:

```text
npm run build
npm run dev
npm run preview
npm run predeploy
npm run deploy
```

There is no repository `lint` or `test` script in `package.json` as of this documentation pass.

## Handling Missing Information

If a documentation section says `MISSING`, do not fill it with guesses.

If a section says `INFERRED`, either:

- keep it out of factual UI copy;
- phrase it carefully as interpretation;
- ask Kaushik to verify before publishing it as a claim.

If a section says `NEEDS VERIFICATION`, stop and flag it unless the user provides confirmation.

## Handling Contradictions

When docs and code disagree:

1. Identify both values.
2. Identify source files.
3. Prefer approved docs only after confirming they have been reviewed.
4. If approval is unclear, ask the user or mark it for verification.

## Repository Safety

Do not:

- update dependencies during a content sync unless explicitly requested;
- refactor unrelated components;
- redesign styling;
- remove hidden projects without approval;
- delete `dist/` or generated files unless requested;
- alter deployment configuration unless content/SEO changes require it;
- change secrets or `.env` files.

## Final Report Requirements For Sync Tasks

After synchronization, report:

- docs read;
- implementation areas compared;
- files changed;
- facts synchronized;
- facts skipped because missing/inferred/unverified;
- validation commands run and results;
- remaining manual review items.

