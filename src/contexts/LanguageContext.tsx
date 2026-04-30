import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en" | "it" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check URL parameters first
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get("lang") as Language;
      const validLanguages: Language[] = ["it", "en", "pt", "fr"];
      
      if (langParam && validLanguages.includes(langParam)) {
        localStorage.setItem("language", langParam);
        return langParam;
      }
    }

    const saved = localStorage.getItem("language");
    return (saved as Language) || "it";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    // Sync document language attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
