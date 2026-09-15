FIGMA PROMPT — USFlooring.LA "Buyer's Guide" Page

CONTEXT
Design a new page for USFlooring.LA titled "Buyer's Guide." This is an
educational comparison page — hardwood, engineered wood, laminate, and
vinyl — that lives alongside the existing corporate single-page site
(Golden Circle: Why → How → What). It should feel like a natural extension
of that site, not a separate microsite. Corporate positioning: "20+ years
serving Los Angeles" — no family-owned or founder-story framing.

Design for two breakpoints: desktop (1440px) and mobile (390px), fully
responsive between them.

BRAND SYSTEM — DO NOT DEVIATE
Typography: Manrope for all headings, Inter for all body text and UI labels.
Visual motif: thin architectural line-drawing style — use it for the
cross-section illustrations in the comparison cards (see below) and as a
subtle background element in the hero. Line weight should be consistent
with any existing line-drawing plank graphics already used on the site.
Warm oak (#C89B62) and walnut (#6B4423) are accent colors only — never a
large fill, always a controlled detail (labels, borders, small tags, icons).

Color balance across the page overall:
70% warm cream / soft white backgrounds
15% deep navy / charcoal
10% natural oak / walnut accents
5% signature red — reserved ONLY for primary CTA buttons, never backgrounds

CSS VARIABLES (reference for exact values)
:root {
  --background-primary: #F7F2E8;
  --background-surface: #FFFDFA;
  --background-alternate: #F3EDE3;
  --background-oak-soft: #F1E4D2;
  --heading-primary: #0A1F3D;
  --brand-navy: #073B7A;
  --text-primary: #111D27;
  --text-secondary: #646B73;
  --accent-red: #D91F2A;
  --accent-oak: #C89B62;
  --accent-walnut: #6B4423;
  --border-default: #DDD4C6;
  --text-on-dark: #F7F2E8;
  --text-on-red: #FFFFFF;
  --button-primary-bg: #D91F2A;
  --button-primary-text: #FFFFFF;
  --button-secondary-border: #0A1F3D;
  --button-secondary-text: #0A1F3D;
  --focus-ring: #073B7A;
}

OVERALL TONE
Professional architectural guide — warm, educational, structured, corporate.
Not a colorful e-commerce catalog. No badges, no starbursts, no "SALE" energy.
Generous whitespace, calm hierarchy, confident restraint.

────────────────────────────────────────
SECTION 1 — HERO
────────────────────────────────────────
Background: #F7F2E8
Small label (above heading): "BUYER'S GUIDE" — color #6B4423, Inter,
letter-spaced, small.
Heading (Manrope, large, #0A1F3D):
"Find the Right Flooring for Your Property"
Paragraph (Inter, #111D27, max ~60ch):
"Compare hardwood, engineered wood, laminate, and vinyl based on
appearance, durability, moisture exposure, maintenance, lifestyle,
installation requirements, and budget."
Primary button: "Request a Free Estimate" — #D91F2A background, white text
Secondary button: "Visit Our Showroom" — navy outline (#0A1F3D border and
text), transparent fill
Optional visual: a subtle, thin architectural line-drawing of a plank
cross-section (or a row of four, one per material) positioned right of
the text or beneath it — no color fill, single-weight navy or oak line art.

────────────────────────────────────────
SECTION 2 — FLOORING COMPARISON CARDS
────────────────────────────────────────
Layout: 4-column grid on desktop, stacked single column on mobile.
Do NOT assign a different bright color per card — all four cards share
the same background and border treatment; only the small label and
line-drawing illustration change.

Shared card style:
Background: #FFFDFA
Border: 1px solid #DDD4C6
Title (Manrope): #0A1F3D
Body text (Inter): #111D27
Small category label (Inter, small, uppercase-optional): #6B4423
"Best for" tag: small pill or underline in #C89B62 (oak) — this is the
only accent color variation between cards, used consistently for the
same purpose on every card, not as a per-card color code.

Card illustration: simple line-drawing cross-section of the material's
layer structure (single-weight line art, navy or walnut line color,
no fill) — echoing the architectural plank motif.

Card 1 — Solid Hardwood
Label: NATURAL WOOD
Description: "One piece of solid wood, milled from the log. Full-depth
grain, and the only option you can sand and refinish multiple times
over its life."
Best for: Dry, climate-stable rooms
Quick facts: Refinishable 4–6× · Durability: Very High · Price: High

Card 2 — Engineered Wood
Label: LAYERED HARDWOOD
Description: "A real hardwood veneer bonded over a cross-layered core.
More dimensionally stable than solid wood, and safe over radiant heat
and concrete slabs."
Best for: Radiant heat & below-grade rooms
Quick facts: Refinishable up to 3× · Durability: High · Price: Mid–High

Card 3 — Laminate
Label: PRINTED WOOD DETAIL
Description: "A high-resolution photographic layer of wood grain, sealed
under a hard-wearing surface and fused to a dense fiberboard core."
Best for: Budget-conscious, high-traffic rooms
Quick facts: Refinishable: No · Durability: Moderate · Price: Low

Card 4 — Vinyl (LVP/LVT)
Label: FULLY WATERPROOF
Description: "Layered PVC construction, fully waterproof from surface to
backing. The most forgiving option for moisture-prone rooms."
Best for: Kitchens, bathrooms, basements
Quick facts: Refinishable: No · Durability: Moderate · Price: Low–Mid

────────────────────────────────────────
SECTION 3 — COMPARISON TABLE
────────────────────────────────────────
Header row background: #0A1F3D — header text: #FFFDFA
Standard rows: #FFFDFA
Alternating rows: #F3EDE3
Borders: #DDD4C6
Checkmarks (yes/positive): navy #073B7A
Important warnings (not recommended / not waterproof): red #D91F2A,
shown as short text, not oversized icons — e.g. "Not waterproof" rather
than a red X, to keep the page from reading alarmist.

Columns: | Hardwood | Engineered Wood | Laminate | Vinyl (LVP/LVT)
Rows:
Waterproof — "Not waterproof" (red) / "Water-resistant" / "Not waterproof
unless rated" (red) / "Fully waterproof" (navy check)
Refinishable — "Yes, 4–6×" (navy check) / "Limited, up to 3×" / "No" /
"No"
Durability — Very High / High / Moderate / Moderate
Radiant floor heat — "Not recommended" (red) / "Yes" (navy check) /
"Most brands" (navy check) / "Yes" (navy check)
Typical price tier — High / Mid–High / Low / Low–Mid
Best for resale value — Highest / High / Lower / Lower–Moderate

────────────────────────────────────────
SECTION 4 — EDUCATIONAL CALLOUTS
────────────────────────────────────────
Layout: 2×2 grid on desktop, stacked on mobile.
Shared style: background #F1E4D2, left border 3px #C89B62, heading
#0A1F3D (Manrope), body text #111D27 (Inter).

Callout 1 — "Why engineered wood resists warping"
"Wood moves far more across the grain than along it. In solid hardwood,
every board moves the same direction, so that movement adds up across
the floor. Engineered wood layers its core with each grain running
perpendicular to the one below — the same logic as plywood — so each
layer restrains the next and the finished floor moves dramatically less."

Callout 2 — "SPC vs. WPC vinyl cores"
"SPC (stone plastic composite) is a dense, rigid core — firmer underfoot
and highly resistant to furniture dents. WPC (wood plastic composite)
uses a foamed core — softer, quieter, and warmer underfoot, but less
resistant to concentrated weight like chair legs or heels."

Callout 3 — "Installation at a glance"
"Hardwood is nailed or stapled to a wood subfloor. Engineered wood can
be nailed, glued, or floated depending on the subfloor. Laminate almost
always floats as a single interlocking layer. Vinyl can float, be glued
down, or — in peel-and-stick form — self-adhere directly to the subfloor."

Callout 4 — "Maintenance and lifespan"
"Hardwood and engineered wood need regular sweeping and occasional
refinishing to stay ahead of wear. Laminate and vinyl need only sweeping
and damp mopping, with no refinishing possible — when the surface wears
through, the plank is replaced rather than restored."

────────────────────────────────────────
SECTION 5 — FINAL CTA
────────────────────────────────────────
Background: #0A1F3D (full-bleed)
Heading (Manrope, #F7F2E8): "Still Not Sure Which Flooring Is Right for You?"
Paragraph (Inter, #E4DED4): "Visit our Burbank showroom or schedule a
project consultation. We'll help you compare suitable options based on
your property, lifestyle, and budget."
Primary button: "Schedule a Consultation" — #D91F2A background, white text
Secondary button: transparent fill, 1px cream (#F7F2E8) border, cream text
— label: "Call Now — (818) 515-0009"

END OF PROMPT