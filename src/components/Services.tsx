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
      onClick: () => navigate("/calcolo-preventivo"),
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
    <section id="servicos" className="py-20 md:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            HOW WE CAN HELP
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-2">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => {
            return (
              <button
                key={index}
                data-index={index}
                onClick={service.onClick}
                className={`flex flex-col items-center gap-4 transition-all duration-300 group cursor-pointer max-w-[200px] ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <service.icon size={40} strokeWidth={1.5} className="text-primary-foreground" />
                </div>
                
                <h3 className="text-sm md:text-base font-heading font-semibold text-foreground text-center uppercase tracking-wide leading-tight">
                  {service.title}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
