Replace the incorrect map currently displayed on the US Flooring & Molding contact page with the correct Google Maps location.

Page to update:

```txt
https://www.usflooring.la/contact
```

Correct business:

```txt
US Flooring & Molding Inc.
1508 W Burbank Blvd
Burbank, CA 91506
```

Official Google Maps destination:

```txt
https://maps.app.goo.gl/tj7qojTHfH3svRqD6
```

Verified coordinates:

```txt
Latitude: 34.1818843
Longitude: -118.3279698
```

## Important constraints

* Modify only the map and related map links.
* Do not redesign the contact page.
* Preserve the existing colors, typography, spacing, form, contact information, buttons, responsive layout, SEO metadata, structured data, and animations.
* Remove the existing incorrect non-Google map completely.
* Do not use a screenshot or static map illustration.
* Do not use the shortened `maps.app.goo.gl` URL as the iframe source because it is a redirect link, not an embeddable map.
* Use the shortened URL only for clickable “Directions” links.

## 1. Replace the current map

Remove the current map component, map image, OpenStreetMap embed, Leaflet map, placeholder, or any other incorrect map implementation.

Replace it with a responsive Google Maps iframe pointing to the correct business location.

Use:

```html
<iframe
  src="https://www.google.com/maps?q=US+Flooring+%26+Molding+Inc.%2C+1508+W+Burbank+Blvd%2C+Burbank%2C+CA+91506&z=16&output=embed"
  title="Google Maps location of US Flooring & Molding Inc. in Burbank"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

If React requires JSX syntax, use:

```jsx
<iframe
  src="https://www.google.com/maps?q=US+Flooring+%26+Molding+Inc.%2C+1508+W+Burbank+Blvd%2C+Burbank%2C+CA+91506&z=16&output=embed"
  title="Google Maps location of US Flooring & Molding Inc. in Burbank"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

The map must visibly center on:

```txt
US Flooring & Molding Inc.
1508 W Burbank Blvd
Burbank, CA 91506
```

Do not allow Google Maps to display a different business or a generic Burbank location.

## 2. Preserve the existing map container design

Keep the current map section’s approximate dimensions, positioning and visual style.

Requirements:

* Full width inside its existing column or container
* Minimum desktop height: 400px
* Minimum mobile height: 320px
* Responsive width
* No horizontal overflow
* Preserve the existing border radius
* Preserve the existing border and shadow styling
* Clip the iframe inside the rounded container
* Do not stretch or crop the surrounding layout
* Keep sufficient spacing between the map and contact form

Recommended wrapper:

```jsx
<div className="relative w-full min-h-[320px] md:min-h-[400px] overflow-hidden rounded-[2px]">
  <iframe
    src="https://www.google.com/maps?q=US+Flooring+%26+Molding+Inc.%2C+1508+W+Burbank+Blvd%2C+Burbank%2C+CA+91506&z=16&output=embed"
    title="Google Maps location of US Flooring & Molding Inc. in Burbank"
    className="absolute inset-0 h-full w-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

Adapt the classes to the existing project’s design system instead of introducing a conflicting visual style.

## 3. Add a directions button

Directly beneath the map, or inside the existing address area, add a clearly visible secondary button:

```txt
Get Directions
```

Link it to:

```txt
https://maps.app.goo.gl/tj7qojTHfH3svRqD6
```

Implement it as a normal external link:

```jsx
<a
  href="https://maps.app.goo.gl/tj7qojTHfH3svRqD6"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Get directions to US Flooring & Molding Inc. in Google Maps"
>
  Get Directions
</a>
```

Requirements:

* Open Google Maps in a new tab.
* On supported mobile devices, allow the Google Maps app to open.
* Match the website’s existing button style.
* Include a small map-pin icon if appropriate.
* Include a visible keyboard-focus state.
* Do not replace the displayed street address with only a button.

## 4. Make the displayed address clickable

Where the contact page displays:

```txt
1508 W Burbank Blvd
Burbank, CA 91506
```

Make the complete address a link to:

```txt
https://maps.app.goo.gl/tj7qojTHfH3svRqD6
```

Use:

```jsx
<a
  href="https://maps.app.goo.gl/tj7qojTHfH3svRqD6"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open US Flooring & Molding Inc. in Google Maps"
>
  1508 W Burbank Blvd, Burbank, CA 91506
</a>
```

Keep the address visible as normal readable text.

## 5. Update structured data

Confirm that the contact page and homepage `LocalBusiness` structured data use:

```json
{
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://www.usflooring.la/#business",
  "name": "US Flooring & Molding Inc.",
  "url": "https://www.usflooring.la/",
  "telephone": "+1-818-515-0009",
  "hasMap": "https://maps.app.goo.gl/tj7qojTHfH3svRqD6",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.1818843,
    "longitude": -118.3279698
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1508 W Burbank Blvd",
    "addressLocality": "Burbank",
    "addressRegion": "CA",
    "postalCode": "91506",
    "addressCountry": "US"
  }
}
```

If the existing schema contains additional correct fields, preserve them.

Do not create a second conflicting LocalBusiness entity. Update the existing primary business entity and maintain the same `@id`.

## 6. Remove obsolete map code

After installing the Google Map:

* Remove the old incorrect map URL.
* Remove unused imports related only to the previous map.
* Remove unused map libraries and dependencies if nothing else uses them.
* Remove incorrect latitude and longitude values.
* Remove placeholder map images.
* Do not leave two maps on the page.
* Do not introduce console warnings or errors.

## 7. Final verification

Before completing the update, verify:

1. The contact page displays an actual interactive Google Map.
2. The map centers on US Flooring & Molding Inc.
3. The location is 1508 W Burbank Blvd, Burbank, CA 91506.
4. The map does not point to another business or address.
5. “Get Directions” opens the official Google Maps link.
6. The displayed address opens the same official Google Maps link.
7. The map works on desktop, tablet and mobile.
8. The iframe has an accessible title.
9. The map does not overflow its container.
10. The contact form and all other contact-page content remain unchanged.
11. The existing SEO title, description and canonical remain unchanged.
12. LocalBusiness schema contains the correct address, map URL and coordinates.
13. There are no duplicate maps, broken links or console errors.
14. The update exists on the published website, not only inside the Figma preview.

Apply these changes directly. Do not merely explain how to do them. Afterward, report exactly which component and structured-data fields were changed.
