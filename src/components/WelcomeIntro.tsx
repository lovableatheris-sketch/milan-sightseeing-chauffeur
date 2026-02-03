import { useState, useEffect } from "react";

interface WelcomeIntroProps {
    onComplete: () => void;
}

const WelcomeIntro = ({ onComplete }: WelcomeIntroProps) => {
    const [phase, setPhase] = useState<"initial" | "revealing" | "visible" | "fading">("initial");

    const fullText = "WELCOME TO TMT.";

    useEffect(() => {
        // Safety check for sessionStorage and ensure intro eventually completes
        try {
            const hasSeenIntro = typeof window !== "undefined" && sessionStorage.getItem("hasSeenIntro");
            if (hasSeenIntro) {
                onComplete();
                return;
            }
        } catch (e) {
            console.error("Session storage error:", e);
        }

        // Force complete after safety margin
        const forceComplete = setTimeout(() => {
            onComplete();
        }, 3500);

        // Faster Apple-style cinematic timing
        const t1 = setTimeout(() => setPhase("revealing"), 100);
        const t2 = setTimeout(() => setPhase("visible"), 1200); // Shorter hold
        const t3 = setTimeout(() => setPhase("fading"), 2200);  // Start fade sooner
        const t4 = setTimeout(() => {
            try { sessionStorage.setItem("hasSeenIntro", "true"); } catch (e) { }
            onComplete();
        }, 2800); // Total time ~2.8s

        return () => {
            clearTimeout(forceComplete);
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [onComplete]);

    // Skip if already seen (double check)
    useEffect(() => {
        try {
            const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
            if (hasSeenIntro) onComplete();
        } catch (e) { }
    }, [onComplete]);

    // Dynamic styles based on phase
    const getContainerStyles = () => {
        const base = "fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out";
        const stateClass = phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100";
        return `${base} ${stateClass}`;
    };

    const getTextStyles = () => {
        const base = "font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.3em] text-white font-extralight transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

        let transformStyles = "";
        let opacityStyles = "";
        let blurStyles = "";

        switch (phase) {
            case "initial":
                transformStyles = "scale-95 translate-y-2";
                opacityStyles = "opacity-0";
                blurStyles = "blur-xl";
                break;
            case "revealing":
            case "visible":
                transformStyles = "scale-100 translate-y-0";
                opacityStyles = "opacity-100";
                blurStyles = "blur-none";
                break;
            case "fading":
                transformStyles = "scale-105 -translate-y-2";
                opacityStyles = "opacity-0";
                blurStyles = "blur-md";
                break;
        }

        return `${base} ${transformStyles} ${opacityStyles} ${blurStyles}`;
    };

    const getUnderlineStyles = () => {
        const base = "h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200";
        const isVisible = phase === "revealing" || phase === "visible";
        const stateStyles = isVisible ? "w-32 sm:w-48 md:w-64 opacity-100" : "w-0 opacity-0";
        return `${base} ${stateStyles}`;
    };

    return (
        <div
            className={getContainerStyles()}
            onClick={onComplete}
            role="button"
            tabIndex={0}
            aria-label="Skip intro"
        >
            <div className="text-center px-4 cursor-pointer">
                <h1 className={getTextStyles()}>
                    {fullText}
                </h1>
                <div className={getUnderlineStyles()} />
            </div>
        </div>
    );
};

export default WelcomeIntro;
