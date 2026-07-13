import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import shot1 from "@/assets/shot-11.45.17_am.png.asset.json";
import shot2 from "@/assets/shot-11.50.58_am.png.asset.json";
import shot3 from "@/assets/shot-11.49.00_am.png.asset.json";
import shot4 from "@/assets/shot-11.52.40_am.png.asset.json";
import shot5 from "@/assets/shot-11.50.25_am.png.asset.json";
import shot6 from "@/assets/shot-11.51.49_am.png.asset.json";
import shot7 from "@/assets/shot-12.01.33_pm.png.asset.json";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv";

const shots = [
  {
    src: shot1.url,
    title: "Owner Dashboard",
    caption: "One view of enrollment, revenue, and completion — no exports required.",
  },
  {
    src: shot5.url,
    title: "Enrollment & Registration",
    caption: "Your branded catalog page — students self-enroll and pay online.",
  },
  {
    src: shot2.url,
    title: "Payments, Financing & Sponsors",
    caption: "Tuition, deposits, balances, Fortify loan options, and sponsor billing in one place.",
  },
  {
    src: shot3.url,
    title: "Student Directory",
    caption: "Every student, their course, payment status, and contact info at a glance.",
  },
  {
    src: shot4.url,
    title: "Learning, Attendance & Grades",
    caption: "Program details, schedule, modules, grades, and attendance — all inside one course view.",
  },
  {
    src: shot7.url,
    title: "Certificates & Student Portal",
    caption: "Students see their courses, schedule, grades, certificates, and payments.",
  },
  {
    src: shot6.url,
    title: "Team Access",
    caption: "Bring owners, admins, and instructors into your school with role-based access.",
  },
];

export const Solution = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Live Today</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Everything your school runs on,{" "}
            <span className="text-primary">in one place</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These are real screens from GO ACADEMIX — the same ones our school and Inspire CNA use every day. No roadmap promises, just the tools you can use from your first login.
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border shadow-card p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">What Most Schools Use Today vs. GO ACADEMIX</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-muted-foreground">Today</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted rounded-md border border-border">
                  <div className="font-medium mb-1">LMS Subscription</div>
                  <div className="text-muted-foreground">Course content & grades</div>
                </div>
                <div className="text-center text-muted-foreground">+</div>
                <div className="p-3 bg-muted rounded-md border border-border">
                  <div className="font-medium mb-1">SIS Subscription</div>
                  <div className="text-muted-foreground">Records, enrollment, billing</div>
                </div>
                <div className="text-center text-muted-foreground">+</div>
                <div className="p-3 bg-muted rounded-md border border-border">
                  <div className="font-medium mb-1">Payment Processor, Spreadsheets, Manual Tracking…</div>
                  <div className="text-muted-foreground">Held together by staff time</div>
                </div>
                <div className="text-center text-muted-foreground">=</div>
                <div className="p-3 bg-muted rounded-md border border-border">
                  <div className="font-medium">Overpaying. Overworked. Data everywhere.</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">With GO ACADEMIX — Live Today</h4>
              <div className="space-y-3 text-sm">
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-md">
                  <div className="font-medium mb-2">One platform, one login</div>
                  <div className="space-y-1 text-muted-foreground">
                    <div>Enrollment & registration</div>
                    <div>Sponsor tracking</div>
                    <div>Payments & Fortify loan option integration</div>
                    <div>Learning management</div>
                    <div>Certificate tracking</div>
                    <div>Attendance & grades</div>
                  </div>
                </div>
                <div className="text-center text-muted-foreground">=</div>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-md">
                  <div className="font-medium text-primary">Fewer vendors, less busywork, one source of truth.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto p-4 rounded-md border border-border bg-muted/50">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">On the roadmap:</span> automated compliance workflows, advanced state reporting, scheduling, and alumni/career pathways — already in development with feedback from our partner schools.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {shots.map((shot, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group text-left bg-card rounded-lg border border-border overflow-hidden hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={shot.src}
                  alt={shot.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{shot.title}</h3>
                <p className="text-sm text-muted-foreground">{shot.caption}</p>
              </div>
            </button>
          ))}
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

        <div className="bg-primary rounded-lg p-12 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-primary-foreground">
            The best way to see it is to see it.
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Every school runs a little differently. Book a short call and we'll walk through your actual workflows — not a generic demo deck.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-primary border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary"
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 w-4 h-4" />
              Book a 30-min demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
