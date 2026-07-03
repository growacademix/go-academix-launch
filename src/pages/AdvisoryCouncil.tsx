import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, Phone, Mail, Calendar, Users, MessageSquare, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Sparkles,
    title: "Early Access",
    description: "Be among the first schools to use GO ACADEMIX before public launch."
  },
  {
    icon: MessageSquare,
    title: "Direct Input",
    description: "Shape the product roadmap with feedback that directly influences development."
  },
  {
    icon: CheckCircle2,
    title: "Heavily Discounted Pricing",
    description: "Lock in advisory-member pricing as a thank you for helping build the platform."
  }
];

const expectations = [
  "Start with a single 30-minute demo to see what we are building and share your initial thoughts.",
  "Occasionally answer short follow-up questions by email when we want your input on a feature or workflow.",
  "No ongoing meetings, committees, or additional requirements. We know your time is valuable.",
  "Share your honest feedback on features that matter most to your school.",
  "Help us build something that better serves vocational healthcare schools across the country."
];

export const AdvisoryCouncil = () => {
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "Connor or Jocelyn will reach out soon to schedule a conversation."
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-background" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Advisory Partnership</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Shape the Future of{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Healthcare Learning
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                We are looking for 10 healthcare training schools to join our Advisory Council. 
                This is not a sales pitch. We want honest feedback from people who understand this industry as well as we do.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#join">
                  <Button size="lg" className="h-12 px-8 shadow-md">
                    Join the Advisory Council
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="tel:316-633-0621">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    <Phone className="mr-2 w-4 h-4" />
                    Call or Text Connor
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    My wife, Jocelyn, and I own Allied Health Career Training in Wichita, Kansas. Each year, we train approximately 4,000 students and have grown to become one of the largest private, for-profit healthcare career schools in our state.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Over the past 15 years, we have used several different platforms for learning management and enrollment. Unfortunately, we have never found one that truly fit the needs of schools like ours. Most systems seem to be some combination of too expensive, overly complicated, inefficient, or designed for traditional colleges rather than vocational healthcare training programs.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    So we decided to build our own solution. GO ACADEMIX combines enrollment, payments, sponsor and loans tracking, learning management, certification tracking, attendance, and grades into a single platform designed specifically for private, for-profit healthcare training schools.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                  <img
                    src="/connor-jocelyn.jpg"
                    alt="Connor and Jocelyn Powell, co-founders of GO ACADEMIX"
                    className="relative rounded-3xl shadow-2xl w-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">Co-Founders, GO ACADEMIX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why Join</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Advisory Council Benefits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are not sending this to sell you software. We are looking for honest feedback from schools that understand this industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">What We Are Asking For</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {expectations.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-12 shadow-2xl">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />

                <div className="relative text-center text-primary-foreground">
                  <h2 className="text-4xl font-bold mb-6">
                    Join the Advisory Council
                  </h2>
                  <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                    If you would be willing to spend a few minutes sharing your thoughts, challenges, and frustrations with your current systems, we would genuinely appreciate the opportunity to connect.
                  </p>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
                      <div className="space-y-4 mb-6">
                        <div>
                          <label htmlFor="school" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                            School Name
                          </label>
                          <Input
                            id="school"
                            type="text"
                            placeholder="Your school name"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            required
                            className="h-12 text-base bg-background/95 text-foreground border-background/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@school.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-12 text-base bg-background/95 text-foreground border-background/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                            What challenges are you facing? (Optional)
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your current systems and what frustrates you most..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="text-base bg-background/95 text-foreground border-background/20"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        variant="secondary"
                        className="w-full h-12 px-8 shadow-lg"
                      >
                        Request a Conversation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  ) : (
                    <div className="max-w-md mx-auto p-6 bg-background/95 rounded-xl">
                      <div className="flex items-center gap-3 text-foreground justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <p className="font-medium">
                          Thank you! Connor or Jocelyn will be in touch soon.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-primary-foreground/80">
                    <a href="tel:316-633-0621" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>(316) 633-0621</span>
                    </a>
                    <a href="mailto:Connor@alliedhealthcareertraining.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>Connor@alliedhealthcareertraining.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
                <Calendar className="w-4 h-4 text-secondary-foreground" />
                <span className="text-sm font-medium text-secondary-foreground">Let’s Find a Few Minutes</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Prefer to Schedule Directly?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                If you would rather book a time on Jocelyn’s calendar or reach out directly, we would love to hear from you. Together, we can build something that better serves vocational healthcare schools across the country.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:316-633-0621">
                  <Button size="lg" className="h-12 px-8 shadow-md">
                    <Phone className="mr-2 w-4 h-4" />
                    Call or Text (316) 633-0621
                  </Button>
                </a>
                <a href="mailto:Connor@alliedhealthcareertraining.com">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    <Mail className="mr-2 w-4 h-4" />
                    Email Connor
                  </Button>
                </a>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                Thank you for everything you do to educate the next generation of healthcare professionals.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdvisoryCouncil;
