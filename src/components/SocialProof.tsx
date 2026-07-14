import { CheckCircle2, Quote } from "lucide-react";
import ahctLogo from "@/assets/ahct-logo.png.asset.json";
import inspireLogo from "@/assets/inspire-cna-logo.png.asset.json";
import logo from "@/assets/logo-goacademix-official.png.asset.json";

const stats = [
  {
    label: "STUDENTS TRAINED · PER YEAR",
    value: "4,000+",
    description: "at Allied Health Career Training, our own school",
  },
  {
    label: "ADMIN BURDEN VS LEGACY",
    value: "-34%",
    description: "compared to legacy LMS + SIS setups",
  },
  {
    label: "PARTNER SCHOOLS LIVE",
    value: "2",
    description: "shaping the product in real classrooms",
  },
];

const customerLogos = [
  {
    src: ahctLogo.url,
    alt: "Allied Health Career Training",
    href: "https://alliedhealthcareertraining.com",
    caption: "ALLIED HEALTH CAREER TRAINING",
  },
  {
    src: inspireLogo.url,
    alt: "Inspire CNA School",
    href: "https://inspirecnaschool.com",
    caption: "INSPIRE CNA SCHOOL · DENVER",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Built with real schools</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight">
              Built by owners,
              <br />
              shaped by real schools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We own <span className="font-semibold text-foreground">Allied Health Career Training</span> and partner
              with <span className="font-semibold text-foreground">Inspire CNA School</span> in Denver. Two real
              schools shaping GO ACADEMIX in real classrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl border border-border p-6 shadow-sm"
              >
                <p className="text-xs font-medium text-muted-foreground tracking-wider mb-3">
                  / {stat.label}
                </p>
                <p className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
            <div className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-primary fill-primary/20 mb-6" />
                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed">
                  We own Allied Health Career Training, so we live these problems every day. Inspire CNA School is
                  already using GO ACADEMIX and giving us feedback — together we make sure the platform actually works
                  for owners like us.
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={logo.url}
                      alt="GO ACADEMIX"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Connor & Jocelyn</p>
                    <p className="text-xs font-medium text-muted-foreground tracking-wider">
                      / GO ACADEMIX FOUNDERS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              {customerLogos.map((logo) => (
                <a
                  key={logo.alt}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-card rounded-2xl border border-dashed border-border hover:border-primary/40 p-6 flex flex-col items-center justify-center transition-colors min-h-[180px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-200 mb-4"
                    loading="lazy"
                  />
                  <p className="text-xs font-medium text-muted-foreground tracking-wider text-center">
                    / {logo.caption}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
