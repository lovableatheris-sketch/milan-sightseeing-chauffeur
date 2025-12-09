import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
const TariffSection = () => {
  const navigate = useNavigate();
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card onClick={() => navigate("/nostri-veicoli")} className="p-10 md:p-16 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.01] bg-card border border-border cursor-pointer group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  {t.tariffs.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  {t.tariffs.description}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 text-luxury-gold font-semibold text-lg group-hover:gap-5 transition-all duration-300">
                  <span>{t.tariffs.viewAll}</span>
                  <ArrowRight size={24} className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
              <div className="flex gap-8 text-7xl md:text-8xl">
                <span>
              </span>
                <span>
              </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default TariffSection;