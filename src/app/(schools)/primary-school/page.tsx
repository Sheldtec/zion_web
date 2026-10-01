import type { Metadata } from 'next';
import Link from 'next/link';

import { JsonLd } from '@/components/json-ld';
import { SchoolNav } from '@/components/school-nav';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Zion Primary School | Primary 1–6',
  description:
    'Explore Zion Primary School in Abakaliki: strong foundations in literacy, numeracy, science, creativity and character from Primary 1 to 6.',
  path: '/primary-school',
  image: SOCIAL_IMAGES.campus,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Primary School' },
] as const;

export default function PrimarySchoolPage() {
  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/hero-2-1600.webp"
          alt="Pupils of Zion Primary School together on campus"
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
            <li aria-current="page">Primary School</li>
          </ol>
          <div className="school-hero__badge">Primary 1–6</div>
          <h1>Strong roots. Growing confidence.</h1>
          <p>
            A purposeful primary education that builds fluent skills, curious minds and the confidence
            to take on bigger challenges.
          </p>
        </div>
      </section>
      <SchoolNav current="/primary-school" />

      <section className="section">
        <div className="wrap school-intro">
          <div className="reveal">
            <p className="eyebrow">Foundations that last</p>
            <h2>Learn well today. Reach further tomorrow.</h2>
            <p className="lead">
              The primary years are where essential skills become reliable habits and curiosity
              becomes a way of thinking.
            </p>
            <p>
              Zion Primary School follows the national primary curriculum, combining clear classroom
              instruction with activity, discussion, reading, creative expression and regular
              practice.
            </p>
            <p>
              Teachers guide pupils to understand ideas—not simply repeat them—while building the
              discipline, kindness and independence needed for the next stage.
            </p>
          </div>
          <aside className="school-fact reveal">
            <span className="school-fact__value">1–6</span>
            <h3>Six connected primary years</h3>
            <p>
              Pupils progress through one coherent programme and move directly into JSS 1 at Zion
              Comprehensive College.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">A progressive journey</p>
              <h2>Challenge grows as confidence grows.</h2>
            </div>
            <p>
              Teaching becomes gradually more independent and demanding, while every stage reinforces
              the core skills pupils need.
            </p>
          </div>
          <div className="stage-grid">
            <article className="stage-card reveal" data-step="2">
              <span className="stage-card__label">Primary 1–2</span>
              <h3>Secure the basics</h3>
              <p>
                Reading, handwriting, number fluency and classroom routines establish a dependable
                foundation for all later learning.
              </p>
            </article>
            <article className="stage-card reveal" data-step="4">
              <span className="stage-card__label">Primary 3–4</span>
              <h3>Connect ideas</h3>
              <p>
                Pupils read with greater understanding, solve richer problems and begin applying
                knowledge across different subjects.
              </p>
            </article>
            <article className="stage-card reveal" data-step="6">
              <span className="stage-card__label">Primary 5–6</span>
              <h3>Think independently</h3>
              <p>
                More sustained work, revision and responsibility prepare pupils academically and
                personally for junior secondary school.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap subject-panel">
          <div className="reveal">
            <p className="eyebrow">A broad curriculum</p>
            <h2>Essential skills, wider possibilities.</h2>
            <p>
              Core academic subjects sit alongside technology, creativity, physical development and
              values education for a balanced week.
            </p>
          </div>
          <ul className="subject-list reveal">
            <li>English Language</li>
            <li>Mathematics</li>
            <li>Basic Science</li>
            <li>Social Studies</li>
            <li>Civic Education</li>
            <li>ICT</li>
            <li>Creative Arts</li>
            <li>Music</li>
            <li>Physical Education</li>
            <li>Religious Studies</li>
          </ul>
        </div>
      </section>

      <section className="section section--warm">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">More than lessons</p>
              <h2>Experiences that develop the whole pupil.</h2>
            </div>
            <p>
              Primary pupils learn to contribute, cooperate and express themselves through varied
              experiences within the school community.
            </p>
          </div>
          <div className="learning-grid">
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 21h8m-4-4v4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>Digital confidence</h3>
                <p>Guided use of computers introduces useful skills and responsible technology habits.</p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path d="M4 20c4-1 4-5 8-5s4 4 8 5M6 9h12M8 5h8" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>Sport &amp; wellbeing</h3>
                <p>Movement, games and inter-house activities develop health, teamwork and resilience.</p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18V5l10-2v13M9 9l10-2M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div>
                <h3>Music &amp; creativity</h3>
                <p>Art and music give pupils new languages for imagination, practice and performance.</p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Habits for learning</h3>
                <p>
                  Organisation, punctuality, reading and regular practice prepare pupils for greater
                  independence.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="transition-panel reveal">
            <div className="transition-panel__copy">
              <p className="eyebrow eyebrow--light">A seamless transition</p>
              <h2>From Primary 6 to JSS 1.</h2>
              <p>
                Zion Primary pupils continue into the college without another entrance examination,
                keeping familiar relationships and surroundings as academic expectations grow.
              </p>
              <Link className="btn btn--light" href="/comprehensive-college" prefetch={false}>
                Explore the College
              </Link>
            </div>
            <div className="transition-panel__image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="transition-panel__image"
                src="/img/card-college.webp"
                alt="Zion Comprehensive College students in the laboratory"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="wrap">
          <div className="cta-panel reveal">
            <div>
              <h2>Build a strong primary foundation.</h2>
              <p>
                Ask our admissions team about available Primary School places and the right class for
                your child.
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
