import React, { useState } from 'react';
import type { PortfolioConfig } from '../portfolioData';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { BlockmoonPhoneMockup } from './illustrations/BlockmoonPhoneMockup';
import { MoonArrowsPhoneMockup } from './illustrations/MoonArrowsPhoneMockup';
import { GooglePlayBadge } from './illustrations/GooglePlayBadge';
import {
  X,
  Plus,
  Minus,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Filter,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PageModalProps {
  pageId: 'games' | 'blog' | 'faq' | 'contact' | null;
  onClose: () => void;
  data: PortfolioConfig;
}

export const PageModal: React.FC<PageModalProps> = ({
  pageId,
  onClose,
  data,
}) => {
  const [blogFilter, setBlogFilter] = useState('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactSent, setContactSent] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Feedback',
    message: '',
  });

  if (!pageId) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setContactSent(true);
    confetti({ particleCount: 35, spread: 50 });
    setTimeout(() => {
      setContactSent(false);
      setFormState({ name: '', email: '', topic: 'Feedback', message: '' });
    }, 4000);
  };

  const filteredBlogPosts =
    blogFilter === 'ALL'
      ? data.blogPosts
      : data.blogPosts.filter((p) => p.category === blogFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#151515] text-[#F8F6EF] rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col animate-scaleUp">
        {/* Modal Top Bar */}
        <div className="bg-[#1e1e1e] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CatLogoBadge size={30} variant="badge-only" />
            <span className="font-headline tracking-wider text-base text-white uppercase">
              {data.meta.studioName} • {pageId}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          {/* ================= PAGE 1: GAMES ================= */}
          {pageId === 'games' && (
            <div>
              {/* Header Banner */}
              <div className="bg-[#151515] p-6 sm:p-10 border-b border-white/10">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
                  OUR GAMES
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  GAMES
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg">
                  Small, calm puzzle games. Free to play, easy on the eyes. No timers, no intrusive popups, and full offline support.
                </p>
              </div>

              {/* Games Showcase List */}
              <div className="bg-[#F8F6EF] text-[#151515] p-6 sm:p-10 space-y-12">
                {/* Game 1: Blockmoon */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#ded8c4] shadow-sm">
                  <div className="md:col-span-6 space-y-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-3 py-1 rounded-full uppercase">
                      BLOCK PUZZLE • CLOSED TEST
                    </span>
                    <h4 className="font-headline text-4xl text-[#151515] uppercase">
                      BLOCKMOON
                    </h4>
                    <p className="font-text text-sm text-[#151515]/80 leading-relaxed">
                      Drag soft glowing blocks onto an 8x8 board under the night sky. Fill rows and columns to clear them, chain combos and chase your best score.
                    </p>
                    <ul className="text-xs font-text text-[#151515]/80 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> No timers, play at your own pace
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Eye-friendly nocturnal aesthetics
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Play 100% offline
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> One extra chance per game with short optional video
                      </li>
                    </ul>
                    <div className="pt-2">
                      <GooglePlayBadge />
                    </div>
                  </div>
                  <div className="md:col-span-6 flex justify-center">
                    <BlockmoonPhoneMockup interactive={true} />
                  </div>
                </div>

                {/* Game 2: Moon Arrows */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#ded8c4] shadow-sm">
                  <div className="md:col-span-6 space-y-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-3 py-1 rounded-full uppercase">
                      ARROW PUZZLE • IN DEVELOPMENT
                    </span>
                    <h4 className="font-headline text-4xl text-[#151515] uppercase">
                      MOON ARROWS
                    </h4>
                    <p className="font-text text-sm text-[#151515]/80 leading-relaxed">
                      Every arrow wants out. Tap them in order, unlock and watch the maze unwind into a dance screen on every solve.
                    </p>
                    <ul className="text-xs font-text text-[#151515]/80 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Handcrafted maze layouts
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Ambient nocturnal soundscapes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Infinite undo and quiet hints
                      </li>
                    </ul>
                    <div className="pt-2">
                      <GooglePlayBadge />
                    </div>
                  </div>
                  <div className="md:col-span-6 flex justify-center">
                    <MoonArrowsPhoneMockup interactive={true} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= PAGE 2: BLOG ================= */}
          {pageId === 'blog' && (
            <div>
              {/* Header Banner */}
              <div className="bg-[#151515] p-6 sm:p-10 border-b border-white/10">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
                  FROM THE STUDIO
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  BLOG
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg mb-6">
                  Puzzle tips, cozy game lists and notes from our independent studio.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {['ALL', 'PUZZLE TIPS', 'GAME LISTS', 'DEVLOG', 'NEWS'].map(
                    (filter) => (
                      <button
                        key={filter}
                        onClick={() => setBlogFilter(filter)}
                        className={`text-xs font-headline tracking-wider uppercase px-4 py-1.5 rounded-full transition-all ${
                          blogFilter === filter
                            ? 'bg-[#7B5CFF] text-white shadow-md'
                            : 'bg-[#252525] text-white/60 hover:text-white'
                        }`}
                      >
                        {filter}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="bg-[#F8F6EF] text-[#151515] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBlogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl p-5 border border-[#ded8c4] flex flex-col justify-between shadow-sm hover:border-[#7B5CFF] transition-all hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-full h-36 rounded-xl mb-4 bg-gradient-to-tr from-[#7B5CFF]/20 to-[#151515] p-4 flex items-end justify-between text-white">
                        <span className="font-headline text-xs tracking-wider uppercase bg-[#151515]/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                          {post.category}
                        </span>
                        <span className="text-xs font-mono">{post.readTime}</span>
                      </div>

                      <span className="text-xs font-mono text-black/50 block mb-1">
                        {post.date}
                      </span>
                      <h4 className="font-headline text-xl text-[#151515] uppercase leading-tight mb-2">
                        {post.title}
                      </h4>
                      <p className="font-text text-xs text-[#151515]/80 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#ded8c4] flex items-center justify-between text-xs">
                      <span className="font-headline text-[#7B5CFF] tracking-wider uppercase">
                        Read Story →
                      </span>
                      <span className="text-black/40">Gika Games Studio</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* ================= PAGE 3: FAQ ================= */}
          {pageId === 'faq' && (
            <div>
              {/* Header Banner */}
              <div className="bg-[#151515] p-6 sm:p-10 border-b border-white/10">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
                  HELP CENTER
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  FAQ
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg">
                  Quick answers to the questions we get the most about gameplay, offline play, progress saves, and updates.
                </p>
              </div>

              {/* FAQ Accordion List */}
              <div className="bg-[#F8F6EF] text-[#151515] p-6 sm:p-10 space-y-4">
                {data.faq.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-5 border border-[#ded8c4] shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left font-headline text-base sm:text-lg text-[#151515] uppercase tracking-wide hover:text-[#7B5CFF] transition-colors"
                      >
                        <span>{item.question}</span>
                        <span className="w-8 h-8 rounded-full bg-[#F8F6EF] flex items-center justify-center text-[#7B5CFF] ml-3 flex-shrink-0">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="font-text text-sm text-[#151515]/85 mt-3 pt-3 border-t border-[#ded8c4] leading-relaxed animate-fadeIn">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= PAGE 4: CONTACT ================= */}
          {pageId === 'contact' && (
            <div>
              {/* Header Banner */}
              <div className="bg-[#151515] p-6 sm:p-10 border-b border-white/10">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
                  GET IN TOUCH
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  SAY HELLO
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg">
                  Feedback, bugs, press or partnerships. We read every message and reply within 30 days.
                </p>
              </div>

              {/* Contact Form & Studio Details */}
              <div className="bg-[#F8F6EF] text-[#151515] p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Info */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#7B5CFF] block mb-1">
                        EMAIL DIRECTLY
                      </span>
                      <a
                        href={`mailto:${data.meta.contactEmail}`}
                        className="font-headline text-xl sm:text-2xl text-[#151515] hover:text-[#7B5CFF] transition-colors block"
                      >
                        {data.meta.contactEmail}
                      </a>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#7B5CFF] block mb-2">
                        SOCIAL CHANNELS
                      </span>
                      <div className="space-y-1 font-headline text-base text-[#151515]">
                        <div>Instagram: @gikagames</div>
                        <div>TikTok: @gikagames</div>
                        <div>X (Twitter): @gikagames</div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-[#ded8c4] space-y-1">
                      <span className="font-headline text-xs text-[#151515] uppercase block">
                        💡 Bug Reporting Tip
                      </span>
                      <p className="font-text text-xs text-[#151515]/70">
                        Please include your device model (e.g. Pixel 8, Galaxy S23) and game version so we can debug promptly.
                      </p>
                    </div>
                  </div>

                  {/* Right Form Card */}
                  <div className="lg:col-span-7 bg-[#151515] text-white p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                    {contactSent ? (
                      <div className="py-12 text-center space-y-3">
                        <CheckCircle size={42} className="text-[#00D2D3] mx-auto animate-bounce" />
                        <h4 className="font-headline text-2xl text-white uppercase">
                          MESSAGE SENT!
                        </h4>
                        <p className="font-text text-sm text-white/70 max-w-sm mx-auto">
                          Thank you for reaching out. A human from our team will get back to your inbox soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                          <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            placeholder="Alex Morgan"
                            className="w-full bg-[#202020] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                            Your Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            placeholder="alex@domain.com"
                            className="w-full bg-[#202020] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                            Topic
                          </label>
                          <select
                            value={formState.topic}
                            onChange={(e) =>
                              setFormState({ ...formState, topic: e.target.value })
                            }
                            className="w-full bg-[#202020] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none cursor-pointer"
                          >
                            <option value="Feedback">Feedback</option>
                            <option value="Bug Report">Bug Report</option>
                            <option value="Press">Press Inquiry</option>
                            <option value="Partnership">Partnership</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                            Message
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({ ...formState, message: e.target.value })
                            }
                            placeholder="Tell us what's on your mind..."
                            className="w-full bg-[#202020] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#7B5CFF] hover:bg-[#6c4bec] text-white font-headline text-sm py-3 rounded-xl tracking-wider uppercase transition-all shadow-lg active:scale-95"
                        >
                          SEND MESSAGE
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
