import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const WhyChoose = () => {
  const { language } = useLanguage();
  const t = translations[language].whyChoose;

  const features = [
    { text: t.feature1 },
    { text: t.feature2 },
    { text: t.feature3 },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm tracking-widest text-muted-foreground mb-4 uppercase">
            {t.subtitle}
          </p>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>

          {/* Decorative underline */}
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">
                  <Star className="w-12 h-12 text-luxury-gold" strokeWidth={1.5} />
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground tracking-wide uppercase">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
