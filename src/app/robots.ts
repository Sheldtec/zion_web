import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    // Nothing on this site is private — it exists to be found. Nothing is disallowed either:
    // blocking /_next/ would be the obvious move and the wrong one, because that is where the
    // stylesheet and the scripts live and Google needs both to render and score the page.
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
