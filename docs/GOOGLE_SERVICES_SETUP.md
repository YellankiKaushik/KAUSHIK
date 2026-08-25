# Google Services Setup

This portfolio uses a direct Google Analytics 4 setup. Extra Google products should be added only when they solve a clear problem.

## Google Analytics 4

- GA4 is already installed.
- Measurement ID: `G-E5L9TZR005`
- The frontend reads the measurement ID from `VITE_GA_MEASUREMENT_ID`.
- In Vercel, set `VITE_GA_MEASUREMENT_ID` to the GA4 measurement ID before deploying.
- The boot script disables GA's automatic first page view and lets the React router page-view helper send SPA page views.
- Existing tracking covers portfolio clicks.
- Resume downloads use GA4's automatic `file_download` event when Enhanced Measurement file downloads are enabled. The site also sends a custom `resume_download` event for easier resume-specific debugging and filtering.
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

## Optional Resume Download Email Notification

The Resume button also sends a best-effort, non-blocking request to a Vercel serverless route.

Configure these server-side variables only if you want email notifications:

```txt
RESEND_API_KEY=your_resend_api_key_here
RESUME_NOTIFICATION_EMAIL=you@example.com
EMAIL_FROM=Portfolio <notifications@example.com>
```

If any of these values are missing, the notification route safely skips sending email. Do not prefix these variables with `VITE_` because they must remain server-side only.

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
