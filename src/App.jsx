import React, { useEffect, useState } from "react";
import profile from "./assets/profil.jpg";
import logo from "./assets/logo.png";
import { translations } from "./translations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import OffersSection from "./components/OffersSection";
import ContactSection from "./components/ContactSection";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { seoContent, SITE_URL } from "./seo/metadata";
import { useSeo } from "./hooks/useSeo";

const sectionSpacing = "px-5 py-12 md:px-[8vw]";
const primaryButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-accent to-[#f1b02a] px-5 py-2.5 text-sm font-semibold text-night transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const ghostButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-accent transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-[rgba(245,192,70,0.4)] dark:hover:bg-white/5";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("theme");
    if (stored) {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "dark";
};

function App() {
  const [lang, setLang] = useState("fr");
  const [theme, setTheme] = useState(getInitialTheme);
  const t = translations[lang];
  const logoSize = 60;
  const heroRef = useScrollReveal({ threshold: 0.4 });
  const projectsRef = useScrollReveal();
  const processRef = useScrollReveal();
  const seo = seoContent[lang];
  const canonicalUrl =
    typeof window !== "undefined" ? `${SITE_URL}${window.location.pathname}` : SITE_URL;
  const shareImage = profile;
  const skipText = lang === "fr" ? "Aller au contenu" : "Skip to content";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rémy Poissonnier",
    jobTitle: lang === "fr" ? "Consultant IA & automatisation" : "AI automation consultant",
    url: canonicalUrl,
    image: shareImage,
    email: "mailto:rpoissonnier.it@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/r%C3%A9my-poissonnier-a8bb71227/",
      "https://github.com/RemyPoissonnier",
    ],
    knowsAbout: seo.keywords,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mons-en-Barœul",
      addressCountry: "France",
    },
  };
  const structuredDataJson = JSON.stringify(structuredData);

  useSeo({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    locale: seo.locale,
    url: canonicalUrl,
    image: shareImage,
  });

  const toggleLang = () => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col bg-transparent text-slate-900 transition-colors dark:text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-night"
      >
        {skipText}
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />
      <Navbar
        navLabels={t.nav}
        lang={lang}
        onToggleLang={toggleLang}
        logoSrc={logo}
        logoSize={logoSize}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main-content" className="mx-auto w-full max-w-6xl flex-1">
        {/* HERO */}
        <section
          ref={heroRef}
          id="hero"
          className="grid w-full items-center gap-10 px-5 pb-10 pt-14 text-slate-900 dark:text-ink md:px-[8vw] lg:grid-cols-[minmax(0,2fr)_minmax(260px,1.4fr)]"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-accent">{t.hero.role}</p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
              {t.hero.title}
              <span className="text-accent"> {t.hero.tagline}</span>
            </h1>
            <p className="mb-6 max-w-2xl text-base text-slate-600 dark:text-ink-muted">{t.hero.description}</p>
            <div className="mb-5 flex flex-wrap gap-3">
              <a href="#contact" className={primaryButtonClasses}>
                {t.hero.ctaDiscuss}
              </a>
              <a href="#offers" className={ghostButtonClasses}>
                {t.hero.ctaProjects}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.72rem] text-accent">
              {t.hero.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-accent dark:border-[rgba(245,192,70,0.22)] dark:bg-[rgba(6,11,25,0.9)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex items-center justify-center">
            <div className="absolute inset-[-16px] rounded-[32px] border border-slate-200 shadow-[0_0_40px_rgba(15,23,42,0.14)] dark:border-[rgba(245,192,70,0.22)] dark:shadow-[0_0_40px_rgba(245,192,70,0.16)]" />
            <img
              src={profile}
              alt="Rémy Poissonnier"
              className="relative z-10 h-56 w-56 rounded-[24px] border-2 border-white object-cover shadow-soft dark:border-[rgba(245,192,70,0.7)] md:h-64 md:w-64"
            />
          </div>
        </section>

        <OffersSection content={t.offers} sectionSpacing={sectionSpacing} />
        <ServicesSection content={t.services} sectionSpacing={sectionSpacing} />

        {/* PROJECTS */}
        <section id="projects" ref={projectsRef} className={sectionSpacing}>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{t.projects.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-ink-muted">{t.projects.subtitle}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.projects.list.map((project, index) => (
              <div
                key={index}
                className="rounded-[18px] border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-soft transition hover:-translate-y-1 hover:shadow-glow dark:border-[rgba(245,192,70,0.18)] dark:bg-[rgba(3,5,14,0.98)] dark:text-ink-muted"
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
        <section id="process" ref={processRef} className={sectionSpacing}>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{t.process.title}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <div
                key={index}
                className="rounded-[18px] border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-[rgba(245,192,70,0.18)] dark:bg-[rgba(6,10,24,0.98)] dark:text-ink-muted"
              >
                <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[0.7rem] font-bold text-night">
                  {index + 1}
                </div>
                <h3 className="text-base font-medium text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-1">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ContactSection
          content={t.contact}
          sectionSpacing={sectionSpacing}
          primaryButtonClasses={primaryButtonClasses}
        />
      </main>

      <Footer text={t.footer} />
    </div>
  );
}

export default App;
