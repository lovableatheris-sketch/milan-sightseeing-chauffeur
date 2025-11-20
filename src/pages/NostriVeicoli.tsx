import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useNavigate } from "react-router-dom";
import { Users, Briefcase } from "lucide-react";
import mercedesImage from "@/assets/mercedes-e-class.webp";

const NostriVeicoli = () => {
  const { language } = useLanguage();
  const t = translations[language].nostriVeicoli;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-16 text-center">
              {t.subtitle}
            </p>

            {/* Vehicles Grid */}
            <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {/* Mercedes E-Class */}
              <div className="bg-card rounded-lg shadow-luxury overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={mercedesImage}
                    alt="Mercedes E-Class"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {t.vehicle1Title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>3 {t.passengers}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      <span>{t.luggage}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {t.vehicle1Desc}
                  </p>
                  <Button 
                    onClick={() => navigate("/calcolo-preventivo")}
                    className="w-full bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury"
                  >
                    {t.calcPreventivo}
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NostriVeicoli;
