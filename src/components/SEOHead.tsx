import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://tmtransferlux.it/favicon.png",
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute("content", ogImage);
    }

    // Add canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    return () => {
      // Cleanup structured data on unmount
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null;
};

export default SEOHead;
