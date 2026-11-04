import React, { useState } from 'react';
import { Check, Sliders, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';

interface AuraUIProps {
  className?: string;
}

export const AuraUIDesignMockup: React.FC<AuraUIProps> = ({ className = '' }) => {
  const [toggleActive, setToggleActive] = useState(true);
  const [sliderVal, setSliderVal] = useState(68);
  const [activeChip, setActiveChip] = useState('AAA Accessible');

  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] sm:max-w-[390px] rounded-[36px] p-5 bg-[#F8F6EF] shadow-2xl border-[3px] border-[#ded8c4] select-none text-[#151515] ${className}`}
    >
      {/* Chrome Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#ded8c4] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7B5CFF]" />
          <span className="font-headline tracking-wider text-xs text-[#151515]">
            AURA DESIGN TOKENS
          </span>
        </div>
        <span className="font-mono text-[10px] bg-black/5 px-2 py-0.5 rounded text-black/60">
          v1.8 · Headless
        </span>
      </div>

      {/* Interactive Token Swatches */}
      <div className="my-3 space-y-2">
        <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] uppercase block">
          TOKEN PALETTE
        </span>
        <div className="grid grid-cols-4 gap-1.5">
          <div className="h-10 rounded-xl bg-[#151515] flex items-center justify-center text-[9px] text-white font-mono font-bold">
            Night
          </div>
          <div className="h-10 rounded-xl bg-[#F8F6EF] border border-[#ded8c4] flex items-center justify-center text-[9px] text-[#151515] font-mono font-bold">
            Cream
          </div>
          <div className="h-10 rounded-xl bg-[#7B5CFF] flex items-center justify-center text-[9px] text-white font-mono font-bold shadow-sm">
            Violet
          </div>
          <div className="h-10 rounded-xl bg-[#00D2D3] flex items-center justify-center text-[9px] text-[#151515] font-mono font-bold">
            Cyan
          </div>
        </div>
      </div>

      {/* Accessible Interactive Controls */}
      <div className="bg-white p-3.5 rounded-2xl border border-[#ded8c4] space-y-3 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="font-headline text-xs text-[#151515] uppercase tracking-wide">
            FLUID CONTRAST ENGINE
          </span>
          <button
            onClick={() => setToggleActive(!toggleActive)}
            className="text-[#7B5CFF] transition-transform active:scale-90"
          >
            {toggleActive ? <ToggleRight size={26} /> : <ToggleLeft size={26} className="text-black/30" />}
          </button>
        </div>

        {/* Dynamic Scale Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-black/60">
            <span>SCALE RATIO</span>
            <span className="font-bold text-[#7B5CFF]">1.{sliderVal}</span>
          </div>
          <input
            type="range"
            min="40"
            max="90"
            value={sliderVal}
            onChange={(e) => setSliderVal(+e.target.value)}
            className="w-full accent-[#7B5CFF] cursor-pointer"
          />
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['AAA Accessible', 'Zero Runtime', 'Radix Primitives'].map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className={`text-[9px] font-headline tracking-wider uppercase px-2.5 py-1 rounded-full transition-all ${
                activeChip === chip
                  ? 'bg-[#7B5CFF] text-white shadow-sm'
                  : 'bg-black/5 text-black/70 hover:bg-black/10'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
