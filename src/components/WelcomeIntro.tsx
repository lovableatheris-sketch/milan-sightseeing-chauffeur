import { useState, useEffect } from "react";

interface WelcomeIntroProps {
    onComplete: () => void;
}

const WelcomeIntro = ({ onComplete }: WelcomeIntroProps) => {
    const [displayText, setDisplayText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const fullText = "WELCOME TO TMT.";
    const typingSpeed = 70; // milliseconds per character (faster typing)
    const pauseAfterTyping = 1200; // longer pause to appreciate the text
    const fadeOutDuration = 700; // slightly longer fade for luxury feel

    useEffect(() => {
        // Check if user has seen the intro in this session
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
        if (hasSeenIntro) {
            onComplete();
            return;
        }

        let currentIndex = 0;

        const typeNextChar = () => {
            if (currentIndex < fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeNextChar, typingSpeed);
            } else {
                setIsTypingComplete(true);
                // Wait a moment after typing completes, then fade out
                setTimeout(() => {
                    setIsFadingOut(true);
                    // After fade out animation, call onComplete
                    setTimeout(() => {
                        sessionStorage.setItem("hasSeenIntro", "true");
                        onComplete();
                    }, fadeOutDuration);
                }, pauseAfterTyping);
            }
        };

        // Start typing after a brief delay
        const initialDelay = setTimeout(() => {
            typeNextChar();
        }, 500);

        return () => clearTimeout(initialDelay);
    }, [onComplete]);

    // Skip if already seen
    const hasSeenIntro = typeof window !== "undefined" && sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-[700ms] ${isFadingOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="text-center px-4">
                {/* Main text with typewriter effect */}
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.2em] text-white font-light">
                    {displayText}
                    {/* Blinking cursor */}
                    <span
                        className={`inline-block w-[3px] h-[0.9em] bg-white ml-1 align-middle ${isTypingComplete ? "animate-none opacity-0" : "animate-pulse"
                            }`}
                    />
                </h1>

                {/* Subtle underline that appears after typing */}
                <div
                    className={`h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-8 transition-all duration-700 ${isTypingComplete ? "w-48 opacity-100" : "w-0 opacity-0"
                        }`}
                />
            </div>
        </div>
    );
};

export default WelcomeIntro;
