import React from 'react';

interface StretchedCatProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const StretchedCatIllustration: React.FC<StretchedCatProps> = ({
  className = '',
  width = '100%',
  height = 'auto',
}) => {
  return (
    <svg
      viewBox="0 0 920 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none overflow-visible ${className}`}
      style={{ width, height }}
    >
      <g id="stretched-cat-group">
        {/* Shadow under cat */}
        <ellipse
          cx="520"
          cy="345"
          rx="330"
          ry="18"
          fill="#000000"
          opacity="0.35"
          filter="blur(10px)"
        />

        {/* Tail white tip under-layer */}
        <path
          d="M380 205 C390 170 410 145 440 135 C470 125 500 135 500 160 C500 185 465 200 440 220 C420 236 405 270 425 295 C435 308 455 315 480 310"
          stroke="#151515"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Tail white fluffy tip */}
        <path
          d="M485 140 C498 145 500 156 498 165 C485 180 460 190 448 200"
          stroke="#FFFFFF"
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
        />

        {/* Back Leg Stretching Back */}
        <path
          d="M440 300 C430 320 450 335 480 330 C510 325 530 310 540 290 Z"
          fill="#151515"
        />
        {/* Rear White Paw Tip */}
        <path
          d="M442 322 C450 332 468 335 480 330 C475 320 465 316 450 316 Z"
          fill="#FFFFFF"
        />

        {/* Main Sleek Cat Body */}
        <path
          d="M430 270 C470 215 540 180 620 180 C700 180 760 220 805 270 C830 300 820 330 790 330 C720 330 640 335 560 330 C490 325 445 315 430 270 Z"
          fill="#151515"
        />

        {/* Glossy / White Spots on Back (Authentic to reference image) */}
        <path
          d="M570 230 C590 205 630 205 645 228 C645 245 615 255 585 248 C570 245 565 238 570 230 Z"
          fill="#FFFFFF"
        />
        <path
          d="M660 250 C675 230 705 230 720 248 C720 262 695 270 675 265 C662 260 658 255 660 250 Z"
          fill="#FFFFFF"
        />
        <ellipse
          cx="625"
          cy="268"
          rx="12"
          ry="8"
          fill="#FFFFFF"
          transform="rotate(-15 625 268)"
        />

        {/* Front Outstretched Paw Left */}
        <path
          d="M750 300 C780 325 810 360 825 385 C830 395 848 395 852 380 C855 355 835 320 805 290 Z"
          fill="#151515"
        />
        {/* Front Left Paw White "Sock" */}
        <path
          d="M815 355 C825 375 832 392 848 388 C852 376 846 358 835 345 Z"
          fill="#FFFFFF"
        />

        {/* Front Outstretched Paw Right */}
        <path
          d="M840 280 C865 300 895 330 910 350 C918 360 930 355 930 342 C928 320 890 285 860 265 Z"
          fill="#151515"
        />
        {/* Front Right Paw White Tip */}
        <path
          d="M890 325 C902 342 915 355 926 345 C926 335 912 320 898 310 Z"
          fill="#FFFFFF"
        />

        {/* Cat Head Base */}
        <g id="cat-head">
          {/* Head Shape */}
          <path
            d="M780 260 C760 230 760 185 790 160 C815 140 860 145 885 165 C910 185 925 225 905 260 C880 290 810 290 780 260 Z"
            fill="#FFFFFF"
            stroke="#151515"
            strokeWidth="5"
          />

          {/* Left Ear */}
          <path
            d="M785 180 L768 115 C765 105 778 100 785 110 L818 150 Z"
            fill="#151515"
          />
          <path
            d="M782 165 L775 125 L795 148 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />

          {/* Right Ear */}
          <path
            d="M860 155 L900 120 C910 112 920 124 912 135 L885 180 Z"
            fill="#151515"
          />
          <path
            d="M875 160 L898 135 L888 172 Z"
            fill="#F8F6EF"
            opacity="0.8"
          />

          {/* Right Eye Tuxedo Mask Patch (Iconic black patch over right eye from reference) */}
          <path
            d="M835 152 C870 150 905 180 900 230 C895 255 865 260 848 240 C840 220 840 180 835 152 Z"
            fill="#151515"
          />

          {/* Left Eye (Curious alert eye with white highlight) */}
          <ellipse cx="808" cy="215" rx="8" ry="11" fill="#151515" />
          <ellipse cx="806" cy="212" rx="3" ry="4" fill="#FFFFFF" />
          <ellipse cx="810" cy="220" rx="1.5" ry="2" fill="#FFFFFF" />

          {/* Right Eye (White ring and pupil inside the black patch) */}
          <ellipse cx="868" cy="215" rx="8" ry="11" fill="#FFFFFF" />
          <ellipse cx="868" cy="215" rx="4" ry="7" fill="#151515" />
          <ellipse cx="866" cy="212" rx="2" ry="3" fill="#FFFFFF" />

          {/* Cute Muzzle / Nose */}
          <polygon points="835,232 830,238 840,238" fill="#151515" />
          {/* Sweet smiling mouth */}
          <path
            d="M828 243 C832 248 835 248 835 244 C835 248 838 248 843 243"
            stroke="#151515"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Whiskers Left */}
          <path d="M785 235 L745 230" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
          <path d="M785 242 L740 245" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
          <path d="M785 250 L750 260" stroke="#151515" strokeWidth="3" strokeLinecap="round" />

          {/* Whiskers Right */}
          <path d="M885 235 L935 230" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
          <path d="M885 242 L940 244" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
          <path d="M885 250 L930 258" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};
