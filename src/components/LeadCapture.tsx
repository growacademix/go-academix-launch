import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Mail, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv";

export const LeadCapture = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: { email, school: school || null, source: "landing_page" },
      });
      if (error) throw error;
      setDone(true);
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email jocelyn@goacademix.com.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg border border-border shadow-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Not Ready For A Demo?</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                  Stay in the loop.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Drop your email and we'll send occasional product updates, lessons from running our own school, and early access when new features ship. No spam, unsubscribe anytime.
                </p>
              </div>

              <div>
                {done ? (
                  <div className="flex flex-col items-center text-center gap-3 p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                    <h3 className="font-semibold">You're on the list.</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll be in touch. If you want to skip ahead, book a demo anytime.
                  </p>
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a 30-min demo
                  </a>
                </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-3">
                    <Input
                      type="email"
                      required
                      placeholder="you@yourschool.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={255}
                    />
                    <Input
                      type="text"
                      placeholder="School name (optional)"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      maxLength={255}
                    />
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Sending…" : "Keep me posted"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We'll never share your email. One-click unsubscribe.
                    </p>
                    <p className="text-xs text-center text-muted-foreground">
                      Rather talk now?{" "}
                      <a
                        href={DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <Calendar className="w-3 h-3" />
                        Book a 30-min demo
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
