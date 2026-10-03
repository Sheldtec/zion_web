import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';

// The response already carries a 404, so nothing here should be indexed. Stated anyway, for
// the crawlers that follow a link to this page from somewhere else.
export const metadata: Metadata = {
  title: 'Page not found | Zion Comprehensive College',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <main id="main">
        <section className="section">
          <div className="wrap">
            <div className="section-head section-head--center">
              <p className="eyebrow">Page not found</p>
              <h1 className="content-title">We could not find that page.</h1>
              <p>
                The address may have changed, or it may have been mistyped. These links will take
                you back to the right place.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link className="btn btn--primary" href="/" prefetch={false}>
                  Back to the home page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
