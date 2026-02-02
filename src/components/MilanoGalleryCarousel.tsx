import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import MotionReveal from "@/components/MotionReveal";

const galleryImages = [
    {
        src: "/carousel/image2.jpg",
        alt: "Milano Chauffeur Team"
    },
    {
        src: "/carousel/image1.png",
        alt: "Milano Premium Mobility Team"
    },
    {
        src: "/carousel/image3.png",
        alt: "Milano Service Destinations"
    },
    {
        src: "/carousel/image4.jpg",
        alt: "Milano VIP Experience"
    },
    {
        src: "/carousel/image5.jpg",
        alt: "Milano Luxury Vehicle"
    },
    {
        src: "/carousel/image6.png",
        alt: "Park Hyatt Milano Service"
    },
    {
        src: "/carousel/image7.png",
        alt: "Milano Professional Chauffeur"
    }
];

const MilanoGalleryCarousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Unified dark background - pure black */}
            <div className="absolute inset-0 bg-black" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <MotionReveal>
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full"
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {galleryImages.map((image, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="pl-2 md:pl-4 basis-full md:basis-4/5 lg:basis-3/4"
                                    >
                                        <div className="relative group overflow-hidden rounded-lg">
                                            {/* Image container with aspect ratio */}
                                            <div className="relative aspect-[16/9] overflow-hidden">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                {/* Subtle overlay gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Metallic border effect */}
                                            <div className="absolute inset-0 rounded-lg border border-[hsl(0_0%_20%)] group-hover:border-[hsl(43_30%_40%)/50] transition-colors duration-500" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Navigation buttons with premium styling */}
                            <CarouselPrevious
                                className="left-4 md:left-8 bg-[hsl(0_0%_8%)]/90 border-[hsl(0_0%_25%)] hover:bg-[hsl(0_0%_12%)] hover:border-[hsl(43_30%_40%)] text-white transition-all duration-300 h-10 w-10 md:h-12 md:w-12"
                            />
                            <CarouselNext
                                className="right-4 md:right-8 bg-[hsl(0_0%_8%)]/90 border-[hsl(0_0%_25%)] hover:bg-[hsl(0_0%_12%)] hover:border-[hsl(43_30%_40%)] text-white transition-all duration-300 h-10 w-10 md:h-12 md:w-12"
                            />
                        </Carousel>
                    </MotionReveal>

                    {/* Progress dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {galleryImages.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-[hsl(0_0%_30%)] transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MilanoGalleryCarousel;
