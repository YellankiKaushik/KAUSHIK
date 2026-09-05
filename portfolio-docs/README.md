# Portfolio Documentation Knowledge Base

## Purpose

`portfolio-docs/` is the maintained content and knowledge layer for this portfolio.

The portfolio application is the presentation layer. It decides layout, routes, styling, animation, and interactions. These Markdown files describe what the portfolio should communicate: identity, positioning, projects, experience, skills, education, achievements, links, proof, and gaps.

## Current Status

These files are a draft extraction generated from the current repository.

They are not automatically authoritative just because they were generated from code. They become authoritative only after human review, corrections, and enrichment.

## Lifecycle

```text
Initial state:
portfolio code -> generated docs

Review state:
generated docs -> manual validation + enrichment

Long-term state:
approved docs -> portfolio implementation
```

## Source-of-Truth Rule

After human review:

```text
portfolio-docs/
    = authoritative portfolio facts/content

portfolio application/codebase
    = implementation and presentation
```

Before human review, treat these documents as a traceable draft extracted from repository evidence.

## Normal Update Workflow

1. Update `portfolio-docs/`.
2. Verify facts, dates, links, names, titles, metrics, and outcomes.
3. Review wording for accuracy and tone.
4. Ask Codex to compare documentation with the implementation.
5. Update only the appropriate portfolio surfaces.
6. Validate the application with commands from `CODEBASE_REFERENCE.md`.
7. Review the resulting diff.
8. Commit documentation and implementation together.

## Regeneration Rule

After these documents are manually reviewed and approved, do not blindly regenerate them from the website or source code. The purpose of this system is to avoid losing reviewed facts, richer case-study notes, and corrections that may not fit inside UI components.

Future synchronization should be documentation-led:

```text
approved portfolio-docs/
        -> diff against current implementation
        -> targeted code changes
        -> validation
```

It should not be:

```text
current website
        -> overwrite approved docs
```

## Document Map

- `CODEBASE_REFERENCE.md` - Technical repository reference for future Codex sessions.
- `PORTFOLIO_OVERVIEW.md` - High-level inventory of what the portfolio currently communicates.
- `PERSONAL_PROFILE.md` - Identity, bio, positioning, interests, and profile proof.
- `PROFESSIONAL_SUMMARY.md` - Recruiter-facing summary and professional focus.
- `EXPERIENCE.md` - Professional, community, and challenge-track experience records.
- `PROJECTS.md` - Detailed project knowledge extraction and missing case-study fields.
- `SKILLS.md` - Skill taxonomy supported by repository evidence.
- `EDUCATION.md` - Education records and coursework.
- `CERTIFICATIONS.md` - Certification inventory and links.
- `ACHIEVEMENTS.md` - Achievement inventory and proof status.
- `CHALLENGES_AND_EVENTS.md` - Challenge, hackathon, and builder-event participation data.
- `SERVICES.md` - Collaboration/open-to areas supported by the current portfolio.
- `CONTACT_AND_LINKS.md` - Contact, resume, writing, social, project, and proof links.
- `PORTFOLIO_STRUCTURE.md` - Mapping from knowledge areas to implementation paths.
- `DESIGN_AND_BRANDING.md` - Current visual language, tone, UI patterns, and libraries.
- `CONTENT_GAPS.md` - Audit of missing, weak, duplicated, conflicting, or stale content.
- `UPDATE_INSTRUCTIONS.md` - Operating rules for future Codex synchronization tasks.

