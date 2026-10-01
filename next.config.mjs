/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // The public site is statically rendered. Nothing here is behind a login, so every page is
  // a server component built at compile time and revalidated daily (see `revalidate` in the
  // root layout) — that keeps the footer year honest and leaves room for portal-fed content
  // later without moving to SSR.
  poweredByHeader: false,

  // Images are already exported from the design as sized .webp files, so they are served as
  // plain <img> with the original srcset-free markup. next/image would re-wrap them and change
  // the layout the stylesheet expects.
  images: {
    unoptimized: true,
  },

  /**
   * The site this replaced was a folder of .html files. Anything already linking to one —
   * a Google result, a WhatsApp message, a printed flyer — lands on the page it meant
   * instead of a 404, and the 308 passes the ranking across rather than starting again.
   */
  async redirects() {
    const pages = [
      ['index', '/'],
      ['about', '/about'],
      ['academics', '/academics'],
      ['admission', '/admission'],
      ['gallery', '/gallery'],
      ['contact', '/contact'],
      ['early-school', '/early-school'],
      ['primary-school', '/primary-school'],
      ['comprehensive-college', '/comprehensive-college'],
    ];

    return pages.map(([file, destination]) => ({
      source: `/${file}.html`,
      destination,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // The site asks for none of the three. The contact page embeds a Google map, which
          // needs neither.
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
