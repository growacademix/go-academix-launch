import { Building2, Users, CheckCircle2 } from "lucide-react";
import ahctLogo from "@/assets/ahct-logo.png.asset.json";
import inspireLogo from "@/assets/inspire-cna-logo.png.asset.json";

const customerLogos = [
  { src: ahctLogo.url, alt: "Allied Health Career Training", href: "https://alliedhealthcareertraining.com" },
  { src: inspireLogo.url, alt: "Inspire CNA School", href: "https://inspirecnaschool.com" },
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Proven Success</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Leading Healthcare Educators
            </h2>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {customerLogos.map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <div className="bg-card rounded-2xl border-2 border-primary/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <div className="flex items-center gap-3 text-primary-foreground">
                <Building2 className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">Allied Health Career Training</h3>
                  <p className="text-primary-foreground/80">Our Launch Partner</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3,500</div>
                  <div className="text-muted-foreground">Students per Year</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Committed to Platform</div>
                </div>
              </div>
              
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                "Allied Health Career Training is actively guiding development and committed to adopting 
                the GO ACADEMIX platform. This partnership validates our vision of transforming healthcare education 
                with modern, integrated technology."
              </blockquote>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-card rounded-xl border border-border">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">1,400+</div>
              <div className="text-sm text-muted-foreground">Schools That Need This</div>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <GraduationCap className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">Healthcare</div>
              <div className="text-sm text-muted-foreground">Focused Solution</div>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">Purpose-Built</div>
              <div className="text-sm text-muted-foreground">For Allied Health Schools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);
