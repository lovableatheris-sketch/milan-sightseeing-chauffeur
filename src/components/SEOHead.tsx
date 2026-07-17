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
  ogImage = "https://nexitus.it/og-image.jpg",
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        const [type, value] = attribute.split("=");
        meta.setAttribute(type === "name" ? "name" : "property", value.replace(/"/g, ""));
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Update meta description
    updateMetaTag('meta[name="description"]', 'name="description"', description);

    // Update meta keywords
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', 'name="keywords"', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'property="og:title"', title);
    updateMetaTag('meta[property="og:description"]', 'property="og:description"', description);
    updateMetaTag('meta[property="og:image"]', 'property="og:image"', ogImage);

    // Update og:url dynamically
    if (canonicalUrl) {
      updateMetaTag('meta[property="og:url"]', 'property="og:url"', canonicalUrl);
    }

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:title"]', 'name="twitter:title"', title);
    updateMetaTag('meta[name="twitter:description"]', 'name="twitter:description"', description);
    updateMetaTag('meta[name="twitter:image"]', 'name="twitter:image"', ogImage);

    // Update Twitter URL
    if (canonicalUrl) {
      let twitterUrl = document.querySelector('meta[name="twitter:url"]');
      if (!twitterUrl) {
        twitterUrl = document.createElement("meta");
        twitterUrl.setAttribute("name", "twitter:url");
        document.head.appendChild(twitterUrl);
      }
      twitterUrl.setAttribute("content", canonicalUrl);
    }

    // Add/update canonical URL
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

    // Add page-specific structured data
    if (structuredData) {
      // Remove existing page-specific structured data
      const existingPageSchema = document.querySelector('script[data-page-schema="true"]');
      if (existingPageSchema) {
        existingPageSchema.remove();
      }

      // Add new page-specific structured data
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-page-schema", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup page-specific structured data on unmount
      const pageSchema = document.querySelector('script[data-page-schema="true"]');
      if (pageSchema) {
        pageSchema.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null;
};

export default SEOHead;
