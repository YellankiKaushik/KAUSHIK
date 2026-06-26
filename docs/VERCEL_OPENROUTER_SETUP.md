# Vercel + OpenRouter Setup

This portfolio is prepared for Vercel deployment with a server-side OpenRouter chatbot route. The frontend must never receive the OpenRouter API key.

The chatbot architecture is knowledge-first:

- The frontend deterministic engine creates the verified local answer first.
- The frontend sends the visitor message, verified local answer, category, and recent conversation to the API route.
- The API route does not import frontend data files, Vite-only modules, or assets.
- OpenRouter is the second answer-generation layer and may only rewrite or refine the verified local answer.
- If OpenRouter is unavailable or not configured, the chatbot uses the verified local answer.
- The chatbot uses a cost-aware AI gate. Simple, refusal, contact, resume, education, and certification questions are answered locally. OpenRouter is used only for meaningful portfolio explanation, project, skills, experience, achievement, writing, and role-fit questions.

## Vercel Project Settings

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## Environment Variables

Add these in the Vercel project dashboard:

```txt
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-4o-mini
OPENROUTER_SITE_URL=https://your-vercel-domain.vercel.app
OPENROUTER_SITE_NAME=Kaushik Yellanki Portfolio
```

Do not create or use `VITE_OPENROUTER_API_KEY`. Any variable prefixed with `VITE_` can be exposed to frontend code.

## API Route

The chatbot calls:

```txt
POST /api/portfolio-chat
```

Example request:

```json
{
  "message": "Tell me about AGROGUIA.AI.",
  "localAnswer": "AGROGUIA.AI is a full-stack AI farm advisory dashboard/MVP...",
  "category": "project_detail",
  "conversation": [
    {
      "role": "user",
      "content": "Who is Kaushik?"
    },
    {
      "role": "assistant",
      "content": "Kaushik Yellanki is an AI Builder and Software Developer."
    }
  ]
}
```

Example response:

```json
{
  "answer": "AGROGUIA.AI is a full-stack AI farm advisory dashboard/MVP...",
  "source": "openrouter",
  "category": "project_detail"
}
```

## Local Fallback

The frontend keeps the deterministic local chatbot engine. If the Vercel API route fails, times out, or OpenRouter is not configured, the chatbot answers from the verified local portfolio knowledge base.

The serverless route intentionally avoids importing `src/data/portfolioKnowledge.ts`, project data, experience data, or frontend assets because those files can depend on Vite-only behavior such as `import.meta.env`.

## GitHub Pages Backup

GitHub Pages files and workflow remain in the repository for now. Keep GitHub Pages active until the Vercel preview and production deployment are verified.

## Phase 10 Updates

After the final Vercel production domain is known, update:

- canonical URL
- sitemap URLs
- robots sitemap URL
- Open Graph URL
- JSON-LD URL
- manifest `start_url`, `scope`, and icon paths
- promoted portfolio links in external profiles or README files
