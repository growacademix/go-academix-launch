import {
  GraduationCap,
  FileCheck,
  Award,
  Network,
  TrendingUp,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv";

const features = [
  {
    icon: GraduationCap,
    title: "Enrollment & Registration",
    description: "Sign students up, collect payments, and get them into courses without re-entering data three times.",
  },
  {
    icon: FileCheck,
    title: "Compliance, Done for You",
    description: "Clinical hours, immunizations, background checks, and state reporting — tracked automatically as students move through the program.",
  },
  {
    icon: Award,
    title: "Stackable Credentials",
    description: "Move a CNA into Med Tech, or a PCT into Phlebotomy, without rebuilding their record from scratch.",
  },
  {
    icon: Network,
    title: "Stay Connected After Graduation",
    description: "Alumni network and job pathways that keep grads in healthcare — and keep them coming back for the next credential.",
  },
  {
    icon: TrendingUp,
    title: "Actually See What's Happening",
    description: "One dashboard for enrollment, attendance, grades, and completion. No exports, no pivot tables.",
  },
  {
    icon: Heart,
    title: "Built for Allied Health",
    description: "Not general education, not K-12 — every workflow is designed around how your school actually operates.",
  },
];

export const Solution = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">One Platform</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Everything your school runs on,{" "}
            <span className="text-primary">in one place</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            GO ACADEMIX combines your LMS and SIS into a single, modern platform built specifically for Allied Health schools — so you can drop the extra subscriptions and stop patching things together.
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

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
