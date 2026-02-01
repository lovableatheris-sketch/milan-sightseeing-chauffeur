import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  lang?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://tmtransferlux.it/og-image.jpg",
  ogType = "website",
  structuredData,
  lang = "it",
}: SEOHeadProps) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 3. Update Meta Tags
    const updateMetaTag = (selector: string, attr: string, value: string, nameAttr: string = "name") => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", value);
      } else {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, selector.match(/\[(.*?)="(.*?)"\]/)?.[2] || "");
        element.setAttribute("content", value);
        document.head.appendChild(element);
      }
    };

    updateMetaTag('meta[name="description"]', "content", description);
    if (keywords) updateMetaTag('meta[name="keywords"]', "content", keywords);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', "content", title, "property");
    updateMetaTag('meta[property="og:description"]', "content", description, "property");
    updateMetaTag('meta[property="og:image"]', "content", ogImage, "property");
    updateMetaTag('meta[property="og:type"]', "content", ogType, "property");
    updateMetaTag('meta[property="og:url"]', "content", window.location.href, "property");
    updateMetaTag('meta[property="og:locale"]', "content", lang === 'it' ? 'it_IT' : lang === 'en' ? 'en_GB' : lang === 'pt' ? 'pt_BR' : 'fr_FR', "property");

    // Twitter
    updateMetaTag('meta[name="twitter:title"]', "content", title);
    updateMetaTag('meta[name="twitter:description"]', "content", description);
    updateMetaTag('meta[name="twitter:image"]', "content", ogImage);

    // 4. Update Canonical Link
    const finalCanonical = canonicalUrl || window.location.href.split('?')[0];
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", finalCanonical);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", finalCanonical);
      document.head.appendChild(canonical);
    }

    // 5. Update Hreflang Tags (Dynamic based on current path)
    const updateHreflang = (hreflang: string, url: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (link) {
        link.setAttribute("href", url);
      } else {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        link.setAttribute("href", url);
        document.head.appendChild(link);
      }
    };

    const baseUrl = window.location.origin + location.pathname;
    updateHreflang("it", baseUrl);
    updateHreflang("en", `${baseUrl}?lang=en`);
    updateHreflang("pt", `${baseUrl}?lang=pt`);
    updateHreflang("fr", `${baseUrl}?lang=fr`);
    updateHreflang("x-default", baseUrl);

    // 6. Manage Structured Data
    // We use a specific ID to avoid clashing with index.html static scripts
    const SCRIPT_ID = "page-specific-structured-data";

    if (structuredData) {
      let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    } else {
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) existingScript.remove();
    }

    return () => {
      // Cleanup page-specific structured data on unmount if needed
      // Actually, it's better to keep it and let the next page update it
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData, lang, location.pathname]);

  return null;
};

export default SEOHead;
