import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Clock, MapPin, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const MilanoTariffe = () => {
  const { language } = useLanguage();
  const t = translations[language].milano;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${t.tariffsTitle} | MILANO Premium Mobility | NCC Corporate`}
        description={t.tariffsDescription}
        keywords="tariffe ncc corporate milano, prezzi transfer aziendale malpensa, listino ncc business milano"
        canonicalUrl="https://tmtransferlux.it/milano-prontuario-tariffe"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Link
                to="/milano-premium-mobility"
                className="text-luxury-gold/60 text-sm font-medium tracking-[0.2em] uppercase hover:text-luxury-gold transition-colors"
              >
                MILANO Premium Mobility
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
              {t.tariffsTitle}
            </h1>
            <p className="text-xl text-luxury-gold font-heading">
              {t.tariffsSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              {t.tariffsDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Tariffs Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Hourly Disposal */}
            <Card className="border-2 border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors">
              <CardHeader className="bg-luxury-gold/5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl font-heading">{t.hourlyTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">{t.hours4}</span>
                    <span className="text-xl font-bold text-foreground">{t.hours4Price}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">{t.hours8}</span>
                    <span className="text-xl font-bold text-foreground">{t.hours8Price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    + IVA 10%
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Airport Transfers */}
            <Card className="border-2 border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors">
              <CardHeader className="bg-luxury-gold/5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <Plane className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl font-heading">{t.transfersTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Malpensa – Milano</span>
                    <span className="text-xl font-bold text-foreground">{t.malpensaPrice}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Linate – Milano</span>
                    <span className="text-xl font-bold text-foreground">{t.linatePrice}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Orio al Serio – Milano</span>
                    <span className="text-xl font-bold text-foreground">{t.bergamoPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Per Km Rate */}
            <Card className="border-2 border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors">
              <CardHeader className="bg-luxury-gold/5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl font-heading">{t.kmTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Base</span>
                    <span className="text-xl font-bold text-foreground">{t.kmBase}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Laghi/Montagna</span>
                    <span className="text-xl font-bold text-foreground">{t.kmMountain}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Note
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t.notes}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t.invoiceNote}
                  </p>
                </div>
              </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/393891430907?text=Richiesta%20preventivo%20corporate%20MILANO", "_blank")}
                className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark shadow-luxury"
              >
                {t.ctaWhatsApp}
              </Button>
              <Link to="/milano-premium-mobility">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  MILANO Premium Mobility
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilanoTariffe;
