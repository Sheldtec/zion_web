import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';

import { JsonLd } from '@/components/json-ld';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { SiteHeader } from '@/components/site-header';
import { UtilityBar } from '@/components/utility-bar';
import { organizationSchema } from '@/lib/seo';
import { site } from '@/lib/site';

import './site.css';
import './fonts.css';

// Static pages, rebuilt daily. Nothing on the site changes hour to hour; the daily pass keeps
// the copyright year in the footer correct without shipping a client component to print it.
export const revalidate = 86400;

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  // Every canonical, Open Graph and structured-data URL on the site is built from this.
  // NEXT_PUBLIC_SITE_URL must be the live origin in production or they all point at the
  // wrong host, which is the one SEO mistake here that is expensive to undo.
  metadataBase: new URL(site.url),
  title: 'Zion Schools Abakaliki | Education for Self-Reliance',
  description:
    'Zion Schools offers quality education from Pre-Nursery to SS 3 in Abakaliki, with science, ICT and practical trade skills on one campus.',
  applicationName: `${site.name} Abakaliki`,
  icons: { icon: '/img/crest-96.webp', apple: '/img/crest-192.webp' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google show a full-width photograph and an untruncated snippet rather than the
      // 160-character default it falls back to.
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Safari turns anything that looks like a telephone number into a link of its own styling.
  // Every number on this site is already an explicit tel: link, so the guess is only ever
  // wrong — and those explicit links keep working.
  formatDetection: { telephone: false, address: false, email: false },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the token Search Console gives you and the
  // meta tag appears; leave it unset and nothing is emitted. Search Console is where the
  // sitemap gets submitted and where indexing problems surface, so this is worth doing on
  // the day the site goes live.
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <UtilityBar />
        <SiteHeader />

        {/* <main> and the footer come from the route group layouts: the three school pages
            carry a different footer column from the rest of the site. */}
        {children}

        <RevealOnScroll />
        <JsonLd schema={organizationSchema()} />
      </body>
    </html>
  );
}
