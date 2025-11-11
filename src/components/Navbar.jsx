import React, { useEffect, useState } from "react";

function Navbar({
  navLabels,
  lang,
  onToggleLang,
  logoSrc,
  logoSize = 60,
  theme = "dark",
  onToggleTheme,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = [
    "sticky top-0 z-40 flex items-center justify-between border-b transition-all duration-300",
    "backdrop-blur-md bg-white/5 text-slate-900 dark:bg-night/50 dark:text-ink",
    scrolled ? "py-1 border-white/30 shadow-lg shadow-black/10 dark:border-white/10" : "py-4 border-transparent",
  ].join(" ");

  return (
    <header className={`${headerClasses} px-5 md:px-[8vw]`}>
      <div className="flex items-center gap-3 font-semibold tracking-[0.12em] text-accent">
        <img
          src={logoSrc}
          width={logoSize + 10}
          height={logoSize}
          alt="logo"
          className="h-[60px] w-[70px] object-contain"
        />
        <span className="hidden text-sm uppercase md:inline">RP</span>
      </div>
      <nav className="flex flex-wrap items-center gap-4 text-sm md:gap-6">
        <a
          href="#services"
          className="text-slate-600 transition duration-200 hover:-translate-y-0.5 hover:text-accent dark:text-ink-muted"
        >
          {navLabels.services}
        </a>
        <a
          href="#projects"
          className="text-slate-600 transition duration-200 hover:-translate-y-0.5 hover:text-accent dark:text-ink-muted"
        >
          {navLabels.projects}
        </a>
        <a
          href="#process"
          className="text-slate-600 transition duration-200 hover:-translate-y-0.5 hover:text-accent dark:text-ink-muted"
        >
          {navLabels.process}
        </a>
        <a
          href="#contact"
          className="rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition hover:-translate-y-0.5"
        >
          {navLabels.contact}
        </a>
        <button
          className="rounded-full border border-slate-300 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:text-ink"
          onClick={onToggleLang}
          aria-label="Toggle language"
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
        <button
          className="rounded-full border border-slate-300 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:text-ink"
          onClick={onToggleTheme}
          aria-pressed={theme === "dark"}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? "LIGHT" : "DARK"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
