# Google Services Setup

This portfolio uses a direct Google Analytics 4 setup. Extra Google products should be added only when they solve a clear problem.

## Google Analytics 4

- GA4 is already installed.
- Measurement ID: `G-E5L9TZR005`
- Existing tracking covers portfolio clicks.
- Chatbot analytics track privacy-safe metadata only.
- Raw chatbot questions are not tracked.
- Chatbot answers and conversation text are not tracked.
- API keys, system prompts, and provider error details are not tracked.

Safe chatbot event metadata includes:

- `question_source`: `starter` or `manual`
- `question_category`
- `answer_source`: `openrouter`, `local_fallback`, or `local_only`
- `uses_ai`
- `length_bucket`: `short`, `medium`, or `long`
- `starter_index`

## Google Search Console

Set up Google Search Console after the final Vercel production URL is confirmed.

Recommended initial URL:

```txt
https://kaaushik.vercel.app/
```

Verify site ownership in Search Console, then submit the sitemap after Phase 10 updates the sitemap URLs to the final Vercel URL.

## Sitemap Submission

- Update the sitemap in Phase 10.
- Submit the updated sitemap in Google Search Console.
- Recheck indexing after the Vercel production URL is stable.

## PageSpeed Insights / Lighthouse

Run PageSpeed Insights or Lighthouse after Phase 10 SEO updates.

Check:

- performance
- accessibility
- best practices
- SEO

## Not Added Now

These are intentionally not added right now:

- Google Tag Manager
- reCAPTCHA
- Google Sheets
- Google Forms

Reasons:

- GA4 direct setup is enough for the current portfolio.
- There is no contact form that needs spam protection.
- There is no form storage workflow.
- Adding extra services would increase complexity without a clear benefit.
