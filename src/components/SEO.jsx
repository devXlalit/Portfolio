// components/SEO.jsx
import { useEffect } from "react";

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Dynamically update the page title
    document.title = title;

    // Helper function to set or create a meta tag
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Update description and keywords meta tags
    setMeta("description", description);
    setMeta("keywords", keywords);

    // Clean up meta tags on component unmount to prevent duplicates
    return () => {
      const descriptionTag = document.querySelector('meta[name="description"]');
      const keywordsTag = document.querySelector('meta[name="keywords"]');
      if (descriptionTag) document.head.removeChild(descriptionTag);
      if (keywordsTag) document.head.removeChild(keywordsTag);
    };
  }, [title, description, keywords]);

  return null;
};

export default SEO;
