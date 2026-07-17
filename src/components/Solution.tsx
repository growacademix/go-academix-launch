import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import shot1 from "@/assets/shot-11.45.17_am.png.asset.json";
import shot2 from "@/assets/shot-11.50.58_am.png.asset.json";
import shot3 from "@/assets/shot-11.49.00_am.png.asset.json";
import shot4 from "@/assets/shot-11.52.40_am.png.asset.json";
import shot5 from "@/assets/shot-11.50.25_am.png.asset.json";
import shot6 from "@/assets/shot-11.51.49_am.png.asset.json";
import shot7 from "@/assets/shot-12.01.33_pm.png.asset.json";

const shots = [
  { src: shot1.url, title: "Owner Dashboard", caption: "One view of enrollment, revenue, and completion. No exports required." },
  { src: shot5.url, title: "Enrollment & Registration", caption: "Your branded catalog page where students self-enroll and pay online." },
  { src: shot2.url, title: "Payments, Financing & Sponsors", caption: "Tuition, deposits, balances, loan options via Fortify Education, and sponsor billing in one place." },
  { src: shot3.url, title: "Student Directory", caption: "Every student, their course, payment status, and contact info at a glance." },
  { src: shot4.url, title: "Learning, Attendance & Grades", caption: "Program details, schedule, modules, grades, and attendance inside one course view." },
  { src: shot7.url, title: "Certificates & Student Portal", caption: "Students see their courses, schedule, grades, certificates, and payments." },
  { src: shot6.url, title: "Team Access", caption: "Bring owners, admins, and instructors into your school with role-based invites." },
];

export const Solution = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="product" className="py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="pill-badge mb-6">
            <span className="pill-dot" />
            Live today
          </span>

          <h2 className="heading-xxl text-4xl lg:text-6xl mt-6 mb-6">
            Everything your school runs on,{" "}
            <span className="text-primary">in one place</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            These are real screens from GO ACADEMIX. The same ones our school and Inspire CNA use every day. Enrollment, payments, learning, and certificates all connect to the same student record. No roadmap promises, just tools you can use from your first login.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {shots.map((shot, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group text-left bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="p-4 pb-0 flex items-center justify-between">
                <span className="mono-num">/ {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="aspect-[16/10] mx-4 mt-2 overflow-hidden bg-muted rounded-lg border border-border">
                <img
                  src={shot.src}
                  alt={shot.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1 tracking-tight">{shot.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{shot.caption}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mb-16 max-w-4xl mx-auto p-5 rounded-2xl border border-border bg-card">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">On the roadmap:</span> automated compliance workflows, advanced state reporting, scheduling, and alumni/career pathways. Already in development with feedback from our partner schools.
          </p>
        </div>

        <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
          <DialogContent className="max-w-6xl p-0 overflow-hidden">
            {open !== null && (
              <div>
                <img src={shots[open].src} alt={shots[open].title} className="w-full h-auto" />
                <div className="p-4 border-t border-border">
                  <h3 className="font-semibold">{shots[open].title}</h3>
                  <p className="text-sm text-muted-foreground">{shots[open].caption}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden bg-gradient-to-br from-primary to-[hsl(var(--brand-green-deep))]">
          <h3 className="heading-xxl text-3xl lg:text-5xl mb-4 text-primary-foreground">
            The best way to see it is to see it.
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Every school runs a little differently. Book a short call and we'll walk through your actual workflows, not a generic demo deck.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
            <Link to="/book-demo">
              <Calendar className="mr-2 w-4 h-4" />
              Book a 30-min demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
