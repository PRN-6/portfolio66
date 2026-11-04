import React from 'react';

interface CatLogoBadgeProps {
  variant?: 'badge-only' | 'cream' | 'violet' | 'dark' | 'full';
  size?: number | string;
  className?: string;
  showText?: boolean;
  textColor?: string;
  badgeBg?: string;
  starColor?: string;
  brandName?: string;
}

export const CatLogoBadge: React.FC<CatLogoBadgeProps> = ({
  variant = 'badge-only',
  size = 56,
  className = '',
  showText = false,
  textColor,
  badgeBg = '#FFFFFF',
  starColor = '#151515',
  brandName = 'PORTFOLIO66',
}) => {
  // If variant is one of the 3 preview cards from Slide 3
  if (variant === 'cream' || variant === 'violet' || variant === 'dark') {
    const cardBg =
      variant === 'cream'
        ? 'bg-[#F8F6EF] text-[#151515]'
        : variant === 'violet'
        ? 'bg-[#7B5CFF] text-white'
        : 'bg-[#1e1e1e] text-white border border-[#2a2a2a]';

    const textClr = variant === 'cream' ? 'text-[#151515]' : 'text-white';

    return (
      <div
        className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03] ${cardBg} ${className}`}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl p-2.5 shadow-sm flex items-center justify-center">
          <CatLogoSVG />
        </div>
        <span
          className={`mt-4 font-headline tracking-wider text-base sm:text-lg ${textClr}`}
        >
          {brandName}
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="relative bg-white rounded-2xl p-1.5 sm:p-2 shadow-md flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:rotate-3"
      >
        <CatLogoSVG starColor={starColor} />
      </div>
      {showText && (
        <span
          className="font-headline tracking-wide text-xl sm:text-2xl"
          style={{ color: textColor || 'currentColor' }}
        >
          {brandName}
        </span>
      )}
    </div>
  );
};

export const CatLogoSVG: React.FC<{ starColor?: string }> = ({
  starColor = '#151515',
}) => (
  <svg
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* 4-pointed Star Sparkle */}
    <path
      d="M72 10 L75 22 L87 25 L75 28 L72 40 L69 28 L57 25 L69 22 Z"
      fill={starColor}
    />

    {/* Left Playful Cat (White with violet outline #7B5CFF) */}
    <g>
      {/* Cat body & head outline */}
      <path
        d="M20 78 C18 64 22 42 32 35 C35 33 37 36 39 42 C44 38 52 38 58 43 C61 36 64 34 66 36 C74 45 74 62 70 78 Z"
        fill="#FFFFFF"
        stroke="#7B5CFF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Violet Inner Left Ear */}
      <path
        d="M29 41 L34 37 L36 43 Z"
        fill="#7B5CFF"
        opacity="0.3"
      />
      {/* Violet Inner Right Ear */}
      <path
        d="M60 43 L63 38 L67 43 Z"
        fill="#7B5CFF"
        opacity="0.3"
      />
      {/* Cat Eyes */}
      <circle cx="38" cy="55" r="4.2" fill="#151515" />
      <circle cx="37" cy="53.5" r="1.3" fill="#FFFFFF" />
      <circle cx="56" cy="55" r="4.2" fill="#151515" />
      <circle cx="55" cy="53.5" r="1.3" fill="#FFFFFF" />

      {/* Nose */}
      <polygon points="47,60 45,63 49,63" fill="#151515" />
      {/* Sweet smile */}
      <path
        d="M44 65 Q47 67 47 66 Q47 67 50 65"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Whiskers */}
      <line x1="22" y1="58" x2="32" y2="57" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="23" y1="64" x2="32" y2="61" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="62" y1="57" x2="72" y2="58" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="62" y1="61" x2="71" y2="64" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Right Calm Cat (Solid Black #151515) */}
    <g>
      {/* Cat body & head */}
      <path
        d="M65 78 C65 58 70 42 78 35 C82 32 85 36 88 43 C94 38 102 39 107 45 C110 39 113 37 115 40 C122 50 120 68 116 78 Z"
        fill="#151515"
      />
      {/* Left Inner Ear hint */}
      <path d="M78 40 L82 36 L84 43 Z" fill="#FFFFFF" opacity="0.25" />
      <path d="M109 43 L112 39 L114 43 Z" fill="#FFFFFF" opacity="0.25" />

      {/* White large cute eyes */}
      <circle cx="89" cy="54" r="5" fill="#FFFFFF" />
      <circle cx="90" cy="54" r="2.5" fill="#151515" />
      <circle cx="89.5" cy="52.8" r="0.9" fill="#FFFFFF" />

      <circle cx="106" cy="54" r="5" fill="#FFFFFF" />
      <circle cx="106.5" cy="54" r="2.5" fill="#151515" />
      <circle cx="106" cy="52.8" r="0.9" fill="#FFFFFF" />

      {/* White nose */}
      <polygon points="98,59 96,62 100,62" fill="#FFFFFF" />

      {/* White Whiskers */}
      <line x1="74" y1="58" x2="84" y2="57" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="74" y1="64" x2="84" y2="61" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="110" y1="57" x2="120" y2="58" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="110" y1="61" x2="119" y2="64" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);
