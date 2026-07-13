import { CheckCircle2 } from "lucide-react";
import ahctLogo from "@/assets/ahct-logo.png.asset.json";
import inspireLogo from "@/assets/inspire-cna-logo.png.asset.json";

const customerLogos = [
  { src: ahctLogo.url, alt: "Allied Health Career Training", href: "https://alliedhealthcareertraining.com" },
  { src: inspireLogo.url, alt: "Inspire CNA School", href: "https://inspirecnaschool.com" },
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Built With Real Schools</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Built by owners, shaped by real schools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Allied Health Career Training is our school. Inspire CNA School is a partner we've already sold to. Both are helping us build GO ACADEMIX — not in a boardroom, but in real classrooms.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {customerLogos.map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <div className="bg-card rounded-lg shadow-card p-8 border-l-4 border-l-primary">
            <blockquote className="text-lg text-foreground leading-relaxed mb-4">
              "We own Allied Health Career Training, so we live these problems every day. Inspire CNA School in Denver is already using GO ACADEMIX and giving us feedback. Together, these schools are making sure the platform actually works for owners like us."
            </blockquote>
            <p className="text-sm text-muted-foreground">
              — Connor & Jocelyn, GO ACADEMIX founders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
