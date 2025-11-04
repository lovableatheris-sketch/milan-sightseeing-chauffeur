import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Destination {
  name: string;
  km: number;
  price: number;
}

const Tariffs = () => {
  const mountainDestinations: Destination[] = [
    { name: "St. Moritz", km: 332, price: 647 },
    { name: "Chamonix", km: 572, price: 1116 },
    { name: "Courmayeur / Monte Bianco", km: 432, price: 842 },
    { name: "Livigno", km: 416, price: 811 },
    { name: "Aprica", km: 318, price: 621 },
    { name: "Sondrio", km: 276, price: 538 },
    { name: "Tirano", km: 328, price: 640 },
    { name: "Madonna di Campiglio", km: 426, price: 831 },
    { name: "Canazei (Val di Fassa)", km: 616, price: 1201 },
    { name: "Selva di Val Gardena", km: 618, price: 1205 },
    { name: "Ortisei", km: 612, price: 1193 },
    { name: "Lago di Como (Como)", km: 100, price: 195 },
    { name: "Bellagio", km: 144, price: 281 },
    { name: "Stresa (Lago Maggiore)", km: 178, price: 347 },
  ];

  const seaDestinations: Destination[] = [
    { name: "Genova", km: 292, price: 438 },
    { name: "Portofino", km: 348, price: 522 },
    { name: "Rimini", km: 660, price: 990 },
    { name: "Riccione", km: 672, price: 1008 },
    { name: "Comacchio", km: 600, price: 900 },
    { name: "Ferrara", km: 512, price: 768 },
    { name: "Venezia (P.le Roma)", km: 528, price: 792 },
    { name: "Roma", km: 1142, price: 1713 },
    { name: "Napoli", km: 1538, price: 2307 },
    { name: "Positano", km: 1636, price: 2454 },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/393423121519", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-luxury">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in">
              Tarifas de Viagem
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
              Partindo do Aeroporto di Malpensa
            </p>
          </div>
        </section>

        {/* Tariff Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Subtitle */}
            <p className="text-center text-muted-foreground text-sm mb-12 animate-fade-in">
              Tutte le distanze indicate sono andata e ritorno (A/R).
            </p>

            {/* Section 1: MONTAGNE & LAGHI */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 uppercase text-luxury-gold">
                Montagne & Laghi (+30%)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mountainDestinations.map((dest, index) => (
                  <Card
                    key={index}
                    className="p-4 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card border-border"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-1">⛰️</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{dest.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Km (A/R): <span className="font-medium text-foreground">{dest.km}</span> — Prezzo:{" "}
                          <span className="font-bold text-luxury-gold">{dest.price}€</span>
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 2: MARE & GRANDI CITTÀ */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 uppercase text-luxury-gold">
                Mare & Grandi Città
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {seaDestinations.map((dest, index) => (
                  <Card
                    key={index}
                    className="p-4 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card border-border"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-1">🏙️</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{dest.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Km (A/R): <span className="font-medium text-foreground">{dest.km}</span> — Prezzo:{" "}
                          <span className="font-bold text-luxury-gold">{dest.price}€</span>
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tariffe Orarie & Olimpiadi */}
            <div className="mb-12 p-8 rounded-2xl bg-accent/20 border border-accent/30 shadow-card animate-fade-in">
              <div className="max-w-3xl mx-auto space-y-3 text-center">
                <p className="text-foreground">
                  <span className="font-semibold">Tariffa chilometrica base:</span> €1,50/km
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">Laghi e Montagne:</span> +30% (→ €1,95/km)
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">Disposizioni orarie:</span> €90/ora
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">Olimpiadi Milano-Cortina:</span> €100/ora + €1,90/km
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center animate-fade-in">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-semibold px-12 py-6 rounded-full shadow-luxury hover:shadow-elegant transition-all duration-300 hover:scale-105 text-lg"
              >
                Prenota ora
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tariffs;
