import { useEffect } from "react";

const upsertMeta = ({ selector, attr = "name", attrValue, content }) => {
  if (typeof document === "undefined") return;
  let element = document.head.querySelector(`${selector}[${attr}="${attrValue}"]`);
  if (!element) {
    element = document.createElement(selector.replace(/[.]/g, ""));
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

export function useSeo({ title, description, keywords = [], locale, url, image }) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;
    document.documentElement.lang = locale?.slice(0, 2) || "en";

    upsertMeta({ selector: "meta", attrValue: "description", content: description });
    upsertMeta({ selector: "meta", attrValue: "keywords", content: keywords.join(", ") });
    upsertMeta({ selector: "meta", attr: "name", attrValue: "robots", content: "index,follow" });

    upsertMeta({ selector: "meta", attr: "property", attrValue: "og:title", content: title });
    upsertMeta({ selector: "meta", attr: "property", attrValue: "og:description", content: description });
    upsertMeta({ selector: "meta", attr: "property", attrValue: "og:type", content: "website" });
    upsertMeta({ selector: "meta", attr: "property", attrValue: "og:url", content: url });
    upsertMeta({ selector: "meta", attr: "property", attrValue: "og:image", content: image });
    upsertMeta({ selector: "meta", attr: "property", attrValue: "og:locale", content: locale });

    upsertMeta({ selector: "meta", attr: "name", attrValue: "twitter:card", content: "summary_large_image" });
    upsertMeta({ selector: "meta", attr: "name", attrValue: "twitter:title", content: title });
    upsertMeta({ selector: "meta", attr: "name", attrValue: "twitter:description", content: description });
    upsertMeta({ selector: "meta", attr: "name", attrValue: "twitter:image", content: image });

    const canonicalSelector = "link[rel=\"canonical\"]";
    let canonical = document.head.querySelector(canonicalSelector);
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [description, image, keywords, locale, title, url]);
}
