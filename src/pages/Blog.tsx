import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
    const { language } = useLanguage();

    const seoData = {
        it: {
            title: "Blog | Guide e Consigli di Viaggio Milano | TMTransferLux",
            description: "Guide pratiche, consigli di viaggio e informazioni utili su Milano, transfer aeroportuali, laghi e destinazioni turistiche. Il blog di TMTransferLux.",
            keywords: "blog milano, guida viaggio milano, transfer malpensa consigli, lago di como guida, ristoranti milano",
        },
        en: {
            title: "Blog | Milan Travel Guide & Tips | TMTransferLux",
            description: "Practical guides, travel tips and useful information about Milan, airport transfers, lakes and tourist destinations. The TMTransferLux blog.",
            keywords: "milan blog, milan travel guide, malpensa transfer tips, lake como guide, milan restaurants",
        },
        pt: {
            title: "Blog | Guias e Dicas de Viagem Milão | TMTransferLux",
            description: "Guias práticos, dicas de viagem e informações úteis sobre Milão, transfers aeroportuários, lagos e destinos turísticos.",
            keywords: "blog milão, guia viagem milão, transfer malpensa dicas, lago di como guia",
        },
        fr: {
            title: "Blog | Guides et Conseils de Voyage Milan | TMTransferLux",
            description: "Guides pratiques, conseils de voyage et informations utiles sur Milan, transferts aéroportuaires, lacs et destinations touristiques.",
            keywords: "blog milan, guide voyage milan, transfert malpensa conseils",
        },
    };

    const currentSeo = seoData[language] || seoData.it;

    const blogTitle = {
        it: "Blog & Guide di Viaggio",
        en: "Blog & Travel Guides",
        pt: "Blog & Guias de Viagem",
        fr: "Blog & Guides de Voyage",
    };

    const blogSubtitle = {
        it: "Consigli pratici, itinerari e informazioni utili per il tuo viaggio a Milano e dintorni",
        en: "Practical tips, itineraries and useful information for your trip to Milan and surroundings",
        pt: "Dicas práticas, roteiros e informações úteis para sua viagem a Milão e arredores",
        fr: "Conseils pratiques, itinéraires et informations utiles pour votre voyage à Milan",
    };

    const readMore = { it: "Leggi Articolo", en: "Read Article", pt: "Ler Artigo", fr: "Lire l'Article" };
    const minRead = { it: "min di lettura", en: "min read", pt: "min de leitura", fr: "min de lecture" };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const locales = { it: "it-IT", en: "en-GB", pt: "pt-BR", fr: "fr-FR" };
        return date.toLocaleDateString(locales[language] || "it-IT", { year: "numeric", month: "long", day: "numeric" });
    };

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title={currentSeo.title}
                description={currentSeo.description}
                keywords={currentSeo.keywords}
                canonicalUrl="https://tmtransferlux.it/blog"
            />
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-dark">
                    <div className="container mx-auto px-4 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                                <BookOpen size={32} className="text-luxury-gold" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
                            {blogTitle[language] || blogTitle.it}
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                            {blogSubtitle[language] || blogSubtitle.it}
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {blogPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                    className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border"
                                >
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.titles[language] || post.titles.it}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                            <span>{formatDate(post.date)}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {post.readTime} {minRead[language] || minRead.it}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-luxury-gold transition-colors line-clamp-2">
                                            {post.titles[language] || post.titles.it}
                                        </h2>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {post.excerpts[language] || post.excerpts.it}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-luxury-gold font-semibold text-sm group-hover:gap-3 transition-all">
                                            {readMore[language] || readMore.it}
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
