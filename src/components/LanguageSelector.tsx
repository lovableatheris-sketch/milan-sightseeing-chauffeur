import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const flags = [
    { code: "it" as const, flag: "🇮🇹", label: "Italiano" },
    { code: "en" as const, flag: "🇬🇧", label: "English" },
    { code: "pt" as const, flag: "🇧🇷", label: "Português" },
  ];

  return (
    <div className="flex items-center gap-2">
      {flags.map((item) => (
        <button
          key={item.code}
          onClick={() => setLanguage(item.code)}
          className={`group relative w-10 h-10 rounded shadow-elegant hover:shadow-luxury transition-elegant ${
            language === item.code
              ? "ring-2 ring-luxury-gold scale-105"
              : "hover:scale-105"
          }`}
          title={item.label}
        >
          <div
            className={`w-full h-full rounded bg-card flex items-center justify-center text-2xl transition-smooth ${
              language === item.code ? "bg-luxury-gold/10" : ""
            }`}
          >
            {item.flag}
          </div>

          {language === item.code && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-luxury-gold rounded-full animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
