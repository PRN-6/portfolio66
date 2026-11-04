import React from 'react';
import type { PortfolioConfig } from '../../portfolioData';
import { NexaFlowDashboardMockup } from '../illustrations/NexaFlowDashboardMockup';
import { AuraUIDesignMockup } from '../illustrations/AuraUIDesignMockup';
import { GithubIcon } from '../illustrations/GithubIcon';
import { ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsPageProps {
  data: PortfolioConfig;
  onNavigate?: (page: 'contact') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ data, onNavigate }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#7B5CFF] text-white py-6 sm:py-8 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
        >
          <div>
            <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-white/80 block mb-1">
              ENGINEERING PORTFOLIO
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-white uppercase tracking-tight break-words">
              FEATURED WORKS.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-black/20 border border-white/20 px-3.5 py-1.5 rounded-full font-headline tracking-wider">
              {data.meta.studioName} · 2026
            </span>
          </div>
        </motion.div>

        {/* 2 Featured Projects Side-by-Side Grid with Framer Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-auto py-2">
          {/* Project 1: NexaFlow Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#151515] rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl flex flex-col justify-between transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/20 px-3 py-1 rounded-full uppercase">
                  CLOUD & DISTRIBUTED SYSTEMS
                </span>
                <span className="text-xs font-mono text-emerald-400">● 50K+ ops/sec</span>
              </div>

              <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase">
                NEXAFLOW CLOUD
              </h3>

              <p className="font-text text-sm text-white/80 leading-relaxed">
                A high-throughput cloud observability platform streaming live server metrics, distributed traces, and canvas-based node topologies with sub-50ms latency.
              </p>

              <div className="py-2">
                <NexaFlowDashboardMockup interactive={true} />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={data.meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7B5CFF] hover:bg-[#6846ed] text-white px-5 py-2.5 rounded-full font-headline text-xs tracking-wider transition-all cursor-pointer"
              >
                <GithubIcon size={14} />
                <span>GITHUB REPO</span>
                <ArrowRight size={13} />
              </a>
              <span className="text-xs font-mono text-white/40">React 19 · WebSocket · Go</span>
            </div>
          </motion.div>

          {/* Project 2: Aura Design System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-[#F8F6EF] text-[#151515] rounded-3xl p-6 sm:p-8 border border-[#ded8c4] shadow-2xl flex flex-col justify-between transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-3 py-1 rounded-full uppercase">
                  DESIGN SYSTEM & TOKENS
                </span>
                <span className="text-xs font-mono text-[#7B5CFF] font-bold">40+ Components</span>
              </div>

              <h3 className="font-headline text-3xl sm:text-4xl text-[#151515] uppercase">
                AURA DESIGN TOKENS
              </h3>

              <p className="font-text text-sm text-[#151515]/80 leading-relaxed">
                An ergonomic component suite featuring 40+ WCAG AAA compliant primitives, fluid typographic scaling, and zero-runtime CSS variable design tokens.
              </p>

              <div className="py-2">
                <AuraUIDesignMockup />
              </div>
            </div>

            <div className="pt-4 border-t border-[#ded8c4] flex items-center justify-between">
              <a
                href={data.meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#151515] hover:bg-black text-white px-5 py-2.5 rounded-full font-headline text-xs tracking-wider transition-all cursor-pointer"
              >
                <Code2 size={14} />
                <span>EXPLORE TOKENS</span>
                <ArrowRight size={13} />
              </a>
              <span className="text-xs font-mono text-[#151515]/50">TypeScript · Tailwind · Radix</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80"
        >
          <span>All repositories open source and tested for high-volume production.</span>
          <button
            onClick={() => onNavigate?.('contact')}
            className="underline hover:text-white font-headline tracking-wider uppercase cursor-pointer"
          >
            Need a custom web application? Let's talk →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
