import sanSiroImage from "@/assets/san-siro-card.jpg";
import lagoMaggioreImage from "@/assets/lago-maggiore-card.jpg";
import lagoComoImage from "@/assets/lago-como-card.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const LocationCards = () => {
  const { language } = useLanguage();
  const t = translations[language].locations;

  const locations = [
    {
      image: sanSiroImage,
      title: t.historicTitle,
      description: t.historicDesc,
    },
    {
      image: lagoMaggioreImage,
      title: t.luxuryTitle,
      description: t.luxuryDesc,
    },
    {
      image: lagoComoImage,
      title: t.cultureTitle,
      description: t.cultureDesc,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-luxury transition-elegant cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-elegant" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                <h3 className="text-2xl font-heading font-bold mb-3 text-luxury-gold transform translate-y-0 group-hover:-translate-y-2 transition-elegant">
                  {location.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-elegant">
                  {location.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-luxury-gold opacity-0 group-hover:opacity-100 transition-elegant rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationCards;
