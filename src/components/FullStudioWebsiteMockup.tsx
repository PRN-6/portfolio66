import React, { useState } from 'react';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { StretchedCatIllustration } from './illustrations/StretchedCatIllustration';
import { SittingCatsIllustration } from './illustrations/SittingCatsIllustration';
import { NexaFlowDashboardMockup } from './illustrations/NexaFlowDashboardMockup';
import { AuraUIDesignMockup } from './illustrations/AuraUIDesignMockup';
import type { PortfolioConfig } from '../portfolioData';
import {
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  ExternalLink,
  Code2,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './illustrations/GithubIcon';
import confetti from 'canvas-confetti';

interface FullStudioWebsiteProps {
  data: PortfolioConfig;
  onNavigateInnerPage?: (page: 'games' | 'blog' | 'faq' | 'contact') => void;
}

export const FullStudioWebsiteMockup: React.FC<FullStudioWebsiteProps> = ({
  data,
  onNavigateInnerPage,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    setSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#7B5CFF', '#00D2D3', '#FF6B6B'],
    });
    setTimeout(() => {
      setSubscribed(false);
      setEmailInput('');
    }, 4000);
  };

  return (
    <section
      id="works"
      className="relative w-full bg-[#7B5CFF] text-white py-16 sm:py-24 px-3 sm:px-8 overflow-hidden border-b border-[#6344e7]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-white/80 block mb-2">
              FEATURED PROJECTS
            </span>
            <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl leading-none text-white uppercase tracking-tight">
              ONE SCROLL, THE WHOLE STUDIO.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 self-start sm:self-auto bg-black/30 border border-white/20 text-white font-headline tracking-wider text-xs px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>INTERACTIVE WORKS</span>
          </div>
        </div>

        {/* Realistic Browser Window Mockup */}
        <div className="w-full bg-[#151515] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden text-[#F8F6EF]">
          {/* Browser Chrome Header (macOS window controls + address bar) */}
          <div className="bg-[#1f1f1f] px-4 py-3 border-b border-[#2e2e2e] flex items-center justify-between">
            {/* Window control dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            </div>

            {/* Address bar */}
            <div className="bg-[#151515] px-4 sm:px-6 py-1 rounded-full text-xs font-mono text-white/70 border border-white/10 flex items-center gap-2 max-w-xs sm:max-w-sm w-full justify-center">
              <span className="text-emerald-400">🔒</span>
              <span className="truncate">https://github.com/PRN-6/portfolio66</span>
            </div>

            {/* Window actions */}
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <span className="hidden sm:inline">100%</span>
            </div>
          </div>

          {/* ================= INSIDE THE WEBSITE ================= */}
          <div className="relative w-full max-h-[820px] overflow-y-auto scroll-smooth custom-browser-scroll">
            {/* --- Site Nav Header --- */}
            <header className="sticky top-0 z-30 bg-[#151515]/90 backdrop-blur-md px-4 sm:px-8 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CatLogoBadge size={38} variant="badge-only" />
                <span className="font-headline tracking-wider text-xl text-white">
                  {data.meta.studioName}
                </span>
              </div>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-6 font-text text-sm tracking-wider uppercase font-semibold">
                <a href="#nexaflow-preview" className="hover:text-[#7B5CFF] transition-colors">
                  Projects
                </a>
                <button
                  onClick={() => onNavigateInnerPage?.('blog')}
                  className="hover:text-[#7B5CFF] transition-colors"
                >
                  Articles
                </button>
                <button
                  onClick={() => onNavigateInnerPage?.('faq')}
                  className="hover:text-[#7B5CFF] transition-colors"
                >
                  FAQ
                </button>
                <a
                  href="#contact-section"
                  className="hover:text-[#7B5CFF] transition-colors"
                >
                  Contact
                </a>
                <a
                  href={data.meta.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7B5CFF] text-white px-4 py-1.5 rounded-full text-xs font-headline tracking-wider hover:bg-[#6c4aec] transition-all flex items-center gap-1.5"
                >
                  <GithubIcon size={13} />
                  <span>GITHUB</span>
                </a>
              </nav>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-1"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </header>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="bg-[#1a1a1a] p-4 border-b border-white/10 md:hidden flex flex-col gap-3 font-headline text-lg tracking-wider">
                <a
                  href="#nexaflow-preview"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-white hover:text-[#7B5CFF]"
                >
                  01 PROJECTS
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateInnerPage?.('blog');
                  }}
                  className="text-left text-white hover:text-[#7B5CFF]"
                >
                  02 ARTICLES
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateInnerPage?.('faq');
                  }}
                  className="text-left text-white hover:text-[#7B5CFF]"
                >
                  03 FAQ
                </button>
                <a
                  href="#contact-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-white hover:text-[#7B5CFF]"
                >
                  04 CONTACT
                </a>
              </div>
            )}

            {/* --- Site Hero Section with Giant Marquee --- */}
            <div className="relative bg-[#151515] pt-12 pb-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
              {/* Giant Marquee Running Background Text */}
              <div className="absolute top-0 left-0 right-0 overflow-hidden opacity-10 pointer-events-none select-none">
                <div className="animate-marquee whitespace-nowrap font-headline text-7xl sm:text-9xl text-white tracking-widest py-2">
                  <span>PRINSON NAZARETH · PORTFOLIO66 · FULL-STACK DEVELOPER &nbsp;</span>
                  <span>PRINSON NAZARETH · PORTFOLIO66 · FULL-STACK DEVELOPER &nbsp;</span>
                </div>
              </div>

              <div className="max-w-4xl mx-auto text-center relative z-10 pt-4">
                <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl leading-tight text-white tracking-tight uppercase mb-4">
                  CRAFTING HIGH-PERFORMANCE WEB APPLICATIONS.
                </h1>

                <p className="font-text text-base sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                  {data.meta.subTagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#nexaflow-preview"
                    className="bg-[#7B5CFF] hover:bg-[#6c4aec] text-white font-headline tracking-widest text-base sm:text-lg px-8 py-3 rounded-full shadow-[0_0_20px_rgba(123,92,255,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <Code2 size={16} /> VIEW PROJECTS
                  </a>
                  <a
                    href="#contact-section"
                    className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white font-headline tracking-widest text-base sm:text-lg px-7 py-2.5 rounded-full transition-all"
                  >
                    GET IN TOUCH
                  </a>
                </div>

                {/* Stretched Cat Resting on the Boundary */}
                <div className="max-w-xl mx-auto -mb-28 mt-4 pointer-events-none">
                  <StretchedCatIllustration />
                </div>
              </div>
            </div>

            {/* --- Project 1: NEXAFLOW CLOUD (Moon Violet #7B5CFF Background) --- */}
            <div id="nexaflow-preview" className="relative bg-[#7B5CFF] text-white py-16 sm:py-24 px-4 sm:px-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Text */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold font-text tracking-widest uppercase px-3 py-1 rounded-full">
                    CLOUD & DISTRIBUTED SYSTEMS • 2026
                  </div>

                  <h3 className="font-headline text-5xl sm:text-7xl leading-none text-white tracking-tight">
                    NEXAFLOW CLOUD
                  </h3>

                  <p className="font-text text-base sm:text-lg text-white/90 leading-relaxed">
                    A high-throughput cloud observability platform streaming live server metrics, distributed traces, and canvas-based node topologies with sub-50ms latency.
                  </p>

                  <ul className="space-y-2 font-text text-sm sm:text-base text-white/90">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" /> Real-time WebSocket telemetry with backpressure control
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" /> Interactive SVG topology node graph visualizer
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" /> Handles 50,000+ operations/second seamlessly
                    </li>
                  </ul>

                  <div className="pt-2 flex items-center gap-3">
                    <a
                      href={data.meta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#151515] text-white hover:bg-black font-headline tracking-wider text-sm px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                      <GithubIcon size={15} />
                      <span>EXPLORE ON GITHUB</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Right Interactive Dashboard Mockup */}
                <div className="lg:col-span-6 flex justify-center">
                  <NexaFlowDashboardMockup interactive={true} />
                </div>
              </div>
            </div>

            {/* --- Project 2: AURA DESIGN SYSTEM (Cream #F8F6EF Background) --- */}
            <div className="relative bg-[#F8F6EF] text-[#151515] py-16 sm:py-24 px-4 sm:px-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Text */}
                <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                  <div className="inline-block bg-[#7B5CFF]/15 text-[#7B5CFF] text-xs font-bold font-text tracking-widest uppercase px-3 py-1 rounded-full">
                    DESIGN SYSTEM & UI ARCHITECTURE
                  </div>

                  <h3 className="font-headline text-5xl sm:text-7xl leading-none text-[#7B5CFF] tracking-tight">
                    AURA DESIGN TOKENS
                  </h3>

                  <p className="font-text text-base sm:text-lg text-[#151515]/85 leading-relaxed">
                    An ergonomic component suite featuring 40+ WCAG AAA compliant primitives, fluid typographic scaling, and zero-runtime CSS variable design tokens.
                  </p>

                  <ul className="space-y-2 font-text text-sm sm:text-base text-[#151515]/80">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> 40+ WCAG AAA accessible Radix components
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Single-source token synchronization for Figma & Tailwind
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Under 12kB gzipped core bundle with tree-shaking
                    </li>
                  </ul>

                  <div className="pt-2">
                    <a
                      href={data.meta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#7B5CFF] text-white hover:bg-[#6c4bec] font-headline tracking-wider text-sm px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                      <Code2 size={15} />
                      <span>VIEW REPOSITORY</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Right Interactive Mockup */}
                <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
                  <AuraUIDesignMockup />
                </div>
              </div>
            </div>

            {/* --- Site Section: WHO I AM (Dark Background) --- */}
            <div className="relative bg-[#151515] text-white py-16 sm:py-24 px-4 sm:px-8 border-b border-white/10">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Text */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block">
                    PHILOSOPHY & ETHOS
                  </span>

                  <h3 className="font-headline text-5xl sm:text-7xl leading-none text-white tracking-tight uppercase">
                    WHO I AM
                  </h3>

                  <p className="font-text text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                    I build software that respects human attention: clean architecture, resilient typing, and calm ergonomics. Drawing inspiration from Japanese design restraint and typographic discipline, every interface is crafted to reduce cognitive fatigue while delivering peak engineering performance.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="#contact-section"
                      className="bg-[#7B5CFF] text-white font-headline text-xs tracking-wider px-5 py-2 rounded-full hover:bg-[#6a47eb] transition-all"
                    >
                      HIRE ME
                    </a>
                    <a
                      href={data.meta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#242424] text-white font-headline text-xs tracking-wider px-5 py-2 rounded-full hover:bg-[#333] transition-all flex items-center gap-1.5"
                    >
                      <GithubIcon size={13} />
                      <span>GITHUB REPOS</span>
                    </a>
                  </div>
                </div>

                {/* Right Sitting Cats Illustration */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-72 sm:w-80">
                    <SittingCatsIllustration />
                  </div>
                </div>
              </div>
            </div>

            {/* --- Site Section: ENGINEERING ARTICLES (Dark with Light Cards) --- */}
            <div className="relative bg-[#111] text-white py-16 sm:py-20 px-4 sm:px-8 border-b border-white/10">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-8">
                  <h3 className="font-headline text-4xl sm:text-6xl text-white tracking-tight uppercase">
                    TECHNICAL WRITING
                  </h3>
                  <button
                    onClick={() => onNavigateInnerPage?.('blog')}
                    className="font-text text-xs tracking-wider uppercase text-[#7B5CFF] hover:underline font-bold"
                  >
                    View All Articles →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.blogPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => onNavigateInnerPage?.('blog')}
                      className="bg-[#1b1b1b] border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-[#7B5CFF] transition-all hover:-translate-y-1 cursor-pointer group"
                    >
                      <div>
                        <div className="w-full h-24 rounded-xl mb-3 flex items-center justify-center font-headline text-xs tracking-wider uppercase text-white/70 overflow-hidden bg-gradient-to-br from-[#7B5CFF]/30 to-[#1b1b1b]">
                          {post.category}
                        </div>
                        <h4 className="font-headline text-sm text-white group-hover:text-[#7B5CFF] transition-colors line-clamp-2 uppercase leading-tight mb-2">
                          {post.title}
                        </h4>
                        <p className="font-text text-xs text-white/60 line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-white/40 pt-2 border-t border-white/5">
                        <span>{post.date}</span>
                        <span className="text-[#7B5CFF] group-hover:translate-x-1 transition-transform">
                          Read →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- Site Section: COLLABORATE CTA (Violet #7B5CFF) --- */}
            <div className="relative bg-[#7B5CFF] text-white py-16 px-4 sm:px-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left CTA */}
                <div className="md:col-span-7 space-y-4">
                  <h3 className="font-headline text-4xl sm:text-6xl leading-none text-white tracking-tight uppercase">
                    LET'S BUILD SOMETHING EXTRAORDINARY.
                  </h3>
                  <p className="font-text text-sm sm:text-base text-white/90 max-w-md">
                    Open for high-impact senior engineering roles, design system contracts, and technical consulting.
                  </p>
                  <div>
                    <a
                      href={data.meta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-headline text-xs tracking-wider border border-white/20 hover:scale-105 transition-transform"
                    >
                      <GithubIcon size={16} />
                      <span>VISIT GITHUB: @PRN-6</span>
                    </a>
                  </div>
                </div>

                {/* Right Newsletter / Ping Box */}
                <div className="md:col-span-5">
                  <div className="bg-[#F8F6EF] text-[#151515] rounded-2xl p-6 shadow-2xl border border-white/30">
                    <h4 className="font-headline text-xl text-[#151515] uppercase tracking-wide mb-1">
                      GET IN TOUCH DIRECTLY
                    </h4>
                    <p className="font-text text-xs text-[#151515]/70 mb-4">
                      Drop your email and I will get back to your inbox within 24 hours.
                    </p>

                    {subscribed ? (
                      <div className="flex items-center gap-2 text-emerald-600 bg-emerald-100 p-3 rounded-xl font-text text-sm font-semibold">
                        <CheckCircle size={18} />
                        <span>Thanks! I'll connect with you soon.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleSubscribe} className="space-y-2">
                        <div className="flex items-center gap-2 bg-white rounded-xl p-1.5 border border-[#ded8c4] focus-within:border-[#7B5CFF]">
                          <input
                            type="email"
                            required
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full px-3 py-1.5 text-xs text-[#151515] bg-transparent outline-none font-text"
                          />
                          <button
                            type="submit"
                            className="bg-[#151515] hover:bg-[#7B5CFF] text-white font-headline text-xs px-4 py-2 rounded-lg tracking-wider transition-colors uppercase whitespace-nowrap"
                          >
                            CONNECT
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* --- Site Footer --- */}
            <footer className="bg-[#151515] text-white pt-12 pb-8 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden">
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <CatLogoBadge size={36} variant="badge-only" />
                    <span className="font-headline tracking-wider text-lg text-white">
                      {data.meta.studioName}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 font-text text-xs tracking-wider uppercase text-white/60">
                    <a href="#nexaflow-preview" className="hover:text-white">
                      Projects
                    </a>
                    <button onClick={() => onNavigateInnerPage?.('blog')} className="hover:text-white">
                      Articles
                    </button>
                    <button onClick={() => onNavigateInnerPage?.('faq')} className="hover:text-white">
                      FAQ
                    </button>
                    <a href="#contact-section" className="hover:text-white">
                      Contact
                    </a>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-2">
                  <span>© 2026 {data.meta.studioName} ({data.meta.brandHandle}). All rights reserved.</span>
                  <span>Crafted with clean code & quiet moments.</span>
                </div>

                {/* Giant Outlined Watermark Text */}
                <div className="mt-8 text-center pointer-events-none select-none">
                  <span className="font-headline text-6xl sm:text-8xl md:text-9xl tracking-widest text-transparent stroke-text uppercase opacity-15">
                    {data.meta.studioName}
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};
