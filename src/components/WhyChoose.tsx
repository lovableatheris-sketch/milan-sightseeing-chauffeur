import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const WhyChoose = () => {
  const { language } = useLanguage();
  const t = translations[language].whyChoose;

  const features = [
    { text: t.feature1 },
    { text: t.feature2 },
    { text: t.feature3 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm tracking-widest text-muted-foreground mb-4 uppercase">
            {t.subtitle}
          </p>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>

          {/* Decorative underline */}
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">
                  <Star className="w-12 h-12 text-luxury-gold" strokeWidth={1.5} />
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground tracking-wide uppercase">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* SEO Content */}
          <div className="bg-card/30 rounded-lg p-8 text-left border border-border/30">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              Perché scegliere un NCC invece del taxi a Milano?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">✓ Prezzo fisso garantito</h4>
                <p className="text-sm">A differenza dei taxi con tassametro, il nostro servizio NCC offre un preventivo chiaro prima della partenza. Nessuna sorpresa, nessun supplemento nascosto per bagagli o orari notturni.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">✓ Veicoli Mercedes di lusso</h4>
                <p className="text-sm">Viaggia su Mercedes V250 con sedili in pelle, WiFi gratuito e climatizzazione. Veicoli sanificati dopo ogni corsa per la tua sicurezza.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">✓ Autista dedicato in aeroporto</h4>
                <p className="text-sm">Il tuo autista ti aspetta all'uscita con cartello nominativo, monitora il volo in tempo reale e ti aiuta con i bagagli. Servizio porta a porta senza stress.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">✓ Disponibilità 24/7</h4>
                <p className="text-sm">Servizio attivo tutti i giorni, 24 ore su 24. Prenotazione facile via WhatsApp con risposta immediata. Transfer Malpensa anche per voli notturni.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
