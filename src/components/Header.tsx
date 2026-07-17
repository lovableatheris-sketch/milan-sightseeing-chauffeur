import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { supabase } from '@/supabaseClient';
import LanguageSelector from "@/components/LanguageSelector";
import { LoginScreen } from "./loginScreen"; // Importando o seu novo arquivo de login

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para controlar a janela flutuante de login

  useEffect(() => {


    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_IN') {
        setIsLoginOpen(false);
      }
    });

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);



    return () => {
      subscription.unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      navigate(`/#${id}`);
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

      {/* Modal de Login (Janela Flutuante para Desktop e Mobile) */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          {/* Fundo clic�vel para fechar o modal */}
          <div className="absolute inset-0" onClick={() => setIsLoginOpen(false)} />

          {/* Container do Modal */}
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-10 animate-scale-in">
            {/* Bot�o de Fechar o Modal */}
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">NEXITUS</h2>
              <p className="text-xs text-gray-400 mt-1">Acesse sua Conta Executiva</p>
            </div>

            {/* Chamada para o seu componente Supabase Auth UI */}
            <LoginScreen />
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
        <div className="w-full px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="text-luxury-gold hover:text-luxury-gold-dark transition-smooth font-light uppercase tracking-widest text-3xl"            >
              NEXITUS
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-semibold uppercase tracking-wider text-xs"
              >
                {t.inicio}
              </button>

              <button
                onClick={() => navigate("/contato")}
                className="text-primary-foreground hover:text-luxury-gold transition-smooth font-semibold uppercase tracking-wider text-xs"
              >
                {t.contato}
              </button>
              <button
                onClick={() => navigate("/milano-premium-mobility")}
                className="text-luxury-gold hover:text-luxury-gold-dark transition-smooth font-bold uppercase tracking-widest text-xs"
              >
                {t.chiSiamo}
              </button>
              <LanguageSelector />

              {/* BOT�O CORRIGIDO */}
              {user ? (
                <Button onClick={() => navigate("/perfil")} variant="ghost">
                  Perfil
                </Button>
              ) : (
                <Button onClick={() => setIsLoginOpen(true)} className="bg-luxury-gold">
                  Login {/* Assumindo que existe no seu translations */}
                </Button>
              )}
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
              <div className="flex flex-col gap-4 bg-transparent/95 backdrop-blur-lg rounded-lg p-6">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-semibold uppercase tracking-wider text-sm text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.inicio}
                </button>
                <button
                  onClick={() => {
                    navigate("/chi-siamo");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-semibold uppercase tracking-wider text-sm text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.chiSiamo}
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-semibold uppercase tracking-wider text-sm text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.servicos}
                </button>
                <button
                  onClick={() => {
                    navigate("/contato");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-primary-foreground hover:text-luxury-gold transition-smooth font-semibold uppercase tracking-wider text-sm text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95"
                >
                  {t.contato}
                </button>
                <button
                  onClick={() => {
                    navigate("/milano-premium-mobility");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-luxury-gold hover:text-luxury-gold-dark transition-smooth font-bold uppercase tracking-widest text-sm text-left py-3 px-4 rounded-lg hover:bg-luxury-gold/10 active:scale-95 border-t border-primary-foreground/10 mt-2 pt-4"
                >
                  MILANO Corporate
                </button>

                {/* Bot�o de Login Mobile */}
                {user ? (
                  <Button onClick={() => { navigate("/perfil"); setIsMobileMenuOpen(false); }} className="...">
                    Perfil
                  </Button>
                ) : (
                  <Button onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true); }} className="...">
                    Login
                  </Button>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
