import type { Metadata } from 'next';
import Link from 'next/link';

import { JsonLd } from '@/components/json-ld';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Admissions | Zion Comprehensive College, Abakaliki',
  description:
    'How to apply in Abakaliki: entry points from Pre-Nursery to SS 3, the documents to bring, and how to collect an admission form by phone or WhatsApp.',
  path: '/admission',
  image: SOCIAL_IMAGES.campus,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Admissions' },
] as const;

export default function AdmissionPage() {
  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/banner-w-1600.webp"
          alt="A group of Zion Schools students on campus"
        />
        <span className="page-hero__veil" aria-hidden="true" />
        <div className="wrap page-hero__content">
          <ol className="breadcrumbs">
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li aria-current="page">Admissions</li>
          </ol>
          <h1>Your journey starts here.</h1>
          <p>
            A straightforward guide to joining Zion Early School, Zion Primary School or Zion
            Comprehensive College.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap admission-layout">
          <div className="admission-main">
            <section className="reveal">
              <p className="eyebrow">How to apply</p>
              <h2>Three simple steps to begin.</h2>
              <p>
                Admission is open without discrimination by gender, nationality, ethnicity or
                religion. Our office will help your family identify the correct class and provide
                the current fee schedule.
              </p>
              <ol className="steps">
                <li>
                  Collect an admission form from the school office, or request one by phone or
                  WhatsApp.
                </li>
                <li>Complete the form and return it with the required supporting documents.</li>
                <li>The office confirms the place, class, fees and next steps for the new session.</li>
              </ol>
            </section>

            <section className="reveal">
              <p className="eyebrow">Entry points</p>
              <h2>Places across all three schools.</h2>
              <h3>Zion Early School</h3>
              <p>
                Pre-Nursery, Nursery 1 and Nursery 2, with classes capped at twenty children and
                supported by a teacher, assistant teacher and nanny.
              </p>
              <h3>Zion Primary School</h3>
              <p>
                Primary 1 through Primary 6 on the national primary curriculum. Zion Primary pupils
                progress to JSS 1 without a further entrance examination.
              </p>
              <h3>Zion Comprehensive College</h3>
              <p>
                JSS 1 through SS 3. A pupil who has completed Primary 6 at a recognised public or
                private school may collect the JSS 1 form.
              </p>
            </section>

            <section className="reveal">
              <p className="eyebrow">Documents</p>
              <h2>What to bring with the form.</h2>
              <ul className="check-list">
                <li>Completed admission form</li>
                <li>Two office flat files</li>
                <li>Previous school testimonial</li>
                <li>Last term&#39;s result</li>
                <li>Birth certificate or age declaration</li>
                <li>Parent undertaking on good conduct</li>
                <li>Four coloured passport photographs</li>
                <li>One ream of A4 paper</li>
              </ul>
            </section>

            <section className="reveal">
              <p className="eyebrow">Getting ready</p>
              <h2>Student materials and fees.</h2>
              <details className="requirement" open>
                <summary>Uniform and personal items</summary>
                <div className="requirement__body">
                  <ul className="check-list">
                    <li>Black shoes and black belt</li>
                    <li>Locker and stool</li>
                    <li>Wrist watch and umbrella</li>
                    <li>Two practical aprons</li>
                    <li>School uniform from the office</li>
                  </ul>
                </div>
              </details>
              <details className="requirement">
                <summary>Learning materials</summary>
                <div className="requirement__body">
                  <ul className="check-list">
                    <li>Morning Assembly manual</li>
                    <li>Revised Standard Version Bible</li>
                    <li>Oxford Advanced Learner&#39;s Dictionary</li>
                    <li>Recommended subject texts</li>
                    <li>Drawing book and mathematics set</li>
                    <li>Exercise and test books</li>
                  </ul>
                </div>
              </details>
              <details className="requirement">
                <summary>Trade materials</summary>
                <div className="requirement__body">
                  <p>
                    The office issues a list for the student&#39;s selected trade. Materials may
                    include cloth, thread and sewing tools; salon attachments; electrical wire,
                    holders and sockets; or drawing instruments and a board.
                  </p>
                </div>
              </details>
              <details className="requirement">
                <summary>Fees and payment</summary>
                <div className="requirement__body">
                  <p>
                    The current fee schedule is issued with an offer. It covers applicable
                    registration, tuition, development, examination, PTA, caution, uniform,
                    practical and transport charges. The parent portal issues invoices and receipts.
                    Do not pay into a personal account.
                  </p>
                </div>
              </details>
            </section>
          </div>
          <aside className="side-card reveal">
            <p className="side-card__label">Admissions office</p>
            <h2>Need help?</h2>
            <p>
              Speak with the school office for forms, available places and the latest fee schedule.
            </p>
            <dl>
              <div>
                <dt>Telephone</dt>
                <dd>
                  <a href={site.phone.href}>{site.phone.display}</a>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={site.whatsapp.href}>Message the office</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{site.address.short}</dd>
              </div>
              <div>
                <dt>Open</dt>
                <dd>Monday–Friday during term</dd>
              </div>
            </dl>
            <a className="btn btn--light" href={site.whatsapp.href}>
              Request a form
            </a>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="cta-panel reveal">
            <div>
              <h2>Questions before you apply?</h2>
              <p>
                Visit the campus or call our office. We will help you understand the right entry
                point and what comes next.
              </p>
            </div>
            <div className="cta-panel__actions">
              <Link className="btn btn--light" href="/contact" prefetch={false}>
                Plan a visit
              </Link>
              <a className="btn btn--glass" href={site.phone.href}>
                Call the office
              </a>
            </div>
          </div>
        </div>
      </section>
      <JsonLd schema={breadcrumbSchema(BREADCRUMBS)} />
    </>
  );
}
