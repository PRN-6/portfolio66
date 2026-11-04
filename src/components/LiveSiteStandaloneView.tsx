import React, { useState } from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { StretchedCatIllustration } from './illustrations/StretchedCatIllustration';
import { SittingCatsIllustration } from './illustrations/SittingCatsIllustration';
import { BlockmoonPhoneMockup } from './illustrations/BlockmoonPhoneMockup';
import { MoonArrowsPhoneMockup } from './illustrations/MoonArrowsPhoneMockup';
import { GooglePlayBadge } from './illustrations/GooglePlayBadge';
import type { PortfolioConfig } from '../portfolioData';
import {
  Play,
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Menu,
  X,
  Layers,
  ArrowLeft,
  Mail,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveSiteStandaloneProps {
  data: PortfolioConfig;
  onBackToCaseStudy: () => void;
  onOpenPageModal: (pageId: 'games' | 'blog' | 'faq' | 'contact') => void;
}

export const LiveSiteStandaloneView: React.FC<LiveSiteStandaloneProps> = ({
  data,
  onBackToCaseStudy,
  onOpenPageModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeBlogCategory, setActiveBlogCategory] = useState('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setSubscribed(true);
    confetti({ particleCount: 40, spread: 60 });
    setTimeout(() => {
      setSubscribed(false);
      setEmailInput('');
    }, 4000);
  };

  const filteredBlogPosts =
    activeBlogCategory === 'ALL'
      ? data.blogPosts
      : data.blogPosts.filter((p) => p.category === activeBlogCategory);

  return (
    <div className="min-h-screen bg-[#151515] text-[#F8F6EF] flex flex-col font-text selection:bg-[#7B5CFF] selection:text-white">
      {/* Top Banner Notice: Live Site Simulation Bar */}
      <div className="bg-[#7B5CFF] text-white px-4 py-2 text-xs font-headline tracking-wider flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>LIVE SITE PREVIEW — gikagame.com</span>
        </div>
        <button
          onClick={onBackToCaseStudy}
          className="flex items-center gap-1 bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full text-[11px] transition-colors"
        >
          <ArrowLeft size={13} />
          <span>RETURN TO CASE STUDY</span>
        </button>
      </div>

      {/* Main Website Header */}
      <header className="sticky top-0 z-40 bg-[#151515]/95 backdrop-blur-md px-4 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CatLogoBadge size={44} variant="badge-only" />
          <span className="font-headline tracking-wider text-2xl text-white">
            {data.meta.studioName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-text text-sm font-semibold tracking-wider uppercase">
          <a href="#games-section" className="hover:text-[#7B5CFF] transition-colors">
            Games
          </a>
          <a href="#about-section" className="hover:text-[#7B5CFF] transition-colors">
            About
          </a>
          <a href="#blog-section" className="hover:text-[#7B5CFF] transition-colors">
            Blog
          </a>
          <a href="#faq-section" className="hover:text-[#7B5CFF] transition-colors">
            FAQ
          </a>
          <button
            onClick={() => onOpenPageModal('contact')}
            className="hover:text-[#7B5CFF] transition-colors"
          >
            Contact
          </button>
          <a
            href="#games-section"
            className="bg-[#7B5CFF] hover:bg-[#6a47ea] text-white font-headline text-xs tracking-wider px-5 py-2 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            PLAY NOW!
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-[#151515] p-6 flex flex-col justify-between animate-fadeIn md:hidden">
          <div className="space-y-4 pt-6">
            {[
              { num: '01', name: 'HOME', href: '#' },
              { num: '02', name: 'GAMES', href: '#games-section' },
              { num: '03', name: 'ABOUT', href: '#about-section' },
              { num: '04', name: 'BLOG', href: '#blog-section' },
              { num: '05', name: 'FAQ', href: '#faq-section' },
            ].map((item) => (
              <a
                key={item.num}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline gap-3 text-3xl font-headline tracking-wider text-white hover:text-[#7B5CFF] transition-colors"
              >
                <span className="font-mono text-sm text-[#7B5CFF]">
                  {item.num}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPageModal('contact');
              }}
              className="flex items-baseline gap-3 text-3xl font-headline tracking-wider text-white hover:text-[#7B5CFF] transition-colors"
            >
              <span className="font-mono text-sm text-[#7B5CFF]">06</span>
              <span>CONTACT</span>
            </button>
          </div>

          <div className="space-y-4 pb-8">
            <a
              href="#games-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-[#7B5CFF] text-white text-center py-3 rounded-full font-headline tracking-widest text-base shadow-xl"
            >
              PLAY NOW!
            </a>
            <div className="text-center text-xs text-white/50">
              Instagram • TikTok • X
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 sm:py-28 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        {/* Marquee Banner */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden opacity-10 pointer-events-none select-none">
          <div className="animate-marquee whitespace-nowrap font-headline text-8xl sm:text-[10rem] text-white tracking-widest py-4">
            <span>GIKA GAME, GIKA GAME, GIKA GAME, GIKA GAME &nbsp;</span>
            <span>GIKA GAME, GIKA GAME, GIKA GAME, GIKA GAME &nbsp;</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 pt-4">
          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-none text-white tracking-tight uppercase mb-6">
            SMALL GAMES FOR QUIET MOMENTS.
          </h1>

          <p className="font-text text-lg sm:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {data.meta.subTagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#games-section"
              className="bg-[#7B5CFF] hover:bg-[#6c4bec] text-white font-headline tracking-widest text-lg px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(123,92,255,0.6)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Play size={18} className="fill-white" /> PLAY NOW!
            </a>
            <button
              onClick={() => onOpenPageModal('contact')}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white font-headline tracking-widest text-lg px-8 py-3 rounded-full transition-all"
            >
              CONTACT US
            </button>
          </div>

          {/* Stretched Cat */}
          <div className="max-w-2xl mx-auto -mb-32 mt-6 pointer-events-none">
            <StretchedCatIllustration />
          </div>
        </div>
      </section>

      {/* Game 1: BLOCKMOON (Moon Violet #7B5CFF) */}
      <section id="games-section" className="relative bg-[#7B5CFF] text-white py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold font-text tracking-widest uppercase px-3 py-1 rounded-full">
              BLOCK PUZZLE • CLOSED TEST
            </div>

            <h2 className="font-headline text-5xl sm:text-7xl leading-none text-white tracking-tight">
              BLOCKMOON
            </h2>

            <p className="font-text text-lg sm:text-xl text-white/95 leading-relaxed">
              Drag soft glowing blocks onto an 8x8 board under the night sky. Fill rows and columns to clear them, chain combos and chase your best score.
            </p>

            <ul className="space-y-2.5 font-text text-base text-white/90">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" /> No timers, play at your own pace
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" /> Eye-friendly night design with soothing glows
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" /> Works 100% offline anywhere
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" /> One extra chance per game with optional short video
              </li>
            </ul>

            <div className="pt-2">
              <GooglePlayBadge />
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <BlockmoonPhoneMockup interactive={true} />
          </div>
        </div>
      </section>

      {/* Game 2: MOON ARROWS (Cream #F8F6EF) */}
      <section className="relative bg-[#F8F6EF] text-[#151515] py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-block bg-[#7B5CFF]/15 text-[#7B5CFF] text-xs font-bold font-text tracking-widest uppercase px-3 py-1 rounded-full">
              ARROW PUZZLE • IN DEVELOPMENT
            </div>

            <h2 className="font-headline text-5xl sm:text-7xl leading-none text-[#7B5CFF] tracking-tight">
              MOON ARROWS
            </h2>

            <p className="font-text text-lg sm:text-xl text-[#151515]/90 leading-relaxed">
              Every arrow wants out. Tap them in order, unlock and watch the maze unwind into a dance screen on every solve.
            </p>

            <ul className="space-y-2.5 font-text text-base text-[#151515]/80">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7B5CFF]" /> Handcrafted labyrinth puzzles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7B5CFF]" /> Ambient nocturnal soundscape
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7B5CFF]" /> Infinite undo and gentle hints
              </li>
            </ul>

            <div className="pt-2">
              <GooglePlayBadge />
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <MoonArrowsPhoneMockup interactive={true} />
          </div>
        </div>
      </section>

      {/* About Section: WHO WE ARE */}
      <section id="about-section" className="relative bg-[#151515] text-white py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block">
              THE STUDIO
            </span>

            <h2 className="font-headline text-5xl sm:text-7xl leading-none text-white tracking-tight uppercase">
              WHO WE ARE
            </h2>

            <p className="font-text text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
              Gika Games is a small independent studio making calm puzzle games for phones. Every game follows three simple rules: no timers, soft colors that are easy on the eyes, and short sessions that fit into real life.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#games-section"
                className="bg-[#7B5CFF] text-white font-headline text-sm tracking-wider px-6 py-2.5 rounded-full hover:bg-[#6a47eb] transition-all"
              >
                PLAY NOW
              </a>
              <button
                onClick={() => onOpenPageModal('contact')}
                className="bg-transparent border border-white/30 text-white font-headline text-sm tracking-wider px-6 py-2.5 rounded-full hover:bg-white/10 transition-all"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-80 sm:w-96">
              <SittingCatsIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog-section" className="relative bg-[#111] text-white py-20 sm:py-24 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-1">
                DEVLOG & INSIGHTS
              </span>
              <h2 className="font-headline text-4xl sm:text-6xl text-white tracking-tight uppercase">
                FROM THE BLOG
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {['ALL', 'PUZZLE TIPS', 'GAME LISTS', 'DEVLOG'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveBlogCategory(cat)}
                  className={`text-xs font-headline tracking-wider uppercase px-4 py-1.5 rounded-full transition-all ${
                    activeBlogCategory === cat
                      ? 'bg-[#7B5CFF] text-white shadow-md'
                      : 'bg-[#222] text-white/60 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBlogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => onOpenPageModal('blog')}
                className="bg-[#1b1b1b] border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-[#7B5CFF] transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div>
                  <div className="w-full h-28 rounded-xl mb-3 flex items-center justify-center font-headline text-xs tracking-wider uppercase text-white/80 overflow-hidden bg-gradient-to-br from-[#7B5CFF]/30 to-[#1b1b1b]">
                    {post.category}
                  </div>
                  <h4 className="font-headline text-base text-white group-hover:text-[#7B5CFF] transition-colors line-clamp-2 uppercase leading-snug mb-2">
                    {post.title}
                  </h4>
                  <p className="font-text text-xs text-white/60 line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-white/40 pt-2 border-t border-white/5">
                  <span>{post.date}</span>
                  <span className="text-[#7B5CFF] group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="relative bg-[#F8F6EF] text-[#151515] py-20 px-4 sm:px-8 border-b border-[#ded8c4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-1">
              HELP & SUPPORT
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl text-[#151515] tracking-tight uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-3">
            {data.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-[#ded8c4] shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-headline text-base sm:text-lg text-[#151515] uppercase tracking-wide hover:text-[#7B5CFF] transition-colors"
                  >
                    <span>{item.question}</span>
                    <span className="w-7 h-7 rounded-full bg-[#F8F6EF] flex items-center justify-center text-[#7B5CFF] ml-3 flex-shrink-0">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="font-text text-sm text-[#151515]/80 mt-3 pt-3 border-t border-[#ded8c4] leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Play CTA Section */}
      <section className="relative bg-[#7B5CFF] text-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <h2 className="font-headline text-4xl sm:text-6xl leading-none text-white tracking-tight uppercase">
              SEE YOU ON GOOGLE PLAY.
            </h2>
            <p className="font-text text-base sm:text-lg text-white/90 max-w-md">
              Every game is free to download and play with no timers, no stress.
            </p>
            <div>
              <GooglePlayBadge />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-[#F8F6EF] text-[#151515] rounded-3xl p-6 shadow-2xl border border-white/30">
              <h3 className="font-headline text-2xl text-[#151515] uppercase tracking-wide mb-1">
                GET A PING ON LAUNCH DAY
              </h3>
              <p className="font-text text-xs text-[#151515]/70 mb-4">
                Enter your email address for a gentle launch notification. Zero spam.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-100 p-3 rounded-xl font-text text-sm font-semibold">
                  <CheckCircle size={18} />
                  <span>You're subscribed! We'll alert you on launch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex items-center gap-2 bg-white rounded-xl p-1.5 border border-[#ded8c4] focus-within:border-[#7B5CFF]">
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-3 py-1.5 text-xs text-[#151515] bg-transparent outline-none font-text"
                    />
                    <button
                      type="submit"
                      className="bg-[#151515] hover:bg-[#7B5CFF] text-white font-headline text-xs px-5 py-2.5 rounded-lg tracking-wider transition-colors uppercase whitespace-nowrap"
                    >
                      NOTIFY ME
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Website Footer */}
      <footer className="bg-[#151515] text-white pt-16 pb-8 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <CatLogoBadge size={38} variant="badge-only" />
              <span className="font-headline tracking-wider text-xl text-white">
                {data.meta.studioName}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 font-text text-xs tracking-wider uppercase text-white/60">
              <a href="#games-section" className="hover:text-white">Games</a>
              <a href="#about-section" className="hover:text-white">About</a>
              <a href="#blog-section" className="hover:text-white">Blog</a>
              <a href="#faq-section" className="hover:text-white">FAQ</a>
              <button onClick={() => onOpenPageModal('contact')} className="hover:text-white">
                Contact
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-2">
            <span>© 2026 {data.meta.studioName}. All rights reserved.</span>
            <span>Small games for quiet moments.</span>
          </div>

          <div className="mt-8 text-center pointer-events-none select-none">
            <span className="font-headline text-7xl sm:text-9xl tracking-widest text-transparent stroke-text uppercase opacity-15">
              {data.meta.studioName}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
