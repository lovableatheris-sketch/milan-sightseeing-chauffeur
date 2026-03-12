import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations } from "@/locales/translations";

const simpleMarkdownToHtml = (md: string): string => {
    let html = md;
    html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg md:text-xl font-heading font-semibold text-foreground mt-6 mb-3">$1</h4>');
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl md:text-2xl font-heading font-semibold text-foreground mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">$1</h2>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>');
    html = html.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g, (_match, header, _sep, body) => {
        const headers = header.split('|').filter((c: string) => c.trim()).map((c: string) => `<th class="border border-border bg-muted text-foreground p-3 text-left">${c.trim()}</th>`).join('');
        const rows = body.trim().split('\n').map((row: string) => {
            const cells = row.split('|').filter((c: string) => c.trim()).map((c: string) => `<td class="border border-border p-3">${c.trim()}</td>`).join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-border"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
    });
    html = html.replace(/^- (.+)$/gm, '<li class="text-muted-foreground ml-4">$1</li>');
    html = html.replace(/^• (.+)$/gm, '<li class="text-muted-foreground ml-4">$1</li>');
    html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul class="list-disc pl-4 space-y-1 my-4">$&</ul>');
    html = html.replace(/^(?!<[hultd]|<\/|<div|<str)(.+)$/gm, '<p class="text-muted-foreground leading-relaxed my-4">$1</p>');
    return html;
};

const BlogPost = () => {
    const { language } = useLanguage();
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const backLabel = { it: "Torna al Blog", en: "Back to Blog", pt: "Voltar ao Blog", fr: "Retour au Blog" };
    const minRead = { it: "min di lettura", en: "min read", pt: "min de leitura", fr: "min de lecture" };
    const ctaTitle = { it: "Prenota il Tuo Transfer", en: "Book Your Transfer", pt: "Reserve Seu Transfer", fr: "Réservez Votre Transfert" };
    const ctaText = {
        it: "Contattaci su WhatsApp per prenotare il tuo transfer privato con autista professionale e veicolo Mercedes.",
        en: "Contact us on WhatsApp to book your private transfer with professional driver and Mercedes vehicle.",
        pt: "Entre em contato pelo WhatsApp para reservar seu transfer privado com motorista profissional e veículo Mercedes.",
        fr: "Contactez-nous sur WhatsApp pour réserver votre transfert privé avec chauffeur professionnel et véhicule Mercedes.",
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const locales: Record<string, string> = { it: "it-IT", en: "en-GB", pt: "pt-BR", fr: "fr-FR" };
        return date.toLocaleDateString(locales[language] || "it-IT", { year: "numeric", month: "long", day: "numeric" });
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(translations[language].common.whatsappMessage);
        window.open(`https://wa.me/393891430907?text=${message}`, "_blank");
    };

    const content = post.contents[language] || post.contents.it;
    const htmlContent = simpleMarkdownToHtml(content);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title={`${post.titles[language] || post.titles.it} | TMTransferLux`}
                description={post.excerpts[language] || post.excerpts.it}
                keywords=""
                canonicalUrl={`https://tmtransferlux.it/blog/${post.slug}`}
            />
            <Header />
            <main className="pt-24 pb-20">
                <article className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-luxury-gold transition-colors mb-8">
                            <ArrowLeft size={18} />
                            {backLabel[language] || backLabel.it}
                        </Link>
                        <div className="aspect-[21/9] rounded-xl overflow-hidden mb-8">
                            <img src={post.image} alt={post.titles[language] || post.titles.it} className="w-full h-full object-cover" />
                        </div>
                        <header className="mb-10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
                                {post.titles[language] || post.titles.it}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                                <span className="flex items-center gap-2"><Calendar size={16} />{formatDate(post.date)}</span>
                                <span className="flex items-center gap-2"><Clock size={16} />{post.readTime} {minRead[language] || minRead.it}</span>
                            </div>
                        </header>
                        <div className="max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        <div className="mt-16 bg-primary/10 rounded-xl p-8 text-center border border-luxury-gold/20">
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{ctaTitle[language] || ctaTitle.it}</h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{ctaText[language] || ctaText.it}</p>
                            <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg font-semibold">
                                WhatsApp +39 389 143 0907
                            </Button>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;
