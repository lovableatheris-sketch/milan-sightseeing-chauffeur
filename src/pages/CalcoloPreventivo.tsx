import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Construction } from "lucide-react";

const CalcoloPreventivo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                <Construction className="w-12 h-12 text-luxury-gold" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Calcolo Preventivo
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Coming Soon
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Stiamo lavorando per offrirti un sistema automatico di calcolo del preventivo basato sulla distanza.
              <br />
              <br />
              Nel frattempo, contattaci direttamente via WhatsApp per ricevere un preventivo personalizzato.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalcoloPreventivo;
