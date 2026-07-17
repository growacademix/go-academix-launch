import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="pill-badge mb-5">
                <Mail className="w-3.5 h-3.5" />
                Not ready for a demo?
              </span>
              <h2 className="heading-xxl text-3xl lg:text-5xl mt-4 mb-4">
                Stay in the loop.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Drop your email and we'll send occasional product updates, lessons from simplifying our own school, and early access when new features ship. No spam, unsubscribe anytime.
              </p>
            </div>

            <div>
              {done ? (
                <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                  <h3 className="font-semibold">You're on the list.</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll be in touch. If you want to skip ahead, book a demo anytime.
                  </p>
                  <Link
                    to="/book-demo"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a 30-min demo
                  </Link>
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
                    className="rounded-full h-12 px-5"
                  />
                  <Input
                    type="text"
                    placeholder="School name (optional)"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    maxLength={255}
                    className="rounded-full h-12 px-5"
                  />
                  <Button type="submit" size="lg" className="w-full rounded-full" disabled={loading}>
                    {loading ? "Sending…" : "Keep me posted"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll never share your email. One-click unsubscribe.
                  </p>
                  <p className="text-xs text-center text-muted-foreground">
                    Rather talk now?{" "}
                    <Link
                      to="/book-demo"
                      className="font-medium text-primary hover:underline"
                    >
                      Book a 30-min demo →
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
