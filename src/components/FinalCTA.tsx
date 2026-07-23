import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import MotionReveal from "@/components/MotionReveal";
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const { language } = useLanguage();
  const t = translations[language].finalCta;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(translations[language].common.whatsappMessage);
    window.open(`https://wa.me/393891430907?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-black border-t border-white/[0.05]">
      {/* Golden Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[hsl(43_30%_35%)]/10 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <MotionReveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-4 tracking-wide leading-tight">
              {t.title}
              <br />
              <span className="text-[hsl(43_40%_55%)] font-normal">{t.titleHighlight}</span>
            </h2>
          </MotionReveal>

          {/* Decorative Divider */}
          <MotionReveal delay={0.15}>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[hsl(43_40%_50%)] to-transparent mx-auto my-8" />
          </MotionReveal>

          {/* Subtitles */}
          <MotionReveal delay={0.25}>
            <p className="text-base md:text-xl text-[hsl(0_0%_75%)] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
              <br />
              <span className="text-sm md:text-base text-[hsl(0_0%_55%)] mt-2 block italic">
                {t.subtitleExtra}
              </span>
            </p>
          </MotionReveal>

          {/* CTA Buttons */}
          <MotionReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-[hsl(43_40%_45%)] to-[hsl(43_30%_35%)] text-[hsl(0_0%_5%)] hover:from-[hsl(43_45%_50%)] hover:to-[hsl(43_35%_40%)] transition-all duration-300 px-10 py-6 text-sm md:text-base font-semibold shadow-xl shadow-[hsl(43_30%_30%)/20]"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                {t.cta}
              </Button>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
