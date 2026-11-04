import React, { useState } from 'react';
import type { PortfolioConfig } from '../../portfolioData';
import { ArrowRight, BookOpen } from 'lucide-react';

interface ArticlesPageProps {
  data: PortfolioConfig;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredPosts =
    activeCategory === 'ALL'
      ? data.blogPosts
      : data.blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full min-h-[calc(100vh-140px)] bg-[#151515] text-[#F8F6EF] py-8 sm:py-12 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Header & Filter Bar */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF] block mb-1">
                DEVLOG & ESSAYS
              </span>
              <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-none text-white uppercase tracking-tight">
                ARTICLES.
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['ALL', 'DEVLOG', 'UI/UX', 'ESSAYS', 'TUTORIALS'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-headline tracking-wider uppercase px-4 py-1.5 rounded-full transition-all ${
                    activeCategory === cat
                      ? 'bg-[#7B5CFF] text-white shadow-md'
                      : 'bg-[#222] text-white/60 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-auto py-4">
          {filteredPosts.map((post, idx) => (
            <div
              key={post.id}
              className="bg-[#1b1b1b] rounded-3xl p-5 border border-white/10 hover:border-[#7B5CFF] transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Banner Thumbnail */}
                <div
                  className={`w-full h-32 rounded-2xl mb-4 p-4 flex flex-col justify-between ${
                    idx % 2 === 0
                      ? 'bg-gradient-to-br from-[#7B5CFF]/30 to-[#121212]'
                      : 'bg-gradient-to-br from-[#00D2D3]/20 to-[#121212]'
                  }`}
                >
                  <span className="self-start text-[10px] font-bold font-mono tracking-widest uppercase bg-black/60 px-2.5 py-1 rounded-md text-white">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-mono text-white/60">
                    {post.readTime}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-white/40 block mb-1">
                  {post.date}
                </span>

                <h3 className="font-headline text-lg sm:text-xl text-white group-hover:text-[#7B5CFF] transition-colors uppercase leading-snug mb-2">
                  {post.title}
                </h3>

                <p className="font-text text-xs text-white/60 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-headline text-[#7B5CFF] tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Essay <ArrowRight size={13} />
                </span>
                <span className="text-white/30 text-[10px]">Prinson Nazareth</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
          <span>Articles exploring frontend engineering, design systems, and developer ergonomics.</span>
          <span className="font-mono text-white/40">4 Published Essays</span>
        </div>
      </div>
    </section>
  );
};
