import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, RotateCcw } from 'lucide-react';

interface BlockmoonPhoneProps {
  interactive?: boolean;
  className?: string;
}

export const BlockmoonPhoneMockup: React.FC<BlockmoonPhoneProps> = ({
  interactive = true,
  className = '',
}) => {
  // Initial 8x8 puzzle board state with glowing blocks
  const initialGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 1, 1, 2, 0, 3, 0],
    [0, 4, 4, 1, 2, 2, 3, 0],
    [0, 4, 1, 1, 2, 3, 3, 0],
    [4, 4, 1, 1, 2, 2, 3, 3],
    [1, 1, 1, 0, 2, 2, 3, 3],
  ];

  const [grid, setGrid] = useState<number[][]>(initialGrid);
  const [score, setScore] = useState<number>(1250);
  const [combo, setCombo] = useState<number>(0);

  // Color mapping for glowing soft blocks
  const colorMap: Record<number, { bg: string; border: string; glow: string }> = {
    0: { bg: 'bg-[#1e2235]/60', border: 'border-[#2d324d]/40', glow: '' },
    1: { bg: 'bg-[#7B5CFF]', border: 'border-[#9e85ff]', glow: 'shadow-[0_0_10px_rgba(123,92,255,0.7)]' }, // Violet
    2: { bg: 'bg-[#00D2D3]', border: 'border-[#54e9ea]', glow: 'shadow-[0_0_10px_rgba(0,210,211,0.7)]' }, // Cyan
    3: { bg: 'bg-[#FF6B6B]', border: 'border-[#ff9494]', glow: 'shadow-[0_0_10px_rgba(255,107,107,0.7)]' }, // Coral
    4: { bg: 'bg-[#FECA57]', border: 'border-[#fedb88]', glow: 'shadow-[0_0_10px_rgba(254,202,87,0.7)]' }, // Gold
  };

  const handleCellClick = (r: number, c: number) => {
    if (!interactive) return;

    const newGrid = grid.map((row) => [...row]);
    // Cycle block color or toggle
    newGrid[r][c] = (newGrid[r][c] + 1) % 5;
    setGrid(newGrid);

    // Increase score softly
    const newScore = score + 40;
    setScore(newScore);

    // Check if bottom row filled
    if (newGrid[7].every((cell) => cell > 0)) {
      setCombo((prev) => prev + 1);
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.7 },
        colors: ['#7B5CFF', '#00D2D3', '#FF6B6B', '#FECA57'],
      });
      // Clear row 7
      setTimeout(() => {
        setGrid((prev) => {
          const g = prev.map((row) => [...row]);
          g[7] = [0, 0, 0, 0, 0, 0, 0, 0];
          return g;
        });
        setScore((s) => s + 200);
      }, 300);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGrid(initialGrid);
    setScore(1250);
    setCombo(0);
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
      <div className="relative w-full h-[580px] sm:h-[620px] rounded-[34px] overflow-hidden bg-gradient-to-b from-[#131627] via-[#161a2e] to-[#0d101d] flex flex-col justify-between p-4 pt-9 border border-[#2b3047]">
        {/* Night Sky Background elements (Stars & Moon) */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-8 right-6 w-12 h-12 rounded-full bg-violet-400/20 blur-md" />
          <div className="absolute top-12 left-8 w-1 h-1 bg-white rounded-full animate-ping" />
          <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-white/70 rounded-full" />
          <div className="absolute top-28 left-14 w-1 h-1 bg-white/50 rounded-full" />
          <div className="absolute top-44 right-8 w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>

        {/* Top Status & Score Bar */}
        <div className="relative z-10 flex items-center justify-between px-1">
          {/* Studio Icon / Moon */}
          <div className="flex items-center gap-1.5">
            <span className="w-7 h-7 rounded-lg bg-[#7B5CFF]/30 border border-[#7B5CFF]/60 flex items-center justify-center text-xs text-white">
              🌙
            </span>
            <span className="font-headline tracking-wider text-xs text-violet-300">
              BLOCKMOON
            </span>
          </div>

          {/* Interactive reset */}
          {interactive && (
            <button
              onClick={handleReset}
              title="Reset puzzle board"
              className="text-white/40 hover:text-white transition-colors p-1"
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>

        {/* Score Display Box (Like in reference: 1250 with Best pill) */}
        <div className="relative z-10 flex flex-col items-center justify-center py-2">
          <div className="bg-[#1e233d]/80 border border-[#3b4267] backdrop-blur-md px-6 py-2 rounded-2xl flex items-center gap-3 shadow-lg">
            <Trophy size={16} className="text-[#FECA57]" />
            <div className="flex flex-col items-center">
              <span className="text-[10px] tracking-widest uppercase text-white/50 font-medium">
                SCORE
              </span>
              <span className="font-headline text-3xl sm:text-4xl text-white tracking-wider leading-none">
                {score}
              </span>
            </div>
            {combo > 0 && (
              <span className="bg-[#7B5CFF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                +{combo} COMBO!
              </span>
            )}
          </div>
          {interactive && (
            <span className="text-[10px] text-white/50 mt-1.5 flex items-center gap-1">
              <Sparkles size={11} className="text-[#00D2D3]" /> Tap blocks to place & chain combos
            </span>
          )}
        </div>

        {/* 8x8 Block Puzzle Grid */}
        <div className="relative z-10 mx-auto bg-[#101322]/90 p-2 sm:p-2.5 rounded-2xl border border-[#2b304a] shadow-inner">
          <div className="grid grid-cols-8 gap-1 w-[220px] sm:w-[240px] h-[220px] sm:h-[240px]">
            {grid.map((row, r) =>
              row.map((cell, c) => {
                const style = colorMap[cell];
                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => handleCellClick(r, c)}
                    disabled={!interactive}
                    className={`w-full h-full rounded-[4px] border transition-all duration-150 active:scale-90 ${
                      style.bg
                    } ${style.border} ${style.glow} ${
                      cell > 0 ? 'scale-[0.98]' : 'hover:bg-[#282d46]'
                    }`}
                  />
                );
              })
            )}
          </div>
        </div>

        {/* Bottom Pieces Rack (3 upcoming polyominos) */}
        <div className="relative z-10 bg-[#161a2e]/80 border border-[#2d3350] rounded-2xl p-2.5 flex items-center justify-around">
          {/* Piece 1: 2x2 Square */}
          <div className="w-10 h-10 grid grid-cols-2 gap-1 p-1 bg-[#101322] rounded-lg border border-[#282d46] hover:scale-110 transition-transform cursor-pointer">
            <div className="bg-[#FECA57] rounded-[2px]" />
            <div className="bg-[#FECA57] rounded-[2px]" />
            <div className="bg-[#FECA57] rounded-[2px]" />
            <div className="bg-[#FECA57] rounded-[2px]" />
          </div>

          {/* Piece 2: 3-bar Violet */}
          <div className="h-10 flex items-center gap-1 p-1 bg-[#101322] rounded-lg border border-[#282d46] hover:scale-110 transition-transform cursor-pointer">
            <div className="w-3.5 h-3.5 bg-[#7B5CFF] rounded-[2px] shadow-[0_0_6px_#7B5CFF]" />
            <div className="w-3.5 h-3.5 bg-[#7B5CFF] rounded-[2px] shadow-[0_0_6px_#7B5CFF]" />
            <div className="w-3.5 h-3.5 bg-[#7B5CFF] rounded-[2px] shadow-[0_0_6px_#7B5CFF]" />
          </div>

          {/* Piece 3: L-piece Cyan */}
          <div className="w-10 h-10 grid grid-cols-2 gap-1 p-1 bg-[#101322] rounded-lg border border-[#282d46] hover:scale-110 transition-transform cursor-pointer">
            <div className="bg-[#00D2D3] rounded-[2px]" />
            <div className="opacity-0" />
            <div className="bg-[#00D2D3] rounded-[2px]" />
            <div className="bg-[#00D2D3] rounded-[2px]" />
          </div>
        </div>

        {/* Bottom navigation pill indicator */}
        <div className="w-24 h-1 bg-white/20 rounded-full mx-auto" />
      </div>
    </div>
  );
};
