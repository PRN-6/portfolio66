export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  badge: string;
  description: string;
  features: string[];
  themeColor: string;
  bgType: 'violet' | 'cream' | 'night';
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'DEVLOG' | 'UI/UX' | 'TUTORIALS' | 'ESSAYS';
  date: string;
  readTime: string;
  colorScheme: 'violet' | 'night';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioConfig {
  meta: {
    studioName: string;
    brandHandle: string;
    projectTitle: string;
    discipline: string;
    year: string;
    tagline: string;
    subTagline: string;
    liveUrl: string;
    contactEmail: string;
    githubUrl: string;
  };
  overview: {
    tag: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    role: string;
    tools: string;
    deliverables: string;
    liveDisplay: string;
  };
  branding: {
    tag: string;
    headline: string;
    description: string;
    badgeName: string;
  };
  designSystem: {
    colors: {
      night: { name: string; hex: string; desc: string };
      cream: { name: string; hex: string; desc: string };
      accent: { name: string; hex: string; desc: string };
      rationale: string;
    };
    typography: {
      headline: { font: string; role: string; desc: string };
      text: { font: string; role: string; desc: string };
      wordmark: { font: string; role: string; desc: string };
    };
  };
  projects: PortfolioProject[];
  blogPosts: BlogPost[];
  faq: FAQItem[];
  socials: {
    platform: string;
    url: string;
  }[];
}

export const portfolio66Data: PortfolioConfig = {
  meta: {
    studioName: 'PRINSON NAZARETH',
    brandHandle: 'PORTFOLIO66',
    projectTitle: 'Prinson Nazareth | Portfolio66 — Full-Stack Developer & UI/UX Designer',
    discipline: 'FULL-STACK DEVELOPER · CREATIVE TECHNOLOGIST · 2026',
    year: '2026',
    tagline: 'Crafting clean code, calm software & intuitive digital experiences.',
    subTagline: 'Modern full-stack web applications, accessible design systems, and responsive user experiences built with performance, precision, and care.',
    liveUrl: 'https://github.com/PRN-6/portfolio66',
    contactEmail: 'prinsonnazareth2@gmail.com',
    githubUrl: 'https://github.com/PRN-6',
  },
  overview: {
    tag: 'THE CREATOR',
    headline: 'CLEAN CODE, NO STRESS.',
    paragraph1: 'I am Prinson Nazareth, a full-stack developer and creative designer specializing in modern web architecture, React, TypeScript, and high-performance user interfaces. Every project follows three simple rules: zero visual noise, lightning-fast performance, and accessible interfaces that fit into real life.',
    paragraph2: 'The brand balances typographic discipline with soft organic minimalism: two cats represent the studio ethos — one curious (continuous technological exploration), and one calm (rock-solid architectural stability and restful user experiences).',
    role: 'Full-Stack Developer, UI/UX Architect',
    tools: 'React 19, TypeScript, Next.js, Tailwind CSS, Node.js, Cloudflare',
    deliverables: 'Full-Stack Web Applications, Design Token Systems, REST/GraphQL APIs, 100% Responsive UI',
    liveDisplay: 'github.com/PRN-6',
  },
  branding: {
    tag: 'PHILOSOPHY',
    headline: 'TWO CATS, ONE STUDIO.',
    description: 'A curious cat and a sleepy cat sit side by side under a little star. The violet outline is the playful, curious half exploring emerging tech and creative interactions; the solid black cat is the calm half focused on robust engineering, clean architecture, and restful ergonomics.',
    badgeName: 'PRINSON NAZARETH',
  },
  designSystem: {
    colors: {
      night: {
        name: 'NIGHT',
        hex: '#151515',
        desc: 'Deep restful dark background for night-time work, code reading and visual comfort.',
      },
      cream: {
        name: 'CREAM',
        hex: '#F8F6EF',
        desc: 'Soft warm paper-like tint that eliminates eye strain and harsh contrast.',
      },
      accent: {
        name: 'MOON VIOLET',
        hex: '#7B5CFF',
        desc: 'Playful vibrant violet used selectively for titles, primary actions and visual highlights.',
      },
      rationale: 'Night and cream keep long reading calm; violet is used only for what matters: titles, buttons and interactive focus points.',
    },
    typography: {
      headline: {
        font: 'ANTON',
        role: 'HEADLINES',
        desc: 'Tall, condensed, loud when it needs to be.',
      },
      text: {
        font: 'ROBOTO CONDENSED',
        role: 'TEXT',
        desc: 'Quiet and readable for body copy, specs, and labels.',
      },
      wordmark: {
        font: 'BALOO 2',
        role: 'WORDMARK',
        desc: 'Soft and round, like the cats in the logo.',
      },
    },
  },
  projects: [
    {
      id: 'nexaflow',
      title: 'NEXAFLOW CLOUD',
      tagline: 'Real-time telemetry and distributed cloud observability dashboard.',
      category: 'CLOUD & DISTRIBUTED SYSTEMS',
      status: 'PRODUCTION READY',
      badge: 'FULL-STACK · 2026',
      description: 'A high-throughput cloud observability platform streaming live server metrics, distributed traces, and canvas-based node topologies with sub-50ms latency.',
      features: [
        'Real-time WebSocket telemetry with automatic backpressure',
        'Interactive SVG topology node visualizer',
        'Zero-dependency client telemetry SDK for React and Node.js',
        'Dark-mode first dashboard with eye-friendly nocturnal palettes'
      ],
      themeColor: '#7B5CFF',
      bgType: 'violet',
      githubUrl: 'https://github.com/PRN-6',
      metrics: '50K+ ops/sec',
    },
    {
      id: 'aura-ui',
      title: 'AURA DESIGN SYSTEM',
      tagline: 'Headless, accessible design tokens and component engine for modern web apps.',
      category: 'DESIGN SYSTEM & UI ARCHITECTURE',
      status: 'OPEN SOURCE',
      badge: 'DESIGN SYSTEM · 2026',
      description: 'An ergonomic component suite featuring 40+ WCAG AAA compliant primitives, fluid KaTeX typographic scaling, and zero-runtime CSS variable design tokens.',
      features: [
        'WCAG AAA accessible keyboard navigation & ARIA landmarks',
        'Automated token synchronization between Figma & Tailwind',
        'Comprehensive Storybook documentation & interactive testbench',
        'Under 12kB gzipped core bundle with tree-shaking support'
      ],
      themeColor: '#7B5CFF',
      bgType: 'cream',
      githubUrl: 'https://github.com/PRN-6',
      metrics: '40+ Components',
    },
  ],
  blogPosts: [
    {
      id: 'high-performance-react',
      title: 'BUILDING HIGH-PERFORMANCE REACT 19 APPS WITH MODERN VITE',
      excerpt: 'Optimizing render lifecycles, asset preloading, and fine-grained state management for 60fps web apps.',
      category: 'DEVLOG',
      date: 'Oct 24, 2026',
      readTime: '5 min read',
      colorScheme: 'violet',
    },
    {
      id: 'design-tokens-workflow',
      title: 'DESIGN TOKENS: BRIDGING THE VOID BETWEEN FIGMA AND TAILWIND',
      excerpt: 'How to automate single-source-of-truth visual design tokens for consistent multi-platform UI.',
      category: 'UI/UX',
      date: 'Oct 12, 2026',
      readTime: '6 min read',
      colorScheme: 'night',
    },
    {
      id: 'calm-software-architecture',
      title: 'THE ARCHITECTURE OF CALM SOFTWARE: REDUCING COGNITIVE LOAD',
      excerpt: 'Designing digital tools that respect human attention, eliminate notification fatigue, and foster deep focus.',
      category: 'ESSAYS',
      date: 'Sep 28, 2026',
      readTime: '4 min read',
      colorScheme: 'violet',
    },
    {
      id: 'offline-first-pwa',
      title: 'OFFLINE-FIRST WEB ARCHITECTURE WITH INDEXEDDB AND SERVICE WORKERS',
      excerpt: 'Practical patterns for resilient local-first data caching, conflict resolution, and background sync.',
      category: 'TUTORIALS',
      date: 'Sep 05, 2026',
      readTime: '7 min read',
      colorScheme: 'night',
    },
  ],
  faq: [
    {
      id: 'faq-1',
      question: 'WHAT ROLES AND OPPORTUNITIES ARE YOU OPEN TO?',
      answer: 'I am available for full-time Senior Full-Stack Engineering roles, high-impact contract projects, and design system architecture advisory.',
    },
    {
      id: 'faq-2',
      question: 'WHAT IS YOUR PRIMARY TECHNOLOGY STACK?',
      answer: 'My daily stack centers on TypeScript, React 19, Next.js, Tailwind CSS, Node.js, PostgreSQL, and Cloudflare Workers / AWS. I prioritize type safety, clean code, and zero bloat.',
    },
    {
      id: 'faq-3',
      question: 'CAN YOU COLLABORATE ACROSS DIFFERENT TIME ZONES?',
      answer: 'Yes! I have extensive experience operating asynchronously with distributed teams across the US, Europe, and Asia-Pacific with daily transparent updates.',
    },
    {
      id: 'faq-4',
      question: 'HOW DO YOU ENSURE CODE QUALITY AND MAINTAINABILITY?',
      answer: 'Strict TypeScript typing, modular component boundaries, automated CI/CD checks, comprehensive unit/E2E test coverage, and documentation-first engineering.',
    },
    {
      id: 'faq-5',
      question: 'HOW CAN WE START A PROJECT TOGETHER?',
      answer: 'Send me a direct message through the contact form below or email prinsonnazareth2@gmail.com with your project goals or role description.',
    },
  ],
  socials: [
    { platform: 'GitHub', url: 'https://github.com/PRN-6' },
    { platform: 'Email', url: 'mailto:prinsonnazareth2@gmail.com' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/prinson-nazareth' },
    { platform: 'X (Twitter)', url: 'https://x.com/prn_6' },
  ],
};

export const defaultPortfolioData = portfolio66Data;
