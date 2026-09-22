AUDIT AND FIX ALL SEO, LOCAL SEO, AND GEO/AI-DISCOVERY ISSUES FOR:

Business: US Flooring & Molding Inc.
Production domain: https://www.usflooring.la
Hosting: Vercel
Location: 1508 W Burbank Blvd, Burbank, CA 91506
Phone: (818) 515-0009
Primary market: Burbank, California
Secondary market: Glendale, California
Service region: Greater Los Angeles
Business type: Flooring store, flooring supplier, and professional flooring installation company

IMPORTANT CONTEXT

The previous website was hosted through Figma as a client-side React application. Every route initially returned the homepage title, description, canonical URL, and an empty HTML shell. Metadata, content, headings, and structured data were generated only after JavaScript loaded.

The Vercel version must permanently fix this.

Do not only change the visual design.
Modify the actual website code, routing, metadata, structured data, rendering, sitemap, robots.txt, llms.txt, redirects, performance, internal linking, and content structure.

Do not rebuild the site as a client-only single-page application.

Preserve:
- Existing visual identity
- Existing pages
- Existing photographs
- Existing business information
- Existing products and services
- Existing working forms
- Current responsive design

Do not invent:
- Reviews
- Ratings
- License numbers
- Certifications
- Business hours
- Warranties
- Prices
- Financing
- Supplier partnerships
- Team members
- Project details

If information is unavailable, add a clearly labeled TODO in the code instead of inventing it.

==================================================
1. REQUIRED TECHNICAL ARCHITECTURE
==================================================

Use:
- Current stable Next.js
- App Router
- TypeScript
- Vercel hosting
- Server Components by default
- Static generation for public marketing pages
- Minimal client-side JavaScript
- next/image
- next/font or locally hosted fonts
- Semantic HTML
- Accessible components

Every public page must deliver complete, readable HTML in the initial server response.

Do not require JavaScript for crawlers to discover:
- Page title
- Meta description
- Canonical URL
- H1
- Main written content
- Navigation
- Internal links
- Business information
- Breadcrumbs
- Structured data

TEST REQUIREMENT:

When “View Page Source” is opened—not only Inspect Element—every route must display its own:

- Unique title
- Unique meta description
- Self-referencing canonical
- Visible H1
- Primary text content
- Crawlable internal links
- Applicable JSON-LD

==================================================
2. CANONICAL DOMAIN AND REDIRECTS
==================================================

Use this as the only canonical domain:

https://www.usflooring.la

Create permanent 308 redirects:

- http://usflooring.la/* → https://www.usflooring.la/*
- http://www.usflooring.la/* → https://www.usflooring.la/*
- https://usflooring.la/* → https://www.usflooring.la/*
- Trailing-slash URLs → equivalent URL without trailing slash
- Old or renamed URLs → closest relevant replacement

Requirements:

- Preserve the path when redirecting.
- Preserve useful query parameters.
- Do not create redirect chains.
- Do not allow both trailing-slash and non-trailing-slash pages to return 200.
- Do not allow staging or Vercel preview URLs to become canonical.
- Do not expose an indexable duplicate of the old Figma-hosted website.

==================================================
3. REQUIRED ROUTES
==================================================

Preserve and optimize these routes:

/
 /products
 /hardwood-flooring-burbank
 /laminate-flooring-burbank
 /luxury-vinyl-flooring-burbank
 /flooring-installation-burbank
 /molding-baseboard-installation-burbank
 /about
 /gallery
 /reviews
 /contact
 /buyers-guide

Also create infrastructure for:

/projects
/guides
/privacy
/terms

Potential Glendale pages may be created only if each receives substantial, original, city-specific content:

/flooring-store-glendale-ca
/flooring-installation-glendale-ca
/hardwood-flooring-glendale-ca
/laminate-flooring-glendale-ca
/luxury-vinyl-flooring-glendale-ca

Do not mass-generate thin city pages.

Do not create pages for cities where the company does not genuinely operate.

==================================================
4. PAGE-SPECIFIC METADATA
==================================================

Use the Next.js Metadata API.

Every page must have:

- Unique title
- Unique meta description
- Self-referencing canonical URL
- robots directive
- Open Graph type
- Open Graph title
- Open Graph description
- Open Graph canonical URL
- Open Graph image
- Open Graph image dimensions
- Open Graph image alt text
- X/Twitter card metadata
- Correct `en_US` locale
- Appropriate index/follow directive

Use:

robots:
- index
- follow
- max-image-preview: large
- max-snippet: -1
- max-video-preview: -1

Do not:

- Place the homepage canonical on internal pages.
- change canonical URLs after hydration.
- generate multiple canonical tags.
- repeat the same title and description on every page.
- keyword-stuff titles.
- use misleading titles.
- include unsupported “best,” “#1” or similar claims.

Target title length:
Approximately 50–65 characters when natural.

Target description length:
Approximately 145–160 characters when natural.

Suggested homepage metadata:

Title:
Flooring Store & Installation in Burbank | US Flooring

Description:
Shop hardwood, laminate and luxury vinyl flooring in Burbank. Professional flooring and molding installation across Los Angeles. Free estimates.

Suggested page positioning:

Homepage:
Flooring store and installation in Burbank and Los Angeles.

Products:
Hardwood, laminate, luxury vinyl, baseboards and moldings.

Hardwood page:
Solid and engineered hardwood sales and installation in Burbank.

Laminate page:
Laminate flooring products and professional installation in Burbank.

Luxury vinyl page:
LVP and luxury vinyl flooring sales and installation in Burbank.

Installation page:
Professional flooring installation and project preparation.

Molding page:
Baseboard, molding, trim, reducers, stair nose and transition installation.

About page:
Company history, experience, showroom and service philosophy.

Gallery:
Real flooring and molding projects completed by the company.

Reviews:
Authentic customer feedback and links to verified external profiles.

Contact:
Showroom location, telephone, directions, hours and estimate request.

Buyer’s guide:
Practical flooring-selection information for Los Angeles customers.

==================================================
5. HEADINGS AND SEMANTIC STRUCTURE
==================================================

Every page must have exactly one meaningful H1.

Use a logical structure:

- H1 for primary page topic
- H2 for main sections
- H3 for subsections

Do not use headings only for visual styling.

Use semantic elements:

- header
- nav
- main
- section
- article
- aside
- footer
- address

The primary service and location should appear naturally in:

- Title
- H1
- Opening paragraph
- Relevant subheading
- Meta description
- Image alt text where genuinely applicable

Do not repeat “Burbank flooring company” unnaturally.

==================================================
6. LOCAL BUSINESS INFORMATION
==================================================

Create one reusable business-data configuration file and use it across:

- Header
- Footer
- Contact page
- Metadata
- Structured data
- llms.txt
- Directions links
- Contact buttons

Use:

Business name:
US Flooring & Molding Inc.

Address:
1508 W Burbank Blvd
Burbank, CA 91506
United States

Telephone:
+1-818-515-0009

Website:
https://www.usflooring.la/

Primary location:
Burbank, California

Important nearby market:
Glendale, California

General service region:
Greater Los Angeles

Yelp:
https://www.yelp.com/biz/us-flooring-and-molding-burbank

Mark unknown items as TODO:

- Verified business hours
- Business email
- Contractor license
- Latitude and longitude
- Google Business Profile URL
- Google Maps Place ID
- Facebook
- Instagram
- LinkedIn
- Apple Business Connect listing
- Bing Places listing

Display consistent NAP information throughout the site.

NAP means:

- Name
- Address
- Phone

Never show different versions of the company name, address or phone number.

==================================================
7. CONTACT PAGE AND MAP
==================================================

Replace any inaccurate or generic map with the correct Google Maps location.

The Contact page must contain:

- Exact business name
- Full address
- Click-to-call phone number
- Verified hours or TODO
- Google Maps embed
- Plain HTML “Get Directions” link
- Estimate-request form
- Accessible form labels
- Privacy notice
- Links to important services
- Visible business information in text outside the map

The map must not be the only place containing the address.

Reserve map dimensions to prevent layout shift.

Lazy-load the map below the fold when appropriate.

==================================================
8. STRUCTURED DATA
==================================================

Render JSON-LD on the server.

Do not inject essential structured data only through client-side JavaScript.

Create one consistent business entity:

"@id": "https://www.usflooring.la/#business"

Use the most accurate valid business type available, with one or more appropriate types such as:

- LocalBusiness
- HomeAndConstructionBusiness
- Store

Do not use unsupported or inaccurate schema types.

The primary LocalBusiness object should contain only verified data:

- @context
- @type
- @id
- name
- legalName
- url
- logo
- image
- telephone
- address
- geo after verification
- openingHoursSpecification after verification
- areaServed
- sameAs using verified profiles only
- priceRange only if it is meaningful and accurate
- contactPoint where appropriate

Add applicable schema:

Homepage:
- LocalBusiness
- WebSite
- Organization relationship if appropriate

Service pages:
- Service
- BreadcrumbList

Products page:
- CollectionPage or ItemList
- Product schema only for genuine individual products

Individual product pages:
- Product only when visible product information matches the schema
- Do not invent prices, ratings, availability or SKUs

FAQ sections:
- FAQPage only when the exact questions and answers appear visibly on the page

Project pages:
- Article or CreativeWork where appropriate
- BreadcrumbList
- ImageObject where appropriate

About page:
- AboutPage
- Organization or business reference

Contact page:
- ContactPage
- LocalBusiness reference

Gallery:
- CollectionPage
- ImageObject where useful

Rules:

- Never add fake AggregateRating.
- Never add fake reviewCount.
- Do not mark Yelp or Google ratings as the site’s own rating.
- Do not mark up hidden content.
- Do not add schema unrelated to visible page content.
- Use the same business `@id` across all pages.
- Validate JSON-LD with Google Rich Results Test and Schema.org Validator.

==================================================
9. ROBOTS.TXT
==================================================

Create:

/robots.txt

Return:

- HTTP 200
- Content-Type: text/plain

Use:

User-agent: *
Allow: /

Sitemap: https://www.usflooring.la/sitemap.xml

Requirements:

- Do not block CSS.
- Do not block JavaScript.
- Do not block images.
- Do not block primary pages.
- Do not use robots.txt to protect sensitive information.
- Do not leave production blocked because of a staging configuration.

==================================================
10. XML SITEMAP
==================================================

Create a dynamically generated:

/sitemap.xml

Include only:

- Canonical pages
- Indexable pages
- HTTP-200 pages
- Meaningful public content

Exclude:

- Redirected URLs
- 404 pages
- noindex pages
- Form-success pages
- Preview URLs
- Vercel deployment URLs
- Staging URLs
- Search or filter parameters
- Duplicate pages
- Private administrative routes

Use accurate `lastmod` values.

Update `lastmod` only after a meaningful content change.

Do not update every date automatically during every deployment.

Do not depend on `priority` or `changefreq` for SEO.

==================================================
11. LLMS.TXT AND GEO
==================================================

Create:

/llms.txt

Return:

- HTTP 200
- Content-Type: text/plain

The file must contain:

- Exact business name
- Concise factual business description
- Address
- Phone
- Official website
- Verified services
- Verified service region
- Primary service-page links
- Product links
- Buyer’s-guide link
- Project and guide links when created
- About link
- Contact link
- Verified external business profiles

Generate the file from the same business configuration and canonical URL inventory used by the website.

Do not put information in `llms.txt` that contradicts:

- Visible website content
- JSON-LD
- Google Business Profile
- Yelp
- Other official profiles

Do not treat `llms.txt` as a substitute for server-rendered content.

==================================================
12. GEO/AI ANSWER-READY CONTENT
==================================================

Improve content so search engines and AI systems can understand and quote useful answers.

Create concise, clearly labeled answer sections covering:

- Laminate versus luxury vinyl
- Solid versus engineered hardwood
- Best flooring for pets
- Best flooring for rental properties
- Best flooring for apartments
- Flooring for kitchens
- Flooring and moisture
- Underlayment and sound reduction
- Subfloor preparation
- Floor leveling
- Flooring acclimation
- Floating versus glue-down installation
- Flooring installation duration
- Furniture removal
- Existing-floor removal
- Baseboards and moldings
- Reducers and transitions
- Stair nose
- Flooring maintenance
- How much extra flooring to order
- What is included in an estimate
- Residential versus commercial flooring

Answer every question directly in the first one or two sentences, followed by more detail.

Content requirements:

- Natural language
- Accurate and useful explanations
- Short paragraphs
- Clear headings
- Lists and comparison tables where useful
- No keyword stuffing
- No generic AI filler
- No unsupported claims
- No copied manufacturer content
- Cite authoritative manufacturer specifications where necessary

For educational guides, add:

- Real author or reviewer
- Real experience statement
- datePublished
- dateModified
- Sources where appropriate
- “Manufacturer requirements may vary” disclaimer when relevant

==================================================
13. SERVICE-PAGE REQUIREMENTS
==================================================

Every primary service page should contain:

1. Clear introduction
2. Who the flooring type is suitable for
3. Advantages
4. Limitations
5. Available styles and materials
6. Residential applications
7. Commercial applications if accurate
8. Installation options
9. Subfloor requirements
10. Underlayment considerations
11. Moisture considerations
12. Noise considerations
13. Pet-friendliness
14. Maintenance
15. Expected project process
16. Related moldings and transitions
17. Real project examples when available
18. Frequently asked questions
19. Internal links
20. Free-estimate CTA

Do not duplicate the same sections word-for-word across all service pages.

==================================================
14. GLENDALE LOCAL SEO
==================================================

Burbank remains the company’s physical location.

Glendale must be presented as a service area, not a second physical location.

Do not create a fake Glendale address.

Glendale pages may be created only if they include unique information such as:

- Genuine Glendale projects
- Relevant Glendale neighborhoods
- Property types commonly served
- Distinct customer questions
- Original photographs
- Glendale-specific project examples
- Directions or service information from the Burbank showroom
- Unique FAQs
- Original written content

Every Glendale page must clearly say that the showroom is located in Burbank and the company serves Glendale.

Do not replace “Burbank” with different city names to mass-produce pages.

==================================================
15. PROJECT CASE STUDIES
==================================================

Create a reusable project-case-study template.

Recommended URL structure:

/projects/project-description-city

Each project page should support:

- Project name
- City
- Neighborhood when appropriate
- Property type
- Flooring type
- Brand
- Collection
- Color
- Approximate square footage
- Existing floor
- Removal work
- Subfloor condition
- Preparation
- Installation method
- Underlayment
- Moldings and transitions
- Project duration
- Customer objective
- Project challenge
- Solution
- Result
- Original photographs
- Descriptive image alt text
- Customer testimonial with permission
- Related service links
- Estimate CTA
- datePublished
- dateModified

Do not publish exact private residential addresses without permission.

Create the project index at:

/projects

Support filters for user experience, but do not generate thousands of indexable filter URLs.

==================================================
16. REVIEWS AND REPUTATION
==================================================

Use only genuine customer reviews.

Requirements:

- Link to the verified Yelp profile.
- Add Google review link after the profile URL is verified.
- Attribute reviews accurately.
- Obtain permission where required.
- Avoid copying excessive third-party content.
- Do not fabricate reviews.
- Do not fabricate ratings.
- Do not fabricate review counts.
- Do not create false AggregateRating schema.
- Keep testimonials visible to users if referenced in structured data.

Include a clear “Read More Reviews” link to verified external profiles.

==================================================
17. INTERNAL LINKING
==================================================

Use standard crawlable links:

<a href="...">

Do not use JavaScript-only click handlers for primary navigation.

Required relationships:

- Homepage → all main services
- Homepage → products, gallery, reviews, About and Contact
- Products → applicable service pages
- Service pages → products, projects, buyer’s guide and Contact
- Buyer’s guide → related services
- Project pages → related products and services
- Guides → relevant service and estimate pages
- About → services, projects and Contact
- Gallery → project pages where available
- Every page → estimate CTA and Contact

Use descriptive anchor text such as:

- hardwood flooring installation in Burbank
- explore laminate flooring options
- request a flooring estimate
- view completed flooring projects

Avoid repetitive “click here” links.

Prevent orphan pages.

==================================================
18. BREADCRUMBS
==================================================

Add visible breadcrumbs to appropriate internal pages.

Example:

Home > Flooring Services > Hardwood Flooring

Breadcrumbs must:

- Use crawlable links
- Match the real hierarchy
- Be visible to users
- Include valid BreadcrumbList JSON-LD
- Not contain incorrect or nonexistent categories

==================================================
19. IMAGE SEO
==================================================

Use `next/image` for appropriate images.

Requirements:

- Convert large images to AVIF or WebP.
- Generate responsive sizes.
- Define width and height.
- Prevent layout shift.
- Compress thumbnails separately.
- Use descriptive filenames.
- Add accurate alt text.
- Use empty alt text for decorative images.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary LCP hero image.
- Preload only the genuine LCP image.
- Do not place essential text only inside images.
- Do not repeat keywords unnaturally in alt text.

Example filename:

burbank-laminate-flooring-installation-living-room.webp

Example alt text:

Wide-plank oak-look laminate flooring installed in a Burbank living room.

==================================================
20. CORE WEB VITALS AND PERFORMANCE
==================================================

Target at the 75th percentile:

- LCP: 2.5 seconds or less
- INP: 200 milliseconds or less
- CLS: 0.1 or less

Target mobile Lighthouse scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Performance requirements:

- Remove unnecessary client-side JavaScript.
- Split code by route.
- Remove unused libraries.
- Use Server Components by default.
- Minimize `"use client"`.
- Optimize hero images.
- Avoid autoplay background video.
- Optimize fonts.
- Prevent font layout shifts.
- Minimize third-party scripts.
- Delay nonessential analytics.
- Reserve dimensions for maps, forms and embeds.
- Prevent popups and sticky elements from causing layout shift.
- Cache immutable assets.
- Avoid loading the entire product catalog on every page.
- Load only page-specific assets.
- Avoid one large JavaScript bundle for the entire website.

==================================================
21. REAL 404 HANDLING
==================================================

Create a custom 404 page.

Unknown routes must return a genuine HTTP 404 status.

Do not return the homepage or application shell with HTTP 200 for invalid URLs.

The 404 page should include links to:

- Homepage
- Products
- Flooring services
- Buyer’s guide
- Contact
- Free estimate

Test routes such as:

/does-not-exist
/random-flooring-page
/products/nonexistent-product

All must return HTTP 404.

==================================================
22. FORMS AND CONVERSION TRACKING
==================================================

Optimize the estimate form.

Include:

- Name
- Phone
- Email
- Project city
- Property type
- Flooring interest
- Approximate square footage
- Desired project timing
- Message
- Consent/privacy notice

Requirements:

- Accessible labels
- Server-side validation
- Spam protection
- Clear errors
- Clear success state
- Mobile-friendly fields
- No sensitive data in URLs
- Noindex success pages
- UTM attribution support
- Call conversion tracking support
- Form-submission conversion tracking support

Do not replace the visible canonical business phone number with inconsistent dynamic numbers.

==================================================
23. ACCESSIBILITY
==================================================

Implement:

- Keyboard-accessible navigation
- Visible focus styles
- Skip-to-content link
- Correct form labels
- Proper buttons versus links
- Sufficient color contrast
- Accessible menu controls
- Accessible error messages
- Reduced-motion support
- Descriptive link text
- Semantic landmarks
- Accessible map fallback
- Proper image alt text

Do not communicate important information only through color.

==================================================
24. SECURITY AND RESPONSE HEADERS
==================================================

Configure and test:

- Strict-Transport-Security
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy
- Content-Security-Policy
- frame-ancestors through CSP
- Secure form processing

Do not expose:

- API keys
- Secrets
- Environment variables
- Administrative endpoints
- Customer submissions

==================================================
25. ANALYTICS AND WEBMASTER TOOLS
==================================================

Prepare configurable support for:

- Google Search Console
- Bing Webmaster Tools
- Google Analytics 4
- Google Business Profile UTM tracking
- Vercel Web Analytics
- Vercel Speed Insights
- Call conversions
- Estimate-form conversions

Do not invent verification codes.

Create clear environment-variable placeholders for:

- Google Search Console verification
- Bing verification
- GA4 measurement ID
- Approved map configuration
- Form service configuration

Load analytics only after consent where legally required.

==================================================
26. MIGRATION SAFETY
==================================================

Before production deployment:

1. Record every current public URL.
2. Preserve every valuable route.
3. Create redirects for changed URLs.
4. Keep the canonical `www` domain.
5. Verify HTTPS.
6. Prevent preview deployments from indexing.
7. Confirm production has no `noindex`.
8. Confirm production robots.txt allows crawling.
9. Confirm every page returns unique server-rendered metadata.
10. Confirm structured data appears in source HTML.
11. Confirm all forms work.
12. Confirm the correct map and directions.
13. Confirm the sitemap includes only canonical URLs.
14. Confirm random invalid URLs return 404.
15. Confirm old Figma deployment is not an indexable duplicate.

After production deployment, provide instructions to:

- Submit sitemap.xml in Google Search Console.
- Submit sitemap.xml in Bing Webmaster Tools.
- Inspect the homepage.
- Inspect each primary service page.
- Request indexing.
- Monitor “Duplicate, Google chose different canonical.”
- Monitor “Crawled – currently not indexed.”
- Monitor soft 404 errors.
- Monitor redirect errors.
- Monitor Core Web Vitals.
- Monitor structured-data validation.

==================================================
27. AUTOMATED SEO QA
==================================================

Create an SEO audit script or automated test.

Test every production route for:

- HTTP status
- Unique title
- Unique meta description
- Correct canonical
- One H1
- Server-rendered content
- Robots directive
- Open Graph data
- X/Twitter metadata
- JSON-LD
- Breadcrumbs where applicable
- Internal links
- Broken links
- Broken images
- Image alt text
- Accidental staging URLs
- Accidental localhost URLs
- Duplicate metadata
- Redirect chains
- Genuine 404 handling

The test must fail if:

- An internal page uses the homepage canonical.
- A title is missing.
- A description is missing.
- An H1 is missing.
- The main content requires JavaScript.
- A production page contains `noindex`.
- An invalid route returns HTTP 200.
- A sitemap URL redirects or returns 404.
- A staging or Vercel preview URL appears in metadata.

==================================================
28. FINAL OUTPUT
==================================================

Complete the implementation and provide:

1. List of files changed
2. Route inventory
3. Metadata inventory
4. Canonical URL inventory
5. Redirect map
6. Structured-data inventory
7. robots.txt
8. sitemap.xml
9. llms.txt
10. Performance improvements
11. Accessibility improvements
12. SEO QA results
13. Broken-link report
14. Rich Results validation results
15. Remaining TODO items requiring owner verification
16. Vercel deployment instructions
17. Post-deployment Search Console checklist

FINAL ACCEPTANCE REQUIREMENT:

Do not claim the work is finished until the raw source HTML of every important
page contains its own unique:

- Title
- Description
- Canonical
- H1
- Main content
- Internal links
- Applicable JSON-LD

The final Vercel website must be understandable and crawlable even when
client-side JavaScript is disabled.