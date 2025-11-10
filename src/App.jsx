import React, { useState } from "react";
import "./css/App.css";
import profile from "./assets/profil.jpg";
import logo from "./assets/logo.png"
import { translations } from "./translations";

function App() {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];
  const logo_size = 60

  const toggleLang = () => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} width={logo_size +10} height={logo_size} alt="logo"></img></div>
        <nav className="nav-links">
          <a href="#services">{t.nav.services}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#contact" className="nav-cta">
            {t.nav.contact}
          </a>
          <button className="lang-switch" onClick={toggleLang}>
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-text">
            <p className="eyebrow">{t.hero.role}</p>
            <h1>
              {t.hero.title}
              <span className="accent"> {t.hero.tagline}</span>
            </h1>
            <p className="subtitle">{t.hero.description}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                {t.hero.ctaDiscuss}
              </a>
              <a href="#projects" className="btn-ghost">
                {t.hero.ctaProjects}
              </a>
            </div>
            <div className="hero-tags">
              {t.hero.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="hero-orbit"></div>
            <img
              src={profile}
              alt="Rémy Poissonnier"
              className="hero-photo"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <h2>{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>

          <div className="cards-grid">
            {/* Websites */}
            <div className="card">
              <h3>{t.services.websites.title}</h3>
              <p>{t.services.websites.description}</p>
              <ul>
                {t.services.websites.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Web Apps */}
            <div className="card">
              <h3>{t.services.webapps.title}</h3>
              <p>{t.services.webapps.description}</p>
              <ul>
                {t.services.webapps.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Automation */}
            <div className="card">
              <h3>{t.services.automation.title}</h3>
              <p>{t.services.automation.description}</p>
              <ul>
                {t.services.automation.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2>{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>

          <div className="cards-grid">
            {t.projects.list.map((project, index) => (
              <div key={index} className="card card-outline">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="tech-tags">{project.tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <h2>{t.process.title}</h2>

          <div className="process-grid">
            {t.process.steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <h2>{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>

          <div className="contact-wrapper">
            <div className="contact-text">
              <p>
                <strong>{t.contact.emailLabel} :</strong>{" "}
                <a href="mailto:rpoissonnier.it@gmail.com">
                  rpoissonnier.it@gmail.com
                </a>
              </p>
              <p>
                <strong>{t.contact.linkedInLabel} :</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/r%C3%A9my-poissonnier-a8bb71227/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <strong>{t.contact.githubLabel} :</strong>{" "}
                <a
                  href="https://github.com/RemyPoissonnier"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>{t.contact.location}</p>
            </div>

            <form
              className="contact-form"
              action="mailto:rpoissonnier.it@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder={t.contact.form.message}
                required
              />
              <button type="submit" className="btn-primary full-width">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Rémy Poissonnier. {t.footer}
        </span>
      </footer>
    </div>
  );
}

export default App;
