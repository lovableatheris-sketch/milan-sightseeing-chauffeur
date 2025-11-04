import { useLanguage } from "@/contexts/LanguageContext";
import ukFlag from "@/assets/flag-uk.png";
import brazilFlag from "@/assets/flag-brazil.png";

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
      gradient: `url(${ukFlag})`
    },
    { 
      code: "pt" as const, 
      flag: "🇧🇷", 
      label: "Português",
      gradient: `url(${brazilFlag})`
    },
    { 
      code: "fr" as const, 
      flag: "🇫🇷", 
      label: "Français",
      gradient: "linear-gradient(to right, #002395 0%, #002395 33%, #FFFFFF 33%, #FFFFFF 66%, #ED2939 66%, #ED2939 100%)"
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
              ? "ring-2 ring-luxury-gold"
              : "hover:scale-105"
          }`}
          title={item.label}
          style={{ 
            background: item.code === "en" ? "#012169" : item.code === "pt" ? "#009C3B" : item.gradient,
            backgroundImage: item.gradient,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {language === item.code && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse shadow-lg" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
