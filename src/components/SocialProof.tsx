import { CheckCircle2, Quote } from "lucide-react";
import ahctLogo from "@/assets/ahct-logo.png.asset.json";
import inspireLogo from "@/assets/inspire-cna-logo.png.asset.json";
import logo from "@/assets/logo-goacademix-official.png.asset.json";

const stats = [
  { label: "STUDENTS TRAINED · PER YEAR", value: "4,000+", description: "at Allied Health Career Training, our own school" },
  { label: "ADMIN BURDEN VS LEGACY", value: "−34%", description: "time redirected back to students and growth" },
  { label: "PARTNER SCHOOLS LIVE", value: "2", description: "shaping the product in real classrooms" },
];

const customerLogos = [
  { src: ahctLogo.url, alt: "Allied Health Career Training", href: "https://alliedhealthcareertraining.com", caption: "ALLIED HEALTH CAREER TRAINING" },
  { src: inspireLogo.url, alt: "Inspire CNA School", href: "https://inspirecnaschool.com", caption: "INSPIRE CNA SCHOOL · DENVER" },
];

export const SocialProof = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="pill-badge mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Built with real schools
            </span>

            <h2 className="heading-xxl text-4xl lg:text-6xl mt-6 mb-6">
              Built by owners,
              <br />
              shaped by real schools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We own <span className="font-semibold text-foreground">Allied Health Career Training</span> and partner with <span className="font-semibold text-foreground">Inspire CNA School</span> in Denver. Two real schools shaping GO ACADEMIX in real classrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl border border-border p-7">
                <p className="mono-label mb-3">/ {stat.label}</p>
                <p className="text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
            <div className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-primary fill-primary/20 mb-6" />
                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed tracking-tight">
                  We own Allied Health Career Training, so we live these problems every day. Inspire CNA School is already using GO ACADEMIX and giving us feedback. Together we make sure the platform actually works for owners like us.
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0">
                  <img src={logo.url} alt="GO ACADEMIX" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Connor & Jocelyn</p>
                  <p className="mono-label">/ GO ACADEMIX FOUNDERS</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="mono-label px-1">/ Built &amp; used by</div>
              {customerLogos.map((c) => (
                <a
                  key={c.alt}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-card rounded-2xl border border-border hover:border-primary/40 p-6 flex flex-col items-center justify-center transition-colors min-h-[160px]"
                >
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="h-14 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-200 mb-3"
                    loading="lazy"
                  />
                  <p className="mono-label text-center">/ {c.caption}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
