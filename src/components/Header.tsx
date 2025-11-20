import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import LanguageSelector from "@/components/LanguageSelector";
import logo from "@/assets/logo-tmt.png";

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
    } else {
      // If element doesn't exist, navigate to home first
      navigate("/");
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
              className="transition-smooth hover:opacity-80"
            >
              <img src={logo} alt="TMT Sightseeing" className="h-14 md:h-16 w-auto object-contain" />
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
                onClick={() => navigate("/chi-siamo")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium"
              >
                {t.chiSiamo}
              </button>
              <button
                onClick={() => navigate("/nostri-veicoli")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium"
              >
                {t.nostriVeicoli}
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium"
              >
                {t.servicos}
              </button>
              <button
                onClick={() => navigate("/contato")}
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

            {/* Mobile Language Selector & Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <LanguageSelector />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth p-2"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
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
                  onClick={() => {
                    navigate("/chi-siamo");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.chiSiamo}
                </button>
                <button
                  onClick={() => {
                    navigate("/nostri-veicoli");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.nostriVeicoli}
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.servicos}
                </button>
                <button
                  onClick={() => {
                    navigate("/contato");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-medium text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.contato}
                </button>
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
