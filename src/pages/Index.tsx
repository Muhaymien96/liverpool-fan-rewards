import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GamesSection from "@/components/GamesSection";
import RulesSection from "@/components/RulesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <GamesSection />
      <RulesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
