import { Newspaper } from "lucide-react";

const mentions = [
  {
    source: "Groover Labs",
    date: "Jan 2026",
    href: "https://www.grooverlabs.org/news/jocelyn-galicia-powell-2026",
    quote:
      "GO ACADEMIX modernizes how Allied Health schools teach, certify, and place students. Healthcare training has been stuck in PDFs, spreadsheets, and outdated LMS systems.",
  },
  {
    source: "Wichita Business Journal",
    date: "Apr 2026",
    href: "https://www.bizjournals.com/wichita/news/2026/04/23/startups-to-watch-tech-entrepreneurship-funding.html",
    quote:
      "Featured among Wichita startups to watch, GO ACADEMIX is part of the city's growing health tech and entrepreneurship momentum.",
  },
];

export const PressMentions = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="pill-badge">
              <Newspaper className="w-3.5 h-3.5" />
              In the news
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mentions.map((m) => (
              <a
                key={m.source}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card rounded-2xl border border-border hover:border-primary/40 p-7 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-foreground">{m.source}</p>
                  <p className="mono-label">/ {m.date}</p>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  "{m.quote}"
                </blockquote>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
