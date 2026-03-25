import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const policyLabels = {
    it: { privacy: "Privacy Policy", terms: "Termini e Condizioni", cookies: "Cookie Policy", blog: "Blog", links: "Link Utili" },
    en: { privacy: "Privacy Policy", terms: "Terms & Conditions", cookies: "Cookie Policy", blog: "Blog", links: "Useful Links" },
    pt: { privacy: "Política de Privacidade", terms: "Termos e Condições", cookies: "Política de Cookies", blog: "Blog", links: "Links Úteis" },
    fr: { privacy: "Politique de Confidentialité", terms: "Conditions Générales", cookies: "Politique de Cookies", blog: "Blog", links: "Liens Utiles" },
  };

  const labels = policyLabels[language] || policyLabels.it;

  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-luxury-gold mb-4">{t.brand}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">{t.brandDesc}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-luxury-gold">{t.contactTitle}</h4>
            <div className="space-y-3">
              <a href="tel:+393891430907" className="flex items-center gap-3 text-primary-foreground/80 hover:text-luxury-gold transition-smooth">
                <Phone size={18} /><span>+39 389 143 0907</span>
              </a>
              <a href={`https://wa.me/393891430907?text=${encodeURIComponent(translations[language].common.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/80 hover:text-luxury-gold transition-smooth">
                <MessageCircle size={18} /><span>{t.whatsapp}</span>
              </a>
              <a href="mailto:thomastagliatti2022@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-luxury-gold transition-smooth">
                <Mail size={18} /><span>thomastagliatti2022@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-luxury-gold">{labels.links}</h4>
            <div className="space-y-3">
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-luxury-gold transition-smooth">{labels.blog}</Link>
              <Link to="/privacy-policy" className="block text-primary-foreground/80 hover:text-luxury-gold transition-smooth">{labels.privacy}</Link>
              <Link to="/termini-condizioni" className="block text-primary-foreground/80 hover:text-luxury-gold transition-smooth">{labels.terms}</Link>
              <Link to="/cookie-policy" className="block text-primary-foreground/80 hover:text-luxury-gold transition-smooth">{labels.cookies}</Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-luxury-gold">{t.socialTitle}</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tmtransferlux/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-luxury-gold hover:text-primary transition-smooth">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
