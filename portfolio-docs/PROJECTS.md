# Projects

## Evidence Status

EXTRACTED from repository project data and related renderers. Missing and inferred information is marked.

## Repository Sources

- `src/data/projects.ts`
- `src/components/ProjectsSection.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `src/data/challenges.ts`
- `src/pages/ChallengeDetail.tsx`
- `public/sitemap.xml`

## Project Inventory

Identified projects: 10.

Visible homepage projects according to `visible !== false`: 6.

Hidden/preserved projects according to `visible === false`: 4.

Visible:

- AGROGUIA.AI
- Integrated Review of YouTube Videos
- Hazlo
- AI Crowd Intelligence Assistant
- Sistemaa Electoral
- FitZone Gym Membership Management System

Hidden/preserved:

- Krishi Seva AI Agent
- PsyMatch
- VaaniPlan - Voice-First AI Daily Planning Assistant
- Public Interest Analysis of Google Products

## Common Missing Information Across Projects

- Detailed personal contribution beyond general builder wording.
- Architecture diagrams or architecture sections for most projects.
- Exact timeline.
- Target users.
- Quantitative impact context.
- Deployment status where live link is empty.
- Screenshots because `public/projects/` is missing.
- Project-level Medium links; all `medium` fields are empty.
- Lessons learned.
- Technical tradeoffs.
- Verification of metrics such as percentage improvements.

## Project: AGROGUIA.AI

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `public/projects/agroguia-ai.png` referenced but not found during asset scan

## Status

Working full-stack AI advisory MVP according to project `results`.

## Summary

A full-stack AI farm advisory dashboard that turns farmer profiles and local weather context into structured agricultural decision modules.

## Problem

Farmers often make connected decisions across crop, weather, finance, insurance, schemes, and risk using fragmented information.

## Motivation

INFERRED: The project explores bringing agricultural decision inputs into one structured advisory workflow.

## My Role

MISSING. The repository implies builder ownership but does not explicitly state role.

## Responsibilities

INFERRED from project fields:

- Authentication/user flow implementation.
- Farmer profile onboarding.
- MongoDB persistence.
- Weather enrichment.
- AI advisory generation.
- Dashboard module rendering.

## Architecture

EXTRACTED:

- Authenticated flows.
- Farmer profile onboarding.
- MongoDB-backed data flows.
- OpenWeather enrichment using PIN-code weather context.
- OpenRouter-powered advisory generation.
- Structured response handling.
- Modular dashboard rendering.

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- MongoDB
- Mongoose
- OpenRouter
- OpenWeather
- JWT
- bcrypt

## Key Features

- Farmer, crop, soil, finance, insurance, language, and PIN-code context capture.
- Local weather context enrichment.
- Structured AI modules.
- Weather, pest, crop strategy, schemes, insurance, loans, fraud awareness, and waste value dashboard modules.
- Dashboard-safe LLM response handling.

## Integrations

- OpenRouter.
- OpenWeather.
- MongoDB/Mongoose.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Use structured AI output for dashboard-safe rendering.
- Enrich AI advice with weather context.
- Use authenticated profile-based advisory instead of stateless prompts.

## Results

Built a working full-stack AI advisory MVP with authentication, MongoDB-backed data flows, weather-enriched AI advisory generation, structured response handling, and modular dashboard rendering.

## Metrics

MISSING.

## Timeline

MISSING.

## Deployment

Live link is empty.

## Links

- GitHub: `https://github.com/YellankiKaushik/Agroguia-AI`
- Live: MISSING
- Medium: MISSING

## Assets

- Referenced image: `public/projects/agroguia-ai.png`
- NEEDS VERIFICATION: `public/projects/` was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Visible homepage project.
- Ordered first.
- Featured.
- Detail route: `/project/agroguia-ai`

## Missing Information

- Live demo link, if available.
- Personal contribution.
- Architecture details.
- Technical challenges.
- Results/impact beyond MVP completion.
- Target users.
- Timeline.
- Screenshots.
- Lessons learned.

## Verification Notes

- Verify any agricultural/farmer claims before stronger impact wording.
- Do not claim real users, production adoption, or official agricultural validation unless evidence is added.

## Project: Integrated Review of YouTube Videos

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `public/projects/youtube-review.png` referenced but not found during asset scan

## Status

Working full-stack review dashboard according to project `results`.

## Summary

A full-stack AI dashboard that analyzes YouTube comments and transcripts to generate sentiment breakdowns and viewer feedback summaries.

## Problem

Video feedback is spread across comments, transcripts, and audience signals, making it difficult to review themes and sentiment manually.

## Motivation

INFERRED: Help creators or reviewers inspect viewer feedback in one interface.

## My Role

MISSING.

## Responsibilities

INFERRED:

- YouTube API integration.
- Transcript extraction.
- Backend processing.
- AI summary generation.
- Sentiment visualization.
- Dashboard UI.

## Architecture

EXTRACTED:

- Next.js/React frontend.
- Flask/Python backend processing.
- YouTube Data API and YouTube Transcript API data sources.
- OpenAI-powered summaries.
- Recharts sentiment visualization.

## Technology Stack

- Next.js
- React
- TypeScript
- Flask
- Python
- OpenAI API
- YouTube Data API
- YouTube Transcript API
- Recharts
- Tailwind CSS

## Key Features

- Comment analysis.
- Transcript review.
- AI-generated summaries.
- Sentiment visualization.
- Dashboard-ready viewer feedback insights.

## Integrations

- YouTube Data API.
- YouTube Transcript API.
- OpenAI API.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Combine comments and transcript analysis instead of only one feedback source.
- Use visual sentiment breakdowns for quick review.

## Results

Built a working full-stack review dashboard with YouTube API integration, transcript analysis, AI summaries, and sentiment visualization.

## Metrics

MISSING.

## Timeline

MISSING.

## Deployment

Live link is empty.

## Links

- GitHub: `https://github.com/YellankiKaushik/Integrated-Review-YT-Videos`
- Live: MISSING
- Medium: MISSING

## Assets

- Referenced image/screenshot: `public/projects/youtube-review.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Visible homepage project.
- Ordered second.
- Featured.
- Detail route: `/project/youtube-review`

## Missing Information

- Live demo link, if available.
- Exact architecture.
- Personal contribution.
- Sentiment model/method.
- Handling of API limits/errors.
- Sample output screenshots.
- Metrics or examples.
- Timeline.

## Verification Notes

- Avoid claiming creator adoption or review time reduction unless verified.

## Project: Hazlo

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `public/projects/hazlo.png` referenced but not found during asset scan

## Status

Working voice-first productivity prototype according to project `results`.

## Summary

A voice-first productivity app that captures spoken thoughts, extracts likely tasks locally, and syncs structured notes to Notion.

## Problem

People often lose tasks and ideas because thoughts are messy, fast, and not immediately organized.

## Motivation

EXTRACTED: Explore a workflow where voice becomes structured task capture.

## My Role

MISSING.

## Responsibilities

INFERRED:

- Voice capture workflow.
- Local task extraction.
- Browser state persistence.
- Task lifecycle controls.
- Retryable Notion sync.
- Serverless API with API-secret validation.
- Unit-tested logic.

## Architecture

EXTRACTED:

- React, TypeScript, and Vite frontend.
- Browser Web Speech API for voice capture.
- Local task extraction from raw speech.
- Zustand state with localStorage persistence.
- Vercel serverless API for Notion sync.
- Retry flow and unit-tested task/sync behavior.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Web Speech API
- Notion API
- Vercel Serverless Functions
- Vitest

## Key Features

- Voice capture.
- Transcript preview.
- Local task extraction.
- Persistent browser state.
- Task lifecycle controls.
- Retryable Notion sync.

## Integrations

- Web Speech API.
- Notion API.
- Vercel Serverless Functions.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Extract likely tasks locally instead of requiring AI for every step.
- Use Notion as an external structured destination.
- Use retryable sync states.

## Results

Built a working voice-first productivity prototype with local task extraction, persistent browser state, Notion sync flow, retry states, and unit-tested task/sync behavior.

## Metrics

MISSING in current project entry.

NEEDS VERIFICATION: older audit content mentioned planning-effort reduction for VaaniPlan, not Hazlo. Do not transfer that metric to Hazlo unless verified.

## Timeline

MISSING.

## Deployment

- Live: `https://hazlo-opensource.vercel.app`

## Links

- GitHub: `https://github.com/YellankiKaushik/Hazlo-OpenSource`
- Live: `https://hazlo-opensource.vercel.app`
- Medium: MISSING

## Assets

- Referenced image: `public/projects/hazlo.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Visible homepage project.
- Ordered third.
- Featured.
- Detail route: `/project/hazlo`

## Missing Information

- Personal contribution.
- Exact sync architecture and auth/security details.
- Tests summary.
- Notion database/schema details.
- User workflow screenshots.
- Metrics.
- Timeline.
- Lessons learned.

## Verification Notes

- Verify Notion sync behavior and current live demo health before promoting.

## Project: AI Crowd Intelligence Assistant

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/data/challenges.ts`
- `src/pages/ProjectDetail.tsx`
- `src/pages/ChallengeDetail.tsx`
- `public/projects/ai-crowd-intelligence.png` referenced but not found during asset scan

## Status

Working full-stack hackathon prototype with GitHub and live demo links.

## Summary

A simulated crowd navigation assistant that recommends routes using crowd-aware scoring and Gemini-generated explanations.

## Problem

In crowded public venues, visitors may struggle to decide which route to take, where to go next, and how to avoid congestion.

## Motivation

INFERRED: Support route choice in crowded temple or event environments.

## My Role

EXTRACTED from challenge data:

Owned the builder workflow from problem framing to route logic, UI behavior, AI explanation layer, deployment, and documentation.

## Responsibilities

- Route scoring logic.
- Simulated crowd scenarios.
- Multilingual UI support.
- Route metrics/dashboard.
- Emergency simulation.
- Gemini-generated explanation layer.
- Deployment/documentation.

## Architecture

EXTRACTED:

- Predefined route data.
- Simulated Low, Normal, and Peak crowd scenarios.
- Location/intent context.
- Rule-based route scoring engine.
- Gemini-generated route explanations.
- Node.js/Express backend.
- Google Cloud Run deployment.

## Technology Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express
- Gemini API
- Google Cloud Run

## Key Features

- Intent selection.
- Crowd scenario simulation.
- Route scoring.
- Dashboard metrics.
- Multilingual UI.
- Live-style updates.
- Emergency route simulation.
- AI-generated route explanation.

## Integrations

- Gemini API.
- Google Cloud Run.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Combine deterministic scoring with LLM explanations.
- Use simulated crowd states for a hackathon prototype.

## Results

Built and deployed a working hackathon prototype with simulated crowd-aware route recommendations, Gemini explanations, multilingual support, dashboard metrics, and a documented Cloud Run demo.

## Metrics

MISSING.

## Timeline

Time-bound hackathon build.

## Deployment

- Live: `https://ai-crowd-intelligence-148352897207.asia-south1.run.app`

## Links

- GitHub: `https://github.com/YellankiKaushik/AI-Crowd-Intelligence-Assistant.git`
- Live: `https://ai-crowd-intelligence-148352897207.asia-south1.run.app`
- Related challenge route: `/challenges/ai-crowd-intelligence-assistant`

## Assets

- Referenced image: `public/projects/ai-crowd-intelligence.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

EXTRACTED from challenge data:

- Practiced turning a time-bound problem statement into a usable prototype.
- Improved clarity around combining deterministic scoring with AI-generated explanations.

## Current Portfolio Presentation

- Visible homepage project.
- Ordered fourth.
- Featured.
- Also appears as verified challenge participation.
- Detail route: `/project/ai-crowd-intelligence`

## Missing Information

- Organizer/date.
- Exact hackathon name if applicable.
- Architecture diagram.
- Route scoring formula.
- Multilingual implementation details.
- Demo screenshots.
- Results/metrics.

## Verification Notes

- Do not claim real-time crowd data unless verified. Current repository describes simulated scenarios.

## Project: Sistemaa Electoral

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `public/projects/sistemaa-electoral.png` referenced but not found during asset scan

## Status

Working multilingual AI assistant prototype according to project `results`.

## Summary

A multilingual AI election education assistant that combines a rule-based learning flow with Gemini fallback for open-ended questions.

## Problem

First-time voters can face confusion around electoral procedures, voting steps, and language accessibility.

## Motivation

INFERRED: Make election-process education easier and safer for first-time voters.

## My Role

MISSING.

## Responsibilities

INFERRED:

- Guided flow design.
- Rule engine.
- Confusion recovery.
- Gemini fallback.
- Translation pipeline.
- Toxicity filtering.
- Rate limiting.
- Docker/Cloud Run deployment.

## Architecture

EXTRACTED:

- Hybrid rule-based + Gemini architecture.
- Deterministic rule engine for guided learning and confusion recovery.
- Gemini fallback for open-ended queries.
- Google Cloud Translation API for multilingual/Hinglish handling.
- Docker and Google Cloud Run deployment.
- Rate limiting and toxicity filtering.

## Technology Stack

- Node.js
- Express
- JavaScript
- Google Gemini
- Google Cloud Translation API
- Docker
- Google Cloud Run
- Rate Limiting

## Key Features

- Guided 5-step voter education flow.
- Multilingual and Hinglish handling.
- Confusion recovery.
- Toxicity filtering.
- Rate limiting.
- Safe open-ended support through Gemini fallback.

## Integrations

- Google Gemini.
- Google Cloud Translation API.
- Google Cloud Run.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Use deterministic guidance for the core education flow.
- Use LLM only as fallback for open-ended support.
- Add safety controls for civic/election context.

## Results

Built a working multilingual AI assistant prototype with rule-based guidance, LLM fallback, translation pipeline, confusion recovery, Docker/Cloud Run deployment, and safety controls.

## Metrics

MISSING.

## Timeline

MISSING.

## Deployment

- Live: `https://election-app-116362886136.asia-south1.run.app/`

## Links

- GitHub: `https://github.com/YellankiKaushik/Sistemaa-Electoral`
- Live: `https://election-app-116362886136.asia-south1.run.app/`
- Medium: MISSING

## Assets

- Referenced image: `public/projects/sistemaa-electoral.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Visible homepage project.
- Ordered fifth.
- Featured.
- Detail route: `/project/sistemaa-electoral`

## Missing Information

- Personal contribution.
- Election-context disclaimers.
- Supported languages.
- Rule flow details.
- Safety policy details.
- Metrics.
- Timeline.
- Screenshots.
- Lessons learned.

## Verification Notes

- Do not claim official election authority endorsement or government approval unless verified.

## Project: FitZone Gym Membership Management System

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `public/projects/fitzone-gym-membership.png` referenced but not found during asset scan

## Status

Working serverless membership management app according to project `results`.

## Summary

A serverless gym membership management app with public member lookup, admin CRUD workflows, renewal handling, and Google Sheets-backed persistence.

## Problem

Small gyms need simple ways to manage member records, renewal dates, and lookup workflows without maintaining a traditional backend server.

## Motivation

INFERRED: Provide small-business membership management using low-friction serverless tools.

## My Role

MISSING.

## Responsibilities

INFERRED:

- Public member lookup.
- Admin management workflows.
- CRUD operations.
- Renewal handling.
- Search/filter/pagination.
- Google Apps Script and Google Sheets persistence.
- GitHub Pages deployment.

## Architecture

EXTRACTED:

- React/TypeScript/Vite frontend.
- Google Apps Script backend/persistence layer.
- Google Sheets as data store.
- GitHub Pages hosting.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Google Apps Script
- Google Sheets
- GitHub Pages

## Key Features

- Public member lookup.
- Admin CRUD workflows.
- Renewal handling.
- Search.
- Filters.
- Pagination.
- Google Sheets persistence.

## Integrations

- Google Apps Script.
- Google Sheets.
- GitHub Pages.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Use Google Sheets for persistence instead of a traditional database.
- Use serverless Google Apps Script for a lightweight admin workflow.

## Results

Built a working serverless membership management app with public lookup, admin workflows, renewal handling, and Google Sheets persistence.

## Metrics

MISSING.

## Timeline

MISSING.

## Deployment

- Live: `https://yellankikaushik.github.io/Gym-Membership/`

## Links

- GitHub: `https://github.com/YellankiKaushik/Gym-Membership.git`
- Live: `https://yellankikaushik.github.io/Gym-Membership/`
- Medium: MISSING

## Assets

- Referenced image/screenshot: `public/projects/fitzone-gym-membership.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Visible homepage project.
- Ordered sixth.
- Featured.
- Detail route: `/project/gym-membership`

## Missing Information

- Personal contribution.
- Data model/schema.
- Authentication/security details for admin workflows.
- Real use context or demo data disclaimer.
- Metrics.
- Timeline.
- Screenshots.
- Lessons learned.

## Verification Notes

- Verify whether public lookup exposes any real member data before promoting a live demo.

## Project: Krishi Seva AI Agent

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `src/assets/logos/krishi.png`
- `public/projects/krishi-seva.png` referenced but not found during asset scan

## Status

Hidden/preserved project. Working Python rule-based agricultural advisory agent according to project `results`.

## Summary

A Python agricultural advisory agent that turns live weather data into explainable farming risk alerts and simple action recommendations.

## Problem

Raw weather data does not directly tell a farmer what risks may matter for crop decisions, especially around rain, heat, and humidity-related conditions.

## Motivation

INFERRED: Translate weather data into simple farming advisory messages.

## My Role

MISSING.

## Responsibilities

INFERRED:

- Weather data lookup.
- Rule-based risk detection.
- Explainable advisory output.
- CLI project documentation.

## Architecture

EXTRACTED:

- Python CLI.
- OpenWeatherMap API lookup.
- Rule-based farming risk checks.
- Advisory message output.

## Technology Stack

- Python
- OpenWeatherMap API
- requests
- Rule-Based Logic
- GitAgent-style Documentation
- GitHub

## Key Features

- Live weather lookup.
- Farming risk detection.
- Explainable recommendations.

## Integrations

- OpenWeatherMap API.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Use rule-based explainability rather than opaque prediction.

## Results

Built a Python rule-based agricultural advisory agent with live weather lookup, farming risk detection, and explainable recommendations.

## Metrics

MISSING.

## Timeline

MISSING.

## Deployment

Live link is empty.

## Links

- GitHub: `https://github.com/YellankiKaushik/Krishi-Seva-AI.git`
- Live: MISSING
- Medium: MISSING

## Assets

- Bundled logo-like asset exists: `src/assets/logos/krishi.png`
- Referenced project image: `public/projects/krishi-seva.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Hidden/preserved (`visible: false`).
- Featured flag is true but not visible on homepage due to `visible: false`.
- Detail route may exist if visited directly: `/project/krishi-seva`.

## Missing Information

- Why hidden.
- Live/demo status.
- Personal contribution.
- Advisory rules.
- Supported crops/locations.
- Limitations.
- Metrics.
- Screenshots.
- Timeline.

## Verification Notes

- Avoid implying agricultural accuracy or production advisory reliability without evidence.

## Project: PsyMatch

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `public/projects/psymatch.png` referenced but not found during asset scan

## Status

Hidden/preserved project.

## Summary

A personality matching prototype that converts questionnaire answers into trait profiles and ranks compatible demo users using cosine similarity.

## Problem

Many social discovery products rely on surface-level profile fields.

## Motivation

EXTRACTED: Explore how questionnaire responses can become structured signals for compatibility-style recommendations.

## My Role

MISSING.

## Responsibilities

INFERRED:

- Questionnaire design.
- Trait scoring logic.
- Vector modeling.
- Similarity ranking.
- Dashboard UI.
- FastAPI auth foundation.

## Architecture

EXTRACTED:

- React/TypeScript frontend.
- 20-question assessment.
- Big Five traits, values, and life goals scoring.
- 15-dimensional vector profile.
- Cosine similarity ranking against seeded profiles.
- Dashboard visualizations and match cards.
- Separate FastAPI authentication foundation.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- FastAPI
- SQLAlchemy
- JWT
- bcrypt
- Cosine Similarity

## Key Features

- 20-question personality questionnaire.
- Normalized 15-trait profile scoring.
- Cosine similarity matching.
- Dashboard and match card UI.
- Mock chat.
- FastAPI JWT auth foundation.

## Integrations

MISSING.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Represent answers as a vector for similarity ranking.
- Use seeded profiles for prototype matching.

## Results

Built a working React + TypeScript matching prototype with questionnaire scoring, 15-trait profile modeling, cosine similarity ranking, dashboard UI, mock chat, and FastAPI auth foundation.

## Metrics

MISSING.

## Timeline

MISSING.

## Deployment

Live link is empty.

## Links

- GitHub: `https://github.com/YellankiKaushik/Dating.git`
- Live: MISSING
- Medium: MISSING

## Assets

- Referenced image: `public/projects/psymatch.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Hidden/preserved (`visible: false`).
- Not featured.
- Detail route may exist if visited directly: `/project/psymatch`.

## Missing Information

- Why hidden.
- Intended audience.
- Personal contribution.
- Privacy/safety considerations.
- Trait scoring formula.
- Backend implementation status.
- Live/demo status.
- Timeline.
- Screenshots.

## Verification Notes

- Avoid making psychological validity claims unless evidence is added.

## Project: VaaniPlan - Voice-First AI Daily Planning Assistant

## Evidence Status

EXTRACTED, with metrics requiring verification.

## Repository Sources

- `src/data/projects.ts`
- `src/data/challenges.ts`
- `src/pages/ProjectDetail.tsx`
- `src/pages/ChallengeDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `src/assets/logos/vaaniplan.png`
- `public/projects/vaaniplan.png` referenced but not found during asset scan

## Status

Hidden/preserved project. Accepted into Unleash LLM Innovation Challenge according to project/challenge data.

## Summary

A voice-first AI planning assistant that removes the need for manual typing and automatically structures daily tasks using LLM reasoning.

## Problem

Most productivity tools require manual typing and task organization, which can slow down planning.

## Motivation

EXTRACTED: Reduce friction in daily planning through voice input and AI task structuring.

## My Role

EXTRACTED from challenge data:

Built the prototype flow and positioned it as a practical AI planning assistant for fast task capture.

## Responsibilities

INFERRED:

- Voice interface.
- LLM task structuring.
- Planning workflow.
- Challenge positioning.

## Architecture

EXTRACTED:

- Web Speech API voice workflow.
- LLM reasoning for task organization.
- FastAPI/Python stack listed.

## Technology Stack

- FastAPI
- LLMs
- Web Speech API
- AI Assistants
- Python

## Key Features

- Voice-first task input.
- AI task generation.
- Structured daily plan output.

## Integrations

MISSING.

## Technical Challenges

MISSING.

## Important Decisions

INFERRED:

- Use speech input to reduce planning friction.
- Use LLM reasoning for task structuring.

## Results

Built a voice-driven productivity prototype accepted into the Unleash LLM Innovation Challenge.

## Metrics

NEEDS VERIFICATION:

- `highlights` claim reduced daily planning effort by 60-70%.
- `highlights` claim improved productivity by about 50%.

These are present in repository data but require proof/context before being treated as approved metrics.

## Timeline

MISSING.

## Deployment

- Live: `https://yellankikaushik.github.io/VaaniPlan/`

## Links

- GitHub: `https://github.com/YellankiKaushik/VaaniPlan`
- Live: `https://yellankikaushik.github.io/VaaniPlan/`
- Related challenge route: `/challenges/vaaniplan-unleash-llm-innovation-challenge`
- Medium: MISSING

## Assets

- Bundled asset exists: `src/assets/logos/vaaniplan.png`
- Referenced project image: `public/projects/vaaniplan.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

EXTRACTED from challenge data:

- Explored how voice input can reduce friction in productivity workflows.
- Practiced explaining LLM-powered task structuring through a focused prototype.

## Current Portfolio Presentation

- Hidden/preserved (`visible: false`).
- Challenge data marks it featured.
- Detail route may exist if visited directly: `/project/vaaniplan`.

## Missing Information

- Why hidden.
- Metric proof and methodology.
- Personal contribution.
- Exact LLM/provider.
- Architecture details.
- Screenshots.
- Timeline.
- Challenge proof link/certificate.

## Verification Notes

- Verify percentage improvement claims before publishing prominently.

## Project: Public Interest Analysis of Google Products

## Evidence Status

EXTRACTED.

## Repository Sources

- `src/data/projects.ts`
- `src/pages/ProjectDetail.tsx`
- `src/data/portfolioKnowledge.ts`
- `src/assets/logos/tab.png`
- `public/projects/google-product-analysis.png` referenced but not found during asset scan

## Status

Hidden/preserved project.

## Summary

An interactive Tableau dashboard that analyzes Google Trends data to reveal product popularity patterns.

## Problem

Raw search trend data is difficult to interpret without visualization and comparison tools.

## Motivation

INFERRED: Enable quick comparison of public search interest across Google products.

## My Role

MISSING.

## Responsibilities

INFERRED:

- Google Trends data analysis.
- Tableau dashboard creation.
- Product-interest comparison.

## Architecture

EXTRACTED:

- Google Trends data.
- Tableau dashboard.

## Technology Stack

- Tableau
- Google Trends
- Data Visualization
- Data Analysis

## Key Features

- Interactive dashboard.
- Search interest trend visualization.
- Comparison across Google products.

## Integrations

- Tableau Public.
- Google Trends data.

## Technical Challenges

MISSING.

## Important Decisions

MISSING.

## Results

Built an interactive analytics dashboard for exploring product search trends.

## Metrics

MISSING.

## Timeline

MISSING.

## Deployment

- Live/Tableau profile: `https://public.tableau.com/app/profile/yellanki.kaushik`

## Links

- GitHub: MISSING
- Live: `https://public.tableau.com/app/profile/yellanki.kaushik`
- Medium: MISSING

## Assets

- Bundled asset likely related to Tableau: `src/assets/logos/tab.png`
- Referenced project image: `public/projects/google-product-analysis.png`
- NEEDS VERIFICATION: referenced file was not found.

## Lessons Learned

MISSING.

## Current Portfolio Presentation

- Hidden/preserved (`visible: false`).
- Detail route may exist if visited directly: `/project/google-product-analysis`.

## Missing Information

- Why hidden.
- Specific Google products analyzed.
- Dataset timeframe.
- Dashboard URL to exact workbook rather than broad Tableau profile, if available.
- GitHub/source link, if any.
- Key insights.
- Screenshots.
- Timeline.

## Verification Notes

- The live link points to a Tableau profile, not necessarily a specific dashboard URL.

