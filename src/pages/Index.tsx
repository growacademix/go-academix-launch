import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CostComparison } from "@/components/CostComparison";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { SocialProof } from "@/components/SocialProof";

import { LeadCapture } from "@/components/LeadCapture";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="container mx-auto px-6">
            <CostComparison />
          </div>
        </section>
        <SocialProof />
        <Problem />
        <Solution />
        
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
