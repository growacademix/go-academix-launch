import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { SocialProof } from "@/components/SocialProof";

import { LeadCapture } from "@/components/LeadCapture";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        
        <LeadCapture />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
