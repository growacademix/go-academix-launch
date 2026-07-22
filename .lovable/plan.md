## Problem

On mobile, the nav links (Home, Advisory Council, Team, Blog) are hidden via `hidden sm:block` in `src/components/Header.tsx`, leaving only the logo and "Book a Demo" button. There's no way to reach the other pages from a phone.

## Plan

Add a mobile hamburger menu to `src/components/Header.tsx` using the existing shadcn `Sheet` component (already in the project) so it matches the current editorial style.

### Changes

1. **`src/components/Header.tsx`**
   - Keep the current desktop nav (`hidden sm:flex`) exactly as-is.
   - On mobile (`sm:hidden`), show a hamburger icon button (Lucide `Menu`) to the left of the "Book a Demo" button.
   - Tapping it opens a `Sheet` sliding in from the right with:
     - GO ACADEMIX logo at the top
     - Vertical stack of links: Home, Advisory Council, Team, Blog
     - A "Book a Demo" button at the bottom
   - Each link closes the sheet on tap (controlled `open` state).
   - Use existing tokens (cream background, teal accent, hairline borders) — no new styles.

2. Keep "Book a Demo" visible in the top bar on mobile too, since it's the primary CTA.

No other files change. No routing, data, or business logic changes.

### Technical notes

- Use `@/components/ui/sheet` (`Sheet`, `SheetTrigger`, `SheetContent`) and `lucide-react`'s `Menu` icon, both already installed.
- Controlled `useState` for open/close so link clicks can dismiss the sheet.
- Accessibility: `aria-label="Open menu"` on the trigger button.
