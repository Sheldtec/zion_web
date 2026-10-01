import Link from 'next/link';

import { site } from '@/lib/site';

/**
 * The three school pages swap the third column for a list of the schools; every other page
 * keeps the "Useful links" column. Both come straight from the static site.
 */
export type FooterVariant = 'default' | 'schools';

export function SiteFooter({ variant = 'default' }: { variant?: FooterVariant }) {
  // Rendered at build time; the daily revalidate in the root layout keeps it current.
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <Link className="brand" href="/" prefetch={false}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/crest-96.webp" alt="" width={48} height={51} />
            <span>
              <span className="brand__name">Zion Schools</span>
              <span className="brand__tag">Education for self-reliance</span>
            </span>
          </Link>
          <p>Quality education from Pre-Nursery to SS 3 at {site.address.short}.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul className="footer-links">
            <li>
              <Link href="/about" prefetch={false}>
                About us
              </Link>
            </li>
            <li>
              <Link href="/academics" prefetch={false}>
                Academics
              </Link>
            </li>
            <li>
              <Link href="/admission" prefetch={false}>
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/gallery" prefetch={false}>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        {variant === 'schools' ? (
          <div>
            <h2>Our schools</h2>
            <ul className="footer-links">
              <li>
                <Link href="/early-school" prefetch={false}>
                  Early School
                </Link>
              </li>
              <li>
                <Link href="/primary-school" prefetch={false}>
                  Primary School
                </Link>
              </li>
              <li>
                <Link href="/comprehensive-college" prefetch={false}>
                  Comprehensive College
                </Link>
              </li>
              <li>
                <a href={site.portalUrl}>Parent portal</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2>Useful links</h2>
            <ul className="footer-links">
              <li>
                <a href={site.portalUrl}>Parent portal</a>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  Contact
                </Link>
              </li>
              <li>
                <a href={site.whatsapp.href}>WhatsApp</a>
              </li>
              <li>
                <a href={site.map.directionsUrl}>Directions</a>
              </li>
            </ul>
          </div>
        )}
        <div className="footer-contact">
          <h2>Get in touch</h2>
          <p>
            {site.address.line1},
            <br />
            {site.address.line2}
          </p>
          <p>
            <a href={site.phone.href}>{site.phone.display}</a>
          </p>
          <p>Monday–Friday during term</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap footer-bottom__inner">
          <p>© {year} Zion Schools. All rights reserved.</p>
          <p>Built by Sheldtech</p>
        </div>
      </div>
    </footer>
  );
}
