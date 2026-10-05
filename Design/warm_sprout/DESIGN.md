---
name: Warm Sprout
colors:
  surface: '#fff9e9'
  surface-dim: '#e8dc8c'
  surface-bright: '#fff9e9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff5bc'
  surface-container: '#fcf09e'
  surface-container-high: '#f7ea99'
  surface-container-highest: '#f1e494'
  on-surface: '#201c00'
  on-surface-variant: '#44483e'
  inverse-surface: '#373100'
  inverse-on-surface: '#fff2a3'
  outline: '#74796d'
  outline-variant: '#c4c8bb'
  surface-tint: '#4a6635'
  primary: '#4a6635'
  on-primary: '#ffffff'
  primary-container: '#7d9c65'
  on-primary-container: '#183206'
  inverse-primary: '#b0d095'
  secondary: '#934b00'
  on-secondary: '#ffffff'
  secondary-container: '#fe9b4b'
  on-secondary-container: '#6e3600'
  tertiary: '#af2e2f'
  on-tertiary: '#ffffff'
  tertiary-container: '#f6625e'
  on-tertiary-container: '#600009'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbedaf'
  primary-fixed-dim: '#b0d095'
  on-primary-fixed: '#0a2000'
  on-primary-fixed-variant: '#334e20'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb782'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#703800'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#8d141b'
  background: '#fff9e9'
  on-background: '#201c00'
  surface-variant: '#f1e494'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: 0em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-sm: 0.75rem
  gutter-lg: 1.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system expresses a safe, nurturing, and joyful world crafted specifically for young learners and their caregivers. Rooted in tactile, organic play and gentle picture-book warmth, the interface moves away from cold, hyper-saturated digital aesthetics in favor of a comforting, sunny environment. 

The aesthetic blends soft tactile playfulness with clean modern accessibility. Rounded pill silhouettes, organic proportions, and soft dimensional cushioning evoke felt boards, wooden toys, and sunlit playrooms. The emotional response is instantly welcoming, calm, and reassuring—free of visual friction, sharp edges, or over-stimulating contrast, while maintaining vibrant warmth and unmistakable clarity for growing hands and minds.

## Colors

The palette is anchored by the natural tranquility of Sage Olive Green and grounded in the sunny comfort of Butter Yellow. Color is treated functionally to guide child exploration with intuitive visual cues.

- **Primary (`#7D9C65`)**: Sage Olive Green represents growth, calm focus, success states, completed tasks, and safe navigation touchpoints.
- **Secondary (`#FF9C4C`)**: Warm Tangerine Orange drives spontaneous discovery, core action buttons (CTAs), achievement stars, and joyful interaction affordances.
- **Tertiary (`#B93636`)**: Terracotta Red provides warm visual weight for gentle alerts, attention badges, and important actions without resorting to harsh, alarming crimson.
- **Background & Canvas (`#FFF2A0`)**: Soft Butter Yellow envelops the entire canvas, banishing sterile stark-white screens in favor of an inviting, soft daylight backdrop.
- **Surfaces & Containers**: Layered upon the yellow canvas using creamy, high-legibility card surfaces:
  - Surface High: `#FFFDF0` (pure cream for crisp content focus and reading cards)
  - Surface Mid: `#FFFBEA` (standard container background)
  - Surface Low: `#FFF9D2` (warm recessed areas, dividers, and subtle groupings)
- **Text & Deep Neutrals**: `#2D2319` and `#33261D` replace harsh digital black with deep roasted cocoa tones, preserving AA/AAA contrast ratios while ensuring reading feels warm and soft on young eyes.

## Typography

Plus Jakarta Sans is utilized across all typographic roles. Its friendly geometric curves, broad counters, and balanced x-height offer immediate readability for early readers and effortless scanning for parents.

Weights are weighted intentionally heavier (Medium 500 as standard body baseline, Bold 700 for headings and interactive targets) to maintain crisp character definition against pastel tinted containers. Generous line heights prevent optical fatigue during interactive story sessions or step-by-step playful instructions.

## Layout & Spacing

The layout philosophy uses an adaptive fluid grid structured around relaxed margins and comfortable target regions that accommodate touch exploration by younger children.

- **Mobile Viewports (<640px)**: 4-column layout with `margin-mobile` (16px) and `gutter-sm` (12px). Interactive tap targets enforce a minimum height of 48px to prevent accidental taps.
- **Tablet & Mid-tier Viewports (640px - 1024px)**: 8-column layout with `margin` (24px) and `gutter` (20px). Supports side-by-side playful split cards and exploratory browsing grids.
- **Desktop & Widescreen (>1024px)**: 12-column layout capped at a maximum content bounding box of 1200px, utilizing `margin-desktop` (40px) and `gutter-lg` (28px).

Vertical rhythm follows a relaxed scale where component breathing room (`space-md` to `space-lg`) prevents cognitive overload, ensuring each screen presents a clear, digestible set of activities.

## Elevation & Depth

Visual depth avoids sterile drop shadows and dramatic drop-offs. Instead, it relies on a tactile "cushioned paper" aesthetic combining soft tonal layering and warm, diffuse ambient undertones.

- **Tonal Stacking**: The canvas (`#FFF2A0`) holds floating primary containers in `#FFFBEA` and focused cards in `#FFFDF0`. This provides natural distinction without high-contrast outlines.
- **Warm Ambient Shadows**: Shadows are cast using a warm Umber tint (`rgba(61, 46, 23, 0.08)`) with wide dispersion radii rather than cold grey values. This makes cards look physically soft, like felted board cutouts placed on a light wood surface.
- **Tactile Depth (Active Press States)**: Interactive elements like primary and secondary buttons feature a subtle 3D foot-edge (a 3px to 4px lower inset or solid darker base tone like `#64804E` for sage or `#E07E2E` for tangerine). On press, buttons depress smoothly downward by 2px with an immediate bounce response, giving immediate physical feedback to children.

## Shapes

The design system adopts Level 3 (Pill-shaped) geometry, embracing wide curves, friendly pill containers, and safe, rounded enclosures. 

Corners on interactive controls, inputs, and badges are fully rounded pills. Surface cards and dialogs use generous 2rem to 3rem (`rounded-lg` / `rounded-xl`) radiuses. Sharp right angles are strictly eliminated from interactive components to communicate safety, warmth, and playfulness throughout the interface.

## Components

### Buttons
- **Primary CTA (Adventure & Exploration)**: Filled with Warm Tangerine (`#FF9C4C`), featuring creamy white (`#FFFDF0`) or deep roasted brown (`#2D2319`) bold typography. Fully pill-shaped (`rounded-full`) with a 4px tactile under-layer in `#E07E2E` that depresses on touch. Minimum height: 52px.
- **Success & Progression Action**: Filled with Sage Olive Green (`#7D9C65`) with white text and a darker supportive edge (`#64804E`). Used for confirmation, play triggers, and completed learning gates.
- **Tertiary / Attention**: Terracotta Red (`#B93636`) pill button with crisp white typography, reserved for critical parent-gate actions, resets, or standout promo triggers.
- **Ghost & Secondary Buttons**: Surface `#FFFDF0` filled with a 2px border tinted in `#FFF9D2` or Primary Sage, offering a gentle alternative for navigation.

### Cards & Surface Containers
- **Content Cards**: Built on `#FFFDF0` or `#FFFBEA` surfaces with generous `rounded-xl` (32px) corners. Surrounded by an ambient warm shadow (`0 8px 24px rgba(61, 46, 23, 0.06)`).
- **Interactive Exercise Cards**: Include an extra 2px interior border in `#FFF9D2`. Hover or tap shifts the card subtly upward with an expanded ambient glow.

### Chips & Badges
- **Category Chips**: Pill shapes with `#FFFBEA` fill, `#7D9C65` icon or accent text, and a relaxed 8px horizontal padding.
- **Alert & Promo Badges**: Filled with Terracotta Red (`#B93636`) with creamy white text, sized with `label-sm` or `label-md`, always rounded fully into friendly oval pills.
- **Star & Reward Badges**: Golden Warm Tangerine (`#FF9C4C`) backgrounds paired with bright `#FFFDF0` iconography.

### Inputs & Selection Controls
- **Input Fields**: Creamy `#FFFDF0` pill containers with 2px borders in `#FFF9D2`. Active focus transitions border color smoothly to `#7D9C65` with a warm halo. Placeholder text is rendered in a soft cocoa tone (`#33261D` at 50% opacity).
- **Checkboxes & Radios**: Oversized (28px minimum) circular pill checkboxes. Unchecked: `#FFFDF0` with a 2px `#FFF9D2` border. Checked: Instantly filled with Sage Olive Green (`#7D9C65`) displaying a bold white checkmark icon.

### Progress & Milestone Meters
- **Playful Progress Track**: Recessed track in `#FFF9D2` with a 16px pill height. Active progress fill is rendered in Sage Olive Green (`#7D9C65`) or Tangerine (`#FF9C4C`), capped with rounded ends and animated celebratory bounce pulses upon reaching milestones.