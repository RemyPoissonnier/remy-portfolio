import { useEffect, useRef } from "react";

export function useScrollReveal({ threshold = 0.2, rootMargin = "0px", once = false } = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) {
      return;
    }

    const node = elementRef.current;
    node.classList.add("scroll-fade");

    let lastScrollY = window.scrollY;
    let direction = "down";

    const handleScroll = () => {
      const current = window.scrollY;
      direction = current > lastScrollY ? "down" : "up";
      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            node.classList.remove("fade-out-top");
            if (once) {
              observer.unobserve(node);
            }
          } else if (direction === "up") {
            node.classList.remove("is-visible");
            node.classList.add("fade-out-top");
          }
        });
      },
      { rootMargin, threshold }
    );

    const timer = window.setTimeout(() => observer.observe(node), 120);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [once, rootMargin, threshold]);

  return elementRef;
}
