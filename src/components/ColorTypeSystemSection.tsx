import React, { useState } from 'react';
import type { PortfolioConfig } from '../portfolioData';
import { Copy, Check, Type } from 'lucide-react';
import { motion } from 'framer-motion';

interface ColorTypeSystemProps {
  data: PortfolioConfig;
}

export const ColorTypeSystemSection: React.FC<ColorTypeSystemProps> = ({ data }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [testText, setTestText] = useState<string>('Clean Code, Calm Software');

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const colors = [
    {
      key: 'night',
      name: data.designSystem.colors.night.name,
      hex: data.designSystem.colors.night.hex,
      cardBg: 'bg-[#151515]',
      textColor: 'text-white',
      border: 'border-transparent',
    },
    {
      key: 'cream',
      name: data.designSystem.colors.cream.name,
      hex: data.designSystem.colors.cream.hex,
      cardBg: 'bg-[#F8F6EF]',
      textColor: 'text-[#151515]',
      border: 'border-[#ded8c4]',
    },
    {
      key: 'accent',
      name: data.designSystem.colors.accent.name,
      hex: data.designSystem.colors.accent.hex,
      cardBg: 'bg-[#7B5CFF]',
      textColor: 'text-white',
      border: 'border-transparent',
    },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#F8F6EF] text-[#151515] py-6 sm:py-8 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 my-auto py-2">
          {/* ================= LEFT COLUMN: COLOR ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Moon Violet Tag */}
              <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF] block mb-4">
                COLOR TOKENS
              </span>

              {/* 3 Large Swatch Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                {colors.map((c) => (
                  <motion.div
                    key={c.key}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => copyToClipboard(c.hex)}
                    title="Click to copy HEX code"
                    className={`relative h-56 sm:h-72 rounded-2xl sm:rounded-3xl p-4 flex flex-col justify-end shadow-md transition-shadow hover:shadow-xl cursor-pointer border ${c.cardBg} ${c.textColor} ${c.border}`}
                  >
                    {/* Copy Icon on hover */}
                    <div className="absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity">
                      {copiedHex === c.hex ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                          <Check size={12} /> Copied
                        </span>
                      ) : (
                        <Copy size={15} />
                      )}
                    </div>

                    {/* Name & Hex */}
                    <div>
                      <span className="block font-headline tracking-wider text-base sm:text-xl uppercase">
                        {c.name}
                      </span>
                      <span className="block font-mono text-xs sm:text-sm opacity-80 uppercase tracking-wider font-semibold">
                        {c.hex}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Rationale Copy */}
              <p className="font-text text-sm sm:text-base text-[#151515]/80 leading-relaxed">
                {data.designSystem.colors.rationale}
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: TYPE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              {/* Moon Violet Tag */}
              <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF] block mb-4">
                TYPOGRAPHIC SPECIMEN
              </span>

              {/* Typeface 1: Anton (Headlines) */}
              <div className="flex items-baseline gap-6 pb-4 border-b border-[#ded8c4]">
                <span className="font-headline text-5xl sm:text-7xl text-[#151515] leading-none select-none w-24 sm:w-28 flex-shrink-0">
                  Aa
                </span>
                <div>
                  <h4 className="font-text font-bold text-xs sm:text-sm tracking-[0.2em] text-[#151515] uppercase mb-0.5">
                    {data.designSystem.typography.headline.font} •{' '}
                    {data.designSystem.typography.headline.role}
                  </h4>
                  <p className="font-text text-xs sm:text-sm text-[#151515]/75">
                    {data.designSystem.typography.headline.desc}
                  </p>
                  <p className="font-headline text-lg sm:text-xl text-[#151515] mt-1 tracking-wide uppercase">
                    {testText}
                  </p>
                </div>
              </div>

              {/* Typeface 2: Roboto Condensed (Text) */}
              <div className="flex items-baseline gap-6 py-4 border-b border-[#ded8c4]">
                <span className="font-text font-normal text-5xl sm:text-7xl text-[#151515] leading-none select-none w-24 sm:w-28 flex-shrink-0">
                  Aa
                </span>
                <div>
                  <h4 className="font-text font-bold text-xs sm:text-sm tracking-[0.2em] text-[#151515] uppercase mb-0.5">
                    {data.designSystem.typography.text.font} •{' '}
                    {data.designSystem.typography.text.role}
                  </h4>
                  <p className="font-text text-xs sm:text-sm text-[#151515]/75">
                    {data.designSystem.typography.text.desc}
                  </p>
                  <p className="font-text text-sm sm:text-base text-[#151515] mt-1">
                    {testText}
                  </p>
                </div>
              </div>

              {/* Typeface 3: Baloo 2 (Wordmark) */}
              <div className="flex items-baseline gap-6 pt-4">
                <span className="font-wordmark font-bold text-5xl sm:text-7xl text-[#7B5CFF] leading-none select-none w-24 sm:w-28 flex-shrink-0">
                  Aa
                </span>
                <div>
                  <h4 className="font-text font-bold text-xs sm:text-sm tracking-[0.2em] text-[#7B5CFF] uppercase mb-0.5">
                    {data.designSystem.typography.wordmark.font} •{' '}
                    {data.designSystem.typography.wordmark.role}
                  </h4>
                  <p className="font-text text-xs sm:text-sm text-[#151515]/75">
                    {data.designSystem.typography.wordmark.desc}
                  </p>
                  <p className="font-wordmark font-bold text-lg sm:text-xl text-[#7B5CFF] mt-1">
                    {testText}
                  </p>
                </div>
              </div>

              {/* Font live tester input */}
              <div className="mt-5 pt-3 flex items-center gap-3 bg-white p-3 rounded-xl border border-[#ded8c4] shadow-sm">
                <Type size={16} className="text-[#7B5CFF] flex-shrink-0" />
                <input
                  type="text"
                  value={testText}
                  onChange={(e) => setTestText(e.target.value)}
                  placeholder="Test the typography live..."
                  className="bg-transparent border-none outline-none font-text text-sm w-full text-[#151515]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
