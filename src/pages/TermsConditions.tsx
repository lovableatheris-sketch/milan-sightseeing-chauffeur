import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsConditions = () => {
    const { language } = useLanguage();

    const content = {
        it: {
            title: "Termini e Condizioni",
            seoTitle: "Termini e Condizioni | TMTransferLux",
            seoDesc: "Termini e condizioni del servizio NCC TMTransferLux. Condizioni di prenotazione, cancellazione, pagamento e responsabilità.",
            lastUpdate: "Ultimo aggiornamento: 1 Marzo 2026",
            sections: [
                { title: "1. Informazioni Generali", text: "I presenti Termini e Condizioni regolano l'utilizzo dei servizi offerti da TMTransferLux - Sightseeing di Thomas Tagliatti, servizio di Noleggio Con Conducente (NCC) autorizzato con sede a Milano, Italia.\n\nUtilizzando i nostri servizi o il nostro sito web, accetti integralmente i presenti termini." },
                { title: "2. Servizi Offerti", text: "TMTransferLux offre i seguenti servizi:\n\n• Transfer aeroportuali (Malpensa, Linate, Bergamo Orio al Serio)\n• Tour turistici privati (Lago di Como, Lago Maggiore, San Siro)\n• Disposizioni orarie aziendali (2h, 4h, 8h)\n• Viaggi a lunga distanza in tutta Italia\n• Servizi corporate B2B\n\nTutti i servizi sono forniti con veicoli Mercedes di lusso e autisti professionali autorizzati." },
                { title: "3. Prenotazioni", text: "Le prenotazioni possono essere effettuate tramite:\n\n• WhatsApp: +39 389 143 0907\n• E-mail: thomastagliatti2022@gmail.com\n• Modulo di contatto sul sito web\n\nLa prenotazione è confermata solo dopo ricevimento della nostra conferma scritta (WhatsApp, e-mail o SMS). I prezzi comunicati al momento della prenotazione sono fissi e non soggetti a variazioni." },
                { title: "4. Prezzi e Pagamenti", text: "• I prezzi indicati sul sito sono prezzi fissi per i servizi standard\n• Il pagamento può essere effettuato in contanti, carta di credito o bonifico bancario\n• Per servizi corporate, è disponibile la fatturazione elettronica\n• Eventuali soste, deviazioni o tempi di attesa extra non previsti potranno comportare costi aggiuntivi, sempre comunicati preventivamente\n• I prezzi non includono pedaggi autostradali, parcheggi e altri costi esterni, salvo diverso accordo" },
                { title: "5. Cancellazioni e Rimborsi", text: "• Cancellazione gratuita fino a 24 ore prima del servizio\n• Cancellazione tra 24 e 12 ore prima: 50% del prezzo\n• Cancellazione meno di 12 ore prima o no-show: 100% del prezzo\n• In caso di cancellazione del volo da parte della compagnia aerea, il servizio viene riprogrammato senza costi aggiuntivi\n• TMTransferLux si riserva il diritto di cancellare il servizio per cause di forza maggiore (condizioni meteo estreme, blocchi stradali, ecc.)" },
                { title: "6. Responsabilità del Cliente", text: "Il cliente è tenuto a:\n\n• Fornire informazioni accurate al momento della prenotazione\n• Comunicare tempestivamente eventuali variazioni\n• Essere pronto all'orario e nel luogo concordato\n• Rispettare il veicolo e le normative vigenti\n• Non fumare all'interno del veicolo\n• Assicurarsi che i minori siano accompagnati da un adulto responsabile" },
                { title: "7. Responsabilità di TMTransferLux", text: "TMTransferLux si impegna a:\n\n• Fornire veicoli in perfette condizioni, sanificati e climatizzati\n• Garantire autisti professionali, puntuali e cortesi\n• Monitorare i voli in tempo reale per adeguare l'orario di prelievo\n• Rispettare i prezzi concordati al momento della prenotazione\n\nTMTransferLux non è responsabile per ritardi causati da traffico, condizioni meteorologiche avverse, incidenti stradali o altre cause di forza maggiore." },
                { title: "8. Bagagli", text: "• Ogni veicolo ha una capacità massima di bagagli\n• Bagagli fuori misura o in quantità eccedente devono essere comunicati in fase di prenotazione\n• TMTransferLux non è responsabile per danni a bagagli fragili non adeguatamente protetti" },
                { title: "9. Proprietà Intellettuale", text: "Tutti i contenuti del sito web (testi, immagini, logo, grafica) sono di proprietà di TMTransferLux e protetti dalla legge sul diritto d'autore. È vietata la riproduzione senza autorizzazione scritta." },
                { title: "10. Legge Applicabile", text: "I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il Foro di Milano." },
                { title: "11. Contatti", text: "Per qualsiasi domanda sui presenti termini:\n\nE-mail: thomastagliatti2022@gmail.com\nTelefono: +39 389 143 0907\nWhatsApp: +39 389 143 0907" },
            ],
        },
        en: {
            title: "Terms and Conditions",
            seoTitle: "Terms and Conditions | TMTransferLux",
            seoDesc: "Terms and conditions for TMTransferLux NCC service. Booking, cancellation, payment and liability conditions.",
            lastUpdate: "Last updated: March 1, 2026",
            sections: [
                { title: "1. General Information", text: "These Terms and Conditions govern the use of services offered by TMTransferLux - Sightseeing di Thomas Tagliatti, an authorized NCC (Hire with Driver) service based in Milan, Italy." },
                { title: "2. Services Offered", text: "• Airport transfers (Malpensa, Linate, Bergamo)\n• Private tourist tours (Lake Como, Lake Maggiore, San Siro)\n• Hourly corporate disposals (2h, 4h, 8h)\n• Long distance travel throughout Italy\n• Corporate B2B services" },
                { title: "3. Bookings", text: "Bookings can be made via WhatsApp (+39 389 143 0907), email or our website. Booking is confirmed only after receiving our written confirmation. Prices communicated at booking time are fixed." },
                { title: "4. Cancellations", text: "• Free cancellation up to 24 hours before service\n• Cancellation 24-12 hours before: 50% charge\n• Cancellation less than 12 hours or no-show: 100% charge\n• Flight cancellations: service rescheduled at no extra cost" },
                { title: "5. Liability", text: "TMTransferLux provides sanitized luxury Mercedes vehicles with professional drivers. We are not liable for delays caused by traffic, weather, accidents or force majeure." },
                { title: "6. Governing Law", text: "These Terms are governed by Italian law. The Court of Milan has exclusive jurisdiction." },
                { title: "7. Contact", text: "Email: thomastagliatti2022@gmail.com\nPhone/WhatsApp: +39 389 143 0907" },
            ],
        },
        pt: {
            title: "Termos e Condições",
            seoTitle: "Termos e Condições | TMTransferLux",
            seoDesc: "Termos e condições do serviço NCC TMTransferLux. Condições de reserva, cancelamento, pagamento e responsabilidade.",
            lastUpdate: "Última atualização: 1 de Março de 2026",
            sections: [
                { title: "1. Informações Gerais", text: "Estes Termos e Condições regem o uso dos serviços oferecidos pela TMTransferLux - Sightseeing di Thomas Tagliatti, serviço NCC autorizado com sede em Milão, Itália." },
                { title: "2. Serviços", text: "• Transfers aeroportuários (Malpensa, Linate, Bergamo)\n• Tours turísticos privados\n• Disposições horárias empresariais\n• Viagens de longa distância pela Itália" },
                { title: "3. Cancelamentos", text: "• Cancelamento gratuito até 24h antes\n• 24-12h antes: 50% do valor\n• Menos de 12h ou no-show: 100% do valor" },
                { title: "4. Contato", text: "E-mail: thomastagliatti2022@gmail.com\nWhatsApp: +39 389 143 0907" },
            ],
        },
        fr: {
            title: "Conditions Générales",
            seoTitle: "Conditions Générales | TMTransferLux",
            seoDesc: "Conditions générales du service VTC TMTransferLux. Réservation, annulation, paiement et responsabilité.",
            lastUpdate: "Dernière mise à jour: 1er Mars 2026",
            sections: [
                { title: "1. Informations Générales", text: "Les présentes Conditions Générales régissent l'utilisation des services offerts par TMTransferLux - Sightseeing di Thomas Tagliatti, service VTC autorisé basé à Milan, Italie." },
                { title: "2. Services", text: "• Transferts aéroportuaires (Malpensa, Linate, Bergame)\n• Tours touristiques privés\n• Dispositions horaires corporate\n• Voyages longue distance en Italie" },
                { title: "3. Annulations", text: "• Annulation gratuite jusqu'à 24h avant\n• 24-12h avant: 50% du prix\n• Moins de 12h ou no-show: 100% du prix" },
                { title: "4. Contact", text: "Email: thomastagliatti2022@gmail.com\nWhatsApp: +39 389 143 0907" },
            ],
        },
    };

    const c = content[language] || content.it;

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title={c.seoTitle} description={c.seoDesc} keywords="termini condizioni, terms conditions" canonicalUrl="https://tmtransferlux.it/termini-condizioni" />
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

export default TermsConditions;
