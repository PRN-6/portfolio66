import React, { useState, useEffect } from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { Mail, ArrowUpRight } from 'lucide-react';

interface TopNavbarProps {
  studioName?: string;
  onOpenContact?: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  studioName = 'PORTFOLIO66',
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#151515]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-[#151515] py-4 border-b border-[#222]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <CatLogoBadge size={34} variant="badge-only" />
          <span className="font-headline tracking-wider text-xl text-white group-hover:text-[#7B5CFF] transition-colors">
            {studioName}
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-2.5 py-0.5 rounded-full border border-[#7B5CFF]/30">
            CREATIVE PORTFOLIO
          </span>
        </a>

        {/* Clean Portfolio Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 font-headline text-xs tracking-widest uppercase text-white/70">
          <a href="#studio" className="hover:text-white transition-colors">
            THE STUDIO
          </a>
          <a href="#logo" className="hover:text-white transition-colors">
            IDENTITY
          </a>
          <a href="#design-system" className="hover:text-white transition-colors">
            SYSTEM
          </a>
          <a href="#works" className="hover:text-white transition-colors">
            WEBSITE
          </a>
          <a href="#inner-pages" className="hover:text-white transition-colors">
            INNER PAGES
          </a>
          <a href="#mobile" className="hover:text-white transition-colors">
            MOBILE
          </a>
          <a href="#social" className="hover:text-white transition-colors">
            SOCIAL
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact-section"
            className="flex items-center gap-1.5 text-xs font-headline tracking-wider px-4 py-2 rounded-full bg-[#7B5CFF] hover:bg-[#6846ed] text-white shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
};
