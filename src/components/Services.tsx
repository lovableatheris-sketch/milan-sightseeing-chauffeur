import { Car, Clock, MapPin, MessageCircle, Navigation, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;
  const navigate = useNavigate();

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

  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary">
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
              onClick={service.onClick}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-luxury hover:-translate-y-2 hover:scale-105 active:scale-100 transition-elegant animate-fade-in-up text-center group cursor-pointer border-2 border-transparent hover:border-luxury-gold/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
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
