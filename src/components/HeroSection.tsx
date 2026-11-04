import React from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { StretchedCatIllustration } from './illustrations/StretchedCatIllustration';
import type { PortfolioConfig } from '../portfolioData';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  data: PortfolioConfig;
}

export const HeroSection: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative w-full bg-[#151515] text-[#F8F6EF] overflow-hidden pt-8 pb-16 sm:py-20 border-b border-[#252525]">
      {/* Subtle background ambient star grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#7B5CFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Header Row with Logo Badge & Status */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          {/* Logo Badge (Two cats under star) */}
          <div className="transition-transform hover:scale-105 duration-300">
            <CatLogoBadge size={64} variant="badge-only" />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Select Projects</span>
          </div>
        </div>

        {/* Discipline & Year Tag (Matches "BRAND IDENTITY · WEBSITE DESIGN · 2026") */}
        <div className="mb-4 sm:mb-6">
          <p className="font-text uppercase tracking-[0.25em] text-xs sm:text-sm text-white/70 font-semibold flex items-center gap-2">
            <span>{data.meta.discipline}</span>
          </p>
        </div>

        {/* Giant Main Title & Stretched Cat Graphic Layout */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Massive Anton Title (Matches reference style in Moon Violet #7B5CFF) */}
            <div className="z-10 max-w-2xl">
              <span className="font-headline tracking-widest text-sm sm:text-base text-white/60 block mb-2">
                PORTFOLIO66 · CREATIVE STUDIO
              </span>
              <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.88] text-[#7B5CFF] tracking-tight uppercase select-none drop-shadow-sm">
                {data.meta.studioName}
              </h1>
            </div>

            {/* Stretched Sleek Cat Illustration (Right / Overlapping) */}
            <div className="w-full lg:w-[650px] xl:w-[760px] -mt-8 sm:-mt-12 lg:-mt-24 lg:-mr-12 z-20 pointer-events-auto transition-transform duration-700 hover:scale-[1.02]">
              <StretchedCatIllustration />
            </div>
          </div>
        </div>

        {/* Bottom Tagline Row (Matches "Small games for quiet moments.") */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-white/10 pt-6">
          <div>
            <p className="font-text text-xl sm:text-2xl text-white/95 font-light tracking-wide max-w-xl">
              {data.meta.tagline}
            </p>
            <p className="font-text text-sm text-white/60 max-w-xl mt-1.5">
              {data.meta.subTagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#works"
              className="bg-[#7B5CFF] hover:bg-[#6c4aec] text-white font-headline tracking-widest text-xs uppercase px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>EXPLORE WORKS</span>
              <ArrowDown size={14} />
            </a>
            <a
              href="#contact-section"
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-headline tracking-widest text-xs uppercase px-5 py-2.5 rounded-full transition-all"
            >
              SAY HELLO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
