import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import TariffSection from "@/components/TariffSection";
import LocationCards from "@/components/LocationCards";
import CustomerReviews from "@/components/CustomerReviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingDonationButton from "@/components/FloatingDonationButton";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  const seoData = {
    it: {
      title: "Transfer Malpensa Milano | NCC Noleggio con Conducente | TMTransferLux",
      description: "Transfer privato aeroporto Malpensa Milano da €170. Servizio NCC con autista professionale, prezzo fisso garantito, veicoli Mercedes sanificati. Prenota 24h su WhatsApp.",
      keywords: "transfer malpensa, ncc milano, noleggio con conducente milano, transfer aeroporto malpensa, taxi privato malpensa, servizio transfer malpensa, ncc malpensa milano, chauffeur service milan",
    },
    en: {
      title: "Malpensa Airport Transfer Milan | Private Car Service | TMTransferLux",
      description: "Private Malpensa airport transfer from €170. Professional chauffeur service, fixed price, sanitized Mercedes vehicles. Book your Milan transfer 24h on WhatsApp.",
      keywords: "malpensa transfer, private airport transfer milan, chauffeur service malpensa, luxury car service milan, ncc milan, milan airport transfer",
    },
    pt: {
      title: "Transfer Aeroporto Malpensa Milão | Motorista Particular | TMTransferLux",
      description: "Transfer privado aeroporto Malpensa Milão a partir de €170. Motorista profissional, preço fixo, veículos Mercedes higienizados. Reserve 24h pelo WhatsApp.",
      keywords: "transfer malpensa, motorista particular milão, transfer aeroporto malpensa milão, serviço transfer malpensa",
    },
    fr: {
      title: "Transfert Aéroport Malpensa Milan | Service Chauffeur | TMTransferLux",
      description: "Transfert privé aéroport Malpensa Milan à partir de €170. Chauffeur professionnel, prix fixe, véhicules Mercedes désinfectés. Réservez 24h sur WhatsApp.",
      keywords: "transfert malpensa, chauffeur privé milan, transfert aéroport malpensa, service chauffeur milan",
    },
  };

  const currentSeo = seoData[language] || seoData.it;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TMTransferLux - Sightseeing di Thomas Tagliatti",
    "description": currentSeo.description,
    "url": "https://tmtransferlux.it",
    "telephone": "+39 389 143 0907",
    "email": "thomastagliatti2022@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milano",
      "addressRegion": "MI",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4642",
      "longitude": "9.1900"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "€€",
    "image": "https://tmtransferlux.it/og-image.jpg",
    "sameAs": [
      "https://wa.me/393891430907"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "47"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://tmtransferlux.it/"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <TariffSection />
        <Services />
        <WhyChoose />
        <CustomerReviews />
        <LocationCards />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingDonationButton />
    </div>
  );
};

export default Index;
