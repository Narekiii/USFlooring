export const BUSINESS = {
  name: 'US Flooring & Molding Inc.',
  legalName: 'US Flooring & Molding Inc.',
  phone: '+18185150009',
  phoneDisplay: '(818) 515-0009',
  fax: '(818) 840-8222',
  email: 'hello@USFlooring.LA',
  address: {
    street: '1508 W Burbank Blvd',
    city: 'Burbank',
    state: 'CA',
    zip: '91506',
    full: '1508 W Burbank Blvd, Burbank, CA 91506',
  },
  // Hours are stored here so they can be updated once and reflected everywhere.
  // Update after owner confirmation.
  hours: 'Mon – Sat · 9am – 6pm',
  website: 'https://www.usflooring.la/',
  mapsUrl: 'https://maps.app.goo.gl/jX5UrM4rbZP5CSq5A',
  // Use the same verified Maps link for Google reviews until a direct review URL is confirmed.
  googleReviewsUrl: 'https://maps.app.goo.gl/jX5UrM4rbZP5CSq5A',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506',
  // Rating and review count are stored here to avoid inconsistent hardcoding.
  // Replace with verified official values from Google Business Profile.
  googleRating: null as number | null,
  googleReviewCount: null as number | null,
  serviceAreas: [
    'Burbank',
    'Glendale',
    'North Hollywood',
    'Toluca Lake',
    'Studio City',
    'Sun Valley',
    'San Fernando Valley',
  ],
  copyrightYear: new Date().getFullYear(),
  ogImage: 'https://www.usflooring.la/og-image.jpg',
  logoUrl: 'https://www.usflooring.la/logo.png',
};

export type BusinessType = typeof BUSINESS;
