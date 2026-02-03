import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [scrollBlur, setScrollBlur] = useState(0);
  const [scrollDarkness, setScrollDarkness] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      const blurValue = Math.min((scrollY / maxScroll) * 4, 4);
      const darknessValue = Math.min((scrollY / maxScroll) * 0.6, 0.6);
      setScrollBlur(blurValue);
      setScrollDarkness(darknessValue);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(translations[language].common.whatsappMessage);
    window.open(`https://wa.me/393891430907?text=${message}`, "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 65%',
          filter: `blur(${scrollBlur}px)`,
          transform: `scale(${1 + scrollBlur * 0.01})`,
        }}
      >
        {/* Dark overlay - stronger at bottom for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        <div
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: scrollDarkness }}
        />
        {/* Stronger bottom gradient for content area */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content - Positioned at bottom left */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24 lg:pb-32 text-left">
        {/* Small subtitle label */}
        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-luxury-gold/90 mb-4 animate-fade-in font-medium">
          {t.cta}
        </p>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-3 animate-fade-in leading-tight max-w-4xl">
          {t.title}
        </h1>

        {/* Highlighted text line */}
        {t.titleHighlight && (
          <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-luxury-gold mb-6 animate-fade-in leading-tight max-w-4xl">
            {t.titleHighlight}
          </p>
        )}

        {/* Subtitle/description */}
        <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up font-light leading-relaxed">
          {t.subtitle}
        </p>

        {/* CTA Buttons - Horizontal layout */}
        <div className="flex flex-col sm:flex-row gap-4 items-start animate-scale-in">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury text-sm md:text-base px-6 md:px-8 py-5 md:py-6 font-semibold uppercase tracking-wide"
          >
            {t.cta}
          </Button>
          <Link to="/milano-premium-mobility">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth text-sm md:text-base px-6 md:px-8 py-5 md:py-6 font-semibold uppercase tracking-wide bg-transparent"
            >
              {translations[language].milano.navLabel}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
