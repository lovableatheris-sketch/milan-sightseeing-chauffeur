import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "it" as const, label: "Italiano" },
    { code: "en" as const, label: "English" },
    { code: "pt" as const, label: "Português" },
    { code: "fr" as const, label: "Français" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageSelect = (code: typeof language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border hover:bg-muted transition-smooth shadow-elegant hover:shadow-luxury"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-foreground" />
        <span className="text-sm font-medium text-foreground">
          {currentLanguage?.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-popover border border-border shadow-luxury z-50 overflow-hidden animate-scale-in">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full px-4 py-2.5 text-left text-sm transition-smooth hover:bg-muted ${
                  language === lang.code
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-popover-foreground"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
