# Kaushik Yellanki Portfolio

AI Systems Builder & Software Developer

Live portfolio and canonical URL: https://kaaush.vercel.app/

This is my personal portfolio for showcasing practical AI systems, full-stack projects, secure AI integrations, writing, experience, and contact links.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel
- Google Analytics 4

## AI Layer

The portfolio includes an AI-powered assistant built with a knowledge-base-first architecture:

- verified local portfolio knowledge as the first layer
- OpenRouter through a Vercel serverless API route
- local deterministic fallback when the AI route is unavailable
- AI usage gate to avoid unnecessary token usage
- privacy-safe GA4 chatbot analytics

The OpenRouter key is handled server-side only. No API keys are exposed in frontend code and no secrets should be committed.

## Deployment Notes

The active portfolio deployment is on Vercel:

```txt
https://kaaush.vercel.app/
```
The verified alternate domain `kaaushik.vercel.app` redirects to `kaaush.vercel.app` (307). The Vercel project mapping was inspected on 25 October 2026; no alias or redirect setting was changed.

Signal Daily reader architecture, publication boundaries and maintenance instructions are documented in [portfolio-docs/NEWSLETTER_ARCHITECTURE.md](portfolio-docs/NEWSLETTER_ARCHITECTURE.md). The catalog is empty and subscriptions remain disabled. Local Phase 3 changes are uncommitted; they are not present in the existing preview or production deployment.

