import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const Transfers = () => {
  const { language } = useLanguage();
  const t = translations[language].transfers;

  const airports = [
    {
      name: t.malpensa,
      code: "MXP",
      price: "€90",
    },
    {
      name: t.linate,
      code: "LIN",
      price: "€70",
    },
    {
      name: t.bergamo,
      code: "BGY",
      price: "€120",
    },
  ];

  const features = [
    t.flightMonitoring,
    t.meetGreet,
    t.luggageAssistance,
    t.professionalDriver,
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/393891430907", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Airports Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {airports.map((airport, index) => (
                <Card key={index} className="text-center hover:shadow-luxury transition-elegant">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/10 text-luxury-gold mx-auto mb-4">
                      <Plane size={32} />
                    </div>
                    <CardTitle className="text-2xl font-heading text-foreground mb-2">
                      {airport.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {airport.code}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-4xl font-bold text-luxury-gold">
                      {t.priceFrom} {airport.price}
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground font-semibold">{t.features}</p>
                      {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check size={20} className="text-luxury-gold" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-luxury-gold text-primary hover:bg-luxury-gold-dark"
                    >
                      {t.bookNow}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transfers;
