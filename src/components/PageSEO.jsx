import { useEffect } from "react";

function PageSEO({
  title,
  description,
  canonical
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");

        if (selector.includes('name="')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) element.setAttribute("name", name);
        }

        if (selector.includes('property="')) {
          const property = selector.match(/property="([^"]+)"/)?.[1];
          if (property) element.setAttribute("property", property);
        }

        document.head.appendChild(element);
      }

      element.setAttribute(attribute, value);
    };

    setMeta(
      'meta[name="description"]',
      "content",
      description
    );

    setMeta(
      'meta[property="og:title"]',
      "content",
      title
    );

    setMeta(
      'meta[property="og:description"]',
      "content",
      description
    );

    setMeta(
      'meta[property="og:url"]',
      "content",
      canonical
    );

    setMeta(
      'meta[name="twitter:title"]',
      "content",
      title
    );

    setMeta(
      'meta[name="twitter:description"]',
      "content",
      description
    );

    let canonicalLink =
      document.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink =
        document.createElement("link");

      canonicalLink.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute(
      "href",
      canonical
    );
  }, [title, description, canonical]);

  return null;
}

export default PageSEO;