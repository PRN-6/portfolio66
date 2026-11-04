import React from 'react';
import type { PortfolioConfig } from '../../portfolioData';
import { NexaFlowDashboardMockup } from '../illustrations/NexaFlowDashboardMockup';
import { AuraUIDesignMockup } from '../illustrations/AuraUIDesignMockup';
import { GithubIcon } from '../illustrations/GithubIcon';
import { ArrowRight, Code2, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectsPageProps {
  data: PortfolioConfig;
  onNavigate?: (page: 'contact') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ data, onNavigate }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-140px)] bg-[#7B5CFF] text-white py-8 sm:py-12 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-white/80 block mb-1">
              ENGINEERING PORTFOLIO
            </span>
            <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-none text-white uppercase tracking-tight">
              FEATURED WORKS.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-black/20 border border-white/20 px-3.5 py-1.5 rounded-full font-headline tracking-wider">
              PRINSON NAZARETH · 2026
            </span>
          </div>
        </div>

        {/* 2 Featured Projects Side-by-Side or Stacked Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-auto py-2">
          {/* Project 1: NexaFlow Cloud */}
          <div className="bg-[#151515] rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl flex flex-col justify-between">
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
                className="inline-flex items-center gap-2 bg-[#7B5CFF] hover:bg-[#6846ed] text-white px-5 py-2.5 rounded-full font-headline text-xs tracking-wider transition-all"
              >
                <GithubIcon size={14} />
                <span>GITHUB REPO</span>
                <ArrowRight size={13} />
              </a>
              <span className="text-xs font-mono text-white/40">React 19 · WebSocket · Go</span>
            </div>
          </div>

          {/* Project 2: Aura Design System */}
          <div className="bg-[#F8F6EF] text-[#151515] rounded-3xl p-6 sm:p-8 border border-[#ded8c4] shadow-2xl flex flex-col justify-between">
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
                className="inline-flex items-center gap-2 bg-[#151515] hover:bg-black text-white px-5 py-2.5 rounded-full font-headline text-xs tracking-wider transition-all"
              >
                <Code2 size={14} />
                <span>EXPLORE TOKENS</span>
                <ArrowRight size={13} />
              </a>
              <span className="text-xs font-mono text-[#151515]/50">TypeScript · Tailwind · Radix</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <span>All repositories open source and tested for high-volume production.</span>
          <button
            onClick={() => onNavigate?.('contact')}
            className="underline hover:text-white font-headline tracking-wider uppercase"
          >
            Need a custom web application? Let's talk →
          </button>
        </div>
      </div>
    </section>
  );
};
