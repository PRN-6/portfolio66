import React, { useState } from 'react';
import type { PortfolioConfig } from '../portfolioData';
import { CatLogoBadge } from './illustrations/CatLogoBadge';
import { NexaFlowDashboardMockup } from './illustrations/NexaFlowDashboardMockup';
import { AuraUIDesignMockup } from './illustrations/AuraUIDesignMockup';
import {
  X,
  Plus,
  Minus,
  CheckCircle,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { GithubIcon } from './illustrations/GithubIcon';
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
    topic: 'Project Inquiry',
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
      setFormState({ name: '', email: '', topic: 'Project Inquiry', message: '' });
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
              {data.meta.studioName} • {pageId === 'games' ? 'PROJECTS' : pageId}
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
          {/* ================= PAGE 1: PROJECTS ================= */}
          {pageId === 'games' && (
            <div>
              {/* Header Banner */}
              <div className="bg-[#151515] p-6 sm:p-10 border-b border-white/10">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
                  SELECTED WORKS
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  PROJECTS
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg">
                  Full-stack cloud applications, accessible design systems, and responsive modern web architecture.
                </p>
              </div>

              {/* Projects Showcase List */}
              <div className="bg-[#F8F6EF] text-[#151515] p-6 sm:p-10 space-y-12">
                {/* Project 1: NexaFlow */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#ded8c4] shadow-sm">
                  <div className="md:col-span-6 space-y-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-3 py-1 rounded-full uppercase">
                      CLOUD & TELEMETRY • PRODUCTION
                    </span>
                    <h4 className="font-headline text-4xl text-[#151515] uppercase">
                      NEXAFLOW CLOUD
                    </h4>
                    <p className="font-text text-sm text-[#151515]/80 leading-relaxed">
                      A high-throughput cloud observability platform streaming live server metrics, distributed traces, and canvas-based node topologies with sub-50ms latency.
                    </p>
                    <ul className="text-xs font-text text-[#151515]/80 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Real-time WebSocket telemetry with backpressure
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Interactive SVG topology node graph visualizer
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> 50,000+ operations/second throughput
                      </li>
                    </ul>
                    <div className="pt-2">
                      <a
                        href={data.meta.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-headline text-xs tracking-wider hover:bg-[#7B5CFF] transition-colors"
                      >
                        <GithubIcon size={15} />
                        <span>VIEW ON GITHUB</span>
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-6 flex justify-center">
                    <NexaFlowDashboardMockup interactive={true} />
                  </div>
                </div>

                {/* Project 2: Aura UI */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#ded8c4] shadow-sm">
                  <div className="md:col-span-6 space-y-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#7B5CFF] bg-[#7B5CFF]/15 px-3 py-1 rounded-full uppercase">
                      DESIGN SYSTEM • OPEN SOURCE
                    </span>
                    <h4 className="font-headline text-4xl text-[#151515] uppercase">
                      AURA DESIGN TOKENS
                    </h4>
                    <p className="font-text text-sm text-[#151515]/80 leading-relaxed">
                      An ergonomic component suite featuring 40+ WCAG AAA compliant primitives, fluid typographic scaling, and zero-runtime CSS variable design tokens.
                    </p>
                    <ul className="text-xs font-text text-[#151515]/80 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> 40+ WCAG AAA accessible components
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Single-source token synchronization for Figma & Tailwind
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" /> Under 12kB gzipped core bundle
                      </li>
                    </ul>
                    <div className="pt-2">
                      <a
                        href={data.meta.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-headline text-xs tracking-wider hover:bg-[#7B5CFF] transition-colors"
                      >
                        <Code2 size={15} />
                        <span>COMPONENT REPO</span>
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-6 flex justify-center">
                    <AuraUIDesignMockup />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= PAGE 2: BLOG (ARTICLES) ================= */}
          {pageId === 'blog' && (
            <div>
              {/* Header Banner */}
              <div className="bg-[#151515] p-6 sm:p-10 border-b border-white/10">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B5CFF] block mb-2">
                  ENGINEERING LOGS
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  ARTICLES
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg mb-6">
                  Architecture deep-dives, design systems, and calm software engineering.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {['ALL', 'DEVLOG', 'UI/UX', 'ESSAYS', 'TUTORIALS'].map(
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
                      <span className="text-black/40">Prinson Nazareth</span>
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
                  COLLABORATION & PROCESS
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  FAQ
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg">
                  Answers to common questions regarding technical roles, contracts, timezones, and code quality.
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
                  DIRECT REACH
                </span>
                <h3 className="font-headline text-5xl sm:text-6xl text-[#7B5CFF] uppercase">
                  SAY HELLO
                </h3>
                <p className="font-text text-base text-white/80 mt-2 max-w-lg">
                  Available for Senior Full-Stack Engineering roles, design system architecture, and technical consulting.
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
                        className="font-headline text-xl sm:text-2xl text-[#151515] hover:text-[#7B5CFF] transition-colors block break-all"
                      >
                        {data.meta.contactEmail}
                      </a>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#7B5CFF] block mb-2">
                        CHANNELS
                      </span>
                      <div className="space-y-1 font-headline text-base text-[#151515]">
                        <a href={data.meta.githubUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-[#7B5CFF]">
                          GitHub: @PRN-6
                        </a>
                        <a href="https://linkedin.com/in/prinson-nazareth" target="_blank" rel="noopener noreferrer" className="block hover:text-[#7B5CFF]">
                          LinkedIn: /in/prinson-nazareth
                        </a>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-[#ded8c4] space-y-1">
                      <span className="font-headline text-xs text-[#151515] uppercase block">
                        ⚡ Fast Response Guarantee
                      </span>
                      <p className="font-text text-xs text-[#151515]/70">
                        I respond to all genuine project inquiries and technical opportunities within 24 hours.
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
                          Thank you for reaching out. I will reply to your message promptly.
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
                            <option value="Project Inquiry">Project Inquiry</option>
                            <option value="Full-Time Role">Full-Time Engineering Role</option>
                            <option value="Design System Consulting">Design System Consulting</option>
                            <option value="General Hello">General Hello</option>
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
                            placeholder="Tell me about your project or role..."
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
