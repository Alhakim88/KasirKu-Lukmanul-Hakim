---
name: Warm Merchant POS
colors:
  surface: "#f8f9ff"
  surface-dim: "#cbdbf5"
  surface-bright: "#f8f9ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#eff4ff"
  surface-container: "#e5eeff"
  surface-container-high: "#dce9ff"
  surface-container-highest: "#d3e4fe"
  on-surface: "#0b1c30"
  on-surface-variant: "#4f4632"
  inverse-surface: "#213145"
  inverse-on-surface: "#eaf1ff"
  outline: "#817660"
  outline-variant: "#d3c5ac"
  surface-tint: "#775a00"
  primary: "#775a00"
  on-primary: "#ffffff"
  primary-container: "#ffc61a"
  on-primary-container: "#6e5400"
  inverse-primary: "#f6be0a"
  secondary: "#545f73"
  on-secondary: "#ffffff"
  secondary-container: "#d5e0f8"
  on-secondary-container: "#586377"
  tertiary: "#006c49"
  on-tertiary: "#ffffff"
  tertiary-container: "#57e6aa"
  on-tertiary-container: "#006444"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffdf98"
  primary-fixed-dim: "#f6be0a"
  on-primary-fixed: "#251a00"
  on-primary-fixed-variant: "#5a4300"
  secondary-fixed: "#d8e3fb"
  secondary-fixed-dim: "#bcc7de"
  on-secondary-fixed: "#111c2d"
  on-secondary-fixed-variant: "#3c475a"
  tertiary-fixed: "#6ffbbe"
  tertiary-fixed-dim: "#4edea3"
  on-tertiary-fixed: "#002113"
  on-tertiary-fixed-variant: "#005236"
  background: "#f8f9ff"
  on-background: "#0b1c30"
  surface-variant: "#d3e4fe"
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: "700"
    lineHeight: 48px
  display-lg-mobile:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 36px
  headline-xl:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
  headline-lg:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: "600"
    lineHeight: 28px
  headline-md:
    fontFamily: Epilogue
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 24px
  currency-display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.02em
  currency-display-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "500"
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

The design system is engineered for micro, small, and medium retail environments (warung, mini-markets, and neighborhood eateries) requiring rapid, accurate data capture and effortless stock-checkout orchestration. The brand visual language balances industrial operational efficiency with welcoming neighborhood familiarity.

### Visual Aesthetic & Philosophy

- **Style Direction:** Modern Utility with Tactile Warmth. It combines functional data density and crisp enterprise legibility with friendly, humanized surface contours.
- **Key Attributes:** Grounded, high-velocity, reliable, and legible under varying retail lighting environments (from dim counter corners to bright sunlight).
- **Target Audience:** Store owners, retail associates, and fast-paced cashiers who prioritize lightning-fast keystrokes, scan readability, and instant transaction certainty over decorative flourishes.

## Colors

The palette is tuned specifically for high-efficiency visual scanning. It uses a high-chroma warm amber primary to highlight critical calls-to-action without causing visual fatigue, grounded by deep slate neutrals that ensure rock-solid structural hierarchy.

### Functional Roles

- **Primary (`#FFC61A`):** Key checkout triggers, active table selections, major total balance callouts, and system progress states. High-contrast slate typography (`#0F172A`) must always sit on top of solid amber fills to exceed WCAG AAA readability standards.
- **Secondary / Structure (`#1E293B`):** Dedicated to fixed navigation structures, dark command sidebars, table headers, and primary data readouts.
- **Tertiary / Success (`#10B981`):** Payment cleared badges, active stock markers, cash register balance confirmations, and positive shift reconciliations.
- **Warning / Destructive (`#EF4444`):** Item deletions, voided sales, low stock alerts, and drawer opening variances.
- **Canvas & Neutral Surfaces:**
  - Base Application Canvas: `#F8FAFC`
  - Container Surfaces & Data Cards: `#FFFFFF`
  - Subdued Borders: `#E2E8F0`
  - Body Text / High Contrast: `#0F172A`
  - Muted Text / Meta Labels: `#64748B`

## Typography

Typography establishes an assertive typographic hierarchy optimized for fast, transactional glancing.

### Font Pairing Strategy

- **Headlines & Display:** Uses a structured, geometric grotesque with punchy, friendly authority (`Epilogue`) for register section heads, modal titles, and card headers.
- **Body, Inputs, & Numerical Data:** Handled by `Inter` across all body copy, forms, and monetary indicators. The engine leverages tabular figures (`font-variant-numeric: tabular-nums`) across all prices, stock counters, barcode SKUs, and checkout totals to prevent horizontal alignment shifts during live cart modifications.
- **Rupiah Currency Standard:** The currency symbol ("Rp") is always paired with the immediate integer without spaces or with a standardized non-breaking space (e.g., `Rp15.000` or `Rp 15.000`), maintaining weight lockstep with numerical digits for instantaneous total recognition.

## Layout & Spacing

The layout model is split into an asymmetrical fixed-fluid structure optimized for screen real estate common in POS setups (10" to 15" tablets and desktop touchscreen terminals).

### Layout System

- **Desktop/Terminal Viewports (≥1024px):** Fixed condensed navigational drawer (64px collapsed, 240px expanded), an expandable product catalog grid (minimum item cell width of 140px, scaling fluidly), and a fixed-width persistent cart drawer (360px–420px) pinned to the right margin.
- **Tablet/Hybrid Viewports (768px – 1023px):** Collapsible sidebar rail, fluid catalog grid with 3-4 column distribution, and a bottom sheet or split 50/50 view for checkout.
- **Mobile Viewports (<768px):** Single-column stacked layout with sticky bottom checkout summary bars and full-screen overlay modals for receipt generation.

### Touch Target Guarantees

Every primary interactive zone (POS item tiles, numpad triggers, category tabs, quantity steppers) requires a minimum interactive bounding box of 44×44px (recommended 48×48px for active checkout workflows) to prevent cashier mis-taps.

## Elevation & Depth

This system avoids deep, moody, or murky drop shadows in favor of crisp tonal boundaries, structural borders, and subtle diffuse elevations that maintain clarity under harsh retail fluorescent lighting.

### Layering Rules

- **Base Canvas (Level 0):** `#F8FAFC`. Background canvas for inactive space and structural gutters.
- **Surface Cards (Level 1):** Solid `#FFFFFF` enclosed with a hairline border (`1px solid #E2E8F0`). Flat elevation with zero blur shadow for maximum contrast.
- **Floating Modals & Interactive Overlays (Level 2):** Cart summary drawers, popover dropdowns, and search filter results utilize a tight directional shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)` combined with a `1px solid #CBD5E1` edge.
- **Critical Dialogs & Numpad Modals (Level 3):** Split bills, final payment completion modals, and shift handovers use `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.

## Shapes

The interface embraces a balanced roundedness (Scale 2) to convey approachable modern retail while retaining spatial discipline.

### Geometry Hierarchy

- **Standard Controls & Cards (`rounded`, 8px):** Input text boxes, line item rows, table cells, modal boundaries, and catalog product images.
- **Product Tiles & Major Containers (`rounded-lg`, 16px):** Catalog product tap cards, register shift summary cards, and primary checkout review surfaces.
- **Pills & Status Signals (`rounded-full`, 9999px):** Category filter chips, transaction state badges ("Lunas", "Pending", "Void"), and quantity counters.

## Components

### Buttons

- **Primary Checkout Button:** Solid `#FFC61A` surface with `#0F172A` text. Bold typography, 48px height, roundedness 8px. Hover state shifts to `#F59E0B`. Active state applies a subtle scale compress (`transform: scale(0.98)`).
- **Secondary Actions:** Background `#FFFFFF`, border `1.5px solid #E2E8F0`, text `#1E293B`.
- **Destructive/Void Actions:** Background `#FEE2E2`, border `1px solid #FECACA`, text `#DC2626`. Hover state escalates to `#DC2626` text with `#FCA5A5` border.

### Product Item Tiles

- Encapsulated in `#FFFFFF` with `rounded-lg` (16px) corners and `1px solid #E2E8F0`.
- Top zone: Product visual or stylized item category icon on `#F1F5F9`.
- Bottom zone: Product name in `label-lg`, stock count in `body-sm` muted (`#64748B`), and bold price rendered in `currency-display` (adjusted to 16px).
- Tap state: Border transforms to `#FFC61A` (2px solid) with an instant micro-flash background tone.

### Persistent Cart & Order List

- Line items are separated by `1px solid #F1F5F9` dividers.
- Built-in numeric stepper buttons (`-` and `+`) measure 36×36px with tactile slate borders and center-aligned bold quantities.
- Active cart total footer stays sticky at the bottom, framed with a top border `2px solid #E2E8F0` and `#FFFFFF` background.

### Input Fields & Search Bars

- Background `#FFFFFF` with `1.5px solid #CBD5E1`, roundedness 8px, 44px field height.
- Focused state: Outline glows with clean `#FFC61A` at 2px solid and slate text `#0F172A`.
- Dedicated barcode scanner input fields feature a right-aligned scanner icon badge and active pulsing border indicator when primed for laser input.

### Badges & Category Chips

- Filter chips: Unselected state is `#FFFFFF` with `1px solid #E2E8F0` and `#475569` text. Selected state is solid `#1E293B` background with `#FFFFFF` text.
- Transaction status chips: Pill-shaped (`rounded-full`), padded 4px 12px.
  - Paid/Completed: `#DCFCE7` background, `#15803D` text.
  - Pending/Unpaid: `#FEF3C7` background, `#B45309` text.
  - Canceled/Void: `#FEE2E2` background, `#B91C1C` text.
