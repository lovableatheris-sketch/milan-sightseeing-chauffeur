import { Car, Clock, MapPin, MessageCircle, Navigation, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const services = [
    {
      icon: Navigation,
      title: t.touristTitle,
      description: t.touristDesc,
      onClick: () => navigate("/tours"),
    },
    {
      icon: Clock,
      title: t.disposalTitle,
      description: t.disposalDesc,
      onClick: () => navigate("/disposicoes"),
    },
    {
      icon: MessageCircle,
      title: t.whatsappTitle,
      description: t.whatsappDesc,
      onClick: () => window.open("https://wa.me/393891430907", "_blank"),
    },
    {
      icon: MapPin,
      title: t.transfersTitle,
      description: t.transfersDesc,
      onClick: () => navigate("/transfers"),
    },
    {
      icon: Car,
      title: t.longDistanceTitle,
      description: t.longDistanceDesc,
      onClick: () => navigate("/viagens-longas"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const shouldApplyHoverEffect = isMobile && visibleCards.includes(index);
            
            return (
              <button
                key={index}
                data-index={index}
                onClick={service.onClick}
                className={`bg-card p-6 md:p-8 rounded-xl md:rounded-lg border-2 transition-all duration-500 text-center group cursor-pointer relative overflow-hidden ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  shouldApplyHoverEffect
                    ? "shadow-luxury border-luxury-gold/40 -translate-y-2 scale-105"
                    : "shadow-card border-luxury-gold/20"
                } md:border-transparent md:hover:shadow-luxury md:hover:-translate-y-2 md:hover:scale-105 md:hover:border-luxury-gold/30 active:scale-95 active:shadow-card`}
              >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-elegant ${
                shouldApplyHoverEffect || !isMobile
                  ? "from-luxury-gold/5 to-luxury-gold/10"
                  : "from-luxury-gold/0 to-luxury-gold/0"
              } md:from-luxury-gold/0 md:to-luxury-gold/0 md:group-hover:from-luxury-gold/5 md:group-hover:to-luxury-gold/10`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-smooth bg-luxury-gold/10 text-luxury-gold md:group-hover:scale-110 md:group-hover:bg-luxury-gold md:group-hover:text-primary ${
                  shouldApplyHoverEffect ? "scale-110" : ""
                }`}>
                  <service.icon size={32} />
                </div>
                <h3 className={`text-xl font-heading font-semibold mb-3 transition-smooth ${
                  shouldApplyHoverEffect
                    ? "text-luxury-gold"
                    : "text-foreground"
                } md:text-foreground md:group-hover:text-luxury-gold`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                {/* Click indicator */}
                <div className={`flex items-center justify-center gap-2 text-luxury-gold font-semibold transition-smooth ${
                  shouldApplyHoverEffect || !isMobile
                    ? "opacity-100"
                    : "opacity-0"
                } md:opacity-0 md:group-hover:opacity-100`}>
                  <span className="text-sm">Clique para acessar</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            </button>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Services;
