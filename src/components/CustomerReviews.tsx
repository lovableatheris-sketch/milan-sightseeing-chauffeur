import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const CustomerReviews = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.it;

  const reviews = [
    {
      id: 1,
      name: "Marco Rossi",
      location: t.reviews?.locations?.italy || "Milano, Italia",
      rating: 5,
      date: "2025-01-10",
      text: t.reviews?.review1 || "Servizio eccezionale! Autista puntuale e professionale. L'auto era impeccabile e il viaggio da Malpensa al centro di Milano è stato molto confortevole. Consiglio vivamente!",
      service: "Transfer Malpensa - Milano",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: t.reviews?.locations?.uk || "London, UK",
      rating: 5,
      date: "2025-01-08",
      text: t.reviews?.review2 || "Amazing experience! The driver was waiting for us at the airport with a sign. The Mercedes was luxurious and clean. Perfect service for our business trip.",
      service: "Transfer Malpensa - Milano",
    },
    {
      id: 3,
      name: "Pierre Dubois",
      location: t.reviews?.locations?.france || "Paris, France",
      rating: 5,
      date: "2025-01-05",
      text: t.reviews?.review3 || "Excellent service de transfert! Le chauffeur parlait français et nous a donné de précieux conseils sur Milan. Prix fixe, pas de surprises. Je recommande!",
      service: "Tour Lago di Como",
    },
    {
      id: 4,
      name: "Ana Santos",
      location: t.reviews?.locations?.brazil || "São Paulo, Brasil",
      rating: 5,
      date: "2024-12-28",
      text: t.reviews?.review4 || "Serviço impecável! O motorista foi muito atencioso e o carro era lindo. O passeio ao Lago di Como foi inesquecível. Super recomendo para brasileiros visitando Milão!",
      service: "Tour Lago di Como",
    },
    {
      id: 5,
      name: "Klaus Müller",
      location: t.reviews?.locations?.germany || "München, Germany",
      rating: 5,
      date: "2024-12-20",
      text: t.reviews?.review5 || "Sehr professioneller Service! Pünktlich, sauber und komfortabel. Der Fahrer war sehr freundlich. Perfekt für Geschäftsreisen nach Mailand.",
      service: "Transfer Linate - Milano",
    },
    {
      id: 6,
      name: "Giulia Bianchi",
      location: t.reviews?.locations?.italy || "Roma, Italia",
      rating: 5,
      date: "2024-12-15",
      text: t.reviews?.review6 || "Ho usato il servizio per un viaggio di lavoro. Puntualità perfetta, auto pulitissima e autista molto cordiale. Prezzi trasparenti e nessun costo aggiuntivo. Top!",
      service: "Transfer Bergamo - Milano",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider text-sm">
            {t.reviews?.subtitle || "TESTIMONIANZE DEI CLIENTI"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.reviews?.title || "Cosa Dicono i Nostri Clienti"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.reviews?.description || "Scopri le esperienze dei nostri clienti soddisfatti da tutto il mondo"}
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">
              ({t.reviews?.reviewCount || "47 recensioni"})
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 relative group"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(review.rating)} />
                <meta itemProp="bestRating" content="5" />
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote 
                className="text-foreground/90 mb-6 leading-relaxed line-clamp-4"
                itemProp="reviewBody"
              >
                "{review.text}"
              </blockquote>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground" itemProp="name">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>

              {/* Hidden structured data */}
              <meta itemProp="datePublished" content={review.date} />
              <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="TMTransferLux" />
              </div>
            </article>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">500+</span>
            <span className="text-sm text-muted-foreground">
              {t.reviews?.happyClients || "Clienti Soddisfatti"}
            </span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">5.0</span>
            <span className="text-sm text-muted-foreground">
              {t.reviews?.averageRating || "Valutazione Media"}
            </span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">24/7</span>
            <span className="text-sm text-muted-foreground">
              {t.reviews?.availability || "Disponibilità"}
            </span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">100%</span>
            <span className="text-sm text-muted-foreground">
              {t.reviews?.satisfaction || "Soddisfazione"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
