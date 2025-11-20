import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Card } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import mercedesInt1 from "@/assets/mercedes-interior-1.jpeg";
import mercedesExt1 from "@/assets/mercedes-exterior-1.jpeg";
import mercedesInt2 from "@/assets/mercedes-interior-2.jpeg";
import mercedesInt3 from "@/assets/mercedes-interior-3.jpeg";
import mercedesInt4 from "@/assets/mercedes-interior-4.jpeg";
import mercedesExt2 from "@/assets/mercedes-exterior-2.jpeg";
import mercedesExt3 from "@/assets/mercedes-exterior-3.jpeg";

const LocationCards = () => {
  const { language } = useLanguage();
  const t = translations[language].locations;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const carouselImages = [
    mercedesInt1,
    mercedesExt1,
    mercedesInt2,
    mercedesInt3,
    mercedesInt4,
    mercedesExt2,
    mercedesExt3,
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Card className="overflow-hidden shadow-luxury">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0"
                  >
                    <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                      <img
                        src={image}
                        alt={`Mercedes Benz V250 ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-background border border-border shadow-luxury flex items-center justify-center transition-smooth hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-background border border-border shadow-luxury flex items-center justify-center transition-smooth hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationCards;
