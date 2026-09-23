export const SITE_URL = "https://www.usflooring.la";
export const BUSINESS = { name: "US Flooring & Molding Inc.", legalName: "US Flooring & Molding Inc.", phone: "+18185150009", phoneDisplay: "(818) 515-0009", email: "hello@USFlooring.LA", address: { street: "1508 W Burbank Blvd", city: "Burbank", state: "CA", zip: "91506" }, googleMapsUrl: "https://maps.app.goo.gl/jX5UrM4rbZP5CSq5A", yelpUrl: "https://www.yelp.com/biz/us-flooring-and-molding-burbank", linkedInUrl: "https://www.linkedin.com/company/usflooring/", website: SITE_URL, ogImage: `${SITE_URL}/og-image.jpg`, logoUrl: `${SITE_URL}/us-flooring-header-logo-400x160.png` };
export const services = [
  ["Hardwood Flooring", "/hardwood-flooring-burbank", "Solid and engineered hardwood flooring products and installation in Burbank."],
  ["Laminate Flooring", "/laminate-flooring-burbank", "Durable laminate flooring products and professional installation in Burbank."],
  ["Luxury Vinyl Flooring", "/luxury-vinyl-flooring-burbank", "LVP and luxury vinyl flooring sales and installation."],
  ["Flooring Installation", "/flooring-installation-burbank", "Professional flooring installation for homes and commercial properties."],
  ["Molding & Baseboards", "/molding-baseboard-installation-burbank", "Baseboard, molding, trim, reducers, stair nose, and transition installation."],
] as const;
