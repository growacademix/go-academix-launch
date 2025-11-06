import { 
  GraduationCap, 
  FileCheck, 
  Award, 
  Network,
  TrendingUp,
  Heart
} from "lucide-react";
import featureImage from "@/assets/feature-network.jpg";

const features = [
  {
    icon: GraduationCap,
    title: "Integrated Registration",
    description: "Streamlined student enrollment and course management in one unified system.",
  },
  {
    icon: FileCheck,
    title: "Compliance Reporting",
    description: "Healthcare-specific compliance tools built right into the platform.",
  },
  {
    icon: Award,
    title: "Credential Stacking",
    description: "Help students advance from one credential to the next seamlessly.",
  },
  {
    icon: Network,
    title: "Professional Network",
    description: "Built-in networking to keep students connected and advancing in their careers.",
  },
  {
    icon: TrendingUp,
    title: "Improved Retention",
    description: "Reduce student burnout and improve graduation rates with better support.",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Features designed to support students beyond the classroom experience.",
  },
];

export const Solution = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">The Solution</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Meet{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GO ACADEMIX
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The first platform to combine Learning Management System (LMS) and Student Information System (SIS) 
            into one unified, modern solution purpose-built for allied healthcare schools. 
            Reduce costs while improving outcomes.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Traditional Systems vs GO ACADEMIX</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-destructive">Traditional Approach</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium mb-1">Separate LMS</div>
                    <div className="text-muted-foreground">Course content & grades</div>
                  </div>
                  <div className="text-center text-muted-foreground">+</div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium mb-1">Separate SIS</div>
                    <div className="text-muted-foreground">Student records & registration</div>
                  </div>
                  <div className="text-center text-muted-foreground">=</div>
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="font-medium text-destructive">High Costs + Data Silos</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">GO ACADEMIX Integration</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
                    <div className="font-medium mb-2">Unified Platform</div>
                    <div className="space-y-1 text-muted-foreground">
                      <div>✓ Learning Management</div>
                      <div>✓ Student Information</div>
                      <div>✓ Registration & Enrollment</div>
                      <div>✓ Compliance Reporting</div>
                      <div>✓ Professional Networking</div>
                    </div>
                  </div>
                  <div className="text-center text-muted-foreground">=</div>
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="font-medium text-primary">34% Cost Reduction + Seamless Data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-accent via-accent/50 to-background rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <img 
              src={featureImage} 
              alt="Connected network illustration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative max-w-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Transform Your School's Operations
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              By combining LMS and SIS into one platform, GO ACADEMIX eliminates expensive redundancies, 
              reduces administrative burden by 34%, and improves retention and graduation rates. 
              Our integrated approach supports the healthcare workforce pipeline by making education more 
              accessible, connected, and cost-effective.
            </p>
            <div className="space-y-3">
              {[
                "Reduce administrative burden by up to 34%",
                "Improve student retention and graduation rates",
                "Support the healthcare workforce pipeline",
                "Modern, integrated, student-centered platform",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
