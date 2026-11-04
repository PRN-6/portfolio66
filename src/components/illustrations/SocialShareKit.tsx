import React from 'react';
import { CatLogoBadge } from './CatLogoBadge';
import { StretchedCatIllustration } from './StretchedCatIllustration';
import { SittingCatsIllustration } from './SittingCatsIllustration';

export const SocialShareKit: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {/* --- Card 1: Main Dark Home OG Card --- */}
      <div className="group relative bg-[#151515] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-transform duration-300 hover:scale-[1.01]">
        {/* Header */}
        <div className="flex items-center justify-between z-10">
          <CatLogoBadge size={44} showText textColor="#FFFFFF" />
          <span className="text-[10px] tracking-widest uppercase text-white/50 border border-white/20 px-2.5 py-1 rounded-full">
            OG : HOME
          </span>
        </div>

        {/* Center Typography */}
        <div className="z-10 my-4 max-w-sm">
          <span className="text-[11px] font-bold tracking-widest text-[#7B5CFF] uppercase block mb-1">
            CALM PUZZLE GAMES
          </span>
          <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] leading-tight tracking-wide">
            SMALL GAMES FOR QUIET MOMENTS.
          </h3>
        </div>

        {/* Stretched Cat Overlay */}
        <div className="absolute right-[-60px] bottom-[-20px] w-[340px] sm:w-[420px] opacity-90 pointer-events-none group-hover:translate-x-2 transition-transform duration-500">
          <StretchedCatIllustration />
        </div>

        {/* Footer */}
        <div className="z-10 text-xs text-white/60 font-medium">
          Blockmoon · Moon Arrows · Free on Android
        </div>
      </div>

      {/* --- Card 2: Violet Games OG Card --- */}
      <div className="group relative bg-[#7B5CFF] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-transform duration-300 hover:scale-[1.01]">
        {/* Header */}
        <div className="flex items-center justify-between z-10">
          <CatLogoBadge size={44} showText textColor="#FFFFFF" />
          <span className="text-[10px] tracking-widest uppercase text-white/80 border border-white/30 px-2.5 py-1 rounded-full">
            OG : GAMES
          </span>
        </div>

        {/* Left Typography */}
        <div className="z-10 my-4 max-w-xs">
          <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase block mb-1">
            OUR GAMES
          </span>
          <h3 className="font-headline text-3xl sm:text-4xl text-white leading-tight tracking-wide">
            BLOCKMOON & MOON ARROWS
          </h3>
        </div>

        {/* Floating Mini Mockups */}
        <div className="absolute right-4 bottom-2 flex items-end gap-2 group-hover:-translate-y-2 transition-transform duration-500">
          {/* Mini Blockmoon phone screen */}
          <div className="w-24 sm:w-28 h-44 bg-[#0d101d] rounded-2xl p-2 border-2 border-white/30 shadow-2xl overflow-hidden flex flex-col items-center">
            <span className="text-[9px] text-[#FECA57] font-bold">1250</span>
            <div className="grid grid-cols-4 gap-0.5 mt-2 w-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 rounded-[2px] ${
                    i % 3 === 0
                      ? 'bg-[#7B5CFF]'
                      : i % 2 === 0
                      ? 'bg-[#00D2D3]'
                      : 'bg-[#1e2235]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mini Moon Arrows phone screen */}
          <div className="w-24 sm:w-28 h-48 bg-[#09101f] rounded-2xl p-2 border-2 border-white/40 shadow-2xl overflow-hidden flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-white text-[9px] flex items-center justify-center font-bold text-black mt-1">
              🌙
            </div>
            <span className="text-[8px] text-white/80 mt-1">MOON ARROWS</span>
            <div className="mt-3 bg-[#7B5CFF] text-[8px] text-white px-2 py-0.5 rounded-full font-bold">
              PLAY LEVEL 12
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="z-10 text-xs text-white/90 font-medium">
          Free, calm puzzle games for Android
        </div>
      </div>

      {/* --- Card 3: Cream Blog OG Card --- */}
      <div className="group relative bg-[#F8F6EF] text-[#151515] rounded-3xl p-6 sm:p-8 border border-[#ded8c4] shadow-2xl overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-transform duration-300 hover:scale-[1.01]">
        {/* Header */}
        <div className="flex items-center justify-between z-10">
          <CatLogoBadge size={44} showText textColor="#151515" />
          <span className="text-[10px] tracking-widest uppercase text-black/60 border border-black/20 px-2.5 py-1 rounded-full">
            OG : BLOG
          </span>
        </div>

        {/* Typography */}
        <div className="z-10 my-4 max-w-xs">
          <span className="text-[11px] font-bold tracking-widest text-[#7B5CFF] uppercase block mb-1">
            THE GIKA GAMES BLOG
          </span>
          <h3 className="font-headline text-3xl sm:text-4xl text-[#151515] leading-tight tracking-wide">
            PUZZLE TIPS, GAME LISTS & DEVLOG
          </h3>
        </div>

        {/* Sitting Cats Illustration */}
        <div className="absolute right-[-10px] bottom-[-20px] w-52 sm:w-60 pointer-events-none group-hover:scale-105 transition-transform duration-500">
          <SittingCatsIllustration />
        </div>

        {/* Footer */}
        <div className="z-10 text-xs text-black/70 font-medium">
          Puzzle articles & cozy studio devlogs
        </div>
      </div>

      {/* --- Card 4: 512px App Icon Badge Preview --- */}
      <div className="bg-[#1a1a1a] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 min-h-[300px] sm:min-h-[340px]">
        {/* The 512px App Icon rounded squircle */}
        <div className="w-44 h-44 sm:w-52 sm:h-52 bg-white rounded-[44px] shadow-2xl p-4 flex items-center justify-center transition-transform hover:rotate-6 hover:scale-105 duration-300">
          <CatLogoBadge size={140} variant="badge-only" />
        </div>

        {/* Text Details & Download */}
        <div className="flex flex-col justify-center text-center sm:text-left space-y-3">
          <span className="text-[11px] font-bold tracking-widest text-[#7B5CFF] uppercase">
            ICON SPECIFICATION
          </span>
          <h4 className="font-headline text-2xl text-white">
            512 × 512 PX APP ICON
          </h4>
          <p className="text-xs text-white/60 leading-relaxed max-w-xs">
            Open Graph cards for the home, games and blog pages, plus an adaptive 512 px app icon and favicon.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
            <span className="bg-[#242424] text-white/80 text-[10px] px-3 py-1.5 rounded-lg border border-white/10 font-mono">
              PNG / SVG / WEBP
            </span>
            <span className="bg-[#242424] text-white/80 text-[10px] px-3 py-1.5 rounded-lg border border-white/10 font-mono">
              RGBA 32-bit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
