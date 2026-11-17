# Phase 03 · Projects and case studies

Rebuilt the project list and detail template. Read the six public project READMEs through GitHub. Added a project-specific architecture illustration, implementation choices, and limits for each visible project. Hazlo's public README credits Kaushik as creator and maintainer. Individual scope for the other case studies has no sufficiently specific supporting record, so those pages describe the implementation directly.

Files include src/data/projects.ts, src/data/projectStories.ts, src/components/ProjectVisual.tsx, src/components/ProjectsSection.tsx, and src/pages/ProjectDetail.tsx. All ten legacy project routes still resolve, with the original four archive projects excluded from the homepage. Replaced references to missing screenshot files with labeled visual explanations. FitZone links to the current Vercel production deployment documented by the project and removes the legacy GitHub Pages URL, which returned 404 during browser testing.

No measured user impact or adoption claims were added. Link checks and route tests are in Phase 06. Commit base is 87dc1b9. Next phase integrates profile, writing, challenges, and assistant.
