import Link from 'next/link';

/** The strip under each school hero that lets a parent hop between the three schools. */
const SCHOOLS = [
  { href: '/early-school', range: 'Pre-Nursery–Nursery 2', name: 'Early School' },
  { href: '/primary-school', range: 'Primary 1–6', name: 'Primary School' },
  { href: '/comprehensive-college', range: 'JSS 1–SS 3', name: 'Comprehensive College' },
] as const;

export type SchoolHref = (typeof SCHOOLS)[number]['href'];

export function SchoolNav({ current }: { current: SchoolHref }) {
  return (
    <nav className="school-nav" aria-label="Explore our schools">
      <div className="wrap school-nav__inner">
        {SCHOOLS.map((school) => (
          <Link
            key={school.href}
            href={school.href}
            prefetch={false}
            aria-current={school.href === current ? 'page' : undefined}
          >
            <small>{school.range}</small>
            <strong>{school.name}</strong>
          </Link>
        ))}
      </div>
    </nav>
  );
}
