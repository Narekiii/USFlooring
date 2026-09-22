// Central business-information configuration.
// Every component, page, and structured-data object must import from here.
// Fields marked TODO must be verified with the owner before displaying publicly.

export const BUSINESS = {
  name: 'US Flooring & Molding Inc.',
  legalName: 'US Flooring & Molding Inc.',

  // ── Verified contact ────────────────────────────────────────────────────────
  phone: '+18185150009',
  phoneDisplay: '(818) 515-0009',
  email: 'hello@USFlooring.LA', // TODO: confirm this is the preferred public-facing address

  // ── TODO: fax — verify with owner before displaying ─────────────────────────
  // fax: '(818) 840-8222',

  address: {
    street: '1508 W Burbank Blvd',
    city: 'Burbank',
    state: 'CA',
    zip: '91506',
    full: '1508 W Burbank Blvd, Burbank, CA 91506',
  },

  // ── TODO: hours — verify exact open/close times and days with owner ─────────
  // Display as "TODO" in UI until confirmed.
  hours: null as string | null,

  // ── Website and maps ────────────────────────────────────────────────────────
  website: 'https://www.usflooring.la/',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506',
  // Maps embed link (verified location)
  mapsEmbedUrl:
    'https://www.google.com/maps?q=US+Flooring+%26+Molding+Inc.%2C+1508+W+Burbank+Blvd%2C+Burbank%2C+CA+91506&z=16&output=embed',

  // TODO: obtain the direct Google Business Profile URL and Google review URL from owner.
  // The link below goes to Google Maps, not to a verified review landing page.
  googleMapsUrl: 'https://maps.app.goo.gl/jX5UrM4rbZP5CSq5A',
  googleReviewsUrl: null as string | null,

  // TODO: verify rating and review count from owner / Google Business Profile
  googleRating: null as number | null,
  googleReviewCount: null as number | null,

  // ── Verified social profiles ─────────────────────────────────────────────────
  yelpUrl: 'https://www.yelp.com/biz/us-flooring-and-molding-burbank',
  linkedInUrl: 'https://www.linkedin.com/company/usflooring/', // confirmed by owner

  // TODO: verify the following social URLs with the owner before displaying
  // instagramUrl: null,
  // facebookUrl: null,
  // youtubeUrl: null,

  // ── TODO: geo coordinates — do not use until verified ────────────────────────
  // geo: { latitude: 34.1818843, longitude: -118.3279698 },

  // ── Service areas ────────────────────────────────────────────────────────────
  serviceAreas: [
    'Burbank',
    'Glendale',
    'North Hollywood',
    'Toluca Lake',
    'Studio City',
    'Sun Valley',
    'San Fernando Valley',
    'Greater Los Angeles',
  ],

  // ── Assets ───────────────────────────────────────────────────────────────────
  ogImage: 'https://www.usflooring.la/og-image.jpg',
  logoUrl: 'https://www.usflooring.la/logo.png',

  copyrightYear: new Date().getFullYear(),
};

export type BusinessType = typeof BUSINESS;
