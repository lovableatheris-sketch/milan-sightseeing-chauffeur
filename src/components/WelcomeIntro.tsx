import { useState, useEffect } from "react";

interface WelcomeIntroProps {
    onComplete: () => void;
}

const WelcomeIntro = ({ onComplete }: WelcomeIntroProps) => {
    const [phase, setPhase] = useState<"initial" | "revealing" | "visible" | "fading">("initial");

    const fullText = "WELCOME TO TMT.";

    useEffect(() => {
        // Check if user has seen the intro in this session
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
        if (hasSeenIntro) {
            onComplete();
            return;
        }

        // Apple-style cinematic timing
        const timeline = [
            { phase: "revealing" as const, delay: 300 },      // Start reveal
            { phase: "visible" as const, delay: 1800 },       // Fully visible, hold
            { phase: "fading" as const, delay: 3200 },        // Begin fade out
        ];

        const timeouts: NodeJS.Timeout[] = [];

        timeline.forEach(({ phase, delay }) => {
            timeouts.push(setTimeout(() => setPhase(phase), delay));
        });

        // Complete after fade out
        timeouts.push(setTimeout(() => {
            sessionStorage.setItem("hasSeenIntro", "true");
            onComplete();
        }, 4200));

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete]);

    // Skip if already seen
    const hasSeenIntro = typeof window !== "undefined" && sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
        return null;
    }

    // Dynamic styles based on phase
    const getContainerStyles = () => {
        const base = "fixed inset-0 z-[9999] bg-black flex items-center justify-center";
        const transitions = "transition-opacity duration-[1000ms] ease-out";
        const opacity = phase === "fading" ? "opacity-0" : "opacity-100";
        return `${base} ${transitions} ${opacity}`;
    };

    const getTextStyles = () => {
        const base = "font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.3em] text-white font-extralight";
        
        // CSS-based transitions for smooth Apple-like animation
        const transitionProps = "transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
        
        let transformStyles = "";
        let opacityStyles = "";
        let filterStyles = "";

        switch (phase) {
            case "initial":
                transformStyles = "scale-[0.92] translate-y-2";
                opacityStyles = "opacity-0";
                filterStyles = "[filter:blur(12px)]";
                break;
            case "revealing":
                transformStyles = "scale-100 translate-y-0";
                opacityStyles = "opacity-100";
                filterStyles = "[filter:blur(0px)]";
                break;
            case "visible":
                transformStyles = "scale-100 translate-y-0";
                opacityStyles = "opacity-100";
                filterStyles = "[filter:blur(0px)]";
                break;
            case "fading":
                transformStyles = "scale-[1.02] -translate-y-1";
                opacityStyles = "opacity-0";
                filterStyles = "[filter:blur(4px)]";
                break;
        }

        return `${base} ${transitionProps} ${transformStyles} ${opacityStyles} ${filterStyles}`;
    };

    const getUnderlineStyles = () => {
        const base = "h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-10";
        const transitions = "transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300";
        
        const isVisible = phase === "revealing" || phase === "visible";
        const widthOpacity = isVisible ? "w-32 sm:w-48 md:w-64 opacity-100" : "w-0 opacity-0";
        
        return `${base} ${transitions} ${widthOpacity}`;
    };

    return (
        <div className={getContainerStyles()}>
            <div className="text-center px-4">
                {/* Main text with Apple-style reveal */}
                <h1 className={getTextStyles()}>
                    {fullText}
                </h1>

                {/* Elegant underline accent */}
                <div className={getUnderlineStyles()} />
            </div>
        </div>
    );
};

export default WelcomeIntro;
