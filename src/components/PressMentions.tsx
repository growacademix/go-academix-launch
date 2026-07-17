import { Newspaper } from "lucide-react";
import grooverLogo from "@/assets/groover-labs.webp.asset.json";
import wbjLogo from "@/assets/wichita-business-journal.jpg.asset.json";

const mentions = [
  {
    source: "Groover Labs",
    logo: grooverLogo.url,
    href: "https://www.grooverlabs.org/news/jocelyn-galicia-powell-2026",
  },
  {
    source: "Wichita Business Journal",
    logo: wbjLogo.url,
    href: "https://www.bizjournals.com/wichita/news/2026/04/23/startups-to-watch-tech-entrepreneurship-funding.html",
  },
];

export const PressMentions = () => {
  return (
    <section className="py-14 lg:py-20 border-y border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
          <span className="pill-badge">
            <Newspaper className="w-3.5 h-3.5" />
            In the news
          </span>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {mentions.map((m) => (
              <a
                key={m.source}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center h-14 opacity-80 hover:opacity-100 transition-opacity"
              >
                <img
                  src={m.logo}
                  alt={`${m.source} logo`}
                  className="h-12 md:h-14 w-auto max-w-[180px] object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
