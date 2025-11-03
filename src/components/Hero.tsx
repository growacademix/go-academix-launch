import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-healthcare.jpg";

export const Hero = () => {
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
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-background" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                Solving the healthcare education crisis
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The Future of{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Healthcare Learning
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              An all-in-one learning management platform designed specifically for allied healthcare schools. 
              Integrated registration, compliance reporting, credential stacking, and professional networking—all in one place.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base"
                />
                <Button type="submit" size="lg" className="h-12 px-8 shadow-md">
                  Get Early Access
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg border border-primary/20">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-accent-foreground font-medium">
                  Thanks! We'll contact you soon about early access.
                </p>
              </div>
            )}

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Early adopter benefits</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Healthcare education professionals collaborating"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
