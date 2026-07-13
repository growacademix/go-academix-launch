import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import shot1 from "@/assets/shot-11.45.17_am.png.asset.json";
import shot2 from "@/assets/shot-11.50.58_am.png.asset.json";
import shot3 from "@/assets/shot-11.49.00_am.png.asset.json";
import shot4 from "@/assets/shot-11.52.40_am.png.asset.json";
import shot5 from "@/assets/shot-11.50.25_am.png.asset.json";
import shot6 from "@/assets/shot-11.51.49_am.png.asset.json";
import shot7 from "@/assets/shot-12.01.33_pm.png.asset.json";

const shots = [
  { src: shot1.url, title: "Owner Dashboard", caption: "One view of enrollment, revenue, and completion — no exports required." },
  { src: shot2.url, title: "Payments & Sponsors", caption: "Tuition, deposits, balances, and sponsor billing tracked in one place." },
  { src: shot3.url, title: "Student Directory", caption: "Every student, their course, payment status, and contact info at a glance." },
  { src: shot4.url, title: "Course Detail", caption: "Program details, deposit rules, schedule, modules, grades, and attendance." },
  { src: shot5.url, title: "Public Enrollment Page", caption: "Your branded catalog page — students self-enroll and pay online." },
  { src: shot6.url, title: "Team Invitations", caption: "Bring owners, admins, and instructors into your school with role-based access." },
  { src: shot7.url, title: "Student Portal", caption: "Students see their courses, schedule, grades, certificates, and payments." },
];

export const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Product Tour</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            A peek inside <span className="text-primary">GO ACADEMIX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are real screens from the platform — the same ones our school and Inspire CNA use every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};
