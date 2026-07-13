import { CheckCircle2 } from "lucide-react";
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
              <span className="text-sm font-medium text-primary">Built with real schools</span>
            </div>

            <h2 className="text-4xl font-bold mb-4">
              Schools already shaping GO ACADEMIX
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building this alongside working Allied Health schools — not in a boardroom.
            </p>
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

          <div className="bg-card rounded-2xl border border-primary/20 shadow-md p-8">
            <blockquote className="text-lg text-foreground italic border-l-4 border-primary pl-6 mb-4">
              "Allied Health Career Training is helping guide the product and plans to move all 3,500+ of their annual students onto GO ACADEMIX. They know these problems firsthand — and so do we."
            </blockquote>
            <p className="text-sm text-muted-foreground pl-6">
              — Connor & Jocelyn, GO ACADEMIX founders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
