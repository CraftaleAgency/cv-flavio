// Tutti i contenuti del CV. Modifica qui: il layout in app/page.tsx si aggiorna da solo.

export type Link = { label: string; href: string };

export type Experience = {
  role: string;
  company: string;
  companyHref?: string;
  note?: string;
  period: string;
  place: string;
  intro?: string;
  bullets: { lead?: string; text: string }[];
  stack?: string[];
};

export type Project = {
  name: string;
  href?: string;
  context: string;
  period: string;
  award?: string;
  text: string;
  bullets?: { lead?: string; text: string }[];
};

export type Education = {
  title: string;
  school: string;
  schoolHref?: string;
  period: string;
  text?: string;
};

export const cv = {
  name: "Flavio Biondo",
  title: "AI Engineer · Full-Stack Software Engineer",
  tagline: "Java enterprise per la PA · LLM self-hosted · Agenti AI",
  photo: "/foto.jpg",

  contacts: [
    { label: "f.biondo2000@libero.it", href: "mailto:f.biondo2000@libero.it" },
    { label: "+39 380 130 6840", href: "tel:+393801306840" },
    { label: "github.com/fbiondo00", href: "https://github.com/fbiondo00" },
    { label: "linkedin.com/in/flavio-biondo", href: "https://www.linkedin.com/in/flavio-biondo/" },
    { label: "craftale.it", href: "https://craftale.it/" },
  ] satisfies Link[],
  location: "Roma (RM)",
  license: "Patente A2, B",

  profile:
    "Software Engineer con esperienza su backend Java a microservizi per clienti istituzionali (INPS, Ministero della Cultura) e AI Engineer con un'infrastruttura LLM self-hosted in produzione. Progetto e porto in esercizio applicazioni basate su agenti, RAG e modelli open-source privati, con attenzione a privacy, osservabilità e supervisione umana. Come AI Ambassador individuo use case di intelligenza artificiale da integrare in sistemi enterprise esistenti.",

  stats: [
    { value: "6", label: "bounty vinti in 3 hackathon internazionali" },
    { value: "20+", label: "modelli LLM open-source su GPU propria" },
    { value: "400+", label: "richieste LLM al giorno sull'infrastruttura self-hosted" },
    { value: "79", label: "container Docker in produzione, zero porte esposte" },
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "SoftStrategy",
      companyHref: "https://www.softstrategy.it/",
      period: "01/2026 – presente",
      place: "Roma",
      intro:
        "Microservizi backend Java per clienti istituzionali, con pipeline CI/CD su Microsoft Azure e metodologia Agile.",
      bullets: [
        {
          lead: "INPS",
          text: "Sviluppo di processi batch per l'elaborazione di dati su larga scala, con focus su affidabilità e performance dei job schedulati.",
        },
        {
          lead: "Ministero della Cultura",
          text: "Manutenzione evolutiva e nuove funzionalità backend su sistemi in esercizio, garantendo stabilità e continuità operativa.",
        },
        {
          lead: "AI Ambassador",
          text: "Individuo e propongo applicazioni di AI per i processi del progetto MIC: automazione documentale, ricerca semantica, assistenza agli operatori e modernizzazione incrementale delle applicazioni.",
        },
        {
          text: "API REST, gestione database e supporto a deploy e monitoraggio in team cross-funzionali.",
        },
      ],
      stack: ["Java", "Spring Boot", "REST", "SQL", "Azure DevOps", "Agile"],
    },
    {
      role: "Co-fondatore · AI & Full-Stack Engineer",
      company: "Craftale",
      companyHref: "https://craftale.it/",
      note: "web agency, freelance",
      period: "06/2025 – presente",
      place: "Roma",
      intro:
        "Agenzia gestita con un socio: sono responsabile di tutto lo stack AI e dell'infrastruttura, oltre allo sviluppo full-stack.",
      bullets: [
        {
          text: "7 progetti per clienti (piattaforma di voucher Horizon, CRM Lime, e-commerce, siti aziendali) e 5 prodotti interni in Next.js, TypeScript e Supabase.",
        },
        {
          lead: "CraftLead",
          text: "piattaforma multi-agente (4 agenti, motore di matching a 6 segnali) che gestisce il funnel di acquisizione clienti dell'agenzia.",
        },
        {
          lead: "Stack LLM",
          text: "gateway LiteLLM compatibile con le API OpenAI, API di chat Onyx e tracciamento di ogni chiamata con Langfuse.",
        },
        {
          lead: "Infrastruttura",
          text: "rete Tailscale di 3 nodi. Server GPU (RTX 3060) con 20+ modelli open-source via Ollama e llama.cpp; nodi VPS con circa 40 servizi in 79 container Docker gestiti da Dokploy. Nessuna porta pubblica grazie a Cloudflare Tunnel; monitoraggio con Prometheus, Grafana e DCGM.",
        },
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "LiteLLM", "Langfuse", "Ollama", "Docker"],
    },
    {
      role: "Software Engineer",
      company: "Sistemi Informativi, an IBM Company",
      companyHref: "https://www.sistinf.it/",
      note: "tramite Open Job Metis",
      period: "10/2024 – 12/2025",
      place: "Roma",
      bullets: [
        {
          lead: "Backend",
          text: "Java e Spring Boot su architettura a microservizi: endpoint REST, logiche di business, test JUnit.",
        },
        {
          lead: "Frontend",
          text: "componenti React con test unitari; refactoring UX/UI in Angular.",
        },
        {
          lead: "Dati e DevOps",
          text: "query SQL complesse e gestione delle transazioni; pipeline CI/CD per build, test e deploy automatizzati.",
        },
        { text: "Code review, debugging e documentazione tecnica in team." },
      ],
      stack: ["Java", "Spring Boot", "React", "Angular", "SQL", "CI/CD"],
    },
  ] satisfies Experience[],

  skills: [
    {
      group: "AI & LLM",
      items: ["Agenti AI e multi-agente", "RAG", "Ricerca semantica", "MCP", "LiteLLM", "Langfuse", "Ollama", "llama.cpp"],
    },
    {
      group: "Backend",
      items: ["Java 8 / 11", "Spring Boot", "Spring Data JPA", "REST", "Microservizi", "Batch", "JUnit"],
    },
    { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Angular"] },
    { group: "Dati", items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB"] },
    {
      group: "DevOps",
      items: ["Docker", "Dokploy", "CI/CD Azure", "Linux", "Cloudflare Tunnel", "Tailscale", "Prometheus", "Grafana"],
    },
    { group: "Web3", items: ["Solidity", "Foundry", "Hedera", "Base", "1inch SDK", "ENS"] },
    { group: "Altri linguaggi", items: ["Python", "C", "C++", "Bash"] },
  ],

  languages: [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "B2" },
    { name: "Spagnolo", level: "B2" },
  ],

  awards: [
    {
      event: "NapulETH · CTRL Shift 2026",
      result: "2 bounty: Solana, Dedaub",
      href: "https://taikai.network/napulETH/hackathons/ctrl-shift-2026/projects/cmqdqk34n00g4y8owt00ox1qw/idea",
    },
    {
      event: "ETHGlobal Cannes 2026",
      result: "Bounty Hedera: AI & Agentic Payments",
      href: "https://ethglobal.com/showcase/polyagents-gt9jt",
    },
    { event: "ETHRome 2025", result: "3 bounty su 3", href: "https://1balancer-ethrome.vercel.app/" },
  ],

  projects: [
    {
      name: "TrustLayer",
      href: "https://taikai.network/napulETH/hackathons/ctrl-shift-2026/projects/cmqdqk34n00g4y8owt00ox1qw/idea",
      context: "NapulETH · CTRL Shift",
      period: "06/2026",
      award: "2 bounty: Solana + Dedaub",
      text: "Motore di trust scoring (da A+ a F) per gli smart contract usati da agenti AI.",
      bullets: [
        {
          lead: "Pipeline in 8 fasi",
          text: "analisi statica (Slither), rischio token (Dedaub TokIn), mappatura dei permessi, storico transazioni, approvazioni ERC-20, analisi dell'intento con LLM (Gemma 4).",
        },
        {
          lead: "Architettura",
          text: "core condiviso @trustlayer/core con client leggeri: web app Next.js, server MCP per Claude Code e CLI.",
        },
        {
          lead: "On-chain",
          text: "smart contract Solidity e Foundry con token $TRUST e gateway di pagamento a crediti.",
        },
      ],
    },
    {
      name: "PolyAgents",
      href: "https://ethglobal.com/showcase/polyagents-gt9jt",
      context: "ETHGlobal Cannes",
      period: "04/2026",
      award: "Bounty Hedera: AI & Agentic Payments",
      text: "Vault di trading autonomo guidato da AI sui mercati binari Polymarket «BTC Up or Down» a 5 minuti: market making passivo che cattura lo spread, con direzione e confidenza decise da un LLM (Gemini 2.0 Flash Lite).",
      bullets: [
        {
          lead: "Motore",
          text: "ciclo modulare in 13 step ogni 5 secondi: scoperta del mercato (Gamma API), analisi AI, ordini, rilevamento dei fill con simulatore deterministico sull'order book reale, riconciliazione e PnL. Tre modalità: simulata, demo su CLOB reale, live con bridge Circle.",
        },
        {
          lead: "Hedera",
          text: "audit trail su Hedera Consensus Service (7 tipi di evento), identità dell'agente HCS-14, token HTS e micropagamenti HBAR proporzionali ai token consumati da ogni chiamata AI.",
        },
        {
          lead: "ENS e Arc",
          text: "parametri della strategia impegnati come hash keccak256 su record ENS con statistiche live; contratto Solidity su Arc Testnet per mercati di previsione regolati in USDC.",
        },
        { lead: "Stack", text: "Next.js 16, React 19, TypeScript, Vercel AI SDK, Privy." },
      ],
    },
    {
      name: "1balancer",
      href: "https://1balancer-ethrome.vercel.app/",
      context: "ETHRome 2025",
      period: "07/2025 – 09/2025",
      award: "3 bounty su 3",
      text: "App on-chain per il ribilanciamento automatico di portafogli di token, nata in hackathon e proseguita come progetto continuativo.",
      bullets: [
        {
          lead: "1inch",
          text: "Fusion SDK per prezzi off-chain, verifica dei saldi, approvazioni e swap.",
        },
        {
          lead: "Base",
          text: "mini-app su L2 per inviare fondi al portafoglio e monitorare il saldo in tempo reale.",
        },
        {
          lead: "ENS",
          text: "risoluzione ottimistica dei nomi (es. flavio.eth) con caching per ridurre le chiamate on-chain.",
        },
        { lead: "Frontend", text: "Next.js con Server Actions e SSR." },
      ],
    },
    {
      name: "Transcendence",
      context: "42 Roma",
      period: "09/2025 – 11/2025",
      text: "Gioco con classifica on-chain trasparente: smart contract Solidity per punteggi e tornei, score univoci tramite hash del nickname, ottimizzazione del gas; test e deploy con Foundry e Alchemy RPC.",
    },
    {
      name: "Welfare Is On",
      context: "Challenge Leonardo × 42 Roma",
      period: "05/2024 – 07/2024",
      text: "Web app sviluppata in team per i dipendenti Leonardo, per consultare servizi e convenzioni aziendali. Responsabile di UI/UX e logiche front-end.",
    },
  ] satisfies Project[],

  education: [
    {
      title: "Software Engineering",
      school: "42 Roma Luiss",
      schoolHref: "https://42roma.it/",
      period: "06/2022 – presente",
      text: "Percorso peer-to-peer in C, C++ e Unix. Progetti: minishell (shell Bash con pipe, redirect, variabili d'ambiente e operatori logici), push_swap (sorting su stack), minitalk (IPC con segnali), so_long (gioco 2D).",
    },
    {
      title: "Software Engineer Academy",
      school: "Sistemi Informativi (IBM) · Open Job Metis",
      schoolHref: "https://www.sistinf.it/",
      period: "06/2024 – 08/2024",
      text: "Bootcamp full-stack enterprise: Java SE/EE, Spring (Boot, Data JPA, MVC, Cloud), Angular, MySQL, MongoDB, Docker, basi di Kubernetes, microservizi e design pattern.",
    },
    {
      title: "Laurea triennale in Servizi Giuridici per l'Impresa",
      school: "Università eCampus",
      schoolHref: "https://www.uniecampus.it/",
      period: "2022",
      text: "Voto 87/110. Tesi sul benessere organizzativo nella pubblica amministrazione.",
    },
    {
      title: "Diploma in Servizi Socio-Sanitari",
      school: "IPSSS \"Edmondo De Amicis\", Roma",
      period: "2018",
    },
  ] satisfies Education[],

  privacy:
    "Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs. 196/2003 e del Regolamento UE 2016/679 (GDPR).",
};
