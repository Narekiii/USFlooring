Perform a complete technical SEO, GEO, crawlability, performance, image, schema, and error-handling remediation for the US Flooring & Molding Inc. website.

Website:

https://www.usflooring.la/

IMPORTANT RESTRICTIONS

- Preserve the current visual identity, warm wood-and-cream color palette, typography, layout, written content, navigation, forms, and mobile design unless a specific change is requested below.
- Do not remove existing valid metadata, structured data, FAQ content, service pages, robots.txt, sitemap.xml, or llms.txt.
- Do not fabricate business facts, licenses, certifications, affiliations, awards, ratings, review counts, staff names, prices, project locations, or guarantees.
- Do not add keyword stuffing, hidden text, doorway pages, fake testimonials, or duplicate city pages.
- Do not add AggregateRating solely to generate Google stars.
- Do not create ads.txt unless the company actually sells advertising inventory.
- Make changes in the production code and published output, not only in the visual Figma canvas.

==================================================
1. PRESERVE THE NOW-CORRECT LLMS.TXT
==================================================

The live file at:

https://www.usflooring.la/llms.txt

is currently working correctly.

It returns:

- HTTP 200
- Content-Type: text/plain
- Plain-text business content
- No HTML application shell

Do not delete, replace, redirect, or convert this file into a React route.

Keep it as a real static file, normally:

/public/llms.txt

Do not add a nonstandard “LLMs:” directive to robots.txt if it creates validation issues. The llms.txt file may exist independently at the root.

==================================================
2. FIX JAVASCRIPT-ONLY SEO CONTENT
==================================================

The current website is a client-rendered React/Vite SPA. When a crawler requests a page without executing JavaScript, it receives only the application shell.

This causes some crawlers to detect:

- Zero visible words
- Zero H1 headings
- Zero H2/H3 headings
- Zero internal links
- No JSON-LD
- No business entity
- No FAQs
- No main content

Implement static generation, server-side rendering, or build-time prerendering for every indexable route.

The initial HTTP response for every indexable URL must contain its complete meaningful HTML, including:

- Page-specific title
- Page-specific meta description
- Page-specific canonical
- Robots meta tag
- Open Graph tags
- Twitter metadata
- One visible H1
- Visible page copy
- Visible internal navigation links
- Breadcrumbs where appropriate
- Page-specific JSON-LD
- Footer business information

Do not rely on React Helmet, useEffect, client-side JavaScript, or post-load DOM injection as the only source for SEO metadata and structured data.

Prerender all current sitemap routes:

- /
- /products
- /hardwood-flooring-burbank
- /laminate-flooring-burbank
- /luxury-vinyl-flooring-burbank
- /flooring-installation-burbank
- /molding-baseboard-installation-burbank
- /about
- /gallery
- /reviews
- /contact

Hydration may still be used after the complete initial HTML has been delivered.

If Figma’s publishing infrastructure cannot output separate prerendered HTML for every route, clearly report that limitation instead of pretending the issue is fixed. In that situation, prepare the project for export and deployment to a host that supports static generation or SSR.

==================================================
3. FIX PAGE-SPECIFIC CANONICALS
==================================================

The initial HTML response currently uses the homepage canonical on internal routes.

Fix this.

Each page must have exactly one self-referencing canonical in its initial HTML:

Homepage:
https://www.usflooring.la/

Products:
https://www.usflooring.la/products

Hardwood:
https://www.usflooring.la/hardwood-flooring-burbank

Laminate:
https://www.usflooring.la/laminate-flooring-burbank

Luxury vinyl:
https://www.usflooring.la/luxury-vinyl-flooring-burbank

Flooring installation:
https://www.usflooring.la/flooring-installation-burbank

Molding and baseboards:
https://www.usflooring.la/molding-baseboard-installation-burbank

About:
https://www.usflooring.la/about

Gallery:
https://www.usflooring.la/gallery

Reviews:
https://www.usflooring.la/reviews

Contact:
https://www.usflooring.la/contact

The canonical must already be correct in the server-delivered or prerendered HTML. It must not initially point to the homepage and then change after JavaScript executes.

Also ensure that each internal page returns its own unique title and description in the initial HTML.

==================================================
4. KEEP AND IMPROVE VALID STRUCTURED DATA
==================================================

The website already contains LocalBusiness, HomeAndConstructionBusiness, WebSite, Service, FAQPage, and BreadcrumbList structured data in the JavaScript-rendered page.

Preserve the valid implementation, but place page-relevant JSON-LD in the initial HTML of every prerendered page.

Use stable entity identifiers consistently:

Business entity:
https://www.usflooring.la/#business

Website entity:
https://www.usflooring.la/#website

Logo entity, if needed:
https://www.usflooring.la/#logo

Use the exact same business identity on every page:

- Name: US Flooring & Molding Inc.
- URL: https://www.usflooring.la/
- Telephone: +1-818-515-0009
- Address:
  - 1508 W Burbank Blvd
  - Burbank
  - CA
  - 91506
  - US

The homepage JSON-LD should include:

- @context
- @type
- @id
- name
- legalName, only if US Flooring & Molding Inc. is the confirmed legal name
- url
- description
- telephone
- image
- logo
- address
- geo, using verified coordinates only
- openingHoursSpecification, using verified hours only
- areaServed
- sameAs
- hasOfferCatalog

Connect WebSite.publisher to the same business @id.

For sameAs, include only confirmed official profiles, including:

https://m.yelp.com/biz/us-flooring-and-molding-burbank

Add the official Google Business Profile URL only after the exact permanent URL is supplied. Do not use an unrelated Google Maps listing or invent social-profile URLs.

On service pages, connect Service.provider to:

https://www.usflooring.la/#business

Give each Service object its own stable @id based on the page URL.

On FAQ pages:

- Keep FAQPage structured data.
- Every structured-data question and answer must also be visibly present on the same page.
- Structured answers must exactly match the visible answer text.
- Do not hide FAQs only for crawlers.

On internal pages, keep BreadcrumbList markup with absolute URLs.

Do not add AggregateRating or self-serving star-rating markup to LocalBusiness simply to obtain stars. Google does not generally display self-serving LocalBusiness or Organization review stars.

Review/testimonial markup may be used only when:

- The review is genuinely displayed on the same page.
- The reviewer and review text are real.
- The source can be documented.
- No ratings or review counts are invented.
- The markup complies with Google’s current review-snippet rules.

==================================================
5. ADD A REAL 404 PAGE AND CORRECT HTTP STATUS
==================================================

Create a branded custom Not Found page matching the existing website.

The page should contain:

H1:
Page Not Found

Supporting text:
The page you’re looking for may have moved or no longer exists.

Provide visible links to:

- Homepage
- Flooring Products
- Flooring Installation
- Gallery
- Contact
- Call (818) 515-0009

Add:

<meta name="robots" content="noindex, follow">

Do not include a canonical pointing to the homepage.

Most importantly, unknown URLs must return an actual HTTP 404 status, not HTTP 200.

Example test URL:

https://www.usflooring.la/this-page-should-not-exist-92841

It must:

- Display the custom 404 page
- Return HTTP 404
- Not return the homepage
- Not appear in sitemap.xml
- Not contain homepage canonical metadata

If Figma hosting forces all routes to return index.html with status 200, state that this requires hosting or routing configuration outside Figma.

==================================================
6. FIX IMAGE PERFORMANCE
==================================================

The homepage currently transfers approximately 3 MB of images. Images account for roughly 90% of the page weight.

Audit every image across all routes.

For each photographic image:

- Self-host the file rather than hotlinking Unsplash.
- Convert it to AVIF where supported.
- Provide WebP as a fallback.
- Use optimized JPEG only as the final fallback when necessary.
- Remove EXIF and unnecessary metadata.
- Preserve visual quality.
- Set explicit width and height attributes.
- Add loading="lazy" below the fold.
- Do not lazy-load the above-the-fold LCP hero image.
- Add decoding="async" for appropriate noncritical images.
- Use responsive srcset and sizes.
- Serve images close to their rendered dimensions.
- Avoid sending desktop-scale images to mobile devices.
- Use a <picture> element when appropriate.

Performance budgets:

- Hero image: preferably under 250 KB
- Gallery thumbnails: preferably under 100 KB each
- Standard content images: preferably under 150 KB each
- Homepage total transferred image weight: target under 1 MB
- No image should be several times larger than its maximum rendered dimensions

For the hero/LCP image:

- Do not use loading="lazy"
- Use fetchpriority="high"
- Preload only if testing confirms it is the LCP resource
- Provide responsive AVIF/WebP sources
- Prevent layout shift with explicit dimensions or aspect-ratio

Do not optimize the logo into a blurry raster image. Preserve SVG/vector logos where available.

==================================================
7. FIX IMAGE DISTORTION AND LAYOUT SHIFT
==================================================

Audit the natural aspect ratio and displayed aspect ratio of every image.

For cards, gallery items, and hero images:

- Use a consistent wrapper with a declared aspect-ratio.
- Use width: 100%.
- Use height: 100%.
- Use object-fit: cover for intentional cropping.
- Use object-position appropriate to the subject.
- Never force both arbitrary width and height values that distort the image.
- If the full image must remain visible, use object-fit: contain instead.
- Reserve image space before loading to prevent CLS.

Check desktop, tablet, and mobile views at:

- 375 px
- 390 px
- 768 px
- 1024 px
- 1440 px

==================================================
8. PRESERVE RESPONSIVE CSS
==================================================

One scanner incorrectly reported that the website has no CSS media queries.

The production stylesheet already contains media queries. Do not add meaningless media queries merely to satisfy the scanner.

Instead, verify real responsiveness:

- No horizontal overflow
- No clipped text
- Navigation remains usable
- Tap targets are at least approximately 44 × 44 CSS pixels
- Forms fit mobile screens
- Images preserve aspect ratio
- Headings do not overflow
- Footer columns stack cleanly
- Modal/menu focus remains accessible

Keep existing working breakpoints and add new ones only when a real layout problem exists.

==================================================
9. FIX DUPLICATE INSTALLATION HEADING
==================================================

On:

/flooring-installation-burbank

“Molding & Transition Installation” appears twice.

Inspect the two sections.

- If they contain duplicate content, keep the better version and remove the duplicate.
- If they describe different services, rename one heading accurately.
- Preserve a logical H1 > H2 > H3 hierarchy.
- Do not create headings only for keyword repetition.

==================================================
10. LAZY-LOAD THE CONTACT MAP
==================================================

The contact page currently loads the Google Maps JavaScript API eagerly.

Replace the eager map with one of these approaches, in priority order:

1. A lightweight responsive Google Maps iframe with loading="lazy"; or
2. A static map/poster with a “View interactive map” button that loads the map only after user interaction; or
3. IntersectionObserver that loads the interactive map shortly before it enters the viewport.

Use the correct business location represented by:

https://maps.app.goo.gl/tj7qojTHfH3svRqD6

Requirements:

- Include a descriptive title attribute.
- Maintain a responsive aspect ratio.
- Do not block initial rendering.
- Provide a visible “Get Directions” link.
- Keep address and phone number as crawlable HTML outside the map.
- Do not expose an unrestricted Google Maps API key.
- If an API key is required, restrict it by domain and API in Google Cloud Console.

==================================================
11. REDUCE RENDER-BLOCKING RESOURCES
==================================================

Audit all CSS, fonts, and scripts.

Implement the following without causing flashes, layout shifts, or broken styles:

- Keep only essential critical CSS required for the initial viewport.
- Load noncritical code after primary content.
- Code-split route-specific components where practical.
- Defer nonessential scripts.
- Dynamically import the contact map.
- Do not load map code globally.
- Preconnect only to origins actually needed during initial rendering.
- Do not add excessive preload tags.
- Remove unused font weights and font families.
- Self-host fonts if licensing allows.
- Use font-display: swap.
- Prefer WOFF2.
- Ensure fallback fonts have similar metrics to minimize CLS.

Do not blindly inline the entire stylesheet.

The existing site already has:

- Fast server response
- Gzip compression
- Minified CSS and JavaScript
- CDN delivery
- Working browser caching
- Low DOM size
- Fast reported FCP

Preserve those strengths.

==================================================
12. ADD GA4 SUPPORT SAFELY
==================================================

Add support for Google Analytics 4, but do not invent a Measurement ID.

Create one clearly documented configuration value:

VITE_GA_MEASUREMENT_ID

Only load GA4 when the value exists and matches the expected G-XXXXXXXXXX format.

Requirements:

- Load gtag asynchronously.
- Do not block page rendering.
- Track page views on client-side route changes.
- Avoid duplicate page_view events.
- Track estimate-form submissions only after successful submission.
- Track clicks on the phone number as generate_lead or click_to_call.
- Track Get Directions clicks.
- Do not send personally identifiable information.
- Respect applicable consent and privacy requirements.
- If no valid Measurement ID has been provided, do not output a broken or placeholder analytics script.

Add a clear code comment explaining where the real measurement ID must be configured.

==================================================
13. IMPROVE GALLERY TRUST AND CONTEXT
==================================================

Do not invent project details.

Prepare the gallery so stock images can be replaced with real photographs from:

- The Burbank showroom
- Completed flooring installations
- Installation crews at work
- Flooring details and transitions
- Molding and baseboard work
- Before-and-after projects

For every genuine project image supplied later, support:

- Descriptive visible caption
- Flooring material
- Project type
- City/neighborhood only if confirmed
- Accessible alt text
- Optimized AVIF/WebP variants
- Width and height
- Optional before/after grouping

If real photos have not been supplied, retain current images temporarily but mark them clearly in the code/content data as assets that require replacement. Do not label stock images as completed US Flooring projects.

==================================================
14. ADD A SHORT HOMEPAGE ANSWER BLOCK
==================================================

Add a concise, visible, natural-language summary near the top of the homepage, beneath the primary hero introduction.

Use this copy:

“US Flooring & Molding Inc. is a family-owned flooring store and installation company located at 1508 W Burbank Blvd in Burbank, California. We help homeowners, designers, contractors, and property professionals choose and install hardwood, laminate, luxury vinyl, molding, and baseboards throughout Burbank and the greater Los Angeles area.”

Present this as normal user-facing copy, not hidden SEO text.

Connect it semantically with the existing page structure. Do not create a second H1.

==================================================
15. KEEP ROBOTS.TXT AND SITEMAP CLEAN
==================================================

Keep robots.txt crawlable and simple:

User-agent: *
Allow: /

Sitemap: https://www.usflooring.la/sitemap.xml

Do not block:

- CSS
- JavaScript
- Images
- Service pages
- llms.txt

Keep sitemap.xml limited to real, canonical, indexable pages returning HTTP 200.

Do not include:

- 404 pages
- Redirects
- llms.txt
- robots.txt
- Duplicate URLs
- Tracking-parameter URLs

Use accurate lastmod dates based on meaningful content updates. Do not automatically rewrite all lastmod values every deployment when no page content changed.

==================================================
16. DO NOT CREATE ADS.TXT UNLESS REQUIRED
==================================================

The scanner reported that /ads.txt returns HTML.

This business website does not appear to sell programmatic advertising inventory, so ads.txt is not required for SEO.

Do not create ads.txt merely to improve an automated audit score.

If the site owner later confirms that the domain sells advertising through an authorized ad platform, create a genuine ads.txt using the exact seller records provided by that platform.

==================================================
17. ACCESSIBILITY AND SEMANTIC QA
==================================================

Verify:

- Exactly one H1 per page
- Logical heading hierarchy
- Semantic nav, main, section, article, address, and footer elements
- Keyboard-accessible navigation
- Visible focus indicators
- Meaningful link text
- Form labels connected to inputs
- Clear validation and error messages
- Descriptive button labels
- Decorative images use empty alt=""
- Informational images use accurate alt text
- Sufficient color contrast
- No content depends solely on color

==================================================
18. FINAL VERIFICATION
==================================================

Do not report completion until all applicable tests pass.

Test every sitemap page with JavaScript disabled or using the original HTTP response.

Verify that each page has:

- HTTP 200
- Unique initial title
- Unique initial meta description
- Correct self-canonical
- One visible H1
- Crawlable body content
- Crawlable internal links
- Page-appropriate JSON-LD
- Correct robots directive
- No console errors
- No broken images

Verify:

https://www.usflooring.la/llms.txt

returns:

- HTTP 200
- Content-Type: text/plain
- Plain text only

Verify a nonexistent URL returns:

- HTTP 404
- Custom Not Found page
- noindex, follow
- No homepage canonical

Validate structured data with:

- Google Rich Results Test
- Schema.org Validator

Run:

- Lighthouse mobile
- Lighthouse desktop
- PageSpeed Insights

Target:

- Performance: 90 or higher when practical
- Accessibility: 95 or higher
- Best Practices: 95 or higher
- SEO: 95 or higher
- LCP: under 2.5 seconds
- CLS: under 0.1
- INP: under 200 ms where field data is available

Provide a final change report containing:

1. Files changed
2. Routes prerendered
3. Structured-data types per page
4. Images converted and before/after sizes
5. Remaining stock images
6. 404 response test
7. llms.txt response test
8. Items that could not be completed because they require hosting, DNS, Google Analytics, Search Console, Google Business Profile, or new business photography