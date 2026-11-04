import React, { useState } from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import type { PortfolioConfig } from '../portfolioData';
import {
  Plus,
  Minus,
  Send,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
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
    topic: 'Feedback',
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
      setContactForm({ name: '', email: '', topic: 'Feedback', message: '' });
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
            GAMES, BLOG, FAQ, CONTACT.
          </h2>
        </div>

        {/* 2x2 Grid of Window Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* ================= CARD 1: GAMES PAGE ================= */}
          <div className="bg-[#1b1b1b] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#7B5CFF]/60">
            {/* Dark Top Nav Bar */}
            <div className="bg-[#151515] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CatLogoBadge size={28} variant="badge-only" />
                <span className="font-headline text-xs tracking-wider text-white">
                  GIKA GAMES
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
                OUR GAMES
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                GAMES
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1">
                Small, calm puzzle games. Free to play, easy on the eyes.
              </p>
            </div>

            {/* Cream Content Area */}
            <div className="bg-[#F8F6EF] text-[#151515] p-6 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Mini Phone Screenshots */}
                <div className="sm:col-span-5 flex items-center gap-2">
                  <div className="w-24 h-36 bg-[#0d101d] rounded-xl p-1.5 border border-black/20 shadow-md flex flex-col items-center justify-between">
                    <span className="text-[7px] text-white/60">🌙</span>
                    <span className="text-[8px] text-white font-bold">
                      BLOCKMOON
                    </span>
                    <div className="w-16 h-1.5 bg-[#7B5CFF] rounded-full" />
                  </div>
                  <div className="w-24 h-36 bg-[#09101f] rounded-xl p-1.5 border border-black/20 shadow-md flex flex-col items-center justify-between">
                    <span className="text-[8px] text-[#FECA57] font-bold">
                      1250
                    </span>
                    <div className="grid grid-cols-4 gap-0.5 w-full">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 rounded-[1px] ${
                            i % 2 === 0 ? 'bg-[#7B5CFF]' : 'bg-[#00D2D3]'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="w-16 h-1 bg-white/20 rounded-full" />
                  </div>
                </div>

                {/* Game Info */}
                <div className="sm:col-span-7 space-y-2">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-black/50 block">
                    BLOCK PUZZLE • CLOSED TEST · 2026
                  </span>
                  <h4 className="font-headline text-2xl text-[#151515] uppercase tracking-wide">
                    BLOCKMOON
                  </h4>
                  <p className="font-text text-xs text-[#151515]/80 leading-relaxed">
                    Drag soft glowing blocks onto an 8x8 board under the night sky. Fill rows and columns to clear them.
                  </p>
                  <ul className="text-[11px] font-text text-[#151515]/70 space-y-1">
                    <li>• No timers, play at your own pace</li>
                    <li>• Eye-friendly night design</li>
                    <li>• Works offline</li>
                    <li>• One extra chance per game with a short video</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: BLOG PAGE ================= */}
          <div className="bg-[#1b1b1b] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#7B5CFF]/60">
            {/* Dark Top Nav Bar */}
            <div className="bg-[#151515] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CatLogoBadge size={28} variant="badge-only" />
                <span className="font-headline text-xs tracking-wider text-white">
                  GIKA GAMES
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
                BLOG
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                BLOG
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1 mb-4">
                Puzzle tips, cozy game lists and notes from our studio.
              </p>

              {/* Filter Pills (Matches Slide 6: ALL, PUZZLE TIPS, GAME LISTS, DEVLOG, NEWS) */}
              <div className="flex flex-wrap items-center gap-1.5">
                {['ALL', 'PUZZLE TIPS', 'GAME LISTS', 'DEVLOG', 'NEWS'].map((filter) => (
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {filteredBlogPosts.slice(0, 3).map((post, i) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl p-3 border border-[#ded8c4] flex flex-col justify-between shadow-sm hover:border-[#7B5CFF] transition-colors"
                  >
                    <div>
                      {/* Color Header Banner */}
                      <div
                        className={`w-full h-16 rounded-lg mb-2 flex items-center justify-center text-[9px] font-bold uppercase tracking-wider text-white ${
                          i % 2 === 0 ? 'bg-[#7B5CFF]' : 'bg-[#151515]'
                        }`}
                      >
                        COVER
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#7B5CFF] block">
                        {post.category} • {post.date}
                      </span>
                      <h5 className="font-headline text-xs text-[#151515] line-clamp-2 uppercase mt-1 leading-snug">
                        {post.title}
                      </h5>
                    </div>
                    <span className="text-[10px] text-[#7B5CFF] font-bold mt-2 hover:underline">
                      READ MORE →
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
                  GIKA GAMES
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
                HELP
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                FAQ
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1">
                Quick answers to the questions we get the most.
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
                  GIKA GAMES
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
                CONTACT
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#7B5CFF] uppercase tracking-wide">
                SAY HELLO
              </h3>
              <p className="font-text text-xs sm:text-sm text-white/70 mt-1">
                Feedback, bugs, press or partnerships. We read every message and reply within 30 days.
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
                    className="font-headline text-sm sm:text-base text-[#151515] hover:text-[#7B5CFF] block transition-colors"
                  >
                    {data.meta.contactEmail}
                  </a>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#7B5CFF] font-bold block mb-1">
                      FOLLOW US
                    </span>
                    <div className="flex items-center gap-2 font-medium">
                      <span>Instagram</span>
                      <span>•</span>
                      <span>TikTok</span>
                      <span>•</span>
                      <span>X</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-[#151515]/60 pt-2 italic">
                    Bug report tip: add your device model and a screenshot.
                  </p>
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
                        Thank you! We'll read your note and get back to you.
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
                        <select
                          value={contactForm.topic}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, topic: e.target.value })
                          }
                          className="w-full bg-[#202020] text-xs text-white px-3 py-1.5 rounded-lg border border-white/10 focus:border-[#7B5CFF] outline-none cursor-pointer"
                        >
                          <option value="Feedback">Feedback</option>
                          <option value="Bug Report">Bug Report</option>
                          <option value="Press">Press Inquiry</option>
                          <option value="Partnership">Partnership</option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          rows={2}
                          required
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, message: e.target.value })
                          }
                          placeholder="Tell us what happened or what you'd like to see..."
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
