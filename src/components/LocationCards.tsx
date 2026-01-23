import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";
import mercedesInt1 from "@/assets/mercedes-interior-1.jpeg";
import mercedesExt1 from "@/assets/mercedes-exterior-1.jpeg";
import mercedesInt2 from "@/assets/mercedes-interior-2.jpeg";
import mercedesInt3 from "@/assets/mercedes-interior-3.jpeg";
import mercedesExt2 from "@/assets/mercedes-exterior-2.jpeg";
import mercedesExt3 from "@/assets/mercedes-exterior-3.jpeg";

const LocationCards = () => {
  const { language } = useLanguage();
  const t = translations[language].locations;
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const interactionTimeoutRef = useRef<NodeJS.Timeout>();

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      handleUserInteraction();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      handleUserInteraction();
    }
  }, [emblaApi]);

  const handleUserInteraction = () => {
    if (autoplayRef.current) {
      autoplayRef.current.stop();
    }
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    interactionTimeoutRef.current = setTimeout(() => {
      if (autoplayRef.current) {
        autoplayRef.current.play();
      }
    }, 3000);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  const carouselImages = [
    mercedesInt1,
    mercedesExt1,
    mercedesInt2,
    mercedesInt3,
    mercedesExt2,
    mercedesExt3,
  ];

  return (
    <section className="py-15 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0"
                  onMouseEnter={handleUserInteraction}
                  onTouchStart={handleUserInteraction}
                >
                  <div className="overflow-hidden rounded-xl shadow-elegant h-full">
                    <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden relative">
                      <img
                        src={image}
                        alt={`Mercedes Benz V250 ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 will-change-transform"
                        style={{
                          opacity: 1,
                          transform: selectedIndex === index ? 'scale(1)' : 'scale(0.92)',
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/95 hover:bg-background border border-border shadow-elegant flex items-center justify-center transition-smooth hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/95 hover:bg-background border border-border shadow-elegant flex items-center justify-center transition-smooth hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  emblaApi?.scrollTo(index);
                  handleUserInteraction();
                }}
                className={`transition-all duration-300 rounded-full ${
                  selectedIndex === index
                    ? "w-8 h-2 bg-foreground"
                    : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCards;
