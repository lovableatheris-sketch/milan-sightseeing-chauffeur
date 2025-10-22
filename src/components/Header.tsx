import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import LanguageSelector from "@/components/LanguageSelector";

const Header = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-elegant"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="text-lg md:text-2xl font-heading font-bold text-luxury-gold transition-smooth hover:opacity-80"
            >
              {t.brand}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium"
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium"
              >
                {t.servicos}
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium"
              >
                {t.contato}
              </button>
              <LanguageSelector />
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury"
              >
                {t.reserveAgora}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-primary-foreground hover:text-luxury-gold transition-smooth p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden pb-6 pt-2 animate-fade-in">
              <div className="flex flex-col gap-4 bg-primary/95 backdrop-blur-lg rounded-lg p-6 shadow-luxury">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.inicio}
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.servicos}
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.contato}
                </button>
                <div className="flex justify-center py-2 border-t border-primary-foreground/10 mt-2">
                  <LanguageSelector />
                </div>
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury w-full py-6 text-lg font-semibold active:scale-95"
                >
                  {t.reserveAgora}
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
