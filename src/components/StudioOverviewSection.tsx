import React from 'react';
import { SittingCatsIllustration } from './illustrations/SittingCatsIllustration';
import type { PortfolioConfig } from '../portfolioData';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface StudioOverviewProps {
  data: PortfolioConfig;
  onNavigate?: (page: 'projects' | 'contact') => void;
}

export const StudioOverviewSection: React.FC<StudioOverviewProps> = ({
  data,
  onNavigate,
}) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-70px)] bg-[#F8F6EF] text-[#151515] py-5 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-3 sm:mb-4"
        >
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#7B5CFF]">
            {data.overview.tag}
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-black/50">
            PORTFOLIO66 · CREATIVE STUDIO
          </span>
        </motion.div>

        {/* Main Content Layout: Text Column Left, Cats Column Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center my-auto py-2 sm:py-4">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-[#151515] uppercase tracking-tight break-words">
              {data.overview.headline}
            </h2>

            <p className="font-text text-base sm:text-lg md:text-xl text-[#151515]/90 leading-relaxed max-w-2xl">
              {data.overview.paragraph1}
            </p>

            <p className="font-text text-sm sm:text-base md:text-lg text-[#151515]/80 leading-relaxed max-w-2xl">
              {data.overview.paragraph2}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate?.('projects')}
                className="bg-[#7B5CFF] hover:bg-[#6846ed] text-white font-headline tracking-widest text-xs uppercase px-5 sm:px-6 py-2.5 rounded-full shadow-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight size={14} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate?.('contact')}
                className="border border-black/20 hover:border-black text-[#151515] font-headline tracking-widest text-xs uppercase px-4 sm:px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                GET IN TOUCH
              </motion.button>
            </div>
          </motion.div>

          {/* Right Cats Illustration Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.15 },
              scale: { duration: 0.6, delay: 0.15 },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end py-2 lg:py-0"
          >
            <div className="w-full max-w-[240px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              <SittingCatsIllustration />
            </div>
          </motion.div>
        </div>

        {/* Bottom Metadata Grid (ROLE, TOOLS, DELIVERABLES, GITHUB) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-4 sm:pt-6 border-t border-[#ded8c4] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {/* ROLE */}
          <div>
            <span className="block font-text font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-0.5 sm:mb-1">
              ROLE
            </span>
            <p className="font-text text-xs sm:text-sm md:text-base text-[#151515] font-medium leading-snug">
              {data.overview.role}
            </p>
          </div>

          {/* TOOLS */}
          <div>
            <span className="block font-text font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-0.5 sm:mb-1">
              TOOLS & STACK
            </span>
            <p className="font-text text-xs sm:text-sm md:text-base text-[#151515] font-medium leading-snug">
              {data.overview.tools}
            </p>
          </div>

          {/* DELIVERABLES */}
          <div>
            <span className="block font-text font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-0.5 sm:mb-1">
              DELIVERABLES
            </span>
            <p className="font-text text-xs sm:text-sm md:text-base text-[#151515] font-medium leading-snug">
              {data.overview.deliverables}
            </p>
          </div>

          {/* GITHUB */}
          <div>
            <span className="block font-text font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#7B5CFF] mb-0.5 sm:mb-1">
              GITHUB
            </span>
            <a
              href={data.meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-text text-xs sm:text-sm md:text-base text-[#151515] font-semibold hover:text-[#7B5CFF] transition-colors group cursor-pointer break-all"
            >
              <span className="underline decoration-[#7B5CFF] decoration-2 underline-offset-4">
                {data.overview.liveDisplay}
              </span>
              <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
