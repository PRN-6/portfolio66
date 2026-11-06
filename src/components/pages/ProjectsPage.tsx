import React from 'react';
import type { PortfolioConfig, PortfolioProject } from '../../portfolioData';
import { NexaFlowDashboardMockup } from '../illustrations/NexaFlowDashboardMockup';
import { AuraUIDesignMockup } from '../illustrations/AuraUIDesignMockup';
import { GithubIcon } from '../illustrations/GithubIcon';
import { ArrowRight, Code2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsPageProps {
  data: PortfolioConfig;
  onNavigate?: (page: 'contact') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ data, onNavigate }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#7B5CFF] text-white py-6 sm:py-8 px-4 sm:px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
        >
          <div>
            <span className="font-text font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-white/80 block mb-1">
              ENGINEERING PORTFOLIO
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-white uppercase tracking-tight break-words">
              FEATURED WORKS.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-black/20 border border-white/20 px-3.5 py-1.5 rounded-full font-headline tracking-wider">
              {data.meta.studioName} · {data.meta.year || '2026'}
            </span>
          </div>
        </motion.div>

        {/* Dynamic Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-auto py-2">
          {data.projects.map((project: PortfolioProject, idx: number) => {
            const isCream = project.bgType === 'cream';
            const cardBg = isCream
              ? 'bg-[#F8F6EF] text-[#151515] border-[#ded8c4]'
              : 'bg-[#151515] text-white border-white/20';

            return (
              <motion.div
                key={project.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                whileHover={{ y: -6 }}
                className={`${cardBg} rounded-3xl p-6 sm:p-8 border shadow-2xl flex flex-col justify-between transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase ${
                        isCream
                          ? 'text-[#7B5CFF] bg-[#7B5CFF]/15'
                          : 'text-[#7B5CFF] bg-[#7B5CFF]/20'
                      }`}
                    >
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span
                        className={`text-xs font-mono ${
                          isCream ? 'text-[#7B5CFF] font-bold' : 'text-emerald-400'
                        }`}
                      >
                        ● {project.metrics}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-headline text-3xl sm:text-4xl uppercase ${
                      isCream ? 'text-[#151515]' : 'text-white'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`font-text text-sm leading-relaxed ${
                      isCream ? 'text-[#151515]/80' : 'text-white/80'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Visual: Uploaded Image OR Vector Mockup */}
                  <div className="py-2">
                    {project.imageUrl ? (
                      <div className="w-full h-48 sm:h-60 rounded-2xl overflow-hidden border border-black/10 shadow-lg bg-black/5">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : project.id === 'nexaflow' ? (
                      <NexaFlowDashboardMockup interactive={true} />
                    ) : project.id === 'aura-ui' ? (
                      <AuraUIDesignMockup />
                    ) : (
                      <div className="p-4 rounded-2xl bg-black/10 border border-current/10 space-y-2">
                        {project.features && project.features.length > 0 && (
                          <ul className="text-xs space-y-1 list-disc list-inside opacity-80">
                            {project.features.map((f, fIdx) => (
                              <li key={fIdx}>{f}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex items-center justify-between ${
                    isCream ? 'border-[#ded8c4]' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {(project.githubUrl || data.meta.githubUrl) && (
                      <a
                        href={project.githubUrl || data.meta.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline text-xs tracking-wider transition-all cursor-pointer ${
                          isCream
                            ? 'bg-[#151515] hover:bg-black text-white'
                            : 'bg-[#7B5CFF] hover:bg-[#6846ed] text-white'
                        }`}
                      >
                        <GithubIcon size={14} />
                        <span>CODE</span>
                        <ArrowRight size={13} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full font-headline text-xs tracking-wider transition-all cursor-pointer ${
                          isCream
                            ? 'bg-[#7B5CFF] text-white hover:bg-[#6846ed]'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        <ExternalLink size={13} />
                        <span>LIVE</span>
                      </a>
                    )}
                  </div>
                  <span
                    className={`text-xs font-mono ${
                      isCream ? 'text-[#151515]/50' : 'text-white/40'
                    }`}
                  >
                    {project.status || 'Active'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80"
        >
          <span>All repositories open source and tested for high-volume production.</span>
          <button
            onClick={() => onNavigate?.('contact')}
            className="underline hover:text-white font-headline tracking-wider uppercase cursor-pointer"
          >
            Need a custom web application? Let's talk →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
