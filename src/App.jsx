import React from "react";
import "./App.css";
import profile from "./assets/profil.jpg"; // Mets ta photo ici

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="logo">RP.</div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Projets</a>
          <a href="#process">Méthode</a>
          <a href="#contact" className="nav-cta">Me contacter</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Développeur Freelance</p>
            <h1>
              Rémy Poissonnier
              <span className="accent"> — Création de solutions web modernes.</span>
            </h1>
            <p className="subtitle">
              J’accompagne entreprises, marques et indépendants dans la création de sites web
              élégants, performants et sécurisés, ainsi que d’outils sur mesure en
              <strong> React</strong>, <strong>.NET</strong> et <strong>Python</strong>.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Discuter de votre projet</a>
              <a href="#projects" className="btn-ghost">Voir mes réalisations</a>
            </div>
            <div className="hero-tags">
              <span>Sites vitrines premium</span>
              <span>Applications web & mobile</span>
              <span>Automatisations Python</span>
            </div>
          </div>
          <div className="hero-photo-wrapper">
            <div className="hero-orbit"></div>
            <img src={profile} alt="Rémy Poissonnier" className="hero-photo" />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <h2>Services</h2>
          <p className="section-subtitle">
            Des prestations pensées pour délivrer vite, proprement, et avec un suivi pro.
          </p>
          <div className="cards-grid">
            <div className="card">
              <h3>Site vitrine sur mesure</h3>
              <p>
                Création de sites modernes, responsives, optimisés SEO, pour présenter votre activité
                de manière claire et professionnelle.
              </p>
              <ul>
                <li>Design personnalisé</li>
                <li>Adapté mobile / tablette</li>
                <li>Hébergement & déploiement pris en charge</li>
              </ul>
            </div>
            <div className="card">
              <h3>Application web & back-end</h3>
              <p>
                Développement full stack avec React & .NET / Node pour vos portails, tableaux de bord,
                intranets ou outils métier.
              </p>
              <ul>
                <li>Architektur propre & scalable</li>
                <li>API sécurisées</li>
                <li>Intégration à vos systèmes existants</li>
              </ul>
            </div>
            <div className="card">
              <h3>Automatisation & IA légère</h3>
              <p>
                Scripts Python et intégrations IA pour gagner du temps : reporting, traitement de données,
                emails, assistants internes.
              </p>
              <ul>
                <li>Analyse de besoin</li>
                <li>Prototype rapide</li>
                <li>Maintenance & évolution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2>Projets sélectionnés</h2>
          <p className="section-subtitle">
            Un aperçu concret de ce que je peux mettre en place pour vous.
          </p>
          <div className="cards-grid">
            <div className="card card-outline">
              <h3>Site d’association sportive</h3>
              <p>
                Site React moderne pour une association sportive : calendrier, actualités,
                inscriptions, gestion simplifiée du contenu.
              </p>
              <span className="tech-tags">React · Responsive · UX orientée membres</span>
            </div>
            <div className="card card-outline">
              <h3>Site e-commerce custom</h3>
              <p>
                Front React + API pour présenter des produits, gérer un catalogue et diriger les
                clients vers le canal d’achat adapté.
              </p>
              <span className="tech-tags">React · MongoDB · API</span>
            </div>
            <div className="card card-outline">
              <h3>Automatisations Python</h3>
              <p>
                Scripts pour générer des rapports, traiter des fichiers Excel, envoyer des emails
                automatiques et réduire le temps manuel.
              </p>
              <span className="tech-tags">Python · Automatisation</span>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <h2>Ma méthode</h2>
          <div className="process-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Échange</h3>
              <p>Compréhension de vos objectifs, de votre audience et de votre budget.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Proposition claire</h3>
              <p>Un plan simple avec délais, fonctionnalités, tarif fixe et sans surprise.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Conception & développement</h3>
              <p>Livraisons intermédiaires pour valider le design et les fonctionnalités.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Déploiement & support</h3>
              <p>Mise en ligne, optimisation, accompagnement après livraison.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <h2>Parlons de votre projet</h2>
          <p className="section-subtitle">
            Expliquez-moi votre besoin en quelques lignes, je vous réponds avec une proposition personnalisée.
          </p>
          <div className="contact-wrapper">
            <div className="contact-text">
              <p><strong>Email :</strong> <a href="mailto:rpoissonnier.it@gmail.com">rpoissonnier.it@gmail.com</a></p>
              <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/r%C3%A9my-poissonnier-a8bb71227/" target="_blank" rel="noreferrer">Profil LinkedIn</a></p>
              <p><strong>GitHub :</strong> <a href="https://github.com/RemyPoissonnier" target="_blank" rel="noreferrer">RemyPoissonnier</a></p>
              <p>
                Basé à Mons-en-Barœul – disponible pour missions à distance et dans toute la France.
              </p>
            </div>
            <form
              className="contact-form"
              action="mailto:rpoissonnier.it@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input type="text" name="name" placeholder="Votre nom" required />
              <input type="email" name="email" placeholder="Votre email" required />
              <textarea name="message" rows="4" placeholder="Parlez-moi de votre projet" required />
              <button type="submit" className="btn-primary full-width">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Rémy Poissonnier. Tous droits réservés.</span>
      </footer>
    </div>
  );
}

export default App;
