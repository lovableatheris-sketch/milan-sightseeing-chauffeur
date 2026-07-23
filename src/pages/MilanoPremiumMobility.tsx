import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Users, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import milanoLogo from "@/assets/milano-logo.png";
import MotionReveal from "@/components/MotionReveal";

const MilanoPremiumMobility = () => {
  const { language } = useLanguage();

  const content = {
    it: {
      // Hero
      heroTagline: "THE CORPORATE STANDARD",
      heroTitle: "NEXITUS",
      heroSubtitle: "Excellence in Motion.",
      heroByline: "Executive Mobility",

      // Introduction
      introTitle: "Un nuovo standard di mobilità d'élite",
      introP1: "La storia di NEXITUS non nasce dal caso, ma da anni di dedizione al fianco di una clientela d'élite. Abbiamo trasformato questa esperienza in un modello operativo dove la perfezione è la norma e la reattività anticipa ogni esigenza.",
      introP2: "Dal transfer aeroportuale privato per Malpensa, Linate e Orio al Serio alla gestione completa della mobilità per roadshow ed eventi aziendali: ogni viaggio è un'esperienza di silenzio, comfort e controllo assoluto.",

      // Operational Philosophy
      philosophyTitle: "L'Arte dell'Eccellenza Operativa",
      philosophySubtitle: "Il vero lusso non richiede la tua attenzione",
      philosophyP1: "La nostra filosofia si fonda sull'invisibilità e la precisione. Il servizio perfetto è quello in cui tutto accade esattamente come deve accadere. Riservatezza assoluta, puntualità millimetrica e massimo rispetto del tuo tempo.",
      philosophyItems: [
        {
          title: "Invisibilità & Discrezione",
          desc: "L'autista è una presenza impercettibile ed altamente qualificata. Interviene solo se richiesto. Il tuo spazio e la tua privacy rimangono inviolati."
        },
        {
          title: "Executive Sanctuary",
          desc: "L'abitacolo della flotta Mercedes-Benz è il tuo ufficio mobile o la tua lounge riservata. Silenzio, connessione Wi-Fi e comfort per operare senza interruzioni."
        },
        {
          title: "Certezza Operativa",
          desc: "Nessuna variabile o imprevisto. Percorsi ottimizzati preventivemente e monitoraggio voli in tempo reale per la massima serenità."
        }
      ],

      // Driver Standards
      standardsTitle: "Standard Operativi Corporativi",
      standardsSubtitle: "Requisiti rigorosi applicati a ogni servizio",
      standardsItems: [
        {
          icon: Users,
          title: "Condotta Professionale d'Élite",
          desc: "Presentazione formale impeccabile, comportamento discreto e profonda familiarità con i contesti aziendali ed istituzionali internazionali."
        },
        {
          icon: Shield,
          title: "Formazione e Riservatezza Certificata",
          desc: "Ogni autista segue percorsi di guida sicura, gestione del tempo e stretti protocolli di riservatezza per la tutela della clientela."
        },
        {
          icon: FileText,
          title: "Documentazione e Fatturazione B2B",
          desc: "Procedure standardizzate, fatturazione elettronica e reportistica dettagliata compatibile con i sistemi di expense management aziendali."
        },
        {
          icon: Clock,
          title: "Gestione del Tempo e Monitoraggio",
          desc: "Monitoraggio voli in tempo reale, arrivo anticipato e margini operativi per garantire puntualità in qualsiasi condizione di traffico."
        }
      ],

      // Flexibility
      flexTitle: "Flessibilità Operativa Su Misura",
      flexSubtitle: "Adattamento istantaneo alle esigenze in corso di servizio",
      flexP1: "Comprendiamo che le agende dei dirigenti possono variare rapidamente. Il nostro servizio è strutturato per gestire modifiche in tempo reale senza mai compromettere l'efficienza.",
      flexItems: [
        {
          title: "Variazioni di Percorso in Tempo Reale",
          desc: "Eventuali cambi di destinazione o itinerario vengono gestiti istantaneamente, previa comunicazione diretta con il conducente."
        },
        {
          title: "Disposizione e Prolungamenti Orari",
          desc: "Fermate aggiuntive, anticipi o prolungamenti della disposizione oraria sono coordinati con la medesima precisione del servizio pianificato."
        },
        {
          title: "Rendicontazione Trasparente",
          desc: "Al termine del servizio viene fornito un riepilogo trasparente di tempi e chilometri effettivi. Nessun addebito senza comunicazione preventiva."
        }
      ],

      // Closing
      closingTitle: "Continuità, Affidabilità e Partnership B2B",
      closingP1: "NEXITUS è un servizio pensato per relazioni continuative di alto livello. Lavoriamo con aziende ed executive che richiedono un partner stabile, in grado di garantire lo stesso livello d'eccellenza a ogni utilizzo.",
      closingP2: "La coerenza operativa e la perfezione costante sono i nostri criteri guida.",
      closingCta: "Consulta il Prontuario Tariffe",
      closingCtaLink: "/milano-prontuario-tariffe"
    },
    en: {
      heroTagline: "THE CORPORATE STANDARD",
      heroTitle: "NEXITUS",
      heroSubtitle: "Excellence in Motion.",
      heroByline: "Executive Mobility",

      introTitle: "A New Standard of Elite Mobility",
      introP1: "The story of NEXITUS stems from years of dedicated service alongside an elite clientele. We turned this expertise into an operational model where perfection is the norm and proactive responsiveness anticipates every need.",
      introP2: "From private airport transfers to Malpensa, Linate, and Orio al Serio to complete mobility management for roadshows and corporate events: every journey is an experience of silence, comfort, and absolute control.",

      philosophyTitle: "The Art of Operational Excellence",
      philosophySubtitle: "True luxury requires none of your attention",
      philosophyP1: "Our philosophy is built on discretion and precision. Perfect service is one where everything happens seamlessly. Absolute privacy, millimetric punctuality, and utter respect for your time.",
      philosophyItems: [
        {
          title: "Discretion & Privacy",
          desc: "The chauffeur is a highly qualified, imperceptible presence. Intervening only when required, your personal space and privacy remain untouched."
        },
        {
          title: "Executive Sanctuary",
          desc: "The interior of our Mercedes-Benz fleet serves as your mobile office or private lounge. Silence, Wi-Fi connectivity, and refined comfort."
        },
        {
          title: "Operational Certainty",
          desc: "No unexpected variables. Pre-planned optimized routes and real-time flight tracking ensure total peace of mind."
        }
      ],

      standardsTitle: "Corporate Operational Standards",
      standardsSubtitle: "Rigorous criteria applied to every single journey",
      standardsItems: [
        {
          icon: Users,
          title: "Elite Professional Conduct",
          desc: "Impeccable formal attire, discreet behavior, and deep familiarity with top-tier corporate and institutional environments."
        },
        {
          icon: Shield,
          title: "Certified Training & Confidentiality",
          desc: "Every chauffeur undergoes training in defensive driving, time management, and strict confidentiality protocols."
        },
        {
          icon: FileText,
          title: "B2B Invoicing & Reporting",
          desc: "Standardised procedures, electronic invoicing, and reporting compatible with corporate expense management systems."
        },
        {
          icon: Clock,
          title: "Precision Time Management",
          desc: "Real-time flight monitoring, early arrival, and operational buffers ensuring punctuality regardless of traffic conditions."
        }
      ],

      flexTitle: "Tailored Operational Flexibility",
      flexSubtitle: "Instant adaptation to dynamic schedule changes",
      flexP1: "We understand that executive schedules shift rapidly. Our service is structured to seamlessly manage changes without ever compromising efficiency.",
      flexItems: [
        {
          title: "Real-time Route Variations",
          desc: "Destination or route changes are handled instantly following direct communication with your chauffeur."
        },
        {
          title: "On-demand Disposal Extensions",
          desc: "Additional stops, earlier departures, or hourly extensions are managed with the exact same precision as pre-planned trips."
        },
        {
          title: "Transparent Reporting",
          desc: "Detailed summary of actual times and mileage provided upon completion. Transparent pricing with no hidden charges."
        }
      ],

      closingTitle: "Continuity, Reliability & B2B Partnership",
      closingP1: "NEXITUS is designed for long-term corporate relationships. We partner with firms and executives who demand an unwavering standard of excellence.",
      closingP2: "Operational consistency and perfection are our benchmarks.",
      closingCta: "View Corporate Tariff Schedule",
      closingCtaLink: "/milano-prontuario-tariffe"
    },
    pt: {
      heroTagline: "PADRÃO EXECUTIVO",
      heroTitle: "NEXITUS",
      heroSubtitle: "Excellence in Motion.",
      heroByline: "Executive Mobility",

      introTitle: "Um Novo Padrão de Mobilidade d'Élite",
      introP1: "A trajetória da NEXITUS nasce de anos de dedicação ao lado de uma clientela d'élite. Transformamos essa experiência em um modelo operacional em que a perfeição é a norma e a reatividade antecipa cada necessidade.",
      introP2: "Do transfer aeroportuário privado para Malpensa, Linate e Orio al Serio à gestão logística de roadshows e eventos corporativos: cada viagem é uma experiência de silêncio, conforto e controle absoluto.",

      philosophyTitle: "A Arte da Excelência Operacional",
      philosophySubtitle: "O verdadeiro luxo não exige a sua atenção",
      philosophyP1: "Nossa filosofia fundamenta-se na discrição e na precisão. O serviço perfeito é aquele em que tudo acontece exatamente como deve acontecer. Privacidade absoluta, pontualidade milimétrica e respeito ao seu tempo.",
      philosophyItems: [
        {
          title: "Discrição & Privacidade",
          desc: "O motorista é uma presença altamente qualificada e imperceptível. Intervém apenas quando solicitado. Seu espaço e privacidade permanecem intocados."
        },
        {
          title: "Santuário Executivo",
          desc: "O interior de nossa frota Mercedes-Benz funciona como seu escritório móvel ou sala VIP privativa. Silêncio, conexão Wi-Fi e conforto executivo."
        },
        {
          title: "Certeza Operacional",
          desc: "Nenhuma variável imprevisível. Rotas otimizadas previamente e monitoramento de voos em tempo real para total tranquilidade."
        }
      ],

      standardsTitle: "Padrões Operacionais Corporativos",
      standardsSubtitle: "Requisitos rigorosos aplicados a cada atendimento",
      standardsItems: [
        {
          icon: Users,
          title: "Conduta Profissional d'Élite",
          desc: "Apresentação formal impecável, postura discreta e total familiaridade com ambientes corporativos e institucionais internacionais."
        },
        {
          icon: Shield,
          title: "Treinamento & Confidencialidade Certificada",
          desc: "Todos os motoristas passam por treinamento avançado de direção segura, gestão de tempo e rígidos protocolos de sigilo."
        },
        {
          icon: FileText,
          title: "Documentação & Faturamento B2B",
          desc: "Procedimentos padronizados, faturamento corporativo eletrônico e relatórios compatíveis com gestão de despesas empresariais."
        },
        {
          icon: Clock,
          title: "Gestão de Tempo & Monitoramento",
          desc: "Acompanhamento de voos em tempo real, chegada antecipada e margens operacionais para pontualidade em qualquer tráfego."
        }
      ],

      flexTitle: "Flexibilidade Operacional Sob Medida",
      flexSubtitle: "Adaptação imediata às mudanças de agenda",
      flexP1: "Compreendemos que agendas executivas mudam rapidamente. Nosso serviço é estruturado para gerenciar alterações sem comprometer a eficiência.",
      flexItems: [
        {
          title: "Variações de Rota em Tempo Real",
          desc: "Mudanças de destino ou itinerário são gerenciadas instantaneamente mediante comunicação ao condutor."
        },
        {
          title: "Disposição Horária & Extensões",
          desc: "Paradas adicionais, antecipações ou prolongamentos de horário são coordenados com a mesma precisão do plano original."
        },
        {
          title: "Prestação de Contas Transparente",
          desc: "Ao final do serviço, é fornecido um relatório claro de tempos e quilômetros rodados. Sem cobranças sem comunicação prévia."
        }
      ],

      closingTitle: "Continuidade, Confiabilidade e Parceria B2B",
      closingP1: "A NEXITUS é projetada para parcerias continuativas de alto nível. Atendemos empresas e executivos que exigem um fornecedor estável e impecável.",
      closingP2: "Consistência operacional e perfeição constante são nossas diretrizes.",
      closingCta: "Consultar Prontuário de Tarifas",
      closingCtaLink: "/milano-prontuario-tariffe"
    },
    fr: {
      heroTagline: "LE STANDARD CORPORATE",
      heroTitle: "NEXITUS",
      heroSubtitle: "Excellence in Motion.",
      heroByline: "Executive Mobility",

      introTitle: "Un Nouveau Standard de Mobilité d'Élite",
      introP1: "L'histoire de NEXITUS est née d'années de dévouement auprès d'une clientèle d'élite. Nous avons transformé cette expérience en un modèle opératif où la perfection est la norme et la réactivité anticipe chaque exigence.",
      introP2: "Du transfert aéroportuaire privé pour Malpensa, Linate et Orio al Serio à la gestion complète de la mobilité pour roadshows et événements d'entreprise: chaque trajet est une expérience de silence, confort et contrôle absolu.",

      philosophyTitle: "L'Art de l'Excellence Opérationnelle",
      philosophySubtitle: "Le vrai luxe ne requiert pas votre attention",
      philosophyP1: "Notre philosophie repose sur la discrétion et la précision. Le service parfait est celui où tout se déroule exactement comme il se doit. Confidentialité absolue, ponctualité millimétrée et respect de votre temps.",
      philosophyItems: [
        {
          title: "Discrétion & Confidentialité",
          desc: "Le chauffeur est une présence hautement qualifiée et imperceptible. Intervenant uniquement sur demande, votre espace privé reste préservé."
        },
        {
          title: "Executive Sanctuary",
          desc: "L'habitacle de notre flotte Mercedes-Benz est votre bureau mobile ou votre salon privé. Silence, connexion Wi-Fi et confort supérieur."
        },
        {
          title: "Certitude Opérationnelle",
          desc: "Aucune variable imprévue. Itinéraires optimisés à l'avance et suivi des vols en temps réel pour une sérénité totale."
        }
      ],

      standardsTitle: "Standards Opérationnels Corporate",
      standardsSubtitle: "Exigences rigoureuses appliquées à chaque prestation",
      standardsItems: [
        {
          icon: Users,
          title: "Conduite Professionnelle d'Élite",
          desc: "Présentation formelle irréprochable, comportement discret et parfaite connaissance des contextes d'affaires et institutionnels."
        },
        {
          icon: Shield,
          title: "Formation & Confidentialité Certifiée",
          desc: "Chaque chauffeur bénéficie d'une formation continue en conduite sécurisée, gestion du temps et protocoles de confidentialité."
        },
        {
          icon: FileText,
          title: "Facturation & Reporting B2B",
          desc: "Procédures standardisées, facturation électronique et reporting détaillé compatible avec la gestion des frais d'entreprise."
        },
        {
          icon: Clock,
          title: "Gestion du Temps & Suivi",
          desc: "Suivi des vols en temps réel, arrivée anticipée et marges opérationnelles pour garantir la ponctualité en toute circonstance."
        }
      ],

      flexTitle: "Flexibilité Opérationnelle Sur Mesure",
      flexSubtitle: "Adaptation instantanée aux évolutions de votre agenda",
      flexP1: "Nous comprenons que les plannings exécutifs évoluent rapidement. Notre service est structuré pour gérer les modifications sans compromettre l'efficacité.",
      flexItems: [
        {
          title: "Variations d'Itinéraire en Temps Réel",
          desc: "Tout changement de destination est géré instantanément sur simple communication au chauffeur."
        },
        {
          title: "Dispositions & Prolongations",
          desc: "Arrêts supplémentaires, départs avancés ou extensions horaires sont coordonnés avec la même précision que le service initial."
        },
        {
          title: "Compte-Rendu Transparent",
          desc: "À la fin de la prestation, un récapitulatif clair des temps et kilomètres est fourni. Aucune facturation sans accord préalable."
        }
      ],

      closingTitle: "Continuité, Fiabilité & Partenariat B2B",
      closingP1: "NEXITUS est conçu pour des relations d'affaires durables. Nous accompagnons les entreprises et dirigeants exigeant un partenaire d'excellence constante.",
      closingP2: "La cohérence opérationnelle et la perfection continue sont nos critères fondamentaux.",
      closingCta: "Consulter le Barème Tarifaire",
      closingCtaLink: "/milano-prontuario-tariffe"
    }
  };

  const c = content[language] || content.it;

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title={`NEXITUS Executive Mobility | ${c.heroTagline}`}
        description={c.introP1}
        keywords="nexitus executive mobility, ncc corporate milano, noleggio con conducente aziende, transfer aziendale milano, servizio autista milano, mobilita aziendale lombardia"
        canonicalUrl="https://nexitus.it/milano-premium-mobility"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        {/* Ambient lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[hsl(43_30%_40%)] rounded-full blur-[180px] opacity-15" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[hsl(0_0%_40%)] rounded-full blur-[200px] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <MotionReveal delay={0.1}>
              <p className="text-xs md:text-sm tracking-[0.35em] text-[hsl(43_40%_55%)] mb-4 font-semibold uppercase">
                {c.heroTagline}
              </p>
            </MotionReveal>

            {/* Central Logo with 3D Spin Animation */}
            <div className="relative mx-auto perspective-2000 my-6">
              <div className="milano-logo-3d">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-80 h-80 md:w-[32rem] md:h-[32rem] lg:w-[42rem] lg:h-[42rem] bg-[hsl(43_30%_40%)] rounded-full blur-[120px] opacity-20" />
                </div>
                <img
                  src={milanoLogo}
                  alt="NEXITUS Executive Mobility"
                  className="relative z-10 w-80 md:w-[28rem] lg:w-[34rem] xl:w-[40rem] mx-auto h-auto"
                  style={{
                    filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
            </div>

            <MotionReveal delay={0.25}>
              <h1 className="text-2xl md:text-4xl font-heading font-light text-white tracking-[0.2em] mb-2 uppercase">
                {c.heroTitle}
              </h1>
              <p className="text-base md:text-xl text-[hsl(43_30%_55%)] italic font-light tracking-wide">
                {c.heroSubtitle}
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-16 md:py-24 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <MotionReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-6 tracking-wide">
                  {c.introTitle}
                </h2>
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[hsl(43_40%_50%)] to-transparent mx-auto mb-8" />
              </div>
            </MotionReveal>

            <div className="space-y-6 text-base md:text-lg text-[hsl(0_0%_75%)] font-light leading-relaxed text-center md:text-left">
              <MotionReveal delay={0.1}>
                <p className="bg-white/[0.02] border border-white/[0.06] p-6 md:p-8 rounded-2xl backdrop-blur-md">
                  {c.introP1}
                </p>
              </MotionReveal>
              <MotionReveal delay={0.2}>
                <p className="text-[hsl(0_0%_65%)] px-2">
                  {c.introP2}
                </p>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Prestige Details Badge Header */}
      <section className="relative py-8 bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <MotionReveal>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[hsl(43_30%_50%)/40]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(43_40%_50%)] shadow-[0_0_8px_hsl(43_40%_50%)]" />
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[hsl(43_30%_50%)/40]" />
              </div>
              <p className="text-xs tracking-[0.35em] text-[hsl(43_40%_55%)] uppercase font-medium">
                {language === 'it' ? 'Dettagli di Prestigio' :
                  language === 'pt' ? 'Detalhes de Prestígio' :
                    language === 'en' ? 'Prestige Details' : 'Détails de Prestige'}
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Operational Philosophy */}
      <section className="relative py-16 md:py-24 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-4 tracking-wide">
                {c.philosophyTitle}
              </h2>
              <p className="text-base md:text-lg text-[hsl(43_30%_55%)] italic font-light">
                {c.philosophySubtitle}
              </p>
              <p className="text-base text-[hsl(0_0%_70%)] max-w-3xl mx-auto mt-6 leading-relaxed font-light">
                {c.philosophyP1}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.philosophyItems.map((item, index) => (
                <MotionReveal key={index} delay={index * 0.12} className="h-full">
                  <div className="group p-8 h-full rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:border-[hsl(43_40%_50%)]/30 hover:bg-white/[0.04] transition-all duration-500 shadow-xl flex flex-col justify-start">
                    <div className="w-1 h-8 mb-6 bg-[hsl(43_40%_50%)] rounded-full group-hover:h-12 transition-all duration-500" />
                    <h3 className="text-lg font-semibold text-white mb-3 tracking-wide group-hover:text-[hsl(43_40%_55%)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[hsl(0_0%_65%)] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Standards */}
      <section className="relative py-16 md:py-24 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-4 tracking-wide">
                {c.standardsTitle}
              </h2>
              <p className="text-base md:text-lg text-[hsl(43_30%_55%)] italic font-light">
                {c.standardsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.standardsItems.map((item, index) => (
                <MotionReveal key={index} delay={index * 0.1} className="h-full">
                  <div className="flex gap-6 p-8 h-full rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[hsl(43_40%_50%)]/30 transition-all duration-500 group shadow-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(43_30%_40%)]/10 border border-[hsl(43_40%_50%)]/20 flex items-center justify-center group-hover:border-[hsl(43_40%_50%)]/40 transition-colors">
                        <item.icon className="w-5 h-5 text-[hsl(43_40%_55%)]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 tracking-wide group-hover:text-[hsl(43_40%_55%)] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[hsl(0_0%_65%)] leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Flexibility */}
      <section className="relative py-16 md:py-24 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-4 tracking-wide">
                {c.flexTitle}
              </h2>
              <p className="text-base md:text-lg text-[hsl(43_30%_55%)] italic font-light mb-6">
                {c.flexSubtitle}
              </p>
              <p className="text-base text-[hsl(0_0%_70%)] leading-relaxed max-w-3xl mx-auto font-light">
                {c.flexP1}
              </p>
            </div>

            <div className="space-y-6">
              {c.flexItems.map((item, index) => (
                <MotionReveal key={index} delay={index * 0.1}>
                  <div className="flex gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[hsl(43_40%_50%)]/30 transition-all duration-300 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[hsl(43_40%_50%)] text-black">
                        <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[hsl(43_40%_55%)] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[hsl(0_0%_65%)] leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <MotionReveal>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-6 tracking-wide">
                {c.closingTitle}
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <p className="text-base md:text-lg text-[hsl(0_0%_75%)] font-light leading-relaxed mb-4">
                {c.closingP1}
              </p>
              <p className="text-base md:text-lg text-[hsl(43_30%_55%)] italic font-light mb-10">
                {c.closingP2}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <Link to={c.closingCtaLink}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(43_40%_45%)] to-[hsl(43_30%_35%)] text-[hsl(0_0%_5%)] hover:from-[hsl(43_45%_50%)] hover:to-[hsl(43_35%_40%)] transition-all duration-300 px-10 py-6 text-sm md:text-base font-semibold shadow-xl shadow-[hsl(43_30%_30%)/20]"
                >
                  {c.closingCta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </MotionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilanoPremiumMobility;
