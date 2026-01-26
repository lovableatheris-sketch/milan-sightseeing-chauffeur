import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Plane, Clock, MapPin, Info, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MilanoTariffe = () => {
  const { language } = useLanguage();

  // FINAL PUBLISH-READY COPY - Public Official Tariff Reference
  const content = {
    it: {
      // Header
      breadcrumb: "MILANO Premium Mobility",
      pageTitle: "Prontuario Tariffe",
      pageSubtitle: "Tariffe di riferimento pubbliche",

      // Introduction
      introTitle: "Tariffe ufficiali",
      introP1: "Le tariffe indicate in questa pagina rappresentano i prezzi di riferimento pubblici per i servizi MILANO Premium Mobility. Sono applicabili a tutti i clienti senza distinzioni.",
      introNote: "Prezzi IVA esclusa (10%). Nessun supplemento non dichiarato.",

      // Section: Hourly
      hourlyTitle: "Servizio a disposizione oraria",
      hourlyDesc: "Veicolo con conducente a disposizione per il periodo indicato.",
      hourlyRates: [
        { label: "Mezza giornata (4 ore)", price: "€ 360", note: "" },
        { label: "Giornata intera (8 ore)", price: "€ 680", note: "" },
        { label: "Ora aggiuntiva", price: "€ 85", note: "Oltre il pacchetto orario" }
      ],
      hourlyNote: "Il chilometraggio è incluso secondo accordi preventivi. Eventuali eccedenze vengono fatturate a tariffa chilometrica.",

      // Section: Kilometric
      kmTitle: "Tariffa chilometrica",
      kmDesc: "Per trasferimenti a destinazione definita o percorsi personalizzati.",
      kmRates: [
        { label: "Percorsi standard", price: "€ 1,50/km", note: "Pianura e aree urbane" },
        { label: "Laghi e montagna", price: "€ 1,95/km", note: "Maggiorazione +30%" }
      ],

      // Section: Airport Transfers
      transfersTitle: "Transfer aeroportuali",
      transfersDesc: "Prezzi fissi comprensivi di attesa in aeroporto, monitoraggio volo e assistenza bagagli.",
      transfersRates: [
        { route: "Milano Malpensa ↔ Milano centro", price: "€ 170" },
        { route: "Milano Linate ↔ Milano centro", price: "€ 100" },
        { route: "Bergamo Orio al Serio ↔ Milano centro", price: "€ 180" },
        { route: "Milano Malpensa ↔ Rho Fiera Milano", price: "€ 120" },
        { route: "Milano Malpensa ↔ Lugano (CH)", price: "€ 240" }
      ],
      transfersNote: "Tariffe valide per Mercedes Classe V (fino a 6 passeggeri). Per altri veicoli o gruppi più numerosi, richiedere preventivo.",

      // Section: Waiting Time
      waitingTitle: "Tempi di attesa",
      waitingRates: [
        { label: "Arrivi aeroportuali", detail: "60 minuti inclusi nel prezzo" },
        { label: "Prelievi in città", detail: "15 minuti inclusi nel prezzo" },
        { label: "Attesa aggiuntiva", detail: "€ 30 ogni 30 minuti" }
      ],
      waitingNote: "L'attesa decorre dal momento dell'atterraggio (arrivi) o dall'orario concordato (prelievi urbani).",

      // Section: General Conditions
      conditionsTitle: "Condizioni generali",
      conditions: [
        {
          title: "Trasparenza tariffaria",
          text: "Il preventivo comunicato prima del servizio è vincolante. Nessun costo aggiuntivo senza comunicazione e accordo preventivo."
        },
        {
          title: "Nessun supplemento nascosto",
          text: "Bagagli, seggiolini per bambini, variazioni di percorso concordate: nessun extra non dichiarato in fase di preventivo."
        },
        {
          title: "Fatturazione",
          text: "Fattura elettronica emessa entro 48 ore dal servizio. Modalità di pagamento: bonifico bancario, carta di credito aziendale."
        },
        {
          title: "Modifiche e cancellazioni",
          text: "Modifiche accettate fino a 24 ore prima del servizio senza penali. Cancellazioni con meno di 24 ore di preavviso: 50% del costo."
        }
      ],

      // Footer
      footerNote: "Per informazioni o richieste di preventivo:",
      contactEmail: "thomastagliatti2022@gmail.com",
      contactPhone: "+39 389 143 0907",
      backLink: "Torna a MILANO Premium Mobility"
    },
    en: {
      breadcrumb: "MILANO Premium Mobility",
      pageTitle: "Tariff Schedule",
      pageSubtitle: "Public reference tariffs",

      introTitle: "Official tariffs",
      introP1: "The tariffs shown on this page represent the public reference prices for MILANO Premium Mobility services. They apply to all clients without distinction.",
      introNote: "Prices exclude VAT (10%). No undeclared surcharges.",

      hourlyTitle: "Hourly disposal service",
      hourlyDesc: "Vehicle with driver at disposal for the indicated period.",
      hourlyRates: [
        { label: "Half day (4 hours)", price: "€ 360", note: "" },
        { label: "Full day (8 hours)", price: "€ 680", note: "" },
        { label: "Additional hour", price: "€ 85", note: "Beyond hourly package" }
      ],
      hourlyNote: "Mileage is included according to prior agreements. Any excess is charged at the kilometric rate.",

      kmTitle: "Kilometric rate",
      kmDesc: "For transfers to defined destinations or customised routes.",
      kmRates: [
        { label: "Standard routes", price: "€ 1.50/km", note: "Lowland and urban areas" },
        { label: "Lakes and mountains", price: "€ 1.95/km", note: "+30% surcharge" }
      ],

      transfersTitle: "Airport transfers",
      transfersDesc: "Fixed prices including airport waiting, flight monitoring and luggage assistance.",
      transfersRates: [
        { route: "Milan Malpensa ↔ Milan centre", price: "€ 170" },
        { route: "Milan Linate ↔ Milan centre", price: "€ 100" },
        { route: "Bergamo Orio al Serio ↔ Milan centre", price: "€ 180" },
        { route: "Milan Malpensa ↔ Rho Fiera Milano", price: "€ 120" },
        { route: "Milan Malpensa ↔ Lugano (CH)", price: "€ 240" }
      ],
      transfersNote: "Rates valid for Mercedes V-Class (up to 6 passengers). For other vehicles or larger groups, request a quote.",

      waitingTitle: "Waiting times",
      waitingRates: [
        { label: "Airport arrivals", detail: "60 minutes included in price" },
        { label: "City pickups", detail: "15 minutes included in price" },
        { label: "Additional waiting", detail: "€ 30 per 30 minutes" }
      ],
      waitingNote: "Waiting time starts from landing (arrivals) or from agreed time (urban pickups).",

      conditionsTitle: "General conditions",
      conditions: [
        {
          title: "Tariff transparency",
          text: "The quote provided before service is binding. No additional costs without prior communication and agreement."
        },
        {
          title: "No hidden surcharges",
          text: "Luggage, child seats, agreed route changes: no extras not declared at quote stage."
        },
        {
          title: "Invoicing",
          text: "Electronic invoice issued within 48 hours of service. Payment methods: bank transfer, corporate credit card."
        },
        {
          title: "Changes and cancellations",
          text: "Changes accepted up to 24 hours before service without penalty. Cancellations with less than 24 hours notice: 50% of cost."
        }
      ],

      footerNote: "For information or quote requests:",
      contactEmail: "thomastagliatti2022@gmail.com",
      contactPhone: "+39 389 143 0907",
      backLink: "Back to MILANO Premium Mobility"
    },
    pt: {
      breadcrumb: "MILANO Premium Mobility",
      pageTitle: "Prontuário de Tarifas",
      pageSubtitle: "Tarifas de referência públicas",

      introTitle: "Tarifas oficiais",
      introP1: "As tarifas indicadas nesta página representam os preços de referência públicos dos serviços MILANO Premium Mobility. São aplicáveis a todos os clientes sem distinção.",
      introNote: "Preços não incluem IVA (10%). Sem taxas não declaradas.",

      hourlyTitle: "Serviço à disposição por hora",
      hourlyDesc: "Veículo com motorista à disposição pelo período indicado.",
      hourlyRates: [
        { label: "Meio dia (4 horas)", price: "€ 360", note: "" },
        { label: "Dia inteiro (8 horas)", price: "€ 680", note: "" },
        { label: "Hora adicional", price: "€ 85", note: "Além do pacote horário" }
      ],
      hourlyNote: "A quilometragem está incluída conforme acordos prévios. Eventuais excessos são cobrados à tarifa quilométrica.",

      kmTitle: "Tarifa quilométrica",
      kmDesc: "Para transferências a destino definido ou rotas personalizadas.",
      kmRates: [
        { label: "Rotas padrão", price: "€ 1,50/km", note: "Planície e áreas urbanas" },
        { label: "Lagos e montanha", price: "€ 1,95/km", note: "Acréscimo +30%" }
      ],

      transfersTitle: "Transfers aeroportuários",
      transfersDesc: "Preços fixos incluindo espera no aeroporto, monitoramento de voo e assistência com bagagem.",
      transfersRates: [
        { route: "Milão Malpensa ↔ Centro de Milão", price: "€ 170" },
        { route: "Milão Linate ↔ Centro de Milão", price: "€ 100" },
        { route: "Bergamo Orio al Serio ↔ Centro de Milão", price: "€ 180" },
        { route: "Milão Malpensa ↔ Rho Fiera Milano", price: "€ 120" },
        { route: "Milão Malpensa ↔ Lugano (CH)", price: "€ 240" }
      ],
      transfersNote: "Tarifas válidas para Mercedes Classe V (até 6 passageiros). Para outros veículos ou grupos maiores, solicitar orçamento.",

      waitingTitle: "Tempos de espera",
      waitingRates: [
        { label: "Chegadas de aeroporto", detail: "60 minutos incluídos no preço" },
        { label: "Buscas na cidade", detail: "15 minutos incluídos no preço" },
        { label: "Espera adicional", detail: "€ 30 a cada 30 minutos" }
      ],
      waitingNote: "O tempo de espera começa a partir do pouso (chegadas) ou do horário acordado (buscas urbanas).",

      conditionsTitle: "Condições gerais",
      conditions: [
        {
          title: "Transparência tarifária",
          text: "O orçamento fornecido antes do serviço é vinculante. Nenhum custo adicional sem comunicação e acordo prévio."
        },
        {
          title: "Sem taxas ocultas",
          text: "Bagagens, cadeirinhas infantis, alterações de rota acordadas: nenhum extra não declarado na fase de orçamento."
        },
        {
          title: "Faturação",
          text: "Fatura eletrônica emitida em até 48 horas após o serviço. Formas de pagamento: transferência bancária, cartão corporativo."
        },
        {
          title: "Alterações e cancelamentos",
          text: "Alterações aceitas até 24 horas antes do serviço sem penalidade. Cancelamentos com menos de 24 horas: 50% do custo."
        }
      ],

      footerNote: "Para informações ou pedidos de orçamento:",
      contactEmail: "thomastagliatti2022@gmail.com",
      contactPhone: "+39 389 143 0907",
      backLink: "Voltar para MILANO Premium Mobility"
    },
    fr: {
      breadcrumb: "MILANO Premium Mobility",
      pageTitle: "Barème Tarifaire",
      pageSubtitle: "Tarifs de référence publics",

      introTitle: "Tarifs officiels",
      introP1: "Les tarifs indiqués sur cette page représentent les prix de référence publics des services MILANO Premium Mobility. Ils s'appliquent à tous les clients sans distinction.",
      introNote: "Prix hors TVA (10%). Aucun supplément non déclaré.",

      hourlyTitle: "Service à disposition horaire",
      hourlyDesc: "Véhicule avec chauffeur à disposition pour la période indiquée.",
      hourlyRates: [
        { label: "Demi-journée (4 heures)", price: "€ 360", note: "" },
        { label: "Journée complète (8 heures)", price: "€ 680", note: "" },
        { label: "Heure supplémentaire", price: "€ 85", note: "Au-delà du forfait horaire" }
      ],
      hourlyNote: "Le kilométrage est inclus selon accords préalables. Tout excédent est facturé au tarif kilométrique.",

      kmTitle: "Tarif kilométrique",
      kmDesc: "Pour transferts vers destination définie ou parcours personnalisés.",
      kmRates: [
        { label: "Parcours standards", price: "€ 1,50/km", note: "Plaine et zones urbaines" },
        { label: "Lacs et montagne", price: "€ 1,95/km", note: "Majoration +30%" }
      ],

      transfersTitle: "Transferts aéroport",
      transfersDesc: "Prix fixes incluant attente aéroport, suivi vol et assistance bagages.",
      transfersRates: [
        { route: "Milan Malpensa ↔ Centre de Milan", price: "€ 170" },
        { route: "Milan Linate ↔ Centre de Milan", price: "€ 100" },
        { route: "Bergamo Orio al Serio ↔ Centre de Milan", price: "€ 180" },
        { route: "Milan Malpensa ↔ Rho Fiera Milano", price: "€ 120" },
        { route: "Milan Malpensa ↔ Lugano (CH)", price: "€ 240" }
      ],
      transfersNote: "Tarifs valables pour Mercedes Classe V (jusqu'à 6 passagers). Pour autres véhicules ou groupes plus nombreux, demander un devis.",

      waitingTitle: "Temps d'attente",
      waitingRates: [
        { label: "Arrivées aéroport", detail: "60 minutes incluses dans le prix" },
        { label: "Prises en charge en ville", detail: "15 minutes incluses dans le prix" },
        { label: "Attente supplémentaire", detail: "€ 30 par 30 minutes" }
      ],
      waitingNote: "Le temps d'attente démarre à partir de l'atterrissage (arrivées) ou de l'heure convenue (prises en charge urbaines).",

      conditionsTitle: "Conditions générales",
      conditions: [
        {
          title: "Transparence tarifaire",
          text: "Le devis fourni avant le service est contraignant. Aucun coût supplémentaire sans communication et accord préalable."
        },
        {
          title: "Aucun supplément caché",
          text: "Bagages, sièges enfants, modifications d'itinéraire convenues : aucun extra non déclaré au stade du devis."
        },
        {
          title: "Facturation",
          text: "Facture électronique émise sous 48 heures après le service. Modes de paiement : virement bancaire, carte corporate."
        },
        {
          title: "Modifications et annulations",
          text: "Modifications acceptées jusqu'à 24 heures avant le service sans pénalité. Annulations à moins de 24 heures : 50% du coût."
        }
      ],

      footerNote: "Pour informations ou demandes de devis :",
      contactEmail: "thomastagliatti2022@gmail.com",
      contactPhone: "+39 389 143 0907",
      backLink: "Retour à MILANO Premium Mobility"
    }
  };

  const c = content[language] || content.it;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${c.pageTitle} | MILANO Premium Mobility | TMT`}
        description={c.introP1}
        keywords="tariffe ncc milano, prezzi transfer malpensa, listino noleggio con conducente, costi autista privato milano"
        canonicalUrl="https://tmtransferlux.it/milano-prontuario-tariffe"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-milano-gold rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container text-center milano-fade-in">
            <Link
              to="/milano-premium-mobility"
              className="milano-caption text-primary-foreground/40 hover:text-milano-gold transition-colors inline-block mb-8"
            >
              {c.breadcrumb}
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 tracking-tight">
              {c.pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-milano-gold font-heading font-light tracking-wide">
              {c.pageSubtitle}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Introduction */}
      <section className="milano-section-sm bg-background border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="milano-container">
            <div className="mb-6">
              <div className="milano-divider-gold mb-6" />
              <h2 className="milano-heading-md text-foreground mb-4">
                {c.introTitle}
              </h2>
            </div>

            <p className="milano-body text-muted-foreground mb-6">
              {c.introP1}
            </p>

            <div className="flex items-start gap-4 p-5 bg-milano-gold-subtle rounded-xl border border-milano-gold">
              <Info className="w-5 h-5 text-milano-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80">
                {c.introNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs */}
      <section className="milano-section bg-background">
        <div className="container mx-auto px-4">
          <div className="milano-container-wide">

            {/* Hourly + Kilometric Row */}
            <div className="milano-grid-2 mb-10">

              {/* Hourly */}
              <div className="milano-card p-0 overflow-hidden">
                <div className="p-6 border-b border-border/20 bg-muted/5">
                  <div className="flex items-center gap-4">
                    <div className="milano-icon-box">
                      <Clock className="w-5 h-5 text-milano-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {c.hourlyTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        {c.hourlyDesc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {c.hourlyRates.map((rate, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-4 ${index !== c.hourlyRates.length - 1 ? 'border-b border-border/20' : ''
                        }`}
                    >
                      <div>
                        <span className="font-medium text-foreground">{rate.label}</span>
                        {rate.note && <p className="text-xs text-muted-foreground/60 mt-1">{rate.note}</p>}
                      </div>
                      <span className="text-xl font-bold text-foreground tabular-nums">{rate.price}</span>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground/60 mt-4 pt-4 border-t border-border/20">
                    {c.hourlyNote}
                  </p>
                </div>
              </div>

              {/* Kilometric */}
              <div className="milano-card p-0 overflow-hidden">
                <div className="p-6 border-b border-border/20 bg-muted/5">
                  <div className="flex items-center gap-4">
                    <div className="milano-icon-box">
                      <MapPin className="w-5 h-5 text-milano-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {c.kmTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        {c.kmDesc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {c.kmRates.map((rate, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-4 ${index !== c.kmRates.length - 1 ? 'border-b border-border/20' : ''
                        }`}
                    >
                      <div>
                        <span className="font-medium text-foreground">{rate.label}</span>
                        {rate.note && <p className="text-xs text-muted-foreground/60 mt-1">{rate.note}</p>}
                      </div>
                      <span className="text-xl font-bold text-foreground tabular-nums">{rate.price}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Airport Transfers */}
            <div className="milano-card p-0 overflow-hidden mb-10">
              <div className="p-6 border-b border-border/20 bg-muted/5">
                <div className="flex items-center gap-4">
                  <div className="milano-icon-box">
                    <Plane className="w-5 h-5 text-milano-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {c.transfersTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      {c.transfersDesc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {c.transfersRates.map((transfer, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-muted/5 rounded-lg border border-border/20"
                    >
                      <span className="text-sm text-foreground">{transfer.route}</span>
                      <span className="text-lg font-bold text-foreground tabular-nums ml-4">{transfer.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground/60 mt-6 pt-4 border-t border-border/20">
                  {c.transfersNote}
                </p>
              </div>
            </div>

            {/* Waiting Times */}
            <div className="milano-card p-0 overflow-hidden">
              <div className="p-6 border-b border-border/20 bg-muted/5">
                <div className="flex items-center gap-4">
                  <div className="milano-icon-box">
                    <Clock className="w-5 h-5 text-milano-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {c.waitingTitle}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {c.waitingRates.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted/5 rounded-lg">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-sm font-medium text-muted-foreground ml-4">{item.detail}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground/60 mt-4 pt-4 border-t border-border/20">
                  {c.waitingNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Conditions */}
      <section className="milano-section bg-muted/5 border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="milano-container">
            <div className="text-center mb-16">
              <div className="milano-divider-gold mx-auto mb-8" />
              <h2 className="milano-heading-md text-foreground">
                {c.conditionsTitle}
              </h2>
            </div>

            <div className="milano-grid-2">
              {c.conditions.map((condition, index) => (
                <div key={index} className="flex gap-5 p-6 milano-card milano-card-hover">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-milano-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-semibold text-foreground mb-2">
                      {condition.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {condition.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="milano-container text-center">
            <p className="text-sm text-primary-foreground/50 mb-4">
              {c.footerNote}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href={`mailto:${c.contactEmail}`}
                className="text-primary-foreground/70 hover:text-milano-gold transition-colors text-sm"
              >
                {c.contactEmail}
              </a>
              <span className="hidden sm:inline text-primary-foreground/20">|</span>
              <a
                href={`tel:${c.contactPhone.replace(/\s/g, '')}`}
                className="text-primary-foreground/70 hover:text-milano-gold transition-colors text-sm"
              >
                {c.contactPhone}
              </a>
            </div>

            <Link
              to="/milano-premium-mobility"
              className="inline-flex items-center text-sm text-milano-gold hover:text-milano-gold-muted transition-colors"
            >
              ← {c.backLink}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilanoTariffe;
