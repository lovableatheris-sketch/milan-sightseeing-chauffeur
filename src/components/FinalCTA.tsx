import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-dark">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Agende seu motorista agora
            <br />
            <span className="text-luxury-gold">e descubra Milão com exclusividade</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 animate-fade-in-up font-light">
            Experimente o melhor serviço de transporte executivo em Milão.
            <br />
            Profissionalismo, conforto e pontualidade garantidos.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury text-lg px-12 py-6 animate-scale-in font-semibold"
          >
            Reservar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
