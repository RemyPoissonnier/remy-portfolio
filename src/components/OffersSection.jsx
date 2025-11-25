import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function OffersSection({ content, sectionSpacing }) {
  const sectionRef = useScrollReveal();
  const [flippedIndex, setFlippedIndex] = React.useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyToggle = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip(index);
    }
  };

  return (
    <section id="offers" ref={sectionRef} className={sectionSpacing}>
      <p className="text-xs uppercase tracking-[0.16em] text-accent">{content.eyebrow}</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{content.title}</h2>
      <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-ink-muted">{content.subtitle}</p>
      <p className="mt-1 max-w-3xl text-sm text-slate-500 dark:text-ink-muted">{content.helper}</p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.list.map((offer, index) => {
          const isFlipped = flippedIndex === index;
          return (
            <div
              key={offer.title ?? index}
              className="h-full cursor-pointer"
              style={{ perspective: "1200px" }}
              role="button"
              tabIndex={0}
              onClick={() => toggleFlip(index)}
              onKeyDown={(event) => handleKeyToggle(event, index)}
              aria-pressed={isFlipped}
              aria-label={`${offer.title} ${isFlipped ? "price view" : "details view"}`}
            >
              <div
                className="relative h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute inset-0 flex flex-col gap-3 rounded-[18px] border border-slate-200 bg-white/90 p-5 text-sm text-slate-600 shadow-md transition hover:-translate-y-1 dark:border-[rgba(245,192,70,0.16)] dark:bg-[radial-gradient(circle_at_top,rgba(26,37,74,0.92),rgba(3,4,12,0.98))] dark:text-ink-muted"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-accent">{offer.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-ink-muted">{offer.description}</p>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-ink-muted">
                      {content.examplesLabel}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-ink-muted">
                      {offer.examples.map((item, exampleIndex) => (
                        <li key={`${offer.title}-${exampleIndex}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {offer.tools ? (
                    <p className="text-xs font-medium text-slate-500 dark:text-ink-muted">
                      {content.toolsLabel}:{" "}
                      <span className="text-slate-900 dark:text-white">{offer.tools}</span>
                    </p>
                  ) : null}
                  <p className="text-xs text-slate-400 dark:text-ink-muted">Click to see price</p>
                </div>

                <div
                  className="absolute inset-0 flex flex-col justify-center gap-3 rounded-[18px] border border-accent/60 bg-accent/10 p-5 text-center text-sm text-night shadow-lg dark:bg-accent/20"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-night/80">{content.priceLabel}</p>
                  <p className="text-3xl font-bold text-accent">{offer.price}</p>
                  {offer.tools ? (
                    <p className="text-xs font-semibold text-night/80">
                      {content.toolsLabel}: <span className="text-night">{offer.tools}</span>
                    </p>
                  ) : null}
                  <p className="text-xs text-night/70">{content.auditTitle}</p>
                  <p className="text-[0.7rem] text-night/70">Click to go back</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-[18px] border border-dashed border-accent/50 bg-accent/5 p-5 text-sm text-slate-700 dark:text-ink">
        <p className="text-base font-semibold text-accent">{content.auditTitle}</p>
        <p className="mt-1 text-slate-700 dark:text-ink">{content.auditText}</p>
      </div>
    </section>
  );
}

export default OffersSection;
