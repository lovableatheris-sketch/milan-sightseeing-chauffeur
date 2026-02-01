import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceGallery from "@/components/ExperienceGallery";
import MilanoHighlight from "@/components/MilanoHighlight";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useState, useEffect } from "react";
import chiSiamoImage from "@/assets/chi-siamo-mercedes.jpeg";

const ChiSiamo = () => {
  const { language } = useLanguage();
  const t = translations[language].chiSiamo;
  const [scrollBlur, setScrollBlur] = useState(0);
  const [scrollDarkness, setScrollDarkness] = useState(0);

  const seoData = {
    it: {
      title: "Chi Siamo | NCC Milano Servizio Premium | TMTransferLux",
      description: "TMTransferLux: servizio NCC noleggio con conducente Milano. Autisti professionali, veicoli Mercedes di lusso, transfer aeroporti e tour turistici. Scopri la nostra storia.",
      keywords: "ncc milano, chi siamo tmtransferlux, noleggio con conducente milano, autista professionale milano, servizio taxi privato milano",
    },
    en: {
      title: "About Us | NCC Milan Premium Service | TMTransferLux",
      description: "TMTransferLux: premium chauffeur service in Milan. Professional drivers, luxury Mercedes vehicles, airport transfers and tourist tours. Discover our story.",
      keywords: "ncc milan, about tmtransferlux, chauffeur service milan, professional driver milan, private taxi service milan",
    },
    pt: {
      title: "Quem Somos | NCC Milão Serviço Premium | TMTransferLux",
      description: "TMTransferLux: serviço de motorista particular em Milão. Motoristas profissionais, veículos Mercedes de luxo, transfers e tours turísticos.",
      keywords: "ncc milão, quem somos tmtransferlux, motorista particular milão",
    },
    fr: {
      title: "Qui Sommes-Nous | NCC Milan Service Premium | TMTransferLux",
      description: "TMTransferLux: service de chauffeur privé à Milan. Chauffeurs professionnels, véhicules Mercedes de luxe, transferts et tours touristiques.",
      keywords: "ncc milan, qui sommes-nous tmtransferlux, chauffeur privé milan",
    },
  };

  const currentSeo = seoData[language] || seoData.it;
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      const blurValue = Math.min((scrollY / maxScroll) * 10, 10);
      const darknessValue = Math.min((scrollY / maxScroll) * 0.6, 0.6);
      setScrollBlur(blurValue);
      setScrollDarkness(darknessValue);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://tmtransferlux.it/chi-siamo"
      />
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Blur and Opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
            style={{
              backgroundImage: `url(${chiSiamoImage})`,
              backgroundPosition: 'center 65%',
              filter: `blur(${3 + scrollBlur}px)`,
              transform: `scale(${1.1 + scrollBlur * 0.01})`,
            }}
          >
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
            <div 
              className="absolute inset-0 bg-black transition-opacity duration-300"
              style={{ opacity: 0.4 + scrollDarkness }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
              {t.subtitle}
            </p>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed animate-fade-in-up">
                {t.description}
              </p>
              {t.descriptionExtra && (
                <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed animate-fade-in-up">
                  {t.descriptionExtra}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <div className="container mx-auto px-4">
          <ExperienceGallery />
        </div>

        {/* Milano Highlight Section */}
        <MilanoHighlight />
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
