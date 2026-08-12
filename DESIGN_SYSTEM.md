# GO ACADEMIX Design System

Copy-paste this whole file into Claude Design (or any design tool) so generated graphics match goacademix.com.

## Brand

GO ACADEMIX is a B2B SaaS platform that unifies LMS and SIS for Allied Health / CNA schools. Audience: school owners and administrators. Tone: warm, practical, operator-to-operator. Never corporate-investor-speak, never generic AI-startup purple.

## Colors

| Role | HSL | Hex |
|---|---|---|
| Brand teal (primary) | 180.7 82.8% 41% | #12BDBF |
| Brand teal deep (links, hover) | 180.7 82.8% 34% | #0E9A9C |
| Brand green (success/accent) | 132 65% 61% | #5ADC6C |
| Brand green deep | 132 65% 45% | #2FB544 |
| Brand ink (dark panels) | 234 7% 28% | #42434C |
| Background (page, warm cream) | 48 33% 97% | #FAF9F5 |
| Foreground (text) | 222 47% 8% | #0A0F1C |
| Muted background | 48 20% 93% | #F0EEE7 |
| Muted text | 220 10% 40% | #5C626B |
| Accent surface | 48 25% 94% | #F3F1EA |
| Card | 0 0% 100% | #FFFFFF |
| Border / hairline | 30 15% 88% | #E5E0DA |

Rules:
- Cream page background, never a pure white page. White is for cards only.
- Teal is the single accent. Use sparingly on CTAs, big numbers, icons, and one-word emphasis.
- Green signals success and positive states.
- Ink is for full-bleed dark panels with white text.

## Gradients

- Ink panel: `linear-gradient(to bottom right, #42434C, hsl(222 47% 16%))` with white text.
- Brand panel: `linear-gradient(to bottom right, #12BDBF, #2FB544)`.
- Always place a solid-color fallback behind any gradient.

## Typography

- Sans: Inter (fallbacks: system-ui, -apple-system, Segoe UI).
- Mono: Menlo / SF Mono, used only for small labels.
- Scale (px): 12, 14, 16, 18, 20, 24, 30, 36, 48.
- Weights: 400 / 500 / 600 / 700, plus 800 for oversized display headlines.
- Line height: 1.25 headings, 1.5 normal, 1.625 body.
- Letter spacing: headings -0.01em; hero/display headings -0.03em with line-height 1.02.
- Signature detail, the "mono label": 11px monospace, uppercase, 0.08em tracking, muted gray, prefixed with a slash. Examples: `/ THE_REAL_VALUE`, `/ SYSTEMS_COUNT`. Use as an eyebrow above headings and stats.
- Numbers use tabular figures with tight tracking.

## Shape and elevation

- Base radius 0.5rem. Large cards and panels 1rem to 1.5rem (rounded-2xl). Buttons and pills fully rounded.
- Shadows are near-flat: `0 1px 2px rgba(15,23,42,.05)` default, `0 10px 15px -3px rgba(15,23,42,.10)` for a lifted panel.
- Prefer 1px hairline borders over shadows.

## Spacing and layout

- Spacing scale (px): 4, 8, 12, 16, 20, 24, 32, 48, 64.
- Section vertical padding: 96 to 128px.
- Max content width 80rem, centered, 24px side gutters.

## Components

- Pill badge: rounded-full, teal at 8% background, teal at 25% border, teal-deep text, 12px medium, optional 6px teal dot.
- Card: white, 1px hairline border, rounded-2xl, 28px padding.
- Buttons: rounded-full. Primary is teal fill with near-white text. Secondary is outline with a hairline border.
- Comparison pattern: two side-by-side cards. "Before" sits on cream with neutral checkmarks; "after" sits on a teal 8% tint with a teal 30% border. Each is capped by a large number in the bottom-right corner.
- Icons: Lucide, 1.5px stroke, 16 to 24px.

## Imagery

- Real product screenshots shown whole, never cropped, on cream or white with a hairline border.
- Team photos are natural and candid, not stock.
- Press logos in grayscale.

## Avoid

Purple or indigo gradients, colored glow shadows, pure black, dark mode, Poppins, stock-photo people, emoji, gradient text.

---

Source of truth: `:root` tokens in `src/index.css` and `tailwind.config.ts`. Update this file if those change.
