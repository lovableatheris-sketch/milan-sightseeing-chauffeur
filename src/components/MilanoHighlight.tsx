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
        <section className="py-24 bg-[hsl(0_0%_2%)] relative overflow-hidden border-t border-b border-[hsl(43_30%_50%)/10]">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(43_30%_40%)] rounded-full blur-[180px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
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
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

                        {/* Right Content - Features Grid */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, title: t.standard1Title, delay: 0.1 },
                                { icon: Globe, title: t.standard3Title, delay: 0.2 },
                                { icon: Clock, title: t.standard2Title, delay: 0.3 },
                                { icon: ArrowRight, title: t.flexibilityTitle, delay: 0.4 }
                            ].map((item, idx) => (
                                <MotionReveal key={idx} delay={item.delay}>
                                    <div className="p-6 bg-white/[0.03] border border-white/[0.05] rounded-sm hover:border-[hsl(43_30%_50%)/30] hover:bg-white/[0.05] transition-all duration-500 group">
                                        <item.icon className="w-6 h-6 text-[hsl(43_30%_50%)] mb-4 stroke-1 group-hover:scale-110 transition-transform duration-500" />
                                        <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider">{item.title}</h3>
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
