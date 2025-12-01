import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ContactSection({ content, sectionSpacing, primaryButtonClasses }) {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" ref={sectionRef} className={`${sectionSpacing} pb-14`}>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{content.title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-ink-muted">{content.subtitle}</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,1.6fr)]">
        <div className="space-y-3 text-sm text-slate-600 dark:text-ink-muted">
          <p className="flex flex-wrap gap-2">
            <strong>{content.emailLabel} :</strong>{" "}
            <a href="mailto:rpoissonnier.it@gmail.com" className="text-accent hover:underline">
              rpoissonnier.it@gmail.com
            </a>
          </p>
          <p className="flex flex-wrap gap-2">
            <strong>{content.linkedInLabel} :</strong>{" "}
            <a
              href="https://www.linkedin.com/in/r%C3%A9my-poissonnier-a8bb71227/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex flex-wrap gap-2">
            <strong>{content.githubLabel} :</strong>{" "}
            <a
              href="https://github.com/RemyPoissonnier"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="text-slate-900 dark:text-white">{content.location}</p>
          <div className="pt-2">
            <a
              href="https://calendly.com/rpoissonnier-it/30min"
              target="_blank"
              rel="noreferrer"
              className={`${primaryButtonClasses} w-full sm:w-auto`}
            >
              {content.calendlyCta}
            </a>
            <p className="mt-2 text-xs text-slate-500 dark:text-ink-muted">{content.calendlyNote}</p>
          </div>
        </div>

        <form
          className="flex flex-col gap-3 rounded-[18px] border border-slate-200 bg-white p-5 text-sm shadow-soft dark:border-[rgba(245,192,70,0.22)] dark:bg-[rgba(3,5,12,0.98)]"
          action="mailto:rpoissonnier.it@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder={content.form.name}
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-white/20 dark:bg-[#040610] dark:text-ink dark:placeholder:text-ink-muted dark:focus:bg-night dark:focus:ring-accent/30"
          />
          <input
            type="email"
            name="email"
            placeholder={content.form.email}
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-white/20 dark:bg-[#040610] dark:text-ink dark:placeholder:text-ink-muted dark:focus:bg-night dark:focus:ring-accent/30"
          />
          <textarea
            name="message"
            rows="4"
            placeholder={content.form.message}
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-white/20 dark:bg-[#040610] dark:text-ink dark:placeholder:text-ink-muted dark:focus:bg-night dark:focus:ring-accent/30"
          />
          <button type="submit" className={`${primaryButtonClasses} w-full`}>
            {content.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
