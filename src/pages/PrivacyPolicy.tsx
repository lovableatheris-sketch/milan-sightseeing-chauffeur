import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    const content = {
        it: {
            title: "Informativa sulla Privacy",
            seoTitle: "Informativa sulla Privacy | TMTransferLux",
            seoDesc: "Informativa sulla privacy di TMTransferLux. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
            lastUpdate: "Ultimo aggiornamento: 1 Marzo 2026",
            sections: [
                { title: "1. Titolare del Trattamento", text: "Il titolare del trattamento dei dati personali è TMTransferLux - Sightseeing di Thomas Tagliatti, con sede a Milano, Italia. E-mail: thomastagliatti2022@gmail.com. Telefono: +39 389 143 0907." },
                { title: "2. Dati Raccolti", text: "Raccogliamo i seguenti dati personali:\n\n• Dati di contatto: nome, cognome, indirizzo e-mail, numero di telefono\n• Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, data e ora di accesso\n• Dati di prenotazione: dettagli del viaggio, date, destinazioni, preferenze di servizio\n• Cookie e tecnologie simili: come descritto nella nostra Cookie Policy" },
                { title: "3. Finalità del Trattamento", text: "I dati personali vengono trattati per le seguenti finalità:\n\n• Gestione delle prenotazioni e fornitura dei servizi di transfer\n• Comunicazioni relative ai servizi richiesti\n• Adempimento di obblighi legali e fiscali\n• Miglioramento dei nostri servizi e dell'esperienza utente\n• Marketing (solo con il tuo consenso esplicito)\n• Analisi statistiche anonime del traffico web" },
                { title: "4. Base Giuridica", text: "Il trattamento dei dati si basa su:\n\n• Esecuzione di un contratto (prenotazione di servizi)\n• Consenso dell'interessato (per comunicazioni marketing)\n• Legittimo interesse del titolare (miglioramento dei servizi)\n• Obblighi di legge (adempimenti fiscali e normativi)" },
                { title: "5. Conservazione dei Dati", text: "I dati personali vengono conservati per il tempo necessario al raggiungimento delle finalità per cui sono stati raccolti:\n\n• Dati di prenotazione: 10 anni (obblighi fiscali)\n• Dati di contatto per marketing: fino alla revoca del consenso\n• Dati di navigazione: 26 mesi\n• Cookie: come specificato nella Cookie Policy" },
                { title: "6. Condivisione dei Dati", text: "I dati personali possono essere condivisi con:\n\n• Fornitori di servizi IT e hosting (server in UE)\n• Servizi di analisi web (Google Analytics)\n• Autorità competenti quando richiesto dalla legge\n\nNon vendiamo né cediamo i tuoi dati a terze parti per scopi di marketing." },
                { title: "7. I Tuoi Diritti", text: "Ai sensi del GDPR (Regolamento UE 2016/679), hai il diritto di:\n\n• Accedere ai tuoi dati personali\n• Rettificare dati inesatti\n• Cancellare i tuoi dati (diritto all'oblio)\n• Limitare il trattamento\n• Portabilità dei dati\n• Opporti al trattamento\n• Revocare il consenso in qualsiasi momento\n\nPer esercitare i tuoi diritti, contattaci a: thomastagliatti2022@gmail.com" },
                { title: "8. Sicurezza", text: "Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati personali da accesso non autorizzato, perdita, distruzione o alterazione. Utilizziamo connessioni crittografate (HTTPS) e sistemi di protezione aggiornati." },
                { title: "9. Modifiche", text: "Ci riserviamo il diritto di aggiornare questa informativa. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento." },
                { title: "10. Contatti", text: "Per qualsiasi domanda sulla privacy, contattaci:\n\nE-mail: thomastagliatti2022@gmail.com\nTelefono: +39 389 143 0907\nWhatsApp: +39 389 143 0907" },
            ],
        },
        en: {
            title: "Privacy Policy",
            seoTitle: "Privacy Policy | TMTransferLux",
            seoDesc: "TMTransferLux privacy policy. Learn how we collect, use and protect your personal data.",
            lastUpdate: "Last updated: March 1, 2026",
            sections: [
                { title: "1. Data Controller", text: "The data controller is TMTransferLux - Sightseeing di Thomas Tagliatti, based in Milan, Italy. Email: thomastagliatti2022@gmail.com. Phone: +39 389 143 0907." },
                { title: "2. Data Collected", text: "We collect the following personal data:\n\n• Contact data: name, email, phone number\n• Browsing data: IP address, browser type, pages visited\n• Booking data: trip details, dates, destinations\n• Cookies and similar technologies" },
                { title: "3. Purpose of Processing", text: "Personal data is processed for:\n\n• Managing bookings and providing transfer services\n• Communications related to requested services\n• Legal and tax obligations\n• Service improvement and user experience\n• Marketing (only with your explicit consent)\n• Anonymous statistical web traffic analysis" },
                { title: "4. Your Rights (GDPR)", text: "Under GDPR, you have the right to:\n\n• Access your personal data\n• Rectify inaccurate data\n• Delete your data (right to be forgotten)\n• Restrict processing\n• Data portability\n• Object to processing\n• Withdraw consent at any time\n\nContact: thomastagliatti2022@gmail.com" },
                { title: "5. Contact", text: "Email: thomastagliatti2022@gmail.com\nPhone: +39 389 143 0907\nWhatsApp: +39 389 143 0907" },
            ],
        },
        pt: {
            title: "Política de Privacidade",
            seoTitle: "Política de Privacidade | TMTransferLux",
            seoDesc: "Política de privacidade da TMTransferLux. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
            lastUpdate: "Última atualização: 1 de Março de 2026",
            sections: [
                { title: "1. Controlador de Dados", text: "O controlador de dados é TMTransferLux - Sightseeing di Thomas Tagliatti, com sede em Milão, Itália. E-mail: thomastagliatti2022@gmail.com. Telefone: +39 389 143 0907." },
                { title: "2. Dados Coletados", text: "Coletamos os seguintes dados pessoais:\n\n• Dados de contato: nome, e-mail, telefone\n• Dados de navegação: endereço IP, tipo de navegador, páginas visitadas\n• Dados de reserva: detalhes da viagem, datas, destinos\n• Cookies e tecnologias similares" },
                { title: "3. Seus Direitos (GDPR)", text: "Conforme o GDPR, você tem o direito de:\n\n• Acessar seus dados pessoais\n• Retificar dados incorretos\n• Excluir seus dados\n• Restringir o processamento\n• Portabilidade dos dados\n• Revogar o consentimento\n\nContato: thomastagliatti2022@gmail.com" },
                { title: "4. Contato", text: "E-mail: thomastagliatti2022@gmail.com\nTelefone: +39 389 143 0907\nWhatsApp: +39 389 143 0907" },
            ],
        },
        fr: {
            title: "Politique de Confidentialité",
            seoTitle: "Politique de Confidentialité | TMTransferLux",
            seoDesc: "Politique de confidentialité de TMTransferLux. Découvrez comment nous collectons et protégeons vos données.",
            lastUpdate: "Dernière mise à jour: 1er Mars 2026",
            sections: [
                { title: "1. Responsable du Traitement", text: "Le responsable du traitement est TMTransferLux - Sightseeing di Thomas Tagliatti, Milan, Italie. Email: thomastagliatti2022@gmail.com." },
                { title: "2. Données Collectées", text: "Nous collectons:\n\n• Données de contact: nom, email, téléphone\n• Données de navigation: adresse IP, navigateur, pages visitées\n• Données de réservation: détails du voyage\n• Cookies et technologies similaires" },
                { title: "3. Vos Droits (RGPD)", text: "Conformément au RGPD, vous avez le droit de:\n\n• Accéder à vos données\n• Rectifier les données inexactes\n• Supprimer vos données\n• Révoquer votre consentement\n\nContact: thomastagliatti2022@gmail.com" },
                { title: "4. Contact", text: "Email: thomastagliatti2022@gmail.com\nTéléphone: +39 389 143 0907" },
            ],
        },
    };

    const c = content[language] || content.it;

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title={c.seoTitle} description={c.seoDesc} keywords="privacy policy, informativa privacy, GDPR" canonicalUrl="https://tmtransferlux.it/privacy-policy" />
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

export default PrivacyPolicy;
