import type { Metadata } from 'next';
import Link from 'next/link';

import { JsonLd } from '@/components/json-ld';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Academics | Zion Schools Abakaliki',
  description:
    'Explore Early School, Primary School, Comprehensive College, practical trades and examination preparation at Zion Schools.',
  path: '/academics',
  image: SOCIAL_IMAGES.college,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Academics' },
] as const;

export default function AcademicsPage() {
  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/hero-1-1600.webp"
          alt="Students conducting a physics practical"
        />
        <span className="page-hero__veil" aria-hidden="true" />
        <div className="wrap page-hero__content">
          <ol className="breadcrumbs">
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li aria-current="page">Academics</li>
          </ol>
          <h1>Knowledge made useful.</h1>
          <p>
            Clear teaching, purposeful practice and real-world skills help learners understand deeply
            and move forward with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Our learning journey</p>
              <h2>One connected path through every stage.</h2>
            </div>
            <p>
              Each programme builds on the last, with caring support in the early years, strong
              foundations in primary and growing independence at college.
            </p>
          </div>
          <div className="level-list">
            <Link className="level-card reveal" id="early" href="/early-school" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/card-nursery.webp"
                alt="Children learning in the Early School"
                loading="lazy"
              />
              <div>
                <p className="level-card__meta">Pre-Nursery · Nursery 1 · Nursery 2</p>
                <h3>Zion Early School</h3>
                <p>
                  Small classes of up to twenty children encourage play, language, social confidence
                  and early number skills. A teacher, assistant and nanny support each class, with
                  specialist Music, ICT and Art.
                </p>
              </div>
              <span className="level-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </Link>
            <Link className="level-card reveal" id="primary" href="/primary-school" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/hero-2-760.webp" alt="Pupils of Zion Primary School" loading="lazy" />
              <div>
                <p className="level-card__meta">Primary 1–6</p>
                <h3>Zion Primary School</h3>
                <p>
                  The national primary curriculum develops literacy, numeracy, science, citizenship
                  and creativity. Pupils move into JSS 1 at the college without another entrance
                  examination.
                </p>
              </div>
              <span className="level-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </Link>
            <Link
              className="level-card reveal"
              id="college"
              href="/comprehensive-college"
              prefetch={false}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/card-college.webp"
                alt="College students in the science laboratory"
                loading="lazy"
              />
              <div>
                <p className="level-card__meta">JSS 1–SS 3</p>
                <h3>Zion Comprehensive College</h3>
                <p>
                  Students deepen their academic study, prepare for national examinations and develop
                  practical ability through an assessed trade taught alongside the regular timetable.
                </p>
              </div>
              <span className="level-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="trades">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Practical education</p>
              <h2>A trade beside the timetable.</h2>
            </div>
            <p>
              Students are assessed through what they make and do—not only what they can write in an
              examination.
            </p>
          </div>
          <div className="trade-grid">
            <article className="trade-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/trade-tailoring.webp"
                alt="Tailoring students at sewing machines"
                loading="lazy"
              />
              <div className="trade-card__body">
                <h3>Fashion &amp; tailoring</h3>
                <p>
                  Measurement, cutting, sewing and garment construction using practical tools and
                  machines.
                </p>
              </div>
            </article>
            <article className="trade-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/trade-ict.webp"
                alt="Students working at computers in the ICT centre"
                loading="lazy"
              />
              <div className="trade-card__body">
                <h3>ICT &amp; digital skills</h3>
                <p>
                  Confident use of computers and digital tools for study, communication and future
                  work.
                </p>
              </div>
            </article>
            <article className="trade-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/trade-catering.webp"
                alt="Students learning catering skills"
                loading="lazy"
              />
              <div className="trade-card__body">
                <h3>Catering &amp; enterprise</h3>
                <p>
                  Practical preparation, safe working habits and the confidence to turn skill into
                  value.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">How learning happens</p>
              <h2>Designed for understanding, not memorising alone.</h2>
            </div>
            <p>
              Classroom teaching is strengthened through experiment, discussion, making, reading and
              the disciplined practice needed for examination success.
            </p>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card reveal">
              <div className="benefit-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 3v5l-4 9a3 3 0 0 0 3 4h10a3 3 0 0 0 3-4l-4-9V3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <h3>Practical science</h3>
              <p>
                Students observe, test and record in Biology, Chemistry and Physics laboratories.
              </p>
            </article>
            <article className="benefit-card reveal">
              <div className="benefit-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V5l8-2 8 2v14l-8 2-8-2Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3>Independent study</h3>
              <p>A library and guided assignments help learners build sound study habits.</p>
            </article>
            <article className="benefit-card reveal">
              <div className="benefit-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12h10M12 7v10M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3>Creative confidence</h3>
              <p>Music, Art, culture and sport give different strengths room to emerge.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="wrap">
          <div className="exam-panel reveal">
            <div>
              <p className="eyebrow">Accredited examination centre</p>
              <h2>Major examinations, taken on a familiar campus.</h2>
              <p>
                Zion Comprehensive College is approved for the principal examinations students take
                at the end of junior and senior secondary school.
              </p>
            </div>
            <div className="exam-badges">
              <span>BECE</span>
              <span>WASSCE</span>
              <span>NECO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-panel reveal">
            <div>
              <h2>Find the right place for your learner.</h2>
              <p>
                Our admissions team can explain entry points, requirements and the next available
                intake.
              </p>
            </div>
            <div className="cta-panel__actions">
              <Link className="btn btn--light" href="/admission" prefetch={false}>
                Admission guide
              </Link>
              <Link className="btn btn--glass" href="/contact" prefetch={false}>
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <JsonLd schema={breadcrumbSchema(BREADCRUMBS)} />
    </>
  );
}
