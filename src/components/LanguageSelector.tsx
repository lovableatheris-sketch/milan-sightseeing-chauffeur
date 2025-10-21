import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const flags = [
    { 
      code: "it" as const, 
      flag: "🇮🇹", 
      label: "Italiano",
      gradient: "linear-gradient(to right, #009246 0%, #009246 33%, #FFFFFF 33%, #FFFFFF 66%, #CE2B37 66%, #CE2B37 100%)"
    },
    { 
      code: "en" as const, 
      flag: "🇬🇧", 
      label: "English",
      gradient: "linear-gradient(135deg, #012169 0%, #012169 40%, #FFFFFF 40%, #FFFFFF 60%, #C8102E 60%, #C8102E 100%)"
    },
    { 
      code: "pt" as const, 
      flag: "🇧🇷", 
      label: "Português",
      gradient: "linear-gradient(135deg, #009C3B 0%, #009C3B 45%, #FFDF00 45%, #FFDF00 55%, #002776 55%, #002776 100%)"
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {flags.map((item) => (
        <button
          key={item.code}
          onClick={() => setLanguage(item.code)}
          className={`group relative w-10 h-10 rounded shadow-elegant hover:shadow-luxury transition-elegant overflow-hidden ${
            language === item.code
              ? "ring-2 ring-luxury-gold scale-105"
              : "hover:scale-105"
          }`}
          title={item.label}
          style={{ background: item.gradient }}
        >
          {language === item.code && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-luxury-gold rounded-full animate-pulse shadow-lg" />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
