import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  onReplaySwarm?: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  studioName = 'YOUR NAME',
  activePage,
  onSelectPage,
  onReplaySwarm,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id: NavPageId) => {
    onSelectPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#151515]/95 backdrop-blur-md border-b border-[#252525] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand / Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
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
          </motion.button>

          {/* Desktop Navbar: Page Selector Tabs with Smooth Framer Motion Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1a1a1a] p-1.5 rounded-full border border-white/10 text-xs font-headline tracking-wider">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#7B5CFF] rounded-full shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right CTA (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onReplaySwarm && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onReplaySwarm}
                title="Watch AI Figma Cursors assemble the page live (@leozodiac/swarm66)"
                className="flex items-center gap-1.5 text-xs font-headline tracking-wider px-3.5 py-2 rounded-full bg-white/5 hover:bg-[#7B5CFF]/20 border border-white/10 hover:border-[#7B5CFF]/40 text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <Sparkles size={13} className="text-[#FECA57]" />
                <span className="hidden md:inline">REPLAY SWARM</span>
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-1.5 text-xs font-headline tracking-wider px-4 py-2 rounded-full transition-all shadow-md cursor-pointer ${
                activePage === 'contact'
                  ? 'bg-white text-[#151515]'
                  : 'bg-[#7B5CFF] hover:bg-[#6846ed] text-white'
              }`}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={14} />
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white p-2.5 hover:bg-white/10 rounded-xl transition-colors cursor-pointer flex items-center justify-center active:scale-95"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer rendered via Portal at document.body level */}
      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="mobile-nav-portal"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[99999] bg-[#151515] text-[#F8F6EF] flex flex-col justify-between p-5 sm:p-8 lg:hidden overflow-hidden"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100vw',
                  height: '100dvh',
                }}
              >
                {/* Drawer Top Header (Logo + Explicit Close Button) */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
                  <button
                    onClick={() => handleNavClick('home')}
                    className="flex items-center gap-3 text-left cursor-pointer"
                  >
                    <CatLogoBadge size={34} variant="badge-only" />
                    <div className="flex items-center gap-2">
                      <span className="font-headline tracking-wider text-xl text-white">
                        {studioName}
                      </span>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-2 py-0.5 rounded-full border border-[#7B5CFF]/30">
                        PORTFOLIO66
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Middle: Scrollable Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4 space-y-1 my-auto pr-1">
                  {navLinks.map((link) => {
                    const isActive = activePage === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full flex items-center justify-between text-left py-3 px-4 rounded-2xl transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#7B5CFF] text-white shadow-lg'
                            : 'text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10'
                        }`}
                      >
                        <div className="flex items-baseline gap-3.5">
                          <span
                            className={`font-mono text-xs font-bold ${
                              isActive ? 'text-white' : 'text-[#7B5CFF]'
                            }`}
                          >
                            {link.num}
                          </span>
                          <span className="font-headline text-2xl sm:text-3xl tracking-wide uppercase">
                            {link.label}
                          </span>
                        </div>

                        {isActive && (
                          <span className="text-[10px] font-headline tracking-widest uppercase bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                            ACTIVE
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Actions & Studio Footer */}
                <div className="pt-4 border-t border-white/10 space-y-2.5 flex-shrink-0">
                  {onReplaySwarm && (
                    <button
                      onClick={() => {
                        onReplaySwarm();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-white/5 hover:bg-white/10 text-white text-center py-2.5 rounded-full font-headline tracking-widest text-xs uppercase border border-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles size={14} className="text-[#FECA57]" />
                      <span>REPLAY AI SWARM</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full bg-[#7B5CFF] hover:bg-[#6846ed] text-white text-center py-3.5 rounded-full font-headline tracking-widest text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>GET IN TOUCH</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <div className="text-center text-xs text-white/40 font-mono">
                    {studioName} · PORTFOLIO66 · 2026
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
