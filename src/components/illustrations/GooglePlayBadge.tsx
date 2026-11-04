import React from 'react';

export const GooglePlayBadge: React.FC<{ className?: string; href?: string }> = ({
  className = '',
  href = '#',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/50 transition-all hover:scale-105 active:scale-95 shadow-md ${className}`}
    >
      {/* Official Google Play Triangle Icon */}
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M3.6 1.8C3.3 2.1 3.1 2.6 3.1 3.3V20.7C3.1 21.4 3.3 21.9 3.6 22.2L3.7 22.3L13.4 12.6V12.4L3.7 1.7L3.6 1.8Z"
          fill="#00F076"
        />
        <path
          d="M16.6 15.8L13.4 12.6V12.4L16.6 9.2L16.7 9.3L20.5 11.4C21.6 12 21.6 13 20.5 13.6L16.7 15.7L16.6 15.8Z"
          fill="#FFCA00"
        />
        <path
          d="M16.7 15.7L13.4 12.5L3.6 22.3C4 22.7 4.7 22.8 5.6 22.3L16.7 15.7Z"
          fill="#FF3A44"
        />
        <path
          d="M16.7 9.3L5.6 2.7C4.7 2.2 4 2.3 3.6 2.7L13.4 12.5L16.7 9.3Z"
          fill="#00E6FF"
        />
      </svg>
      <div className="flex flex-col text-left leading-tight">
        <span className="text-[9px] uppercase tracking-wider text-white/70 font-semibold">
          GET IT ON
        </span>
        <span className="text-sm font-bold tracking-tight text-white">
          Google Play
        </span>
      </div>
    </a>
  );
};
