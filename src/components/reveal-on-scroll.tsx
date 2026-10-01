'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Fades `.reveal` blocks in as they enter the viewport — the one behaviour the static site's
 * script applied across every page. Kept as a single mounted observer rather than a wrapper
 * around each block, so the pages themselves stay server components with no client bundle.
 *
 * Re-runs on navigation: a client-side route change swaps the markup underneath while this
 * component stays mounted.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (items.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!('IntersectionObserver' in window) || reducedMotion.matches) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
