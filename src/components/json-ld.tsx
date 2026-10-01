/**
 * Renders a schema.org block. Structured data has to reach the crawler in the HTML, and this
 * is the only script tag the site emits itself.
 *
 * The data is built in `lib/seo.ts` from values we control, never from user input, so the
 * serialised JSON cannot carry markup — `<` is escaped regardless, so that a future value
 * containing "</script>" cannot break out of the tag.
 */
export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }}
    />
  );
}
