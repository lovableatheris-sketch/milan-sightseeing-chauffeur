import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Users, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import milanoLogo from "@/assets/milano-logo.png";

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

      {/* Hero Section - Premium Visual with Logo */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Sophisticated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_3%)] via-[hsl(0_0%_5%)] to-[hsl(0_0%_6%)]" />
        
        {/* Metallic silver/gold ambient glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[hsl(43_30%_40%)] rounded-full blur-[150px] opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(0_0%_50%)] rounded-full blur-[180px] opacity-5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(43_20%_35%)] rounded-full blur-[200px] opacity-5" />
        </div>
        
        {/* Subtle metallic grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(0 0% 100% / 0.15) 0%, transparent 50%)`,
            backgroundSize: '3px 3px'
          }} 
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container text-center milano-fade-in">
            {/* Corporate tagline */}
            <p className="milano-caption text-[hsl(0_0%_50%)] mb-6 tracking-[0.3em]">
              {c.heroTagline}
            </p>
            
            {/* Central Logo - MUCH LARGER */}
            <div className="relative mx-auto">
              {/* Subtle glow behind logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] bg-[hsl(43_30%_40%)] rounded-full blur-[100px] opacity-15" />
              </div>
              {/* Logo image - Very Large */}
              <img 
                src={milanoLogo} 
                alt="MILANO Premium Mobility by TMT" 
                className="relative z-10 w-80 h-auto md:w-[28rem] lg:w-[36rem] xl:w-[42rem] mx-auto"
                style={{
                  filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.5)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade - smaller */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Introduction - with refined background */}
      <section className="milano-section relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(0_0%_4%)] to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container">
            <div className="mb-10">
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

      {/* Operational Philosophy - with metallic accents */}
      <section className="milano-section relative overflow-hidden">
        {/* Refined background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_5%)] via-[hsl(0_0%_6%)] to-[hsl(0_0%_5%)]" />
        <div className="absolute inset-0 border-y border-[hsl(0_0%_15%)]" />
        
        {/* Subtle ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[hsl(43_20%_30%)] rounded-full blur-[150px] opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container-wide">
            <div className="text-center mb-20">
              {/* Metallic decorative element */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(0_0%_35%)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(43_35%_45%)]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(0_0%_35%)]" />
              </div>
              <h2 className="milano-heading-lg text-foreground mb-4">
                {c.philosophyTitle}
              </h2>
              <p className="milano-body text-[hsl(0_0%_50%)]">
                {c.philosophySubtitle}
              </p>
            </div>

            <p className="milano-body-lg text-muted-foreground text-center max-w-3xl mx-auto mb-20">
              {c.philosophyP1}
            </p>

            <div className="milano-grid-3">
              {c.philosophyItems.map((item, index) => (
                <div key={index} className="relative group p-10 rounded-xl bg-gradient-to-b from-[hsl(0_0%_8%)] to-[hsl(0_0%_6%)] border border-[hsl(0_0%_15%)] hover:border-[hsl(43_30%_35%)/40] transition-all duration-300">
                  {/* Card accent bar with metallic gradient */}
                  <div className="w-0.5 h-12 mb-8 rounded-full bg-gradient-to-b from-[hsl(43_40%_50%)] via-[hsl(43_30%_40%)] to-transparent" />
                  <h3 className="milano-heading-sm text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="milano-body text-[hsl(0_0%_55%)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Standards - refined cards */}
      <section className="milano-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(0_0%_4%)] to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container-wide">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(0_0%_35%)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(43_35%_45%)]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(0_0%_35%)]" />
              </div>
              <h2 className="milano-heading-lg text-foreground mb-4">
                {c.standardsTitle}
              </h2>
              <p className="milano-body text-[hsl(0_0%_50%)]">
                {c.standardsSubtitle}
              </p>
            </div>

            <div className="milano-grid-2">
              {c.standardsItems.map((item, index) => (
                <div key={index} className="flex gap-6 p-8 rounded-xl bg-gradient-to-br from-[hsl(0_0%_8%)] to-[hsl(0_0%_5%)] border border-[hsl(0_0%_15%)] hover:border-[hsl(43_30%_35%)/40] transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(43_30%_20%)/30] to-transparent border border-[hsl(43_30%_40%)/20]">
                      <item.icon className="w-6 h-6 text-[hsl(43_40%_55%)]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="milano-body text-[hsl(0_0%_55%)]">
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
      <section className="milano-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_5%)] via-[hsl(0_0%_6%)] to-[hsl(0_0%_5%)]" />
        <div className="absolute inset-0 border-y border-[hsl(0_0%_15%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(0_0%_35%)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(43_35%_45%)]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(0_0%_35%)]" />
              </div>
              <h2 className="milano-heading-lg text-foreground mb-4">
                {c.flexTitle}
              </h2>
              <p className="milano-body text-[hsl(0_0%_50%)]">
                {c.flexSubtitle}
              </p>
            </div>

            <p className="milano-body-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              {c.flexP1}
            </p>

            <div className="space-y-6">
              {c.flexItems.map((item, index) => (
                <div key={index} className="flex gap-6 p-8 rounded-xl bg-gradient-to-br from-[hsl(0_0%_8%)] to-[hsl(0_0%_5%)] border border-[hsl(0_0%_15%)] hover:border-[hsl(43_30%_35%)/40] transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[hsl(43_40%_45%)] to-[hsl(43_30%_35%)]">
                      <CheckCircle className="w-4 h-4 text-[hsl(0_0%_10%)]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="milano-body text-[hsl(0_0%_55%)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing - premium CTA section */}
      <section className="milano-section relative overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_3%)] via-[hsl(0_0%_5%)] to-[hsl(0_0%_3%)]" />
        
        {/* Metallic ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[hsl(43_25%_30%)] rounded-full blur-[150px] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="milano-container text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[hsl(0_0%_30%)] to-transparent" />
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[hsl(43_40%_50%)] to-[hsl(43_30%_40%)]" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[hsl(0_0%_30%)] to-transparent" />
            </div>

            <h2 className="milano-heading-lg text-foreground mb-10">
              {c.closingTitle}
            </h2>

            <div className="space-y-4 mb-14">
              <p className="milano-body-lg text-[hsl(0_0%_60%)] max-w-2xl mx-auto">
                {c.closingP1}
              </p>
              <p className="milano-body text-[hsl(0_0%_45%)] max-w-2xl mx-auto">
                {c.closingP2}
              </p>
            </div>

            <Link to={c.closingCtaLink}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(43_40%_45%)] to-[hsl(43_30%_35%)] text-[hsl(0_0%_5%)] hover:from-[hsl(43_45%_50%)] hover:to-[hsl(43_35%_40%)] transition-all duration-300 px-10 py-6 text-base font-semibold shadow-lg shadow-[hsl(43_30%_30%)/20]"
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
