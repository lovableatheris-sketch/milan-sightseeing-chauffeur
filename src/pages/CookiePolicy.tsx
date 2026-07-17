import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
    const { language } = useLanguage();

    const content = {
        it: {
            title: "Cookie Policy",
            seoTitle: "Cookie Policy | Nexitus",
            seoDesc: "Cookie Policy di Nexitus. Informazioni sui cookie utilizzati nel sito web e come gestirli.",
            lastUpdate: "Ultimo aggiornamento: 1 Marzo 2026",
            sections: [
                { title: "1. Cosa sono i Cookie", text: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Servono a migliorare l'esperienza di navigazione, ricordare le tue preferenze e fornire informazioni ai proprietari del sito." },
                { title: "2. Cookie Utilizzati", text: "Il nostro sito utilizza le seguenti categorie di cookie:\n\n**Cookie Tecnici (Necessari)**\n• Cookie di sessione: necessari per il funzionamento del sito\n• Cookie di preferenza lingua: ricordano la tua scelta linguistica\n• Cookie di navigazione: gestiscono il corretto funzionamento delle pagine\n\n**Cookie Analitici**\n• Google Analytics (Google LLC): raccolgono dati anonimi sul traffico e il comportamento degli utenti per migliorare il sito\n• ID: _ga, _gid, _gat\n• Durata: fino a 26 mesi\n\n**Cookie di Terze Parti**\n• Vercel Analytics: monitoraggio delle prestazioni del sito\n• Google Tag Manager: gestione dei tag di tracciamento" },
                { title: "3. Come Gestire i Cookie", text: "Puoi gestire le preferenze sui cookie attraverso le impostazioni del tuo browser:\n\n• **Chrome**: Impostazioni > Privacy e sicurezza > Cookie\n• **Firefox**: Opzioni > Privacy & Sicurezza > Cookie\n• **Safari**: Preferenze > Privacy > Cookie\n• **Edge**: Impostazioni > Privacy > Cookie\n\nNota: disabilitando i cookie tecnici, alcune funzionalità del sito potrebbero non funzionare correttamente." },
                { title: "4. Google Analytics", text: "Utilizziamo Google Analytics per analizzare l'utilizzo del sito. Google Analytics utilizza cookie per raccogliere informazioni in forma anonima e aggregata. I dati sono trattati da Google LLC secondo la loro informativa privacy.\n\nPuoi disattivare Google Analytics installando il componente aggiuntivo del browser: https://tools.google.com/dlpage/gaoptout" },
                { title: "5. Aggiornamenti", text: "Questa Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultarla regolarmente." },
                { title: "6. Contatti", text: "Per informazioni sui cookie, contattaci:\n\nE-mail: thomastagliatti2022@gmail.com\nTelefono: +39 389 143 0907" },
            ],
        },
        en: {
            title: "Cookie Policy",
            seoTitle: "Cookie Policy | Nexitus",
            seoDesc: "Nexitus Cookie Policy. Information about cookies used on our website and how to manage them.",
            lastUpdate: "Last updated: March 1, 2026",
            sections: [
                { title: "1. What are Cookies", text: "Cookies are small text files stored on your device when you visit a website. They help improve browsing experience, remember your preferences and provide information to site owners." },
                { title: "2. Cookies Used", text: "Our site uses:\n\n**Technical Cookies (Required)**\n• Session cookies, language preference cookies, navigation cookies\n\n**Analytics Cookies**\n• Google Analytics: anonymous traffic data (duration: up to 26 months)\n\n**Third-party Cookies**\n• Vercel Analytics: site performance monitoring\n• Google Tag Manager: tag management" },
                { title: "3. Managing Cookies", text: "You can manage cookies through your browser settings. Note: disabling technical cookies may affect site functionality." },
                { title: "4. Contact", text: "Email: thomastagliatti2022@gmail.com\nPhone: +39 389 143 0907" },
            ],
        },
        pt: {
            title: "Política de Cookies",
            seoTitle: "Política de Cookies | Nexitus",
            seoDesc: "Política de Cookies da Nexitus. Informações sobre os cookies utilizados e como gerenciá-los.",
            lastUpdate: "Última atualização: 1 de Março de 2026",
            sections: [
                { title: "1. O que são Cookies", text: "Cookies são pequenos arquivos de texto armazenados no seu dispositivo ao visitar um site. Servem para melhorar a experiência de navegação e lembrar suas preferências." },
                { title: "2. Cookies Utilizados", text: "Nosso site utiliza:\n\n• Cookies técnicos (necessários)\n• Cookies analíticos (Google Analytics)\n• Cookies de terceiros (Vercel Analytics)" },
                { title: "3. Contato", text: "E-mail: thomastagliatti2022@gmail.com\nWhatsApp: +39 389 143 0907" },
            ],
        },
        fr: {
            title: "Politique de Cookies",
            seoTitle: "Politique de Cookies | Nexitus",
            seoDesc: "Politique de Cookies de Nexitus. Informations sur les cookies utilisés et leur gestion.",
            lastUpdate: "Dernière mise à jour: 1er Mars 2026",
            sections: [
                { title: "1. Qu'est-ce qu'un Cookie", text: "Les cookies sont de petits fichiers texte stockés sur votre appareil pour améliorer l'expérience de navigation." },
                { title: "2. Cookies Utilisés", text: "• Cookies techniques (nécessaires)\n• Cookies analytiques (Google Analytics)\n• Cookies tiers (Vercel Analytics)" },
                { title: "3. Contact", text: "Email: thomastagliatti2022@gmail.com\nWhatsApp: +39 389 143 0907" },
            ],
        },
    };

    const c = content[language] || content.it;

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title={c.seoTitle} description={c.seoDesc} keywords="cookie policy, politica cookie, GDPR cookie" canonicalUrl="https://nexitus.it/cookie-policy" />
            <Header />
            <main className="pt-28 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{c.title}</h1>
                        <p className="text-muted-foreground mb-10 text-sm">{c.lastUpdate}</p>
                        <div className="space-y-8">
                            {c.sections.map((s, i) => (
                                <section key={i}>
                                    <h2 className="text-xl font-heading font-semibold text-foreground mb-3">{s.title}</h2>
                                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{s.text}</div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CookiePolicy;
