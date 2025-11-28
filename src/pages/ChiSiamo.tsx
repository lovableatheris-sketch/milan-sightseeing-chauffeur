import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import chiSiamoImage from "@/assets/chi-siamo-mercedes.jpeg";

const ChiSiamo = () => {
  const { language } = useLanguage();
  const t = translations[language].chiSiamo;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-center">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 text-center">
              {t.subtitle}
            </p>

            {/* Image and Text Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
              {/* Image - Left Side */}
              <div className="rounded-lg overflow-hidden shadow-elegant h-full">
                <img 
                  src={chiSiamoImage} 
                  alt="Mercedes luxury vehicle - Sightseeing di Thomas Tagliatti"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description - Right Side */}
              <div className="p-10 md:p-12 bg-card rounded-lg shadow-lg h-full flex items-center">
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
