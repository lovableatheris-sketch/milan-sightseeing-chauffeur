import { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: Array<Record<string, unknown>>;
    }
}

interface AdUnitProps {
    adSlot: string;
    adClient?: string;
}

const AdUnit = ({ adSlot, adClient = "ca-pub-4321707146333224" }: AdUnitProps) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block", width: "160px", height: "600px" }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="vertical"
        />
    );
};

const SideAds = () => {
    return (
        <>
            {/* Left Side Ad */}
            <div
                className="hidden xl:flex fixed left-0 top-0 h-full items-center z-40 pointer-events-none"
                style={{ width: "180px" }}
            >
                <div className="pointer-events-auto flex flex-col items-center gap-2 ml-2">
                    <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                        Ad
                    </span>
                    <div
                        className="rounded-lg overflow-hidden border border-border/20 bg-card/20 backdrop-blur-sm"
                        style={{ width: "160px", height: "600px" }}
                    >
                        <AdUnit adSlot="LEFT_AD_SLOT" />
                    </div>
                </div>
            </div>

            {/* Right Side Ad */}
            <div
                className="hidden xl:flex fixed right-0 top-0 h-full items-center z-40 pointer-events-none"
                style={{ width: "180px" }}
            >
                <div className="pointer-events-auto flex flex-col items-center gap-2 mr-2">
                    <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                        Ad
                    </span>
                    <div
                        className="rounded-lg overflow-hidden border border-border/20 bg-card/20 backdrop-blur-sm"
                        style={{ width: "160px", height: "600px" }}
                    >
                        <AdUnit adSlot="RIGHT_AD_SLOT" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideAds;
