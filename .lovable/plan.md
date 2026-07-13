# Plan: Redesign landing + Advisory Council with the GO ACADEMIX Design System

## Goal
Make the public site feel like it belongs to the same product as the GO ACADEMIX app: clean, clinical, trustworthy, teal-led, flat UI, 8 px radius, hairline borders, and no decorative gradients. Keep the current empathetic, demo-first copy direction, but tighten it to the design-system voice (Title Case labels, sentence case descriptions, no emoji).

## Scope
- Landing page (`/`): Header, Hero, SocialProof, Problem, Solution, CTA, Footer
- Advisory Council page (`/advisorycouncil`)
- Global tokens: `src/index.css`, `tailwind.config.ts`, `index.html`

## What will change

### 1. Global tokens
- Replace/merge `src/index.css` with the design-system color, type, spacing, and shadow tokens while keeping shadcn variable names intact.
- Map brand green (`#5ADC6C`) to a new semantic `--success` token instead of `--secondary`.
- Keep `--secondary` as the muted slate fill the design system specifies.
- Add CSS custom properties for `--brand-teal`, `--brand-green`, `--brand-ink`, status tints, and notice colors.
- Update `tailwind.config.ts` to expose `success`, `brand-teal`, `brand-green`, and `brand-ink` as Tailwind colors.
- Update `index.html` title/description to "The Future of Allied Health Certificate Learning" and remove the generic Lovable/healthcare-learning copy.

### 2. Logo
- Use the `logo-goacademix.png` from the uploaded design system.
- Create a Lovable Assets pointer (`src/assets/logo.png.asset.json`) and update `Header` and `Footer` imports.

### 3. Header
- Keep sticky, opaque background with hairline border.
- Update logo source.
- Keep "Advisory Council" text link and "Book a Demo" primary button.

### 4. Hero
- Remove gradient background; use flat `--background` canvas.
- Remove gradient text; use solid `--primary` teal for the emphasized phrase.
- Keep the testimonial video (autoplay muted loop playsInline with controls).
- Primary CTA: "Book a 30-min demo" (primary button).
- Secondary CTA: "Email Jocelyn" (outline button).
- Apply 8 px radius and near-flat shadow to the video card.

### 5. SocialProof
- Remove gradient icon backgrounds; use teal-tinted or white icon circles.
- Keep Allied Health Career Training and Inspire CNA School logos with their external links.
- Refine the founder quote card to a white card with hairline border and left teal accent.
- Tighten copy so it is crystal clear that Allied Health Career Training is the owned school and Inspire CNA School is a sold-to partner.

### 6. Problem
- Replace the red/destructive badge with a neutral or amber status tint that still signals "pain point."
- Use white cards with hairline borders and `shadow-sm` for the four pain points.
- Keep the empathetic copy; adjust labels to Title Case where appropriate.

### 7. Solution
- Remove gradient text and gradient icon backgrounds.
- Use flat teal icon circles on white/tinted backgrounds.
- Rebuild the LMS+SIS comparison diagram as a white bordered card with flat fills and status tints.
- Convert the closing demo banner from a gradient background to a flat `--primary` teal card with white text.
- Feature cards: white fill, hairline border, 8 px radius, subtle shadow, teal icon circle.

### 8. CTA
- Replace the gradient CTA card with a flat `--primary` teal card.
- Remove the grid pattern overlay.
- Keep "Book a 30-min demo" and "Email Jocelyn" CTAs.

### 9. Footer
- Update logo source.
- Keep simple copyright and link row.

### 10. Advisory Council page
- Apply the same flat, teal-led visual system.
- Remove gradient backgrounds and gradient text.
- Use white bordered cards for the founder story, benefits, expectations, and join form.
- Keep the founder photo (`/connor-jocelyn.jpg`) at the top as requested.
- Convert the final join CTA card from gradient to flat teal.
- Preserve the existing form + Supabase edge-function submission flow.

### 11. Copy/voice pass
- Convert UI labels and card titles to Title Case.
- Keep descriptions in sentence case.
- Remove any remaining hype/jargon and keep the warm, direct, owner-to-owner tone.
- Ensure every section points toward booking a demo or emailing Jocelyn.

## Technical details
- No new dependencies.
- No backend schema changes.
- Existing Supabase function `submit-advisory-council` remains untouched.
- Build will be verified with `bun run build` after edits.

## Verification
- Run a production build to confirm no TypeScript/Tailwind errors.
- Spot-check the landing page and `/advisorycouncil` in the preview for consistent radius, borders, shadows, and no stray gradients.