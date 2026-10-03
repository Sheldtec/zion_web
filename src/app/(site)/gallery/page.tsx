import type { Metadata } from 'next';
import Link from 'next/link';

import { GalleryFilter } from '@/components/gallery-filter';
import { JsonLd } from '@/components/json-ld';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Gallery | Zion Comprehensive College, Abakaliki',
  description:
    'Classroom learning, science practicals, ICT, tailoring, catering, culture, music and sport at Zion Comprehensive College in Abakaliki, Ebonyi State.',
  path: '/gallery',
  image: SOCIAL_IMAGES.campus,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Gallery' },
] as const;

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero page-hero--short">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/g-cultural-552.webp"
          alt="Students in traditional attire during a cultural presentation"
        />
        <span className="page-hero__veil" aria-hidden="true" />
        <div className="wrap page-hero__content">
          <ol className="breadcrumbs">
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li aria-current="page">Gallery</li>
          </ol>
          <h1>Life at Zion.</h1>
          <p>
            A window into the lessons, practicals, creativity and shared experiences that shape our
            school community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <GalleryFilter />
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="cta-panel reveal">
            <div>
              <h2>See the campus beyond the photographs.</h2>
              <p>
                Arrange a visit and experience the classrooms, laboratories and learning community in
                person.
              </p>
            </div>
            <div className="cta-panel__actions">
              <Link className="btn btn--light" href="/contact" prefetch={false}>
                Plan a visit
              </Link>
              <Link className="btn btn--glass" href="/admission" prefetch={false}>
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
      <JsonLd schema={breadcrumbSchema(BREADCRUMBS)} />
    </>
  );
}
