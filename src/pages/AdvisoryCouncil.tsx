import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneLink } from "@/components/PhoneLink";
import { ArrowRight, CheckCircle2, Mail, Calendar, Users, MessageSquare, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import foundersPhoto from "@/assets/connor-jocelyn-2025.jpg.asset.json";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1As3Xpq5uWK7VJmTvU0lDvlIB7iZpTKnBE2WocnKb-qIOfJ-PX9RjRGSRsap5SSwgHYOt0dvCv";

const benefits = [
  {
    icon: Sparkles,
    title: "Early Access",
    description: "Be among the first schools to use GO ACADEMIX before public launch.",
  },
  {
    icon: MessageSquare,
    title: "Direct Input",
    description: "Shape the product roadmap with feedback that directly influences development.",
  },
  {
    icon: CheckCircle2,
    title: "Founding Member Benefits",
    description: "Get early access and advisory-member benefits as a thank you for helping build the platform.",
  },
];

const expectations = [
  {
    icon: Calendar,
    title: "30-Minute Demo",
    description: "Start with a single 30-minute demo to see what we are building and share your initial thoughts.",
    href: DEMO_URL,
  },
  {
    icon: Mail,
    title: "Occasional Email Input",
    description: "Occasionally answer short follow-up questions by email when we want your input on a feature or workflow.",
  },
  {
    icon: CheckCircle2,
    title: "No Ongoing Commitments",
    description: "No ongoing meetings, committees, or additional requirements. We know your time is valuable.",
  },
];

const ExpectationCard = ({ item }: { item: typeof expectations[number] }) => (
  <div className="group p-8 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all text-center h-full">
    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
      <item.icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
    <p className="text-muted-foreground">{item.description}</p>
  </div>
);

export const AdvisoryCouncil = () => {
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !school) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-advisory-council", {
        body: { school, email, message: message || null },
      });
      if (error) throw error;
      setSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "Connor or Jocelyn will reach out soon to schedule a conversation.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again, or email jocelyn@goacademix.com directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-accent/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-lg border border-border p-8 shadow-card">
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
                <div className="rounded-lg border border-border shadow-card overflow-hidden bg-card">
                  <img
                    src={foundersPhoto.url}
                    alt="Connor and Jocelyn Powell, co-founders of GO ACADEMIX"
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">Co-Founders, GO ACADEMIX</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Advisory Partnership</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Shape the Future of{" "}
                <span className="text-primary">Allied Health Certificate Learning</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                We are looking for 10 healthcare training schools to join our Advisory Council. This is not a sales pitch. We want honest feedback from people who understand this industry as well as we do.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href="#join">
                    Join the Advisory Council
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <PhoneLink
                  number="316-633-0621"
                  label="Call or Text Connor"
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why Join</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Advisory Council Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are not sending this to sell you software. We are looking for honest feedback from schools that understand this industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Time Commitment</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What We Are Asking For</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Three simple requests that respect your time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {expectations.map((item, index) =>
                item.href ? (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    <ExpectationCard item={item} />
                  </a>
                ) : (
                  <ExpectationCard key={index} item={item} />
                )
              )}
            </div>
          </div>
        </section>

        <section id="join" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg bg-primary p-12 shadow-card">
                <div className="text-center text-primary-foreground">
                  <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Join the Advisory Council</h2>
                  <p className="text-lg text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
                    We are looking for 10 healthcare training schools to help shape the platform. The total commitment is one 30-minute demo, followed by occasional short email questions when we want your input.
                  </p>
                  <p className="text-base text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    No ongoing meetings, no committees, and no other requirements. We know your time is valuable. Schedule a demo with Connor or email Jocelyn and we will handle the rest.
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
                        variant="outline"
                        disabled={submitting}
                        className="w-full h-12 px-8 shadow-sm bg-white text-primary border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary"
                      >
                        {submitting ? "Sending..." : "Request a Conversation"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <p className="text-center text-sm text-primary-foreground/80 mt-4">
                        Rather pick a time?{" "}
                        <a
                          href={DEMO_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-primary-foreground"
                        >
                          Schedule a 30-minute demo on Connor's calendar
                        </a>{" "}
                        or email{" "}
                        <a href="mailto:jocelyn@goacademix.com" className="underline hover:text-primary-foreground">
                          jocelyn@goacademix.com
                        </a>
                        .
                      </p>
                    </form>
                  ) : (
                    <div className="max-w-md mx-auto p-6 bg-background/95 rounded-lg">
                      <div className="flex items-center gap-3 text-foreground justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <p className="font-medium">Thank you! Connor or Jocelyn will be in touch soon.</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/80">
                    <a
                      href={DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Schedule a 30-Minute Demo</span>
                    </a>
                    <a
                      href="mailto:jocelyn@goacademix.com"
                      className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>jocelyn@goacademix.com</span>
                    </a>
                    <PhoneLink
                      number="316-633-0621"
                      label="(316) 633-0621"
                      className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Let's Find a Few Minutes</span>
              </div>
              <h2 className="text-3xl font-semibold mb-6">Prefer to Schedule Directly?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                The only time commitment is a 30-minute demo. After that, we will occasionally send short questions by email. Book a demo with Connor below or email Jocelyn directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule a 30-Minute Demo
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:jocelyn@goacademix.com">
                    <Mail className="mr-2 w-4 h-4" />
                    Email Jocelyn
                  </a>
                </Button>
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
