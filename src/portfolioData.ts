export interface GameProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  themeColor: string;
  bgType: 'violet' | 'cream' | 'night';
  playUrl?: string;
  score?: number;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'PUZZLE TIPS' | 'GAME LISTS' | 'DEVLOG' | 'NEWS';
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
    projectTitle: string;
    discipline: string;
    year: string;
    tagline: string;
    subTagline: string;
    liveUrl: string;
    contactEmail: string;
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
  games: GameProject[];
  blogPosts: BlogPost[];
  faq: FAQItem[];
  socials: {
    platform: string;
    url: string;
  }[];
}

export const portfolio66Data: PortfolioConfig = {
  meta: {
    studioName: 'PORTFOLIO66',
    projectTitle: 'PORTFOLIO66 | Brand Identity & Website',
    discipline: 'BRAND IDENTITY · WEBSITE DESIGN · 2026',
    year: '2026',
    tagline: 'Small games for quiet moments.',
    subTagline: 'Calm, eye-friendly puzzle games for your commute, your coffee break and your bedtime. Free to play, no timers, no stress.',
    liveUrl: 'https://portfolio66.com',
    contactEmail: 'contact@portfolio66.com',
  },
  overview: {
    tag: 'THE STUDIO',
    headline: 'CALM PUZZLES, NO STRESS.',
    paragraph1: 'Portfolio66 is a creative studio making calm puzzle games and thoughtful digital experiences for phones. Every game follows three simple rules: no timers, soft colors that are easy on the eyes, and short sessions that fit into real life.',
    paragraph2: 'The brand needed to feel friendly and playful without being loud, so two cats became the face of the studio: one curious, one sleepy. The website introduces the games, shares puzzle tips on the blog and collects launch sign ups.',
    role: 'Brand identity, UI/UX, web development',
    tools: 'Figma, Astro, Cloudflare, React',
    deliverables: 'Logo, color & type system, 8 desktop + 8 mobile pages, social images',
    liveDisplay: 'portfolio66.com',
  },
  branding: {
    tag: 'LOGO',
    headline: 'TWO CATS, ONE STUDIO.',
    description: 'A curious cat and a sleepy cat sit side by side under a little star. The violet outline is the playful half, the black cat is the calm half. The rounded badge works as an app icon, a favicon and a social avatar.',
    badgeName: 'PORTFOLIO66',
  },
  designSystem: {
    colors: {
      night: {
        name: 'NIGHT',
        hex: '#151515',
        desc: 'Deep restful dark background for night-time play and readability.',
      },
      cream: {
        name: 'CREAM',
        hex: '#F8F6EF',
        desc: 'Soft warm paper-like tint that eliminates eye strain.',
      },
      accent: {
        name: 'MOON VIOLET',
        hex: '#7B5CFF',
        desc: 'Playful vibrant violet used selectively for titles, CTAs and mascot highlights.',
      },
      rationale: 'Night and cream keep long reading calm; violet is used only for what matters: titles, buttons and the playful cat.',
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
        desc: 'Quiet and readable for body copy and labels.',
      },
      wordmark: {
        font: 'BALOO 2',
        role: 'WORDMARK',
        desc: 'Soft and round, like the cats in the logo.',
      },
    },
  },
  games: [
    {
      id: 'blockmoon',
      title: 'BLOCKMOON',
      tagline: 'Drag soft glowing blocks onto an 8x8 board under the night sky.',
      category: 'BLOCK PUZZLE',
      status: 'CLOSED TEST',
      badge: 'CLOSED TEST · 2026',
      description: 'Drag soft glowing blocks onto an 8x8 board under the night sky. Fill rows and columns to clear them, chain combos and chase your best score.',
      features: [
        'No timers, play at your own pace',
        'Eye-friendly night design with soft neon glow',
        'Works 100% offline without wifi',
        'One extra chance per game with a short optional video'
      ],
      themeColor: '#7B5CFF',
      bgType: 'violet',
      score: 1250,
    },
    {
      id: 'moon-arrows',
      title: 'MOON ARROWS',
      tagline: 'Every arrow wants out. Tap them in order, unlock and watch the maze unwind.',
      category: 'ARROW PUZZLE',
      status: 'IN DEVELOPMENT',
      badge: 'ARROW PUZZLE · IN DEVELOPMENT',
      description: 'Every arrow wants out. Tap them in order, unlock and watch the maze unwind into a dance screen on every solve.',
      features: [
        'Handcrafted labyrinth puzzles',
        'Ambient nocturnal soundscape',
        'Infinite undo and gentle hints',
        'Zero intrusive popups or paywalls'
      ],
      themeColor: '#7B5CFF',
      bgType: 'cream',
      score: 840,
    },
  ],
  blogPosts: [
    {
      id: 'relaxing-puzzle-games',
      title: '10 RELAXING PUZZLE GAMES TO PLAY BEFORE BED',
      excerpt: 'Calm, eye-friendly picks with no timers and no stress, perfect for winding down after a busy day.',
      category: 'GAME LISTS',
      date: 'Oct 2, 2026',
      readTime: '4 min read',
      colorScheme: 'violet',
    },
    {
      id: 'high-score-block-puzzle',
      title: 'HOW TO GET A HIGH SCORE IN BLOCK PUZZLE GAMES',
      excerpt: 'Keep the center open, plan for the big pieces and chain your clears for combo points.',
      category: 'PUZZLE TIPS',
      date: 'Sep 24, 2026',
      readTime: '5 min read',
      colorScheme: 'night',
    },
    {
      id: 'arrow-puzzle-tips',
      title: 'ARROW PUZZLE TIPS: SOLVE ANY MAZE FASTER',
      excerpt: 'Start from the edges, look for arrows with a clear path and never tap twice by accident.',
      category: 'PUZZLE TIPS',
      date: 'Sep 17, 2026',
      readTime: '3 min read',
      colorScheme: 'violet',
    },
    {
      id: 'devlog-first-year',
      title: 'POSTING OUR JOURNEY: YEAR ONE OF PORTFOLIO66',
      excerpt: 'From two sleepy shelter cats to building calm mobile games for quiet moments around the globe.',
      category: 'DEVLOG',
      date: 'Aug 30, 2026',
      readTime: '6 min read',
      colorScheme: 'night',
    },
  ],
  faq: [
    {
      id: 'faq-1',
      question: 'ARE YOUR GAMES FREE?',
      answer: 'Yes. All our games are free to download and play. They are supported by non-intrusive ads that never interrupt your active puzzle sessions.',
    },
    {
      id: 'faq-2',
      question: 'DO I NEED AN INTERNET CONNECTION?',
      answer: 'No! Our games are specifically designed for flights, commutes, and quiet offline sessions. Progress is saved locally on your device.',
    },
    {
      id: 'faq-3',
      question: 'WHY DO I SEE ADS?',
      answer: 'We keep our studio independent through lightweight optional ads (like a voluntary revive or bonus palette unlock) so the games stay 100% free forever.',
    },
    {
      id: 'faq-4',
      question: 'MY PROGRESS IS GONE. WHAT CAN I DO?',
      answer: 'If you connected your Google Play Games account, tap Restore in Settings. You can also reach out to contact@portfolio66.com and we will help recover your saves.',
    },
    {
      id: 'faq-5',
      question: 'WHICH DEVICES ARE SUPPORTED?',
      answer: 'All modern Android phones and tablets running Android 9.0+, with iOS release coming in late 2026.',
    },
  ],
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com/portfolio66' },
    { platform: 'TikTok', url: 'https://tiktok.com/@portfolio66' },
    { platform: 'X (Twitter)', url: 'https://x.com/portfolio66' },
  ],
};

// Aliases for compatibility
export const defaultPortfolioData = portfolio66Data;
