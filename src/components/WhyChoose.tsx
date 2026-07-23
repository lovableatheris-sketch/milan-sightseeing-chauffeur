import { Award, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import MotionReveal from "@/components/MotionReveal";

const WhyChoose = () => {
  const { language } = useLanguage();
  const t = translations[language].whyChoose;

  const features = [
    { icon: Award, text: t.feature1 },
    { icon: Zap, text: t.feature2 },
    { icon: ShieldCheck, text: t.feature3 },
  ];

  const cardItems = [
    { title: t.cardItem1Title, desc: t.cardItem1Desc },
    { title: t.cardItem2Title, desc: t.cardItem2Desc },
    { title: t.cardItem3Title, desc: t.cardItem3Desc },
    { title: t.cardItem4Title, desc: t.cardItem4Desc },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[hsl(43_30%_35%)]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle / Tagline */}
          <MotionReveal>
            <p className="text-xs md:text-sm tracking-[0.3em] text-[hsl(43_40%_55%)] mb-4 font-semibold uppercase">
              {t.subtitle}
            </p>
          </MotionReveal>

          {/* Main Title */}
          <MotionReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 tracking-wide">
              {t.title}
            </h2>
          </MotionReveal>

          {/* Decorative line */}
          <MotionReveal delay={0.15}>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[hsl(43_40%_50%)] to-transparent mx-auto mb-8" />
          </MotionReveal>

          {/* Description */}
          <MotionReveal delay={0.2}>
            <p className="text-base md:text-lg text-[hsl(0_0%_70%)] mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              {t.description}
            </p>
          </MotionReveal>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <MotionReveal key={index} delay={0.25 + index * 0.1}>
                <div className="group h-full p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-[hsl(43_40%_50%)]/30 hover:bg-white/[0.04]">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(43_30%_40%)]/10 border border-[hsl(43_40%_50%)]/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-[hsl(43_30%_40%)]/20">
                    <feature.icon className="w-7 h-7 text-[hsl(43_40%_55%)]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-white tracking-[0.2em] uppercase leading-snug">
                    {feature.text}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* NEXITUS Operational Guarantee Card */}
          <MotionReveal delay={0.55}>
            <div className="relative rounded-2xl p-8 md:p-12 text-left border border-[hsl(43_30%_40%)]/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(43_30%_40%)]/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl md:text-2xl font-heading font-light text-white mb-8 text-center md:text-left tracking-wide flex items-center justify-center md:justify-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[hsl(43_40%_55%)]" />
                <span>{t.cardTitle}</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8 text-[hsl(0_0%_75%)]">
                {cardItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-white text-base tracking-wide flex items-center gap-2">
                      <span className="text-[hsl(43_40%_55%)]">{item.title}</span>
                    </h4>
                    <p className="text-sm text-[hsl(0_0%_65%)] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
