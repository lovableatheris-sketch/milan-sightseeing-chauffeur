import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Users, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MilanoPremiumMobility = () => {
  const { language } = useLanguage();

  // FINAL PUBLISH-READY COPY
  const content = {
    it: {
      // Hero
      heroTagline: "Divisione Corporate",
      heroTitle: "MILANO",
      heroSubtitle: "Premium Mobility",
      heroByline: "by TMT",

      // Introduction
      introTitle: "La divisione corporate di TMT",
      introP1: "MILANO è la divisione di TMT dedicata alla mobilità aziendale. Operiamo a Milano, in Lombardia e nelle principali aree del Nord Italia, fornendo servizi di trasporto con conducente a clienti corporate, executive e partner B2B.",
      introP2: "Il nostro ambito operativo comprende trasferimenti aeroportuali da Malpensa, Linate e Orio al Serio, servizi a disposizione oraria e trasferte interregionali.",

      // Operational Philosophy
      philosophyTitle: "Filosofia operativa",
      philosophySubtitle: "Un servizio progettato per non richiedere attenzione",
      philosophyP1: "Il nostro approccio si basa su tre elementi: discrezione, puntualità e prevedibilità. Ogni servizio è strutturato per integrarsi nella giornata lavorativa del cliente senza interferenze.",
      philosophyItems: [
        {
          title: "Discrezione",
          desc: "L'autista interviene solo quando necessario. Nessuna conversazione non richiesta, nessuna interruzione del lavoro in corso."
        },
        {
          title: "Ambiente riservato",
          desc: "Il veicolo è uno spazio di lavoro. Chiamate, email, documentazione: tutto può proseguire senza interruzioni durante il trasferimento."
        },
        {
          title: "Prevedibilità",
          desc: "Orari confermati, percorsi definiti, nessuna variabile imprevista. Il cliente conosce in anticipo ogni dettaglio del servizio."
        }
      ],

      // Driver Standards
      standardsTitle: "Standard operativi",
      standardsSubtitle: "Requisiti applicati a ogni servizio",
      standardsItems: [
        {
          icon: Users,
          title: "Condotta professionale",
          desc: "Presentazione formale, comportamento discreto, familiarità con le esigenze di contesti aziendali e istituzionali."
        },
        {
          icon: Shield,
          title: "Formazione specifica",
          desc: "Ogni autista segue un percorso formativo che include guida sicura, gestione del tempo, protocolli di riservatezza."
        },
        {
          icon: FileText,
          title: "Documentazione e reportistica",
          desc: "Procedure standardizzate, fatturazione elettronica, rendicontazione compatibile con i sistemi di expense management aziendali."
        },
        {
          icon: Clock,
          title: "Gestione oraria",
          desc: "Monitoraggio voli, arrivo anticipato, margini operativi per garantire puntualità in ogni condizione di traffico."
        }
      ],

      // Flexibility
      flexTitle: "Flessibilità operativa",
      flexSubtitle: "Adattamento alle esigenze in corso di servizio",
      flexP1: "Comprendiamo che i programmi aziendali possono variare. Il servizio è strutturato per gestire modifiche senza compromettere l'efficienza.",
      flexItems: [
        {
          title: "Variazioni di percorso",
          desc: "Eventuali cambi di destinazione vengono gestiti in tempo reale, previa comunicazione al conducente."
        },
        {
          title: "Richieste durante il servizio",
          desc: "Fermate aggiuntive, anticipi o prolungamenti orari sono gestiti con la stessa precisione del servizio pianificato."
        },
        {
          title: "Rendicontazione trasparente",
          desc: "Al termine del servizio viene fornito un riepilogo di tempi e chilometri effettivi. Nessun addebito senza comunicazione preventiva."
        }
      ],

      // Closing
      closingTitle: "Continuità e affidabilità",
      closingP1: "MILANO è un servizio pensato per relazioni continuative. Lavoriamo con aziende che richiedono un fornitore stabile, in grado di garantire lo stesso livello di servizio ad ogni utilizzo.",
      closingP2: "La coerenza operativa è il nostro criterio di valutazione.",
      closingCta: "Consulta il prontuario tariffe",
      closingCtaLink: "/milano-prontuario-tariffe"
    },
    en: {
      heroTagline: "Corporate Division",
      heroTitle: "MILANO",
      heroSubtitle: "Premium Mobility",
      heroByline: "by TMT",

      introTitle: "TMT's corporate division",
      introP1: "MILANO is the TMT division dedicated to corporate mobility. We operate in Milan, Lombardy and the main areas of Northern Italy, providing chauffeur-driven transport services to corporate clients, executives and B2B partners.",
      introP2: "Our operational scope includes airport transfers from Malpensa, Linate and Orio al Serio, hourly disposal services and interregional transfers.",

      philosophyTitle: "Operational philosophy",
      philosophySubtitle: "A service designed to require no attention",
      philosophyP1: "Our approach is based on three elements: discretion, punctuality and predictability. Every service is structured to integrate into the client's working day without interference.",
      philosophyItems: [
        {
          title: "Discretion",
          desc: "The driver intervenes only when necessary. No unsolicited conversation, no interruption to ongoing work."
        },
        {
          title: "Reserved environment",
          desc: "The vehicle is a workspace. Calls, emails, documentation: everything can continue without interruption during the transfer."
        },
        {
          title: "Predictability",
          desc: "Confirmed schedules, defined routes, no unexpected variables. The client knows every detail of the service in advance."
        }
      ],

      standardsTitle: "Operational standards",
      standardsSubtitle: "Requirements applied to every service",
      standardsItems: [
        {
          icon: Users,
          title: "Professional conduct",
          desc: "Formal presentation, discreet behaviour, familiarity with the requirements of corporate and institutional contexts."
        },
        {
          icon: Shield,
          title: "Specific training",
          desc: "Every driver follows a training path that includes safe driving, time management, confidentiality protocols."
        },
        {
          icon: FileText,
          title: "Documentation and reporting",
          desc: "Standardised procedures, electronic invoicing, reporting compatible with corporate expense management systems."
        },
        {
          icon: Clock,
          title: "Time management",
          desc: "Flight monitoring, early arrival, operational margins to ensure punctuality in all traffic conditions."
        }
      ],

      flexTitle: "Operational flexibility",
      flexSubtitle: "Adaptation to requirements during service",
      flexP1: "We understand that business schedules can vary. The service is structured to handle changes without compromising efficiency.",
      flexItems: [
        {
          title: "Route variations",
          desc: "Any destination changes are managed in real time, following communication to the driver."
        },
        {
          title: "Requests during service",
          desc: "Additional stops, schedule changes or extensions are handled with the same precision as the planned service."
        },
        {
          title: "Transparent reporting",
          desc: "At the end of the service, a summary of actual times and kilometres is provided. No charge without prior communication."
        }
      ],

      closingTitle: "Continuity and reliability",
      closingP1: "MILANO is a service designed for ongoing relationships. We work with companies that require a stable provider, able to guarantee the same level of service with every use.",
      closingP2: "Operational consistency is our evaluation criterion.",
      closingCta: "View tariff schedule",
      closingCtaLink: "/milano-prontuario-tariffe"
    },
    pt: {
      heroTagline: "Divisão Corporate",
      heroTitle: "MILANO",
      heroSubtitle: "Premium Mobility",
      heroByline: "by TMT",

      introTitle: "A divisão corporativa da TMT",
      introP1: "MILANO é a divisão da TMT dedicada à mobilidade empresarial. Operamos em Milão, Lombardia e principais áreas do Norte da Itália, fornecendo serviços de transporte com motorista para clientes corporativos, executivos e parceiros B2B.",
      introP2: "Nosso âmbito operacional inclui transferências aeroportuárias de Malpensa, Linate e Orio al Serio, serviços à disposição por hora e transferências inter-regionais.",

      philosophyTitle: "Filosofia operacional",
      philosophySubtitle: "Um serviço projetado para não exigir atenção",
      philosophyP1: "Nossa abordagem baseia-se em três elementos: discrição, pontualidade e previsibilidade. Cada serviço é estruturado para se integrar ao dia de trabalho do cliente sem interferências.",
      philosophyItems: [
        {
          title: "Discrição",
          desc: "O motorista intervém apenas quando necessário. Nenhuma conversa não solicitada, nenhuma interrupção ao trabalho em andamento."
        },
        {
          title: "Ambiente reservado",
          desc: "O veículo é um espaço de trabalho. Chamadas, emails, documentação: tudo pode continuar sem interrupções durante o translado."
        },
        {
          title: "Previsibilidade",
          desc: "Horários confirmados, rotas definidas, nenhuma variável imprevista. O cliente conhece antecipadamente cada detalhe do serviço."
        }
      ],

      standardsTitle: "Padrões operacionais",
      standardsSubtitle: "Requisitos aplicados a cada serviço",
      standardsItems: [
        {
          icon: Users,
          title: "Conduta profissional",
          desc: "Apresentação formal, comportamento discreto, familiaridade com as exigências de contextos corporativos e institucionais."
        },
        {
          icon: Shield,
          title: "Formação específica",
          desc: "Cada motorista segue um percurso formativo que inclui direção segura, gestão do tempo, protocolos de confidencialidade."
        },
        {
          icon: FileText,
          title: "Documentação e relatórios",
          desc: "Procedimentos padronizados, faturação eletrônica, relatórios compatíveis com sistemas de gestão de despesas corporativas."
        },
        {
          icon: Clock,
          title: "Gestão de horários",
          desc: "Monitoramento de voos, chegada antecipada, margens operacionais para garantir pontualidade em qualquer condição de tráfego."
        }
      ],

      flexTitle: "Flexibilidade operacional",
      flexSubtitle: "Adaptação às necessidades durante o serviço",
      flexP1: "Compreendemos que programações empresariais podem variar. O serviço é estruturado para gerir mudanças sem comprometer a eficiência.",
      flexItems: [
        {
          title: "Variações de rota",
          desc: "Eventuais mudanças de destino são geridas em tempo real, mediante comunicação ao condutor."
        },
        {
          title: "Solicitações durante o serviço",
          desc: "Paradas adicionais, antecipações ou prolongamentos de horário são geridos com a mesma precisão do serviço planejado."
        },
        {
          title: "Prestação de contas transparente",
          desc: "Ao final do serviço é fornecido um resumo de tempos e quilômetros efetivos. Nenhuma cobrança sem comunicação prévia."
        }
      ],

      closingTitle: "Continuidade e confiabilidade",
      closingP1: "MILANO é um serviço pensado para relacionamentos contínuos. Trabalhamos com empresas que necessitam de um fornecedor estável, capaz de garantir o mesmo nível de serviço a cada utilização.",
      closingP2: "A coerência operacional é nosso critério de avaliação.",
      closingCta: "Consultar prontuário de tarifas",
      closingCtaLink: "/milano-prontuario-tariffe"
    },
    fr: {
      heroTagline: "Division Corporate",
      heroTitle: "MILANO",
      heroSubtitle: "Premium Mobility",
      heroByline: "by TMT",

      introTitle: "La division corporate de TMT",
      introP1: "MILANO est la division de TMT dédiée à la mobilité d'entreprise. Nous opérons à Milan, en Lombardie et dans les principales zones du Nord de l'Italie, fournissant des services de transport avec chauffeur aux clients corporate, dirigeants et partenaires B2B.",
      introP2: "Notre périmètre opérationnel comprend les transferts aéroport depuis Malpensa, Linate et Orio al Serio, les services à disposition horaire et les transferts interrégionaux.",

      philosophyTitle: "Philosophie opérationnelle",
      philosophySubtitle: "Un service conçu pour ne pas nécessiter d'attention",
      philosophyP1: "Notre approche repose sur trois éléments : discrétion, ponctualité et prévisibilité. Chaque service est structuré pour s'intégrer dans la journée de travail du client sans interférence.",
      philosophyItems: [
        {
          title: "Discrétion",
          desc: "Le chauffeur n'intervient que lorsque c'est nécessaire. Aucune conversation non sollicitée, aucune interruption du travail en cours."
        },
        {
          title: "Environnement réservé",
          desc: "Le véhicule est un espace de travail. Appels, emails, documentation : tout peut continuer sans interruption pendant le transfert."
        },
        {
          title: "Prévisibilité",
          desc: "Horaires confirmés, itinéraires définis, aucune variable imprévue. Le client connaît à l'avance chaque détail du service."
        }
      ],

      standardsTitle: "Standards opérationnels",
      standardsSubtitle: "Exigences appliquées à chaque service",
      standardsItems: [
        {
          icon: Users,
          title: "Conduite professionnelle",
          desc: "Présentation formelle, comportement discret, familiarité avec les exigences des contextes corporate et institutionnels."
        },
        {
          icon: Shield,
          title: "Formation spécifique",
          desc: "Chaque chauffeur suit un parcours de formation incluant conduite sûre, gestion du temps, protocoles de confidentialité."
        },
        {
          icon: FileText,
          title: "Documentation et reporting",
          desc: "Procédures standardisées, facturation électronique, reporting compatible avec les systèmes de gestion des dépenses d'entreprise."
        },
        {
          icon: Clock,
          title: "Gestion horaire",
          desc: "Suivi des vols, arrivée anticipée, marges opérationnelles pour garantir la ponctualité dans toutes les conditions de circulation."
        }
      ],

      flexTitle: "Flexibilité opérationnelle",
      flexSubtitle: "Adaptation aux besoins en cours de service",
      flexP1: "Nous comprenons que les programmes d'entreprise peuvent varier. Le service est structuré pour gérer les modifications sans compromettre l'efficacité.",
      flexItems: [
        {
          title: "Variations d'itinéraire",
          desc: "Tout changement de destination est géré en temps réel, après communication au chauffeur."
        },
        {
          title: "Demandes pendant le service",
          desc: "Arrêts supplémentaires, avances ou prolongations d'horaire sont gérés avec la même précision que le service planifié."
        },
        {
          title: "Compte-rendu transparent",
          desc: "À la fin du service, un récapitulatif des temps et kilomètres effectifs est fourni. Aucune facturation sans communication préalable."
        }
      ],

      closingTitle: "Continuité et fiabilité",
      closingP1: "MILANO est un service conçu pour des relations continues. Nous travaillons avec des entreprises qui ont besoin d'un fournisseur stable, capable de garantir le même niveau de service à chaque utilisation.",
      closingP2: "La cohérence opérationnelle est notre critère d'évaluation.",
      closingCta: "Consulter le barème tarifaire",
      closingCtaLink: "/milano-prontuario-tariffe"
    }
  };

  const c = content[language] || content.it;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`MILANO Premium Mobility | ${c.heroTagline} | TMT`}
        description={c.introP1}
        keywords="ncc corporate milano, noleggio con conducente aziende, transfer aziendale milano, servizio autista milano, mobilità aziendale lombardia"
        canonicalUrl="https://tmtransferlux.it/milano-premium-mobility"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-milano-gold rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-milano-gold rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container text-center milano-fade-in">
            <p className="milano-caption text-primary-foreground/40 mb-6">
              {c.heroTagline}
            </p>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-primary-foreground mb-4 tracking-tighter">
              {c.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-milano-gold font-heading font-light tracking-wide mb-6">
              {c.heroSubtitle}
            </p>
            <p className="milano-caption text-primary-foreground/30">
              {c.heroByline}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Introduction */}
      <section className="milano-section bg-background">
        <div className="container mx-auto px-4">
          <div className="milano-container">
            <div className="mb-8">
              <div className="milano-divider-gold mb-8" />
              <h2 className="milano-heading-lg text-foreground mb-6">
                {c.introTitle}
              </h2>
            </div>
            <div className="space-y-5 milano-body-lg text-muted-foreground">
              <p>{c.introP1}</p>
              <p className="text-muted-foreground/80">{c.introP2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Philosophy */}
      <section className="milano-section bg-muted/5 border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="milano-container-wide">
            <div className="text-center mb-20">
              <div className="milano-divider-gold mx-auto mb-8" />
              <h2 className="milano-heading-lg text-foreground mb-4">
                {c.philosophyTitle}
              </h2>
              <p className="milano-body text-muted-foreground/60">
                {c.philosophySubtitle}
              </p>
            </div>

            <p className="milano-body-lg text-muted-foreground text-center max-w-3xl mx-auto mb-20">
              {c.philosophyP1}
            </p>

            <div className="milano-grid-3">
              {c.philosophyItems.map((item, index) => (
                <div key={index} className="milano-card milano-card-hover p-10">
                  <div className="milano-accent-bar-lg mb-8" />
                  <h3 className="milano-heading-sm text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="milano-body text-muted-foreground/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Standards */}
      <section className="milano-section bg-background">
        <div className="container mx-auto px-4">
          <div className="milano-container-wide">
            <div className="text-center mb-20">
              <div className="milano-divider-gold mx-auto mb-8" />
              <h2 className="milano-heading-lg text-foreground mb-4">
                {c.standardsTitle}
              </h2>
              <p className="milano-body text-muted-foreground/60">
                {c.standardsSubtitle}
              </p>
            </div>

            <div className="milano-grid-2">
              {c.standardsItems.map((item, index) => (
                <div key={index} className="flex gap-6 p-8 milano-card milano-card-hover">
                  <div className="flex-shrink-0">
                    <div className="milano-icon-box-lg">
                      <item.icon className="w-6 h-6 text-milano-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="milano-body text-muted-foreground/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Flexibility */}
      <section className="milano-section bg-muted/5 border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="milano-container">
            <div className="text-center mb-16">
              <div className="milano-divider-gold mx-auto mb-8" />
              <h2 className="milano-heading-lg text-foreground mb-4">
                {c.flexTitle}
              </h2>
              <p className="milano-body text-muted-foreground/60">
                {c.flexSubtitle}
              </p>
            </div>

            <p className="milano-body-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              {c.flexP1}
            </p>

            <div className="space-y-6">
              {c.flexItems.map((item, index) => (
                <div key={index} className="flex gap-6 p-8 milano-card milano-card-hover">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-milano-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="milano-body text-muted-foreground/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="milano-section bg-primary">
        <div className="container mx-auto px-4">
          <div className="milano-container text-center">
            <div className="milano-divider-gold mx-auto mb-12" />

            <h2 className="milano-heading-lg text-primary-foreground mb-10">
              {c.closingTitle}
            </h2>

            <div className="space-y-4 mb-14">
              <p className="milano-body-lg text-primary-foreground/70 max-w-2xl mx-auto">
                {c.closingP1}
              </p>
              <p className="milano-body text-primary-foreground/50 max-w-2xl mx-auto">
                {c.closingP2}
              </p>
            </div>

            <Link to={c.closingCtaLink}>
              <Button
                size="lg"
                className="bg-transparent border border-milano-gold text-milano-gold hover:bg-milano-gold hover:text-primary transition-all duration-300 px-10 py-6 text-base font-medium"
              >
                {c.closingCta}
                <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilanoPremiumMobility;
