# GO ACADEMIX Design System Brief (for Claude Design)

Goal: a single copy-paste brief you can hand to Claude Design so any graphics it makes match goacademix.com exactly.

## What to build

Add `DESIGN_SYSTEM.md` at the project root containing the spec below. Nothing in the app changes — this is a reference document you can paste into Claude Design (or any other tool) whenever you need on-brand graphics.

## The brief (copy this into Claude Design)

**Brand**: GO ACADEMIX — B2B SaaS that unifies LMS and SIS for Allied Health / CNA schools. Audience: school owners and administrators. Tone: warm, practical, operator-to-operator. Never corporate-investor-speak, never generic AI-startup purple.

**Colors** (HSL, exactly as used in the site)

| Role | HSL | Hex |
|---|---|---|
| Brand teal (primary) | 180.7 82.8% 41% | #12BDBF |
| Brand teal deep (links, hover) | 180.7 82.8% 34% | #0E9A9C |
| Brand green (success/accent) | 132 65% 61% | #5ADC6C |
| Brand green deep | 132 65% 45% | #2FB544 |
| Brand ink (dark panels) | 234 7% 28% | #42434C |
| Background (page) | 48 33% 97% warm cream | #FAF9F5 |
| Foreground (text) | 222 47% 8% | #0A0F1C |
| Muted background | 48 20% 93% | — |
| Muted text | 220 10% 40% | — |
| Accent surface | 48 25% 94% | — |
| Card | white | #FFFFFF |
| Border / hairline | 30 15% 88% | — |

Rules: cream background, never pure white page. White only for cards. Teal is the single accent — use sparingly on CTAs, numbers, icons, and one-word emphasis. Green is for success/positive states. Ink is for full-bleed dark panels.

**Gradients**
- Ink panel: `linear-gradient(to bottom right, #42434C, hsl(222 47% 16%))`, white text.
- Brand panel: `linear-gradient(to bottom right, #12BDBF, #2FB544)`.
Always ship a solid-color fallback behind gradients.

**Typography**
- Sans: Inter (fallback system-ui, Segoe UI). Mono: Menlo / SF Mono for small labels.
- Scale (px): 12, 14, 16, 18, 20, 24, 30, 36, 48.
- Weights: 400 / 500 / 600 / 700, plus 800 for oversized headlines.
- Line height: 1.25 headings, 1.5 normal, 1.625 body.
- Letter spacing: headings -0.01em; hero/display headings -0.03em with line-height 1.02.
- Signature detail — "mono label": 11px monospace, uppercase, 0.08em tracking, muted gray, prefixed with a slash, e.g. `/ THE_REAL_VALUE`, `/ SYSTEMS_COUNT`. Use as eyebrow labels above headings and stats.
- Numbers use tabular figures and tight tracking.

**Shape and elevation**
- Base radius 0.5rem; large cards and panels 1rem–1.5rem (rounded-2xl); buttons and pills fully rounded.
- Shadows are near-flat: `0 1px 2px rgba(15,23,42,.05)` default, `0 10px 15px -3px rgba(15,23,42,.10)` for a lifted panel. Prefer 1px hairline borders over shadows.

**Spacing**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 px. Section vertical padding 96–128px. Max content width 80rem, centered, 24px side gutters.

**Components**
- Pill badge: rounded-full, teal 8% background, teal 25% border, teal-deep text, 12px medium, optional 6px teal dot.
- Card: white, 1px hairline border, rounded-2xl, 28px padding.
- Buttons: rounded-full; primary = teal fill with near-white text; secondary = outline with hairline border.
- Comparison layout pattern: two side-by-side cards, "before" on cream with neutral checkmarks, "after" on teal-8% tint with teal-30% border, capped by a big number in the bottom-right corner.
- Icons: Lucide, 1.5px stroke, 16–24px.

**Imagery**: real product screenshots shown whole (never cropped), on cream or white with a hairline border. Team photos are natural, not stock. Press logos in grayscale.

**Avoid**: purple/indigo gradients, drop shadows with color glow, pure black, dark mode, Poppins, stock-photo people, emoji, gradient text.

## Technical notes

- File: `DESIGN_SYSTEM.md` at repo root, markdown only, no code changes.
- Values are pulled from `src/index.css` (`:root` tokens) and `tailwind.config.ts` so the doc stays a mirror of the real tokens.
