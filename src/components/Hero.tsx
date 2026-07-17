import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="pill-badge">
              <span className="pill-dot" />
              Built with Allied Health school owners
            </span>

            <h1 className="heading-xxl text-5xl lg:text-7xl">
              One platform for your whole school.{" "}
              <span className="text-primary">Finally.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Enrollment, payments, learning, and compliance live in separate tools that don't talk. So your team re-enters the same data three times. We built GO ACADEMIX at our own school. One platform, one student record, one place to run things.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book a 30-min demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="mailto:jocelyn@goacademix.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Email Jocelyn
                </a>
              </Button>
            </div>

            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              No sales pitch. Just a real conversation about what your school is dealing with.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border overflow-hidden bg-[hsl(var(--brand-ink))] aspect-[4/3] relative shadow-lg [&_video::-webkit-media-controls-play-button]:text-primary [&_video::-webkit-media-controls-play-button]:hover:text-primary/90 [&_video::-webkit-media-controls-play-button]:drop-shadow-sm">
              <video
                src={heroVideoAsset.url}
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-4 mono-label text-white/70">
                / 90-sec product tour
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
