import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceGallery from "@/components/ExperienceGallery";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useState, useEffect } from "react";
import chiSiamoImage from "@/assets/chi-siamo-mercedes.jpeg";

const ChiSiamo = () => {
  const { language } = useLanguage();
  const t = translations[language].chiSiamo;
  const [scrollBlur, setScrollBlur] = useState(0);
  const [scrollDarkness, setScrollDarkness] = useState(0);
  
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
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed animate-fade-in-up">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <div className="container mx-auto px-4">
          <ExperienceGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
