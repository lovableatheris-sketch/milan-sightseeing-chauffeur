import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const LongDistance = () => {
  const { language } = useLanguage();
  const t = translations[language].longDistance;

  const routes = [
    { route: t.milanoBari, distance: "950 km" },
    { route: t.milanoNapoli, distance: "780 km" },
    { route: t.milanoRoma, distance: "570 km" },
    { route: t.milanoFirenze, distance: "300 km" },
    { route: t.anyDestination, distance: "Su richiesta" },
  ];

  const features = [
    t.professionalDriver,
    t.luxuryCar,
    t.stops,
    t.assistance,
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
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              {t.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-luxury-gold mb-6">
              {t.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              {t.description}
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-luxury transition-elegant mb-12">
                <CardHeader>
                  <CardTitle className="text-5xl font-heading text-luxury-gold mb-4">
                    €1.50 {t.perKm}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {t.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground font-semibold">{t.features}</p>
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2">
                        <Check size={20} className="text-luxury-gold" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark px-12"
                  >
                    {t.bookNow}
                  </Button>
                </CardContent>
              </Card>

              {/* Route Examples */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                  {t.examples}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {routes.map((route, index) => (
                  <Card key={index} className="hover:shadow-card transition-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-luxury-gold/10 text-luxury-gold">
                          <Navigation size={24} />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{route.route}</p>
                          <p className="text-sm text-muted-foreground">{route.distance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LongDistance;
