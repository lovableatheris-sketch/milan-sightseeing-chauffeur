import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import lagoComoImage from "@/assets/lago-como-card.jpg";
import lagoMaggioreImage from "@/assets/lago-maggiore-card.jpg";
import sanSiroImage from "@/assets/san-siro-card.jpg";

const TouristTours = () => {
  const { language } = useLanguage();
  const t = translations[language].touristTours;

  const tours = [
    {
      title: t.lagoComoTitle,
      description: t.lagoComoDesc,
      image: lagoComoImage,
      duration: "8",
      price: "€350",
    },
    {
      title: t.lagoMaggioreTitle,
      description: t.lagoMaggioreDesc,
      image: lagoMaggioreImage,
      duration: "8",
      price: "€380",
    },
    {
      title: t.sanSiroTitle,
      description: t.sanSiroDesc,
      image: sanSiroImage,
      duration: "3",
      price: "€150",
    },
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

        {/* Tours Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-luxury transition-elegant">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-elegant hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-luxury-gold">
                      {tour.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {tour.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock size={20} />
                        <span>{tour.duration} {t.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={20} />
                        <span>{t.priceFrom} {tour.price}</span>
                      </div>
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

export default TouristTours;
