import React, { useState } from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { StretchedCatIllustration } from './illustrations/StretchedCatIllustration';
import type { PortfolioConfig } from '../portfolioData';
import { Moon, X } from 'lucide-react';

interface MobileShowcaseProps {
  data: PortfolioConfig;
}

export const MobileShowcaseSection: React.FC<MobileShowcaseProps> = ({ data }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(1);

  return (
    <section
      id="mobile"
      className="relative w-full bg-[#F8F6EF] text-[#151515] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#ded8c4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
            MOBILE EXPERIENCE
          </span>
          <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-none text-[#151515] uppercase tracking-tight">
            MADE FOR ONE HAND.
          </h2>
          <p className="font-text text-sm sm:text-base text-[#151515]/70 mt-2 max-w-xl">
            Optimized tap targets, fluid typographic responsiveness, and high contrast night mode engineered for seamless single-handed mobile inspection.
          </p>
        </div>

        {/* 5 Mobile Mockup Frames Container */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory">
          {/* ================= PHONE 1: MOBILE HOME ================= */}
          <div
            onClick={() => setActiveScreenIndex(0)}
            className={`w-[240px] sm:w-[260px] flex-shrink-0 bg-[#0c0d12] rounded-[38px] p-2.5 border-[3.5px] border-[#222] shadow-2xl transition-all duration-300 snap-center cursor-pointer ${
              activeScreenIndex === 0
                ? 'ring-4 ring-[#7B5CFF] scale-[1.02]'
                : 'hover:scale-[1.01] opacity-95'
            }`}
          >
            <div className="w-full h-[500px] bg-[#151515] rounded-[30px] overflow-hidden flex flex-col justify-between p-3.5 pt-6 text-white relative">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-10" />

              {/* Header */}
              <div className="flex items-center justify-between z-10">
                <CatLogoBadge size={26} variant="badge-only" />
                <span className="text-white text-xs">☰</span>
              </div>

              {/* Hero content */}
              <div className="my-auto z-10 space-y-2">
                <h4 className="font-headline text-xl text-[#7B5CFF] uppercase leading-none">
                  PRINSON NAZARETH
                </h4>
                <p className="font-headline text-sm text-white uppercase leading-tight">
                  FULL-STACK DEVELOPER
                </p>
                <p className="font-text text-[10px] text-white/70 leading-snug">
                  Crafting clean code, calm software, and intuitive digital experiences with React 19 & TypeScript.
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <div className="bg-[#7B5CFF] text-white text-[9px] font-headline px-3 py-1 rounded-full">
                    PROJECTS
                  </div>
                  <div className="border border-white/30 text-white text-[9px] font-headline px-3 py-1 rounded-full">
                    SAY HELLO
                  </div>
                </div>

                <div className="w-full pt-1 pointer-events-none">
                  <StretchedCatIllustration />
                </div>
              </div>

              {/* Bottom Card Preview */}
              <div className="bg-[#7B5CFF] p-2 rounded-xl z-10">
                <span className="text-[8px] font-bold uppercase text-white/80">
                  FEATURED WORK
                </span>
                <p className="font-headline text-xs text-white uppercase">
                  NEXAFLOW CLOUD
                </p>
              </div>
            </div>
          </div>

          {/* ================= PHONE 2: FULLSCREEN MOBILE MENU ================= */}
          <div
            onClick={() => setActiveScreenIndex(1)}
            className={`w-[240px] sm:w-[260px] flex-shrink-0 bg-[#0c0d12] rounded-[38px] p-2.5 border-[3.5px] border-[#222] shadow-2xl transition-all duration-300 snap-center cursor-pointer ${
              activeScreenIndex === 1
                ? 'ring-4 ring-[#7B5CFF] scale-[1.02]'
                : 'hover:scale-[1.01] opacity-95'
            }`}
          >
            <div className="w-full h-[500px] bg-[#151515] rounded-[30px] overflow-hidden flex flex-col justify-between p-4 pt-6 text-white relative">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-10" />

              {/* Header */}
              <div className="flex items-center justify-between z-10">
                <CatLogoBadge size={26} variant="badge-only" />
                <button className="text-white text-xs p-1">
                  <X size={16} />
                </button>
              </div>

              {/* Numbered Menu Items */}
              <div className="my-auto z-10 space-y-1">
                {[
                  { num: '01', name: 'HOME', active: false },
                  { num: '02', name: 'PROJECTS', active: true },
                  { num: '03', name: 'ABOUT', active: false },
                  { num: '04', name: 'ARTICLES', active: false },
                  { num: '05', name: 'FAQ', active: false },
                  { num: '06', name: 'CONTACT', active: false },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-baseline gap-2 group cursor-pointer"
                  >
                    <span className="font-mono text-[9px] text-[#7B5CFF] font-bold">
                      {item.num}
                    </span>
                    <span
                      className={`font-headline text-2xl tracking-wide uppercase transition-colors ${
                        item.active
                          ? 'text-[#7B5CFF]'
                          : 'text-white hover:text-[#7B5CFF]'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Info */}
              <div className="z-10 space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-[9px] text-white/60">
                  <span>GITHUB: @PRN-6</span>
                  <Moon size={14} className="text-white/80" />
                </div>
                <div className="text-[9px] text-white/50">
                  prinsonnazareth2@gmail.com
                </div>

                <div className="bg-[#7B5CFF] text-white text-center py-2 rounded-xl font-headline text-xs tracking-wider">
                  GET IN TOUCH
                </div>
              </div>
            </div>
          </div>

          {/* ================= PHONE 3: MOBILE PROJECTS ================= */}
          <div
            onClick={() => setActiveScreenIndex(2)}
            className={`w-[240px] sm:w-[260px] flex-shrink-0 bg-[#0c0d12] rounded-[38px] p-2.5 border-[3.5px] border-[#222] shadow-2xl transition-all duration-300 snap-center cursor-pointer ${
              activeScreenIndex === 2
                ? 'ring-4 ring-[#7B5CFF] scale-[1.02]'
                : 'hover:scale-[1.01] opacity-95'
            }`}
          >
            <div className="w-full h-[500px] bg-[#151515] rounded-[30px] overflow-hidden flex flex-col justify-between p-3.5 pt-6 text-white relative">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-10" />

              {/* Header */}
              <div className="flex items-center justify-between z-10">
                <CatLogoBadge size={26} variant="badge-only" />
                <span className="text-white text-xs">☰</span>
              </div>

              <div className="z-10 mt-2">
                <span className="text-[9px] font-bold text-[#7B5CFF] uppercase tracking-widest block">
                  SELECTED WORKS
                </span>
                <h4 className="font-headline text-2xl text-[#7B5CFF] uppercase">
                  PROJECTS
                </h4>
                <p className="font-text text-[10px] text-white/70">
                  Cloud telemetry dashboards & accessible design tokens.
                </p>
              </div>

              {/* Projects Card Preview in Phone */}
              <div className="z-10 bg-[#202020] rounded-xl p-3 border border-white/10 my-auto space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-mono text-[#00D2D3] uppercase">
                    50K+ OPS/SEC
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <h5 className="font-headline text-base text-white uppercase">
                  NEXAFLOW CLOUD
                </h5>
                <p className="font-text text-[9px] text-white/70 leading-snug">
                  Real-time telemetry and distributed cloud observability platform.
                </p>
                <div className="flex gap-1 pt-1">
                  <span className="text-[7px] bg-[#7B5CFF]/20 text-[#7B5CFF] px-2 py-0.5 rounded font-mono">
                    React
                  </span>
                  <span className="text-[7px] bg-[#7B5CFF]/20 text-[#7B5CFF] px-2 py-0.5 rounded font-mono">
                    TypeScript
                  </span>
                  <span className="text-[7px] bg-[#7B5CFF]/20 text-[#7B5CFF] px-2 py-0.5 rounded font-mono">
                    WebSocket
                  </span>
                </div>
              </div>

              {/* Tag */}
              <div className="z-10 text-center text-[9px] text-white/50">
                FULL-STACK & UI ARCHITECTURE · 2026
              </div>
            </div>
          </div>

          {/* ================= PHONE 4: MOBILE ARTICLES ================= */}
          <div
            onClick={() => setActiveScreenIndex(3)}
            className={`w-[240px] sm:w-[260px] flex-shrink-0 bg-[#0c0d12] rounded-[38px] p-2.5 border-[3.5px] border-[#222] shadow-2xl transition-all duration-300 snap-center cursor-pointer ${
              activeScreenIndex === 3
                ? 'ring-4 ring-[#7B5CFF] scale-[1.02]'
                : 'hover:scale-[1.01] opacity-95'
            }`}
          >
            <div className="w-full h-[500px] bg-[#151515] rounded-[30px] overflow-hidden flex flex-col justify-between p-3.5 pt-6 text-white relative">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-10" />

              {/* Header */}
              <div className="flex items-center justify-between z-10">
                <CatLogoBadge size={26} variant="badge-only" />
                <span className="text-white text-xs">☰</span>
              </div>

              <div className="z-10 mt-2">
                <span className="text-[9px] font-bold text-[#7B5CFF] uppercase tracking-widest block">
                  TECHNICAL WRITING
                </span>
                <h4 className="font-headline text-2xl text-[#7B5CFF] uppercase">
                  ARTICLES
                </h4>
                <p className="font-text text-[10px] text-white/70">
                  Engineering notes & calm software architecture.
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="bg-[#7B5CFF] text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
                    ALL
                  </span>
                  <span className="bg-[#242424] text-white/70 text-[8px] px-2 py-0.5 rounded-full">
                    DEVLOG
                  </span>
                  <span className="bg-[#242424] text-white/70 text-[8px] px-2 py-0.5 rounded-full">
                    UI/UX
                  </span>
                </div>
              </div>

              {/* Article Card in Phone */}
              <div className="z-10 bg-[#202020] rounded-xl p-2.5 border border-white/10 my-auto">
                <div className="w-full h-20 bg-[#7B5CFF] rounded-lg mb-2 flex items-center justify-center text-[8px] font-bold uppercase tracking-wider text-white">
                  DEVLOG · OCT 2026
                </div>
                <span className="text-[7px] text-[#7B5CFF] font-bold uppercase">
                  React 19 & Vite Performance
                </span>
                <p className="font-headline text-xs text-white uppercase mt-1 leading-tight">
                  Building High-Performance React 19 Apps with Modern Vite
                </p>
              </div>

              <div className="w-16 h-1 bg-white/20 rounded-full mx-auto" />
            </div>
          </div>

          {/* ================= PHONE 5: MOBILE FAQ ================= */}
          <div
            onClick={() => setActiveScreenIndex(4)}
            className={`w-[240px] sm:w-[260px] flex-shrink-0 bg-[#0c0d12] rounded-[38px] p-2.5 border-[3.5px] border-[#222] shadow-2xl transition-all duration-300 snap-center cursor-pointer ${
              activeScreenIndex === 4
                ? 'ring-4 ring-[#7B5CFF] scale-[1.02]'
                : 'hover:scale-[1.01] opacity-95'
            }`}
          >
            <div className="w-full h-[500px] bg-[#151515] rounded-[30px] overflow-hidden flex flex-col justify-between p-3.5 pt-6 text-white relative">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-10" />

              {/* Header */}
              <div className="flex items-center justify-between z-10">
                <CatLogoBadge size={26} variant="badge-only" />
                <span className="text-white text-xs">☰</span>
              </div>

              <div className="z-10 mt-2">
                <span className="text-[9px] font-bold text-[#7B5CFF] uppercase tracking-widest block">
                  COLLABORATION
                </span>
                <h4 className="font-headline text-2xl text-[#7B5CFF] uppercase">
                  FAQ
                </h4>
                <p className="font-text text-[10px] text-white/70">
                  Quick answers on availability & tech stack.
                </p>
              </div>

              {/* FAQ items in Phone */}
              <div className="z-10 my-auto bg-[#F8F6EF] text-[#151515] p-3 rounded-xl space-y-2 text-[10px]">
                <div className="border-b border-black/10 pb-1.5">
                  <div className="font-headline text-[11px] text-[#151515] uppercase flex justify-between">
                    <span>WHAT ROLES ARE YOU OPEN TO?</span>
                    <span className="text-[#7B5CFF] font-bold">-</span>
                  </div>
                  <p className="font-text text-[9px] text-[#151515]/80 mt-1">
                    Senior Full-Stack Engineering roles and design system architecture.
                  </p>
                </div>

                <div className="border-b border-black/10 pb-1.5">
                  <div className="font-headline text-[11px] text-[#151515] uppercase flex justify-between">
                    <span>CAN YOU WORK REMOTE?</span>
                    <span className="text-[#7B5CFF] font-bold">+</span>
                  </div>
                </div>

                <div>
                  <div className="font-headline text-[11px] text-[#151515] uppercase flex justify-between">
                    <span>PREFERRED TECH STACK?</span>
                    <span className="text-[#7B5CFF] font-bold">+</span>
                  </div>
                </div>
              </div>

              <div className="w-16 h-1 bg-white/20 rounded-full mx-auto" />
            </div>
          </div>
        </div>

        {/* Indicator navigation dots for mobile */}
        <div className="flex items-center justify-center gap-2 pt-2 sm:hidden">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setActiveScreenIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeScreenIndex === i ? 'w-6 bg-[#7B5CFF]' : 'bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
