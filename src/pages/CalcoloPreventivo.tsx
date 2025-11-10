import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Search, CheckCircle } from "lucide-react";
import { useState } from "react";

const CalcoloPreventivo = () => {
  const [distance, setDistance] = useState(50);
  const pricePerKm = 2.59;
  const calculatedPrice = (distance * pricePerKm).toFixed(2);

  const routes = [
    { from: "Malpensa", to: "Milano", price: 160 },
    { from: "Malpensa", to: "Rho Fiera", price: 120 },
    { from: "Malpensa", to: "Linate", price: 170 },
    { from: "Malpensa", to: "Lugano", price: 240 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
              Calcolo Preventivo
            </h1>

            {/* Fixed Price Route Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {route.from} – {route.to}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">o viceversa</p>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">€{route.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculator Section */}
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
                VUOI CONOSCERE IL COSTO DEL TUO VIAGGIO?
              </h2>
              <div className="h-1 w-32 bg-luxury-gold mx-auto mb-12"></div>

              {/* Instruction Icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm text-foreground/80">
                    Verifica la distanza del tuo viaggio su Google Maps.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm text-foreground/80">
                    Scorri la barra in base al numero di km che devi percorrere.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm text-foreground/80">
                    Guarda il risultato.
                  </p>
                </div>
              </div>

              {/* Slider Calculator */}
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-foreground mb-4">
                    Km: {distance}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      accentColor: '#2563eb',
                    }}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1 km</span>
                    <span>500 km</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-blue-600 rounded-full py-6 px-8 text-center shadow-lg">
                  <p className="text-white text-3xl md:text-4xl font-bold">
                    €{calculatedPrice}
                  </p>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Tariffa calcolata: {distance} km × €{pricePerKm} = €{calculatedPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalcoloPreventivo;
