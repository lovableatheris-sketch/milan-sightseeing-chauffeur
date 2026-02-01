import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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

  const seoData = {
    it: {
      title: "Tour Turistici Milano | Lago di Como, Maggiore | NCC TMTransferLux",
      description: "Tour privati con autista da Milano: Lago di Como, Lago Maggiore, San Siro. Veicoli Mercedes di lusso, autista professionale. Prenota il tuo tour esclusivo.",
      keywords: "tour lago di como, tour lago maggiore, tour privato milano, gita lago como, escursione como milano, ncc tour turistici, chauffeur tour milan",
    },
    en: {
      title: "Tourist Tours Milan | Lake Como, Maggiore | NCC TMTransferLux",
      description: "Private tours with driver from Milan: Lake Como, Lake Maggiore, San Siro. Luxury Mercedes vehicles, professional chauffeur. Book your exclusive tour.",
      keywords: "lake como tour, lake maggiore tour, private tour milan, como day trip, milan chauffeur tour, luxury tour italy",
    },
    pt: {
      title: "Tours Turísticos Milão | Lago di Como, Maggiore | TMTransferLux",
      description: "Tours privados com motorista de Milão: Lago di Como, Lago Maggiore, San Siro. Veículos Mercedes de luxo. Reserve seu tour exclusivo.",
      keywords: "tour lago di como, tour lago maggiore, passeio privado milão, excursão como",
    },
    fr: {
      title: "Tours Touristiques Milan | Lac de Côme, Majeur | TMTransferLux",
      description: "Tours privés avec chauffeur depuis Milan: Lac de Côme, Lac Majeur, San Siro. Véhicules Mercedes de luxe. Réservez votre tour exclusif.",
      keywords: "tour lac de come, tour lac majeur, visite privée milan, excursion come",
    },
  };

  const currentSeo = seoData[language] || seoData.it;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Tour Turistici da Milano",
    "description": currentSeo.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TMTransferLux - Sightseeing di Thomas Tagliatti",
      "telephone": "+39 389 143 0907",
      "url": "https://tmtransferlux.it"
    },
    "touristType": ["Couples", "Families", "Business travelers"],
    "itinerary": [
      {
        "@type": "TouristAttraction",
        "name": "Lago di Como",
        "description": "Tour completo al Lago di Como"
      },
      {
        "@type": "TouristAttraction",
        "name": "Lago Maggiore",
        "description": "Esplora le isole e i giardini del Lago Maggiore"
      },
      {
        "@type": "TouristAttraction",
        "name": "San Siro Stadium",
        "description": "Visita il tempio del calcio italiano"
      }
    ]
  };

  const tours = [
    {
      title: t.lagoComoTitle,
      description: t.lagoComoDesc,
      image: lagoComoImage,
      duration: "8",
      price: "€640",
      alt: language === 'it' ? "Tour privato Lago di Como con autista - Mercedes di lusso" : "Private Lake Como tour with driver - Luxury Mercedes"
    },
    {
      title: t.lagoMaggioreTitle,
      description: t.lagoMaggioreDesc,
      image: lagoMaggioreImage,
      duration: "8",
      price: "€720",
      alt: language === 'it' ? "Tour privato Lago Maggiore - Escursione con autista" : "Private Lake Maggiore tour - Chauffeur day trip"
    },
    {
      title: t.sanSiroTitle,
      description: t.sanSiroDesc,
      image: sanSiroImage,
      duration: "4",
      price: "€360",
      alt: language === 'it' ? "Tour Stadio San Siro Milano - Visita con autista privato" : "San Siro Stadium Tour Milan - Visit with private driver"
    },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/393891430907", "_blank");
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://tmtransferlux.it/tours"
        structuredData={structuredData}
        lang={language}
      />
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
                      alt={tour.alt}
                      className="w-full h-full object-cover transition-elegant hover:scale-110"
                      loading="lazy"
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
