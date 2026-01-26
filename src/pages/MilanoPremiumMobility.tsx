import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Users, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MilanoPremiumMobility = () => {
  const { language } = useLanguage();
  const t = translations[language].milano;

  const standards = [
    {
      icon: Clock,
      title: t.standard1Title,
      desc: t.standard1Desc,
    },
    {
      icon: Shield,
      title: t.standard2Title,
      desc: t.standard2Desc,
    },
    {
      icon: Users,
      title: t.standard3Title,
      desc: t.standard3Desc,
    },
    {
      icon: FileText,
      title: t.standard4Title,
      desc: t.standard4Desc,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`MILANO Premium Mobility | ${t.heroTagline} | NCC Corporate Milano`}
        description={t.heroDescription}
        keywords="ncc corporate milano, autista privato aziende, noleggio con conducente business, transfer aziendale milano malpensa"
        canonicalUrl="https://tmtransferlux.it/milano-premium-mobility"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-luxury-gold/60 text-sm font-medium tracking-[0.3em] uppercase">
                {t.heroTagline}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-2 tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl text-luxury-gold font-heading font-light mb-8">
              {t.heroSubtitle}
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
              {t.manifestoTitle}
            </h2>
            <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
                "{t.manifestoText}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            {t.standardsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-luxury-gold/10 rounded-xl flex items-center justify-center mb-5">
                  <standard.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {standard.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {standard.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexibility Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              {t.flexibilityTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {t.flexibilityText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/milano-prontuario-tariffe">
                <Button
                  size="lg"
                  className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury px-8"
                >
                  {t.tariffsTitle}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/393891430907?text=Richiesta%20informazioni%20MILANO%20Corporate", "_blank")}
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-primary px-8"
              >
                {t.ctaWhatsApp}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              {t.ctaContact}
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              thomastagliatti2022@gmail.com | +39 389 143 0907
            </p>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/393891430907?text=Richiesta%20B2B%20MILANO%20Premium%20Mobility", "_blank")}
              className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark shadow-luxury"
            >
              {t.ctaWhatsApp}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilanoPremiumMobility;
