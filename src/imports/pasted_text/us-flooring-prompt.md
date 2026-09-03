US Flooring & Molding Inc. — Website Redesign Prompt (for Figma)

Design a modern, mobile-first marketing website for US Flooring & Molding Inc., a family-owned flooring store and flooring contractor at 1508 W Burbank Blvd, Burbank, CA 91506, (818) 515-0009. The site should feel local, warm, professional, and craftsmanship-focused — trustworthy enough to compete with big-box retailers like Home Depot and Lowe's without ever looking like a corporate franchise, a discount site, or a generic Squarespace template. Structure the messaging around the Golden Circle: Why (flooring decisions should feel clear, not stressful) → How (family craftsmanship, honest guidance, fair pricing, 1-year labor guarantee) → What (hardwood, laminate, vinyl, moldings, installation, showroom consultation).

Signature design idea: use a recurring "plank" motif — layered horizontal bars/swatches in the brand's wood-tone palette — as the hero's visual centerpiece and as a structural device between sections (instead of stock photography or generic gradient shapes). It should feel literally grounded in flooring: planks being laid, stacked swatches, seam lines.

1. Design Tokens

Color palette

Warm Ivory (background): 
#F5F1EA
Ivory Dim (secondary section background): 
#EEE7DA
Deep Charcoal (text, dark sections): 
#1E1E1C
Charcoal Soft (body text): 
#3A3733
Walnut Brown (primary accent): 
#6B4A2D
Walnut Dark (hover/dark accent): 
#513920
Sand Beige (secondary accent/cards): 
#D8C4A8
Soft Stone Gray (muted text/icons): 
#8A867D
Warm Gold (CTA/highlight accent): 
#C89B5A
Gold Dark (hover state): 
#AD8146
Hairline / dividers: rgba(30,30,28,0.12)

Avoid: cold corporate blue, contractor red/black, neon accents, heavy drop shadows, purple gradients.

Typography

Display / headings: Fraunces (serif, warm, slightly organic — feels crafted, not corporate). Weights 500–700. Use italic sparingly for a single pull-quote moment only.
Body / UI: Instrument Sans (clean humanist sans). Weights 400–600.
Type scale (desktop → mobile): H1 56px → 38px, H2 40px → 30px, H3 22px, Body 16–18px, Small/labels 13–14px.
Line height: headings 1.1, body 1.6. Body paragraph max width ~65 characters.
Avoid: all-caps labels, single-word accent styling inside headlines, tracked-out eyebrow text.

Layout

Max content width: 1180px, centered, 24px side padding on mobile.
Section vertical padding: 88px desktop / 56px mobile.
Grid: 12-column desktop, single column under 720px.
Corner radius: small and consistent — 3–4px on buttons/cards/inputs. Nothing pill-shaped except small tag "chips."
Shadows: minimal. Only the plank illustration and mobile sticky bar use soft elevation; everything else stays flat with hairline borders instead of shadows.

Buttons

Primary: solid Warm Gold fill, Charcoal text, 3px radius, hover → Gold Dark.
Secondary/outline: Charcoal 1.5px border, transparent fill, hover → fills Charcoal with Ivory text.
On dark backgrounds: Ivory outline button, hover inverts to solid Ivory.

Iconography

Simple 2px-stroke line icons (phone, shield, star, map pin, people, check, x). No filled icon style, no emoji.
2. Global Components

Sticky header/nav Left: wordmark "US Flooring & Molding" (Fraunces, medium weight) with small tagline "Burbank, CA · Family owned" underneath in Stone Gray. Center/right: nav links (Why Us / Services / Difference / Reviews / About / Contact), a phone number with icon, and a solid Gold "Free Estimate" button. Background: translucent Ivory with blur, hairline bottom border. Collapses to a hamburger menu + phone icon + CTA button under 900px.

Mobile sticky CTA bar Fixed to the bottom of the viewport on mobile only: two buttons side by side, "Call Now" (outline) and "Free Estimate" (solid gold).

Footer Charcoal background, Ivory text at 75% opacity. Three columns: brand blurb, quick links, contact info (address/phone/fax). Bottom bar with copyright and a product-category tagline, separated by a hairline.

3. Page Sections
A. Hero
Two-column layout (stacks on mobile, image moves above text).
Left: small trust line with a star icon ("5.0 rating on Google · 15 local reviews"), then H1 "Family-owned flooring. Honest guidance. Quality installation.", a supporting paragraph, two CTA buttons ("Request a Free Estimate" solid gold, "Call (818) 515-0009" outline), and a row of three inline trust stats (15+ years serving Burbank / 1-year labor guarantee / free in-showroom estimates).
Right: the signature plank illustration — six horizontal bars of varying width in Walnut, Sand, Charcoal, Gold, Stone, and Walnut Dark, each with a subtle diagonal wood-grain texture, staggered with soft shadows. On page load, planks slide in from the right and fade in one at a time (staggered ~150ms apart), like planks being laid down. Respect reduced-motion preferences.
Image suggestion: if real photography is available, replace the illustrated planks with an actual photo of the showroom's flooring sample wall or a stack of real wood/vinyl plank samples shot at a slight angle, warm natural light, shallow depth of field. Alternatively, a wide shot of a finished residential room with clearly visible hardwood or vinyl flooring, warm afternoon light, no people. Avoid glossy staged stock photography — go for a lived-in, well-lit home interior.
B. Trust bar

Full-width Charcoal strip directly under the hero. Six items in a single row (wraps on mobile), each an icon + short label: 5.0 Google rating · 15 customer reviews · Free estimates · 1-year labor guarantee · Burbank local business · Hardwood · Laminate · Vinyl · Moldings.

C. Why (Golden Circle core)

Two-column split. Left: eyebrow "Why we're here," H2 "Flooring decisions should feel clear, not stressful," two short paragraphs of body copy, and an outline CTA "Talk to a Flooring Expert." Right: a quiet square panel (Ivory Dim background, hairline border) containing a single italicized Fraunces pull-quote: "Your floor isn't just a product — it changes how your home feels."

Image suggestion: optional — a close-up macro shot of flooring grain/texture (wood knots, vinyl texture) placed subtly behind or beside the quote panel at low opacity, purely atmospheric.
D. How (craftsmanship)

Ivory Dim background, hairline top/bottom borders. Eyebrow "How we work," H2 "Generations of craftsmanship. Local service you can trust," intro paragraph about Vick learning the trade at seventeen. Below: a 3-column grid (2-col tablet, 1-col mobile) of six flat feature items — Personal guidance, Quality materials, Professional installation, Fair pricing, Free estimates, 1-year labor guarantee — each with a colored top border rule (rotating Walnut/Gold/Stone) instead of a card shadow, keeping the editorial, non-SaaS-card feel.

Image suggestion: a candid photo of an installer at work — kneeling, fitting a plank, tools visible, hands-on detail shot. Warm, documentary style, not posed.
E. Services ("What")

Eyebrow "What we offer," H2 "Flooring products & services." Six stacked full-width rows (not a card grid) — Hardwood, Laminate, Vinyl, Moldings, Flooring Installation, Showroom Consultation — each row pairs a small material-tone color swatch on the left with a title and one-line description on the right, separated by hairline dividers. Ends with a solid gold "Visit Our Showroom" button.

Image suggestion: replace each color swatch with an actual close-up photo of that material — a hardwood plank close-up, a laminate sample, a vinyl plank close-up, a molding profile shot, an installation-in-progress photo, and a showroom interior wide shot. Keep all six images the same crop ratio (roughly 4:3) and consistent warm color grading so the row reads as a set.
F. Difference (vs. big-box)

Ivory Dim section background containing one dark contrast card split into two columns: left "Big-box store" (Charcoal background, muted Stone-colored X icons and text), right "US Flooring & Molding" (Walnut Dark background, Gold check icons, Ivory text). Six paired comparison points each (generic advice vs. personal guidance, transaction-focused vs. relationship-focused, etc.). Outline CTA below: "Get Local Flooring Advice."

Image suggestion: none needed — this section should stay purely typographic/iconographic for contrast against the photo-heavy sections around it.
G. Reviews / Testimonials

Eyebrow "Customer reviews," H2 "Customers notice the difference." Three-column grid (stacks on mobile) of long-form testimonial cards (Ivory Dim background, hairline border, gold star row, quote, name + city) for Bob S. (Santa Monica), Alin S. (Burbank, interior designer), and Ana O. (Los Angeles). Below the grid, a horizontal strip of four short italicized one-line Google review snippets separated by a hairline top border.

Image suggestion: small circular avatar placeholders using initials on a Walnut background (no real customer photos, for privacy) — consistent with the "Meet Vick" badge style below.
H. About ("Meet Vick")

Ivory Dim section. Two-column layout: left column has a large circular Walnut badge with the initial "V" in Fraunces, plus eyebrow "Family, since day one" and H2 "Meet Vick." Right column: two paragraphs about Vick learning the trade from his father at seventeen and the family business growing over time, followed by a simple vertical timeline (three dots on a Sand-colored line) — "Age 17: begins learning the trade," "Building the business: knowledge, service and product selection expand," "Today: 15+ years serving Burbank." Outline CTA: "Visit the Burbank Showroom."

Image suggestion: replace the initial badge with a real portrait of Vick if available — warm, natural-light headshot or an environmental portrait in the showroom. If no photo is available or preferred, keep the illustrated monogram badge rather than using a generic stock "contractor" photo.
I. Service areas

Ivory Dim, bordered top and bottom. Eyebrow "Where we work," H2 "Serving Burbank and the surrounding Los Angeles area," short paragraph, then a wrapped row of pill-shaped chips: Burbank, Glendale, North Hollywood, Toluca Lake, Studio City, Sun Valley, Los Angeles, San Fernando Valley.

Image suggestion: none — keep this section light and text-led; optionally a simple stylized line-art map of the service area as a background watermark at very low opacity.
J. Contact / Free Estimate

Eyebrow "Get started," H2 "Ready to start your flooring project?" Two-column layout: left has the business name, address, phone, fax as labeled fields, two CTA buttons ("Call Now" solid, "Get Directions" outline), and an embedded Google Map. Right is a contact form (Ivory Dim background, bordered) with First name, Last name, Phone, Email, Project type, Preferred flooring type, Message, and Preferred contact method, ending in a full-width solid gold submit button.

Image suggestion: none required — keep this functional and uncluttered; the map itself is the visual anchor.
4. Motion & Interaction
One orchestrated moment only: the hero plank illustration stacks in on page load, staggered.
Standard hover states on buttons and nav links (color/fill transitions, ~150–200ms ease).
Smooth-scroll for anchor navigation.
No scroll-triggered fade-ins on every section — keep those quiet and static.
Respect prefers-reduced-motion by disabling the plank animation.
5. Responsive Behavior
Breakpoints: desktop ≥1024px, tablet 720–1024px, mobile ≤720px.
Hero, Why, About, and Difference sections collapse from two columns to one, with visual elements moving above the text on mobile.
Services rows and How-section grid collapse from multi-column to single column.
Header collapses to a hamburger menu; mobile sticky Call/Free-Estimate bar appears at the bottom of the viewport only on mobile.
6. Accessibility
Maintain WCAG AA contrast (Charcoal text on Ivory easily passes; check Gold-on-Ivory button text — use Charcoal text on Gold, never Ivory).
Visible keyboard focus states on all buttons, links, and form fields (2px Walnut outline).
All icons are decorative/paired with text labels, not the sole means of conveying information.