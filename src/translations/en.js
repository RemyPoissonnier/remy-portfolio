const en = {
  nav: {
    services: "Services",
    offers: "Offers",
    projects: "Case studies",
    process: "Process",
    contact: "Contact",
  },
  hero: {
    role: "AI solutions builder for SMBs",
    title: "Rémy Poissonnier",
    tagline: "— I design AI agents that make operations faster.",
    description:
      "I build and deploy automations, internal AI assistants and dashboards that erase repetitive work and secure your operations. From a free audit to launch, I deliver measurable results in weeks.",
    ctaDiscuss: "Book the free audit",
    ctaProjects: "See packaged offers",
    tags: ["Internal AI agents", "Automation (n8n + GPT)", "Dashboards & reporting"],
  },
  services: {
    title: "Custom AI services",
    subtitle: "Short, focused engagements to ship quickly and safely.",
    websites: {
      title: "Operations automation",
      description: "n8n/Make + GPT workflows that remove manual copy/paste and data entry.",
      bullets: ["Rapid audit of repetitive tasks", "MVP in 10-15 days", "Continuous tuning & support"],
    },
    webapps: {
      title: "Internal AI agents",
      description: "Assistants that answer questions, fill files and generate reports inside your tools.",
      bullets: [
        "Plugged into your data (FAQ, CRM, files)",
        "Human-in-the-loop controls",
        "Team onboarding and safeguards",
      ],
    },
    automation: {
      title: "Data & reporting",
      description: "Dashboards and automatic summaries that turn data into decisions.",
      bullets: ["Excel/CRM/API aggregation", "Real-time alerts & monitoring", "Documentation and handover"],
    },
  },
  projects: {
    title: "Case studies",
    subtitle: "Concrete automations and agents delivered for teams like yours.",
    list: [
      {
        title: "Internal FAQ assistant for support team",
        description: "AI agent connected to a Notion FAQ that drafts replies for tickets and speeds response time.",
        tech: "GPT agent · Notion · API",
      },
      {
        title: "Invoice & reminder workflow",
        description: "Detects invoices in emails, generates reminders, and updates the accounting CRM automatically.",
        tech: "n8n · OCR · CRM",
      },
      {
        title: "Automated daily report",
        description: "Aggregates sales/ops KPIs and sends a Slack summary + PDF each morning.",
        tech: "Python · Dashboard · Slack bot",
      },
    ],
  },
  process: {
    title: "Process",
    steps: [
      {
        title: "Free audit (30 min)",
        text: "We map 2-3 quick wins, align on data sources and constraints.",
      },
      {
        title: "Clear offer & scope",
        text: "Fixed pricing, safeguards, owners and success metrics.",
      },
      {
        title: "Prototype & test",
        text: "A working flow or agent in days, validated with your team.",
      },
      {
        title: "Launch & handover",
        text: "Deployment, monitoring, documentation and team training.",
      },
    ],
  },
  contact: {
    title: "Let's talk AI for your company",
    subtitle:
      "First AI audit is free: we identify 2-3 high-ROI use cases and outline a workflow. Share your context and I'll reply within 24h.",
    emailLabel: "Email",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    location: "Based in Lille - available remotely and internationally.",
    form: {
      name: "Your name",
      email: "Your email",
      message: "Tell me about your processes and tools",
      submit: "Send my request",
    },
  },
  offers: {
    eyebrow: "Step 1",
    title: "Define 3 simple, concrete AI offers",
    subtitle: "SMBs don't buy \"AI\". They buy outcomes. We package three ready-to-sell offers.",
    helper: "Each offer is designed to be simple to explain, fast to deploy, and directly tied to revenue or time saved.",
    examplesLabel: "Examples",
    toolsLabel: "Tools",
    priceLabel: "Price",
    list: [
      {
        title: "Offer 1 — Simple automation: remove repetitive tasks",
        description: "Automations that eliminate busywork and create instant visibility.",
        examples: [
          "Sending emails / invoices / quotes automatically",
          "Excel data extraction -> dashboard",
          "Automatic meeting summaries",
        ],
        tools: "n8n, GPT API",
        price: "€299-499",
      },
      {
        title: "Offer 2 — Internal AI agent",
        description: "A focused agent that answers, fills files, or produces reports for your team.",
        examples: [
          "Internal FAQ assistant",
          "Agent that fills Excel files",
          "Agent that generates daily reports",
        ],
        price: "€500-1 200",
      },
      {
        title: "Offer 3 — AI audit + partial automation",
        description:
          "A turnkey AI audit plus one workflow delivered to prove value and raise your close rate.",
        examples: [
          "Clear map of what your company can automate",
          "One workflow included to validate the approach",
        ],
        price: "€100 entry -> instant upsell behind it",
      },
    ],
    auditTitle: "Free AI audit",
    auditText:
      "The first audit is free to earn trust and uncover a quick win. You leave with a suggested workflow and next steps.",
  },
  footer: "All rights reserved.",
};

export default en;
