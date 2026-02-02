import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import milanoLogo from "@/assets/milano-logo.png";
import MotionReveal from "@/components/MotionReveal";

const MilanoCorporateSection = () => {
    const { language } = useLanguage();

    const content = {
        it: {
            tagline: "DIVISIONE CORPORATE",
            title: "MILANO",
            subtitle: "Excellence in Motion",
            description: "La nostra divisione dedicata alla mobilità aziendale. Operiamo con precisione assoluta a Milano e in tutto il Nord Italia, offrendo un servizio dove l'eccellenza è l'unica opzione accettata.",
            features: [
                "Transfer aeroportuali premium",
                "Servizi a disposizione oraria",
                "Gestione roadshow ed eventi"
            ],
            cta: "Scopri MILANO"
        },
        en: {
            tagline: "CORPORATE DIVISION",
            title: "MILANO",
            subtitle: "Excellence in Motion",
            description: "Our division dedicated to corporate mobility. We operate with absolute precision in Milan and throughout Northern Italy, offering a service where excellence is the only accepted option.",
            features: [
                "Premium airport transfers",
                "Hourly disposal services",
                "Roadshow and event management"
            ],
            cta: "Discover MILANO"
        },
        pt: {
            tagline: "DIVISÃO CORPORATE",
            title: "MILANO",
            subtitle: "Excellence in Motion",
            description: "Nossa divisão dedicada à mobilidade empresarial. Operamos com precisão absoluta em Milão e em todo o Norte da Itália, oferecendo um serviço onde a excelência é a única opção aceita.",
            features: [
                "Transfers aeroportuários premium",
                "Serviços à disposição por hora",
                "Gestão de roadshows e eventos"
            ],
            cta: "Descubra MILANO"
        },
        fr: {
            tagline: "DIVISION CORPORATE",
            title: "MILANO",
            subtitle: "Excellence in Motion",
            description: "Notre division dédiée à la mobilité d'entreprise. Nous opérons avec une précision absolue à Milan et dans tout le Nord de l'Italie, offrant un service où l'excellence est la seule option acceptée.",
            features: [
                "Transferts aéroport premium",
                "Services à disposition horaire",
                "Gestion de roadshows et événements"
            ],
            cta: "Découvrir MILANO"
        }
    };

    const c = content[language] || content.it;

    return (
        <section className="relative py-24 md:py-32 overflow-hidden"
            style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%)' }}>
            {/* Dark elegant background - fully black to match adjacent sections */}
            <div className="absolute inset-0 bg-black" />

            {/* Subtle golden ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[hsl(43_25%_25%)] rounded-full blur-[200px] opacity-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Logo Side */}
                        <MotionReveal className="order-2 lg:order-1">
                            <div className="relative flex justify-center lg:justify-start">
                                {/* Glow effect behind logo */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-64 h-64 md:w-80 md:h-80 bg-[hsl(43_30%_40%)] rounded-full blur-[100px] opacity-15" />
                                </div>
                                <img
                                    src={milanoLogo}
                                    alt="MILANO Premium Mobility by TMT"
                                    className="relative z-10 w-64 md:w-80 lg:w-96 h-auto"
                                    style={{
                                        filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.4))'
                                    }}
                                />
                            </div>
                        </MotionReveal>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 text-center lg:text-left">
                            <MotionReveal>
                                <p className="text-xs md:text-sm tracking-[0.3em] text-[hsl(43_40%_50%)] mb-4 font-medium">
                                    {c.tagline}
                                </p>
                            </MotionReveal>

                            <MotionReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-2 tracking-wider">
                                    {c.title}
                                </h2>
                                <p className="text-lg md:text-xl text-[hsl(0_0%_60%)] mb-6 italic">
                                    {c.subtitle}
                                </p>
                            </MotionReveal>

                            <MotionReveal delay={0.2}>
                                <p className="text-[hsl(0_0%_65%)] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                    {c.description}
                                </p>
                            </MotionReveal>

                            <MotionReveal delay={0.3}>
                                <ul className="space-y-3 mb-10">
                                    {c.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(43_40%_50%)]" />
                                            <span className="text-[hsl(0_0%_75%)] text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </MotionReveal>

                            <MotionReveal delay={0.4}>
                                <Link to="/milano-premium-mobility">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-[hsl(43_40%_45%)] to-[hsl(43_30%_35%)] text-[hsl(0_0%_5%)] hover:from-[hsl(43_45%_50%)] hover:to-[hsl(43_35%_40%)] transition-all duration-300 px-8 py-6 text-sm font-semibold shadow-lg shadow-[hsl(43_30%_30%)/20]"
                                    >
                                        {c.cta}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </MotionReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MilanoCorporateSection;
