import type { Metadata } from 'next';
import Link from 'next/link';

import { JsonLd } from '@/components/json-ld';
import { SchoolNav } from '@/components/school-nav';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Zion Early School | Pre-Nursery to Nursery 2',
  description:
    'Discover Zion Early School in Abakaliki: caring, play-based learning for Pre-Nursery, Nursery 1 and Nursery 2.',
  path: '/early-school',
  image: SOCIAL_IMAGES.earlySchool,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Early School' },
] as const;

export default function EarlySchoolPage() {
  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/hero-4-1600.webp"
          alt="Young children learning together in a Zion Early School classroom"
        />
        <span className="page-hero__veil" aria-hidden="true" />
        <div className="wrap page-hero__content">
          <ol className="breadcrumbs">
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/academics" prefetch={false}>
                Academics
              </Link>
            </li>
            <li aria-current="page">Early School</li>
          </ol>
          <div className="school-hero__badge">Pre-Nursery · Nursery 1 · Nursery 2</div>
          <h1>Little learners. Big beginnings.</h1>
          <p>
            A warm, playful environment where every child is known, encouraged and guided toward a
            confident start in learning.
          </p>
        </div>
      </section>
      <SchoolNav current="/early-school" />

      <section className="section">
        <div className="wrap school-intro">
          <div className="reveal">
            <p className="eyebrow">A confident first chapter</p>
            <h2>Care and curiosity belong together.</h2>
            <p className="lead">
              Young children learn best when they feel safe enough to explore, speak, move, make and
              ask questions.
            </p>
            <p>
              At Zion Early School, purposeful play builds language, early number sense,
              coordination, creativity and social confidence. Familiar routines help children settle,
              while attentive adults make room for each child&#39;s pace and personality.
            </p>
            <p>
              Specialist experiences in Music, ICT and Art add variety to the week and introduce new
              ways to express ideas.
            </p>
          </div>
          <aside className="school-fact reveal">
            <span className="school-fact__value">20</span>
            <h3>Children maximum per class</h3>
            <p>
              Each class is supported by a teacher, an assistant teacher and a nanny for consistent
              attention and care.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Three early stages</p>
              <h2>Learning grows with the child.</h2>
            </div>
            <p>
              Every level is designed around age-appropriate experiences, moving gradually from
              discovery and routine toward confident readiness for Primary 1.
            </p>
          </div>
          <div className="stage-grid">
            <article className="stage-card reveal" data-step="1">
              <span className="stage-card__label">First discoveries</span>
              <h3>Pre-Nursery</h3>
              <p>
                Gentle routines, sensory play, songs, movement and guided interaction help children
                feel secure and begin communicating with confidence.
              </p>
            </article>
            <article className="stage-card reveal" data-step="2">
              <span className="stage-card__label">Growing independence</span>
              <h3>Nursery 1</h3>
              <p>
                Children build vocabulary, recognise patterns and numbers, practise fine-motor skills
                and learn to work and play alongside others.
              </p>
            </article>
            <article className="stage-card reveal" data-step="3">
              <span className="stage-card__label">Ready to progress</span>
              <h3>Nursery 2</h3>
              <p>
                Early reading, writing and number work become more structured while creativity,
                confidence and curiosity remain central.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">The Early School experience</p>
              <h2>A balanced day for active young minds.</h2>
            </div>
            <p>
              Short, varied learning moments keep children engaged while developing the habits they
              will carry into primary school.
            </p>
          </div>
          <div className="learning-grid">
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V5l8-2 8 2v14l-8 2-8-2Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>Language &amp; stories</h3>
                <p>
                  Conversation, songs, stories and sound play build vocabulary and early literacy.
                </p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M13 16c0-3-2-5-5-5s-5 2-5 5m12-7h6m-3-3v6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div>
                <h3>Social confidence</h3>
                <p>Group activities teach listening, sharing, cooperation and respect for others.</p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path d="M5 18c3-6 5-9 7-9s3 3 7 3" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>Movement &amp; coordination</h3>
                <p>
                  Active play strengthens balance, control, healthy movement and spatial awareness.
                </p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3a9 9 0 1 0 9 9c0-2-1-3-3-3h-2a2 2 0 0 1-2-2V5c0-1-1-2-2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="7.5" cy="11" r="1" fill="currentColor" />
                  <circle cx="10" cy="16" r="1" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3>Art, music &amp; expression</h3>
                <p>Making, singing and performance give imagination an active place in learning.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="wrap">
          <div className="transition-panel reveal">
            <div className="transition-panel__copy">
              <p className="eyebrow eyebrow--light">A familiar next step</p>
              <h2>Ready for Primary 1.</h2>
              <p>
                Nursery 2 pupils move forward with the routines, confidence and foundational skills
                needed for primary school—without leaving the Zion community they already know.
              </p>
              <Link className="btn btn--light" href="/primary-school" prefetch={false}>
                Explore Primary School
              </Link>
            </div>
            <div className="transition-panel__image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="transition-panel__image"
                src="/img/hero-2-1120.webp"
                alt="Zion Primary School pupils on campus"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cta-panel reveal">
            <div>
              <h2>Give your child a joyful start.</h2>
              <p>
                Talk with our admissions team about Early School places, class entry and what your
                child will need.
              </p>
            </div>
            <div className="cta-panel__actions">
              <Link className="btn btn--light" href="/admission" prefetch={false}>
                Admission guide
              </Link>
              <Link className="btn btn--glass" href="/contact" prefetch={false}>
                Plan a visit
              </Link>
            </div>
          </div>
        </div>
      </section>
      <JsonLd schema={breadcrumbSchema(BREADCRUMBS)} />
    </>
  );
}
