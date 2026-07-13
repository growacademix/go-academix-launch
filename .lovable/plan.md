Remove the repetitive bottom demo CTA so the last three sections no longer feel duplicated.

Current end-of-page flow:
- Solution section → blue "Book a 30-min demo" block
- LeadCapture section → email signup card
- CTA section → second blue "Book a 30-min demo" block

That creates two identical demo CTAs with only the email form between them. The plan is to drop the final CTA section and let LeadCapture serve as the closing conversion point.

Changes:
1. In `src/pages/Index.tsx`, remove the `<CTA />` import and usage.
2. Keep the demo CTA inside `Solution.tsx` — it appears right after the product tour, which is the highest-intent moment.
3. Optionally add a small "Rather book a demo?" text link beneath the LeadCapture form so high-intent visitors still have an escape hatch without another full blue block.
4. Run the build check to confirm no broken references.

This keeps one strong demo CTA, one lower-friction email capture, and eliminates the repetitive closing block.