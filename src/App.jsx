import React, { useState } from "react";
import profile from "./assets/profil.jpg";
import logo from "./assets/logo.png";
import { translations } from "./translations";

const sectionSpacing = "px-5 py-12 md:px-[8vw]";
const primaryButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-accent to-[#f1b02a] px-5 py-2.5 text-sm font-semibold text-night shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const ghostButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(245,192,70,0.4)] px-5 py-2.5 text-sm font-medium text-accent transition hover:-translate-y-0.5 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function App() {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];
  const logoSize = 60;

  const toggleLang = () => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <div className="flex min-h-screen flex-col bg-transparent text-ink">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[rgba(245,192,70,0.12)] bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.86),rgba(5,8,22,0.94))] px-5 py-4 backdrop-blur-2xl md:px-[8vw]">
        <div className="flex items-center gap-3 font-semibold tracking-[0.12em] text-accent">
          <img
            src={logo}
            width={logoSize + 10}
            height={logoSize}
            alt="logo"
            className="h-[60px] w-[70px] object-contain"
          />
          <span className="hidden text-sm uppercase md:inline">RP</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm md:gap-6">
          <a href="#services" className="text-ink-muted transition duration-200 hover:-translate-y-0.5 hover:text-accent">
            {t.nav.services}
          </a>
          <a href="#projects" className="text-ink-muted transition duration-200 hover:-translate-y-0.5 hover:text-accent">
            {t.nav.projects}
          </a>
          <a href="#process" className="text-ink-muted transition duration-200 hover:-translate-y-0.5 hover:text-accent">
            {t.nav.process}
          </a>
          <a href="#contact" className="rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition hover:-translate-y-0.5">
            {t.nav.contact}
          </a>
          <button
            className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-ink transition hover:border-accent hover:text-accent"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1">
        {/* HERO */}
        <section
          id="hero"
          className="grid w-full items-center gap-10 px-5 pb-10 pt-14 md:px-[8vw] lg:grid-cols-[minmax(0,2fr)_minmax(260px,1.4fr)]"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-accent">{t.hero.role}</p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {t.hero.title}
              <span className="text-accent"> {t.hero.tagline}</span>
            </h1>
            <p className="mb-6 max-w-2xl text-base text-ink-muted">{t.hero.description}</p>
            <div className="mb-5 flex flex-wrap gap-3">
              <a href="#contact" className={primaryButtonClasses}>
                {t.hero.ctaDiscuss}
              </a>
              <a href="#projects" className={ghostButtonClasses}>
                {t.hero.ctaProjects}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.72rem] text-accent">
              {t.hero.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[rgba(245,192,70,0.22)] bg-[rgba(6,11,25,0.9)] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex items-center justify-center">
            <div className="absolute inset-[-16px] rounded-[32px] border border-[rgba(245,192,70,0.22)] shadow-[0_0_40px_rgba(245,192,70,0.16)]" />
            <img
              src={profile}
              alt="Rémy Poissonnier"
              className="relative z-10 h-56 w-56 rounded-[24px] border-2 border-[rgba(245,192,70,0.7)] object-cover shadow-soft md:h-64 md:w-64"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className={sectionSpacing}>
          <h2 className="text-3xl font-semibold">{t.services.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">{t.services.subtitle}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Websites */}
            <div className="rounded-[18px] border border-[rgba(245,192,70,0.14)] bg-[radial-gradient(circle_at_top,rgba(26,37,74,0.9),rgba(3,4,12,0.98))] p-5 text-sm text-ink-muted shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <h3 className="text-lg font-semibold text-accent">{t.services.websites.title}</h3>
              <p className="mt-2">{t.services.websites.description}</p>
              <ul className="mt-3 list-disc space-y-1 text-[0.85rem] text-ink-muted marker:text-accent">
                {t.services.websites.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[18px] border border-[rgba(245,192,70,0.14)] bg-[radial-gradient(circle_at_top,rgba(26,37,74,0.9),rgba(3,4,12,0.98))] p-5 text-sm text-ink-muted shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <h3 className="text-lg font-semibold text-accent">{t.services.webapps.title}</h3>
              <p className="mt-2">{t.services.webapps.description}</p>
              <ul className="mt-3 list-disc space-y-1 text-[0.85rem] text-ink-muted marker:text-accent">
                {t.services.webapps.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[18px] border border-[rgba(245,192,70,0.14)] bg-[radial-gradient(circle_at_top,rgba(26,37,74,0.9),rgba(3,4,12,0.98))] p-5 text-sm text-ink-muted shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <h3 className="text-lg font-semibold text-accent">{t.services.automation.title}</h3>
              <p className="mt-2">{t.services.automation.description}</p>
              <ul className="mt-3 list-disc space-y-1 text-[0.85rem] text-ink-muted marker:text-accent">
                {t.services.automation.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={sectionSpacing}>
          <h2 className="text-3xl font-semibold">{t.projects.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">{t.projects.subtitle}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.projects.list.map((project, index) => (
              <div
                key={index}
                className="rounded-[18px] border border-[rgba(245,192,70,0.18)] bg-[rgba(3,5,14,0.98)] p-5 text-sm text-ink-muted shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
              >
                <h3 className="text-lg font-semibold text-accent">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <span className="mt-3 inline-block text-xs uppercase tracking-wide text-accent">
                  {project.tech}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className={sectionSpacing}>
          <h2 className="text-3xl font-semibold">{t.process.title}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <div
                key={index}
                className="rounded-[18px] border border-[rgba(245,192,70,0.18)] bg-[rgba(6,10,24,0.98)] p-4 text-sm text-ink-muted"
              >
                <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[0.7rem] font-bold text-night">
                  {index + 1}
                </div>
                <h3 className="text-base font-medium text-white">{step.title}</h3>
                <p className="mt-1">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${sectionSpacing} pb-14`}>
          <h2 className="text-3xl font-semibold">{t.contact.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">{t.contact.subtitle}</p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,1.6fr)]">
            <div className="space-y-3 text-sm text-ink-muted">
              <p className="flex flex-wrap gap-2">
                <strong>{t.contact.emailLabel} :</strong>{" "}
                <a href="mailto:rpoissonnier.it@gmail.com" className="text-accent hover:underline">
                  rpoissonnier.it@gmail.com
                </a>
              </p>
              <p className="flex flex-wrap gap-2">
                <strong>{t.contact.linkedInLabel} :</strong>{" "}
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
                <strong>{t.contact.githubLabel} :</strong>{" "}
                <a
                  href="https://github.com/RemyPoissonnier"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p className="text-white">{t.contact.location}</p>
            </div>

            <form
              className="flex flex-col gap-3 rounded-[18px] border border-[rgba(245,192,70,0.22)] bg-[rgba(3,5,12,0.98)] p-5 text-sm shadow-soft"
              action="mailto:rpoissonnier.it@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                required
                className="w-full rounded-lg border border-white/20 bg-[#040610] px-3 py-2 text-ink placeholder:text-ink-muted transition focus:border-accent focus:bg-night focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                required
                className="w-full rounded-lg border border-white/20 bg-[#040610] px-3 py-2 text-ink placeholder:text-ink-muted transition focus:border-accent focus:bg-night focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <textarea
                name="message"
                rows="4"
                placeholder={t.contact.form.message}
                required
                className="w-full rounded-lg border border-white/20 bg-[#040610] px-3 py-2 text-ink placeholder:text-ink-muted transition focus:border-accent focus:bg-night focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button type="submit" className={`${primaryButtonClasses} w-full`}>
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(245,192,70,0.1)] px-5 py-6 text-center text-xs text-ink-muted md:px-[8vw]">
        <span>
          © {new Date().getFullYear()} Rémy Poissonnier. {t.footer}
        </span>
      </footer>
    </div>
  );
}

export default App;
