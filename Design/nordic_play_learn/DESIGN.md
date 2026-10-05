---
name: Nordic Play & Learn
colors:
  surface: '#f9f9ff'
  surface-dim: '#ccdaf9'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#dfe8ff'
  surface-container-highest: '#d6e3ff'
  on-surface: '#0d1c33'
  on-surface-variant: '#414753'
  inverse-surface: '#233149'
  inverse-on-surface: '#ecf0ff'
  outline: '#727784'
  outline-variant: '#c1c6d5'
  surface-tint: '#005db8'
  primary: '#005db8'
  on-primary: '#ffffff'
  primary-container: '#4d96ff'
  on-primary-container: '#002e61'
  inverse-primary: '#a9c7ff'
  secondary: '#006e29'
  on-secondary: '#ffffff'
  secondary-container: '#93f59c'
  on-secondary-container: '#00732b'
  tertiary: '#7c5800'
  on-tertiary: '#ffffff'
  tertiary-container: '#c48d00'
  on-tertiary-container: '#402c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#96f89f'
  secondary-fixed-dim: '#7bdb85'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#00531d'
  tertiary-fixed: '#ffdea8'
  tertiary-fixed-dim: '#ffba20'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#f9f9ff'
  on-background: '#0d1c33'
  surface-variant: '#d6e3ff'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '800'
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.625rem
    fontWeight: '700'
    lineHeight: 2.125rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 2rem
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '700'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: 1.125rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system crafts a refined, Scandinavian-inspired educational ecosystem tailored to dual audiences: young learners (ages 4–10) exploring through intuitive flashcards and parents/educators tracking growth with calm, distraction-free clarity. 

The aesthetic merges clean, airy Nordic minimalism with cheerful, tactile energy. Rather than chaotic sensory overload, the interface relies on deliberate structure, open white space, crisp sky-blue anchors, and energetic botanical accents (warm amber, fresh mint, soft lilac). The resulting experience feels organized and reassuring for parents while remaining tactile, delightful, and immediately rewarding for children's fingertips.

Interactive surfaces evoke physical wooden flashcards and rounded building blocks—featuring subtle tactile bevels, gentle dimensionality, and deliberate contrast to prevent cognitive fatigue.

## Colors

The palette is engineered to meet strict accessibility standards while conveying warmth, clarity, and playful discovery:

- **Primary (`#4D96FF` - Crisp Sky Blue):** The foundational brand color used for key interactive pathways, core progress milestones, and hero buttons. Represents focus, calm skies, and trust.
- **Secondary (`#6BCB77` - Fresh Mint):** Signals success, correct answers, completed learning streaks, and positive reinforcement.
- **Tertiary (`#FFB800` - Warm Sunburst):** Accent tone for rewards, stars, gamified achievements, and exploration prompts. Paired with secondary amber-orange (`#FF8C42`) for active tactile moments.
- **Neutral (`#24324A` - Deep Nordic Navy):** Replaces harsh black to yield readable, high-contrast typography that remains soft on developing eyes.
- **Surface Canvas (`#F8FAFC` to `#FFFFFF`):** Luminous, ultra-clean surfaces that allow educational artwork and flashcard imagery to remain the focal point.

## Typography

The typography pairs **Plus Jakarta Sans** for expressive, geometric headers and active UI anchors with **Be Vietnam Pro** for legible, warm body text.

- **Plus Jakarta Sans:** Selected for its open apertures, rounded terminals, and friendly rhythm. Headings feel welcoming and cheerful without veering into juvenile illegibility.
- **Be Vietnam Pro:** Provides exceptional legibility for emergent readers. Its clean x-height, clear letter differentiation, and modern proportions make parent dashboards and flashcard prompts easy to scan.
- **Hierarchy Rules:** Flashcard prompts and child-facing counters leverage bold, punchy scale (`headline-lg` / `display`). Parental metrics, sub-labels, and auxiliary tips utilize structured weights (`body-md` / `label-sm`) with generous line-heights to avoid visual density.

## Layout & Spacing

The layout is built upon an 8pt base grid optimized for mobile ergonomics and one-handed thumb interaction, scaling smoothly to tablets and desktop parent dashboards.

- **Mobile Viewport (360px – 599px):** 4-column layout with `1.25rem` outer margins. All primary actions, audio replay triggers, and next/prev controls sit within the lower thumb reach zone.
- **Tablet / Co-learning Viewport (600px – 1023px):** 8-column fluid grid with `1.5rem` gutters, offering side-by-side flashcard prompts and dual-touch interaction points for parent-child guided sessions.
- **Desktop / Educator Hub (1024px+):** 12-column structured grid centered at a max width of 1200px, organizing administrative analytics, curriculum builders, and deck selectors into clean functional panels.
- **Touch Ergonomics:** Child-facing tap targets enforce an absolute minimum physical height of `56px` (`min-h-14`) with a minimum inter-element gap of `space-md` (`1rem`) to eliminate accidental miss-taps by developing motor skills.

## Elevation & Depth

Depth in this system bridges tactile physical toys and Scandinavian digital clarity through a combination of crisp tonal layering and subtle 3D pop borders:

- **Tactile Card Depth ("Pop Style"):** Interactive flashcards and primary interactive buttons do not use dark, muddy dropshadows. Instead, depth is conveyed through a crisp, downward physical lip—implemented via an offset border (`border-b-4` or `border-b-[6px]`) colored 15–20% deeper than the face surface.
- **Active / Pressed States:** On touch or click, components translate vertically down (`translate-y-1`) while their bottom border compresses, simulating a tangible physical key press.
- **Ambient Floating Layers:** Modals, overlays, and celebration drawers utilize an airy, extra-diffused tint: `0 12px 32px -4px rgba(36, 50, 74, 0.08)`. This keeps surfaces clean, luminous, and floating naturally above the background.
- **Parental Controls & System Trays:** Use flat, quiet low-contrast borders (`1.5px solid #E2E8F0`) with zero drop shadow to cleanly separate administrative utility from playful learning surfaces.

## Shapes

The shape system employs consistent curves based on level `2` roundedness (`0.5rem` base, scaling to `1rem` on cards and `1.5rem` on prominent components):

- **Flashcards & Modules:** Styled with generous radius (`1.5rem` / `rounded-2xl` to `rounded-3xl` for hero elements) to create a gentle, organic silhouette that feels friendly and safe.
- **Action Buttons & Chips:** Standard interactive buttons feature soft pill or heavily rounded corners (`1rem` to `9999px` full-pill), providing an approachable geometry that feels like polished river stones or wooden tokens.
- **Input Fields & Modal Dialogs:** Anchored at `1rem` corner radii, ensuring cohesion across both the child-facing interface and parental settings panels.

## Components

### 1. Flashcards (Interactive Learning Hub)
- **Visuals:** Pure white face (`#FFFFFF`) with a subtle `2px` perimeter border (`#E2E8F0`) and an offset bottom edge (`border-b-4 #CBD5E1`).
- **Dimensions:** Sized to fill 85% of mobile viewport height in single-card focus mode.
- **Flipping & Interactivity:** 3D flip animation around the Y-axis. Features an embedded large audio pronunciation badge (pill-shaped, primary sky-blue background) in the top-right corner.
- **Correct/Incorrect States:** Rapid flash transition to Mint (`#6BCB77`) with a celebratory bounce for correct answers, or soft Coral-Orange (`#FF8C42`) with a gentle shake for retry states.

### 2. Buttons
- **Primary Play Button:** Sky Blue (`#4D96FF`) with deep blue bottom offset (`#2B73DB`, `border-b-4`). Text set in `label-lg`, white, uppercase tracking. Minimum height of `3.5rem` (`56px`).
- **Success / Action Button:** Fresh Mint (`#6BCB77`) face with `#4EA85A` bottom rim.
- **Reward / Bonus Button:** Sunburst Yellow (`#FFB800`) face with `#D99B00` bottom rim.
- **Parent Dashboard / Ghost Button:** Transparent background, `2px` border in `#E2E8F0`, deep navy text (`#24324A`), flattening to `#F1F5F9` on hover.

### 3. Selection Chips & Category Filters
- Compact horizontal scroll track with `space-sm` gaps.
- Inactive state: Soft sky tint (`#F0F6FF`), navy text, borderless.
- Active state: Saturated sky blue (`#4D96FF`) with white text and an embedded count badge.

### 4. Progress Bars & Streak Trackers
- Track: Soft slate-gray (`#EDF2F7`) with full-pill roundedness.
- Fill: Mint-to-Blue vibrant gradient or solid Mint (`#6BCB77`) with animated star nodes indicating milestone questions.
- Height: `1rem` (`16px`) for kid sessions; slim `0.5rem` (`8px`) for parent analytics.

### 5. Parent Gate / Security Gate Modal
- Prevents unsupervised exits from the child zone.
- Minimalist card surface requiring a 3-second hold or simple multiplication/word verification puzzle.
- Designed with clear, mature typography (`Plus Jakarta Sans`, neutral navy tone) to distinctly cue parental context.

### 6. Inputs & Audio Controls
- Text Inputs: Clean white containers with `1.5px` border (`#CBD5E1`), focusing to Sky Blue (`#4D96FF`) with a soft focus ring (`0 0 0 4px rgba(77, 150, 255, 0.2)`).
- Touch Audio Toggle: Extra-large floating circle (`64px x 64px`) with a high-contrast speaker icon, featuring tactile physical depression feedback on every touch.