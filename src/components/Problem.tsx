import { Puzzle, Receipt, ClipboardCheck, Users } from "lucide-react";

const painPoints = [
  {
    title: "Your tools don't talk to each other",
    body: "Student enrolls in one system, gets set up in another, tracked for compliance in a third. Everything is re-typed by hand.",
    icon: Puzzle,
  },
  {
    title: "Your team is pulled in six directions",
    body: "One tab for the LMS, one for billing, one for reports, and a folder of spreadsheets holding it together. Context switching eats your day.",
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Running an Allied Health school shouldn't feel like duct-taping software together.
          </h2>

          <p className="text-lg text-muted-foreground">
            We've sat with school owners, admins, and instructors. The same frustrations keep coming up. The real cost is not the money. It is the time and focus that never makes it back to your students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((p, i) => {
            const Icon = p.icon;
            const isTeal = i % 2 === 0;
            return (
              <div
                key={i}
                className="p-8 bg-card rounded-lg border border-border shadow-card border-l-4 border-l-transparent"
                style={{ borderLeftColor: isTeal ? "hsl(var(--primary))" : "hsl(var(--success))" }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border mb-5 ${
                    isTeal
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-success/10 border-success/30 text-success"
                  }`}
                >
                  <Icon className="w-6 h-6" />
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
