import React from "react";

function Footer({ text }) {
  return (
    <footer className="border-t border-slate-200 bg-white/90 px-5 py-6 text-center text-xs text-slate-500 transition dark:border-[rgba(245,192,70,0.1)] dark:bg-transparent dark:text-ink-muted md:px-[8vw]">
      <span>
        © {new Date().getFullYear()} Rémy Poissonnier. {text}
      </span>
    </footer>
  );
}

export default Footer;
