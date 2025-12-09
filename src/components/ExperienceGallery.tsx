import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";

// INSTRUÇÕES: Adicione as 5 imagens na pasta src/assets e atualize os imports abaixo
// Nomes sugeridos para as imagens:
// - mountain-view-1.jpg (vista de montanha nevada do interior do veículo)
// - mountain-view-2.jpg (estrada com edifício "da Aurelio") 
// - mountain-view-3.jpg (paisagem de montanha nevada com pegadas)
// - fuso-service.jpg (van preta em frente ao serviço FUSO)
// - vehicle-interior-luxury.jpg (interior luxuoso com teto solar)

// PASSO 1: Adicione as 5 imagens que você enviou na pasta src/assets com estes nomes:
// - experience-1.jpg (vista de montanha nevada do interior do veículo - para-brisa com gotas)
// - experience-2.jpg (estrada com edifício "da Aurelio" / "Rifugio Pienza")
// - experience-3.jpg (paisagem de montanha nevada com pegadas)
// - experience-4.jpg (van preta em frente ao serviço FUSO)
// - experience-5.jpg (interior luxuoso do veículo com teto solar panorâmico)

// Imports das imagens adicionadas
import experience1 from "@/assets/experience-1.jpg.jpeg";
import experience2 from "@/assets/experience-2.jpg.jpeg";
import experience3 from "@/assets/experience-3.jpg.jpeg";
import experience4 from "@/assets/experience-4.jpg.jpeg";
import experience5 from "@/assets/experience-5.jpg.jpeg";
// Adicione a imagem experience-6.jpg.jpeg na pasta assets
// Por enquanto usando placeholder temporário
import experience6Placeholder from "@/assets/mercedes-interior-3.jpeg";
const experience6 = experience6Placeholder; // Substitua por: import experience6 from "@/assets/experience-6.jpg.jpeg"; quando adicionar a imagem

const ExperienceGallery = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
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
    }, 4000);
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

  // Array com as imagens do carrossel
  // Após adicionar suas imagens na pasta assets, os imports acima já estarão corretos
  const galleryImages = [
    {
      src: experience1,
      alt: "Vista de montanha nevada do interior do veículo - Experiência de viagem",
    },
    {
      src: experience2,
      alt: "Estrada de montanha com edifício da Aurelio - Paisagem invernal",
    },
    {
      src: experience3,
      alt: "Paisagem alpina com neve e pegadas",
    },
    {
      src: experience4,
      alt: "Serviço de manutenção de veículos FUSO",
    },
    {
      src: experience5,
      alt: "Interior luxuoso do veículo com teto solar panorâmico",
    },
    {
      src: experience6,
      alt: "Experiência de viagem premium",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nossas Experiências
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os destinos incríveis e a qualidade dos nossos serviços
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_90%] md:flex-[0_0_75%] lg:flex-[0_0_65%] min-w-0"
                  onMouseEnter={handleUserInteraction}
                  onTouchStart={handleUserInteraction}
                >
                  <div className="overflow-hidden rounded-xl shadow-luxury h-full group">
                    <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-500 will-change-transform group-hover:scale-110"
                        style={{
                          opacity: selectedIndex === index ? 1 : 0.6,
                          transform: selectedIndex === index ? 'scale(1)' : 'scale(0.95)',
                        }}
                        loading="lazy"
                      />
                      {/* Overlay gradient para melhorar legibilidade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/90 hover:bg-background border-2 border-luxury-gold/50 hover:border-luxury-gold shadow-luxury flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/90 hover:bg-background border-2 border-luxury-gold/50 hover:border-luxury-gold shadow-luxury flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  emblaApi?.scrollTo(index);
                  handleUserInteraction();
                }}
                className={`transition-all duration-300 rounded-full ${
                  selectedIndex === index
                    ? "w-10 h-2.5 bg-luxury-gold shadow-luxury"
                    : "w-2.5 h-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGallery;

