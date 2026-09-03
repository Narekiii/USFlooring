# US Flooring & Molding Inc. — Modernized Website Prompt (for Figma)

Redesign the website for **US Flooring & Molding Inc.**, a flooring and molding company built on more than 20 years of experience, serving Los Angeles and the surrounding area (Burbank, Glendale, Beverly Hills, Encino, and beyond) with hardwood, laminate, vinyl, moldings, and professional installation.

This is a brand refresh, not a small-business starter site. The company has an established, corporate-grade identity now (matching its business card system: navy, corporate blue, and warm oak, with a geometric USF logo mark) — the website needs to read as a **mature, credible, experienced flooring and molding company operating across Los Angeles**, not a casual local shop. Every section should reinforce authority, precision, and track record, while still feeling approachable enough that a homeowner picks up the phone.

Business info to use throughout:
- Phone: `(818) 515-0009`
- Email: `hello@USFlooring.LA`
- Website: `USFlooring.LA`
- Address: `1508 W Burbank Blvd, Burbank, CA 91506`

---

## 1. Brand Positioning (updated)

Primary statement, to be used as the hero headline/subhead pairing and repeated in condensed form elsewhere on the site:

**Built on More Than 20 Years of Experience**
**Serving Los Angeles with professional flooring, molding, and installation.**

Retire the earlier "family-owned, 15+ years, Burbank-only" framing. The new tone is:
- Experienced and established, not new or small
- Professional and precise, not folksy or rustic
- Citywide (Los Angeles) in scope, with Burbank as the home base/showroom location
- Still trustworthy and personal in service — but presented with corporate polish, not homespun warmth

Avoid: rustic textures, hand-lettered accents, overly casual copy, "mom-and-pop" visual cues. Keep: honesty, craftsmanship, and a real point of contact — these should now come through as *professional confidence* rather than folksy charm.

---

## 2. Design Tokens (aligned to the business card system)

**Color palette**
- Deep Navy (primary brand color): `#071A2F`
- Corporate Blue (secondary/interactive accent): `#1F5F8B`
- Warm Oak (controlled accent only — not a dominant color): `#C69A62`
- Warm White (primary background): `#F7F5F0`
- Light Gray (secondary background/dividers): `#D9DEE3`
- Charcoal (body text): `#252A30`

Usage rules:
- Navy is the dominant brand color — used for the header, footer, primary buttons, and dark section backgrounds.
- Corporate Blue is the interactive/hover accent — links, hover states, secondary highlights.
- Warm Oak is a **controlled accent only**: small dividers, icon highlights, the flooring-plank line pattern, a stat number, a timeline dot. Never a large fill or a full-section background — this mirrors the business card rule that oak should never read as "gold/luxury."
- Drop the previous warm ivory/walnut/sand wood-tone palette entirely. No brown wood-tone fills.

**Typography**
- Headings: **Manrope**, Semibold/Bold — clean, geometric, corporate.
- Body/UI: **Inter**, Regular/Medium.
- This replaces the earlier Fraunces serif pairing — the whole site should read as one confident corporate sans-serif system, matching the business card's typography direction (Inter/Manrope/Helvetica Neue family).
- Type scale (desktop → mobile): H1 `52px → 34px`, H2 `36px → 28px`, H3 `20px`, Body `16–18px`, Small/labels `13–14px`.
- No decorative or script fonts anywhere on the site.

**Layout**
- Max content width: `1180px`, `24px` side padding on mobile.
- Section vertical padding: `88px` desktop / `56px` mobile.
- Corner radius: small and consistent, `2–3px` on buttons/cards/inputs — slightly sharper/more architectural than a typical soft-rounded SaaS site.
- Shadows: flat design, hairline borders instead of shadows almost everywhere. No soft drop shadows on cards.

**Buttons**
- Primary: solid Deep Navy fill, Warm White text, hover → Corporate Blue.
- Secondary/outline: Navy 1.5px border, Navy text, transparent fill, hover → fills Corporate Blue with Warm White text.
- On dark (Navy) backgrounds: Warm White outline button, hover inverts to solid Warm White with Navy text.
- Warm Oak is never used as a button fill.

**Iconography**
- Simple 2px-stroke line icons only, consistent stroke weight throughout (matches the business card's contact-icon rule). No filled icons, no emoji, no illustrated icon sets.

---

## 3. Logo & Signature Motif

- Use the same **USF geometric monogram logo mark** created for the business card in the site header and footer — do not create a separate web-only logo.
- Signature motif: a **flooring-plank line pattern** — thin, precise, architectural horizontal lines/planks in Navy and Oak, evoking flooring layout and blueprint precision. This replaces the earlier illustrated "stacked wood-grain plank" hero graphic, which read too rustic/textured for the new positioning. The new version should look like a technical line drawing or architectural diagram, not a photo-textured illustration.
- Use this line-pattern motif sparingly: as a hero background element, as thin section dividers, and in the footer — never as a heavy decorative block.

---

## 4. Global Components

**Sticky header/nav**
Deep Navy background (solid, not translucent). Left: USF logo mark + wordmark "US Flooring & Molding." Center/right: nav links (Why Us / Services / Difference / Reviews / About / Contact) in Warm White, a phone number with icon, and a solid Warm White "Free Estimate" button with Navy text. Collapses to a hamburger menu under 900px, keeping the phone icon and CTA button visible.

**Mobile sticky CTA bar**
Fixed to the bottom of the viewport on mobile: "Call Now" (Navy outline) and "Free Estimate" (solid Navy) side by side.

**Footer**
Deep Navy background, Warm White text at 80% opacity. Four columns: brand blurb with logo mark, quick links, contact info (phone / email / website / address), and service areas. Bottom bar with copyright and the "20+ Years of Experience" line repeated in small text, separated by a hairline in Corporate Blue at low opacity.

---

## 5. Page Sections

### A. Hero
- Two-column layout (stacks on mobile).
- Left: small trust line with a star icon ("5.0 rating on Google · 15 reviews"), then H1 **"Built on More Than 20 Years of Experience,"** subhead **"Serving Los Angeles with professional flooring, molding, and installation,"** two CTA buttons ("Request a Free Estimate" solid Navy, "Call (818) 515-0009" outline), and a row of three inline stats: 20+ years of experience / serving all of Los Angeles / 1-year labor guarantee.
- Right: the architectural plank line-pattern graphic in Navy/Oak on a Warm White or Light Gray field — precise, geometric, not illustrated wood texture.
- **Image suggestion:** if real photography is available, a sharp, well-lit, editorial-style photo of a finished high-end residential or commercial interior showing clean flooring lines — shot straight-on or with strong architectural leading lines, natural but crisp light. Avoid warm/golden "cozy home" lighting in favor of a cleaner, more neutral, professional color grade. No people in the hero shot.

### B. Trust bar
Full-width Deep Navy strip under the hero. Icon + label items in a single row (wraps on mobile): 20+ years of experience · 5.0 Google rating · Free estimates · 1-year labor guarantee · Serving Los Angeles · Hardwood · Laminate · Vinyl · Moldings.

### C. Why
Two-column split. Left: eyebrow "Why us," H2 **"Flooring decisions deserve an experienced partner,"** two short paragraphs reframing the original "stress-free decisions" message around expertise and track record rather than just friendliness. Outline CTA: "Talk to a Flooring Expert." Right: a Light Gray panel with a single Manrope pull-quote (no italics/serif): *"Two decades of installations across Los Angeles taught us exactly what makes a floor last."*

### D. How
Light Gray background section. Eyebrow "How we work," H2 **"Two decades of craftsmanship, refined into a clear process,"** intro paragraph reframing the company's experience as process maturity (not a single founder's personal story). Six flat feature items in a 3-column grid (2-col tablet, 1-col mobile) — Experienced project guidance, Quality materials, Professional installation, Transparent pricing, Free estimates, 1-year labor guarantee — each with a thin top border rule alternating Navy/Corporate Blue/Oak.
- **Image suggestion:** a sharp, well-composed photo of an installer mid-task in clean branded workwear, precise framing (not candid/documentary) — professional, not casual.

### E. Services ("What")
Eyebrow "What we offer," H2 **"Flooring products & services."** Six stacked full-width rows — Hardwood, Laminate, Vinyl, Moldings, Flooring Installation, Showroom Consultation — each pairing a material swatch or close-up material photo with a title and one-line description, separated by hairline dividers. Ends with a solid Navy "Visit Our Showroom" button.
- **Image suggestion:** consistent, evenly lit macro shots of each material (hardwood grain, laminate surface, vinyl plank, molding profile, an installation detail shot, a showroom wide shot), all graded in the same clean, neutral, professional style — not warm/rustic.

### F. Difference (vs. big-box)
Light Gray section containing one Navy contrast card split into two columns: left "Big-box store" (Charcoal-on-Navy, muted icons/text), right "US Flooring & Molding" (Corporate Blue background, Warm White text, Oak check icons). Same six comparison pairs as before (personal guidance vs. generic advice, etc.), reframed slightly to emphasize experience/expertise over just "personal service." Outline CTA: "Get Expert Flooring Advice."

### G. Reviews / Testimonials
Eyebrow "Customer reviews," H2 **"20+ years of results customers notice."** Three-column grid of testimonial cards (Light Gray background, hairline border, Oak star row, quote, name + city) for the existing three testimonials. Below, a strip of short italicized Google review snippets. Keep quote styling in Inter, not serif italics.

### H. About / Company Story
Reframe from a single-founder personal narrative into a **company-level experience story** — this is the biggest tonal shift for the "professional, established company" goal.
- Eyebrow "Our story," H2 **"Two decades of flooring and molding expertise in Los Angeles."**
- Two paragraphs on the company's growth: started with hands-on craftsmanship, expanded product knowledge and service across the LA area, and today serves homeowners, designers, and contractors citywide.
- Replace the previous three-dot personal timeline with a **company milestones timeline**: "20+ years ago — founded on hands-on craftsmanship" → "Expanded product range and installation expertise" → "Today — trusted flooring and molding partner across Los Angeles."
- Use the USF logo mark (not a personal monogram/initial badge) as the visual anchor for this section.
- Outline CTA: "Visit the Burbank Showroom."
- **Image suggestion:** a wide shot of the showroom floor or a completed large-scale installation (commercial or high-end residential), signaling scale and experience rather than a single portrait.

### I. Service areas
Light Gray section. Eyebrow "Where we work," H2 **"Serving Los Angeles — from Burbank to the Westside and the Valley,"** short paragraph, then chips: Burbank, Glendale, Beverly Hills, Encino, North Hollywood, Toluca Lake, Studio City, Los Angeles, San Fernando Valley.

### J. Contact / Free Estimate
Eyebrow "Get started," H2 "Ready to start your flooring project?" Two-column layout: left has business name, address, phone, email, website as labeled fields, two CTA buttons ("Call Now" solid Navy, "Get Directions" outline), and an embedded Google Map. Right is a contact form (Light Gray background, bordered, `2–3px` radius) with the same fields as before (First/Last name, Phone, Email, Project type, Preferred flooring type, Message, Preferred contact method), ending in a full-width solid Navy submit button.

---

## 6. Motion & Interaction
- One restrained load-in moment: the architectural plank line-pattern in the hero draws in as thin lines extending left-to-right, staggered — precise and technical, not a soft illustrated stack.
- Standard hover states (fill/color transitions, ~150–200ms ease) on all buttons and nav links.
- Smooth-scroll for anchor navigation.
- No bouncy, playful, or illustrated motion anywhere — motion should read as precise and engineered, matching the brand's new tone.
- Respect `prefers-reduced-motion`.

## 7. Responsive Behavior
- Breakpoints: desktop ≥1024px, tablet 720–1024px, mobile ≤720px.
- Two-column sections (Hero, Why, About, Difference) collapse to one column on mobile, visuals moving above text.
- Services rows and How-section grid collapse to single column.
- Header collapses to a hamburger menu with Navy background retained; mobile sticky Call/Free-Estimate bar appears at the bottom on mobile only.

## 8. Accessibility
- Maintain WCAG AA contrast — Navy-on-Warm-White and Warm-White-on-Navy both pass comfortably; double-check Corporate Blue text on Light Gray backgrounds.
- Visible keyboard focus states on all interactive elements (2px Corporate Blue outline).
- All icons are paired with text labels, never the sole means of conveying information.