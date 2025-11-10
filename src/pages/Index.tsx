import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import TariffSection from "@/components/TariffSection";
import LocationCards from "@/components/LocationCards";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <TariffSection />
        <Services />
        <LocationCards />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
