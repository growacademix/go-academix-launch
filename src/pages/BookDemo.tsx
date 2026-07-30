import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar } from "lucide-react";

const CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv?gv=true";

export const BookDemo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <span className="pill-badge mb-4">
              <Calendar className="w-3.5 h-3.5" />
              30 minutes
            </span>
            <h1 className="heading-xxl text-3xl lg:text-4xl mt-3 mb-3">
              Book a demo with Jocelyn
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Pick a time that works for you. We will show you how GO ACADEMIX works and answer whatever questions you have about your school.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-1.5 sm:p-2 shadow-sm overflow-hidden">
              <iframe
                src={CALENDAR_EMBED_URL}
                title="Book a 30-minute demo with Jocelyn at GO ACADEMIX"
                className="w-full border-0 rounded-xl h-[calc(100vh-260px)] min-h-[560px] max-h-[900px]"
                frameBorder={0}
                allow="fullscreen"
              />
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Prefer email? Reach us at{" "}
              <a href="mailto:jocelyn@goacademix.com" className="font-medium text-primary hover:underline">
                jocelyn@goacademix.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;
