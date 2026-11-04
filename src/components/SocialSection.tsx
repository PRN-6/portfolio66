import React from 'react';
import { SocialShareKit } from './illustrations/SocialShareKit';
import type { PortfolioConfig } from '../portfolioData';

interface SocialSectionProps {
  data: PortfolioConfig;
}

export const SocialSection: React.FC<SocialSectionProps> = () => {
  return (
    <section
      id="social"
      className="relative w-full bg-[#7B5CFF] text-white py-16 sm:py-24 px-4 sm:px-8 border-b border-[#6744fa]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-white/80 block mb-2">
            SOCIAL & SHARING
          </span>
          <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-none text-white uppercase tracking-tight">
            EVERY LINK LOOKS LIKE US.
          </h2>
          <p className="font-text text-sm sm:text-base text-white/85 mt-2 max-w-xl">
            Open Graph cards for the home, games and blog pages, plus a 512 px adaptive app icon for seamless discoverability.
          </p>
        </div>

        {/* 4 Branded Social Cards Component */}
        <SocialShareKit />
      </div>
    </section>
  );
};
