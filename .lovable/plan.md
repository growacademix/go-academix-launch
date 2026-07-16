# Reframe GO ACADEMIX Landing Page: From "Save Money" to "Unify & Grow"

## Goal
Shift the landing page's primary value proposition from "reduce software spend" to "bring fragmented systems together so Allied Health school owners can focus on student quality and school growth." Cost savings become a supporting benefit, not the headline.

## Changes

### 1. Hero section (`src/components/Hero.tsx`)
- Keep the "Built With Allied Health School Owners" badge.
- Reframe headline to emphasize unification and focus: e.g., "One platform. One workflow. More time for what actually grows your school."
- Rewrite subhead to lead with the problem of fragmented tools pulling owners away from students/quality, then introduce GO ACADEMIX as the unified platform.
- Keep CTAs unchanged.

### 2. Problem section (`src/components/Problem.tsx`)
- Retitle the cost-focused pain point from "You're paying for way too much software" to something like "Your tools pull your team in six directions" with body copy about context-switching and re-entry time, not bills.
- Tighten other pain points to tie back to lost focus, manual handoffs, and risk of student experience suffering.
- Update the section closer to reinforce the new frame: the issue is not the money, it is the mental overhead.

### 3. Cost comparison → Systems consolidation visual (`src/components/CostComparison.tsx`)
- Rename the component and section to "The systems you're juggling today vs. GO ACADEMIX" or similar.
- Replace the editable dollar inputs with a simpler interactive list of typical tools (LMS, SIS, scheduling, compliance, payments, spreadsheets) that visitors can toggle on/off.
- Left side shows the fragmented "today" stack; right side shows GO ACADEMIX as the single replacement layer.
- Keep a small, secondary live total that shows estimated monthly spend and savings, but move it below the fold or de-emphasize it so the visual message is "one platform replaces many tools," not "cheapest option."
- Add a short paragraph explaining the real win: fewer handoffs, one source of truth, more time to train better students.

### 4. Solution / product tour (`src/components/Solution.tsx`)
- Keep the screenshot grid and lightbox.
- Rewrite the "Live Today" intro to explicitly connect each live feature to the unified workflow: enrollment → payment → learning → certificate, all in one place.
- Replace the prominent cost-savings CTA block at the bottom with a value-focused CTA: "See how it fits your school" or "Book a workflow walkthrough."
- Keep the roadmap note, but frame it as "we're adding more automation so your team can spend even less time on admin."

### 5. Social proof (`src/components/SocialProof.tsx`)
- Reframe the "-34% admin burden" stat to "34% less admin overhead" with description emphasizing time redirected to student experience and growth.
- Keep the "4,000+ students" and "2 partner schools" stats, but tie them to real-world validation.
- Update founder quote to focus on building the platform so owners can focus on students, not on wrestling software.

### 6. Lead capture (`src/components/LeadCapture.tsx`)
- Minor copy tweaks to align: "Get updates on how schools are simplifying their stack and growing enrollment."

## What stays the same
- Header, footer, navigation, logo, colors, typography, video, screenshot gallery, lightbox behavior, lead-capture form logic, demo calendar link, and Supabase backend.

## Acceptance criteria
- No section leads with price or savings as the primary headline.
- The interactive comparison clearly communicates "many tools → one platform" before mentioning cost.
- All copy uses natural, human language consistent with the recent voice audit.
- No em dashes introduced.

## Technical notes
- `CostComparison.tsx` will be refactored in place; no new routes or backend changes required.
- All edits stay within frontend presentation components.