Perform a complete production-level technical SEO, local SEO, GEO, accessibility, credibility, and lead-conversion correction for the existing US Flooring & Molding Inc. website.

Website:

https://www.usflooring.la/

IMPORTANT OPERATING RULES

1. Inspect the entire existing project before making changes.
2. Preserve the existing visual design, woody/cream color palette, typography, spacing, animations, responsive behavior, navigation, and overall brand identity.
3. Do not redesign the website.
4. Do not create a second SEO system on top of the existing one.
5. Find and REMOVE all conflicting, duplicate, placeholder, and Figma-generated metadata.
6. There must be only one authoritative version of each title, description, canonical, robots, Open Graph, and Twitter tag.
7. Do not invent business facts, reviews, project photographs, certifications, licenses, warranties, brands, prices, or service claims.
8. Do not publish fake testimonials or describe stock photographs as completed customer projects.
9. Use clean semantic HTML and production-ready code.
10. Complete all requested changes across desktop and mobile.
11. After implementation, inspect the generated HTML and confirm that the old unwanted tags no longer exist.
12. Do not report success unless the live output actually meets the validation requirements at the end of this prompt.

BUSINESS INFORMATION

Use this consistent business identity wherever appropriate:

Business name:
US Flooring & Molding Inc.

Primary business category:
Flooring store and flooring installation contractor

Address:
1508 W Burbank Blvd
Burbank, CA 91506

Telephone:
+1-818-515-0009

Visible phone formatting:
(818) 515-0009

Fax:
(818) 840-8222

Email:
[hello@USFlooring.LA](mailto:hello@USFlooring.LA)

Primary website:
https://www.usflooring.la/

Primary city:
Burbank, California

Primary service region:
Greater Los Angeles and the San Fernando Valley

Listed service areas:
Burbank
Glendale
North Hollywood
Toluca Lake
Studio City
Sun Valley
San Fernando Valley

Do not change the displayed business hours until the business owner confirms the correct hours. Store the hours in one centralized business-information object so they can be updated once and reflected everywhere.

Do not hardcode a Google review count in multiple components. Store any verified rating and review count in one centralized data object. If the current official Google Business Profile information cannot be verified, use neutral language such as “Read our Google reviews” instead of displaying an unverified review count.

SECTION 1 — REMOVE ALL DUPLICATE AND PLACEHOLDER METADATA

Search the entire codebase, including index.html, layout components, page components, build configuration, SEO components, deployment settings, and generated metadata.

Completely remove every occurrence of the following unwanted Figma placeholder content:

“Figma Make App”

“Offers a streamlined platform to build and launch professional websites quickly, empowering users to establish their presence online.”

Remove any similar generic description referring to:

* Figma
* Creating applications
* Building websites
* Publishing websites
* A generic app
* A website-building platform

Remove this tag everywhere:

<meta name="robots" content="noindex, nofollow">

Remove all duplicate:

* meta descriptions
* robots tags
* canonical tags
* Open Graph titles
* Open Graph descriptions
* Open Graph URLs
* Open Graph images
* Twitter titles
* Twitter descriptions
* Twitter images

The final HTML for every page must have:

* Exactly one `<title>`
* Exactly one meta description
* No restrictive robots meta tag
* Exactly one canonical URL
* Exactly one Open Graph title
* Exactly one Open Graph description
* Exactly one Open Graph URL
* Exactly one Open Graph image
* One coherent Twitter Card set

Do not leave duplicate tags in the source even if one version appears earlier than the other.

Use this robots tag, or omit it because indexing and following are the defaults:

<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

SECTION 2 — CREATE UNIQUE PAGE-LEVEL SEO METADATA

Create one reusable SEO component or route-aware metadata system.

Each route must receive its own title, description, canonical URL, Open Graph metadata, and Twitter metadata.

HOME PAGE

Route:
/

Title:
Flooring Store & Installation in Burbank, CA | US Flooring

Meta description:
Visit US Flooring & Molding Inc. for hardwood, laminate, luxury vinyl, molding, and professional flooring installation in Burbank and greater Los Angeles. Request a free estimate.

Canonical:
https://www.usflooring.la/

Open Graph title:
US Flooring & Molding Inc. | Burbank Flooring Experts

Open Graph description:
Hardwood, laminate, luxury vinyl, molding, and professional flooring installation from a family-owned Burbank flooring company.

Open Graph URL:
https://www.usflooring.la/

PRODUCTS AND SERVICES PAGE

Route:
/products

Title:
Hardwood, Laminate & Vinyl Flooring in Burbank

Meta description:
Explore hardwood, laminate, luxury vinyl, molding, trim, showroom consultation, and professional flooring installation from US Flooring & Molding in Burbank.

Canonical:
https://www.usflooring.la/products

Open Graph title:
Flooring Products & Installation | US Flooring Burbank

Open Graph description:
Compare hardwood, laminate, luxury vinyl, molding, and professional flooring installation options for your Los Angeles-area property.

Open Graph URL:
https://www.usflooring.la/products

ABOUT PAGE

Route:
/about

Title:
About US Flooring & Molding | Burbank Flooring Experts

Meta description:
Learn about US Flooring & Molding Inc., a family-owned Burbank flooring store and installation company backed by more than 20 years of flooring experience.

Canonical:
https://www.usflooring.la/about

Open Graph title:
About US Flooring & Molding Inc.

Open Graph description:
Meet the family and flooring professionals behind US Flooring & Molding Inc. in Burbank, California.

Open Graph URL:
https://www.usflooring.la/about

GALLERY PAGE

Route:
/gallery

Title:
Flooring Installation Projects in Los Angeles | US Flooring

Meta description:
View hardwood, laminate, luxury vinyl, molding, and flooring installation work from US Flooring & Molding Inc. in Burbank and greater Los Angeles.

Canonical:
https://www.usflooring.la/gallery

Open Graph title:
Flooring Project Gallery | US Flooring & Molding

Open Graph description:
Explore flooring and molding projects from US Flooring & Molding Inc. serving Burbank and greater Los Angeles.

Open Graph URL:
https://www.usflooring.la/gallery

REVIEWS PAGE

Route:
/reviews

Title:
US Flooring & Molding Reviews | Burbank, CA

Meta description:
Read verified customer experiences with US Flooring & Molding Inc. for flooring products, molding, consultation, and installation in Burbank and Los Angeles.

Canonical:
https://www.usflooring.la/reviews

Open Graph title:
Customer Reviews | US Flooring & Molding

Open Graph description:
See what verified customers say about working with US Flooring & Molding Inc. in Burbank.

Open Graph URL:
https://www.usflooring.la/reviews

CONTACT PAGE

Route:
/contact

Title:
Free Flooring Estimate in Burbank | US Flooring

Meta description:
Request a free flooring estimate from US Flooring & Molding Inc. Call (818) 515-0009 or visit the showroom at 1508 W Burbank Blvd, Burbank, CA.

Canonical:
https://www.usflooring.la/contact

Open Graph title:
Request a Free Flooring Estimate | US Flooring

Open Graph description:
Discuss your flooring project with the US Flooring & Molding team in Burbank, California.

Open Graph URL:
https://www.usflooring.la/contact

For every route, also create matching Twitter metadata:

<meta name="twitter:card" content="summary_large_image">

The Twitter title, description, and image should match the route’s Open Graph information.

When the visitor changes routes, update:

* document title
* description
* canonical
* Open Graph title
* Open Graph description
* Open Graph URL
* Twitter title
* Twitter description

However, whenever technically possible, include route-specific metadata in the initial server-generated or pre-rendered HTML rather than relying only on client-side JavaScript.

SECTION 3 — FIX THE SOCIAL-SHARING IMAGE

The current metadata points to:

https://www.usflooring.la/og-image.jpg

That URL must return a real image—not the homepage HTML.

Create or add a real branded Open Graph image with these specifications:

* 1200 × 630 pixels
* JPG or PNG
* Correct image MIME type
* File size preferably below 500 KB
* Clear US Flooring & Molding logo
* Readable on mobile link previews
* Woody, walnut, cream, and warm neutral brand colors
* Real company/showroom/project image if one is available
* No fake project photography
* No tiny text
* No unnecessary decorative details

Suggested visible text:

US Flooring & Molding Inc.
Flooring • Molding • Installation
Serving Greater Los Angeles for Over 20 Years
(818) 515-0009

Use one stable URL, such as:

https://www.usflooring.la/og-image.jpg

Add:

<meta property="og:image" content="https://www.usflooring.la/og-image.jpg">
<meta property="og:image:secure_url" content="https://www.usflooring.la/og-image.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="US Flooring & Molding Inc. flooring, molding, and installation services in Burbank, California">

Add matching Twitter image metadata.

Verify that directly visiting `/og-image.jpg` returns the actual image with an image content type.

SECTION 4 — CREATE A REAL ROBOTS.TXT FILE

Create a real plain-text file at:

/public/robots.txt

It must be publicly available at:

https://www.usflooring.la/robots.txt

Use exactly:

User-agent: *
Allow: /

Sitemap: https://www.usflooring.la/sitemap.xml

Remove:

Disallow: /

The robots.txt URL must return `text/plain`, not the React application HTML.

SECTION 5 — CREATE A REAL XML SITEMAP

Create a valid XML file at:

/public/sitemap.xml

It must be publicly accessible at:

https://www.usflooring.la/sitemap.xml

Use valid XML and include all existing indexable routes:

<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.usflooring.la/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.usflooring.la/products</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.usflooring.la/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.usflooring.la/gallery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.usflooring.la/reviews</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.usflooring.la/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>

The sitemap must return an XML content type. It must not return the homepage, React shell, or HTML.

SECTION 6 — IMPROVE PAGE HEADINGS WITHOUT REDESIGNING THE SITE

Maintain one visible H1 per page.

HOME PAGE

Replace the current H1:

“Flooring Company That You Can Trust.”

With:

“Trusted Flooring Store and Installation Company in Burbank”

Keep “Flooring Company That You Can Trust” as a supporting tagline or subheading if it fits the design.

PRODUCTS PAGE

Replace the current H1:

“Everything You Need, Under One Roof”

With:

“Hardwood, Laminate, Vinyl and Molding in Burbank”

Keep “Everything You Need, Under One Roof” as a supporting line.

ABOUT PAGE

Use:

“Meet the Family Behind US Flooring & Molding”

GALLERY PAGE

Replace “Our Work” with:

“Flooring Installation Projects in Burbank and Los Angeles”

REVIEWS PAGE

Use:

“Customer Reviews for US Flooring & Molding”

CONTACT PAGE

Replace “Let’s Talk About Your Floor” as the H1 with:

“Get a Free Flooring Estimate in Burbank”

Keep “Let’s Talk About Your Floor” as a supporting heading.

Make sure headings follow a logical structure:

* One H1
* Main sections use H2
* Subsections use H3
* Do not use headings only for visual styling
* Do not skip heading levels unnecessarily

SECTION 7 — CREATE DEDICATED SERVICE PAGES

Create the following complete, indexable routes while preserving the existing design system:

/hardwood-flooring-burbank
/luxury-vinyl-flooring-burbank
/laminate-flooring-burbank
/flooring-installation-burbank
/molding-baseboard-installation-burbank

Add them to the sitemap and link to them naturally from the Products page, homepage service cards, relevant content sections, and footer.

Do not create thin pages or duplicate the same copy across every service page.

Each service page must contain:

1. A unique title
2. A unique meta description
3. A self-referencing canonical URL
4. A unique H1
5. A concise direct introduction
6. Benefits and appropriate use cases
7. Material or service considerations
8. An honest description of the company’s process
9. Maintenance or preparation information
10. Relevant service-area context
11. Three to six useful FAQs
12. Links to related service pages
13. A showroom invitation
14. A free-estimate call to action
15. Accurate, relevant image alt text

Use these page titles and H1 headings:

HARDWOOD

Title:
Hardwood Flooring in Burbank, CA | US Flooring

H1:
Hardwood Flooring Sales and Installation in Burbank

LUXURY VINYL

Title:
Luxury Vinyl Flooring in Burbank, CA | US Flooring

H1:
Luxury Vinyl Flooring Sales and Installation in Burbank

LAMINATE

Title:
Laminate Flooring in Burbank, CA | US Flooring

H1:
Laminate Flooring Sales and Installation in Burbank

INSTALLATION

Title:
Flooring Installation in Burbank, CA | US Flooring

H1:
Professional Flooring Installation in Burbank

MOLDING AND BASEBOARDS

Title:
Molding & Baseboard Installation in Burbank | US Flooring

H1:
Molding and Baseboard Installation in Burbank

Write useful, natural content. Do not keyword-stuff phrases such as “flooring Burbank” repeatedly. Prioritize clarity and real customer questions.

SECTION 8 — ADD LOCAL BUSINESS STRUCTURED DATA

Add valid JSON-LD structured data to the homepage and contact page.

Use a precise LocalBusiness-related schema type supported by Schema.org. If a flooring-specific subtype is unavailable, use `HomeAndConstructionBusiness` or `LocalBusiness`.

Use this structure, adjusting only technically necessary details:

{
"@context": "https://schema.org",
"@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
"@id": "https://www.usflooring.la/#business",
"name": "US Flooring & Molding Inc.",
"url": "https://www.usflooring.la/",
"telephone": "+1-818-515-0009",
"email": "[hello@USFlooring.LA](mailto:hello@USFlooring.LA)",
"logo": "https://www.usflooring.la/[INSERT-ACTUAL-LOGO-FILE-PATH]",
"image": "https://www.usflooring.la/og-image.jpg",
"description": "Family-owned flooring store and installation company serving Burbank and greater Los Angeles with hardwood, laminate, luxury vinyl, molding, and professional installation services.",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"streetAddress": "1508 W Burbank Blvd",
"addressLocality": "Burbank",
"addressRegion": "CA",
"postalCode": "91506",
"addressCountry": "US"
},
"areaServed": [
{"@type": "City", "name": "Burbank"},
{"@type": "City", "name": "Glendale"},
{"@type": "City", "name": "North Hollywood"},
{"@type": "City", "name": "Toluca Lake"},
{"@type": "City", "name": "Studio City"},
{"@type": "City", "name": "Sun Valley"},
{"@type": "AdministrativeArea", "name": "San Fernando Valley"},
{"@type": "AdministrativeArea", "name": "Greater Los Angeles"}
],
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Flooring Products and Services",
"itemListElement": [
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Hardwood Flooring"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Laminate Flooring"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Luxury Vinyl Flooring"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Flooring Installation"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Molding and Baseboard Installation"
}
}
]
}
}

Important schema rules:

* Replace the logo placeholder with the real permanent logo URL.
* Only add `openingHoursSpecification` after the correct hours are confirmed.
* Only add `geo` after verifying the exact coordinates.
* Only add `sameAs` links that point to verified, official profiles owned by the company.
* Do not add `AggregateRating` until the rating and review count have been verified.
* Do not add review schema for fabricated, rewritten, or unverifiable reviews.
* Do not include claims in JSON-LD that are not visible or supported on the website.
* Do not duplicate the same LocalBusiness entity with inconsistent information.

Also add:

* `WebSite` schema on the homepage
* `Organization` data through the same business entity when appropriate
* `BreadcrumbList` schema on interior pages
* `Service` schema on individual service pages

Validate all JSON-LD syntax and ensure no trailing commas or placeholders remain.

SECTION 9 — FIX REVIEWS AND GOOGLE PROFILE LINKS

Find and replace this placeholder link everywhere:

https://g.co/kgs/yourlisting

Use the verified Google Business Profile or Google Maps listing URL already used by the “View on Google Maps” link if it points to the correct business.

Do not leave `/yourlisting` anywhere in the codebase.

Add clear links such as:

* Read Our Google Reviews
* View US Flooring on Google Maps
* Get Directions

Only display reviews that have been verified as genuine.

For each testimonial, store:

* Exact customer wording
* Customer’s displayed name or initials
* Original platform
* Original review date if available
* Direct source URL when available

Do not generate new customer reviews.

Do not attribute model-generated wording to a real customer.

If a testimonial cannot be verified, remove it or mark it internally as pending verification. Do not display it publicly as a direct quotation.

If the exact Google rating and review count are uncertain, replace:

“5.0 Google Rating · 15 Reviews”

With:

“See Our Verified Google Reviews”

Once the correct official count is confirmed, store it in one central data object instead of repeating it manually throughout the website.

SECTION 10 — CORRECT THE GALLERY’S AUTHENTICITY

The Gallery page currently describes the images as:

“Real floors in real Burbank homes. Every project installed by our own crew.”

Do not make that claim unless every displayed image is an authentic US Flooring project.

Inspect all gallery images.

If they are stock images:

* Do not label them as completed US Flooring projects
* Do not assign fictional customer locations
* Do not assign fictional products, brands, or installation details
* Temporarily change the gallery introduction to honest wording such as:

“Explore flooring styles, materials, patterns, and installation inspiration. Contact our team to discuss which options are suitable for your property.”

Create the gallery data structure so authentic company photographs can later include:

* Project name
* City
* Room type
* Flooring type
* Material or product
* Installation description
* Completion date
* Before image
* After image
* Descriptive alt text

When authentic project images are supplied, use alt text such as:

“European white oak flooring installed by US Flooring & Molding in a Burbank living room.”

Do not use location-rich alt text on stock photography.

Load only the first visible gallery images eagerly. Apply lazy loading to gallery images below the initial viewport.

SECTION 11 — FIX THE CONTACT FORM COMPLETELY

The current estimate form must not show a success message unless the lead was actually transmitted and accepted by a real server or form service.

The existing form currently behaves like a local visual simulation. Replace it with a functional, accessible submission workflow.

Use the existing visual design but implement:

* POST submission
* A real backend endpoint or supported form service
* Meaningful field names
* Proper labels
* Client-side validation
* Server-side validation
* Spam protection or honeypot
* Loading state
* Confirmed success state
* Real error state
* Network-error handling
* Submission protection against repeated clicks
* Lead delivery to the business
* Optional customer confirmation email when supported
* Conversion event only after successful server confirmation

Use these field names:

firstName
lastName
phone
email
projectType
flooringType
message
preferredContactMethod

Required fields:

firstName
lastName
phone
projectType
preferredContactMethod

If “Email” is chosen as the preferred contact method, email must become required.

If “Text” is chosen, include clear consent language near the submission button. Do not automatically subscribe visitors to marketing messages.

Success message:

“Thank you. Your estimate request was received successfully. A member of the US Flooring & Molding team will contact you within one business day. For immediate assistance, call (818) 515-0009.”

Error message:

“We couldn’t send your request. Please try again or call us at (818) 515-0009.”

Do not clear the visitor’s form data after a failed submission.

Do not expose API keys, private credentials, or email-service secrets in browser-side code.

If Figma Make cannot create or connect a secure backend:

* Do not pretend the form works
* Do not display a fake success message
* Keep the phone, email, and directions calls to action
* Clearly identify the form integration as requiring a secure external endpoint
* Tell me exactly what integration value or endpoint is still required

SECTION 12 — ADD A USEFUL FAQ SECTION FOR SEO AND GEO

Add a visible FAQ section to the Products page or create a dedicated `/flooring-faq` page.

Use direct, natural answers. Do not overpromise or invent policies.

Include questions such as:

1. What flooring types does US Flooring & Molding offer?
2. Which flooring works best for kitchens and bathrooms?
3. What is the difference between hardwood, laminate, and luxury vinyl?
4. Do you provide professional flooring installation?
5. Do you install moldings and baseboards?
6. Can customers visit the Burbank showroom?
7. Which areas does US Flooring & Molding serve?
8. How can a customer request a flooring estimate?
9. What should customers expect before installation?
10. How long does flooring installation usually take?

For questions involving timelines, prices, warranties, demolition, furniture removal, subfloor repair, or material availability, avoid making fixed promises. Explain that the answer depends on the property, material, square footage, site conditions, and project scope.

Use clear answer-first writing. Example:

“Luxury vinyl is generally a strong option for kitchens and bathrooms because it is designed to resist moisture. The best choice still depends on the product specifications, subfloor, traffic level, and installation conditions.”

Only add `FAQPage` structured data if:

* Every marked-up question is visibly displayed
* Every answer exactly matches the visible answer
* The content is not misleading
* The FAQ is useful to visitors

SECTION 13 — IMPROVE INTERNAL LINKING

Link the homepage service cards directly to the corresponding service pages instead of sending every card to the general Products page.

Examples:

Hardwood Flooring → /hardwood-flooring-burbank

Laminate Flooring → /laminate-flooring-burbank

Luxury Vinyl Flooring → /luxury-vinyl-flooring-burbank

Professional Installation → /flooring-installation-burbank

Moldings → /molding-baseboard-installation-burbank

Use descriptive anchor text.

Avoid vague links such as “Learn More” when a more descriptive label can be used.

Add contextual links between related service pages.

Add breadcrumbs to all interior and service pages:

Home › Products & Services › Hardwood Flooring

Use visible breadcrumbs and matching `BreadcrumbList` structured data.

SECTION 14 — IMPROVE IMAGE SEO AND PERFORMANCE

Preserve the existing useful alt attributes but improve overly generic ones when the image is genuinely connected to the company or service.

Do not keyword-stuff alt text.

Use:

* Accurate descriptive alt text for meaningful images
* Empty `alt=""` for purely decorative images
* Explicit width and height attributes
* Responsive image sizing
* Modern WebP or AVIF formats where appropriate
* Compressed images
* Lazy loading below the fold
* Eager loading only for the primary above-the-fold image
* `fetchpriority="high"` only for the real largest-contentful-paint image

Do not eagerly load the first four large gallery images unless all four are immediately visible and necessary.

Prevent cumulative layout shift by reserving image dimensions.

Do not rely permanently on third-party hotlinked stock-image URLs for core company imagery. Use stable local assets wherever licensing permits.

SECTION 15 — IMPROVE JAVASCRIPT SEO AND ROUTE DELIVERY

The current website is a client-side React application whose raw HTML contains almost no visible content.

Improve crawlability by implementing the best production-supported option available:

Preferred options, in order:

1. Server-side rendering
2. Static generation
3. Build-time prerendering of every public route
4. Route-level HTML snapshots containing meaningful visible content and metadata

Ensure that each public route can be directly requested and receives:

* HTTP 200
* Its own initial HTML
* Its own title
* Its own meta description
* Its own canonical
* Its own Open Graph data
* Its own visible main content
* Crawlable internal links

Do not require a crawler to click buttons or execute complex interactions to discover primary content.

Create a proper 404 page.

Unknown routes must return a real HTTP 404 when hosting supports it, not silently return the homepage with HTTP 200.

If Figma Make’s publishing system cannot support server rendering, prerendering, static public files, correct MIME types, or real 404 responses, clearly list those platform limitations after completing every correction the platform can support. Do not claim these items were fixed if the deployment platform prevents them.

SECTION 16 — SEMANTIC HTML AND ACCESSIBILITY

Use semantic structure:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>` where appropriate
* `<address>` for business contact information
* `<footer>`

Ensure:

* Every page has one `<main>`
* Every form control has an associated label
* All interactive elements are keyboard accessible
* Visible focus styles are preserved
* Buttons are used for actions
* Links are used for navigation
* Icon-only links have accessible names
* The logo link has an accessible name such as “US Flooring & Molding homepage”
* Color contrast remains accessible
* Mobile menu has accurate expanded/collapsed states
* Modal gallery controls have labels
* Gallery modal closes with Escape
* Decorative icons are hidden from screen readers
* Phone and email links remain functional

SECTION 17 — BUSINESS INFORMATION CONSISTENCY

Create one central business-information configuration object and render all repeated information from it.

Centralize:

* Business name
* Legal name
* Address
* Phone
* Fax
* Email
* Hours
* Review count
* Rating
* Google Maps link
* Google review link
* Service areas
* Social profiles
* Copyright year

Update the copyright year dynamically or set it to 2026.

Do not display conflicting information in different components.

Keep the visible business name consistently formatted as:

US Flooring & Molding Inc.

SECTION 18 — ANALYTICS AND CONVERSION TRACKING PREPARATION

Prepare clean conversion events for:

* Phone-number clicks
* Estimate-button clicks
* Successful estimate submissions
* Email clicks
* Directions clicks
* Google Reviews clicks

Use descriptive event names:

phone_click
estimate_cta_click
estimate_form_success
email_click
directions_click
google_reviews_click

Do not fire `estimate_form_success` when the submit button is clicked. Fire it only after the server confirms successful submission.

Do not install duplicate analytics scripts.

Do not add an analytics ID unless a real ID is provided.

SECTION 19 — FINAL VALIDATION

After making all changes, perform a complete final audit.

Confirm all of the following:

1. `robots.txt` returns plain text.
2. `robots.txt` contains `Allow: /`.
3. `robots.txt` does not contain `Disallow: /`.
4. `sitemap.xml` returns valid XML.
5. `sitemap.xml` does not return the homepage HTML.
6. `/og-image.jpg` returns a real image.
7. “Figma Make App” appears zero times in the codebase and generated HTML.
8. The generic Figma website-builder description appears zero times.
9. `noindex` appears zero times on public pages.
10. Each route has exactly one meta description.
11. Each route has exactly one canonical URL.
12. Each route has a unique title.
13. Each canonical points to the page itself.
14. Each Open Graph URL points to the correct page.
15. All structured data contains valid JSON.
16. There are no schema placeholders.
17. There are no broken internal links.
18. The Google Reviews link is not `/yourlisting`.
19. The estimate form does not show false success.
20. The form retains data after errors.
21. Unknown routes produce a proper 404 whenever supported.
22. All pages work on mobile.
23. All pages have one descriptive H1.
24. All images have appropriate alt treatment.
25. The visual design remains consistent with the existing website.
26. The address and phone number are consistent everywhere.
27. Copyright displays 2026 or updates automatically.
28. No stock image is represented as an actual completed company project.
29. No unverified testimonial is represented as a verified quotation.
30. Service pages are included in navigation, internal links, and sitemap.
31. The homepage, products, about, gallery, reviews, and contact pages retain their visible content and layout unless this prompt explicitly requests a copy correction.

At the end, provide a concise implementation report divided into:

COMPLETED
List every correction actually implemented.

REQUIRES OWNER VERIFICATION
List facts that need confirmation, including business hours, review count, testimonials, Google Business Profile URL, authentic gallery photographs, warranties, licenses, and brands.

REQUIRES EXTERNAL INTEGRATION
List anything that still needs a form endpoint, CRM, analytics ID, Google Search Console access, or other external configuration.

PLATFORM LIMITATIONS
Identify anything Figma Make or its hosting system could not implement, especially prerendering, server-side rendering, correct route status codes, public-file MIME types, or backend form processing.

Do not say “everything is fixed” unless every validation requirement has been tested and passed.
