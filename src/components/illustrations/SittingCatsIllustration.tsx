import React from 'react';

interface SittingCatsProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const SittingCatsIllustration: React.FC<SittingCatsProps> = ({
  className = '',
  width = '100%',
  height = 'auto',
}) => {
  return (
    <svg
      viewBox="0 0 500 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none overflow-visible ${className}`}
      style={{ width, height }}
    >
      <g id="sitting-cats">
        {/* Soft ground shadow */}
        <ellipse cx="260" cy="450" rx="200" ry="20" fill="#000000" opacity="0.15" filter="blur(8px)" />

        {/* --- TALLER CAT (Left, Black & White Tuxedo) --- */}
        <g id="tall-cat">
          {/* Long Curled Tail wrapping around front */}
          <path
            d="M170 360 C120 370 70 330 65 270 C60 210 110 180 135 220 C145 235 140 260 120 280 C100 300 110 350 160 380 C190 395 240 400 290 380"
            stroke="#151515"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tail white tip */}
          <path
            d="M68 290 C62 250 85 200 120 210"
            stroke="#FFFFFF"
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />

          {/* Main Cat Back & Haunches */}
          <path
            d="M190 180 C160 200 120 260 120 340 C120 390 150 420 200 420 C240 420 260 390 270 350 C280 270 250 210 200 180 Z"
            fill="#151515"
          />

          {/* White Chest & Belly */}
          <path
            d="M200 190 C170 240 180 320 220 360 C240 370 260 360 265 330 C270 280 250 220 215 190 Z"
            fill="#FFFFFF"
          />

          {/* Left Front Leg & White Paw */}
          <path
            d="M200 310 L200 420 C200 435 230 435 230 420 L235 320 Z"
            fill="#FFFFFF"
            stroke="#151515"
            strokeWidth="4"
          />
          {/* Paw toe division lines */}
          <line x1="210" y1="415" x2="210" y2="430" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
          <line x1="220" y1="415" x2="220" y2="430" stroke="#151515" strokeWidth="3" strokeLinecap="round" />

          {/* Right Front Leg & White Paw */}
          <path
            d="M240 320 L250 420 C250 435 280 435 280 420 L275 320 Z"
            fill="#FFFFFF"
            stroke="#151515"
            strokeWidth="4"
          />
          <line x1="260" y1="415" x2="260" y2="430" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
          <line x1="270" y1="415" x2="270" y2="430" stroke="#151515" strokeWidth="3" strokeLinecap="round" />

          {/* Head */}
          <path
            d="M175 140 C160 110 170 80 205 65 C240 50 275 75 280 110 C285 145 260 175 220 180 C185 185 180 160 175 140 Z"
            fill="#151515"
          />

          {/* Left Tall Ear */}
          <polygon points="175,90 160,30 205,58" fill="#151515" />
          <polygon points="176,80 168,42 198,62" fill="#F8F6EF" opacity="0.3" />

          {/* Right Tall Ear */}
          <polygon points="245,65 280,25 285,80" fill="#151515" />
          <polygon points="252,68 274,38 278,75" fill="#F8F6EF" opacity="0.3" />

          {/* White Face Markings (Chin, cheeks, muzzle) */}
          <path
            d="M185 130 C195 165 255 165 265 130 C265 115 250 110 240 120 C230 110 215 110 205 120 C195 110 185 115 185 130 Z"
            fill="#FFFFFF"
          />

          {/* Left Eye */}
          <ellipse cx="205" cy="115" rx="7" ry="9" fill="#FFFFFF" />
          <ellipse cx="206" cy="115" rx="4" ry="7" fill="#151515" />
          <circle cx="204.5" cy="112.5" r="1.5" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse cx="245" cy="115" rx="7" ry="9" fill="#FFFFFF" />
          <ellipse cx="244" cy="115" rx="4" ry="7" fill="#151515" />
          <circle cx="242.5" cy="112.5" r="1.5" fill="#FFFFFF" />

          {/* Nose & Mouth */}
          <polygon points="225,128 221,133 229,133" fill="#151515" />
          <path d="M220 137 C223 140 225 140 225 137 C225 140 227 140 230 137" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Whiskers Left */}
          <line x1="190" y1="130" x2="145" y2="125" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
          <line x1="190" y1="136" x2="140" y2="138" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
          <line x1="190" y1="142" x2="150" y2="150" stroke="#151515" strokeWidth="2" strokeLinecap="round" />

          {/* Whiskers Right */}
          <line x1="260" y1="130" x2="305" y2="125" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
          <line x1="260" y1="136" x2="310" y2="138" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
          <line x1="260" y1="142" x2="300" y2="150" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* --- SMALLER CUDDLED CAT (Right, White with Dark Cap) --- */}
        <g id="small-cat">
          {/* Resting body */}
          <path
            d="M275 300 C270 240 320 220 370 220 C420 220 460 260 460 320 C460 380 430 420 360 420 C310 420 280 370 275 300 Z"
            fill="#FFFFFF"
            stroke="#151515"
            strokeWidth="4"
          />

          {/* Fur textures/details */}
          <path d="M380 250 C385 270 380 290 375 310" stroke="#151515" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <path d="M410 270 C415 290 410 320 405 340" stroke="#151515" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

          {/* Head & Cap */}
          <g transform="rotate(8 350 200)">
            {/* White Face Base */}
            <circle cx="340" cy="200" r="48" fill="#FFFFFF" stroke="#151515" strokeWidth="4" />

            {/* Black Cap over forehead and ears */}
            <path
              d="M305 175 C315 155 365 155 375 175 C360 168 320 168 305 175 Z"
              fill="#151515"
            />

            {/* Left Ear */}
            <polygon points="310,170 300,120 335,155" fill="#151515" />
            <polygon points="312,165 305,130 328,155" fill="#F8F6EF" opacity="0.3" />

            {/* Right Ear */}
            <polygon points="355,155 385,125 380,175" fill="#151515" />
            <polygon points="358,158 378,135 374,170" fill="#F8F6EF" opacity="0.3" />

            {/* Cute Sleepy / Gentle Eyes */}
            <ellipse cx="325" cy="205" rx="6" ry="7.5" fill="#151515" />
            <circle cx="323" cy="202.5" r="1.5" fill="#FFFFFF" />

            <ellipse cx="355" cy="205" rx="6" ry="7.5" fill="#151515" />
            <circle cx="353" cy="202.5" r="1.5" fill="#FFFFFF" />

            {/* Nose & Mouth */}
            <polygon points="340,214 337,218 343,218" fill="#151515" />
            <path d="M335 222 C338 225 340 225 340 222 C340 225 342 225 345 222" stroke="#151515" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Whiskers */}
            <line x1="315" y1="215" x2="280" y2="210" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
            <line x1="315" y1="220" x2="275" y2="225" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
            <line x1="365" y1="215" x2="400" y2="210" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
            <line x1="365" y1="220" x2="405" y2="225" stroke="#151515" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Front Paws Tucked In */}
          <path
            d="M320 400 C320 385 350 385 360 405 C370 385 400 385 400 405 C400 425 320 425 320 400 Z"
            fill="#FFFFFF"
            stroke="#151515"
            strokeWidth="3.5"
          />
          <line x1="340" y1="395" x2="340" y2="415" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="380" y1="395" x2="380" y2="415" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};
