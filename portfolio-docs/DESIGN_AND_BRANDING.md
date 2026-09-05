# Design And Branding

## Evidence Status

EXTRACTED from source files and stylesheets. This is documentation only, not a redesign proposal.

## Repository Sources

- `src/index.css`
- `tailwind.config.ts`
- `src/components/Navigation.tsx`
- `src/components/HeroSection.tsx`
- `src/components/FeaturedInSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/ProjectsSection.tsx`
- `src/components/SkillsSection.tsx`
- `src/components/EducationSection.tsx`
- `src/components/CertificationsSection.tsx`
- `src/components/AchievementsSection.tsx`
- `src/components/GetInTouchSection.tsx`
- `src/components/PortfolioChatbot.tsx`
- `src/components/CursorGlow.tsx`

## Visual Direction

The portfolio uses a dark, glassmorphism-heavy visual language with warm orange/accent gradients, translucent cards, glow effects, and animated entrances.

## Typography

- Sans font: Inter.
- Display font: Playfair Display.
- Headings use `font-display`, bold weight, and tight tracking.
- Body uses Inter through Tailwind `font-sans`.

## Theme And Colors

Configured in `tailwind.config.ts`:

- Background: `#0F0A0A`
- Dark background: `#130606`
- Primary light: `#FF8A50`
- Primary: `#FF6B35`
- Primary dark: `#E55527`
- Accent light: `#FFA64D`
- Accent: `#FF8A50`
- Accent dark: `#E55527`

## Layout Patterns

- Main content uses `container mx-auto` with max widths such as `max-w-6xl` or `max-w-5xl`.
- Homepage sections use vertical spacing around `py-8` to `py-12`.
- Cards use `glass-card`.
- Navigation uses `glass-nav`.
- Most major sections include a subtle absolute gradient background overlay.
- Detail pages use a large central glass card.

## Card Patterns

`glass-card` combines:

- backdrop blur;
- translucent white background;
- border;
- shadow;
- rounded corners;
- transition effects.

Repeated cards are used for:

- About highlights.
- Experience entries.
- Skill categories.
- Project cards.
- Education entries.
- Certification cards.
- Achievement entries.
- Contact buttons.
- Chatbot shell.

## Animation And Interactions

Animation library:

- Framer Motion.

Patterns:

- Fade-in on page load.
- Section/cards animate while entering viewport.
- Cards lift/glow on hover.
- Certification carousel uses `AnimatePresence`, direction-aware slide variants, drag gestures, arrow controls, and dots.
- Navigation active section uses `motion.div` with `layoutId="activeTab"`.
- Cursor custom glow is globally mounted.

Reduced motion:

- `src/index.css` includes a `prefers-reduced-motion: reduce` media rule that reduces animation and transition durations and removes hover transform.

## Responsive Conventions

- Mobile-first Tailwind utilities.
- Hero switches from stacked/mobile to two-column layout at `md`.
- Project grid uses one column mobile and two columns from `md`.
- Contact grid adapts from one column to two, three, and six columns.
- Nav uses horizontal overflow and compact pills.
- Certification carousel shows grid cards and remains swipe/drag capable.

## Tone Of Writing

Current tone is:

- professional;
- builder-focused;
- recruiter-friendly;
- pragmatic;
- careful about proof and missing facts;
- focused on practical systems rather than abstract claims.

The chatbot and knowledge base explicitly avoid inflated claims.

## Recurring Visual Motifs

- Warm orange glow.
- Dark background.
- Translucent glass panels.
- Rounded pills for tags.
- Icon-and-text CTA buttons.
- Profile photo in a circular frame with accent border/shadow.
- Skill/project tags with gradient/accent backgrounds.

## Component Conventions

- `lucide-react` icons are used for CTAs and section affordances.
- Data-driven sections map arrays into cards.
- Detail pages use reusable section blocks driven by optional data fields.
- External links include `target="_blank"` and `rel="noopener noreferrer"`.
- Analytics events are attached to significant clicks.

## Styling Architecture

- Tailwind classes are the primary styling mechanism.
- Theme extension is in `tailwind.config.ts`.
- Global base styles and custom utilities are in `src/index.css`.
- shadcn config is in `components.json`.

## Design Libraries

- Tailwind CSS.
- tailwindcss-animate.
- shadcn/Radix-style UI scaffold.
- Framer Motion.
- Lucide React.

## Branding Notes

- Initials logo button uses `KY`.
- Brand name appears as Kaushik Yellanki.
- Site name in metadata is Kaushik Yellanki Portfolio.
- Current role/title is AI Systems Builder & Software Developer.

## Missing Information

- Formal brand guidelines.
- Approved color tokens beyond current implementation.
- Logo usage rules.
- Preferred screenshot style.
- Project image standards.
- Social preview image.

## Verification Notes

- The current palette is warm/dark and somewhat one-family orange. Preserve unless a future task explicitly asks for redesign.
- Do not redesign during content synchronization.

