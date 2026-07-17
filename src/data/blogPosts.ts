export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  keywords: string;
  content: string; // markdown-lite; rendered as paragraphs and headings
}

export const blogPosts: BlogPost[] = [
  {
    slug: "lms-vs-sis-allied-health-schools",
    title: "LMS vs SIS: What Allied Health Schools Actually Need",
    description:
      "Most allied health schools run a separate LMS and SIS. Here's why that's costing you, and what a unified system looks like in practice.",
    date: "2026-06-02",
    readTime: "6 min read",
    author: "Jocelyn Powell",
    category: "Operations",
    keywords:
      "LMS for allied health schools, student information system, allied health school software, CNA school LMS",
    content: `
## The two systems every school ends up with

If you run a CNA, phlebotomy, medical assistant, or any allied health program, you probably pay for at least two platforms. One is a Learning Management System (LMS) for coursework and quizzes. The other is a Student Information System (SIS) for enrollment, attendance, and grades.

They rarely talk to each other. That gap is where your team loses hours every week.

## What an LMS gives you

An LMS handles the classroom side. Lessons, videos, quizzes, and a gradebook for coursework. It's what students log into to actually learn.

## What an SIS gives you

An SIS handles the business side. Applications, enrollment agreements, tuition payments, attendance for state hours, and the transcripts you send to regulators.

## Why running both hurts

You end up entering the same student twice. Attendance in one system, coursework in another, payments in a third. When a state auditor asks for one student's full file, someone spends an afternoon exporting spreadsheets and stapling them together.

## What a unified platform changes

When enrollment, payments, LMS, attendance, grades, and certificate tracking live in one place, a student's file is one click. Your instructors stop copying grades. Your admin stops chasing signatures. And you stop paying four vendors to solve one problem.

That's the thesis behind GO ACADEMIX, and it's how we run our own school, Allied Health Career Training.
`,
  },
  {
    slug: "reduce-admin-burden-cna-school",
    title: "How to Cut Admin Burden at Your CNA School by 30%+",
    description:
      "Five specific workflows that eat hours at most CNA and allied health schools, and how to shrink each one without hiring more staff.",
    date: "2026-06-18",
    readTime: "7 min read",
    author: "Jocelyn Powell",
    category: "Playbook",
    keywords:
      "CNA school administration, reduce paperwork, allied health enrollment, school operations",
    content: `
## Admin work scales faster than enrollment

The first time you enroll 20 students, it feels manageable. At 200 students a year, the paperwork multiplies. At 4,000 students trained per year (where we sit at Allied Health Career Training), it either breaks your team or it forces you to fix the workflow.

Here are the five places we found the most time.

### 1. Enrollment paperwork

Paper packets, PDFs by email, and DocuSign links get lost. Move the whole enrollment agreement online, with fields the student fills once and your team never re-keys.

### 2. Payment collection

Chasing tuition eats mornings. Set up recurring payments at enrollment and offer a financing option like Fortify at the same step, so students who need help don't disappear.

### 3. Attendance for state hours

State boards care about hours, not vibes. Digital attendance with a timestamp is faster than a paper sign-in sheet and safer during an audit.

### 4. Sponsor and employer tracking

If employers or workforce boards sponsor students, you need clean records of who paid for whom. Manual spreadsheets rot fast.

### 5. Certificate issuance

Every completed student needs a certificate on file. Automate the generation from the same record that already has their grades and hours.

## Where the 30% number comes from

Schools using our platform report about a third less time on repeat data entry. It's not magic, it's what happens when the same student record powers enrollment, payments, learning, attendance, and certificates.
`,
  },
  {
    slug: "state-audit-ready-allied-health",
    title: "The Allied Health School Audit Checklist",
    description:
      "What state boards ask for during an audit, and how to have every document ready in minutes instead of days.",
    date: "2026-07-01",
    readTime: "5 min read",
    author: "Jocelyn Powell",
    category: "Compliance",
    keywords:
      "allied health state audit, CNA school compliance, nursing assistant program audit",
    content: `
## Audits are a process, not a surprise

Every allied health school gets audited. The schools that stay calm are the ones whose records live in one system and can be pulled per student.

## The core checklist

- Signed enrollment agreement
- Proof of prerequisites (ID, immunizations, background)
- Attendance hours by date, with clock-in and clock-out
- Coursework completion and grades
- Clinical or lab hours logged separately
- Proof of tuition payment or sponsor coverage
- Issued certificate with date and instructor signature

## What auditors actually check

They pick a handful of students at random and ask for the full file. If it takes you a day per student, you have a system problem, not a compliance problem.

## The fix

Store every one of those documents on the student's record, from day one. When the auditor picks a name, you filter to that student and export.
`,
  },
  {
    slug: "choosing-school-software-questions",
    title: "10 Questions to Ask Before Buying School Management Software",
    description:
      "A buyer's guide for allied health school owners evaluating LMS, SIS, or all-in-one platforms. Cut through the demos.",
    date: "2026-07-14",
    readTime: "8 min read",
    author: "Jocelyn Powell",
    category: "Buyer's Guide",
    keywords:
      "school management software, allied health software comparison, LMS buyer guide, education technology",
    content: `
## Demos are designed to impress, not to inform

Every vendor will show you a beautiful dashboard. Here are the questions that surface how the software actually behaves once you're a customer.

### 1. Does one student record power enrollment, payments, LMS, and attendance?

If the answer involves the word "integration," it means two systems taped together.

### 2. How do we collect tuition, and what financing options plug in?

Ask specifically about ACH, cards, payment plans, and lenders like Fortify.

### 3. Can I export every field for a state audit in one click?

If the answer is "we can build a report for you," that's a red flag.

### 4. What happens when a state changes required hours?

You want configurable programs, not a support ticket.

### 5. Who owns the student data?

You should. Get it in writing.

### 6. What's the real setup timeline?

Not the marketing number. Ask for a customer reference at your school's size.

### 7. How is pricing structured as we grow?

Per student, per seat, and per module pricing all bite differently at scale.

### 8. What's the roadmap, and what shipped in the last 90 days?

A stale changelog means a stale product.

### 9. Do you have current allied health customers?

Generic school software often misses the compliance nuances of CNA, phlebotomy, and MA programs.

### 10. Can I talk to a school owner who runs the platform?

The best answer is yes, and here are three.

## Our bias

We built GO ACADEMIX because none of the existing platforms answered these ten questions the way we needed them answered for our own school. If you want to compare notes, book a demo with Jocelyn.
`,
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
