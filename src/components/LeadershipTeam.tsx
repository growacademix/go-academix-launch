import { Users } from "lucide-react";
import jocelynHeadshot from "@/assets/jocelyn-headshot.png.asset.json";
import connorHeadshot from "@/assets/connor-headshot.png.asset.json";
import masonHeadshot from "@/assets/mason-headshot.png.asset.json";

const leaders = [
  {
    imageUrl: jocelynHeadshot.url,
    imageAlt: "Jocelyn Powell",
    name: "Jocelyn Powell",
    role: "Chief Executive Officer, GO ACADEMIX",
    bio: "Jocelyn is the CEO and Co-Founder of GO ACADEMIX, where she leads vision, strategy, and growth. As an entrepreneur with experience building businesses across education, technology, and staffing, she is passionate about creating software that solves real operational problems for school owners. Together with her husband, Connor, Jocelyn also owns Allied Health Career Training, one of Kansas' leading allied health schools. Operating a school firsthand has given her deep insight into the challenges of admissions, compliance, scheduling, payments, and student management. Those experiences became the foundation for GO ACADEMIX. Her mission is simple: help healthcare schools spend less time managing disconnected systems and more time educating students and growing their businesses.",
  },
  {
    imageUrl: connorHeadshot.url,
    imageAlt: "Connor Powell",
    name: "Connor Powell",
    role: "Chief Executive Officer, Allied Health Career Training",
    bio: "Connor is the CEO of Allied Health Career Training and Co-Founder of GO ACADEMIX. He has helped grow Allied Health Career Training into one of the region's leading healthcare education organizations, serving thousands of students each year. As a school owner and operator, Connor understands the day-to-day realities of running an allied health school. From regulatory compliance and staffing to student experience and operational efficiency, he brings firsthand knowledge to every product decision at GO ACADEMIX. His focus is ensuring the platform solves the real problems school owners face, making it easier to operate successful schools while delivering exceptional student outcomes.",
  },
  {
    imageUrl: masonHeadshot.url,
    imageAlt: "Mason Powell",
    name: "Mason Powell",
    role: "Chief Product Officer, GO ACADEMIX",
    bio: "Mason is the Chief Product Officer at GO ACADEMIX, where he leads product strategy, user experience, and platform development. Working closely with school owners, instructors, and administrators, Mason translates real operational challenges into intuitive software solutions. He collaborates across engineering, customer feedback, and school operations to ensure every feature is practical, scalable, and designed for the way healthcare schools actually operate. His product philosophy is centered on simplicity, reliability, and building technology that empowers educators instead of slowing them down. Under Mason's product leadership, GO ACADEMIX continues to evolve alongside its partner schools, ensuring the platform grows with the changing needs of healthcare education.",
  },
];

export const LeadershipTeam = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="pill-badge mb-6">
              <Users className="w-3.5 h-3.5" />
              Leadership Team
            </span>
            <h2 className="heading-xxl text-4xl lg:text-6xl mt-6 mb-6">
              Meet the team behind
              <br />
              GO ACADEMIX
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are school owners, operators, and product builders who set out to solve the problems we live every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={leader.imageUrl}
                      alt={leader.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {leader.name}
                  </h3>
                  <p className="mono-label mt-1">/ {leader.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
