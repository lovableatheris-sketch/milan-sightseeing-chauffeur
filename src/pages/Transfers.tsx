import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Check, Plane, Clock, Shield, CreditCard, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import airportImage from "@/assets/airport-transfer.jpg";

const Transfers = () => {
  const { language } = useLanguage();
  const t = translations[language].transfers;
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const seoData = {
    it: {
      title: "Transfer Aeroporto Malpensa Milano | NCC Servizio Privato | TMTransferLux",
      description: "Transfer privato Malpensa Milano da €170. Servizio NCC con autista professionale, prezzo fisso, veicoli Mercedes sanificati. Prenota il tuo transfer aeroporto Malpensa 24h.",
      keywords: "transfer malpensa, transfer aeroporto malpensa, ncc malpensa milano, taxi privato malpensa, servizio transfer aeroporto malpensa, transfer malpensa centro milano, chauffeur service malpensa, noleggio con conducente malpensa",
    },
    en: {
      title: "Malpensa Airport Transfer Milan | Private Car Service | TMTransferLux",
      description: "Private Malpensa airport transfer from €170. Professional chauffeur service, fixed price, sanitized Mercedes vehicles. Book your Milan Malpensa transfer 24h.",
      keywords: "malpensa transfer, malpensa airport transfer, private airport transfer malpensa, milan malpensa chauffeur service, luxury car service malpensa, fixed price transfer malpensa, ncc malpensa milan",
    },
    pt: {
      title: "Transfer Aeroporto Malpensa Milão | Serviço Privado | TMTransferLux",
      description: "Transfer privado Malpensa Milão a partir de €170. Serviço com motorista profissional, preço fixo, veículos Mercedes higienizados. Reserve seu transfer 24h.",
      keywords: "transfer malpensa, transfer aeroporto malpensa milão, motorista particular malpensa, serviço transfer malpensa",
    },
    fr: {
      title: "Transfert Aéroport Malpensa Milan | Service Privé | TMTransferLux",
      description: "Transfert privé Malpensa Milan à partir de €170. Service chauffeur professionnel, prix fixe, véhicules Mercedes désinfectés. Réservez votre transfert 24h.",
      keywords: "transfert malpensa, transfert aéroport malpensa, chauffeur privé malpensa, service transfert malpensa milan",
    },
  };

  const currentSeo = seoData[language] || seoData.it;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Transfer Aeroporto Malpensa Milano",
    "description": currentSeo.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TMTransferLux - Sightseeing di Thomas Tagliatti",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Milano",
        "addressCountry": "IT"
      },
      "telephone": "+39 389 143 0907",
      "url": "https://tmtransferlux.it"
    },
    "areaServed": {
      "@type": "City",
      "name": "Milano"
    },
    "serviceType": "Airport Transfer",
    "offers": [
      {
        "@type": "Offer",
        "name": "Transfer Malpensa - Milano",
        "price": "170",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Transfer Linate - Milano",
        "price": "100",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Transfer Orio al Serio - Milano",
        "price": "180",
        "priceCurrency": "EUR"
      }
    ]
  };

  const faqData = {
    it: [
      {
        question: "Quanto costa il transfer dall'aeroporto di Malpensa a Milano?",
        answer: "Il transfer privato dall'aeroporto di Malpensa al centro di Milano costa €170 a tratta. Il prezzo è fisso e include autista professionale, veicolo Mercedes di lusso, assistenza bagagli e servizio porta a porta."
      },
      {
        question: "Come prenoto un transfer per Malpensa?",
        answer: "Puoi prenotare il tuo transfer 24 ore su 24 via WhatsApp al +39 389 143 0907 o compilando il modulo di contatto sul nostro sito. Riceverai conferma immediata con tutti i dettagli del servizio."
      },
      {
        question: "Il prezzo del transfer include il monitoraggio del volo?",
        answer: "Sì, monitoriamo il tuo volo in tempo reale. In caso di ritardo, adattiamo l'orario di prelievo senza costi aggiuntivi. Il nostro autista ti aspetterà con cartello all'uscita arrivi."
      },
      {
        question: "Quali veicoli utilizzate per i transfer aeroportuali?",
        answer: "Utilizziamo esclusivamente veicoli Mercedes di lusso: Mercedes Classe E per fino a 3 passeggeri e Mercedes Classe V per gruppi fino a 7 passeggeri. Tutti i veicoli sono sanificati e climatizzati."
      },
      {
        question: "Offrite transfer anche per Linate e Bergamo Orio al Serio?",
        answer: "Sì, offriamo transfer per tutti gli aeroporti di Milano: Malpensa (€170), Linate (€100) e Bergamo Orio al Serio (€180). Tutti i prezzi sono fissi e includono i servizi premium."
      },
      {
        question: "Posso prenotare un transfer per il Lago di Como da Malpensa?",
        answer: "Certamente! Offriamo transfer diretti dall'aeroporto di Malpensa al Lago di Como e altre destinazioni. Contattaci per un preventivo personalizzato per la tua destinazione."
      }
    ],
    en: [
      {
        question: "How much does a transfer from Malpensa Airport to Milan cost?",
        answer: "A private transfer from Malpensa Airport to Milan city center costs €170 one-way. The price is fixed and includes professional driver, luxury Mercedes vehicle, luggage assistance and door-to-door service."
      },
      {
        question: "How do I book a Malpensa transfer?",
        answer: "You can book your transfer 24/7 via WhatsApp at +39 389 143 0907 or by filling out the contact form on our website. You will receive immediate confirmation with all service details."
      },
      {
        question: "Does the transfer price include flight monitoring?",
        answer: "Yes, we monitor your flight in real-time. In case of delay, we adjust the pickup time at no extra cost. Our driver will wait for you with a sign at the arrivals exit."
      },
      {
        question: "What vehicles do you use for airport transfers?",
        answer: "We exclusively use luxury Mercedes vehicles: Mercedes E-Class for up to 3 passengers and Mercedes V-Class for groups up to 7 passengers. All vehicles are sanitized and air-conditioned."
      },
      {
        question: "Do you offer transfers to Linate and Bergamo Orio al Serio as well?",
        answer: "Yes, we offer transfers to all Milan airports: Malpensa (€170), Linate (€100) and Bergamo Orio al Serio (€180). All prices are fixed and include premium services."
      },
      {
        question: "Can I book a transfer to Lake Como from Malpensa?",
        answer: "Absolutely! We offer direct transfers from Malpensa Airport to Lake Como and other destinations. Contact us for a personalized quote for your destination."
      }
    ],
    pt: [
      {
        question: "Quanto custa o transfer do aeroporto de Malpensa para Milão?",
        answer: "O transfer privado do aeroporto de Malpensa para o centro de Milão custa €170. O preço é fixo e inclui motorista profissional, veículo Mercedes de luxo, assistência com bagagem e serviço porta-a-porta."
      },
      {
        question: "Como reservo um transfer para Malpensa?",
        answer: "Você pode reservar seu transfer 24 horas via WhatsApp no +39 389 143 0907 ou preenchendo o formulário de contato em nosso site. Você receberá confirmação imediata com todos os detalhes."
      },
      {
        question: "O preço do transfer inclui monitoramento do voo?",
        answer: "Sim, monitoramos seu voo em tempo real. Em caso de atraso, ajustamos o horário de busca sem custo adicional. Nosso motorista aguardará você com placa na saída de desembarque."
      },
      {
        question: "Quais veículos são utilizados nos transfers?",
        answer: "Utilizamos exclusivamente veículos Mercedes de luxo: Mercedes Classe E para até 3 passageiros e Mercedes Classe V para grupos de até 7 passageiros. Todos os veículos são higienizados e climatizados."
      }
    ],
    fr: [
      {
        question: "Combien coûte un transfert de l'aéroport de Malpensa à Milan?",
        answer: "Un transfert privé de l'aéroport de Malpensa au centre de Milan coûte €170. Le prix est fixe et comprend chauffeur professionnel, véhicule Mercedes de luxe, assistance bagages et service porte à porte."
      },
      {
        question: "Comment réserver un transfert pour Malpensa?",
        answer: "Vous pouvez réserver votre transfert 24h/24 via WhatsApp au +39 389 143 0907 ou en remplissant le formulaire de contact sur notre site. Vous recevrez une confirmation immédiate avec tous les détails."
      }
    ]
  };

  const currentFaq = faqData[language] || faqData.it;

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": currentFaq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const advantages = [
    {
      text: t.flightMonitoring,
      icon: Clock,
    },
    {
      text: t.comfortTravel,
      icon: Shield,
    },
    {
      text: t.inclusivePrice,
      icon: CreditCard,
    },
    {
      text: t.doorToDoor,
      icon: MapPin,
    },
  ];

  const handleContactClick = () => {
    navigate("/contato");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/393891430907", "_blank");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqTitle = {
    it: "Domande Frequenti sui Transfer Malpensa",
    en: "Frequently Asked Questions about Malpensa Transfers",
    pt: "Perguntas Frequentes sobre Transfers Malpensa",
    fr: "Questions Fréquentes sur les Transferts Malpensa"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://tmtransferlux.it/transfers"
        structuredData={structuredData}
        lang={language}
      />
      <Header />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Icon Header */}
            <header className="flex justify-center mb-12">
              <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Plane size={56} className="text-primary-foreground" strokeWidth={1.5} />
              </div>
            </header>

            {/* Main Content */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div className="order-2 md:order-1">
                <img
                  src={airportImage}
                  alt="Transfer privato aeroporto Malpensa Milano - Servizio NCC con Mercedes di lusso"
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Right Side - Content */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-normal text-foreground mb-6 leading-tight">
                    {t.mainTitle}
                  </h1>

                  <p className="text-muted-foreground mb-8">
                    {t.chooseService}
                  </p>

                  {/* Advantages List */}
                  <div className="space-y-4 mb-8">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <advantage.icon size={20} className="text-luxury-gold" strokeWidth={2} />
                        </div>
                        <p className="text-muted-foreground">
                          {advantage.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Text */}
                  <h2 className="text-xl md:text-2xl font-bold text-primary uppercase mb-8 leading-tight">
                    {t.highlightTitle}
                  </h2>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base font-semibold uppercase"
                    >
                      WhatsApp 24h
                    </Button>
                    <Button
                      onClick={handleContactClick}
                      variant="outline"
                      className="px-8 py-6 text-base font-semibold uppercase"
                    >
                      {t.contactUs}
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Price Table Section */}
            <section className="max-w-4xl mx-auto mt-16">
              <div className="bg-card rounded-lg shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
                  {t.pricesTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background rounded-lg p-6 text-center border-2 border-border hover:border-primary transition-colors">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t.malpensaMilano}
                    </h3>
                    <p className="text-3xl font-bold text-primary">€ 170</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === 'it' ? 'Prezzo fisso' : language === 'en' ? 'Fixed price' : language === 'pt' ? 'Preço fixo' : 'Prix fixe'}
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center border-2 border-border hover:border-primary transition-colors">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t.linateMilano}
                    </h3>
                    <p className="text-3xl font-bold text-primary">€ 100</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === 'it' ? 'Prezzo fisso' : language === 'en' ? 'Fixed price' : language === 'pt' ? 'Preço fixo' : 'Prix fixe'}
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center border-2 border-border hover:border-primary transition-colors">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t.orioMilano}
                    </h3>
                    <p className="text-3xl font-bold text-primary">€ 180</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === 'it' ? 'Prezzo fisso' : language === 'en' ? 'Fixed price' : language === 'pt' ? 'Preço fixo' : 'Prix fixe'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="max-w-4xl mx-auto mt-16">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="p-6">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === 'it' ? 'Veicoli Sanificati' : language === 'en' ? 'Sanitized Vehicles' : language === 'pt' ? 'Veículos Higienizados' : 'Véhicules Désinfectés'}
                  </h3>
                </div>
                <div className="p-6">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === 'it' ? 'Servizio 24 Ore' : language === 'en' ? '24h Service' : language === 'pt' ? 'Serviço 24h' : 'Service 24h'}
                  </h3>
                </div>
                <div className="p-6">
                  <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === 'it' ? 'Prezzo Fisso' : language === 'en' ? 'Fixed Price' : language === 'pt' ? 'Preço Fixo' : 'Prix Fixe'}
                  </h3>
                </div>
                <div className="p-6">
                  <Check className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === 'it' ? 'Autisti Professionali' : language === 'en' ? 'Professional Drivers' : language === 'pt' ? 'Motoristas Profissionais' : 'Chauffeurs Professionnels'}
                  </h3>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
                {faqTitle[language] || faqTitle.it}
              </h2>
              <div className="space-y-4">
                {currentFaq.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    >
                      <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-4xl mx-auto mt-16 text-center">
              <div className="bg-primary/10 rounded-lg p-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {language === 'it' ? 'Prenota il Tuo Transfer Malpensa' : language === 'en' ? 'Book Your Malpensa Transfer' : language === 'pt' ? 'Reserve Seu Transfer Malpensa' : 'Réservez Votre Transfert Malpensa'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {language === 'it' ? 'Contattaci su WhatsApp per prenotare il tuo transfer privato. Risposta immediata 24 ore su 24.' : language === 'en' ? 'Contact us on WhatsApp to book your private transfer. Immediate response 24/7.' : language === 'pt' ? 'Entre em contato pelo WhatsApp para reservar seu transfer privado. Resposta imediata 24h.' : 'Contactez-nous sur WhatsApp pour réserver votre transfert privé. Réponse immédiate 24h/24.'}
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg font-semibold"
                >
                  WhatsApp +39 389 143 0907
                </Button>
              </div>
            </section>
          </div>
        </article>

        {/* Hidden FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Transfers;
