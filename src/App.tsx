import React, { useState, useEffect } from 'react';
import { portfolio66Data } from './portfolioData';
import type { PortfolioConfig } from './portfolioData';
import { TopNavbar } from './components/TopNavbar';
import type { NavPageId } from './components/TopNavbar';
import { HeroSection } from './components/HeroSection';
import { StudioOverviewSection } from './components/StudioOverviewSection';
import { LogoSystemSection } from './components/LogoSystemSection';
import { ColorTypeSystemSection } from './components/ColorTypeSystemSection';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ArticlesPage } from './components/pages/ArticlesPage';
import { FaqPage } from './components/pages/FaqPage';
import { ContactPage } from './components/pages/ContactPage';
import { motion, AnimatePresence } from 'framer-motion';

const PAGE_ORDER: NavPageId[] = [
  'home',
  'about',
  'identity',
  'system',
  'projects',
  'articles',
  'faq',
  'contact',
];

export function App() {
  const [data] = useState<PortfolioConfig>(portfolio66Data);
  const [activePage, setActivePage] = useState<NavPageId>(() => {
    const hash = window.location.hash.replace('#', '') as NavPageId;
    return PAGE_ORDER.includes(hash) ? hash : 'home';
  });

  // Sync hash with active page
  useEffect(() => {
    window.location.hash = activePage;
  }, [activePage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPageId;
      if (PAGE_ORDER.includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard navigation (ArrowLeft & ArrowRight to flip pages seamlessly)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        const nextIndex = currentIndex < PAGE_ORDER.length - 1 ? currentIndex + 1 : 0;
        setActivePage(PAGE_ORDER[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : PAGE_ORDER.length - 1;
        setActivePage(PAGE_ORDER[prevIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage]);

  const currentIndex = PAGE_ORDER.indexOf(activePage);

  const isLocalhost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1');

  return (
    <div className="min-h-screen bg-[#151515] text-[#F8F6EF] font-text flex flex-col selection:bg-[#7B5CFF] selection:text-white overflow-x-hidden">
      {/* Top Navigation Bar: Seamless single-screen view switching */}
      <TopNavbar
        studioName={data.meta.studioName}
        activePage={activePage}
        onSelectPage={(page) => setActivePage(page)}
      />

      {/* Main Single Page View Container with Framer Motion transitions (Responsive scrollable container) */}
      <main className="flex-1 flex flex-col relative w-full overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.995 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-full flex-1 flex flex-col justify-center"
          >
            {activePage === 'home' && (
              <HeroSection
                data={data}
                onNavigate={(page) => setActivePage(page)}
              />
            )}

            {activePage === 'about' && (
              <StudioOverviewSection
                data={data}
                onNavigate={(page) => setActivePage(page)}
              />
            )}

            {activePage === 'identity' && (
              <LogoSystemSection data={data} />
            )}

            {activePage === 'system' && (
              <ColorTypeSystemSection data={data} />
            )}

            {activePage === 'projects' && (
              <ProjectsPage
                data={data}
                onNavigate={(page) => setActivePage(page)}
              />
            )}

            {activePage === 'articles' && (
              <ArticlesPage data={data} />
            )}

            {activePage === 'faq' && (
              <FaqPage
                data={data}
                onNavigate={(page) => setActivePage(page)}
              />
            )}

            {activePage === 'contact' && (
              <ContactPage data={data} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dev Mode Floating CMS Shortcut (Only visible on localhost) */}
      {isLocalhost && (
        <aside className="fixed bottom-4 right-4 z-50">
          <a
            href="http://localhost:3333"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Visual CMS Editor (Runs in terminal: npm run cms)"
            className="group flex items-center gap-2 bg-[#1a1a1a]/95 hover:bg-[#7B5CFF] text-white/80 hover:text-white px-3.5 py-2 rounded-full border border-white/20 shadow-2xl backdrop-blur-md text-xs font-headline tracking-wider uppercase transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-white animate-pulse" />
            <span>Customize Portfolio (CMS)</span>
          </a>
        </aside>
      )}
    </div>
  );
}

export default App;
