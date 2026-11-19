# MASTER DEVELOPMENT PROMPT
# ACTS COMPUTER COLLEGE — THE LIVING CAMPUS

## 01. ROLE AND RESPONSIBILITIES

Act as a senior frontend software engineer, expert UI/UX designer, creative director, web animation specialist, responsive design specialist, and accessibility engineer.

You are responsible for developing a complete, production-quality, premium educational website for ACTS Computer College.

Before performing any implementation:

- Inspect the entire existing project directory.
- Read all provided documentation.
- Inspect all six full-page website design references individually.
- Inspect all available photography assets.
- Identify the layouts, visual hierarchy, typography, colors, spacing, image positioning, decorative elements, and section arrangements of each reference.
- Use all available relevant UI/UX, frontend design, website development, animation, accessibility, and browser testing skills.
- Determine the most appropriate reusable component architecture.
- Implement the actual website files directly.
- Do not simply provide recommendations, sample code, or an implementation plan.

You must complete the actual frontend website.

---

## 02. PRIMARY OBJECTIVE

Build a premium, modern, professional, visually immersive, fully responsive educational website for ACTS Computer College, located in Santa Cruz, Laguna, Philippines.

The website must closely reproduce the provided full-page reference images.

**The six reference images are implementation targets, not merely inspiration.**

Preserve their:

- Overall page composition.
- Hero section design.
- Section order.
- Heading arrangements.
- Typography hierarchy.
- Image placement and cropping.
- Green, gold, and porcelain color combinations.
- Editorial design elements.
- Organic curves and geometric shapes.
- Button styling.
- Cards and icons.
- Navigation styling.
- Footer composition.
- Background treatments.
- Visual rhythm.
- Relative section proportions.

Do not redesign the website into a different concept.

Do not replace the reference designs with a generic educational website template.

The finished website should look like the reference images were converted into a real, functional, responsive website.

Where exact dimensions cannot be determined from the images, make visually accurate implementation decisions based on the reference proportions.

---

## 03. PROJECT TECHNOLOGY STACK

Use the following:

- React
- Vite
- TypeScript
- Tailwind CSS
- Custom CSS where necessary
- React Router DOM
- Motion for React
- Lucide React icons
- CSS Grid
- CSS Flexbox
- SVG decorative elements

Additional lightweight libraries may be used only when they provide a meaningful implementation benefit.

Do not introduce unnecessary dependencies.

### Project scope

This is a frontend-only website.

There is no backend, database, authentication system, student portal, administrative dashboard, or server-side API required at this stage.

All website information should be maintained in organized TypeScript data files so it can easily be connected to a backend in the future.

---

## 04. REFERENCE IMAGES AND PROJECT ASSETS

Use the following directory structure:

```
acts-computer-college/
│
├── references/
│   ├── 01-discover-fullpage.png
│   ├── 02-our-story-fullpage.png
│   ├── 03-academics-fullpage.png
│   ├── 04-admissions-fullpage.png
│   ├── 05-campus-life-fullpage.png
│   └── 06-contact-fullpage.png
│
├── public/
│   └── images/
│       ├── students-hero.png
│       ├── student-portrait.png
│       ├── computer-learning.jpg
│       ├── collaborative-learning.jpg
│       ├── campus-community.jpg
│       └── campus-exterior.jpg
│
├── docs/
│   ├── MASTER-DEVELOPMENT-PROMPT.md
│   ├── VISUAL-STYLE-GUIDE.md
│   └── ASSET-MANIFEST.md
│
└── src/
```

Inspect the actual files before implementation.

If filenames or file extensions differ, identify the correct assets and normalize their names or update the centralized asset configuration accordingly.

The two student portrait assets should have transparent backgrounds.

The four educational photographs should be landscape photography.

If the campus exterior asset contains a collage or unrelated photograph, isolate the appropriate architectural image when possible. If it cannot be cleanly isolated, use a clearly identified temporary placeholder.

Do not present an AI-generated campus building as an authentic photograph of ACTS Computer College.

### Critical reference image rule

Never use the full-page reference screenshots as actual website backgrounds.

Recreate every section using real:

- HTML elements.
- React components.
- CSS layouts.
- Text elements.
- Buttons.
- Icons.
- Forms.
- Images.
- SVG shapes.
- Functional interactions.

Do not screenshot portions of the mockups and use them as substitutes for actual website components.

---

## 05. SOURCE OF TRUTH AND CONFLICT RESOLUTION

Follow this priority order:

1. Verified official institutional information supplied in project documentation.
2. This master development prompt for content and functionality.
3. The corresponding page reference image for layout and styling.
4. The shared design system for consistency.
5. Your implementation judgment when the preceding sources do not specify a detail.

The reference images may contain AI-generated imperfections, including:

- Inconsistent school logos.
- Different navigation labels.
- Incorrect contact details.
- Misspelled words.
- Incorrect academic program names.
- Fictional historical photographs.
- Inconsistent copyright years.
- Inconsistent icons.
- Different footer arrangements.

Do not reproduce these errors.

Reproduce the visual design, not the accidental inaccuracies.

Use the same approved logo, navigation, footer, core colors, typography, and component styling across all pages.

Do not invent official school information.

---

## 06. BRAND IDENTITY

### Institution

ACTS Computer College

### Location

Santa Cruz, Laguna, Philippines

### Established

1987

### Official institutional phrase

Experience, Expertise & Excellence.

### Creative website direction

ACTS — THE LIVING CAMPUS

### Campaign tagline

Learn deeply. Grow boldly. Lead with purpose.

### Brand personality

- Professional.
- Academically credible.
- Innovative.
- Welcoming.
- Student-centered.
- Sophisticated.
- Technology-oriented.
- Values-centered.
- Aspirational.
- Community-driven.

The website must reflect an established educational institution while remaining modern and relevant to today's students.

---

## 07. DESIGN PHILOSOPHY

The design should combine the following visual styles:

- Premium university website.
- Contemporary editorial web design.
- Modern corporate identity.
- Cinematic educational photography.
- Institutional heritage design.
- Asymmetrical composition.
- Elegant serif typography.
- Selective handwritten cursive typography.
- Organic geometric design.
- Refined minimalist UI.
- Modern interactive storytelling.
- Sophisticated photographic layouts.

Avoid:

- Generic Bootstrap-style websites.
- Childish graphics.
- Cartoon illustrations.
- Excessive glassmorphism.
- Excessive shadows.
- Excessive rounded cards.
- Repetitive card layouts.
- Extremely bright neon colors.
- Dashboard-style interfaces.
- Unnecessary gradients.
- Overly complex animations.
- Empty decorative sections.
- Generic stock photography unrelated to the Philippines.

Each page has its own creative identity and hero composition.

Do not create six pages that look like duplicated templates with different headings.

---

## 08. GLOBAL COLOR SYSTEM

Use the following exact starting color palette:

```css
:root {
  --color-primary: #083D2E;
  --color-secondary: #16734A;
  --color-sage: #A7C689;
  --color-porcelain: #F6F8F1;
  --color-gold: #D4AF37;
  --color-charcoal: #2C2C2C;
  --color-white: #FFFFFF;

  --color-dark-green: #052D22;
  --color-deep-green: #04271E;
  --color-muted-green: #52745F;
  --color-light-sage: #E7EFDF;
  --color-warm-ivory: #FAF8F0;
  --color-border: #DDE4D7;
  --color-text-secondary: #626B65;
}
```

### Color application

Heritage Green:

- Primary headings.
- Primary buttons.
- Footer.
- Dark hero backgrounds.
- Important CTA sections.

Emerald Green:

- Secondary buttons.
- Interactive elements.
- Decorative overlays.
- Hover states.

Soft Sage:

- Subtle backgrounds.
- Active navigation indicators.
- Graphic accents.
- Light cards.
- Section transitions.

Porcelain:

- Main website background.
- Editorial content sections.
- Forms.
- Navigation containers.

Champagne Gold:

- Cursive accent words.
- Decorative lines.
- Timeline markers.
- Selected buttons.
- Important highlights.
- Premium icon accents.

Charcoal:

- Body paragraphs.
- Supporting descriptions.
- Form text.

Do not make every section green.

Follow the alternating dark green, ivory, porcelain, white, and sage color rhythm shown in each reference image.

---

## 09. TYPOGRAPHY SYSTEM

Use these font families:

### Cormorant Garamond

Use for:

- Main hero headings.
- Section headings.
- Editorial titles.
- Historical years.
- Large CTA headlines.
- Institutional statements.

### DM Sans

Use for:

- Navigation.
- Body paragraphs.
- Buttons.
- Form fields.
- Labels.
- Cards.
- Program descriptions.
- Supporting information.

### Allura

Use for:

- Handwritten cursive headline accents.
- Selected promotional phrases.
- Emphasized emotional words.

Do not use cursive typography for entire paragraphs or functional controls.

### Suggested typography scale

```css
:root {
  --font-heading: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --font-script: "Allura", cursive;

  --text-hero: clamp(3.2rem, 6vw, 6.25rem);
  --text-h1: clamp(2.8rem, 5vw, 5rem);
  --text-h2: clamp(2.1rem, 4vw, 4rem);
  --text-h3: clamp(1.5rem, 2.5vw, 2.25rem);
  --text-body: clamp(1rem, 1.2vw, 1.125rem);
  --text-small: 0.875rem;
  --text-eyebrow: 0.75rem;
}
```

Desktop guidelines:

- Hero headings: 72–100px.
- Section headings: 44–64px.
- Supporting headings: 24–36px.
- Body text: 16–18px.
- Navigation: 14–16px.
- Eyebrow labels: 11–13px.

Use responsive fluid typography.

Headings should generally have tightly controlled line heights between 1.0 and 1.15.

Body paragraphs should use comfortable line heights between 1.5 and 1.75.

Use handwritten accents at a size large enough to remain legible and elegant.

---

## 10. GLOBAL LAYOUT AND SPACING

Use a consistent responsive container system.

```css
:root {
  --container-max: 1280px;

  --page-padding: clamp(20px, 4vw, 64px);

  --section-spacing: clamp(64px, 8vw, 120px);
  --section-spacing-compact: clamp(40px, 5vw, 80px);

  --radius-small: 8px;
  --radius-medium: 16px;
  --radius-large: 24px;
  --radius-xl: 32px;
  --radius-pill: 999px;
}
```

### Desktop

- Design primarily around a 1440px viewport.
- Maximum content width approximately 1280px.
- Horizontal page padding approximately 48–64px.
- Standard section vertical padding approximately 80–120px.
- Compact sections approximately 48–80px.
- Grid gutters approximately 24–32px.

### Tablet

- Horizontal padding approximately 32px.
- Reduce heading sizes.
- Adapt multi-column layouts to two columns where appropriate.

### Mobile

- Horizontal padding approximately 20–24px.
- Use single-column layouts where necessary.
- Reduce decorative visual complexity.
- Preserve visual identity.
- Maintain readable text and accessible controls.

The full-page mockups are vertically compressed visual references. Do not directly interpret their small text and section heights as final desktop CSS pixel dimensions.

Use proportional spacing to recreate their visual relationships at a readable browser viewport.

---

## 11. BUTTON AND INTERACTION DESIGN

Create reusable button variants.

### Primary green button

- Heritage Green background.
- White text.
- Pill-shaped or softly rounded.
- Medium font weight.
- Directional arrow icon.

### Primary gold button

- Champagne Gold background.
- Dark green or charcoal text.
- Refined premium appearance.
- Use for primary actions on dark green backgrounds.

### Outline button

- Transparent background.
- Green, gold, or white border depending on the section.
- Matching text color.

### Light button

- Porcelain or white background.
- Dark green text.

### Text link

- Elegant typography.
- Inline arrow.
- Animated underline where appropriate.

Button dimensions:

- Standard height: 46–52px.
- Large CTA height: 54–60px.
- Mobile touch targets: at least 44px.

Hover behavior:

- Slight upward movement.
- Smooth background color transition.
- Arrow moves approximately 4–6px.
- Subtle shadow where appropriate.

Duration: 180–250ms.

All buttons must have visible keyboard focus states.

---

## 12. GLOBAL HEADER — FLOATING NAVIGATION DOCK

Use the homepage reference image as the primary source for the global navigation design.

Create a premium floating white or porcelain navigation dock.

### Desktop composition

Left:

- Official ACTS logo if available.
- ACTS Computer College wordmark.
- Optional subtle divider.
- Santa Cruz, Laguna, Philippines as supporting text where space allows.

Center:

- Discover
- Our Story
- Academics
- Admissions
- Campus Life

Right:

- Gold Inquire Now button.
- ArrowRight icon.

The Inquire Now button must navigate to the Contact page.

### Styling

- White or porcelain background.
- Fully rounded navigation container.
- Width approximately 1280px.
- Height approximately 76–88px.
- Positioned with spacing from the top and screen edges.
- Thin subtle border.
- Refined shadow.
- Dark green text.
- Active navigation item highlighted by a light sage or green pill.

### Scroll behavior

- Sticky navigation.
- Smooth compression when scrolling.
- Slightly reduced height after passing the hero.
- Maintain readability and contrast.
- Do not obscure page content.

### Active navigation animation

Use a shared animated indicator that moves smoothly between active navigation links.

### Mobile

Create a polished mobile navigation menu.

Include:

- School logo.
- Mobile menu button.
- Accessible menu overlay or panel.
- All five navigation links.
- Inquire Now CTA.
- Close button.
- Smooth open and close animation.

Close the menu after navigation.

Prevent background scrolling when the mobile overlay is open.

Support Escape key dismissal and proper focus management.

---

## 13. GLOBAL FOOTER

All six pages must use the same reusable footer component.

Use Heritage Green or Deep Green as the background.

Follow the dark green footer styling present in the reference images.

### Column 1 — Institution

- ACTS logo.
- ACTS Computer College.
- Santa Cruz, Laguna, Philippines.
- Learn deeply. Grow boldly. Lead with purpose.
- Experience, Expertise & Excellence.

### Column 2 — Quick Links

- Discover.
- Our Story.
- Academics.
- Admissions.
- Campus Life.
- Contact.

### Column 3 — Contact Information

Email:

actscc87@yahoo.com

Landline:

(049) 501-1484

Mobile:

09988526488

09178673073

Address:

EGK Building, corner A. Bonifacio Street and Pedro Guevara Avenue, Santa Cruz, Laguna 4009, Philippines.

### Column 4 — Stay Connected

- Facebook.
- YouTube.
- Inquire Now button.

Use verified official social-media URLs from the project data.

Do not invent social-media account URLs.

### Bottom strip

- Subtle horizontal border.
- Dynamic current copyright year.
- ACTS Computer College.
- All rights reserved.

Do not create nonfunctional Privacy Policy or Terms of Use links.

Footer spacing should remain generous, clean, and visually organized.

---

# PAGE 01 — DISCOVER / HOMEPAGE

## 14. HOMEPAGE IMPLEMENTATION

Reference:

`references/01-discover-fullpage.png`

Route:

`/`

Creative identity:

**THE IMMERSIVE WELCOME**

This is the most visually impactful page.

### Section 01 — Immersive Hero

Recreate the homepage hero shown in the reference.

Background:

- Deep Heritage Green.
- Layered forest-green gradients.
- Overlapping organic curved shapes.
- Thin sweeping champagne-gold lines.
- Subtle texture or depth created using CSS.

Do not use a generic stock background.

Layout:

- Approximately 48% text.
- Approximately 52% photography.
- Desktop two-column layout.
- Hero height approximately 650–760px including navigation spacing.

Headline:

Your Ambition
Has a Place Here.

Use Cormorant Garamond for the main heading.

Use large gold Allura cursive typography specifically for Ambition.

The headline must be large, expressive, and visually balanced.

Supporting tagline:

Learn deeply. Grow boldly. Lead with purpose.

Buttons:

- Explore Academics.
- Discover ACTS.

Explore Academics navigates to `/academics`.

Discover ACTS navigates to `/our-story`.

Photography:

`students-hero.png`

Position the student group on the right.

Use the transparent background to naturally integrate the students into the green composition.

The students should visually extend toward the bottom edge of the hero without cutting off their faces or creating obvious rectangular image boundaries.

Decorative elements:

- Large flowing green shapes behind the students.
- Thin curved gold lines.
- Subtle layered highlights.
- Animated scroll indicator.

Animations:

- Staggered heading reveal.
- Cursive accent reveal.
- Student group entrance from the right.
- Gentle image mask animation.
- Button entrance.
- Controlled decorative shape movement.

Mobile:

- Stack text above the students.
- Preserve headline emphasis.
- Keep the photography prominent.
- Avoid excessive empty space.

### Section 02 — Why Choose ACTS?

Background:

Porcelain.

Follow the reference's clean light section.

Desktop heading arrangement:

- Large heading on the left.
- Short institutional introduction on the right.
- Thin vertical or horizontal dividing line.

Headline:

Why Choose ACTS?

Display four horizontally arranged features:

1. Quality Education.
2. Experienced Educators.
3. Values-Centered Learning.
4. Career-Oriented Skills.

Each feature must contain:

- Lucide line icon.
- Pale sage circular icon background.
- Dark green heading.
- Short supporting description.

Use subtle vertical dividers between desktop columns where appropriate.

Suggested icons:

- BookOpen.
- Users.
- Sprout.
- BriefcaseBusiness.

Avoid heavy card backgrounds.

Desktop: four columns.

Tablet: two columns.

Mobile: one or two columns depending on available width.

### Section 03 — Choose Your Path

Background:

White or porcelain.

Centered editorial heading:

Choose Your Path

Place decorative horizontal gold lines around the heading.

Supporting text:

Find the program that fits your goals, builds your skills, and brings you closer to the future you envision.

Create two large photographic panels side by side.

Panel 1:

Senior High School.

Image:

`collaborative-learning.jpg`

Panel 2:

College Programs.

Image:

`computer-learning.jpg`

Styling:

- Large photographic cards.
- Approximately 16:9 or 1.8:1 image ratio.
- Dark green gradient overlay at the bottom.
- White editorial heading.
- Short supporting description.
- Circular outlined arrow button.
- Border radius approximately 16px.
- Overflow hidden.

On hover:

- Image scales to approximately 1.04.
- Gradient subtly deepens.
- Arrow moves slightly.
- Heading remains readable.

Clicking each card navigates to the corresponding academic program category.

### Section 04 — Education With Purpose

Create an editorial split layout.

Left:

Large photograph:

`collaborative-learning.jpg`

Use a slightly different crop from the preceding section.

Right:

Headline:

Education With Purpose

Supporting institutional description.

Display four compact icon-and-text features:

- Academic Development.
- Character Formation.
- Values-Centered Education.
- Practical Learning.

Use a two-by-two feature arrangement on desktop.

Use soft sage circular icon backgrounds and dark green line icons.

Keep the section clean and professional.

Use a gold underline or heading accent.

### Section 05 — Learning. Growing. Belonging.

Background:

Soft sage-tinted porcelain.

Centered headline:

Learning. Growing. Belonging.

Supporting text:

More than academics — experience a supportive and purpose-driven college life.

Create a functional horizontal photography carousel.

Images:

- `computer-learning.jpg`
- `collaborative-learning.jpg`
- `campus-community.jpg`

Display three images on desktop.

Display one or two on smaller screens.

Include:

- Previous button.
- Next button.
- Pagination indicators.
- Swipe support on touch devices.
- Keyboard-accessible controls.

Do not require additional AI-generated photos.

### Section 06 — Your Story Starts Here

Create a full-width dark green closing CTA.

Use decorative sweeping green shapes, gold curved lines, and a subtle architectural or campus photography treatment.

Headline:

Your Story Starts Here

Supporting text:

Be part of a learning community that prepares you for what comes next.

Buttons:

- View Admissions.
- Contact ACTS.

Use gold and white-outline buttons.

Finish with the global footer.

---

# PAGE 02 — OUR STORY

## 15. OUR STORY IMPLEMENTATION

Reference:

`references/02-our-story-fullpage.png`

Route:

`/our-story`

Creative identity:

**THE HERITAGE EDITORIAL**

This page must feel like a premium institutional publication.

### Section 01 — Heritage Hero

Background:

Warm ivory with subtle paper-like or architectural texture created using CSS.

Layout:

Create an asymmetrical editorial collage.

Left:

Our Story.

A Legacy of Learning.

Use dark green Cormorant Garamond for Our Story.

Use gold Allura typography for A Legacy of Learning.

Below the headline, place a short institutional introduction.

Center/right:

- Oversized decorative year 1987.
- Student photography.
- Campus architecture photograph.
- Overlapping editorial image frames.
- Thin gold framing lines.

Assets:

- `students-hero.png`
- `campus-exterior.jpg`

The year 1987 should be approximately 120–180px on desktop and visually integrated with the photographic composition.

Do not simply recreate the homepage's text-left/photo-right layout.

Use overlapping elements and editorial depth without obscuring content.

### Section 02 — Where It All Began

Create a historical timeline.

Layout:

- Approximately 30% introductory content.
- Approximately 70% historical timeline.

Headline:

Where It All Began

Timeline milestones:

1987 — Foundation as the first computer school in Santa Cruz, Laguna.

1990 — Expansion into longer technical programs.

1994 — Move to a larger campus and establishment of college degree offerings.

1996 — Study Now Pay Later Plan.

2006 — ASAP Scholarship initiative.

Styling:

- Large green serif years.
- Gold vertical timeline line.
- Gold circular nodes.
- Alternating supporting descriptions.
- Thin separators.
- Optional photographic panels.

Do not use fictional historical photographs as evidence of actual institutional history.

If authentic historical photography is unavailable, use abstract editorial panels or clearly labeled illustrative imagery.

Animate the timeline progress as the user scrolls.

### Section 03 — Vision and Mission

Recreate the reference's horizontal editorial composition.

Left:

Dark green angled panel with heading:

Vision and Mission

Right:

Two light-background content columns:

- Vision.
- Mission.

Use elegant gold icons.

Use official institutional statements if supplied.

Otherwise show clearly designated temporary placeholders in the development version.

Do not invent official vision or mission statements.

### Section 04 — Core Values

Centered serif heading:

Core Values

Place thin gold lines on either side.

Display five elegant cards.

- Leadership.
- Empowerment.
- Achievement.
- Dedication.
- God-Centered Education.

Card styling:

- Warm ivory background.
- Thin champagne-gold border.
- Gold or green icon.
- Dark green heading.
- Short descriptive body text.
- Minimal shadow.

Suggested icons:

- UsersRound.
- Sprout.
- Trophy.
- Handshake.
- BookOpen.

Desktop: five columns.

Tablet: two or three columns.

Mobile: one or two columns.

### Section 05 — President's Message

Create a premium editorial message layout.

Left:

Official president portrait if supplied.

Otherwise use a neutral, clearly labeled portrait placeholder.

Right:

President's Message

Prof. Ruben F. Macalinao, MBA, MM.

Use the official message if available.

If unavailable, clearly identify the content as pending.

Decorative elements:

- Large gold quotation marks.
- Gold accent line.
- Subtle ivory background shapes.
- Professional typography.

Never generate or present a fictional portrait as the actual president.

### Section 06 — School Leadership

Create a clean directory interface.

Include:

- Search input.
- Category filter chips.
- Responsive personnel cards.
- Navigation or pagination when needed.

Categories:

- All.
- School Officials.
- College Faculty.
- Senior High School Faculty.
- Administrative Staff.

Each personnel card may contain:

- Official photograph.
- Name.
- Position.
- Department or category.

Use actual personnel data when supplied.

Otherwise use clearly labeled development placeholders.

Search must filter the available directory data.

Provide an appropriate empty state.

### Section 07 — Academic Departments

Create the horizontal department showcase seen in the reference.

Departments:

- Computer Studies.
- Business Management.
- Teacher Education.
- Senior High School.

Use photographic cards or compact editorial panels.

Assets:

- `computer-learning.jpg`
- `collaborative-learning.jpg`
- `student-portrait.png`

Use dark green overlays and white labels where appropriate.

Each card should link to the relevant academic information.

### Section 08 — Closing CTA

Headline:

Discover What Your Future Can Become.

Use a light photographic background, gold framing elements, and a student portrait.

Button:

Explore Academics.

Finish with the global footer.

---

# PAGE 03 — ACADEMICS

## 16. ACADEMICS IMPLEMENTATION

Reference:

`references/03-academics-fullpage.png`

Route:

`/academics`

Creative identity:

**THE ACADEMIC PROGRAM EXPLORER**

This page should communicate technology, academic opportunities, and structured information.

### Section 01 — Academic Bento Hero

Background:

Porcelain with sage geometric elements.

Left:

Eyebrow:

THE ACADEMIC PROGRAM EXPLORER

Headline:

Programs for
Real Opportunities.

Use bold green typography and gold emphasis on Real Opportunities.

Supporting description:

Discover industry-relevant academic programs that build your skills, expand your potential, and prepare you for what's next.

Buttons:

- Explore Programs.
- Inquire Now.

Center:

Create two asymmetrical photographic panels.

Top:

`collaborative-learning.jpg`

Bottom:

`computer-learning.jpg`

Right:

`students-hero.png`

Integrate the student cutout into the geometric composition.

Use:

- Angled masks.
- Rounded editorial framing.
- Overlapping sage shapes.
- Gold decorative accents.
- Balanced asymmetric spacing.

Recreate the reference's bento-style arrangement rather than a conventional split hero.

### Section 02 — Find Your Academic Path

Centered heading:

Find Your Academic Path

Supporting description.

Create a large segmented control:

- Senior High School Programs.
- College Programs.

Use green selected states, a porcelain background, and smooth animated tab indicators.

The reference displays both catalogs for visual completeness.

Implement both program sections and let the controls navigate or switch between the relevant catalogs.

Support direct URL access such as:

`/academics?level=shs`

`/academics?level=college`

### Section 03 — Senior High School Programs

Display a section introduction and four program cards.

Programs:

ABM — Accountancy, Business and Management.

ICT — Information and Communications Technology.

STEM — Science, Technology, Engineering and Mathematics.

HUMSS — Humanities and Social Sciences.

Each card must include:

- Gold line icon.
- Large program abbreviation.
- Full program name.
- Short descriptive overview.
- Learn More or Inquire Now action.

Suggested icons:

- ABM: ChartNoAxesCombined.
- ICT: Monitor.
- STEM: FlaskConical.
- HUMSS: UsersRound.

Styling:

- Light ivory cards.
- Thin sage or gold borders.
- Approximately 16px border radius.
- Subtle shadow.
- Consistent heights.
- Gold corner accents where appropriate.

Desktop arrangement:

Use the reference's introduction column beside four program cards when sufficient width is available.

Adapt to a balanced responsive grid on smaller screens.

### Section 04 — College Degree Programs

Use exactly these seven programs from the supplied brief:

1. BS Computer Science.
2. BS Information Technology.
3. Bachelor of Technical-Vocational Teacher Education.
4. BS Business Administration.
5. BS Accounting Information System.
6. BS Entrepreneurship.
7. BS Office Administration.

Create an elegant program grid with:

- Four cards in the first desktop row.
- Three balanced cards in the second desktop row.

Each card must contain:

- Relevant line icon.
- Program title.
- Short overview.
- Learn More action.
- Inquire Now action.

Do not invent tuition fees, official curriculum details, accreditation claims, or salary figures.

The Learn More action should open an accessible program details drawer or modal with available information.

The Inquire Now action should navigate to Contact with the program already selected.

### Section 05 — Learning Across Disciplines

Background:

Light sage.

Create an introduction column and three photographic department cards.

Departments:

- Computer Studies.
- Business Management.
- Teacher Education.

Use the provided educational photography.

Card structure:

- Upper image area.
- Lower porcelain content area.
- Gold icon.
- Dark green title.
- Short description.
- Optional subtle angled separator.

Use differentiated photography cropping.

### Section 06 — Program Comparison

Create a functional academic program comparison interface.

Allow visitors to select up to three programs.

Use dropdown selectors.

Display comparison rows:

- Program name.
- Department.
- Learning focus.
- Overview.

Use a dark green first column containing comparison labels.

Use alternating white and porcelain rows.

Table must remain usable on mobile through horizontal scrolling or stacked comparison cards.

Do not invent unsupported comparison details.

### Section 07 — Closing CTA

Dark green background.

Student portrait positioned toward the left.

Headline:

Find the Program That
Moves You Forward.

Use white typography with gold emphasis on Forward.

Buttons:

- Explore All Programs.
- Inquire Now.

Add subtle diagonal green and gold decorative elements.

Finish with the global footer.

---

# PAGE 04 — ADMISSIONS

## 17. ADMISSIONS IMPLEMENTATION

Reference:

`references/04-admissions-fullpage.png`

Route:

`/admissions`

Creative identity:

**THE GUIDED JOURNEY**

The page must feel encouraging, welcoming, and easy to follow.

### Section 01 — Admissions Journey Hero

Background:

Warm ivory and soft sage.

Create a three-part composition inspired by the reference.

Left:

Large student portrait:

`student-portrait.png`

Center:

Eyebrow:

THE GUIDED JOURNEY

Headline:

Your Next Chapter
Starts Here.

Use elegant Cormorant Garamond typography.

Supporting text:

Whether you're beginning Senior High School or advancing to college, ACTS Computer College is here to guide you toward your goals.

Primary button:

Start Your Journey.

Right:

Student group cutout:

`students-hero.png`

Decorative elements:

- Oversized translucent number.
- Sweeping gold path line.
- Soft sage curved shapes.
- Subtle depth.

The student portrait should be large and prominent without overwhelming the headline.

On mobile, adapt the composition into a readable stacked hero.

### Section 02 — Your Path to ACTS

Centered heading.

Create four connected numbered stages.

01 — Choose a Program.

02 — Prepare Your Documents.

03 — Contact the Admissions Office.

04 — Complete Enrollment.

Each stage contains:

- Oversized gold italic serif number.
- Green icon container.
- Heading.
- Concise description.

Use a connecting gold progress line or SVG path between the stages.

Card background:

Warm ivory or porcelain.

Border radius:

Approximately 24px.

Use the reference's gently elevated card styling.

Animate stages sequentially when they enter the viewport.

Mobile:

Use a vertical progression or stacked cards.

### Section 03 — Begin Your Senior High Journey

Create a two-column composition.

Left:

Large editorial heading.

Introduction.

Four compact program options in a two-by-two grid:

- ABM.
- ICT.
- STEM.
- HUMSS.

Include relevant icons and full strand names.

Button:

Inquire About Senior High.

Right:

`collaborative-learning.jpg`

Use a large photograph with an elegant curved border or gold edge accent.

### Section 04 — Take Your Next Step

Reverse the preceding arrangement.

Left:

`computer-learning.jpg`

Right:

Heading:

Take Your Next Step

Supporting description.

Display the seven approved college programs.

Use compact icon-and-text rows arranged in two columns.

Button:

Explore Programs.

Do not copy incorrectly generated program names from the reference image.

### Section 05 — Get Ready for Enrollment

Create a two-column information section.

Left panel:

Get Ready for Enrollment

Include a functional preparation checklist:

- Research your preferred program.
- Confirm applicable admission requirements.
- Ask about the current enrollment schedule.
- Prepare documents requested by the admissions office.
- Contact ACTS for clarification.

Features:

- Interactive checkboxes.
- Progress indicator.
- Reset checklist option if appropriate.
- Local storage persistence.
- Print Checklist button.
- Print-friendly CSS.

Clearly explain that this is suggested preparation, not the institution's official mandatory requirements.

Use a decorative clipboard icon or CSS illustration instead of requiring another photography asset.

### Section 06 — Frequently Asked Questions

Right panel beside the preparation checklist on desktop.

Create an accessible accordion.

Suggested questions:

- When can I apply for admission?
- What are the admission requirements?
- Can I shift to another program later on?
- Do you offer scholarships or financial assistance?
- How will I know if my enrollment is confirmed?

Use verified answers when provided.

Otherwise use careful general guidance encouraging visitors to contact the admissions office for confirmation.

Do not fabricate deadlines, admissions policies, or financial aid guarantees.

Animate accordion expansion smoothly.

Keep one item expanded initially to match the reference.

### Section 07 — We're Here to Help

Create a full-width dark green assistance panel.

Left:

Gold headset or MessageCircle icon.

Heading:

We're Here to Help

Supporting description.

Center:

School contact information.

Right:

Contact Admissions button.

Use warm green decorative curves and rounded outer corners.

Finish with the global footer.

---

# PAGE 05 — CAMPUS LIFE

## 18. CAMPUS LIFE IMPLEMENTATION

Reference:

`references/05-campus-life-fullpage.png`

Route:

`/campus-life`

Creative identity:

**THE VISUAL JOURNAL**

This is the most photographic and emotionally expressive page.

The design should resemble a modern editorial magazine about student life.

### Section 01 — Campus Community Hero

Use:

`campus-community.jpg`

As the dominant large photographic background.

Apply directional dark green overlays to make typography readable.

Use the reference's layered photographic storytelling.

Left:

Eyebrow:

THE VISUAL JOURNAL

Headline:

More Than a Campus.

A Community.

Use large white serif typography.

Use elegant champagne-gold Allura typography for A Community.

Supporting text:

Learn. Connect. Belong.

Add two smaller overlapping photographic frames:

- `collaborative-learning.jpg`
- `computer-learning.jpg`

Use thin white borders and subtle rotations to create editorial depth.

Keep the main student photography clearly visible.

Add a soft curved green overlay at the bottom of the hero.

Do not replace this with another simple split layout.

Mobile:

- Maintain readable headline contrast.
- Reduce the number of overlapping elements when necessary.
- Keep the main community photograph prominent.

### Section 02 — Campus Life Highlights

Use a large left-aligned heading with a thin green horizontal line.

Create four image-based cards.

1. Student Activities.
2. Learning Spaces.
3. Campus Community.
4. Student Development.

Use the provided photographic assets where relevant.

Where no authentic activity photography exists, use a relevant icon-based panel or clearly illustrative image crop.

Each card contains:

- Upper photograph.
- Lower content area.
- Green line icon.
- Heading.
- Short description.
- Small circular arrow.

Desktop: four columns.

Tablet: two columns.

Mobile: one or two columns.

### Section 03 — Spaces for Learning and Growth

Recreate the reference's asymmetrical bento photography layout.

Left:

Editorial heading.

Supporting paragraph describing learning, collaboration, and development.

Right:

Large computer laboratory photograph:

`computer-learning.jpg`

Two smaller stacked images:

- `collaborative-learning.jpg`
- `campus-exterior.jpg`

Use varied aspect ratios.

Use consistent rounded image corners.

The campus exterior must be identified as illustrative if it is not an actual official campus photograph.

### Section 04 — Moments at ACTS

Create a functional masonry-style gallery.

Heading:

Moments at ACTS

Filter controls:

- All Moments.
- Learning.
- Student Activities.
- Campus Spaces.
- Community.

Use the six provided photography assets when appropriate.

Use authentic school photographs if additionally supplied.

Do not create gallery entries that depend on unavailable photography.

Do not present fictional activities or facilities as documented events.

Gallery layout:

- Varied image sizes.
- Asymmetrical grid arrangement.
- Large portrait-oriented tile.
- Landscape tiles.
- Different crop ratios.
- Rounded corners.
- Balanced whitespace.

Implement filters using categorized data.

Animate layout changes using Motion.

Clicking an image should open an accessible lightbox.

Lightbox features:

- Image preview.
- Next and previous navigation.
- Close button.
- Keyboard support.
- Escape dismissal.
- Appropriate image description.

### Section 05 — Growing Together

Light-background editorial section.

Left:

Heading:

Growing Together

Short community-centered paragraph.

Right:

Five compact icon features:

- Collaboration.
- Learning.
- Respect.
- Character.
- Belonging.

Suggested icons:

- Handshake.
- BookOpen.
- ShieldCheck.
- Sprout.
- UsersRound.

Use vertical separators where appropriate.

Avoid unnecessary heavy cards.

### Section 06 — Closing CTA

Use a panoramic dark green campus-community composition.

Headline:

Be Part of
Something Bigger.

Use large elegant white typography.

Button:

Explore Admissions.

Use subtle photography overlays and green gradients.

Finish with the global footer.

---

# PAGE 06 — CONTACT

## 19. CONTACT IMPLEMENTATION

Reference:

`references/06-contact-fullpage.png`

Route:

`/contact`

Creative identity:

**THE PERSONAL CONNECTION**

This should be the cleanest, most practical page while preserving the premium visual identity.

### Section 01 — Contact Hero

Use a compact editorial hero.

Left:

Eyebrow:

THE PERSONAL CONNECTION

Headline:

We'd Love to
Hear From You.

Use dark green Cormorant Garamond.

Use elegant dark green Allura typography for Hear From You.

Add a curved gold underline.

Right:

Use a composition containing:

- `students-hero.png`
- `campus-exterior.jpg`

Use layered green curves at the bottom.

Maintain a more compact height than the homepage hero.

Suggested desktop height:

Approximately 400–520px.

If an authentic campus image is unavailable, use the exterior as a clearly identified illustrative asset or use an abstract architectural treatment.

### Section 02 — Contact Information and Inquiry Form

Create a two-column layout.

Left column:

Approximately 40% width.

Right column:

Approximately 60% width.

#### Contact information

Heading:

ACTS Computer College

Display four contact rows.

Email:

actscc87@yahoo.com

Landline:

(049) 501-1484

Mobile:

09988526488

09178673073

Address:

EGK Building, corner A. Bonifacio Street and Pedro Guevara Avenue, Santa Cruz, Laguna 4009, Philippines.

Use soft sage rounded icon containers.

Icons:

- Mail.
- Phone.
- Smartphone.
- MapPin.

Separate contact rows with subtle borders.

Email and telephone numbers must be clickable.

#### Inquiry form

Create a large refined porcelain or white card.

Heading:

Send Us an Inquiry

Supporting text:

Have a question about our programs, admissions, or other services? Fill out the form below, and we'll prepare an email for you.

Fields:

- Full Name.
- Email Address.
- Phone Number.
- Inquiry Type.
- Program of Interest.
- Message.

Inquiry Type options:

- General Inquiry.
- Senior High School Admissions.
- College Admissions.
- Academic Programs.
- Enrollment.
- Scholarships and Financial Assistance.
- Other.

Program of Interest options must use the approved program list.

Features:

- Accessible labels.
- Required-field indicators.
- Input validation.
- Email validation.
- Inline error messages.
- Clearly visible focus states.
- Responsive form layout.
- Preselected program from URL parameters.

Primary button:

Prepare Inquiry Email.

Secondary button:

Copy Inquiry.

### Frontend-only inquiry behavior

The Prepare Inquiry Email button must:

1. Validate required fields.
2. Generate a properly formatted email subject.
3. Generate a readable email body containing the visitor's supplied information.
4. Open a `mailto:` link addressed to actscc87@yahoo.com.
5. Inform the visitor that the email must still be sent through their email application.

The Copy Inquiry button must:

1. Validate the form.
2. Generate the same formatted inquiry.
3. Copy it to the clipboard.
4. Display an appropriate confirmation when copying succeeds.
5. Provide a fallback when clipboard access is unavailable.

Do not display misleading messages claiming the school successfully received the inquiry.

An appropriate message is:

Your inquiry is prepared. Please send it through your email application.

Include an informational panel explaining the frontend-only behavior.

### Section 03 — Find Us in Santa Cruz, Laguna

Create a compact location section.

Left:

Heading:

Find Us in Santa Cruz, Laguna

Display a verified map embed if available.

Otherwise display a clearly identified map placeholder.

Do not invent an accurate-looking street map.

Button:

Get Directions.

The button should open Google Maps with the verified school address as the destination.

### Section 04 — Connect With ACTS

Place this section beside the map area on desktop.

Heading:

Connect With ACTS

Supporting text about announcements, campus activities, and information.

Display elegant social panels:

Facebook:

- Blue platform accent.
- Platform icon.
- Follow Us on Facebook.
- External link icon.

YouTube:

- Red platform accent.
- Platform icon.
- Watch Us on YouTube.
- External link icon.

Use verified social-media URLs if available.

Clearly identify unavailable links during development rather than creating fake destinations.

### Section 05 — Closing CTA

Create a dark green and gold closing composition.

Left:

`student-portrait.png`

Right:

Headline:

Every Great Journey Starts
With a Conversation.

Highlight Conversation in gold Allura cursive typography.

Supporting copy:

Reach out today and let's talk about your goals, your options, and how ACTS Computer College can be part of your next chapter.

Use a subtle vertical gold divider and organic green background shapes.

Finish with the global footer.

---

## 20. PHOTOGRAPHY ASSET PLACEMENT

Use the following definitive photography mapping.

### B01 — students-hero.png

Transparent portrait asset.

Use in:

- Discover hero.
- Our Story hero.
- Academics hero.
- Admissions hero.
- Contact hero.
- Selected closing CTA compositions.

Use `object-fit: contain`.

Do not place it inside an opaque rectangle.

### B02 — student-portrait.png

Transparent portrait asset.

Use in:

- Admissions hero.
- Academics closing CTA.
- Our Story closing CTA.
- Contact closing CTA.

Use `object-fit: contain`.

### B03 — computer-learning.jpg

Landscape educational photograph.

Use in:

- Discover academic pathways.
- Discover carousel.
- Academics hero.
- Computer Studies.
- Admissions college section.
- Campus Life learning spaces.
- Campus gallery.

Use `object-fit: cover`.

### B04 — collaborative-learning.jpg

Landscape educational photograph.

Use in:

- Discover Senior High School pathway.
- Education With Purpose.
- Academics hero.
- Business and education sections.
- Admissions Senior High section.
- Campus Life photo collage.
- Campus gallery.

Use `object-fit: cover`.

### B05 — campus-community.jpg

Landscape educational photograph.

Use in:

- Campus Life hero.
- Discover photography carousel.
- Campus community sections.
- Closing CTA backgrounds.
- Campus gallery.

Use `object-fit: cover`.

### B06 — campus-exterior.jpg

Landscape architectural asset.

Use in:

- Our Story heritage hero.
- Contact hero.
- Campus Life architecture section.
- Campus gallery.

Clearly identify it as illustrative if no authentic ACTS building reference was used.

Do not present fictional imagery as official institutional documentation.

### Photography reuse rules

When reusing photography:

- Change crop ratios.
- Change object position.
- Use different masks.
- Vary image container sizes.
- Apply selective overlays.
- Use different framing treatments.

Avoid displaying the same photograph in exactly the same proportions in consecutive sections.

---

## 21. DECORATIVE GRAPHICS

Recreate the decorative elements seen throughout the reference images using CSS and SVG.

Required design elements include:

- Flowing organic green waves.
- Thin sweeping gold curves.
- Elegant horizontal divider lines.
- Architectural geometric shapes.
- Angled image masks.
- Overlapping editorial frames.
- Subtle leaf-inspired line art.
- Large translucent numerical typography.
- Layered gradient backgrounds.
- Decorative quotation marks.
- Soft image fade effects.

Use SVG paths and CSS pseudo-elements.

Do not create unnecessary raster images for simple decorative elements.

Decorative shapes must not:

- Cover important text.
- Obstruct buttons.
- Interfere with pointer interactions.
- Cause horizontal overflow.
- Reduce accessibility.
- Create excessive motion.

Mark purely decorative SVG elements as hidden from assistive technology.

---

## 22. ANIMATION AND MOTION SYSTEM

The website must have noticeable, sophisticated, polished animations.

Do not create a website where everything is completely static.

Use Motion for React.

### Hero entrance

Sequence:

1. Eyebrow label.
2. Main serif headline.
3. Cursive accent.
4. Supporting paragraph.
5. CTA buttons.
6. Photography.
7. Decorative composition.

Suggested duration:

700–1200ms for the full sequence.

Use staggered timing.

### Section entrance

When sections enter the viewport:

- Fade from opacity 0 to 1.
- Translate from approximately 20–32px below.
- Use smooth easing.
- Trigger once where appropriate.

Duration:

450–750ms.

### Photography reveals

Use:

- Clip-path reveal.
- Controlled image scaling.
- Subtle directional animation.

Do not animate photographs excessively.

### Image hover

Scale to approximately 1.03–1.06.

Use overflow-hidden containers.

### Page transitions

Use:

- Soft opacity transition.
- Small vertical translation.
- Smooth content entrance.

Duration:

300–500ms.

Avoid delaying access to page content.

### Timeline animation

Animate the gold progress line and timeline milestones as visitors scroll.

### Navigation animation

- Smooth sticky header compression.
- Animated active item.
- Mobile menu transitions.
- Refined CTA hover.

### Interactive component animation

Include:

- Academic tab transitions.
- Program modal entrance.
- FAQ expansion.
- Gallery filtering.
- Lightbox entrance.
- Checklist interactions.
- Carousel transitions.

### Parallax

Use restrained photography parallax on appropriate hero sections.

Limit movement to approximately 15–35px when reasonable.

Do not create excessive scroll effects.

### Accessibility

Respect `prefers-reduced-motion`.

Visitors who prefer reduced motion must receive a fully functional experience with minimal or no nonessential animation.

Do not implement scroll hijacking.

Do not interfere with natural browser scrolling.

---

## 23. RESPONSIVE DESIGN REQUIREMENTS

Support the following viewport widths:

- 1920px.
- 1440px.
- 1280px.
- 1024px.
- 768px.
- 430px.
- 390px.
- 375px.
- 320px.

Maintain the reference designs as closely as possible on desktop.

Adapt the composition intelligently for smaller screens.

### Mobile rules

- No horizontal page overflow.
- No clipped headings.
- No overlapping interactive elements.
- No unreadably small typography.
- No distorted student photographs.
- No fixed desktop widths.
- No oversized blank spaces.
- No inaccessible carousels.
- No broken program comparison layouts.

Use fluid CSS sizing and responsive grid systems.

Do not simply shrink the desktop design.

Create deliberate mobile adaptations for each unique page composition.

---

## 24. FUNCTIONAL REQUIREMENTS

All visible interactive elements must perform their intended actions.

Implement:

- Functional global navigation.
- Mobile navigation.
- Active route highlighting.
- Scroll restoration on navigation.
- Academic category selection.
- Program details.
- Program inquiry shortcuts.
- Program comparison.
- Personnel search and filtering.
- Enrollment checklist.
- Checklist persistence.
- Printable checklist.
- FAQ accordion.
- Photography carousel.
- Gallery filtering.
- Gallery lightbox.
- Contact form validation.
- Prepared inquiry email.
- Copy inquiry.
- Clickable telephone numbers.
- Clickable email addresses.
- External map directions.
- Verified social links.
- Accessible error and empty states.

Do not leave visible buttons that do nothing.

Do not use `href="#"` as a substitute for functionality.

When an external destination is not supplied, handle it explicitly instead of inventing a URL.

---

## 25. RECOMMENDED SOURCE CODE ARCHITECTURE

Organize the project using a maintainable structure similar to:

```
src/
│
├── app/
│   ├── App.tsx
│   └── router.tsx
│
├── assets/
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileNavigation.tsx
│   │   ├── Footer.tsx
│   │   └── PageLayout.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Container.tsx
│   │   ├── IconFeature.tsx
│   │   ├── ImageCard.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── Accordion.tsx
│   │   ├── Modal.tsx
│   │   ├── Carousel.tsx
│   │   ├── Tabs.tsx
│   │   ├── EmptyState.tsx
│   │   └── FormField.tsx
│   │
│   ├── decorative/
│   │   ├── OrganicWave.tsx
│   │   ├── GoldCurve.tsx
│   │   ├── GeometricAccent.tsx
│   │   └── DecorativeFrame.tsx
│   │
│   └── motion/
│       ├── Reveal.tsx
│       ├── StaggerGroup.tsx
│       ├── ImageReveal.tsx
│       └── PageTransition.tsx
│
├── pages/
│   ├── discover/
│   │   ├── DiscoverPage.tsx
│   │   └── sections/
│   ├── our-story/
│   │   ├── OurStoryPage.tsx
│   │   └── sections/
│   ├── academics/
│   │   ├── AcademicsPage.tsx
│   │   └── sections/
│   ├── admissions/
│   │   ├── AdmissionsPage.tsx
│   │   └── sections/
│   ├── campus-life/
│   │   ├── CampusLifePage.tsx
│   │   └── sections/
│   └── contact/
│       ├── ContactPage.tsx
│       └── sections/
│
├── data/
│   ├── institution.ts
│   ├── navigation.ts
│   ├── programs.ts
│   ├── departments.ts
│   ├── history.ts
│   ├── coreValues.ts
│   ├── personnel.ts
│   ├── admissions.ts
│   ├── gallery.ts
│   └── assets.ts
│
├── hooks/
│   ├── useScrollPosition.ts
│   ├── useLocalStorage.ts
│   └── useReducedMotion.ts
│
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   ├── typography.css
│   ├── animations.css
│   └── print.css
│
├── types/
│   └── index.ts
│
├── utils/
│   ├── inquiry.ts
│   ├── validation.ts
│   └── navigation.ts
│
└── main.tsx
```

Adapt to the existing project structure if one already exists.

Do not unnecessarily destroy working code.

Avoid oversized components containing entire pages.

Keep sections individually maintainable.

Centralize institutional information so changes automatically propagate to every page.

---

## 26. ROUTING

Implement these routes:

```
/                 Discover
/our-story        Our Story
/academics        Academics
/admissions       Admissions
/campus-life      Campus Life
/contact          Contact
```

Support query parameters for academic and inquiry navigation.

Examples:

```
/academics?level=shs
/academics?level=college
/contact?program=bs-information-technology
/contact?type=admissions
```

Include a branded 404 page.

Ensure direct route loading and refresh work when deployed to static hosting with appropriate SPA fallback configuration.

---

## 27. SEO AND METADATA

Create page-specific titles and descriptions.

Suggested titles:

- ACTS Computer College | Discover Your Future
- Our Story | ACTS Computer College
- Academic Programs | ACTS Computer College
- Admissions | ACTS Computer College
- Campus Life | ACTS Computer College
- Contact Us | ACTS Computer College

Implement:

- Descriptive meta descriptions.
- Semantic headings.
- Proper image alt text.
- Open Graph metadata where feasible.
- Favicon using the official logo if supplied.
- Appropriate canonical URLs once the production domain is known.
- Sitemap and robots configuration when the production URL is available.

Do not invent a production domain.

Use one meaningful H1 per page.

---

## 28. ACCESSIBILITY REQUIREMENTS

Aim for WCAG 2.2 AA compatibility.

Implement:

- Semantic HTML.
- Keyboard navigation.
- Visible focus indicators.
- Accessible mobile menus.
- Accessible modals.
- Accessible accordion controls.
- Proper form labels.
- Appropriate ARIA attributes.
- Accessible carousel controls.
- Sufficient text contrast.
- Descriptive image alternatives.
- Skip-to-content navigation.
- Reduced-motion support.
- Accessible touch targets.

Gold typography on light backgrounds must be checked for contrast.

Do not rely only on color to communicate interactive states.

---

## 29. PERFORMANCE OPTIMIZATION

The website must feel fast and smooth.

Requirements:

- Lazy-load below-the-fold images.
- Prioritize important hero imagery.
- Provide image dimensions or aspect ratios.
- Prevent cumulative layout shifts.
- Optimize image sizes.
- Preserve transparency where required.
- Use optimized WebP or AVIF derivatives where beneficial.
- Keep original source assets available.
- Avoid unnecessary animation dependencies.
- Avoid unnecessary re-renders.
- Use appropriate route-level code splitting.
- Avoid loading large assets that are never displayed.
- Use CSS and SVG instead of raster decorations.

Do not sacrifice visual quality unnecessarily.

---

## 30. CONTENT ACCURACY

Use the institutional information explicitly supplied in the project brief.

Verify consistency across all pages.

Do not invent:

- Tuition fees.
- Faculty identities.
- School awards.
- Accreditation claims.
- Official requirements.
- Enrollment dates.
- Scholarship eligibility.
- Employment rates.
- Official facilities.
- Institutional statements.
- Historical events.
- Social-media usernames.

Clearly identify information that remains pending verification.

The student photographs are fictional promotional models, not verified photos of enrolled ACTS students.

The generated campus architecture is illustrative unless based on an approved authentic photograph.

Do not misrepresent either as documentary photography.

---

## 31. MANDATORY VISUAL COMPARISON WORKFLOW

Do not consider implementation complete immediately after writing the code.

You must compare the actual rendered website against the provided design references.

### Step 1 — Analyze

Inspect each full-page mockup.

Identify:

- Hero proportions.
- Section arrangement.
- Heading hierarchy.
- Background transitions.
- Photography placements.
- Decorative shapes.
- Component appearance.
- Footer proportions.

### Step 2 — Implement

Build the global design system.

Implement shared components.

Build all six pages individually.

### Step 3 — Run

Start the local development server.

Verify that all routes are accessible.

### Step 4 — Browser screenshots

If browser automation or screenshot tooling is available, capture every page at 1440px desktop width.

Also capture mobile screenshots at 390px.

Save screenshots to a development-only review directory if appropriate.

### Step 5 — Compare

Compare rendered screenshots against the corresponding reference images section by section.

Check:

- Overall composition.
- Heading position.
- Relative text sizes.
- Font styles.
- Image cropping.
- Color accuracy.
- Section order.
- Card styling.
- Decorative element placement.
- Navigation.
- Footer.
- Visual balance.

### Step 6 — Refine

If the implementation differs significantly from the reference:

- Adjust layouts.
- Correct image dimensions.
- Refine CSS.
- Adjust spacing.
- Correct typography.
- Improve decorative elements.
- Fix visual inconsistencies.

Repeat screenshot comparison where possible until the implementation closely matches the supplied references.

Do not claim pixel-perfect reproduction unless it has actually been verified.

If browser automation is unavailable, perform the strongest available visual and code review and disclose that limitation.

---

## 32. TESTING REQUIREMENTS

Before declaring completion, test:

### Build

```
npm run build
```

### Linting

Run the configured lint command.

### TypeScript

Run the project TypeScript type checks.

### Navigation

- All six page routes.
- Direct route refresh.
- Mobile menu.
- Active navigation states.
- CTA destinations.

### Academics

- Senior High School selection.
- College program selection.
- All eleven program entries.
- Program detail dialogs.
- Program comparison.
- Inquiry program preselection.

### Our Story

- Personnel filtering.
- Personnel search.
- Responsive timeline.
- Placeholder handling.

### Admissions

- Checklist interactions.
- Local storage persistence.
- Print behavior.
- FAQ accordion.

### Campus Life

- Carousel.
- Gallery filters.
- Gallery lightbox.
- Keyboard interactions.

### Contact

- Invalid form submission.
- Valid form preparation.
- Email formatting.
- Clipboard copying.
- Program preselection.
- Contact links.

### Responsive behavior

Test desktop, tablet, and mobile.

### Browser quality

Check for:

- Console errors.
- Missing assets.
- Broken URLs.
- Overflow.
- Layout shifts.
- Incorrect text contrast.
- Broken animations.

Fix all identified implementation issues where possible.

---

## 33. DEFINITION OF DONE

The website is complete only when:

- All six pages are implemented.
- Every required page section is present.
- The visual designs closely match the corresponding references.
- Each hero has its own distinct composition.
- All pages use a consistent design system.
- All six photography assets are integrated appropriately or accurately substituted where an asset is unavailable.
- Serif and cursive typography are used correctly.
- Green, gold, and porcelain styling is consistent.
- Navigation works.
- Mobile navigation works.
- Program interactions work.
- The enrollment checklist works.
- FAQ interactions work.
- Gallery interactions work.
- Contact form preparation works.
- All pages are responsive.
- The website has polished animations.
- Accessibility requirements are addressed.
- TypeScript checks pass.
- Production build succeeds.
- No known critical console errors remain.
- No misleading institutional claims are introduced.

---

## 34. FINAL EXECUTION INSTRUCTIONS

Begin implementation immediately.

Do not ask me to choose a different design.

Do not generate another design concept.

Do not change the approved visual direction.

Do not replace the provided reference images with unrelated inspiration.

Do not implement only the homepage.

Do not stop after creating the folder structure.

Do not leave the remaining pages unfinished.

Do not use generic templates.

Do not merely describe what you would build.

Directly create, modify, and organize the necessary project files.

Use your available skills and browser tools to inspect and verify the work.

Prioritize visual fidelity to each supplied page reference.

The objective is to transform the six provided website mockups into a real, polished, interactive React website.

When completed, provide a concise implementation report containing:

- Completed pages.
- Implemented features.
- Actual files created or modified.
- Build and testing results.
- Visual comparison results.
- Remaining content or asset placeholders.
- Any limitations that prevented exact reproduction.
- Instructions to run the website.

**FINAL GOAL:**

Deliver a premium, professional, modern, cinematic, fully responsive ACTS Computer College website that faithfully recreates the six supplied full-page designs, with complete functionality appropriate for a frontend-only implementation.

BEGIN DEVELOPMENT NOW.