import type { Metadata } from 'next';
import Link from 'next/link';

import { HeroCarousel } from '@/components/hero-carousel';
import { SOCIAL_IMAGES, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Zion Schools Abakaliki | Education for Self-Reliance',
  description:
    'Zion Schools offers quality education from Pre-Nursery to SS 3 in Abakaliki, with science, ICT and practical trade skills on one campus.',
  path: '/',
  image: SOCIAL_IMAGES.college,
});

export default function HomePage() {
  return (
    <>
      {/* The first hero frame is the largest paint on the site; the static page preloaded it
          and so does this one. React hoists the tag into <head>. */}
      <link rel="preload" as="image" href="/img/hero-1-1600.webp" fetchPriority="high" />

      <HeroCarousel />

      <section className="trust-bar" aria-label="School facts">
        <div className="wrap trust-grid">
          <div className="trust-item">
            <strong>Since 2013</strong>
            <span>Growing with our community</span>
          </div>
          <div className="trust-item">
            <strong>3 schools</strong>
            <span>One connected campus</span>
          </div>
          <div className="trust-item">
            <strong>Pre-Nursery–SS 3</strong>
            <span>A complete learning journey</span>
          </div>
          <div className="trust-item">
            <strong>BECE · WASSCE · NECO</strong>
            <span>Approved examination centre</span>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="wrap intro-grid">
          <div className="intro-copy reveal">
            <p className="eyebrow">Welcome to Zion</p>
            <h2>Learning that prepares the whole child.</h2>
            <p className="lead">
              We pair strong academics with practical experience, personal attention and the values
              young people need to thrive.
            </p>
            <p>
              From a first class of fourteen pupils in 2013, Zion Schools has grown into a complete
              learning community with Early, Primary and Secondary education on one campus in
              Abakaliki.
            </p>
            <div className="intro-highlights" aria-label="Our approach">
              <span>
                <strong>Head</strong>Knowledge
              </span>
              <span>
                <strong>Hands</strong>Practical skill
              </span>
              <span>
                <strong>Heart</strong>Character
              </span>
            </div>
            <Link className="link-arrow" href="/about" prefetch={false}>
              Discover our story{' '}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="story-collage reveal" aria-label="Zion students learning and achieving">
            <figure className="story-photo story-photo--main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/story-chemistry.jpg"
                alt="Students using a microscope and laboratory glassware during a science practical"
                loading="lazy"
              />
              <figcaption>Learning by discovery</figcaption>
            </figure>
            <figure className="story-photo story-photo--biology">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/story-biology.jpg"
                alt="Students examining a skeleton model during a biology practical"
                loading="lazy"
              />
            </figure>
            <figure className="story-photo story-photo--award">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/story-achievement.jpg"
                alt="Zion students smiling with trophies won for their achievements"
                loading="lazy"
              />
            </figure>
            <div className="story-stamp">
              <span>Knowledge</span>
              <strong>with purpose</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">One campus, every stage</p>
              <h2>A clear path from first steps to future goals.</h2>
            </div>
            <p>
              Each school offers age-appropriate care, challenge and guidance, while the shared
              campus makes every transition familiar and reassuring.
            </p>
          </div>
          <div className="program-grid">
            <Link className="program-card reveal" href="/early-school" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/card-nursery.webp"
                alt="Pupils in an Early School classroom"
                loading="lazy"
              />
              <div className="program-card__body">
                <span className="program-card__label">Ages 2–5</span>
                <h3>Early School</h3>
                <p>Playful discovery, caring attention and confident first steps into learning.</p>
                <span className="link-arrow">
                  Explore Early School{' '}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
            <Link className="program-card reveal" href="/primary-school" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/hero-2-1120.webp" alt="Zion Primary School pupils" loading="lazy" />
              <div className="program-card__body">
                <span className="program-card__label">Primary 1–6</span>
                <h3>Primary School</h3>
                <p>Strong literacy, numeracy and curiosity for a lasting academic foundation.</p>
                <span className="link-arrow">
                  Explore Primary{' '}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
            <Link className="program-card reveal" href="/comprehensive-college" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/card-college.webp"
                alt="Secondary students working in the science laboratory"
                loading="lazy"
              />
              <div className="program-card__body">
                <span className="program-card__label">JSS 1–SS 3</span>
                <h3>Comprehensive College</h3>
                <p>Academic depth, exam readiness and practical skills for life beyond school.</p>
                <span className="link-arrow">
                  Explore College{' '}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-band">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="feature-band__media"
          src="/img/trade-tailoring.webp"
          alt="Students at sewing machines in the tailoring workshop"
          loading="lazy"
        />
        <span className="feature-band__veil" aria-hidden="true" />
        <div className="wrap">
          <div className="feature-band__content reveal">
            <p className="eyebrow eyebrow--light">Education for self-reliance</p>
            <h2>Skills students can use in the real world.</h2>
            <p>
              Every college student learns a trade beside the academic timetable, turning creativity
              and practical work into genuine capability.
            </p>
            <ul className="feature-points">
              <li>Fashion &amp; tailoring</li>
              <li>ICT skills</li>
              <li>Basic electricity</li>
              <li>Technical drawing</li>
              <li>Cosmetology</li>
              <li>Catering practice</li>
            </ul>
            <Link className="btn btn--light" href="/academics#trades" prefetch={false}>
              Explore practical learning
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Why families choose Zion</p>
              <h2>Everything learning needs, thoughtfully brought together.</h2>
            </div>
            <p>
              Students learn in a stable, supportive environment where teachers can connect
              classroom knowledge with practical experience.
            </p>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card reveal">
              <div className="benefit-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m4 10 8-5 8 5-8 5-8-5Zm3 3.5V17c2.6 2 7.4 2 10 0v-3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Complete education</h3>
              <p>
                A continuous path from Pre-Nursery to SS 3, with no disruptive change of
                environment.
              </p>
            </article>
            <article className="benefit-card reveal">
              <div className="benefit-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 3v5l-4 9a3 3 0 0 0 2.7 4h10.6a3 3 0 0 0 2.7-4l-4-9V3M7 13h10M7 3h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Learning by doing</h3>
              <p>
                Science laboratories, ICT, creative arts and trade workshops make learning active
                and memorable.
              </p>
            </article>
            <article className="benefit-card reveal">
              <div className="benefit-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Exams on campus</h3>
              <p>
                As an approved centre, students sit BECE, WASSCE and NECO in familiar surroundings.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Life at Zion</p>
              <h2>Learning lives beyond the lesson.</h2>
            </div>
            <p>
              Practical work, culture, music, sport and collaboration help students discover what
              they enjoy and where they can excel.
            </p>
          </div>
          <div className="gallery-preview reveal">
            <Link href="/gallery" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/g-chemistry-552.webp" alt="Chemistry practical" loading="lazy" />
              <span>Chemistry practical</span>
            </Link>
            <Link href="/gallery" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/g-cultural-276.webp" alt="Cultural troupe" loading="lazy" />
              <span>Culture</span>
            </Link>
            <Link href="/gallery" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/g-music-276.webp" alt="Music students" loading="lazy" />
              <span>Music</span>
            </Link>
            <Link href="/gallery" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/g-sports-276.webp" alt="Students in sports wear" loading="lazy" />
              <span>Sport</span>
            </Link>
            <Link href="/gallery" prefetch={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/g-catering-276.webp" alt="Catering practical" loading="lazy" />
              <span>Catering</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-panel reveal">
            <div>
              <h2>Come and see where your child can grow.</h2>
              <p>
                Speak with our admissions office, ask your questions and arrange a visit to the Zion
                Schools campus.
              </p>
            </div>
            <div className="cta-panel__actions">
              <Link className="btn btn--light" href="/admission" prefetch={false}>
                Start admission
              </Link>
              <Link className="btn btn--glass" href="/contact" prefetch={false}>
                Plan a visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
