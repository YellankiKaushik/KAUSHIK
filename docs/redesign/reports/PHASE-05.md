# Phase 05 · Motion and interaction

The homepage loads Lenis 1.3.15 and GSAP 3.13.0 as a separate chunk for fine-pointer browsers that allow motion. Lenis improves desktop wheel scrolling. GSAP adds a short portrait entrance and small scroll-triggered translations. All text remains visible before and during motion. Spotlight Card and Blur Text from React Bits informed the project-card pointer effect and a brief GSAP entrance on the hero accent word. Both use app-specific code.

Reviewed Lenis (MIT), the GSAP Standard License, React Bits’ MIT plus Commons Clause terms, and Vanta (MIT). The cards use an app-specific implementation of the spotlight idea. Vanta was excluded to avoid an always-running rendering layer and an extra Three.js or p5.js dependency.

Files include src/components/PortfolioMotion.tsx, src/utils/portfolioMotion.ts, ProjectsSection.tsx, package.json, package-lock.json, and src/index.css. Phase 06 records motion and bundle checks. Commit base is 87dc1b9. Next phase validates and prepares the review branch.
