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
    <section className="py-12 lg:py-16 bg-accent/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <span className="pill-badge shrink-0">
              <Newspaper className="w-3.5 h-3.5" />
              In the news
            </span>

            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              {mentions.map((m) => (
                <a
                  key={m.source}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center h-12 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={m.logo}
                    alt={`${m.source} logo`}
                    className="max-h-12 w-auto max-w-[180px] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
