import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const flags = [
    { code: "pt" as const, flag: "🇧🇷", label: "Português" },
    { code: "en" as const, flag: "🇬🇧", label: "English" },
    { code: "it" as const, flag: "🇮🇹", label: "Italiano" },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {flags.map((item) => (
        <button
          key={item.code}
          onClick={() => setLanguage(item.code)}
          className={`group relative w-14 h-14 rounded-full shadow-elegant hover:shadow-luxury transition-elegant ${
            language === item.code
              ? "ring-2 ring-luxury-gold scale-110"
              : "hover:scale-105"
          }`}
          title={item.label}
        >
          {/* Flag Emoji */}
          <div
            className={`w-full h-full rounded-full bg-card flex items-center justify-center text-3xl transition-smooth ${
              language === item.code ? "bg-luxury-gold/10" : ""
            }`}
          >
            {item.flag}
          </div>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground rounded-lg shadow-elegant opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap pointer-events-none">
            {item.label}
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-primary" />
          </div>

          {/* Active indicator */}
          {language === item.code && (
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-luxury-gold rounded-full border-2 border-background animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
