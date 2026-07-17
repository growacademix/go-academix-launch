import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadershipTeam } from "@/components/LeadershipTeam";

const Leadership = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <LeadershipTeam />
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
