import type { Metadata } from 'next';
import Link from 'next/link';

import { JsonLd } from '@/components/json-ld';
import { SchoolNav } from '@/components/school-nav';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Secondary School in Abakaliki | Zion Comprehensive College',
  description:
    'JSS 1 to SS 3 in Abakaliki with science laboratories, ICT, technical drawing and a vocational trade. An approved BECE, WASSCE and NECO examination centre.',
  path: '/comprehensive-college',
  image: SOCIAL_IMAGES.college,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Comprehensive College' },
] as const;

export default function ComprehensiveCollegePage() {
  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/hero-1-1600.webp"
          alt="Senior students carrying out a physics practical in the laboratory"
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
            <li aria-current="page">Comprehensive College</li>
          </ol>
          <div className="school-hero__badge">JSS 1–SS 3</div>
          <h1>Think deeply. Work skilfully.</h1>
          <p>
            Rigorous academics, practical experience and purposeful guidance prepare students for
            examinations, higher education and productive life.
          </p>
        </div>
      </section>
      <SchoolNav current="/comprehensive-college" />

      <section className="section">
        <div className="wrap school-intro">
          <div className="reveal">
            <p className="eyebrow">Education for self-reliance</p>
            <h2>Academic ambition with practical purpose.</h2>
            <p className="lead">
              Secondary education should open doors—and give students the confidence and capability to
              walk through them.
            </p>
            <p>
              Zion Comprehensive College combines a broad academic programme with laboratory learning,
              ICT, creative activity and an assessed trade beside the timetable.
            </p>
            <p>
              Students are guided toward growing independence, strong study habits and the examination
              readiness required at the end of junior and senior secondary school.
            </p>
          </div>
          <aside className="school-fact reveal">
            <span className="school-fact__value">3</span>
            <h3>Examinations on campus</h3>
            <p>
              Zion is an approved centre for BECE, WASSCE and NECO, allowing students to sit major
              examinations in familiar surroundings.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Six years of progress</p>
              <h2>From broad foundations to focused goals.</h2>
            </div>
            <p>
              The college journey develops subject knowledge, practical competence and the personal
              responsibility students need for what comes next.
            </p>
          </div>
          <div className="stage-grid">
            <article className="stage-card reveal" data-step="J">
              <span className="stage-card__label">JSS 1–2</span>
              <h3>Explore broadly</h3>
              <p>
                Students strengthen core subjects, encounter new disciplines and develop the
                organisation needed for secondary study.
              </p>
            </article>
            <article className="stage-card reveal" data-step="B">
              <span className="stage-card__label">JSS 3 · BECE</span>
              <h3>Show secure foundations</h3>
              <p>
                Structured revision, practical learning and careful assessment prepare students for
                the Basic Education Certificate Examination.
              </p>
            </article>
            <article className="stage-card reveal" data-step="S">
              <span className="stage-card__label">SS 1–3</span>
              <h3>Prepare with direction</h3>
              <p>
                Senior students deepen subject knowledge, refine exam technique and work toward
                WASSCE, NECO and future study or work.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap subject-panel">
          <div className="reveal">
            <p className="eyebrow">Academic learning</p>
            <h2>Subjects that build knowledge and choice.</h2>
            <p>
              A balanced secondary curriculum supports core competence, scientific thinking,
              responsible citizenship and pathways toward future specialisation.
            </p>
          </div>
          <ul className="subject-list reveal">
            <li>English Language</li>
            <li>Mathematics</li>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Physics</li>
            <li>ICT</li>
            <li>Technical Drawing</li>
            <li>Civic Education</li>
            <li>Social Sciences</li>
            <li>Creative Arts</li>
            <li>Business Studies</li>
            <li>Religious Studies</li>
          </ul>
        </div>
      </section>

      <section className="section section--warm" id="college-trades">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Practical trade programme</p>
              <h2>Capability students can carry beyond school.</h2>
            </div>
            <p>
              Every college student learns through real materials, tools and outcomes. Practical work
              is assessed by what students can make and do.
            </p>
          </div>
          <div className="trade-grid">
            <article className="trade-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/trade-tailoring.webp"
                alt="Students at sewing machines in the tailoring workshop"
                loading="lazy"
              />
              <div className="trade-card__body">
                <h3>Fashion &amp; tailoring</h3>
                <p>
                  Measurement, cutting, machine work and garment construction develop precision and
                  enterprise.
                </p>
              </div>
            </article>
            <article className="trade-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/trade-ict.webp"
                alt="Students working at desktop computers"
                loading="lazy"
              />
              <div className="trade-card__body">
                <h3>ICT &amp; technical skills</h3>
                <p>
                  Computer use, technical drawing and basic electricity connect knowledge to modern
                  work.
                </p>
              </div>
            </article>
            <article className="trade-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/trade-catering.webp"
                alt="Students during a practical catering activity"
                loading="lazy"
              />
              <div className="trade-card__body">
                <h3>Catering &amp; enterprise</h3>
                <p>
                  Preparation, hygiene, teamwork and presentation turn practical experience into
                  usable skill.
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
              <p className="eyebrow">Learning resources</p>
              <h2>Spaces that turn theory into understanding.</h2>
            </div>
            <p>
              Purposeful facilities allow students to investigate, practise and create, supporting
              stronger understanding across the curriculum.
            </p>
          </div>
          <div className="learning-grid">
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 3v5l-4 9a3 3 0 0 0 3 4h10a3 3 0 0 0 3-4l-4-9V3M7 3h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div>
                <h3>Science laboratories</h3>
                <p>Students conduct practical work in Biology, Chemistry and Physics.</p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 21h8m-4-4v4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>ICT centre</h3>
                <p>Hands-on computer learning builds digital fluency and responsible use.</p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V5l8-2 8 2v14l-8 2-8-2Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>Library &amp; study</h3>
                <p>Reading and guided independent work support research and disciplined revision.</p>
              </div>
            </article>
            <article className="learning-item reveal">
              <div className="learning-item__icon">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path d="M4 20 20 4M7 4h13v13M4 15v5h5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>Workshops</h3>
                <p>Dedicated practical spaces support technical drawing and trade instruction.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="exam-panel reveal">
            <div>
              <p className="eyebrow">Exam readiness</p>
              <h2>Prepared carefully. Examined confidently.</h2>
              <p>
                Regular assessment, guided revision and familiarity with the examination environment
                help students approach each important stage with composure.
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
              <h2>Prepare for a capable future.</h2>
              <p>
                Speak with our admissions team about entry into JSS 1 or another available college
                class.
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
