import { Button } from "@/components/ui/button";
import { Calendar, Mail, ArrowRight } from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv";

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg bg-primary p-12 shadow-card">
            <div className="text-center text-primary-foreground">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Let's see if GO ACADEMIX is right for your school.
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                Grab 30 minutes with us. We'll show you the platform, ask about how your school runs today, and be honest about whether we're a fit. No pressure, no follow-up spam.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="mailto:jocelyn@goacademix.com">
                    <Mail className="mr-2 w-4 h-4" />
                    jocelyn@goacademix.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
