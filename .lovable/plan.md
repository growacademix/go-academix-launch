# Plan: Merge Feature Cards into Product Tour (Option A)

Combine the 6 icon feature cards and the 7-screenshot Gallery into one unified section inside `Solution.tsx`.

## Changes

1. **`src/components/Solution.tsx`**
   - Keep: "Live Today" header, comparison diagram, roadmap note, and demo CTA block.
   - Remove: the 6 icon-based feature cards.
   - Add: a screenshot grid (reuse the 7 screenshot assets from Gallery) where each card shows the screenshot + a live-feature title + short caption. Clicking a card opens the existing lightbox (Dialog) for a full-size view.
   - Card mapping:
     - Enrollment & Registration → Public Enrollment Page
     - Student Records → Student Directory
     - Sponsor Tracking & Payments → Payments & Sponsors
     - Learning Management, Attendance & Grades → Course Detail
     - Certificate Tracking & Student Portal → Student Portal
     - Owner Dashboard → Owner Dashboard
     - Team Access → Team Invitations

2. **`src/pages/Index.tsx`**
   - Remove the `Gallery` import and `<Gallery />` usage.

3. **`src/components/Gallery.tsx`**
   - Delete the file.

4. **Anchors/nav**
   - If `#gallery` is referenced anywhere (header nav, links), update to point to the Solution section id or remove.

## Result
One cohesive "Live Today" section: comparison → visual proof of each live feature (screenshots) → demo CTA. No duplication, shorter page, stronger evidence.