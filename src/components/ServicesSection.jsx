import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ServicesSection({ content, sectionSpacing }) {
  const cards = [content.websites, content.webapps, content.automation];
  const sectionRef = useScrollReveal();

  return (
    <section id="services" ref={sectionRef} className={sectionSpacing}>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{content.title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-ink-muted">{content.subtitle}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={card.title ?? index}
            className="rounded-[18px] border border-slate-200 bg-white/90 p-5 text-sm text-slate-600 shadow-soft transition hover:-translate-y-1 hover:shadow-glow dark:border-[rgba(245,192,70,0.14)] dark:bg-[radial-gradient(circle_at_top,rgba(26,37,74,0.9),rgba(3,4,12,0.98))] dark:text-ink-muted"
          >
            <h3 className="text-lg font-semibold text-accent">{card.title}</h3>
            <p className="mt-2">{card.description}</p>
            <ul className="mt-3 list-disc space-y-1 text-[0.85rem] text-slate-600 marker:text-accent dark:text-ink-muted">
              {card.bullets.map((item, bulletIndex) => (
                <li key={`${card.title}-${bulletIndex}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
