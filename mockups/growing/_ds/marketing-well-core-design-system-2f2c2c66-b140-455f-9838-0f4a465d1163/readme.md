# Marketing Well Core — Design System

The house design system of **Marketing Well** (marketingwell.ca), a marketing studio that
designs and builds calm, editorial **mental-health & wellness practice websites**. "Core" is the
reusable foundation behind every client site: one set of warm tokens, one component library, and a
re-skinnable theming layer so each practice gets its own palette without forking the system.

> Default theme is **Sage**. Re-skin any subtree by adding a class — `.theme-teal` or `.theme-slate`
> — to a wrapper. All components and tokens respond automatically.

---

## Products represented (sources)

This system was reverse-engineered from three real Marketing Well client builds. All three are
**single-page therapy-practice marketing sites** with the same DNA — they differ mainly in palette,
serif choice, and ornament.

| Client | Place | Theme class | Source provided |
|---|---|---|---|
| **CK Mental Health & Trauma Therapy Centre** | Chatham-Kent, ON | `.theme-sage` (default) | `CK Mental Health/index.html` — Tailwind mockup. Live: marketingwell.ca/mockups/ck |
| **Still Standing Therapy** | Maple Ridge, BC | `.theme-teal` | `Still Standing/index.html` + `assets/still-standing.css` + `assets/refine.css` (vanilla CSS) |
| **Inspire Wellness Therapy** | Calgary, AB | `.theme-slate` | `inspire-base44-components/` — React + shadcn/ui + framer-motion (emdr / somatic / assessments variants) |

These paths were mounted read-only at build time; a future reader may not have them. Key assets
were copied into `assets/`.

---

## CONTENT FUNDAMENTALS

The voice across all three sites is **warm, plain-spoken, second-person, and de-stigmatizing**. It
speaks _to_ the reader ("you"), never down at them, and treats reaching out as the hard, brave thing
it is.

- **Person & address.** Almost always **"you / your"**, with **"we / our"** for the practice. First
  person singular is rare. e.g. _"Whatever you're carrying, you don't have to carry it alone."_
- **Tone.** Reassuring, grounded, gently hopeful — never clinical or salesy. Pain is named honestly
  ("Your mind has moved on. Your body still remembers."), then met with a clear next step.
- **Casing.** Sentence case everywhere for headings and body. The **eyebrow kicker** is the only
  uppercase element (e.g. `WHAT WE TREAT`, `HOW WE HELP`). Title Case is reserved for proper nouns,
  service names, and credentials (Registered Psychotherapist, EMDR, CRPO).
- **Headlines** are short, serif, and often contain **one italicised phrase** carrying the emotional
  beat: _"A grounded space to **feel,** heal, and grow."_ · _"Care from **people who get it.**"_ ·
  _"Your healing can start **now.**"_
- **Punctuation & rhythm.** Em-dashes for warmth and asides; mid-dot separators in meta lines
  (`Chatham · Blenheim · Across Ontario`). Sentences are short and breathe.
- **Trust language is concrete, not boastful:** "Free 15-minute consult", "Direct billing
  available", "Most clients seen within 1 week", "Covered by most extended health plans".
- **CTAs** are specific and low-pressure: _"Book a Free 15-Minute Consult"_, _"Book Your Free
  Discovery Call"_, _"Meet our therapists"_ — and almost always paired with "no pressure, no
  commitment."
- **Safety.** A crisis note (911 / 9-8-8) appears near contact forms — the brand is careful and
  responsible.
- **No emoji** in client-facing copy. A single ✓ glyph appears in success states; the **❦ fleuron**
  is decorative, not an emoji.

---

## VISUAL FOUNDATIONS

A calm, editorial, **nature-adjacent** aesthetic. Warm paper backgrounds, a muted calming primary,
one warm accent, lots of breathing room, and soft organic touches.

- **Colour.** Each theme = a muted, calming **primary** (sage green / deep teal / slate-purple) +
  a single **warm accent** (coral / mint / mauve) + warm neutrals. The signature background is
  **cream `#FEFAE0`** / warm paper — never stark white page backgrounds. Use **1–2 dark "feature
  bands"** per page (brand-filled sections) to break the cream rhythm. Imagery is **warm and
  natural** — real photography (offices, nature, people), gently saturated, never cold or grey.
- **Type.** Editorial **display serif** (Cormorant Garamond, alt Petrona) for all headings, set
  tight (`-0.01em`, line-height ~1.1) with an **italic phrase** for emphasis. **Humanist sans**
  (Manrope, alt Mulish) for body & UI at a relaxed `1.65` line-height. The **eyebrow** — 12px,
  600, `0.18em` tracking, uppercase, accent colour — sits above nearly every heading.
- **Spacing & layout.** Generous. Sections breathe at **~92px** vertical padding; content maxes at
  **1180px** (hero/header 1280px), text measures ~720px. 4px spacing base. Centered section heads
  are common (Still Standing / Inspire); CK leans left-aligned with a supporting paragraph.
- **Backgrounds & texture.** Cream/paper washes; occasional very-faint paper-grain noise and soft
  radial mesh glows in the accent colour; organic **blob** shapes drifting off section corners;
  **topographic contour** line motifs in dark bands. Gradients are subtle and tonal — **no
  bluish-purple SaaS gradients.** The Inspire final CTA uses a soft radial slate glow.
- **Corners & cards.** Soft. Cards = **18px** radius, 1px hairline border (`--line`), low-contrast
  **warm ink-tinted shadow** (`--shadow-card`), white surface on cream. On hover they **lift
  `-4/-6px`** with a deeper shadow and the border fades. Photo-top cards clip at the same radius.
- **Buttons & controls.** Fully **pill-shaped** (`999px`). Primary = accent fill; brand = primary
  fill; ghost = outline; cream/ghost-light for dark sections. Hover **lifts 1px** + soft shadow;
  trailing **→ arrows nudge right** on hover. Focus = 3px soft accent ring.
- **Hover / press.** Lift + shadow + slight colour deepen (never harsh). Links use animated arrow
  translate or an underline that retracts. No bounce; motion is **gentle fades & 0.18–0.25s
  ease-out lifts**. The swoosh underline draws once; everything respects
  `prefers-reduced-motion`.
- **Imagery treatment.** Warm photography; in Still Standing, hero/feature images can be masked
  into **soft organic blob shapes** with a layered accent blob behind. Scrims over hero photos are
  the **brand colour at ~0.6–0.88 opacity**, left-to-right, so white headline text stays legible.
- **Transparency & blur.** Sticky headers use a translucent brand/paper fill + `blur(8–10px)`.
  Trust cards can be `white/80` + backdrop blur. Modals: brand scrim `~0.55` + `blur(4px)`.
- **Ornaments.** The **Flourish** (line–dot–line divider), the **❦ fleuron**, hand-drawn **swoosh**
  underlines, **topographic** contour ellipses, and small **leaf / botanical** marks. See the
  "Ornaments & flourishes" card.

---

## ICONOGRAPHY

- **System: Lucide.** The codebases use `lucide-react` (e.g. `MapPin`, `Laptop`, `Shield`) and,
  in the static sites, hand-inlined SVGs in the **exact Lucide style** — 24×24 viewBox, `1.6–2.2`
  stroke width, **round caps & joins, no fill**. When adding icons, use
  [Lucide](https://lucide.dev) (CDN: `https://unpkg.com/lucide@latest`) or inline Lucide-style
  SVG with `stroke="currentColor"` so it inherits the brand/accent colour.
- **Treatment.** Icons sit inside a circular or rounded-square **medallion** (`--brand-soft` field,
  `--brand` stroke) — see `.mwc-medallion`. Trust ribbons use small accent-coloured icons inline.
- **No icon font, no PNG sprite, no emoji** as UI icons. Unicode is used only for the decorative
  **❦** fleuron and the **✓** in success states.
- The reusable components take an `icon` prop as a node, so you pass any Lucide SVG directly.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (all `@import`s).
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` (Google Fonts import), `colors.css` (palette + semantic + 3 theme
scopes), `typography.css`, `spacing.css` (radii/shadow/layout/motion), `base.css` (resets + house
utility classes: `.mw-wrap`, `.mw-section`, `.mw-eyebrow`, `.mw-display-*`, `.mw-mark`).

**`components/`** — React primitives (each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`), styled by
`components/mwc-components.css`:
- `buttons/` — **Button**, **LinkArrow**
- `forms/` — **Input**, **Textarea**, **PillChoice**
- `data-display/` — **Card**, **Badge**, **Chip**, **Avatar**
- `sections/` — **Eyebrow**, **SectionHeading**, **FlourishDivider**, **TrustBar**
- `practice/` — **TherapistCard**, **AreaCard**, **Accordion**

**`ui_kits/`** — full landing-page recreations: `ck-mental-health/` (sage), `still-standing/`
(teal), `inspire-wellness/` (slate). Each has `index.html` + `app.jsx` + `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design
System tab.

**`assets/`** — `image-slot.js` helper + `images/` (hero, session, location, team portraits, group
photo).

---

## Usage

```html
<link rel="stylesheet" href="styles.css" />
```
```jsx
const { Button, SectionHeading, TherapistCard } = window.MarketingWellCoreDesignSystem_2f2c2c;
```

Wrap a region in a theme class to re-skin it:
```html
<div class="theme-teal"> … Still Standing palette … </div>
```

### Caveats / substitutions
- **Fonts load from the Google Fonts CDN** (`tokens/fonts.css`), mirroring the source sites, rather
  than self-hosted woff2. Drop binaries in `tokens/fonts/` + swap to `@font-face` for offline use.
- **Icons** rely on Lucide (CDN or inline) — no binary icon set was shipped in the sources.
- **Inspire therapist portraits** are placeholders; no Inspire photos were provided.
