'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  /** The heading, split where the static site put its coloured <span>. */
  title: string;
  titleAccent: string;
  lead: string;
  primary: string;
  primaryHref: string;
  tabNumber: string;
  tabTitle: string;
};

const SLIDES: readonly Slide[] = [
  {
    image: '/img/hero-1-1600.webp',
    alt: 'Senior students carrying out a physics practical in the laboratory',
    eyebrow: 'Education for self-reliance',
    title: 'Built for what',
    titleAccent: 'comes next.',
    lead: 'From first discoveries to senior secondary success, every learner builds knowledge, character and practical skills for life.',
    primary: 'Explore our schools',
    primaryHref: '/academics',
    tabNumber: '01',
    tabTitle: 'Ready for tomorrow',
  },
  {
    image: '/img/hero-3-1600.webp',
    alt: 'Students conducting a chemistry practical with laboratory equipment',
    eyebrow: 'Science in action',
    title: 'Where curiosity becomes',
    titleAccent: 'discovery.',
    lead: 'Purpose-built laboratories and thoughtful teaching turn difficult ideas into experiences students can see, test and understand.',
    primary: 'See our academics',
    primaryHref: '/academics',
    tabNumber: '02',
    tabTitle: 'Science in action',
  },
  {
    image: '/img/hero-2-1600.webp',
    alt: 'Zion Primary School pupils standing together on campus',
    eyebrow: 'Strong foundations',
    title: 'A place to learn, belong and',
    titleAccent: 'grow.',
    lead: 'A caring school community guides pupils from Pre-Nursery through Primary and onward to SS 3 on one trusted campus.',
    primary: 'Begin enrolment',
    primaryHref: '/admission',
    tabNumber: '03',
    tabTitle: 'A place to belong',
  },
  {
    image: '/img/hero-4-1600.webp',
    alt: 'Young pupils learning together in an Early School classroom',
    eyebrow: 'Confident beginnings',
    title: 'Big futures start with',
    titleAccent: 'small steps.',
    lead: 'Small early-years classes create room for individual attention, joyful learning and the confidence to ask new questions.',
    primary: 'Discover Early School',
    primaryHref: '/early-school',
    tabNumber: '04',
    tabTitle: 'Confident beginnings',
  },
];

const SLIDE_MS = 7000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  // Drives the staggered entrance of the copy: taken off and put back on every slide change,
  // exactly as the static site did.
  const [ready, setReady] = useState(false);
  const [held, setHeld] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Autoplay only once we know the visitor has not asked for reduced motion and the tab is
  // actually in front of them.
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function sync() {
      setAutoplay(!reducedMotion.matches && !document.hidden);
    }

    sync();
    reducedMotion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      reducedMotion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  useEffect(() => {
    setReady(false);

    let settled = false;
    function finish() {
      if (settled) return;
      settled = true;
      setReady(true);
    }

    // One frame with the copy at rest, then the class that transitions it in. A tab that is
    // not painting never runs its animation frames, so a short timer backs it up — otherwise
    // the headline sits at opacity 0 for as long as the page is out of view.
    const frame = requestAnimationFrame(finish);
    const fallback = window.setTimeout(finish, 120);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, [index]);

  // Restart the seven-second bar. The class has to come off, force a reflow and go back on, or
  // the animation carries on from wherever the previous slide left it.
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar || !autoplay) return;
    bar.classList.remove('is-running');
    void bar.offsetWidth;
    bar.classList.add('is-running');
  }, [index, autoplay]);

  useEffect(() => {
    if (!autoplay || held) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [index, autoplay, held]);

  function show(next: number) {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }

  const current = SLIDES[index];

  return (
    <section
      className="hero"
      aria-label="School highlights"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="hero__slides">
        {SLIDES.map((slide, slideIndex) => {
          const active = slideIndex === index;
          return (
            <article
              key={slide.image}
              className={active ? 'hero-slide is-active' : 'hero-slide'}
              aria-hidden={!active}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hero-slide__media"
                src={slide.image}
                alt={slide.alt}
                fetchPriority={slideIndex === 0 ? 'high' : undefined}
                loading={slideIndex === 0 ? undefined : 'lazy'}
              />
              <span className="hero-slide__scrim" aria-hidden="true" />
            </article>
          );
        })}
      </div>
      <div className="wrap hero__content">
        <div className={ready ? 'hero__copy is-ready' : 'hero__copy'} aria-live="polite">
          <p className="eyebrow eyebrow--light">{current.eyebrow}</p>
          <h1>
            {current.title} <span>{current.titleAccent}</span>
          </h1>
          <p className="hero__lead">{current.lead}</p>
          <div className="hero__actions">
            <Link className="btn btn--light" href={current.primaryHref} prefetch={false}>
              {current.primary}
            </Link>
            <Link className="btn btn--glass" href="/contact" prefetch={false}>
              Plan a visit
            </Link>
          </div>
        </div>
      </div>
      <div className="hero__controls">
        <div className="wrap hero__controls-inner">
          <div className="hero__tabs" role="tablist" aria-label="Choose a highlight">
            {SLIDES.map((slide, slideIndex) => (
              <button
                key={slide.tabNumber}
                className={slideIndex === index ? 'hero-tab is-active' : 'hero-tab'}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                onClick={() => show(slideIndex)}
              >
                <span className="hero-tab__num">{slide.tabNumber}</span>
                <span className="hero-tab__title">{slide.tabTitle}</span>
              </button>
            ))}
          </div>
          <div className="hero__arrows">
            <button
              className="icon-btn"
              type="button"
              aria-label="Previous slide"
              onClick={() => show(index - 1)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m15 18-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="icon-btn"
              type="button"
              aria-label="Next slide"
              onClick={() => show(index + 1)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m9 18 6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hero__progress is-running" aria-hidden="true" ref={progressRef}>
          <span />
        </div>
      </div>
    </section>
  );
}
