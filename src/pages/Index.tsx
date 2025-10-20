import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LocationCards from "@/components/LocationCards";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSelector />
      <Header />
      <main>
        <Hero />
        <Services />
        <LocationCards />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
