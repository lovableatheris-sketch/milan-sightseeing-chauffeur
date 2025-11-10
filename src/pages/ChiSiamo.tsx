import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const ChiSiamo = () => {
  const { language } = useLanguage();
  const t = translations[language].chiSiamo;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              {t.subtitle}
            </p>

            {/* Images Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80" 
                  alt="Luxury chauffeur service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80" 
                  alt="Mercedes luxury vehicle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Italian Description */}
            <div className="mb-8 p-8 bg-card rounded-lg shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Italiano
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {t.descriptionIT}
              </p>
            </div>

            {/* English Description */}
            <div className="p-8 bg-card rounded-lg shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                English
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {t.descriptionEN}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
