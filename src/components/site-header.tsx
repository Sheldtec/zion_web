'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { site } from '@/lib/site';

/**
 * The nav marks one item as the current page. The three school pages sit under Academics, so
 * they light Academics rather than an item of their own — as the static site did.
 */
type NavItem = { href: string; label: string; owns: readonly string[] };

const NAV: readonly NavItem[] = [
  { href: '/', label: 'Home', owns: ['/'] },
  { href: '/about', label: 'About', owns: ['/about'] },
  {
    href: '/academics',
    label: 'Academics',
    owns: ['/academics', '/early-school', '/primary-school', '/comprehensive-college'],
  },
  { href: '/admission', label: 'Admissions', owns: ['/admission'] },
  { href: '/gallery', label: 'Gallery', owns: ['/gallery'] },
  { href: '/contact', label: 'Contact', owns: ['/contact'] },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // The mobile menu locks the page behind it. Closing on route change matters because a
  // client-side navigation leaves the component mounted.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 1060) setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap nav-shell">
        <Link className="brand" href="/" prefetch={false} aria-label="Zion Schools home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/crest-96.webp" alt="" width={48} height={51} />
          <span>
            <span className="brand__name">Zion Schools</span>
            <span className="brand__tag">Abakaliki · Est. 2013</span>
          </span>
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mainNav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          <span />
        </button>
        <nav
          className={open ? 'main-nav is-open' : 'main-nav'}
          id="mainNav"
          aria-label="Main navigation"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) setOpen(false);
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              aria-current={item.owns.includes(pathname) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className="nav-cta" href={site.portalUrl}>
            Portal
          </a>
        </nav>
      </div>
    </header>
  );
}
