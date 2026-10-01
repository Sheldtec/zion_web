# `@sheldtech/web` — the public school website

The Zion Schools public site, converted from the static build in `C:\wamp64\www\zion-new`
to the Next.js App Router. **The content and the design are unchanged.** `src/app/site.css`
is the exported stylesheet copied across byte for byte; the pages reproduce the same markup,
the same class names and the same copy.

```bash
npm run web            # from the repo root — dev server on http://localhost:3002
npm run build          # from apps/web
npm run start          # serve the production build on 3002
```

## What moved, and what did not

| Static site                    | Here                                                          |
| ------------------------------ | ------------------------------------------------------------- |
| `index.html`, `about.html`, …  | `/`, `/about`, … (clean URLs, no `.html`)                     |
| `site.css`                     | `src/app/site.css`, unmodified                                |
| `site.js`                      | four small client components (see below)                      |
| Google Fonts `<link>`          | `next/font/google`, self-hosted — same DM Sans and Manrope    |
| `img/`                         | `public/img/`                                                 |

`site.js` became:

- `components/site-header.tsx` — the mobile menu, and the nav item marked as the current page
- `components/hero-carousel.tsx` — the home page hero
- `components/gallery-filter.tsx` — the gallery category filter
- `components/reveal-on-scroll.tsx` — the fade-in observer, mounted once for the whole site

Everything else is a server component and ships no JavaScript of its own.

The one deliberate difference: the hero headline is now in the HTML. The static site built it
with JavaScript after load, so the home page shipped without an `<h1>` for crawlers to read.
It looks and animates the same.

## Configuration

The portal link, telephone number, WhatsApp number and campus address come from the
environment — see `.env.example` for every variable and copy it to `.env.local` to start.
`src/lib/site.ts` reads them, derives the rest (the `tel:` and `wa.me` links, the readable
`0806 760 4980` form, the map URLs) and falls back to the school's current details when a
variable is unset.

**These are `NEXT_PUBLIC_*`, so they are baked in at build time.** Changing one means running
`npm run build` again — a restart on its own will not pick it up.

## SEO

Set up per page in `src/lib/seo.ts`; every page calls `pageMetadata()`, so a page cannot ship
without a canonical or a link-preview card.

- **Canonicals and Open Graph** — one `<link rel="canonical">` per page, plus `og:` and
  `twitter:` tags with a 1200x630 JPEG. All of it is built from `NEXT_PUBLIC_SITE_URL`, which
  has to be the live origin in production.
- **Link-preview images** — `public/img/og/`, cropped from the site's own photographs by
  `scripts/build-social-images.mjs`. JPEG, because WhatsApp and Facebook will not render the
  WebP the pages themselves use. Re-run the script if the source photographs change.
- **Structured data** — an `EducationalOrganization` / `School` and a `WebSite` on every page,
  and a `BreadcrumbList` matching the trail the page prints. Only facts the site states are
  asserted: no coordinates, no opening times, no ratings.
- **`robots.txt` and `sitemap.xml`** — generated from `src/app/robots.ts` and
  `src/app/sitemap.ts`. Nothing is disallowed, deliberately: blocking `/_next/` would hide the
  stylesheet and scripts Google needs to render and score the page.
- **Legacy URLs** — `/about.html` and its siblings 308 to the clean URL, so links to the old
  static site keep working and pass their ranking on.
- **Layout stability** — every image takes its box from the stylesheet (`object-fit: cover`
  inside a sized container), so none of them shift the page as they load.

What is deliberately *not* here: no `keywords` meta, no `FAQPage` markup on the admissions
accordions (the summaries are not questions, and inventing them risks a manual action), and no
rewritten titles or descriptions — those are still the ones the static site shipped with. If
you want them rewritten around search terms, that is a content decision, not a code one.

Before launch: set `NEXT_PUBLIC_SITE_URL`, pick www or the bare domain and redirect the other
to it at the web server, then submit `/sitemap.xml` in Google Search Console.

## Rendering

Every page is statically rendered and revalidates once a day (`revalidate` in
`src/app/layout.tsx`), which is what keeps the copyright year in the footer honest without
shipping a client component to print it.

Two route groups sit under `src/app`: `(site)` and `(schools)`. They exist only to carry the
two footers — the three school pages list the schools in the third column where the rest of
the site lists "Useful links", exactly as the static site did. Route groups do not appear in
the URL.

Images are served as plain `<img>` with `images.unoptimized`: they were exported from the
design as sized `.webp` files, and `next/image` would re-wrap them in markup the stylesheet
does not expect.
