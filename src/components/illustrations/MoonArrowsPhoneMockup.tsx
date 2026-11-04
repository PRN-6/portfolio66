import React, { useState } from 'react';
import { ArrowUp, ArrowRight, ArrowDown, ArrowLeft, Moon, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MoonArrowsPhoneProps {
  className?: string;
  interactive?: boolean;
}

export const MoonArrowsPhoneMockup: React.FC<MoonArrowsPhoneProps> = ({
  className = '',
  interactive = true,
}) => {
  // Arrow nodes in the labyrinth
  const [solvedNodes, setSolvedNodes] = useState<number[]>([]);
  const totalNodes = 6;

  const handleArrowTap = (id: number) => {
    if (!interactive) return;
    if (solvedNodes.includes(id)) return;

    const next = [...solvedNodes, id];
    setSolvedNodes(next);

    if (next.length === totalNodes) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#7B5CFF', '#F8F6EF', '#60A5FA'],
      });
      setTimeout(() => {
        setSolvedNodes([]);
      }, 2200);
    }
  };

  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[310px] rounded-[42px] p-[10px] bg-[#0c0d12] shadow-2xl border-[4px] border-[#2a2c38] select-none ${className}`}
    >
      {/* Phone Camera / Speaker notch pill */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#151722] rounded-full z-20 flex items-center justify-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#08090e]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#1e2235]" />
      </div>

      {/* Screen Frame */}
      <div className="relative w-full h-[580px] sm:h-[620px] rounded-[34px] overflow-hidden bg-gradient-to-b from-[#09101f] via-[#0d1629] to-[#080c16] flex flex-col justify-between p-4 pt-9 border border-[#23304a]">
        {/* Nocturnal stars & constellations */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-12 left-10 w-1 h-1 bg-blue-200 rounded-full animate-ping" />
          <div className="absolute top-24 right-8 w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-36 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full" />
          <div className="absolute top-64 right-14 w-1 h-1 bg-white rounded-full" />
        </div>

        {/* Top Header: Moon & Level */}
        <div className="relative z-10 flex flex-col items-center pt-2">
          {/* Glowing Crescent Moon */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-slate-200 via-sky-100 to-white shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center justify-center mb-2">
            <Moon size={24} className="text-[#09101f] fill-[#09101f]" />
          </div>

          <h3 className="font-headline tracking-widest text-lg text-white">
            MOON ARROWS
          </h3>
          <span className="text-[11px] text-blue-200/70 tracking-wide font-medium">
            Tap arrows in order to unwind the sky
          </span>
        </div>

        {/* Labyrinth Arrow Puzzle Maze Area */}
        <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center">
          {/* Constellation line connectors */}
          <div className="relative w-[210px] h-[210px] bg-[#10192e]/70 rounded-3xl border border-[#233558] p-3 shadow-inner flex flex-wrap items-center justify-center gap-3">
            {[
              { id: 1, icon: ArrowUp, dir: 'up', label: '1' },
              { id: 2, icon: ArrowRight, dir: 'right', label: '2' },
              { id: 3, icon: ArrowDown, dir: 'down', label: '3' },
              { id: 4, icon: ArrowLeft, dir: 'left', label: '4' },
              { id: 5, icon: ArrowUp, dir: 'up', label: '5' },
              { id: 6, icon: ArrowRight, dir: 'right', label: '6' },
            ].map((node) => {
              const isSolved = solvedNodes.includes(node.id);
              const Icon = node.icon;
              return (
                <button
                  key={node.id}
                  onClick={() => handleArrowTap(node.id)}
                  disabled={!interactive || isSolved}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    isSolved
                      ? 'bg-[#7B5CFF] border-[#a08aff] shadow-[0_0_15px_rgba(123,92,255,0.8)] scale-95 text-white'
                      : 'bg-[#15223e] border-[#314875] text-blue-200 hover:border-[#7B5CFF] hover:scale-105 active:scale-95'
                  }`}
                >
                  <Icon size={22} className={isSolved ? 'animate-pulse' : ''} />
                </button>
              );
            })}
          </div>

          {solvedNodes.length === totalNodes && (
            <div className="mt-3 text-center animate-bounce">
              <span className="text-xs font-bold text-violet-300 bg-violet-900/60 border border-violet-500/50 px-3 py-1 rounded-full">
                ✨ CONSTELLATION UNLOCKED!
              </span>
            </div>
          )}
        </div>

        {/* Bottom CTA & Level progress */}
        <div className="relative z-10 space-y-2 pb-1">
          <div className="w-full bg-[#7B5CFF] hover:bg-[#6c4bec] text-white py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 font-headline tracking-wider text-sm shadow-lg transition-transform active:scale-95 cursor-pointer">
            <Play size={14} className="fill-white" /> PLAY · LEVEL 12
          </div>

          <div className="bg-[#121c32]/80 border border-[#25375d] p-2 rounded-xl flex items-center justify-between text-[11px] text-blue-200/80 px-3">
            <span>📅 Daily Puzzle</span>
            <span className="text-yellow-400">★ ★ ★</span>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="w-24 h-1 bg-white/20 rounded-full mx-auto" />
      </div>
    </div>
  );
};
