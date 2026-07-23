import { Car, Users, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import MotionReveal from "@/components/MotionReveal";

const WHATSAPP_NUMBER = "393891430907";

const pillarsIcons = [Car, Users, ShieldCheck];

const MilanoCorporateSection = () => {
    const { language } = useLanguage();
    const t = translations[language]?.aboutNexitus ?? translations.it.aboutNexitus;

    const pillars = [
        { title: t.pillar1Title, desc: t.pillar1Desc, Icon: pillarsIcons[0] },
        { title: t.pillar2Title, desc: t.pillar2Desc, Icon: pillarsIcons[1] },
        { title: t.pillar3Title, desc: t.pillar3Desc, Icon: pillarsIcons[2] },
    ];

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        translations[language]?.common?.whatsappMessage ?? ""
    )}`;

    return (
        <section
            id="about-nexitus"
            className="relative py-24 md:py-36 overflow-hidden"
            style={{ maskImage: "linear-gradient(to bottom, transparent, black 8%)" }}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Golden ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[hsl(43_25%_20%)] rounded-full blur-[220px] opacity-[0.08]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[hsl(43_20%_15%)] rounded-full blur-[180px] opacity-[0.06]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <MotionReveal>
                            <p className="text-xs md:text-sm tracking-[0.35em] text-[hsl(43_40%_55%)] mb-5 font-medium uppercase">
                                {t.tagline}
                            </p>
                        </MotionReveal>

                        <MotionReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light text-white mb-3 tracking-[0.15em]">
                                {t.title}
                            </h2>
                            <p className="text-lg md:text-xl text-[hsl(43_30%_55%)] italic tracking-wide">
                                {t.subtitle}
                            </p>
                        </MotionReveal>

                        <MotionReveal delay={0.2}>
                            {/* Decorative line */}
                            <div className="mx-auto mt-8 mb-10 w-24 h-px bg-gradient-to-r from-transparent via-[hsl(43_40%_50%)] to-transparent" />
                            <p className="text-[hsl(0_0%_68%)] leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
                                {t.description}
                            </p>
                        </MotionReveal>
                    </div>

                    {/* Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
                        {pillars.map((pillar, index) => (
                            <MotionReveal key={index} delay={0.15 + index * 0.12}>
                                <div className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-500 hover:border-[hsl(43_40%_50%)]/20 hover:bg-white/[0.04]">
                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[hsl(43_30%_40%)]/0 to-[hsl(43_30%_40%)]/0 group-hover:from-[hsl(43_30%_40%)]/[0.04] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-[hsl(43_30%_40%)]/10 border border-[hsl(43_40%_50%)]/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[hsl(43_30%_40%)]/15 group-hover:border-[hsl(43_40%_50%)]/25">
                                            <pillar.Icon className="w-5 h-5 text-[hsl(43_40%_55%)]" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="relative text-white text-lg font-semibold mb-3 tracking-wide">
                                        {pillar.title}
                                    </h3>
                                    <p className="relative text-[hsl(0_0%_60%)] text-sm leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </MotionReveal>
                        ))}
                    </div>

                    {/* CTAs */}
                    <MotionReveal delay={0.55}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/milano-premium-mobility">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-[hsl(43_40%_45%)] to-[hsl(43_30%_35%)] text-[hsl(0_0%_5%)] hover:from-[hsl(43_45%_50%)] hover:to-[hsl(43_35%_40%)] transition-all duration-300 px-8 py-6 text-sm font-semibold shadow-lg shadow-[hsl(43_30%_30%)/15]"
                                >
                                    {t.ctaServices}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[hsl(43_30%_40%)]/30 text-[hsl(43_40%_55%)] hover:bg-[hsl(43_30%_40%)]/10 hover:border-[hsl(43_40%_50%)]/40 transition-all duration-300 px-8 py-6 text-sm font-semibold bg-transparent"
                                >
                                    <MessageCircle className="mr-2 w-4 h-4" />
                                    {t.ctaContact}
                                </Button>
                            </a>
                        </div>
                    </MotionReveal>
                </div>
            </div>
        </section>
    );
};

export default MilanoCorporateSection;
