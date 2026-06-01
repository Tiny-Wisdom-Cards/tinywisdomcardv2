// app/robots.js — Auto-served at /robots.txt by Next.js App Router

const BASE_URL = 'https://tinywisdomcards.com';

export default function robots() {
  return {
    rules: [
      {
        // All crawlers — full access
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',     // block any internal API routes
          '/_next/',   // Next.js internals (already not crawled, but explicit)
        ],
      },
      {
        // AI content crawlers — explicitly allow llm.txt and the AEO page
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot-Extended',
          'Diffbot',
          'FacebookBot',
          'cohere-ai',
        ],
        allow: ['/', '/llm.txt', '/?page=about'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
