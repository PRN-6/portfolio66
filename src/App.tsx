import React, { useState, useEffect } from 'react';
import { portfolio66Data } from './portfolioData';
import type { PortfolioConfig } from './portfolioData';
import { TopNavbar } from './components/TopNavbar';
import { HeroSection } from './components/HeroSection';
import { StudioOverviewSection } from './components/StudioOverviewSection';
import { LogoSystemSection } from './components/LogoSystemSection';
import { ColorTypeSystemSection } from './components/ColorTypeSystemSection';
import { FullStudioWebsiteMockup } from './components/FullStudioWebsiteMockup';
import { InnerPagesSection } from './components/InnerPagesSection';
import { MobileShowcaseSection } from './components/MobileShowcaseSection';
import { SocialSection } from './components/SocialSection';
import { PageModal } from './components/PageModal';
import { CatLogoBadge } from './components/illustrations/CatLogoBadge';
import { ArrowUp, Mail, CheckCircle, Send, Heart, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  const [data] = useState<PortfolioConfig>(portfolio66Data);
  const [activePageModal, setActivePageModal] = useState<'games' | 'blog' | 'faq' | 'contact' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

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
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#7B5CFF', '#00D2D3', '#F8F6EF'],
    });

    setTimeout(() => {
      setContactSent(false);
      setContactForm({ name: '', email: '', topic: 'Project Inquiry', message: '' });
    }, 4500);
  };

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#151515] text-[#F8F6EF] font-text relative selection:bg-[#7B5CFF] selection:text-white">
      {/* Top Sticky Navigation */}
      <TopNavbar
        studioName={data.meta.studioName}
        onOpenContact={() => setActivePageModal('contact')}
      />

      {/* Main Portfolio Sections */}
      <main>
        {/* Slide 1: Hero Banner */}
        <HeroSection data={data} />

        {/* Slide 2: The Studio & Overview */}
        <StudioOverviewSection data={data} />

        {/* Slide 3: Logo & Brand System */}
        <LogoSystemSection data={data} />

        {/* Slide 4: Color & Typography System */}
        <ColorTypeSystemSection data={data} />

        {/* Slide 5: Full Studio Website Mockup ("One Scroll, The Whole Studio") */}
        <FullStudioWebsiteMockup
          data={data}
          onNavigateInnerPage={(page) => setActivePageModal(page)}
        />

        {/* Slide 6: Inner Pages (Games, Blog, FAQ, Contact) */}
        <InnerPagesSection
          data={data}
          onOpenPageModal={(id) => setActivePageModal(id)}
        />

        {/* Slide 7: Mobile (Made for One Hand) */}
        <MobileShowcaseSection data={data} />

        {/* Slide 8: Social & Sharing (Every Link Looks Like Us) */}
        <SocialSection data={data} />

        {/* Dedicated Contact / Say Hello Section */}
        <section
          id="contact-section"
          className="relative w-full bg-[#151515] text-white py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Direct info & links */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7B5CFF] block mb-2">
                    GET IN TOUCH
                  </span>
                  <h2 className="font-headline text-5xl sm:text-6xl text-white uppercase tracking-tight leading-none">
                    SAY HELLO.
                  </h2>
                </div>

                <p className="font-text text-base sm:text-lg text-white/80 leading-relaxed">
                  Have a project in mind, want to collaborate on a calm puzzle game, or just want to say hi to the cats? Drop a note below.
                </p>

                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-1">
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${data.meta.contactEmail}`}
                      className="font-headline text-xl sm:text-2xl text-white hover:text-[#7B5CFF] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>{data.meta.contactEmail}</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                      FIND US ONLINE
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-headline tracking-wider uppercase">
                      {data.socials.map((s) => (
                        <a
                          key={s.platform}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#7B5CFF] hover:text-[#7B5CFF] transition-colors"
                        >
                          {s.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 bg-[#1c1c1c] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
                {contactSent ? (
                  <div className="py-12 text-center space-y-3">
                    <CheckCircle size={48} className="text-[#00D2D3] mx-auto animate-bounce" />
                    <h3 className="font-headline text-3xl text-white uppercase tracking-wide">
                      MESSAGE RECEIVED!
                    </h3>
                    <p className="font-text text-sm text-white/70 max-w-sm mx-auto">
                      Thank you for reaching out to Portfolio66. We'll read your note and get back to you promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          placeholder="Alex Morgan"
                          className="w-full bg-[#151515] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          placeholder="alex@domain.com"
                          className="w-full bg-[#151515] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                        Topic
                      </label>
                      <select
                        value={contactForm.topic}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, topic: e.target.value })
                        }
                        className="w-full bg-[#151515] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none cursor-pointer"
                      >
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Game Feedback">Game Feedback</option>
                        <option value="Press / Media">Press / Media</option>
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
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, message: e.target.value })
                        }
                        placeholder="Tell us about your project or idea..."
                        className="w-full bg-[#151515] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#7B5CFF] hover:bg-[#6c4bec] text-white font-headline text-sm py-3.5 rounded-xl tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>SEND MESSAGE</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Clean Portfolio66 Footer */}
      <footer className="bg-[#0e0e0e] text-white py-16 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <CatLogoBadge size={44} variant="badge-only" />
              <div>
                <h4 className="font-headline text-2xl text-white tracking-wider">
                  {data.meta.studioName}
                </h4>
                <p className="font-text text-xs text-white/60">
                  {data.meta.tagline}
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6 font-headline text-xs tracking-widest uppercase text-white/60">
              <a href="#studio" className="hover:text-white transition-colors">THE STUDIO</a>
              <a href="#logo" className="hover:text-white transition-colors">IDENTITY</a>
              <a href="#design-system" className="hover:text-white transition-colors">SYSTEM</a>
              <a href="#works" className="hover:text-white transition-colors">WORKS</a>
              <a href="#mobile" className="hover:text-white transition-colors">MOBILE</a>
              <a href="#contact-section" className="hover:text-white transition-colors">CONTACT</a>
            </nav>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-3">
            <span>© 2026 {data.meta.studioName}. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Crafted with calm and precision for quiet moments <Heart size={12} className="text-[#FF6B6B]" />
            </span>
          </div>

          {/* Giant Outlined Watermark Text */}
          <div className="mt-12 text-center pointer-events-none select-none">
            <span className="font-headline text-7xl sm:text-9xl md:text-[11rem] tracking-widest text-transparent stroke-text uppercase opacity-10">
              {data.meta.studioName}
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="fixed bottom-6 right-6 z-40 bg-[#222]/90 hover:bg-[#7B5CFF] text-white p-3.5 rounded-full shadow-2xl border border-white/15 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Dedicated Inner Page Lightbox Modal (for exploring full content when clicked) */}
      <PageModal
        pageId={activePageModal}
        onClose={() => setActivePageModal(null)}
        data={data}
      />
    </div>
  );
}
export default App;
