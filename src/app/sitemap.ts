import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/seo';

/**
 * Every page on the site, in the order a visitor would meet them.
 *
 * No `lastModified`: the only date available at build time is the build itself, and a date
 * that changes on every deploy without the page changing teaches a crawler to ignore the
 * field. Google derives freshness from the page anyway.
 */
const ROUTES = [
  '/',
  '/about',
  '/academics',
  '/early-school',
  '/primary-school',
  '/comprehensive-college',
  '/admission',
  '/gallery',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.7,
  }));
}
