import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import TariffSection from "@/components/TariffSection";
import LocationCards from "@/components/LocationCards";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingDonationButton from "@/components/FloatingDonationButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TariffSection />
        <Services />
        <WhyChoose />
        <LocationCards />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingDonationButton />
    </div>
  );
};

export default Index;
