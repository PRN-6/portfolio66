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
    </div>
  );
}

export default App;
