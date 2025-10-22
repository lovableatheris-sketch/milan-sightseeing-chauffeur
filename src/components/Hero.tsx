import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-duomo-cars.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/393891430907", "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
          {t.title}
          <br />
          <span className="text-luxury-gold">{t.titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fade-in-up font-light">
          {t.subtitle}
        </p>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury text-lg px-8 py-6 animate-scale-in font-semibold"
        >
          {t.cta}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-luxury-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
