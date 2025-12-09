import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceGallery from "@/components/ExperienceGallery";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import chiSiamoImage from "@/assets/chi-siamo-mercedes.jpeg";

const ChiSiamo = () => {
  const { language } = useLanguage();
  const t = translations[language].chiSiamo;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Blur and Opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${chiSiamoImage})`,
              filter: 'blur(3px)',
              transform: 'scale(1.1)',
            }}
          >
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
              {t.subtitle}
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed animate-fade-in-up">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <div className="container mx-auto px-4">
          <ExperienceGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
