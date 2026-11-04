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
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

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

  // Keyboard navigation (ArrowLeft & ArrowRight to flip pages like slides)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage]);

  const currentIndex = PAGE_ORDER.indexOf(activePage);

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : PAGE_ORDER.length - 1;
    setActivePage(PAGE_ORDER[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < PAGE_ORDER.length - 1 ? currentIndex + 1 : 0;
    setActivePage(PAGE_ORDER[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#151515] text-[#F8F6EF] font-text flex flex-col justify-between selection:bg-[#7B5CFF] selection:text-white">
      {/* Top Navigation Bar: Click to go to any page */}
      <TopNavbar
        studioName={data.meta.studioName}
        activePage={activePage}
        onSelectPage={(page) => setActivePage(page)}
      />

      {/* Main Single Page View Container (One page at a time, no endless scroll) */}
      <main className="flex-1 flex flex-col justify-center animate-fadeIn relative">
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
      </main>

      {/* Bottom Controls Bar (Pagination, Indicators, Flip Buttons) */}
      <footer className="w-full bg-[#121212] border-t border-[#252525] py-3 px-4 sm:px-8 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-headline tracking-widest uppercase">
          {/* Left: Page info */}
          <div className="flex items-center gap-2 text-white/60">
            <span className="text-[#7B5CFF] font-bold">
              0{currentIndex + 1} / 0{PAGE_ORDER.length}
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-white/80">
              {activePage}
            </span>
          </div>

          {/* Center: Slide indicator dots */}
          <div className="flex items-center gap-1.5">
            {PAGE_ORDER.map((pageId, idx) => (
              <button
                key={pageId}
                onClick={() => setActivePage(pageId)}
                title={`Go to ${pageId}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activePage === pageId
                    ? 'w-7 bg-[#7B5CFF]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Right: Previous & Next Page controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              title="Previous Page (Left Arrow)"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors border border-white/10 active:scale-95"
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:inline">PREV</span>
            </button>
            <button
              onClick={handleNext}
              title="Next Page (Right Arrow)"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#7B5CFF] hover:bg-[#6846ed] text-white transition-all shadow-md active:scale-95"
            >
              <span className="hidden sm:inline">NEXT</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
