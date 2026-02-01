import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const seoData = {
    it: {
      title: "Prenota Transfer Malpensa Milano | Contatti NCC | TMTransferLux",
      description: "Prenota il tuo transfer Malpensa-Milano su WhatsApp +39 389 143 0907. Risposta immediata 24h, preventivo gratuito, prezzo fisso. NCC Milano aeroporto.",
      keywords: "prenotare transfer malpensa, contatti ncc milano, whatsapp transfer aeroporto, prenota taxi privato malpensa",
    },
    en: {
      title: "Book Malpensa Milan Transfer | NCC Contacts | TMTransferLux",
      description: "Book your Malpensa-Milan transfer on WhatsApp +39 389 143 0907. Immediate response 24h, free quote, fixed price. Milan airport chauffeur service.",
      keywords: "book malpensa transfer, ncc milan contact, whatsapp airport transfer, book private taxi malpensa",
    },
    pt: {
      title: "Reserve Transfer Malpensa Milão | Contatos NCC | TMTransferLux",
      description: "Reserve seu transfer Malpensa-Milão no WhatsApp +39 389 143 0907. Resposta imediata 24h, orçamento grátis, preço fixo.",
      keywords: "reservar transfer malpensa, contato ncc milão, whatsapp transfer aeroporto",
    },
    fr: {
      title: "Réserver Transfert Malpensa Milan | Contacts NCC | TMTransferLux",
      description: "Réservez votre transfert Malpensa-Milan sur WhatsApp +39 389 143 0907. Réponse immédiate 24h, devis gratuit, prix fixe.",
      keywords: "réserver transfert malpensa, contact ncc milan, whatsapp transfert aéroport",
    },
  };

  const currentSeo = seoData[language] || seoData.it;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://tmtransferlux.it/contato"
      />
      <Header />
      <main className="flex-1 flex items-center py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                {t.title}
              </h1>
              <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t.welcomeText}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-24">
              {/* Phone */}
              <a
                href={`tel:${t.info.phoneNumber}`}
                className="flex flex-col items-center gap-4 group transition-all duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <Phone className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 uppercase tracking-wide">
                    {t.info.phone}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.info.phoneNumber}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${t.info.whatsappNumber.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group transition-all duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 uppercase tracking-wide">
                    {t.info.whatsapp}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.info.whatsappNumber}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${t.info.emailAddress}`}
                className="flex flex-col items-center gap-4 group transition-all duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <Mail className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 uppercase tracking-wide">
                    E-MAIL
                  </h3>
                  <p className="text-sm text-muted-foreground break-all max-w-[200px]">
                    {t.info.emailAddress}
                  </p>
                </div>
              </a>

              {/* Office */}
              <div className="flex flex-col items-center gap-4 group transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 uppercase tracking-wide">
                    REGISTERED OFFICE
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[200px]">
                    {t.info.officeAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
