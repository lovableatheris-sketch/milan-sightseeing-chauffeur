import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import LanguageSelector from "@/components/LanguageSelector";

const Header = () => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-elegant ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-xl md:text-2xl font-heading font-bold text-luxury-gold transition-smooth hover:opacity-80"
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
            className="md:hidden text-primary-foreground hover:text-luxury-gold transition-smooth"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left"
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left"
              >
                {t.servicos}
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left"
              >
                {t.contato}
              </button>
              <div className="flex justify-center py-2">
                <LanguageSelector />
              </div>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth shadow-luxury w-full"
              >
                {t.reserveAgora}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
