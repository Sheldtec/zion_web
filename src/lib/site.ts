/**
 * Everything on the public site that differs between environments, or that the school may
 * change without a code change: the portal address, the telephone number, the WhatsApp
 * number and the campus address.
 *
 * All of it is read from NEXT_PUBLIC_* at build time and all of it is printed on a public
 * page — none of it is a secret. Each value falls back to what the school uses today, so a
 * missing variable renders the right thing rather than an empty gap in the footer.
 */

// Next inlines process.env.NEXT_PUBLIC_* at build time only for literal member access, so
// each variable is read by its own name rather than through a dynamic lookup.
const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL?.trim() || '/portal';
const PHONE = process.env.NEXT_PUBLIC_SCHOOL_PHONE?.trim() || '+2348067604980';
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_SCHOOL_PHONE_DISPLAY?.trim();
const WHATSAPP = process.env.NEXT_PUBLIC_SCHOOL_WHATSAPP?.trim();
const ADDRESS_LINE1 = process.env.NEXT_PUBLIC_SCHOOL_ADDRESS_LINE1?.trim() || 'Mgbabor Achara, Izzi';
const ADDRESS_LINE2 = process.env.NEXT_PUBLIC_SCHOOL_ADDRESS_LINE2?.trim() || 'Abakaliki, Ebonyi State';
const ADDRESS_SHORT =
  process.env.NEXT_PUBLIC_SCHOOL_ADDRESS_SHORT?.trim() || 'Mgbabor Achara, Izzi, Abakaliki';
const MAP_QUERY =
  process.env.NEXT_PUBLIC_SCHOOL_MAP_QUERY?.trim() ||
  'Zion Comprehensive College Mgbabor Achara Abakaliki';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3002';

// Search engines want the address broken into its parts, which no line of the printed address
// gives them on its own. These are never rendered; they only feed the structured data.
const ADDRESS_STREET =
  process.env.NEXT_PUBLIC_SCHOOL_ADDRESS_STREET?.trim() || 'Mgbabor Achara, Izzi';
const ADDRESS_LOCALITY = process.env.NEXT_PUBLIC_SCHOOL_ADDRESS_LOCALITY?.trim() || 'Abakaliki';
const ADDRESS_REGION = process.env.NEXT_PUBLIC_SCHOOL_ADDRESS_REGION?.trim() || 'Ebonyi';
const ADDRESS_COUNTRY = process.env.NEXT_PUBLIC_SCHOOL_ADDRESS_COUNTRY?.trim() || 'NG';

// Optional. Each one tells Google that a profile it has found elsewhere is the same school;
// an entry only appears in the structured data when its variable is set, because a link to a
// profile that does not exist is worse than no link at all.
const SOCIAL_PROFILES = [
  process.env.NEXT_PUBLIC_SCHOOL_FACEBOOK,
  process.env.NEXT_PUBLIC_SCHOOL_INSTAGRAM,
  process.env.NEXT_PUBLIC_SCHOOL_X,
  process.env.NEXT_PUBLIC_SCHOOL_YOUTUBE,
  process.env.NEXT_PUBLIC_SCHOOL_LINKEDIN,
]
  .map((value) => value?.trim())
  .filter((value): value is string => Boolean(value));

/** Digits only, so a number written +234 806 760 4980 or 0806-760-4980 still works. */
function digits(value: string): string {
  return value.replace(/\D+/g, '');
}

/**
 * `+2348067604980` reads as `0806 760 4980` to a Nigerian parent. Anything that is not a
 * recognisable Nigerian mobile number is printed as given rather than mangled.
 */
function nigerianLocalForm(e164: string): string {
  const d = digits(e164);
  const national = d.startsWith('234') ? d.slice(3) : d.startsWith('0') ? d.slice(1) : d;
  if (national.length !== 10) return e164;
  return `0${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
}

/** Google Maps wrote these queries with "+" for spaces; keep that spelling. */
function mapQuery(value: string): string {
  return encodeURIComponent(value).replace(/%20/g, '+');
}

/** wa.me wants the country code and no plus. */
function waNumber(value: string): string {
  const d = digits(value);
  // A local 0806… needs the country code putting back before wa.me will accept it.
  return d.startsWith('0') ? `234${d.slice(1)}` : d;
}

const whatsappNumber = waNumber(WHATSAPP ?? PHONE);

export const site = {
  name: 'Zion Schools',
  /** Where "Portal", "Parent portal" and the nav call-to-action point. */
  portalUrl: PORTAL_URL,
  url: SITE_URL,

  phone: {
    /** For `tel:` — E.164. */
    href: `tel:${PHONE.startsWith('+') ? PHONE : `+${digits(PHONE)}`}`,
    /** For reading — "0806 760 4980". */
    display: PHONE_DISPLAY || nigerianLocalForm(PHONE),
  },

  whatsapp: {
    href: `https://wa.me/${whatsappNumber}`,
    display: nigerianLocalForm(whatsappNumber),
  },

  address: {
    /** "Mgbabor Achara, Izzi" — first printed line in the footer. */
    line1: ADDRESS_LINE1,
    /** "Abakaliki, Ebonyi State" — second printed line in the footer. */
    line2: ADDRESS_LINE2,
    /** "Mgbabor Achara, Izzi, Abakaliki, Ebonyi State" — the top bar and contact page. */
    full: `${ADDRESS_LINE1}, ${ADDRESS_LINE2}`,
    /** "Mgbabor Achara, Izzi, Abakaliki" — mid-sentence, in the footer blurb. */
    short: ADDRESS_SHORT,
  },

  /** Broken-out address parts — structured data only, never printed. */
  postalAddress: {
    street: ADDRESS_STREET,
    locality: ADDRESS_LOCALITY,
    region: ADDRESS_REGION,
    country: ADDRESS_COUNTRY,
  },

  /** Profiles that identify the same school elsewhere. Empty unless configured. */
  socialProfiles: SOCIAL_PROFILES,

  map: {
    /** The "Directions" / "Open directions" link. */
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery(MAP_QUERY)}`,
    /** The iframe on the contact page. */
    embedUrl: `https://www.google.com/maps?q=${mapQuery(MAP_QUERY)}&output=embed`,
  },
} as const;

export type Site = typeof site;
