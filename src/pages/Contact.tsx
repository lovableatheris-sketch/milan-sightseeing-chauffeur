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
      title: "Contatti | Prenota Transfer Malpensa | TMTransferLux",
      description: "Contatta TMTransferLux per prenotare il tuo transfer Malpensa Milano. WhatsApp +39 389 143 0907, risposta immediata 24h. Preventivo gratuito.",
      keywords: "contatti tmtransferlux, prenotare transfer malpensa, whatsapp transfer milano, contatto ncc milano",
    },
    en: {
      title: "Contact | Book Malpensa Transfer | TMTransferLux",
      description: "Contact TMTransferLux to book your Malpensa Milan transfer. WhatsApp +39 389 143 0907, immediate response 24h. Free quote.",
      keywords: "contact tmtransferlux, book malpensa transfer, whatsapp transfer milan, contact ncc milan",
    },
    pt: {
      title: "Contato | Reserve Transfer Malpensa | TMTransferLux",
      description: "Entre em contato com TMTransferLux para reservar seu transfer Malpensa Milão. WhatsApp +39 389 143 0907, resposta imediata 24h.",
      keywords: "contato tmtransferlux, reservar transfer malpensa, whatsapp transfer milão",
    },
    fr: {
      title: "Contact | Réserver Transfert Malpensa | TMTransferLux",
      description: "Contactez TMTransferLux pour réserver votre transfert Malpensa Milan. WhatsApp +39 389 143 0907, réponse immédiate 24h.",
      keywords: "contact tmtransferlux, réserver transfert malpensa, whatsapp transfert milan",
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
