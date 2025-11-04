import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TariffSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card
            onClick={() => navigate("/tarifas")}
            className="p-8 md:p-12 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] bg-gradient-luxury cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                  Tarifas de Viagem
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Confira nossas tarifas para destinos de montanha, lagos, praias e grandes cidades, partindo do Aeroporto di Malpensa.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Ver todas as tarifas</span>
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
              <div className="flex gap-6 text-6xl">
                <span>⛰️</span>
                <span>🏙️</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TariffSection;
