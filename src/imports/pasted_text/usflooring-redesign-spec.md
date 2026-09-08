Update the visual styling of the existing USFlooring.LA website using the following complete color system.

This is a visual redesign of the existing website. Preserve its content, routes, product information, SEO metadata, integrations, forms, and functionality. Apply the changes consistently across desktop and mobile.

DESIGN DIRECTION

Create a modern, corporate flooring-showroom identity that feels established, precise, warm, and trustworthy.

Use predominantly cream and soft-white surfaces, navy typography, restrained wood-toned accents, and red for the most important actions.

Avoid gradients, simulated wood backgrounds, gold effects, heavy shadows, excessive rounded cards, and large red sections.

1. CREATE REUSABLE COLOR VARIABLES

Create a Figma variable collection named “US Flooring / Colors” and mirror these semantic names in the website’s theme tokens.

Brand colors:

* brand/cream: #F7F2E8
* brand/navy: #0A1F3D
* brand/flooring-blue: #073B7A
* brand/red: #D91F2A
* brand/oak: #C89B62
* brand/walnut: #6B4423
* brand/charcoal: #111D27

Backgrounds and surfaces:

* surface/page: #F7F2E8
* surface/light: #FFFDF9
* surface/white: #FFFFFF
* surface/subtle: #EEE7DC
* surface/sand: #E9DFCF
* surface/material-card: #EBE2D4
* surface/image-caption: #EAE0D0
* surface/dark: #0A1F3D

Typography:

* text/heading: #0A1F3D
* text/body: #58616B
* text/secondary: #63707C
* text/accent: #6B4423
* text/on-dark: #F7F2E8
* text/on-dark-secondary: #C4CCD6
* text/link: #073B7A

Borders:

* border/default: #D6D3CC
* border/strong: #B9B4AC
* border/input: #B7C0C9

Interaction colors:

* action/primary: #D91F2A
* action/primary-hover: #B81722
* action/secondary: #0A1F3D
* action/secondary-hover: #073B7A
* action/focus: #073B7A
* action/error: #A71925
* action/error-surface: #FFF3F3

Bind elements to these variables instead of independently hardcoding colors.

2. OVERALL COLOR BALANCE

Aim for approximately:

* 70% cream, soft white, and white
* 18% navy and charcoal
* 10% sand, oak, and walnut
* 2% signature red

Treat these as visual proportions, not strict measurements.

Red should make the next important action obvious. It should not compete with headings, photography, or navigation.

3. ANNOUNCEMENT BAR AND HEADER

Announcement bar:

* Background: surface/dark
* Text: text/on-dark
* Supporting icons: text/on-dark
* Keep it narrow and restrained.

Sticky header:

* Background: surface/page
* Navigation: text/heading
* Navigation hover: brand/red
* Dividers: border/default
* Phone number: text/heading
* Main estimate button: action/primary with white text.

Preserve the official logo’s proportions and approved colors. Do not redraw, stretch, or indiscriminately recolor it.

4. HERO SECTION

Use a cream text area beside the primary interior photograph.

* Background: surface/page
* Main heading: text/heading
* Selected phrase such as “You Can Trust”: text/accent
* Description: text/body
* Small section label: text/accent
* Optional short decorative rule: brand/red
* Primary estimate button: red
* Secondary “Explore Flooring” link: navy with a fine underline.

If photography has a caption:

* Caption background: surface/image-caption
* Caption text: text/heading
* Secondary credit text: text/body

Keep important text readable without relying on a dark gradient over the photograph.

5. TRUST STRIP

* Background: surface/light
* Text: text/heading
* Small check icons: brand/walnut
* Top and bottom borders: border/default

Use only real, supported business claims. Do not introduce stars, ratings, or badges as decoration.

6. FLOORING CATEGORY PANELS

Use three coordinated treatments:

Laminate:

* Background: surface/material-card
* Heading: text/heading
* Body: text/body
* Fine top accent: brand/oak

Hardwood:

* Background: surface/dark
* Heading: text/on-dark
* Body: text/on-dark-secondary
* Small label: brand/oak
* Links: text/on-dark

Molding:

* Background: surface/light
* Heading: text/heading
* Body: text/body
* Fine top accent: brand/walnut

Keep these panels architectural and clean. Do not add wood-pattern backgrounds.

7. INFORMATION AND INSTALLATION SECTIONS

Alternate surface/page, surface/light, and surface/subtle to distinguish sections.

* Headings: text/heading
* Paragraphs: text/body
* Small labels and step numbers: text/accent
* Process dividers: border/strong

Use a consistent background for each complete section. Avoid unnecessary color changes within paragraphs or individual words.

8. SHOWROOM AND CONTACT

* Main information panel: surface/light
* Supporting panel: surface/sand
* Headings and address: text/heading
* Descriptions: text/body
* Directions button: action/secondary
* Telephone and email links: text/link

Keep embedded map colors unchanged.

9. PROFESSIONAL-PARTNER SECTION

* Background: surface/dark
* Heading: text/on-dark
* Supporting text: text/on-dark-secondary
* Small label: brand/oak
* Button: cream background with navy text
* Dividers, if needed: a subdued light outline

Use this as a deliberate dark section, not the default treatment for every page.

10. CATALOG, FILTERS, AND COMPARISON TABLES

Product cards:

* Background: surface/white
* Border: border/default
* Product title: text/heading
* Specifications: text/body
* Brand or collection label: text/accent
* Pricing or “Contact for Pricing”: text/heading

Filters:

* White surfaces
* Input borders: border/input
* Labels: text/heading
* Selected controls: navy with white indicators

Comparison tables:

* Header background: surface/subtle
* Header text: text/heading
* Body background: surface/white
* Body text: text/body
* Row dividers: border/default

Never communicate availability, selection, or comparison differences through color alone.

11. ESTIMATE FORM

* Outer section: surface/page
* Form panel: surface/white
* Form border: border/default
* Labels: text/heading
* Entered text: text/heading
* Supporting instructions: text/body
* Input border: border/input
* Focus indicator: action/focus
* Progress indicator: brand/navy
* Submit button: action/primary
* Back button: transparent with a visible border and navy text

Errors:

* Text: action/error
* Background: action/error-surface
* Include a written explanation next to the relevant field.
* Preserve entered information after an error.

Only show a success confirmation when the submission actually succeeds.

12. BUTTON AND LINK STATES

Primary button:

* Default: #D91F2A background, #FFFFFF text
* Hover: #B81722 background, #FFFFFF text

Secondary button:

* Default: #0A1F3D background, #FFFFFF text
* Hover: #073B7A background, #FFFFFF text

Button on dark backgrounds:

* Default: #F7F2E8 background, #0A1F3D text
* Hover: #FFFFFF background, #0A1F3D text

Text links:

* Default: navy or flooring blue
* Hover: signature red
* Inline links must have an underline or another clear non-color distinction.

Provide visible keyboard-focus states for every interactive element. Use a light focus indicator on dark backgrounds where blue would disappear.

13. FOOTER AND MOBILE ACTION BAR

Footer:

* Background: surface/light
* Headings: text/heading
* Supporting copy: text/body
* Dividers: border/default
* Contact links: text/heading

Mobile action bar:

* Background: brand/navy
* Call and Directions: white text and icons
* Central Get Estimate action: brand/red with white text

Respect the device’s bottom safe area.

14. TYPOGRAPHY AND FINISHING

Use Manrope for headings, body text, navigation, and controls.

* Headings: weight 600–700
* Body: weight 400
* Controls: weight 600–700
* Body text: at least 16px
* Regular interface labels: at least 14px
* Smaller metadata: approximately 12–13px

Use generous spacing, subtle borders, and mostly square or minimally rounded corners. Avoid heavy shadows.

Oak is an accent color, not a body-text color on cream or white. Use walnut for readable warm-colored text on light surfaces.

15. APPLY AND VERIFY

Apply this system across all existing pages and shared components, including menus, forms, product detail pages, guides, dialogs, empty states, and mobile layouts.

Maintain one consistent light theme. Do not automatically invert the website based on the visitor’s operating-system theme.

Check text contrast, button labels, focus visibility, disabled states, and error messages. Adjust any pairing that fails accessibility requirements while preserving the brand direction.

The finished result should feel like one cohesive US Flooring & Molding website: warm cream foundations, confident navy typography, refined oak and walnut details, and precise red calls to action.
