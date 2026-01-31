import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Globe, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import MotionReveal from "./MotionReveal";

const MilanoHighlight = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language].milano;

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Top gradient for seamless blend with Hero */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

            {/* Ambient background glow - Moved slightly down and made more subtle at the top */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(43_30%_40%)] rounded-full blur-[200px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center gap-12">
                        {/* Content */}
                        <div className="text-center max-w-3xl">
                            <MotionReveal>
                                <span className="inline-block px-3 py-1 bg-[hsl(43_30%_50%)/10] text-[hsl(43_30%_60%)] text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-6">
                                    {t.heroTagline}
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                                    {t.heroTitle} <span className="text-[hsl(43_30%_50%)]">{t.heroSubtitle}</span>
                                </h2>
                                <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                                    {t.heroDescription}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                    <Button
                                        onClick={() => navigate("/milano-premium-mobility")}
                                        className="bg-[hsl(43_30%_50%)] hover:bg-[hsl(43_30%_40%)] text-black font-semibold h-14 px-8 rounded-sm group transition-all duration-500"
                                    >
                                        {t.ctaDiscover}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </MotionReveal>
                        </div>

                        {/* Features Grid */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: ShieldCheck, title: t.standard1Title, delay: 0.1 },
                                { icon: Globe, title: t.standard3Title, delay: 0.2 },
                                { icon: Clock, title: t.standard2Title, delay: 0.3 },
                                { icon: ArrowRight, title: t.flexibilityTitle, delay: 0.4 }
                            ].map((item, idx) => (
                                <MotionReveal key={idx} delay={item.delay}>
                                    <div className="p-8 bg-white/[0.03] border border-white/[0.05] rounded-sm hover:border-[hsl(43_30%_50%)/30] hover:bg-white/[0.05] transition-all duration-500 group flex flex-col items-center justify-center text-center h-full min-h-[160px]">
                                        <item.icon className="w-8 h-8 text-[hsl(43_30%_50%)] mb-5 stroke-1 group-hover:scale-110 transition-transform duration-500" />
                                        <h3 className="text-[11px] font-bold text-white/90 uppercase tracking-[0.2em] leading-relaxed">{item.title}</h3>
                                    </div>
                                </MotionReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MilanoHighlight;
