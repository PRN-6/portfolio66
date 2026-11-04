import React, { useState } from 'react';
import type { PortfolioConfig } from '../../portfolioData';
import { GithubIcon } from '../illustrations/GithubIcon';
import { Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactPageProps {
  data: PortfolioConfig;
}

export const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Project Inquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setSent(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#7B5CFF', '#00D2D3', '#FF6B6B'],
    });

    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', topic: 'Project Inquiry', message: '' });
    }, 4500);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#151515] text-white py-6 sm:py-8 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#7B5CFF] block mb-1">
            LET'S COLLABORATE
          </span>
          <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-white uppercase tracking-tight break-words">
            SAY HELLO.
          </h2>
        </motion.div>

        {/* Form and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-2">
          {/* Left Column: Direct info & links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="font-text text-base sm:text-lg text-white/80 leading-relaxed">
              Available for Senior Full-Stack Engineering roles, design system consulting, and high-impact web projects. Have an idea or question? Reach out below.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${data.meta.contactEmail}`}
                  className="font-headline text-xl sm:text-2xl text-white hover:text-[#7B5CFF] transition-colors inline-flex items-center gap-2 group break-all cursor-pointer"
                >
                  <span>{data.meta.contactEmail}</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                  CHANNELS & NETWORKS
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-headline tracking-wider uppercase">
                  <a
                    href={data.meta.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#7B5CFF] hover:text-[#7B5CFF] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub: @yourusername</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#7B5CFF] hover:text-[#7B5CFF] transition-colors cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="p-4 bg-[#1c1c1c] rounded-2xl border border-white/10 text-xs text-white/70 space-y-1">
                <span className="font-headline text-white uppercase block">
                  ⚡ Fast Response Time
                </span>
                <p>
                  I read every message and respond directly to your inbox with thoughtful answers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-[#1c1c1c] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 text-center space-y-3"
                >
                  <CheckCircle size={48} className="text-[#00D2D3] mx-auto animate-bounce" />
                  <h3 className="font-headline text-3xl text-white uppercase tracking-wide">
                    MESSAGE DELIVERED!
                  </h3>
                  <p className="font-text text-sm text-white/70 max-w-sm mx-auto">
                    Thank you for reaching out. {data.meta.studioName} will get back to your inbox promptly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-headline text-xs text-white/70 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full bg-[#151515] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none cursor-pointer"
                    >
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
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
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className="w-full bg-[#151515] text-sm text-white px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#7B5CFF] outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#7B5CFF] hover:bg-[#6c4bec] text-white font-headline text-sm py-3.5 rounded-xl tracking-wider uppercase transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>SEND MESSAGE</span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40"
        >
          <span>{data.meta.studioName} · Full-Stack Developer & UI Architect</span>
          <span>{data.overview.liveDisplay}</span>
        </motion.div>
      </div>
    </section>
  );
};
