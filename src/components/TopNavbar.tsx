import React, { useState } from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export type NavPageId =
  | 'home'
  | 'about'
  | 'identity'
  | 'system'
  | 'projects'
  | 'articles'
  | 'faq'
  | 'contact';

interface TopNavbarProps {
  studioName?: string;
  activePage: NavPageId;
  onSelectPage: (page: NavPageId) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  studioName = 'PRINSON NAZARETH',
  activePage,
  onSelectPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavPageId; label: string; num: string }[] = [
    { id: 'home', label: 'HOME', num: '01' },
    { id: 'about', label: 'ABOUT', num: '02' },
    { id: 'identity', label: 'IDENTITY', num: '03' },
    { id: 'system', label: 'SYSTEM', num: '04' },
    { id: 'projects', label: 'PROJECTS', num: '05' },
    { id: 'articles', label: 'ARTICLES', num: '06' },
    { id: 'faq', label: 'FAQ', num: '07' },
    { id: 'contact', label: 'CONTACT', num: '08' },
  ];

  const handleNavClick = (id: NavPageId) => {
    onSelectPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#151515]/95 backdrop-blur-md border-b border-[#252525] py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <CatLogoBadge size={36} variant="badge-only" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-headline tracking-wider text-lg sm:text-xl text-white group-hover:text-[#7B5CFF] transition-colors">
              {studioName}
            </span>
            <span className="hidden md:inline-block text-[9px] uppercase font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-2 py-0.5 rounded-full border border-[#7B5CFF]/30">
              PORTFOLIO66
            </span>
          </div>
        </button>

        {/* Desktop Navbar: Page Selector Tabs (No scroll, direct page change) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1a1a1a] p-1.5 rounded-full border border-white/10 text-xs font-headline tracking-wider">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                activePage === link.id
                  ? 'bg-[#7B5CFF] text-white shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className={`flex items-center gap-1.5 text-xs font-headline tracking-wider px-4 py-2 rounded-full transition-all shadow-md active:scale-95 ${
              activePage === 'contact'
                ? 'bg-white text-[#151515]'
                : 'bg-[#7B5CFF] hover:bg-[#6846ed] text-white hover:scale-105'
            }`}
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Navigation Overlay (Direct Page Selection) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-[#151515] p-6 flex flex-col justify-between animate-fadeIn lg:hidden overflow-y-auto">
          <div className="space-y-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-baseline gap-3 text-left py-2.5 px-3 rounded-2xl transition-all ${
                  activePage === link.id
                    ? 'bg-[#7B5CFF]/20 text-[#7B5CFF] border border-[#7B5CFF]/40'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-xs font-bold opacity-60">
                  {link.num}
                </span>
                <span className="font-headline text-3xl tracking-wide uppercase">
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 pb-6">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-[#7B5CFF] text-white text-center py-3 rounded-full font-headline tracking-widest text-sm shadow-xl"
            >
              GET IN TOUCH
            </button>
            <div className="text-center text-xs text-white/50">
              Prinson Nazareth · PRN-6 / Portfolio66
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
