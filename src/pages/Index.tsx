import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { SocialProof } from "@/components/SocialProof";
import { PressMentions } from "@/components/PressMentions";
import { CostComparison } from "@/components/CostComparison";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <PressMentions />
        <CostComparison />
        <Problem />
        <Solution />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
