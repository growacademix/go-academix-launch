import { AlertCircle, Users, Wrench, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Users,
    stat: "3.2 Million",
    label: "Healthcare worker shortage projected by 2026",
  },
  {
    icon: TrendingDown,
    stat: "65,766+",
    label: "Qualified nursing applications rejected in 2023",
  },
  {
    icon: Wrench,
    stat: "1,400 Schools",
    label: "Struggling with fragmented, outdated technology",
  },
];

export const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Crisis</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Healthcare Education Is <span className="text-destructive">Broken</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schools training healthcare professionals are forced to piece together multiple tools for registration, learning, 
            compliance reporting, and student tracking. This creates inefficiency, drives up costs, and risks losing students 
            along the credentialing pathway.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all"
            >
              <problem.icon className="w-12 h-12 text-destructive mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">
                {problem.stat}
              </div>
              <p className="text-muted-foreground">{problem.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">The Legacy LMS Problem</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Current learning management systems like Canvas or Blackboard were built for general education, not healthcare. 
            They lack healthcare-specific compliance tools, credential tracking, and features that keep students feeling 
            supported beyond the classroom. Schools face a heavy administrative burden and students miss opportunities 
            to advance or burn out and leave the healthcare industry.
          </p>
        </div>
      </div>
    </section>
  );
};
