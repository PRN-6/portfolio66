import React from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import type { PortfolioConfig } from '../portfolioData';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoSystemProps {
  data: PortfolioConfig;
}

export const LogoSystemSection: React.FC<LogoSystemProps> = ({ data }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-70px)] bg-[#151515] text-[#F8F6EF] py-5 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 sm:mb-4"
        >
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#7B5CFF]">
            {data.branding.tag}
          </span>
        </motion.div>

        {/* Headline & Main Badge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center my-auto py-2 sm:py-4">
          {/* Left Column: Headline and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4 sm:space-y-6"
          >
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white uppercase tracking-tight break-words">
              {data.branding.headline}
            </h2>

            <p className="font-text text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              {data.branding.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white/70 bg-[#222] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#7B5CFF]" />
                Violet Outline: Playful & Curious
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white/70 bg-[#222] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-white" />
                Solid Black: Calm & Architectural
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white/70 bg-[#222] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10">
                <Sparkles size={12} className="text-[#FECA57]" />
                Star: Gentle Delight
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Rounded Badge Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center lg:justify-end py-2 lg:py-0"
          >
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] bg-white rounded-3xl sm:rounded-[40px] md:rounded-[52px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer"
            >
              <div className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[300px] aspect-[1.2/1] flex items-center justify-center">
                <CatLogoBadge size="100%" variant="badge-only" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom 3 Logo Variants (Cream, Violet, Dark) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 sm:pt-6 border-t border-white/10"
        >
          <span className="block font-text font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/50 mb-2 sm:mb-4">
            COLORWAY VARIANTS
          </span>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            <motion.div whileHover={{ y: -6 }}>
              <CatLogoBadge variant="cream" brandName={data.meta.studioName} />
            </motion.div>
            <motion.div whileHover={{ y: -6 }}>
              <CatLogoBadge variant="violet" brandName={data.meta.studioName} />
            </motion.div>
            <motion.div whileHover={{ y: -6 }}>
              <CatLogoBadge variant="dark" brandName={data.meta.studioName} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
