// app/sitemap.js — Auto-served at /sitemap.xml by Next.js App Router
// Lists all indexable pages on tinywisdomcards.com

const BASE_URL = 'https://tinywisdomcards.com';

// The site is a single-page React app; pages are query-param routes.
// We list the canonical URLs that search engines should index.
// The homepage "/" renders all sections; sub-pages use ?page= for client routing.
// For proper indexing, we include the AEO/about page and the main page.

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      // A–Z Ancient Wisdom deck page
      url: `${BASE_URL}/?page=deck`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      // Ka–Kha Sanskaar Lipi deck page
      url: `${BASE_URL}/?page=kakha`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      // Card of the Day
      url: `${BASE_URL}/?page=cotd`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      // Bulk orders
      url: `${BASE_URL}/?page=bulk`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      // Community
      url: `${BASE_URL}/?page=community`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      // AEO / About page (hidden from nav, but indexable)
      url: `${BASE_URL}/?page=about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // Privacy policy
      url: `${BASE_URL}/?page=privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      // LLM.txt — readable by AI crawlers
      url: `${BASE_URL}/llm.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];
}
