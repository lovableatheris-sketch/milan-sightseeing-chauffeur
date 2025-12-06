import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-luxury-gold mb-4">
              {t.brand}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t.brandDesc}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-luxury-gold">
              {t.contactTitle}
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+393891430907"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-luxury-gold transition-smooth"
              >
                <Phone size={18} />
                <span>+39 389 143 0907</span>
              </a>
              <a
                href="https://wa.me/393891430907"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-luxury-gold transition-smooth"
              >
                <MessageCircle size={18} />
                <span>{t.whatsapp}</span>
              </a>
              <a
                href="mailto:thomastagliatti2022@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-luxury-gold transition-smooth"
              >
                <Mail size={18} />
                <span>thomastagliatti2022@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-luxury-gold">
              {t.socialTitle}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-luxury-gold hover:text-primary transition-smooth"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-luxury-gold hover:text-primary transition-smooth"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-luxury-gold hover:text-primary transition-smooth"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
