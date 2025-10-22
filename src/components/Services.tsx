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
          {services.map((service, index) => (
            <button
              key={index}
              data-index={index}
              onClick={service.onClick}
              className={`bg-card p-6 md:p-8 rounded-xl md:rounded-lg shadow-luxury border-2 border-luxury-gold/40 md:border-transparent hover:shadow-luxury hover:-translate-y-2 hover:scale-105 active:scale-95 active:shadow-card transition-all duration-500 text-center group cursor-pointer md:hover:border-luxury-gold/30 relative overflow-hidden ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/0 to-luxury-gold/0 group-hover:from-luxury-gold/5 group-hover:to-luxury-gold/10 transition-elegant" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/10 text-luxury-gold mb-6 group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-primary transition-smooth">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-luxury-gold transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                {/* Click indicator */}
                <div className="flex items-center justify-center gap-2 text-luxury-gold opacity-0 group-hover:opacity-100 transition-smooth font-semibold">
                  <span className="text-sm">Clique para acessar</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
