import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingDonationButton from "@/components/FloatingDonationButton";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import MilanoHighlight from "@/components/MilanoHighlight";
import WelcomeIntro from "@/components/WelcomeIntro";
import { translations } from "@/locales/translations";
import { deobfuscate } from "@/utils/obfuscation";

const OBFUSCATED_EMAIL = "bW9jLmxpYW1nQDIyMDJpdHRhaWxnYXRzYW1vaHQ=";
const OBFUSCATED_PHONE = "NzA5MCAzNDEgOTgzIDkzKw==";

const Index = () => {
  const { language } = useLanguage();
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasSeenIntro");
    }
    return true;
  });

  const seoData = {
    it: {
      title: "Transfer Malpensa Milano da €170 | NCC con Autista | NEXITUS",
      description: "Transfer privato aeroporto Malpensa-Milano con prezzo fisso da €170. NCC noleggio con conducente, autista professionale, Mercedes sanificata. Prenota 24h su WhatsApp.",
      keywords: "transfer malpensa milano, ncc milano, noleggio con conducente milano, transfer aeroporto malpensa prezzo, taxi privato malpensa milano, ncc malpensa prezzo fisso, autista privato milano aeroporto",
    },
    en: {
      title: "Malpensa Milan Transfer from €170 | Private Chauffeur | NEXITUS",
      description: "Private Malpensa-Milan airport transfer with fixed price from €170. Professional chauffeur service, sanitized Mercedes. Book 24h on WhatsApp.",
      keywords: "malpensa milan transfer, private airport transfer milan, chauffeur service malpensa, luxury car service milan, ncc milan, milan airport transfer price",
    },
    pt: {
      title: "Transfer Malpensa Milão a partir de €170 | Motorista Particular | NEXITUS",
      description: "Transfer privado aeroporto Malpensa-Milão com preço fixo a partir de €170. Motorista profissional, Mercedes higienizado. Reserve 24h pelo WhatsApp.",
      keywords: "transfer malpensa milão, motorista particular milão, transfer aeroporto malpensa preço, serviço transfer malpensa",
    },
    fr: {
      title: "Transfert Malpensa Milan dès €170 | Chauffeur Privé | NEXITUS",
      description: "Transfert privé aéroport Malpensa-Milan prix fixe dès €170. Chauffeur professionnel, Mercedes désinfectée. Réservez 24h sur WhatsApp.",
      keywords: "transfert malpensa milan, chauffeur privé milan, transfert aéroport malpensa prix, service chauffeur milan",
    },
  };

  const currentSeo = seoData[language] || seoData.it;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nexitus.it/#organization",
    "name": "NEXITUS",
    "alternateName": "NEXITUS Company",
    "description": "La presentazione sottolinea che l'esperienza di NEXITUS Group nasce da anni di lavoro diretto con clienti di alto livello ed è stata trasformata in un modello operativo focalizzato sulla prevenzione dei problemi, l'eccellenza nel servizio, la discrezione, la puntualità e l'attenzione ai dettagli.",
    "url": "https://nexitus.it",
    "telephone": deobfuscate(OBFUSCATED_PHONE),
    "email": deobfuscate(OBFUSCATED_EMAIL),
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
    "image": "https://nexitus.it/og-image.jpg",
    "logo": "https://nexitus.it/favicon.png",
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
      `https://wa.me/393891430907?text=${encodeURIComponent(translations[language].common.whatsappMessage)}`
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://nexitus.it/"
        structuredData={structuredData}
      />

      {/* Welcome Intro Animation */}
      {showIntro && <WelcomeIntro onComplete={handleIntroComplete} />}

      <Header />
      <main>
        <Hero />
        <MilanoHighlight />
        <WhyChoose />
        <FinalCTA />
      </main>
      <Footer />

      <FloatingDonationButton />
    </div>
  );
};

export default Index;
