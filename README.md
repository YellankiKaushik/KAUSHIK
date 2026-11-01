# Kaushik Yellanki — Portfolio

Personal portfolio for **Kaushik Yellanki**, an AI systems builder and software developer. The site presents selected projects, experience, skills, education, certifications, achievements, and contact information.

**Live site:** [kaaushik.vercel.app](https://kaaushik.vercel.app/) · [kaaush.vercel.app](https://kaaush.vercel.app/)

## About the project

This is a responsive, single-page portfolio with detail pages for projects and experience, plus an overview and detail pages for challenges. Portfolio content is maintained in typed data modules so it can be updated without restructuring the page components.

The site also includes a portfolio assistant. It answers from the local portfolio knowledge base when possible and can use a Vercel serverless API backed by OpenRouter for supported questions. When the API is unavailable or AI use is not enabled for a question, the client can provide deterministic local responses.

## Features

- Sections for experience, skills, projects, education, certifications, achievements, and contact
- Detail pages for portfolio projects and experience
- Challenge overview and detail pages
- Responsive React interface with motion and icon components
- Portfolio assistant with local knowledge and optional server-side AI
- Optional Google Analytics 4 measurement
- Vercel deployment configuration with security headers and client-side route fallback

## Technology

- React 18 and TypeScript
- Vite 7
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React and Heroicons
- Vercel serverless functions for the assistant API
- OpenRouter for optional assistant responses
- Google Analytics 4, when configured

## Run locally

### Requirements

- Node.js **20.19+** or **22.12+**
- npm

### Install and start

```bash
git clone https://github.com/YellankiKaushik/KAUSHIK.git
cd KAUSHIK
npm ci
npm run dev
```

Vite prints the local URL after the development server starts. In a local build, the app uses `/KAUSHIK/` as its base path; Vercel builds use `/`.

### Optional environment variables

Copy `.env.example` to `.env.local` and set only the integrations you want to use:

| Variable | Purpose |
| --- | --- |
| `OPENROUTER_API_KEY` | Enables server-side OpenRouter requests for the portfolio assistant. Keep this secret and configure it in the Vercel project for hosted deployments. |
| `OPENROUTER_MODEL` | Optional OpenRouter model name. Defaults to `openai/gpt-4o-mini` in the API. |
| `OPENROUTER_SITE_URL` | Optional site URL sent as OpenRouter request metadata. |
| `OPENROUTER_SITE_NAME` | Optional site name sent as OpenRouter request metadata. |
| `VITE_GA_MEASUREMENT_ID` | Optional Google Analytics 4 measurement ID. This value is included in the client build. |

The local portfolio assistant can use its built-in knowledge without an OpenRouter key. The `/api/portfolio-chat` serverless endpoint requires a Vercel-compatible runtime; running `vite` alone does not serve that API route.

Never commit `.env` files, API keys, or other credentials. Client-prefixed `VITE_` values are public in the built site and must not contain secrets.

## Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Publish the `dist/` directory with `gh-pages` (requires the repository's publishing setup) |

## Repository layout

```text
api/                 Vercel serverless API for the portfolio assistant
public/              Static assets and site metadata
src/
  components/        Page sections and shared UI components
  data/              Typed portfolio content and assistant knowledge
  pages/             Home, detail, overview, and not-found pages
  utils/             SEO, analytics, and assistant response helpers
portfolio-docs/      Working notes and source material for portfolio content
```

Key content files include `src/data/projects.ts`, `src/data/experiences.ts`, `src/data/challenges.ts`, and `src/data/portfolioKnowledge.ts`.

## Build and deploy

Build locally before deploying:

```bash
npm ci
npm run build
```

The production site is hosted on Vercel. Connect the repository to a Vercel project and configure any required environment variables in that project's settings. Vercel serves the React application and the assistant API route; the Vite development server by itself serves only the front end.

## Contributing and content accuracy

This is a personal portfolio. Keep project descriptions, experience, credentials, and outcomes consistent with the source records and verifiable evidence. Do not add invented metrics, claims, or credentials. Keep private information and secrets out of the repository.
