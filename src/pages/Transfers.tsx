import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useNavigate } from "react-router-dom";
import airportImage from "@/assets/airport-transfer.jpg";

const Transfers = () => {
  const { language } = useLanguage();
  const t = translations[language].transfers;
  const navigate = useNavigate();

  const advantages = [
    {
      text: t.flightMonitoring,
      highlight: "in advance",
    },
    {
      text: t.comfortTravel,
      highlight: "comfort",
    },
    {
      text: t.inclusivePrice,
      highlight: "price",
    },
    {
      text: t.doorToDoor,
      highlight: "door to door",
    },
  ];

  const handleContactClick = () => {
    navigate("/contato");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Icon Header */}
            <div className="flex justify-center mb-12">
              <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Plane size={56} className="text-primary-foreground" strokeWidth={1.5} />
              </div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div className="order-2 md:order-1">
                <img
                  src={airportImage}
                  alt="Airport Transfer"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              {/* Right Side - Content */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-normal text-foreground mb-6 leading-tight">
                    {t.mainTitle}
                  </h1>
                  
                  <p className="text-muted-foreground mb-8">
                    {t.chooseService}
                  </p>

                  {/* Advantages List */}
                  <div className="space-y-4 mb-8">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Check size={20} className="text-luxury-gold" strokeWidth={3} />
                        </div>
                        <p className="text-muted-foreground">
                          {advantage.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Text */}
                  <h2 className="text-xl md:text-2xl font-bold text-primary uppercase mb-8 leading-tight">
                    {t.highlightTitle}
                  </h2>

                  {/* Contact Button */}
                  <Button
                    onClick={handleContactClick}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold uppercase"
                  >
                    {t.contactUs}
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

export default Transfers;
