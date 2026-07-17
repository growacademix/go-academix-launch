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
    slug: "marketing-your-cna-school",
    title: "How to Do Marketing for Your CNA School",
    description:
      "A practical marketing playbook for CNA and allied health schools: local SEO, reviews, a converting website, and an enrollment page that works while you sleep.",
    date: "2026-07-17",
    readTime: "9 min read",
    author: "Jocelyn Powell",
    category: "Marketing",
    keywords:
      "CNA school marketing, allied health school local SEO, Google Business Profile for schools, CNA school website, online enrollment for CNA school",
    content: `
## Most CNA schools do not have a marketing problem. They have a trust problem.

Your future students are not scrolling Instagram looking for a random CNA class. They are searching Google at 10 p.m. after a double shift. They ask a coworker where she got certified. They read reviews before they call. They want a program that feels local, fast, and real.

That means your marketing does not need to be clever. It needs to be findable, believable, and easy to act on. Here is how we think about it at GO ACADEMIX and at our own school, Allied Health Career Training.

## Claim and optimize your Google Business Profile

For a local school, your Google Business Profile is more important than your website homepage. When someone searches "CNA classes near me" or "CNA school Wichita," Google shows the map pack first. If you are not there, you are invisible.

### What to do

- Claim your profile at business.google.com and verify your address.
- Use your real school name. Do not stuff keywords into the business name.
- Choose categories like "Adult Education School" and "Nursing School."
- Add photos of your classroom, students in lab, your building, and your team.
- List your class schedule in posts and updates.
- Keep your phone number, website, and hours current.

A complete profile with recent photos and reviews will outrank a prettier website almost every time.

## Reviews are your best ad

People trust reviews more than anything you say about yourself. A CNA student wants to know: Did real people finish? Did they pass the state test? Did they get a job?

### How to get more reviews

- Ask every graduate personally. A text message with a direct link works best.
- Make it easy. Send the Google review link, not a long email.
- Time it right. Ask right after they pass their exam or get hired, not six months later.
- Respond to every review. Thank the good ones. Address the bad ones professionally.
- Do not buy fake reviews. Google removes them and it hurts your credibility.

Even ten real reviews will separate you from schools with none.

## Build a marketing list from day one

Every person who calls, emails, or visits your website is a lead. Most schools let them slip away. A simple marketing list fixes that.

### What goes on the list

- Name and phone number
- Email address
- Which class they are interested in
- Where they heard about you
- Date of first contact

### What to send them

- A short welcome text after they inquire
- Reminders before enrollment deadlines
- New class announcements
- Study tips or a free CNA practice question once in a while

You do not need fancy software to start. A spreadsheet and a simple email or SMS tool work fine. The point is to follow up, because most students do not enroll on the first call.

## Your website should answer one question

When someone lands on your website, they are asking: "Is this the right school for me?" Your job is to answer that in about ten seconds.

### What makes a CNA school website convert

- A clear headline that says what you do and where you are.
- Your differentiator up front. Evening classes? Payment plans? Job placement partners? Small class sizes? Say it immediately.
- A visible call to action. "Apply now," "See upcoming classes," or "Call to schedule a tour."
- Trust signals: reviews, graduate outcomes, state approval, photos of real instructors.
- Mobile friendly design. Most local searches happen on phones.

Do not hide your tuition, your schedule, or your location. Students who cannot find basic information will leave and call the next school.

## Add an online enrollment page that students can finish in minutes

This is where a lot of schools lose people. A student decides to enroll, then they get a PDF packet, a voicemail, and a request to come in during office hours. By the next morning, life got in the way and they are gone.

An online enrollment page fixes that. It lets a student pick their class, fill out their information, sign agreements, and pay a deposit all in one sitting. No printing. No back and forth. No waiting.

At GO ACADEMIX, we give every school a branded enrollment page that connects directly to the same system that handles payments, attendance, and certificates. Here is what it looks like in our platform.

![GO ACADEMIX branded online enrollment page where students select a class, enter their details, and pay in one flow](ENROLLMENT_SCREENSHOT)

When enrollment takes minutes instead of days, more students make it all the way through.

## Local SEO is not complicated. It is just consistent.

Local SEO means showing up when people nearby search for what you offer. For a CNA school, that usually means Google Business Profile, your website, and a few directory listings.

### Simple local SEO checklist

- Use the same school name, address, and phone number everywhere.
- Add location pages or mentions if you serve multiple cities.
- Get listed in local directories and workforce board sites.
- Write one or two helpful blog posts about CNA classes in your area.
- Encourage graduates to mention your school on LinkedIn or in local groups.

You do not need to become an SEO expert. You just need to be more complete and consistent than the other schools in your area.

## Track what actually brings you students

Marketing only gets better when you know what is working. Ask every new student: "How did you hear about us?" Write it down. After a few months, you will see patterns.

Common sources for CNA schools include:

- Google search
- Facebook or Instagram
- Referrals from current or past students
- Employer or workforce partnerships
- Community flyers or local events

Double down on what works. Drop what does not.

## Marketing is just another system

At the end of the day, marketing your CNA school is not about being the loudest. It is about being the easiest to find, the easiest to trust, and the easiest to enroll in. Get your Google Business Profile right, collect reviews, follow up with leads, build a clear website, and remove friction from enrollment.

If you want to see how GO ACADEMIX handles the enrollment piece, book a demo and we will walk through it together.
`,
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
