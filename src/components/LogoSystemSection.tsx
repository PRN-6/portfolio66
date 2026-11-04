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
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#151515] text-[#F8F6EF] py-6 sm:py-8 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF]">
            {data.branding.tag}
          </span>
        </motion.div>

        {/* Headline & Main Badge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4">
          {/* Left Column: Headline and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-[0.92] text-white uppercase tracking-tight">
              {data.branding.headline}
            </h2>

            <p className="font-text text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
              {data.branding.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-[#222] px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#7B5CFF]" />
                Violet Outline: Playful & Curious
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-[#222] px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-white" />
                Solid Black: Calm & Architectural
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-[#222] px-3.5 py-1.5 rounded-full border border-white/10">
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
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-full max-w-[420px] bg-white rounded-[40px] sm:rounded-[52px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer"
            >
              <div className="w-full max-w-[300px] aspect-[1.2/1] flex items-center justify-center">
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
          className="pt-6 border-t border-white/10"
        >
          <span className="block font-text font-bold text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
            COLORWAY VARIANTS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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
