import { AlertCircle, Puzzle, Receipt, ClipboardCheck, Users } from "lucide-react";

const painPoints = [
  {
    title: "Your tools don't talk to each other",
    body: "Student enrolls in one system, gets set up in another, tracked for compliance in a third. Everything is re-typed by hand.",
    icon: Puzzle,
  },
  {
    title: "You're paying for way too much software",
    body: "An LMS built for universities, a SIS that was old ten years ago, plus scheduling and reporting add-ons. The bills add up fast.",
    icon: Receipt,
  },
  {
    title: "Compliance eats your week",
    body: "State reports, clinical hours, immunizations, background checks. It all lives in binders, PDFs, and someone's memory.",
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
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <AlertCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sound Familiar?</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Running an Allied Health school shouldn't feel like duct-taping software together.
          </h2>

          <p className="text-lg text-muted-foreground">
            We've sat with school owners, admins, and instructors. The same frustrations keep coming up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-8 bg-card rounded-lg border border-border shadow-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto">
          If any of that hit close to home, you're not alone. And you don't have to keep living with it.
        </p>
      </div>
    </section>
  );
};
