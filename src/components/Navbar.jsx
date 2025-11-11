import React from "react";

function Navbar({
  navLabels,
  lang,
  onToggleLang,
  logoSrc,
  logoSize = 60,
  theme = "dark",
  onToggleTheme,
}) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-4 text-slate-900 shadow-lg backdrop-blur-xl transition dark:border-[rgba(245,192,70,0.12)] dark:bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.86),rgba(5,8,22,0.94))] dark:text-ink md:px-[8vw]">
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
