import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If user visits any page other than home first, mark intro as seen
        // This prevents the black screen flash when navigating to home from another page
        if (pathname !== "/") {
            try { sessionStorage.setItem("hasSeenIntro", "true"); } catch (e) { }
        }

        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
