Connect the official US Flooring & Molding Inc. Yelp business profile to the website and integrate it into the existing design, local SEO, and structured data.

Official Yelp profile:

https://www.yelp.com/biz/us-flooring-and-molding-burbank

The supplied link used the mobile Yelp domain. Use the standard "www.yelp.com" URL above throughout the website.

Important constraints

- Do not redesign the website.
- Preserve the existing colors, typography, spacing, navigation, animations, responsiveness, and brand identity.
- Do not install or embed a heavy Yelp widget.
- Do not use an iframe.
- Do not make up a star rating, review count, award, customer quote, or Yelp status.
- Do not copy Yelp reviews automatically.
- Use the official Yelp link wherever Yelp is referenced.
- All Yelp links must open in a new tab.

1. Add Yelp to the website footer

Add a small Yelp social icon and text link to the existing footer’s social links or business-information area.

Use this accessible label:

US Flooring & Molding on Yelp

Link it to:

https://www.yelp.com/biz/us-flooring-and-molding-burbank

Implement the link as:

<a
  href="https://www.yelp.com/biz/us-flooring-and-molding-burbank"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View US Flooring & Molding Inc. on Yelp"
>
  View us on Yelp
</a>

Use a clean Yelp icon consistent with the size and visual weight of the existing social icons.

The icon must have sufficient color contrast and a visible hover and keyboard-focus state.

Do not allow the Yelp icon to dominate the footer.

2. Add a Yelp call-to-action to the Reviews page

On the existing Reviews page, add a polished Yelp call-to-action beneath the customer testimonials.

Use this copy:

See More Customer Experiences

Visit our official Yelp profile to read more about what local customers say about US Flooring & Molding Inc.

Read Our Reviews on Yelp

The button should link to:

https://www.yelp.com/biz/us-flooring-and-molding-burbank

Button requirements:

- Open in a new tab.
- Use "rel="noopener noreferrer"".
- Match the website’s existing premium wood-and-cream design.
- Use the existing primary or secondary button style.
- Include a small Yelp icon if it fits naturally.
- Keep it fully responsive.
- Add an accessible focus state.
- Do not display a numerical rating or review count unless that information is manually confirmed and maintained.

3. Add a subtle homepage Yelp link

In the homepage testimonial or trust section, add a subtle link beneath the existing testimonials.

Use:

Read more customer reviews on Yelp →

Link it to:

https://www.yelp.com/biz/us-flooring-and-molding-burbank

This should look like a secondary trust link, not a large primary call-to-action.

Do not add a Yelp widget, live feed, review carousel, or third-party tracking script.

4. Add Yelp to LocalBusiness structured data

Find the primary homepage "LocalBusiness" or "HomeAndConstructionBusiness" JSON-LD object.

Add the official Yelp profile to its "sameAs" array.

Use this structure:

{
  "@context": "https://schema.org",
  "@type": [
    "LocalBusiness",
    "HomeAndConstructionBusiness"
  ],
  "@id": "https://www.usflooring.la/#business",
  "name": "US Flooring & Molding Inc.",
  "url": "https://www.usflooring.la/",
  "sameAs": [
    "https://www.yelp.com/biz/us-flooring-and-molding-burbank"
  ]
}

If "sameAs" already exists, preserve its legitimate URLs and add Yelp without removing or duplicating anything.

For example:

"sameAs": [
  "EXISTING_OFFICIAL_GOOGLE_MAPS_URL",
  "https://www.yelp.com/biz/us-flooring-and-molding-burbank",
  "EXISTING_OFFICIAL_INSTAGRAM_URL",
  "EXISTING_OFFICIAL_FACEBOOK_URL"
]

Only retain social-profile URLs that are confirmed and already part of the project. Do not invent missing URLs.

Make sure the Yelp URL appears only once in the "sameAs" array.

5. Do not create prohibited review markup

Do not add any of the following based solely on Yelp:

"aggregateRating"
"review"
"ratingValue"
"reviewCount"

Do not present Yelp’s third-party rating as a self-hosted rating belonging to the website’s structured data.

Do not scrape Yelp.

Do not copy full reviews, reviewer photos, rating graphics, or other Yelp content without permission.

A normal link to the official Yelp profile is sufficient.

6. Tracking

If the project already uses Google Analytics or another analytics system, add a click event to Yelp links.

Recommended event name:

outbound_yelp_click

Recommended parameters:

link_location: footer | homepage_testimonials | reviews_page
destination_url: https://www.yelp.com/biz/us-flooring-and-molding-burbank

Do not add a new analytics library solely for this event.

7. Accessibility and technical requirements

Confirm that:

- Yelp links work on desktop and mobile.
- Every Yelp link opens in a new tab.
- Every external link uses "rel="noopener noreferrer"".
- Icon-only links include an accessible "aria-label".
- The link is keyboard accessible.
- Focus states are visible.
- The Yelp icon has descriptive accessible text.
- No duplicate links appear next to each other.
- No console errors are introduced.
- The website’s loading performance is not reduced.

8. SEO and GEO requirements

The Yelp link must be a normal crawlable HTML "<a>" link, not a JavaScript-only click handler.

Include the Yelp profile in the main business entity’s "sameAs" property so search engines and AI systems can connect:

- The official website
- The official business name
- The Burbank address
- The telephone number
- The established Yelp profile

Keep the business information consistent:

US Flooring & Molding Inc.
1508 W Burbank Blvd
Burbank, CA 91506
(818) 515-0009
https://www.usflooring.la/

Do not change any existing business details.

9. Final verification

Before completing the update, verify:

1. The footer contains a functioning Yelp link.
2. The Reviews page contains the Yelp call-to-action.
3. The homepage testimonial section contains the subtle Yelp link.
4. All three links use the same official URL.
5. All Yelp links open in a new tab.
6. The homepage LocalBusiness schema includes Yelp in "sameAs".
7. The Yelp URL is not duplicated in structured data.
8. No unsupported star rating or review count was added.
9. No Yelp iframe, widget, scraper, or third-party script was installed.
10. The existing website design and mobile layout remain unchanged.
11. All existing SEO metadata, canonical URLs, robots directives, and sitemap files remain intact.
12. The published site contains the changes, not only the Figma preview.

Apply these changes directly. After completing them, provide a concise list of the files and components changed.