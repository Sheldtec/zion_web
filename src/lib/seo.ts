import type { Metadata } from 'next';

import { site } from './site';

/**
 * One place for everything a search engine or a social network reads: the canonical URL, the
 * link-preview card and the structured data.
 *
 * Page titles and descriptions are NOT written here — each page owns its own, and they are
 * the ones the static site shipped with.
 */

/** The link-preview photographs, built by `scripts/build-social-images.mjs`. */
export const SOCIAL_IMAGES = {
  college: {
    url: '/img/og/college.jpg',
    alt: 'Senior students carrying out a physics practical in the Zion Comprehensive College laboratory',
  },
  campus: {
    url: '/img/og/campus.jpg',
    alt: 'Pupils of Zion Comprehensive College together on the Abakaliki campus',
  },
  earlySchool: {
    url: '/img/og/early-school.jpg',
    alt: 'Young children learning together in a Zion Early School classroom',
  },
} as const;

export type SocialImage = (typeof SOCIAL_IMAGES)[keyof typeof SOCIAL_IMAGES];

/** An absolute URL for a site-relative path. Canonicals and structured data both need them. */
export function absoluteUrl(path: string): string {
  const base = site.url.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  /** The route, e.g. '/about'. */
  path: string;
  image?: SocialImage;
};

/**
 * Title, description, canonical and the Open Graph / Twitter card for one page. Every page
 * calls this so that no page can quietly ship without a canonical or a preview image.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = SOCIAL_IMAGES.campus,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: 'en_NG',
      title,
      description,
      url,
      images: [{ url: image.url, width: 1200, height: 630, alt: image.alt, type: 'image/jpeg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

type Crumb = { name: string; path?: string };

/**
 * The breadcrumb trail already printed on the page, repeated for Google so the result shows
 * "Home › Academics › Early School" instead of a bare URL. The final crumb is the current
 * page and carries no link, exactly as in the markup.
 */
export function breadcrumbSchema(trail: readonly Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
    })),
  };
}

/**
 * The school in one sentence, as the school itself puts it. Used for the organisation's
 * structured data and as the home page's meta description.
 */
export const ORGANISATION_DESCRIPTION =
  'Zion Comprehensive College offers quality education from Pre-Nursery to senior secondary in Abakaliki, with modern vocational and technical skills.';

const SCHOOL_ID = `${absoluteUrl('/')}#school`;
const WEBSITE_ID = `${absoluteUrl('/')}#website`;

/**
 * The school itself, and the site that represents it. Rendered once, in the root layout, so
 * every page carries it.
 *
 * Only facts that appear on the site go in here. There is no latitude, no opening time and no
 * aggregate rating, because the site does not state any — inventing them is how a school ends
 * up with a structured-data manual action.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'School'],
        '@id': SCHOOL_ID,
        name: site.name,
        alternateName: site.alternateName,
        description: ORGANISATION_DESCRIPTION,
        slogan: 'Education for self-reliance',
        url: absoluteUrl('/'),
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/img/og/logo.png'),
          width: 192,
          height: 204,
          caption: `${site.name} crest`,
        },
        image: absoluteUrl(SOCIAL_IMAGES.college.url),
        foundingDate: '2013',
        telephone: site.phone.href.replace(/^tel:/, ''),
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.postalAddress.street,
          addressLocality: site.postalAddress.locality,
          addressRegion: site.postalAddress.region,
          addressCountry: site.postalAddress.country,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: `${site.postalAddress.locality}, ${site.postalAddress.region} State`,
        },
        hasMap: site.map.directionsUrl,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'admissions',
            telephone: site.phone.href.replace(/^tel:/, ''),
            areaServed: 'NG',
            availableLanguage: 'English',
          },
        ],
        ...(site.socialProfiles.length > 0 ? { sameAs: site.socialProfiles } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: absoluteUrl('/'),
        name: `${site.name}, Abakaliki`,
        inLanguage: 'en-NG',
        publisher: { '@id': SCHOOL_ID },
      },
    ],
  };
}
