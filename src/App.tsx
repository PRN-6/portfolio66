import React, { useState, useEffect } from 'react';
import { defaultPortfolioData } from './portfolioData';
import type { PortfolioConfig } from './portfolioData';
import { TopNavbar } from './components/TopNavbar';
import { HeroSection } from './components/HeroSection';
import { StudioOverviewSection } from './components/StudioOverviewSection';
import { LogoSystemSection } from './components/LogoSystemSection';
import { ColorTypeSystemSection } from './components/ColorTypeSystemSection';
import { FullStudioWebsiteMockup } from './components/FullStudioWebsiteMockup';
import { InnerPagesSection } from './components/InnerPagesSection';
import { MobileShowcaseSection } from './components/MobileShowcaseSection';
import { SocialSection } from './components/SocialSection';
import { UniversalPortfolioEditor } from './components/UniversalPortfolioEditor';
import { PageModal } from './components/PageModal';
import { ReferenceCompareModal } from './components/ReferenceCompareModal';
import { LiveSiteStandaloneView } from './components/LiveSiteStandaloneView';
import { CatLogoBadge } from './components/illustrations/CatLogoBadge';
import { Sliders, Eye, Sparkles, Heart, ArrowUp } from 'lucide-react';

export function App() {
  const [data, setData] = useState<PortfolioConfig>(defaultPortfolioData);
  const [accentColor, setAccentColor] = useState<string>('#7B5CFF');
  const [viewMode, setViewMode] = useState<'case-study' | 'live-site'>('case-study');
  const [activePageModal, setActivePageModal] = useState<'games' | 'blog' | 'faq' | 'contact' | null>(null);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);
  const [compareModalOpen, setCompareModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync accent color with CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', accentColor);
    document.documentElement.style.setProperty('--color-accent-hover', accentColor);
    document.documentElement.style.setProperty('--color-accent-glow', `${accentColor}40`);
  }, [accentColor]);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#151515] text-[#F8F6EF] font-text relative selection:bg-[#7B5CFF] selection:text-white">
      {/* View Mode Switching */}
      {viewMode === 'live-site' ? (
        <LiveSiteStandaloneView
          data={data}
          onBackToCaseStudy={() => setViewMode('case-study')}
          onOpenPageModal={(id) => setActivePageModal(id)}
        />
      ) : (
        <>
          {/* Top Sticky Navigation */}
          <TopNavbar
            currentView={viewMode}
            onChangeView={(view) => setViewMode(view)}
            onOpenCustomizer={() => setCustomizerOpen(true)}
            onOpenCompare={() => setCompareModalOpen(true)}
            studioName={data.meta.studioName}
          />

          {/* Quick Section Anchor Jump Bar */}
          <nav className="bg-[#121212] border-b border-white/5 py-2 px-4 overflow-x-auto scrollbar-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-headline tracking-widest text-white/50">
              <div className="flex items-center gap-6 whitespace-nowrap">
                <a href="#studio" className="hover:text-white transition-colors">
                  01 THE STUDIO
                </a>
                <a href="#logo" className="hover:text-white transition-colors">
                  02 LOGO SYSTEM
                </a>
                <a href="#design-system" className="hover:text-white transition-colors">
                  03 COLOR & TYPE
                </a>
                <a href="#website" className="hover:text-white transition-colors">
                  04 FULL WEBSITE
                </a>
                <a href="#inner-pages" className="hover:text-white transition-colors">
                  05 INNER PAGES
                </a>
                <a href="#mobile" className="hover:text-white transition-colors">
                  06 MOBILE
                </a>
                <a href="#social" className="hover:text-white transition-colors">
                  07 SOCIAL
                </a>
              </div>

              <div className="hidden lg:flex items-center gap-3 whitespace-nowrap text-[11px] text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Exact 1:1 Reference Reproduction • Universal Configurable</span>
              </div>
            </div>
          </nav>

          <main>
            {/* Slide 1: Hero Banner */}
            <HeroSection
              data={data}
              onOpenCustomizer={() => setCustomizerOpen(true)}
              onViewLive={() => setViewMode('live-site')}
            />

            {/* Slide 2: The Studio */}
            <StudioOverviewSection
              data={data}
              onOpenLive={() => setViewMode('live-site')}
            />

            {/* Slide 3: Logo System */}
            <LogoSystemSection data={data} />

            {/* Slide 4: Color & Typography System */}
            <ColorTypeSystemSection data={data} />

            {/* Slide 5: Full Studio Website Mockup ("One Scroll, The Whole Studio") */}
            <FullStudioWebsiteMockup
              data={data}
              onOpenLiveStandalone={() => setViewMode('live-site')}
              onNavigateInnerPage={(page) => setActivePageModal(page)}
            />

            {/* Slide 6: Inner Pages (Games, Blog, FAQ, Say Hello) */}
            <InnerPagesSection
              data={data}
              onOpenPageModal={(id) => setActivePageModal(id)}
            />

            {/* Slide 7: Mobile (Made for One Hand) */}
            <MobileShowcaseSection data={data} />

            {/* Slide 8: Social & Sharing (Every Link Looks Like Us) */}
            <SocialSection data={data} />
          </main>

          {/* Case Study Global Footer */}
          <footer className="bg-[#0e0e0e] text-white py-16 px-4 sm:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <CatLogoBadge size={50} variant="badge-only" />
                <div>
                  <h4 className="font-headline text-2xl text-white tracking-wider">
                    {data.meta.studioName}
                  </h4>
                  <p className="font-text text-xs text-white/60">
                    {data.meta.projectTitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setCompareModalOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-headline tracking-wider px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                >
                  <Eye size={14} className="text-[#00D2D3]" />
                  <span>VIEW ORIGINAL SLIDES</span>
                </button>
                <button
                  onClick={() => setCustomizerOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-headline tracking-wider px-4 py-2 rounded-full bg-[#7B5CFF] hover:bg-[#6c4aec] text-white transition-all shadow-md active:scale-95"
                >
                  <Sliders size={14} />
                  <span>CUSTOMIZE FOR YOUR PORTFOLIO</span>
                </button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-2">
              <span>Universal Portfolio Template • Ready for any designer or developer</span>
              <span className="flex items-center gap-1">
                Built with precision, craft and calm vibes <Heart size={12} className="text-[#FF6B6B]" />
              </span>
            </div>
          </footer>
        </>
      )}

      {/* Floating Action Button for Quick Customization */}
      <button
        onClick={() => setCustomizerOpen(true)}
        title="Open Universal Portfolio Customizer"
        className="fixed bottom-6 right-6 z-40 bg-[#7B5CFF] hover:bg-[#6c4aec] text-white p-3.5 rounded-full shadow-[0_10px_30px_rgba(123,92,255,0.6)] flex items-center gap-2 font-headline text-xs tracking-wider transition-all hover:scale-110 active:scale-95 border-2 border-white/20"
      >
        <Sliders size={18} />
        <span className="hidden md:inline">UNIVERSAL EDITOR</span>
      </button>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="fixed bottom-6 left-6 z-40 bg-[#222]/80 hover:bg-[#333] text-white p-3 rounded-full shadow-lg border border-white/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* Slide-over Universal Portfolio Editor */}
      <UniversalPortfolioEditor
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        data={data}
        onUpdateData={(newData) => setData(newData)}
        accentColor={accentColor}
        onUpdateAccentColor={(color) => setAccentColor(color)}
      />

      {/* Full Dedicated Page Modal */}
      <PageModal
        pageId={activePageModal}
        onClose={() => setActivePageModal(null)}
        data={data}
      />

      {/* Reference Compare Slide Inspector Modal */}
      <ReferenceCompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />
    </div>
  );
}
export default App;
