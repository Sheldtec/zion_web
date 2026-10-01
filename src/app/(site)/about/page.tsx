import type { Metadata } from 'next';
import Link from 'next/link';

import { JsonLd } from '@/components/json-ld';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Zion Schools | Our Story and Purpose',
  description:
    'Learn about Zion Schools, our story, mission, vision, leadership and learning facilities in Abakaliki.',
  path: '/about',
  image: SOCIAL_IMAGES.campus,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'About' },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/banner-w-1600.webp"
          alt="Students of Zion Schools gathered on the campus"
        />
        <span className="page-hero__veil" aria-hidden="true" />
        <div className="wrap page-hero__content">
          <ol className="breadcrumbs">
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li aria-current="page">About</li>
          </ol>
          <h1>Purpose in every lesson.</h1>
          <p>
            We help young people grow in knowledge, character and practical ability—ready for higher
            education, work and responsible life.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Our story</p>
            <h2>Growing with a belief in what education can do.</h2>
            <p className="lead">
              Zion Schools opened in 2013 with fourteen pupils and a clear idea: education should
              prepare a child for both academic success and real life.
            </p>
            <p>
              Founded by Hon. D. P. Ofoke, the school grew from that first class into three connected
              schools serving learners from Pre-Nursery to SS 3. Families can now follow one
              continuous journey on a familiar campus.
            </p>
            <p>
              Within three years, Zion became a centre for the Basic Education Certificate
              Examination, followed by accreditation for WASSCE and NECO.
            </p>
          </div>
          <div className="split-media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/welcome-840.webp"
              alt="Students gaining practical skills in the tailoring workshop"
              loading="lazy"
            />
            <div className="split-media__note">One campus. Three schools. One shared purpose.</div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">What guides us</p>
            <h2>Clear principles for meaningful education.</h2>
            <p>
              Our mission, vision and promise shape how we teach, support and prepare every learner.
            </p>
          </div>
          <div className="value-grid">
            <article className="value-card reveal">
              <span className="value-card__num">01 · Mission</span>
              <h3>Educate for capability</h3>
              <p>
                To give every student a full academic education and a practical trade, so they leave
                able to earn from what they can do.
              </p>
            </article>
            <article className="value-card reveal">
              <span className="value-card__num">02 · Vision</span>
              <h3>Prepare for what follows</h3>
              <p>
                To prepare students for higher education and work, with practical skills that remain
                useful outside the classroom.
              </p>
            </article>
            <article className="value-card reveal">
              <span className="value-card__num">03 · Promise</span>
              <h3>See the whole child</h3>
              <p>
                To create a safe, attentive learning environment where knowledge, confidence, values
                and creativity grow together.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Our journey</p>
              <h2>Important steps in the Zion story.</h2>
            </div>
            <p>
              Measured growth has allowed the school to deepen its teaching, facilities and
              opportunities while staying close to families.
            </p>
          </div>
          <div className="timeline reveal">
            <article className="timeline-item">
              <strong>2013</strong>
              <h3>The first school year</h3>
              <p>Zion Schools opens at Mgbabor Achara with fourteen pupils.</p>
            </article>
            <article className="timeline-item">
              <strong>2016</strong>
              <h3>BECE centre approval</h3>
              <p>
                The college becomes a recognised centre for the Basic Education Certificate
                Examination.
              </p>
            </article>
            <article className="timeline-item">
              <strong>Today</strong>
              <h3>A complete campus</h3>
              <p>
                Early, Primary and Secondary schools now learn together with accredited senior
                examinations and trade programmes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="wrap split split--reverse">
          <div className="reveal">
            <p className="eyebrow">Leadership</p>
            <h2>A vision built around self-reliance.</h2>
            <p className="lead">
              Hon. D. P. Ofoke founded Zion Schools and serves as Managing Director.
            </p>
            <p>
              His founding idea remains visible in the school today: serious academic work belongs
              alongside practical ability. Students are encouraged to understand ideas deeply, apply
              what they learn and see themselves as capable contributors to their communities.
            </p>
            <Link className="link-arrow" href="/academics" prefetch={false}>
              See how students learn{' '}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
          <div className="split-media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/founder.webp"
              alt="Hon. D. P. Ofoke, founder and Managing Director of Zion Schools"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">The learning environment</p>
              <h2>Facilities designed for active learning.</h2>
            </div>
            <p>
              Students have the spaces and tools to investigate, practise, create and collaborate
              throughout the school day.
            </p>
          </div>
          <div className="facility-grid">
            <article className="facility reveal">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 3v5l-4 9a3 3 0 0 0 2.7 4h10.6a3 3 0 0 0 2.7-4l-4-9V3M7 3h10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
              <h3>Science laboratories</h3>
              <p>Practical work in Biology, Chemistry and Physics.</p>
            </article>
            <article className="facility reveal">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 21h8m-4-4v4" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <h3>ICT centre</h3>
              <p>Digital literacy and hands-on computer learning.</p>
            </article>
            <article className="facility reveal">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M4 19V5l8-2 8 2v14l-8 2-8-2Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <h3>Library</h3>
              <p>A quiet space for study, research and reading.</p>
            </article>
            <article className="facility reveal">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M4 20 20 4M7 4h13v13M4 15v5h5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <h3>Trade workshops</h3>
              <p>Purposeful spaces for making and practical training.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="cta-panel reveal">
            <div>
              <h2>Experience the Zion community in person.</h2>
              <p>Visit the campus, meet our team and see the learning environment for yourself.</p>
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
