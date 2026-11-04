import React, { useState } from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import type { PortfolioConfig } from '../portfolioData';
import {
  Plus,
  Minus,
  CheckCircle,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { GithubIcon } from './illustrations/GithubIcon';
import confetti from 'canvas-confetti';

interface InnerPagesProps {
  data: PortfolioConfig;
  onOpenPageModal: (pageId: 'games' | 'blog' | 'faq' | 'contact') => void;
}

export const InnerPagesSection: React.FC<InnerPagesProps> = ({
  data,
  onOpenPageModal,
}) => {
  // Blog active filter state
  const [activeBlogFilter, setActiveBlogFilter] = useState<string>('ALL');

  // FAQ open item state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    topic: 'Project Inquiry',
    message: '',
  });
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;

    setContactSent(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7B5CFF', '#00D2D3', '#F8F6EF'],
    });

    setTimeout(() => {
      setContactSent(false);
      setContactForm({ name: '', email: '', topic: 'Project Inquiry', message: '' });
    }, 4000);
  };

  const filteredBlogPosts =
    activeBlogFilter === 'ALL'
      ? data.blogPosts
      : data.blogPosts.filter((p) => p.category === activeBlogFilter);

  return (
    <section
      id="inner-pages"
      className="relative w-full bg-[#151515] text-[#F8F6EF] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#252525]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
            INNER PAGES
          </span>
          <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-none text-white uppercase tracking-tight">
            PROJECTS, ARTICLES, FAQ, CONTACT.
          </h2>
        </div>

        {/* 2x2 Grid of Window Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* ================= CARD 1: PROJECTS PAGE ================= */}
          <div className="bg-[#1b1b1b] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#7B5CFF]/60">
            {/* Dark Top Nav Bar */}
            <div className="bg-[#151515] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CatLogoBadge size={28} variant="badge-only" />
                <span className="font-headline text-xs tracking-wider text-white">
                  {data.meta.studioName}
                </span>
              </div>
              <button
                onClick={() => onOpenPageModal('games')}
                className="text-xs text-[#7B5CFF] hover:underline flex items-center gap-1 font-semibold"
              >
                Expand <ExternalLink size={12} />
              </button>
            </div>

            {/* Dark Header Banner */}
            <div className="bg-[#151515] px-6 py-6 border-b border-white/5">
              <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] uppercase block mb-1">
                FEATURED WORK
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                PROJECTS
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1">
                Full-stack web applications, distributed cloud systems, and design tokens.
              </p>
            </div>

            {/* Cream Content Area */}
            <div className="bg-[#F8F6EF] text-[#151515] p-6 flex-1">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-[#ded8c4] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[#7B5CFF] block">
                      CLOUD & TELEMETRY · 2026
                    </span>
                    <h4 className="font-headline text-xl text-[#151515] uppercase tracking-wide">
                      NEXAFLOW CLOUD OBSERVABILITY
                    </h4>
                    <p className="font-text text-xs text-[#151515]/75 mt-0.5">
                      Real-time WebSocket telemetry streaming 50k+ ops/sec with sub-50ms latency.
                    </p>
                  </div>
                  <a
                    href={data.meta.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-black text-white hover:bg-[#7B5CFF] transition-colors ml-4 flex-shrink-0"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#ded8c4] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[#7B5CFF] block">
                      DESIGN SYSTEM · 2026
                    </span>
                    <h4 className="font-headline text-xl text-[#151515] uppercase tracking-wide">
                      AURA HEADLESS TOKENS
                    </h4>
                    <p className="font-text text-xs text-[#151515]/75 mt-0.5">
                      40+ WCAG AAA components with automated Figma-to-Tailwind token synchronization.
                    </p>
                  </div>
                  <a
                    href={data.meta.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-black text-white hover:bg-[#7B5CFF] transition-colors ml-4 flex-shrink-0"
                  >
                    <Code2 size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: ARTICLES (BLOG) ================= */}
          <div className="bg-[#1b1b1b] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#7B5CFF]/60">
            {/* Dark Top Nav Bar */}
            <div className="bg-[#151515] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CatLogoBadge size={28} variant="badge-only" />
                <span className="font-headline text-xs tracking-wider text-white">
                  {data.meta.studioName}
                </span>
              </div>
              <button
                onClick={() => onOpenPageModal('blog')}
                className="text-xs text-[#7B5CFF] hover:underline flex items-center gap-1 font-semibold"
              >
                Expand <ExternalLink size={12} />
              </button>
            </div>

            {/* Dark Header Banner with Filter Pills */}
            <div className="bg-[#151515] px-6 py-6 border-b border-white/5">
              <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] uppercase block mb-1">
                ENGINEERING LOGS
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                ARTICLES
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1 mb-4">
                Architecture notes, web performance, and design systems engineering.
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {['ALL', 'DEVLOG', 'UI/UX', 'ESSAYS', 'TUTORIALS'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveBlogFilter(filter)}
                    className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all ${
                      activeBlogFilter === filter
                        ? 'bg-[#7B5CFF] text-white shadow-sm'
                        : 'bg-[#242424] text-white/60 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Cream Content Area with Article Cards */}
            <div className="bg-[#F8F6EF] text-[#151515] p-6 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredBlogPosts.slice(0, 2).map((post, i) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl p-3 border border-[#ded8c4] flex flex-col justify-between shadow-sm hover:border-[#7B5CFF] transition-colors"
                  >
                    <div>
                      <div
                        className={`w-full h-16 rounded-lg mb-2 flex items-center justify-center text-[9px] font-bold uppercase tracking-wider text-white ${
                          i % 2 === 0 ? 'bg-[#7B5CFF]' : 'bg-[#151515]'
                        }`}
                      >
                        {post.category}
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#7B5CFF] block">
                        {post.date} · {post.readTime}
                      </span>
                      <h5 className="font-headline text-xs text-[#151515] line-clamp-2 uppercase mt-1 leading-snug">
                        {post.title}
                      </h5>
                    </div>
                    <span className="text-[10px] text-[#7B5CFF] font-bold mt-2 hover:underline">
                      READ POST →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= CARD 3: FAQ PAGE ================= */}
          <div className="bg-[#1b1b1b] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#7B5CFF]/60">
            {/* Dark Top Nav Bar */}
            <div className="bg-[#151515] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CatLogoBadge size={28} variant="badge-only" />
                <span className="font-headline text-xs tracking-wider text-white">
                  {data.meta.studioName}
                </span>
              </div>
              <button
                onClick={() => onOpenPageModal('faq')}
                className="text-xs text-[#7B5CFF] hover:underline flex items-center gap-1 font-semibold"
              >
                Expand <ExternalLink size={12} />
              </button>
            </div>

            {/* Dark Header Banner */}
            <div className="bg-[#151515] px-6 py-6 border-b border-white/5">
              <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] uppercase block mb-1">
                HIRING & COLLABORATION
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                FAQ
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1">
                Common questions regarding engineering roles, tech stack, and workflow.
              </p>
            </div>

            {/* Cream Content Area with Accordions */}
            <div className="bg-[#F8F6EF] text-[#151515] p-6 flex-1 space-y-3">
              {data.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={item.id}
                    className="border-b border-[#ded8c4] pb-3 last:border-b-0"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-headline text-xs sm:text-sm text-[#151515] uppercase tracking-wide hover:text-[#7B5CFF] transition-colors py-1"
                    >
                      <span>{item.question}</span>
                      <span className="text-[#7B5CFF] font-bold ml-2">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="font-text text-xs text-[#151515]/80 mt-1.5 leading-relaxed pl-1 animate-fadeIn">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= CARD 4: SAY HELLO (CONTACT) ================= */}
          <div className="bg-[#1b1b1b] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#7B5CFF]/60">
            {/* Dark Top Nav Bar */}
            <div className="bg-[#151515] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CatLogoBadge size={28} variant="badge-only" />
                <span className="font-headline text-xs tracking-wider text-white">
                  {data.meta.studioName}
                </span>
              </div>
              <button
                onClick={() => onOpenPageModal('contact')}
                className="text-xs text-[#7B5CFF] hover:underline flex items-center gap-1 font-semibold"
              >
                Expand <ExternalLink size={12} />
              </button>
            </div>

            {/* Dark Header Banner */}
            <div className="bg-[#151515] px-6 py-6 border-b border-white/5">
              <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] uppercase block mb-1">
                CONTACT DIRECTLY
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                SAY HELLO
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1">
                Open for full-time senior engineering, design systems, and consulting.
              </p>
            </div>

            {/* Cream Content Area with Form */}
            <div className="bg-[#F8F6EF] text-[#151515] p-6 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                {/* Left Info Column */}
                <div className="sm:col-span-5 space-y-3 font-text text-xs text-[#151515]/80">
                  <span className="text-[10px] uppercase tracking-widest text-[#7B5CFF] font-bold block">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${data.meta.contactEmail}`}
                    className="font-headline text-sm sm:text-base text-[#151515] hover:text-[#7B5CFF] block transition-colors break-all"
                  >
                    {data.meta.contactEmail}
                  </a>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#7B5CFF] font-bold block mb-1">
                      GITHUB & SOCIALS
                    </span>
                    <div className="flex flex-col gap-1 font-headline text-xs text-[#151515]">
                      <a href={data.meta.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#7B5CFF]">
                        GitHub: @PRN-6
                      </a>
                      <a href={data.meta.contactEmail} className="hover:text-[#7B5CFF]">
                        Email: prinsonnazareth2@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Form Card (Dark in reference) */}
                <div className="sm:col-span-7 bg-[#151515] text-white p-4 rounded-2xl shadow-md border border-white/10">
                  {contactSent ? (
                    <div className="py-8 text-center space-y-2">
                      <CheckCircle size={28} className="text-[#00D2D3] mx-auto" />
                      <h5 className="font-headline text-base text-white uppercase">
                        MESSAGE DELIVERED!
                      </h5>
                      <p className="font-text text-xs text-white/70">
                        Thank you! I'll read your note and get back to you promptly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-2">
                      <div>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full bg-[#202020] text-xs text-white px-3 py-1.5 rounded-lg border border-white/10 focus:border-[#7B5CFF] outline-none"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          placeholder="you@domain.com"
                          className="w-full bg-[#202020] text-xs text-white px-3 py-1.5 rounded-lg border border-white/10 focus:border-[#7B5CFF] outline-none"
                        />
                      </div>

                      <div>
                        <textarea
                          rows={2}
                          required
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, message: e.target.value })
                          }
                          placeholder="Project details or question..."
                          className="w-full bg-[#202020] text-xs text-white px-3 py-1.5 rounded-lg border border-white/10 focus:border-[#7B5CFF] outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#7B5CFF] hover:bg-[#6c4bec] text-white font-headline text-xs py-2 rounded-lg tracking-wider uppercase transition-colors"
                      >
                        SEND MESSAGE
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
