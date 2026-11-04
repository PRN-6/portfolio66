import React, { useState } from 'react';
import type { PortfolioConfig } from '../../portfolioData';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqPageProps {
  data: PortfolioConfig;
  onNavigate?: (page: 'contact') => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ data, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full min-h-[calc(100vh-70px)] bg-[#F8F6EF] text-[#151515] py-5 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-6"
        >
          <div>
            <span className="font-text font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#7B5CFF] block mb-1">
              HELP & COLLABORATION
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-[#151515] uppercase tracking-tight break-words">
              FREQUENT QUESTIONS.
            </h2>
          </div>

          <button
            onClick={() => onNavigate?.('contact')}
            className="inline-flex items-center gap-1.5 text-xs font-headline tracking-wider text-[#7B5CFF] hover:underline uppercase font-bold cursor-pointer self-start sm:self-auto"
          >
            <span>Have a different question? Reach out →</span>
          </button>
        </motion.div>

        {/* FAQ Accordion List with Framer Motion */}
        <div className="space-y-2.5 sm:space-y-3.5 my-auto py-2">
          {data.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-[#ded8c4] shadow-sm transition-all hover:border-[#7B5CFF]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-headline text-base sm:text-lg md:text-xl text-[#151515] uppercase tracking-wide hover:text-[#7B5CFF] transition-colors cursor-pointer"
                >
                  <span className="pr-2">{item.question}</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F8F6EF] flex items-center justify-center text-[#7B5CFF] flex-shrink-0 transition-transform duration-200">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-text text-xs sm:text-sm md:text-base text-[#151515]/85 mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-[#ded8c4] leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-4 sm:pt-6 border-t border-[#ded8c4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs text-[#151515]/60"
        >
          <span>Direct answers to the most common inquiries from founders, managers, and engineering teams.</span>
          <span className="font-mono text-black/50">{data.meta.studioName} · PORTFOLIO66</span>
        </motion.div>
      </div>
    </section>
  );
};
