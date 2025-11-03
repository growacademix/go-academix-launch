import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch soon with early access details.",
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-12 shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
            
            <div className="relative text-center text-primary-foreground">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Healthcare Education?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                Join the waitlist for early access to GO ACADEMIX. Be among the first schools to experience 
                the future of healthcare learning management.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 text-base bg-background/95 text-foreground border-background/20"
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="secondary"
                      className="h-12 px-8 shadow-lg"
                    >
                      Join Waitlist
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-foreground/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Early adopter pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Shape the product</span>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="max-w-md mx-auto p-6 bg-background/95 rounded-xl">
                  <div className="flex items-center gap-3 text-foreground justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="font-medium">
                      Thank you! We'll be in touch soon.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
