import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-background" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                Built with Allied Health school owners
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              One platform for your school.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Finally.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              You're paying for an LMS, a SIS, a scheduling tool, a compliance tracker, and probably a few spreadsheets holding it all together. We know — because we run Allied Health Career Training, our own school, and we were doing the same thing. GO ACADEMIX brings it into one platform designed for Allied Health schools.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-12 px-8 shadow-md">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book a 30-min demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8">
                <a href="mailto:jocelyn@goacademix.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Email Jocelyn
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No sales pitch — just a real conversation about what your school is dealing with.
            </p>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <video
              src={heroVideoAsset.url}
              autoPlay
              muted
              controls
              loop
              playsInline
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
