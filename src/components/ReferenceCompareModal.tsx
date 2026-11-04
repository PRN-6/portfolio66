import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ReferenceCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceCompareModal: React.FC<ReferenceCompareModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Slide 1: Hero & Brand Title',
      src: '/reference/image.png',
      caption: 'Brand Identity · Website Design · 2026 / GIKA GAMES / Stretched Cat',
      implementedSection: 'Hero Banner Section',
    },
    {
      title: 'Slide 2: The Studio & Overview',
      src: '/reference/image copy.png',
      caption: 'THE STUDIO / CALM PUZZLES, NO STRESS. / Sitting Cats ink drawing / Role, Tools, Deliverables, Live link',
      implementedSection: 'Studio Overview Section',
    },
    {
      title: 'Slide 3: Logo & Brand System',
      src: '/reference/image copy 2.png',
      caption: 'LOGO / TWO CATS, ONE STUDIO. / Rounded Badge / 3 Colorway Cards',
      implementedSection: 'Logo System Section',
    },
    {
      title: 'Slide 4: Color & Typography System',
      src: '/reference/image copy 3.png',
      caption: 'Night #151515, Cream #F8F6EF, Moon Violet #7B5CFF / Anton, Roboto Condensed, Baloo 2',
      implementedSection: 'Color & Typography Section',
    },
    {
      title: 'Slide 5: One Scroll, The Whole Studio',
      src: '/reference/image copy 4.png',
      caption: 'Browser window with Blockmoon, Moon Arrows, Who We Are, From The Blog, Google Play Launch CTA',
      implementedSection: 'Full Studio Website Mockup',
    },
    {
      title: 'Slide 6: Inner Pages (Games, Blog, FAQ, Contact)',
      src: '/reference/image copy 5.png',
      caption: '4 inner page mockups: Games catalog, Blog with filter pills, FAQ with accordions, Contact form',
      implementedSection: 'Inner Pages Section & Interactive Modals',
    },
    {
      title: 'Slide 7: Mobile (Made for One Hand)',
      src: '/reference/image copy 6.png',
      caption: '5 realistic phone frames: Mobile Home, Fullscreen Nav Menu, Games, Blog, FAQ',
      implementedSection: 'Mobile Showcase Section',
    },
    {
      title: 'Slide 8: Social & Sharing',
      src: '/reference/image copy 7.png',
      caption: 'Open Graph cards for Home, Games, Blog plus 512px app icon badge',
      implementedSection: 'Social & Sharing Kit',
    },
  ];

  const current = slides[selectedSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#181818] text-white rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#121212] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D2D3] animate-pulse" />
            <h3 className="font-headline text-base sm:text-lg tracking-wide uppercase text-white">
              Original Reference Slide Inspector ({selectedSlide + 1} of {slides.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Slide Selector Pills */}
        <div className="bg-[#151515] px-4 py-2.5 border-b border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSlide(idx)}
              className={`px-3 py-1 rounded-full text-xs font-headline tracking-wider whitespace-nowrap transition-all ${
                selectedSlide === idx
                  ? 'bg-[#7B5CFF] text-white shadow-md'
                  : 'bg-[#222] text-white/60 hover:text-white'
              }`}
            >
              Slide {idx + 1}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-2 flex flex-col items-center">
            <img
              src={current.src}
              alt={current.title}
              className="max-h-[60vh] object-contain rounded-xl select-none"
            />
          </div>

          <div className="mt-4 text-center space-y-1">
            <h4 className="font-headline text-xl text-white uppercase">
              {current.title}
            </h4>
            <p className="font-text text-sm text-white/70 max-w-2xl">
              {current.caption}
            </p>
            <div className="pt-2 flex items-center justify-center gap-2">
              <span className="text-xs bg-[#7B5CFF]/20 text-[#7B5CFF] border border-[#7B5CFF]/40 px-3 py-1 rounded-full font-bold">
                ✓ Implemented in: {current.implementedSection}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="bg-[#121212] px-6 py-3 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() =>
              setSelectedSlide((prev) =>
                prev > 0 ? prev - 1 : slides.length - 1
              )
            }
            className="flex items-center gap-1 text-xs font-headline tracking-wider text-white/80 hover:text-white bg-[#222] px-4 py-2 rounded-xl transition-colors"
          >
            <ChevronLeft size={16} /> PREVIOUS SLIDE
          </button>
          <button
            onClick={() =>
              setSelectedSlide((prev) =>
                prev < slides.length - 1 ? prev + 1 : 0
              )
            }
            className="flex items-center gap-1 text-xs font-headline tracking-wider text-white/80 hover:text-white bg-[#222] px-4 py-2 rounded-xl transition-colors"
          >
            NEXT SLIDE <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
