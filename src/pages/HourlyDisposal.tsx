import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const HourlyDisposal = () => {
  const { language } = useLanguage();
  const t = translations[language].hourlyDisposal;

  const packages = [
    {
      title: t.package2h,
      hours: "2",
      price: "€180",
    },
    {
      title: t.package4h,
      hours: "4",
      price: "€340",
    },
    {
      title: t.package8h,
      hours: "8",
      price: "€650",
    },
  ];

  const features = [
    t.professionalDriver,
    t.luxuryCar,
    t.flexibility,
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

        {/* Packages Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <Card key={index} className="text-center hover:shadow-luxury transition-elegant">
                  <CardHeader>
                    <CardTitle className="text-3xl font-heading text-luxury-gold mb-2">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-5xl font-bold text-foreground">
                      {pkg.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
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

export default HourlyDisposal;
