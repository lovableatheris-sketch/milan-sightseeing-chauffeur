import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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

  const seoData = {
    it: {
      title: "Mercedes NCC Milano | Veicoli Transfer Malpensa | TMTransferLux",
      description: "Flotta Mercedes V250 per transfer Malpensa-Milano. Van di lusso fino a 6 passeggeri, WiFi gratuito, sedili in pelle, climatizzazione. Prenota il tuo NCC Milano.",
      keywords: "mercedes ncc milano, veicoli transfer malpensa, mercedes v250 noleggio, auto con conducente milano aeroporto, van lusso milano",
    },
    en: {
      title: "Mercedes NCC Milan | Malpensa Transfer Vehicles | TMTransferLux",
      description: "Mercedes V250 fleet for Malpensa-Milan transfers. Luxury van up to 6 passengers, free WiFi, leather seats, air conditioning. Book your Milan chauffeur.",
      keywords: "mercedes ncc milan, malpensa transfer vehicles, mercedes v250 rental, chauffeur car milan airport, luxury van milan",
    },
    pt: {
      title: "Mercedes NCC Milão | Veículos Transfer Malpensa | TMTransferLux",
      description: "Frota Mercedes V250 para transfers Malpensa-Milão. Van de luxo até 6 passageiros, WiFi grátis, bancos de couro. Reserve seu motorista em Milão.",
      keywords: "mercedes ncc milão, veículos transfer malpensa, mercedes v250 aluguel",
    },
    fr: {
      title: "Mercedes NCC Milan | Véhicules Transfert Malpensa | TMTransferLux",
      description: "Flotte Mercedes V250 pour transferts Malpensa-Milan. Van de luxe jusqu'à 6 passagers, WiFi gratuit, sièges en cuir. Réservez votre chauffeur Milan.",
      keywords: "mercedes ncc milan, véhicules transfert malpensa, mercedes v250 location",
    },
  };

  const currentSeo = seoData[language] || seoData.it;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://tmtransferlux.it/nostri-veicoli"
        lang={language}
      />
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
                      <span>6 {t.passengers}</span>
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
