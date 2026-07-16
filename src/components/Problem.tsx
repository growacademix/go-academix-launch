import { AlertCircle, Puzzle, Receipt, ClipboardCheck, Users } from "lucide-react";

const painPoints = [
  {
    title: "Your tools don't talk to each other",
    body: "A student enrolls in one system, gets set up in another, and is tracked for compliance in a third. Everything is re-typed by hand.",
    icon: Puzzle,
  },
  {
    title: "You're paying for way too much software",
    body: "An LMS built for universities, a SIS that was old ten years ago, plus scheduling and reporting add-ons. The bills add up fast.",
    icon: Receipt,
  },
  {
    title: "Compliance eats your week",
    body: "State reports, clinical hours, immunizations, background checks. All living in binders, PDFs, and someone's memory.",
    icon: ClipboardCheck,
  },
  {
    title: "Students slip through the cracks",
    body: "Without one view of a student, it's hard to catch who's falling behind until it's too late. Re-enrolling them is even harder.",
    icon: Users,
  },
];

export const Problem = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="pill-badge mb-6">
            <AlertCircle className="w-3.5 h-3.5" />
            Sound familiar?
          </span>

          <h2 className="heading-xxl text-4xl lg:text-6xl mt-6 mb-6">
            Running an Allied Health school shouldn't feel like duct-taping software together.
          </h2>

          <p className="text-lg text-muted-foreground">
            We've sat with school owners, admins, and instructors. The same four frustrations keep coming up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {painPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-8 bg-card rounded-2xl border border-border relative"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="mono-num">/ {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
