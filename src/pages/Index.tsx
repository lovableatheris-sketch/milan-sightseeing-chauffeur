import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import TariffSection from "@/components/TariffSection";
import LocationCards from "@/components/LocationCards";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingDonationButton from "@/components/FloatingDonationButton";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  const seoData = {
    it: {
      title: "PRENOTA ORA LA TUA AUTO",
      description: "Transfer privato aeroporto Malpensa-Milano con prezzo fisso da €170. NCC noleggio con conducente, autista professionale, Mercedes sanificata. Prenota 24h su WhatsApp.",
      keywords: "transfer malpensa milano, ncc milano, noleggio con conducente milano, transfer aeroporto malpensa prezzo, taxi privato malpensa milano, ncc malpensa prezzo fisso, autista privato milano aeroporto",
    },
    en: {
      title: "Malpensa Milan Transfer from €170 | Private Chauffeur | TMTransferLux",
      description: "Private Malpensa-Milan airport transfer with fixed price from €170. Professional chauffeur service, sanitized Mercedes. Book 24h on WhatsApp.",
      keywords: "malpensa milan transfer, private airport transfer milan, chauffeur service malpensa, luxury car service milan, ncc milan, milan airport transfer price",
    },
    pt: {
      title: "Transfer Malpensa Milão a partir de €170 | Motorista Particular | TMTransferLux",
      description: "Transfer privado aeroporto Malpensa-Milão com preço fixo a partir de €170. Motorista profissional, Mercedes higienizado. Reserve 24h pelo WhatsApp.",
      keywords: "transfer malpensa milão, motorista particular milão, transfer aeroporto malpensa preço, serviço transfer malpensa",
    },
    fr: {
      title: "Transfert Malpensa Milan dès €170 | Chauffeur Privé | TMTransferLux",
      description: "Transfert privé aéroport Malpensa-Milan prix fixe dès €170. Chauffeur professionnel, Mercedes désinfectée. Réservez 24h sur WhatsApp.",
      keywords: "transfert malpensa milan, chauffeur privé milan, transfert aéroport malpensa prix, service chauffeur milan",
    },
  };

  const currentSeo = seoData[language] || seoData.it;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tmtransferlux.it/#organization",
    "name": "TMTransferLux - NCC Milano Transfer Malpensa",
    "alternateName": "Sightseeing di Thomas Tagliatti",
    "description": "Servizio NCC noleggio con conducente a Milano. Transfer aeroporto Malpensa, Linate, Bergamo con Mercedes di lusso e autista professionale. Prezzo fisso garantito.",
    "url": "https://tmtransferlux.it",
    "telephone": "+39 389 143 0907",
    "email": "thomastagliatti2022@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Milano",
      "addressLocality": "Milano",
      "postalCode": "20100",
      "addressRegion": "Lombardia",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4642",
      "longitude": "9.1900"
    },
    "areaServed": [
      { "@type": "City", "name": "Milano" },
      { "@type": "Airport", "name": "Aeroporto di Milano Malpensa", "iataCode": "MXP" },
      { "@type": "Airport", "name": "Aeroporto di Milano Linate", "iataCode": "LIN" },
      { "@type": "Airport", "name": "Aeroporto di Bergamo Orio al Serio", "iataCode": "BGY" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    "image": "https://tmtransferlux.it/og-image.jpg",
    "logo": "https://tmtransferlux.it/favicon.png",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transfer Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transfer Malpensa Milano",
            "description": "Transfer privato aeroporto Malpensa-Milano centro con Mercedes e autista"
          },
          "price": "170",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transfer Linate Milano",
            "description": "Transfer privato aeroporto Linate-Milano centro"
          },
          "price": "70",
          "priceCurrency": "EUR"
        }
      ]
    },
    "sameAs": [
      "https://wa.me/393891430907"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "127",
      "bestRating": "5"
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
        <LocationCards />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingDonationButton />
    </div>
  );
};

export default Index;
