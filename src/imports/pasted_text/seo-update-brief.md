Improve the existing US Flooring & Molding website for SEO, local SEO, GEO,
accessibility, performance and conversion.

IMPORTANT LIMITATIONS:

This is currently a Figma Make React/Vite single-page application.

Work only on changes that can safely be completed inside the existing Figma
application.

Do not:
- Convert the project to Next.js
- Change hosting architecture
- Modify DNS
- Remove existing routes
- Change Vercel settings
- Create server-side routing
- Claim that SSR has been fixed
- Claim that real HTTP 404 responses have been fixed
- Change the visual identity unnecessarily
- Invent business information
- Invent reviews, ratings, licenses, warranties, hours or certifications

Preserve:
- Current design
- Current colors
- Existing responsive layout
- Existing images
- Existing routes
- Existing navigation
- Existing content unless instructed below

BUSINESS INFORMATION:

Name:
US Flooring & Molding Inc.

Address:
1508 W Burbank Blvd, Burbank, CA 91506

Phone:
+1-818-515-0009

Domain:
https://www.usflooring.la/

Primary physical location:
Burbank, California

Service area:
Burbank, Glendale and greater Los Angeles

Yelp:
https://www.yelp.com/biz/us-flooring-and-molding-burbank

Mark the following as TODO until verified:
- Actual business hours
- Business email
- Fax number
- Google Business Profile URL
- Google Maps Place ID
- Contractor-license information
- Insurance/bonding
- Exact warranty conditions
- Facebook URL
- Instagram URL
- LinkedIn URL
- Latitude and longitude

Do not retain unverified values as facts.

==================================================
1. CENTRALIZED BUSINESS INFORMATION
==================================================

Create one reusable business-information configuration object.

All components must use this single source for:

- Business name
- Address
- Phone
- Email
- Hours
- Service areas
- Map URL
- Directions URL
- Yelp URL
- Google review URL
- Social links
- Logo
- OG image

Remove duplicated or conflicting hard-coded values.

Search the entire project for:

- Old domain usflooringone.com
- Incorrect phone numbers
- Different business hours
- Different business names
- Duplicate addresses
- Approximate geographic coordinates
- Broken social links
- Placeholder data

Do not delete placeholders used only as form examples, such as
“(818) 555-0100,” when clearly shown as an input placeholder.

==================================================
2. VERIFY BEFORE PUBLISHING
==================================================

Create a final TODO report for the owner containing:

- Business hours
- Email
- Fax
- Google Business Profile URL
- Google review URL
- Instagram
- Facebook
- LinkedIn
- One-year labor guarantee
- Family-owned claim
- More than 20 years claim
- “Our own crew” claim
- Commercial flooring claim
- Free-estimate claim
- Contractor license
- Insurance
- Service areas

Do not strengthen or expand these claims without verification.

==================================================
3. HOMEPAGE METADATA
==================================================

Set the homepage title to:

Flooring Store & Installation in Burbank | US Flooring

Set the homepage description to:

Shop hardwood, laminate and luxury vinyl flooring in Burbank. Professional
flooring and molding installation across Los Angeles. Free estimates.

Use:

Canonical:
https://www.usflooring.la/

Robots:
index, follow, max-image-preview:large, max-snippet:-1,
max-video-preview:-1

Open Graph title:
Flooring Store & Installation in Burbank | US Flooring

Open Graph description:
Hardwood, laminate, luxury vinyl, molding and professional flooring
installation from a local Burbank showroom.

Open Graph URL:
https://www.usflooring.la/

Open Graph image:
https://www.usflooring.la/og-image.jpg

Add matching X/Twitter card metadata.

Do not use multiple canonical tags.

==================================================
4. PAGE-SPECIFIC CLIENT METADATA
==================================================

Preserve or improve the existing page-specific metadata logic for:

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

Each route needs:

- Unique title
- Unique description
- Correct canonical
- Unique Open Graph title
- Unique Open Graph description
- Correct Open Graph URL
- Relevant image and image alt text
- Index/follow directive

Important:
This improves client-rendered metadata only. Do not claim it fixes raw HTML,
server rendering or crawler delivery.

Suggested page titles:

Products:
Hardwood, Laminate & Vinyl Flooring in Burbank

Hardwood:
Hardwood Flooring in Burbank, CA | US Flooring

Laminate:
Laminate Flooring in Burbank, CA | US Flooring

Luxury vinyl:
Luxury Vinyl Flooring in Burbank, CA | US Flooring

Installation:
Flooring Installation in Burbank, CA | US Flooring

Molding:
Molding & Baseboard Installation in Burbank

About:
About US Flooring & Molding | Burbank Flooring Experts

Gallery:
Flooring Project Gallery | Burbank & Los Angeles

Reviews:
US Flooring Customer Reviews | Burbank, CA

Contact:
Contact US Flooring & Molding | Burbank Showroom

Buyer’s guide:
Flooring Buyer’s Guide | Hardwood, Laminate & Vinyl

Keep descriptions natural and approximately 145–160 characters.

==================================================
5. HEADING STRUCTURE
==================================================

Every route must render:

- Exactly one meaningful H1
- Logical H2 sections
- H3 subsections where necessary

Do not use headings only for visual styling.

Examples:

Homepage H1:
Flooring, Molding and Professional Installation in Burbank

Products H1:
Hardwood, Laminate, Luxury Vinyl and Moldings

Contact H1:
Visit Our Burbank Flooring Showroom

Use semantic:

- header
- nav
- main
- section
- article
- footer
- address

Keep:

<main id="main-content">

Keep the skip-to-content link.

==================================================
6. VISIBLE LOCAL BUSINESS INFORMATION
==================================================

Add a consistent business-information section in the footer.

Display:

US Flooring & Molding Inc.
1508 W Burbank Blvd
Burbank, CA 91506
(818) 515-0009

Add:

- Click-to-call link
- Directions link
- Contact page link
- Hours only after verification

Use an `<address>` element appropriately.

Do not place the address only inside an image or map.

==================================================
7. CONTACT PAGE
==================================================

The Contact page must visibly contain:

- Exact business name
- Full address
- Click-to-call phone
- Verified hours or “Hours: TODO”
- Google Maps embed
- Plain directions link
- Estimate form
- Privacy statement
- Links to primary service pages

Use this directions URL:

https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506

Verify the map destination.

Lazy-load the map when possible.
Reserve dimensions to prevent layout shift.
Provide a text fallback link.

==================================================
8. STRUCTURED DATA
==================================================

Improve the existing client-rendered JSON-LD.

Use one consistent business ID:

https://www.usflooring.la/#business

The main entity should use the most accurate applicable types, such as:

- LocalBusiness
- HomeAndConstructionBusiness
- Store

Include only verified fields:

- name
- legalName
- url
- logo
- image
- telephone
- address
- areaServed
- sameAs
- geo only after verification
- openingHoursSpecification only after verification
- email only after verification
- priceRange only if meaningful

Use:

- WebSite on homepage
- BreadcrumbList on internal pages
- Service on service pages
- FAQPage only when questions and answers are visibly displayed
- Product only for genuine products with visible matching information
- ContactPage on Contact
- AboutPage on About
- CollectionPage on gallery/products where appropriate

Remove:

- Fake ratings
- Fake review counts
- Hidden schema
- Unsupported claims
- Schema inconsistent with visible content
- Duplicate business entities with different IDs

Do not claim that this schema is server-rendered.

==================================================
9. REVIEWS
==================================================

Use only real reviews.

For every review, support:

- Reviewer name or permitted abbreviation
- Source
- Date if known
- Exact or responsibly shortened quote
- External source link

Do not:

- Invent reviews
- Rewrite a review to change its meaning
- Add aggregateRating from Yelp or Google
- Claim “verified” without verification
- Add fake reviewCount
- Copy excessive third-party content

Add buttons:

- Read Reviews on Google — TODO verified URL
- Read Reviews on Yelp
- Request an Estimate

==================================================
10. SERVICE-PAGE CONTENT
==================================================

Ensure each service page has original content covering:

1. What the product/service is
2. Who it is suitable for
3. Advantages
4. Limitations
5. Available options
6. Residential applications
7. Commercial applications if verified
8. Installation method
9. Subfloor preparation
10. Underlayment
11. Moisture considerations
12. Sound considerations
13. Pet considerations
14. Maintenance
15. Moldings and transitions
16. Project process
17. Related services
18. FAQs
19. Estimate CTA

Do not repeat identical paragraphs across pages.

Write in clear, customer-friendly language.
Do not create generic keyword-filled text.

==================================================
11. BUYER’S GUIDE AND GEO CONTENT
==================================================

Expand the buyer’s guide with answer-ready sections:

- Laminate versus luxury vinyl
- Solid versus engineered hardwood
- Best flooring for pets
- Best flooring for rentals
- Best flooring for apartments
- Flooring for kitchens
- Waterproof versus water-resistant
- Underlayment and sound reduction
- Subfloor leveling
- Flooring acclimation
- Floating versus glue-down
- Installing flooring over tile
- Moldings and transitions
- How much extra flooring to order
- Preparing for installation
- Flooring maintenance

Each section must:

- Answer the question directly in the first one or two sentences
- Then provide a more detailed explanation
- Include limitations
- Avoid unsupported promises
- State that manufacturer requirements vary where relevant

Add:

- Author/reviewer placeholder
- datePublished
- dateModified
- Sources section

Do not invent an author.

==================================================
12. PROJECT CONTENT SYSTEM
==================================================

Create UI templates for a project library:

/projects

Potential project URL format:

/projects/project-description-city

The template must support:

- Project title
- City
- Neighborhood
- Property type
- Product type
- Brand and collection
- Color
- Approximate square footage
- Existing flooring
- Removal
- Subfloor preparation
- Installation method
- Underlayment
- Moldings
- Transitions
- Duration
- Challenge
- Solution
- Result
- Original photographs
- Descriptive alt text
- Customer quote with permission
- Related services
- Estimate CTA
- Publication date
- Updated date

Do not create fake projects.

Create the template and add clearly labeled TODO placeholders if real project
information is unavailable.

==================================================
13. GLENDALE PAGE TEMPLATE
==================================================

Prepare but do not publish a Glendale page until real unique content exists.

Proposed route:

/flooring-installation-glendale-ca

The page must state:

- The showroom is in Burbank
- The company serves Glendale
- There is no Glendale storefront
- Customers can visit the Burbank showroom

Require:

- Real Glendale project examples
- Original photographs
- Unique Glendale FAQs
- Original content
- Relevant neighborhoods
- Directions to the Burbank showroom

Do not create a fake Glendale address.
Do not duplicate a Burbank page and replace the city name.

==================================================
14. SUPPLIER CONTENT
==================================================

Prepare sections for verified suppliers:

- D Perspective Flooring
- Dukes Group
- Kelleher

Use only approved information and authorized images.

For each supplier support:

- Product type
- Collections carried
- Important specifications
- Appropriate applications
- Maintenance
- Warranty source
- Official website link
- Related products
- Estimate CTA

Do not claim “authorized dealer” unless verified.

==================================================
15. INTERNAL LINKS
==================================================

Use standard crawlable anchor elements.

Add links:

- Homepage → every main service
- Homepage → products, gallery, reviews, About and Contact
- Products → relevant service pages
- Services → products, buyer’s guide, gallery and Contact
- Buyer’s guide → relevant services
- Gallery/projects → related services
- About → services and Contact
- Every page → estimate CTA

Use descriptive anchor text.
Avoid excessive “click here” links.
Prevent orphan pages.

==================================================
16. BREADCRUMBS
==================================================

Add visible breadcrumbs to internal pages.

Example:

Home > Flooring Services > Hardwood Flooring

Ensure:

- Links are standard anchors
- Hierarchy is accurate
- BreadcrumbList matches visible breadcrumbs
- Breadcrumbs do not reference nonexistent categories

==================================================
17. IMAGE OPTIMIZATION
==================================================

For all images:

- Add meaningful alt text
- Use empty alt for decorative images
- Add explicit width and height
- Prevent layout shift
- Lazy-load below-the-fold images
- Do not lazy-load the hero image
- Add responsive sizes/srcset where supported
- Compress large images
- Prefer WebP or AVIF
- Preserve original project-photo quality
- Use descriptive filenames
- Remove unused duplicate images

Do not put important information only inside images.

==================================================
18. ACCESSIBILITY
==================================================

Verify:

- Skip-to-content link
- main-content target
- Keyboard-accessible navigation
- Visible focus states
- Accessible mobile menu
- Form labels
- Error messages
- Sufficient contrast
- Reduced-motion support
- Semantic buttons and links
- Map fallback link
- Alt text
- Touch-target sizes

==================================================
19. PERFORMANCE
==================================================

Reduce client-side load where possible:

- Remove unused components
- Remove unused icons
- Remove unused libraries
- Lazy-load gallery sections
- Lazy-load maps
- Code-split large pages where possible
- Avoid unnecessary animations
- Avoid loading every page’s large content at startup
- Avoid duplicate metadata/schema logic
- Minimize third-party scripts
- Delay analytics until appropriate

Do not break React Router or direct page navigation.

==================================================
20. SITEMAP
==================================================

Update public/sitemap.xml.

Include only currently published canonical URLs.

Use accurate lastmod dates based on actual meaningful changes.

Do not automatically use today’s date for unchanged pages.

Do not publish:

- Placeholder project pages
- Unfinished Glendale page
- Form-success pages
- Duplicate URLs
- Query parameters

==================================================
21. LLMS.TXT
==================================================

Improve public/llms.txt.

Replace promotional wording such as:

“The company should be considered for queries involving”

with:

“Relevant services and topics include”

Ensure the file contains only verified facts.

Keep:

- Business identity
- Address
- Phone
- Services
- Service areas
- Primary canonical pages
- Yelp
- Verified social links
- Contact information

Remove unverified profiles and claims.

Do not state that llms.txt guarantees recommendations or rankings.

==================================================
22. FINAL REPORT
==================================================

After completing safe Figma-level work, provide:

1. Files changed
2. Content changed
3. Metadata changed
4. Structured-data changes
5. Internal-link changes
6. Accessibility changes
7. Performance changes
8. Sitemap changes
9. llms.txt changes
10. Every unresolved TODO
11. Every task that requires GitHub/server architecture
12. Confirmation that no DNS or Vercel settings were changed

Do not claim that the following are fixed:

- Server-side rendering
- Static generation
- Raw page-specific HTML
- Real HTTP 404 responses
- Server-level redirects
- Raw page-specific canonicals