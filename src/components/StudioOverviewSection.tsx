import React from 'react';
import { SittingCatsIllustration } from './illustrations/SittingCatsIllustration';
import type { PortfolioConfig } from '../portfolioData';
import { ExternalLink } from 'lucide-react';

interface StudioOverviewProps {
  data: PortfolioConfig;
}

export const StudioOverviewSection: React.FC<StudioOverviewProps> = ({ data }) => {
  return (
    <section
      id="studio"
      className="relative w-full bg-[#F8F6EF] text-[#151515] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#e2dec9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Tag (Moon Violet uppercase) */}
        <div className="mb-4">
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF]">
            {data.overview.tag}
          </span>
        </div>

        {/* Main Content Layout: Text Column Left, Cats Column Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Big Condensed Anton Headline */}
            <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-[0.92] text-[#151515] uppercase tracking-tight">
              {data.overview.headline}
            </h2>

            {/* Paragraph 1 */}
            <p className="font-text text-lg sm:text-xl text-[#151515]/90 leading-relaxed max-w-2xl">
              {data.overview.paragraph1}
            </p>

            {/* Paragraph 2 */}
            <p className="font-text text-base sm:text-lg text-[#151515]/80 leading-relaxed max-w-2xl">
              {data.overview.paragraph2}
            </p>
          </div>

          {/* Right Cats Illustration Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] transition-transform duration-500 hover:scale-[1.02]">
              <SittingCatsIllustration />
            </div>
          </div>
        </div>

        {/* Bottom Metadata Grid (ROLE, TOOLS, DELIVERABLES, LIVE) */}
        <div className="pt-8 border-t border-[#ded8c4] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* ROLE */}
          <div>
            <span className="block font-text font-bold text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-2">
              ROLE
            </span>
            <p className="font-text text-sm sm:text-base text-[#151515] font-medium leading-snug">
              {data.overview.role}
            </p>
          </div>

          {/* TOOLS */}
          <div>
            <span className="block font-text font-bold text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-2">
              TOOLS
            </span>
            <p className="font-text text-sm sm:text-base text-[#151515] font-medium leading-snug">
              {data.overview.tools}
            </p>
          </div>

          {/* DELIVERABLES */}
          <div>
            <span className="block font-text font-bold text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-2">
              DELIVERABLES
            </span>
            <p className="font-text text-sm sm:text-base text-[#151515] font-medium leading-snug">
              {data.overview.deliverables}
            </p>
          </div>

          {/* LIVE */}
          <div>
            <span className="block font-text font-bold text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-2">
              GITHUB
            </span>
            <a
              href="https://github.com/PRN-6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-text text-sm sm:text-base text-[#151515] font-semibold hover:text-[#7B5CFF] transition-colors group cursor-pointer"
            >
              <span className="underline decoration-[#7B5CFF] decoration-2 underline-offset-4">
                {data.overview.liveDisplay}
              </span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
