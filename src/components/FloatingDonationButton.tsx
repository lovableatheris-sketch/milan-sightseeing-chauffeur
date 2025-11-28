import { useState, useEffect } from "react";
import tmtsLogo from "@/assets/tmts.png";

const FloatingDonationButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Start animation after a brief delay
    const expandTimer = setTimeout(() => {
      setIsExpanded(true);
    }, 500);

    // Collapse after 3 seconds
    const collapseTimer = setTimeout(() => {
      setIsExpanded(false);
    }, 3500);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  return (
    <a
      href="https://5x1000.fondazioneronald.org/firma"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Donate to Ronald McDonald House Charities"
    >
      <div
        className={`rounded-full shadow-luxury hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white group-hover:scale-110 flex items-center gap-3 ${
          isExpanded ? "w-48 h-20 px-4" : "w-20 h-20"
        }`}
      >
        <img
          src={tmtsLogo}
          alt="TMTS Sightseeing"
          className={`object-contain transition-all duration-500 ${
            isExpanded ? "w-12 h-12" : "w-full h-full p-2"
          }`}
        />
        <span
          className={`font-semibold text-lg text-foreground whitespace-nowrap transition-all duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0 w-0"
          }`}
        >
          Dona ora
        </span>
      </div>
    </a>
  );
};

export default FloatingDonationButton;
