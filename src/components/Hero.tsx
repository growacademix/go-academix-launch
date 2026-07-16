import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              One platform for your whole school.{" "}
              <span className="text-primary">Finally.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Right now your enrollment, payments, learning, and compliance live in separate tools that do not talk to each other. Your team re-enters the same data three times. And instead of focusing on students, you are managing software. We built GO ACADEMIX because we lived that at our own school, Allied Health Career Training. One platform, one student record, one place to run things.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book a 30-min demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:jocelyn@goacademix.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Email Jocelyn
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No sales pitch. Just a real conversation about what your school is dealing with.
            </p>
          </div>

          <div className="relative lg:block hidden">
            <div className="rounded-lg border border-border shadow-card overflow-hidden bg-card">
              <video
                src={heroVideoAsset.url}
                controls
                loop
                playsInline
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
