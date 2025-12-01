const fr = {
  nav: {
    services: "Services IA",
    offers: "Offres",
    projects: "Cas clients",
    process: "Méthode",
    contact: "Contact",
  },
  hero: {
    role: "Créateur de solutions IA pour PME/ETI",
    title: "Rémy Poissonnier",
    tagline: "— J'automatise votre entreprise avec des agents IA prêts à vendre.",
    description:
      "Je conçois et déploie des automatisations, assistants internes et dashboards qui suppriment les tâches répétitives et sécurisent vos opérations. De l'audit gratuit au lancement, je livre des résultats mesurables en quelques semaines.",
    ctaDiscuss: "Planifier l'audit offert",
    ctaProjects: "Découvrir les offres packagées",
    tags: [
      "Agents IA internes",
      "Automatisations n8n / GPT",
      "Dashboards & reporting",
    ],
  },
  services: {
    title: "Services IA sur mesure",
    subtitle: "Interventions courtes pour livrer vite et en sécurité.",
    websites: {
      title: "Automatisation des opérations",
      description: "Workflows n8n/Make + GPT pour éliminer la saisie manuelle et les copier-coller.",
      bullets: [
        "Audit rapide des tâches répétitives",
        "MVP en 10-15 jours",
        "Suivi et optimisation continue",
      ],
    },
    webapps: {
      title: "Agents IA internes",
      description:
        "Assistants qui répondent, remplissent des fichiers et génèrent des rapports directement dans vos outils.",
      bullets: [
        "Connectés à vos données (FAQ, CRM, fichiers)",
        "Contrôles et validations humaines",
        "Onboarding équipe et garde-fous",
      ],
    },
    automation: {
      title: "Pilotage data & reporting",
      description: "Dashboards et résumés automatiques pour transformer vos données en décisions.",
      bullets: ["Agrégation Excel/CRM/API", "Alerting et monitoring en temps réel", "Documentation et transfert"],
    },
  },
  projects: {
    title: "Cas clients",
    subtitle: "Exemples d'automatisations et d'agents livrés.",
    list: [
      {
        title: "Assistant interne FAQ pour l'équipe support",
        description:
          "Agent IA connecté à une base Notion qui propose des réponses prêtes à envoyer et réduit le temps de traitement.",
        tech: "Agent GPT · Notion · API",
      },
      {
        title: "Workflow factures et relances",
        description:
          "Détection des factures dans les emails, génération des relances, mise à jour automatique dans l'outil compta/CRM.",
        tech: "n8n · OCR · CRM",
      },
      {
        title: "Rapport quotidien automatisé",
        description:
          "Agrégation des KPIs ventes/opérations et envoi d'un résumé Slack + PDF chaque matin.",
        tech: "Python · Dashboard · Slack bot",
      },
    ],
  },
  process: {
    title: "Ma méthode",
    steps: [
      {
        title: "Audit offert (30 min)",
        text: "Cartographie de 2-3 quick wins, sources de données et contraintes.",
      },
      {
        title: "Offre claire et cadrée",
        text: "Tarif fixe, garde-fous, responsables et indicateurs de succès.",
      },
      {
        title: "Prototype et tests",
        text: "Un flux ou agent fonctionnel en quelques jours, validé avec vos équipes.",
      },
      {
        title: "Déploiement & transfert",
        text: "Mise en production, monitoring, documentation et formation.",
      },
    ],
  },
  contact: {
    title: "Parlons IA pour votre entreprise",
    subtitle:
      "Premier audit IA offert : on identifie 2-3 cas d'usage à fort ROI et un workflow concret. Partagez votre contexte, je vous réponds sous 24h.",
    emailLabel: "Email",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    location:
      "Basé à Lille - disponible à distance et partout en France.",
    calendlyCta: "Planifier 30 min sur Calendly",
    calendlyNote: "Choisissez le créneau qui vous convient, confirmation immédiate.",
    form: {
      name: "Votre nom",
      email: "Votre email",
      message: "Parlez-moi de vos processus et outils",
      submit: "Envoyer ma demande",
    },
  },
  offers: {
    eyebrow: "Étape 1",
    title: "Définir 3 offres IA simples, concrètes et vendables",
    subtitle: "Les PME n'achètent pas \"l'IA\". Elles achètent un résultat. On package trois offres prêtes à vendre.",
    helper:
      "Chaque offre est pensée pour être simple à expliquer, rapide à déployer et directement liée à du revenu ou du temps gagné.",
    examplesLabel: "Exemples",
    toolsLabel: "Outils",
    priceLabel: "Prix",
    list: [
      {
        title: "Offre 1 — Automatisation simple : suppression des tâches répétitives",
        description: "Automatisations qui effacent la charge manuelle et donnent de la visibilité.",
        examples: [
          "Automatisation d'envoi d'emails / facture / devis",
          "Extraction de données Excel -> Dashboard",
          "Résumé automatique de réunions",
        ],
        tools: "n8n, GPT API",
        price: "299-499 €",
      },
      {
        title: "Offre 2 — Création d'un agent IA pour un usage interne",
        description: "Un agent focalisé qui répond, remplit des fichiers ou produit des rapports pour vos équipes.",
        examples: [
          "Assistant interne FAQ",
          "Agent qui remplit des fichiers Excel",
          "Agent qui génère des rapports journaliers",
        ],
        price: "500-1 200 €",
      },
      {
        title: "Offre 3 — Audit IA + automatisation partielle",
        description:
          "Un audit IA clé en main + un workflow livré pour prouver la valeur et augmenter le taux de signature.",
        examples: [
          "Carte claire de ce que votre entreprise peut automatiser",
          "Un workflow offert pour valider l'approche",
        ],
        price: "100 € (entrée) -> Upsell direct derrière",
      },
    ],
    auditTitle: "Audit IA offert",
    auditText:
      "Le premier audit est gratuit pour créer de la confiance et dégager un quick win. Vous repartez avec un workflow proposé et les prochaines étapes.",
  },
  footer: "Tous droits réservés.",
};

export default fr;
