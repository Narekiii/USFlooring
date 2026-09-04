Fix all crawlability, indexing, metadata, social-sharing, sitemap, and technical SEO problems on the US Flooring & Molding website.

Website:
https://www.usflooring.la/

Important constraints:

- Do not redesign the website.
- Do not change the current colors, typography, layout, copy, navigation, animations, images, or functionality unless required by the instructions below.
- Preserve all existing pages and routes.
- Make the changes in the actual source files so they remain present after publishing.
- Do not rely exclusively on React "useEffect" or client-side JavaScript for essential SEO tags.
- Essential metadata must exist in the HTML originally returned by the server.

1. Fix robots.txt

Find or create:

"public/robots.txt"

Replace its entire contents with:

User-agent: *
Allow: /

Sitemap: https://www.usflooring.la/sitemap.xml

The published file must be accessible at:

https://www.usflooring.la/robots.txt

Remove this rule completely if it exists:

Disallow: /

Do not block Googlebot, Bingbot, Googlebot-Image, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, or other legitimate search and AI crawlers.

2. Remove the global noindex directive

Search the complete project for:

<meta name="robots" content="noindex, nofollow">

Remove every production instance of it.

In the root "index.html", add this inside "<head>":

<meta
  name="robots"
  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
/>

There must be only one global robots meta tag.

The server-delivered HTML must never contain:

noindex
nofollow

Do not depend on React or JavaScript to change "noindex" after the page loads. Google may detect the original "noindex" and skip rendering the JavaScript.

3. Remove all leftover Figma metadata

Search the complete project and remove every occurrence of:

Figma Make App

Also remove this incorrect description everywhere:

Offers a streamlined platform to build and launch professional websites quickly, empowering users to establish their online presence with ease.

No page, metadata tag, manifest, structured-data object, or social-sharing tag should identify this website as a Figma app or website-building platform.

4. Correct the homepage’s original HTML metadata

In the root "index.html", place the following metadata inside "<head>".

Do not leave duplicate title, description, canonical, robots, Open Graph, or Twitter tags.

<title>US Flooring & Molding Inc. | Flooring Store in Burbank, CA</title>

<meta
  name="description"
  content="US Flooring & Molding Inc. offers hardwood, laminate, luxury vinyl, molding, and professional flooring installation in Burbank and greater Los Angeles. Call (818) 515-0009 for a free estimate."
>

<meta
  name="robots"
  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
>

<link rel="canonical" href="https://www.usflooring.la/">

<meta property="og:type" content="website">
<meta property="og:site_name" content="US Flooring & Molding Inc.">
<meta property="og:url" content="https://www.usflooring.la/">
<meta
  property="og:title"
  content="US Flooring & Molding Inc. | Burbank Flooring Experts"
>
<meta
  property="og:description"
  content="Over 20 years of flooring experience serving Burbank and greater Los Angeles. Flooring, molding, and professional installation."
>
<meta
  property="og:image"
  content="https://www.usflooring.la/og-image.jpg"
>
<meta property="og:image:secure_url" content="https://www.usflooring.la/og-image.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta
  property="og:image:alt"
  content="US Flooring & Molding Inc. — flooring, molding, and installation in Los Angeles"
>

<meta name="twitter:card" content="summary_large_image">
<meta
  name="twitter:title"
  content="US Flooring & Molding Inc. | Burbank Flooring Experts"
>
<meta
  name="twitter:description"
  content="Over 20 years of flooring experience serving Burbank and greater Los Angeles."
>
<meta
  name="twitter:image"
  content="https://www.usflooring.la/og-image.jpg"
>
<meta
  name="twitter:image:alt"
  content="US Flooring & Molding Inc. — flooring, molding, and installation in Los Angeles"
>

5. Install the social-sharing image correctly

Place the final 1200 × 630 JPG social-sharing image at:

"public/og-image.jpg"

Confirm that it becomes publicly accessible at:

https://www.usflooring.la/og-image.jpg

Do not use a temporary Figma URL, blob URL, localhost URL, Unsplash URL, or dynamically generated asset URL for the Open Graph image.

The image must be a permanent local website asset.

6. Preserve and improve route-specific SEO

Keep unique metadata for every existing page:

- "/"
- "/products"
- "/hardwood-flooring-burbank"
- "/laminate-flooring-burbank"
- "/luxury-vinyl-flooring-burbank"
- "/flooring-installation-burbank"
- "/molding-baseboard-installation-burbank"
- "/about"
- "/gallery"
- "/reviews"
- "/contact"

Each page must have:

- One unique "<title>"
- One unique meta description
- One self-referencing canonical URL
- One indexable robots directive
- One clear H1
- Appropriate Open Graph title and description
- Open Graph URL matching its canonical
- The same permanent social-sharing image
- Relevant JSON-LD structured data

Keep the existing route-specific SEO component, but make sure it does not create duplicate tags.

Each canonical URL must use:

https://www.usflooring.la/

Use the "www" version consistently.

7. Pre-render important SEO content

This website is a React single-page application. Improve it so essential SEO information does not depend entirely on client-side JavaScript.

Pre-render, statically generate, or server-render every public route listed above.

When a crawler requests a route directly, the returned HTML should already contain:

- The correct title
- The correct description
- The correct canonical
- "index, follow"
- The page’s H1 and primary written content
- Internal navigation links
- Relevant JSON-LD
- Open Graph tags

Do not return the same empty 1,200-byte HTML shell for every route if the hosting platform supports pre-rendering or static route generation.

If Figma Make publishing does not support full pre-rendering, still ensure that the root HTML does not contain "noindex" or incorrect Figma metadata.

8. Preserve structured data

Keep the existing structured data, including:

- "LocalBusiness"
- "HomeAndConstructionBusiness"
- "Service"
- "BreadcrumbList"
- "FAQPage"

Use this consistent business information:

Business name: US Flooring & Molding Inc.
Address: 1508 W Burbank Blvd, Burbank, CA 91506
Phone: +1-818-515-0009
Displayed phone: (818) 515-0009
Website: https://www.usflooring.la/
Service area: Burbank and greater Los Angeles
Price range: $$

On the homepage’s business schema, include:

- "name"
- "url"
- "telephone"
- "image"
- "logo"
- "description"
- "priceRange"
- Complete postal address
- Business hours, if available
- "areaServed"
- "sameAs" links for legitimate Google, Facebook, Instagram, Yelp, and other official profiles when their URLs are available

Do not invent social profile URLs or reviews.

9. Fix the XML sitemap

Keep or create:

"public/sitemap.xml"

It must remain accessible at:

https://www.usflooring.la/sitemap.xml

Include all 11 public routes listed above.

Requirements:

- Use only canonical "https://www.usflooring.la/" URLs.
- Do not include redirected URLs.
- Do not include nonexistent pages.
- Do not include the 404 page.
- Do not include URLs marked "noindex".
- Add accurate "<lastmod>" dates when possible.
- Use valid XML sitemap syntax.

10. Fix invalid-page handling

Create proper handling for nonexistent routes.

Requirements:

- Show the existing branded 404 page.
- Do not create a canonical pointing to "/404" on every invalid URL.
- Add "noindex, follow" to genuine error pages.
- If supported by the hosting system, return HTTP status "404" instead of "200".
- Do not redirect every invalid URL to the homepage.

11. Check image SEO

For every meaningful image:

- Add descriptive alt text.
- Do not keyword-stuff the alt text.
- Use empty "alt=""" only for purely decorative images.
- Add explicit width and height attributes where practical.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary hero image.
- Use WebP or AVIF for regular website images where possible.
- Keep "og-image.jpg" as a JPG.
- Use real showroom and completed-project photographs wherever they are available.

12. Preserve internal linking

Confirm that important pages are reachable through normal HTML links.

Keep links between related service pages using descriptive anchor text such as:

- Hardwood flooring in Burbank
- Laminate flooring in Burbank
- Luxury vinyl flooring in Burbank
- Professional flooring installation
- Molding and baseboard installation
- Request a free flooring estimate

Do not use generic anchor text excessively, such as “click here.”

13. Final validation

Before considering the work complete, verify all of the following:

1. "https://www.usflooring.la/robots.txt" returns HTTP 200.
2. It contains "Allow: /".
3. It does not contain "Disallow: /".
4. It references the correct sitemap.
5. "https://www.usflooring.la/sitemap.xml" returns valid XML.
6. The original homepage HTML does not contain "noindex".
7. The original homepage HTML does not contain "Figma Make App".
8. The original homepage HTML does not contain the website-builder description.
9. The original HTML contains the correct flooring-company title and description.
10. "https://www.usflooring.la/og-image.jpg" returns the correct 1200 × 630 JPG.
11. Every important route has a unique title, description, canonical, and H1.
12. There are no duplicate SEO tags.
13. Canonical URLs consistently use "https://www.usflooring.la".
14. Existing navigation, forms, calls, animations, mobile behavior, and visual design still work.
15. No existing page or feature has been deleted.

Finally, provide a concise report listing:

- Files changed
- Crawlability changes
- Metadata changes
- Structured-data changes
- Sitemap changes
- 404-handling changes
- Anything the Figma hosting platform could not implement

Do not merely explain these changes. Apply them directly to the project and verify the published result.