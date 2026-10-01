import type { Metadata } from 'next';
import Link from 'next/link';

import { JsonLd } from '@/components/json-ld';
import { SOCIAL_IMAGES, breadcrumbSchema, pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Zion Schools | Visit or Call',
  description: `Contact Zion Schools at ${site.address.short}. Call, WhatsApp or get directions to our campus.`,
  path: '/contact',
  image: SOCIAL_IMAGES.campus,
});

/** The same trail the page prints, handed to Google for the search result. */
const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Contact' },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--short">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="page-hero__media"
          src="/img/banner-w-1600.webp"
          alt="Zion Schools students on campus"
        />
        <span className="page-hero__veil" aria-hidden="true" />
        <div className="wrap page-hero__content">
          <ol className="breadcrumbs">
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li aria-current="page">Contact</li>
          </ol>
          <h1>Let&#39;s talk.</h1>
          <p>
            Whether you are planning a visit, asking about admission or following up as a current
            parent, our office is ready to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-cards">
            <article className="contact-card reveal">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-4-1.7-6.3-4-8-8l2-2-2-4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2>Call the office</h2>
              <p>Speak directly with the school team during term-time office hours.</p>
              <a href={site.phone.href}>{site.phone.display}</a>
            </article>
            <article className="contact-card reveal">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.9L3 21l1.7-4.8a8.5 8.5 0 1 1 16.3-4.7Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <h2>Send a WhatsApp</h2>
              <p>Ask about forms, entry points or directions from your phone.</p>
              <a href={site.whatsapp.href}>Message {site.whatsapp.display}</a>
            </article>
            <article className="contact-card reveal">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h2>Visit the campus</h2>
              <p>{site.address.full}.</p>
              <a href={site.map.directionsUrl}>Open directions</a>
            </article>
          </div>

          <div className="contact-layout">
            <div className="map-card reveal">
              <iframe
                title={`Map showing Zion Schools at ${site.address.short}`}
                src={site.map.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <aside className="hours-card reveal">
              <p className="eyebrow eyebrow--light">Office hours</p>
              <h2>Plan your visit.</h2>
              <dl className="hours-list">
                <div>
                  <dt>Monday</dt>
                  <dd>During term</dd>
                </div>
                <div>
                  <dt>Tuesday</dt>
                  <dd>During term</dd>
                </div>
                <div>
                  <dt>Wednesday</dt>
                  <dd>During term</dd>
                </div>
                <div>
                  <dt>Thursday</dt>
                  <dd>During term</dd>
                </div>
                <div>
                  <dt>Friday</dt>
                  <dd>During term</dd>
                </div>
                <div>
                  <dt>Weekend</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
              <a className="btn btn--light" href={site.whatsapp.href}>
                Confirm a visit
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Before you come</p>
            <h2>We are happy to help you prepare.</h2>
            <p>
              For admission enquiries, bring any previous school record you already have. The office
              can explain the complete list and issue the correct form.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="btn btn--primary" href="/admission" prefetch={false}>
                Read the admission guide
              </Link>
            </div>
          </div>
        </div>
      </section>
      <JsonLd schema={breadcrumbSchema(BREADCRUMBS)} />
    </>
  );
}
