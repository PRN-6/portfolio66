import React from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { StretchedCatIllustration } from './illustrations/StretchedCatIllustration';
import type { PortfolioConfig } from '../portfolioData';
import { ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  data: PortfolioConfig;
  onNavigate?: (page: 'about' | 'projects' | 'contact') => void;
}

export const HeroSection: React.FC<HeroProps> = ({ data, onNavigate }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#151515] text-[#F8F6EF] overflow-hidden flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8">
      {/* Ambient background grid with subtle pulse */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#7B5CFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Status Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-between mb-4"
        >
          <p className="font-text uppercase tracking-[0.25em] text-xs sm:text-sm text-white/70 font-semibold flex items-center gap-2">
            <span>{data.meta.discipline}</span>
          </p>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Select Projects</span>
          </div>
        </motion.div>

        {/* Center Main Stage: Anton Title & Sleek Cat Illustration */}
        <div className="my-auto py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Massive Anton Headline with Entrance Stagger */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="z-10 max-w-2xl"
            >
              <span className="font-headline tracking-widest text-sm sm:text-base text-white/60 block mb-2">
                PORTFOLIO66 · CREATIVE STUDIO
              </span>
              <h1 className="font-headline text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.88] text-[#7B5CFF] tracking-tight uppercase select-none drop-shadow-sm">
                {data.meta.studioName}
              </h1>
            </motion.div>

            {/* Stretched Sleek Cat Illustration with Gentle Floating Idle Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.2 },
                scale: { duration: 0.7, delay: 0.2 },
                y: {
                  repeat: Infinity,
                  duration: 4.5,
                  ease: 'easeInOut',
                },
              }}
              className="w-full lg:w-[620px] xl:w-[720px] -mt-6 sm:-mt-10 lg:-mt-20 z-20 pointer-events-auto cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <StretchedCatIllustration />
            </motion.div>
          </div>
        </div>

        {/* Bottom Tagline & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
          <div>
            <p className="font-text text-xl sm:text-2xl text-white/95 font-light tracking-wide max-w-xl">
              {data.meta.tagline}
            </p>
            <p className="font-text text-sm text-white/60 max-w-xl mt-1">
              {data.meta.subTagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('projects')}
              className="bg-[#7B5CFF] hover:bg-[#6c4aec] text-white font-headline tracking-widest text-xs uppercase px-6 py-3 rounded-full shadow-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Code2 size={15} />
              <span>VIEW PROJECTS</span>
              <ArrowRight size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('about')}
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-headline tracking-widest text-xs uppercase px-5 py-3 rounded-full transition-colors cursor-pointer"
            >
              ABOUT ME
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
