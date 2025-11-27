import ronaldLogo from "@/assets/ronald-mcdonald-logo.png";

const FloatingDonationButton = () => {
  return (
    <a
      href="https://5x1000.fondazioneronald.org/firma"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Donate to Ronald McDonald House Charities"
    >
      <div className="w-20 h-20 rounded-full shadow-luxury hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group-hover:scale-110">
        <img
          src={ronaldLogo}
          alt="Ronald McDonald House Charities"
          className="w-full h-full object-contain p-2"
        />
      </div>
    </a>
  );
};

export default FloatingDonationButton;
