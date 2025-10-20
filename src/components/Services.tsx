import { Car, Clock, Globe2, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe2,
      title: "Motoristas Bilíngues",
      description: "Profissionais fluentes em italiano e inglês, prontos para atendê-lo",
    },
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Disponível em Milão e arredores a qualquer hora do dia ou da noite",
    },
    {
      icon: Car,
      title: "Reservas Simples",
      description: "Sistema de reserva rápido e fácil para sua comodidade",
    },
    {
      icon: MapPin,
      title: "Transfers Completos",
      description: "Aeroportos, eventos corporativos e passeios turísticos personalizados",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Como Funciona Nosso Serviço
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência de transporte executivo incomparável,
            combinando luxo, segurança e pontualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-luxury transition-elegant animate-fade-in-up text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/10 text-luxury-gold mb-6 group-hover:scale-110 transition-smooth">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
