import { Car, Clock, Globe2, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: Globe2,
      title: t.bilingualTitle,
      description: t.bilingualDesc,
    },
    {
      icon: Clock,
      title: t.availabilityTitle,
      description: t.availabilityDesc,
    },
    {
      icon: Car,
      title: t.bookingTitle,
      description: t.bookingDesc,
    },
    {
      icon: MapPin,
      title: t.transfersTitle,
      description: t.transfersDesc,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-luxury transition-elegant animate-fade-in-up text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/10 text-luxury-gold mb-6 group-hover:scale-110 transition-smooth">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
