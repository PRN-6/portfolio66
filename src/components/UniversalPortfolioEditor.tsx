import React, { useState } from 'react';
import type { PortfolioConfig } from '../portfolioData';
import { portfolioPresets, defaultPortfolioData } from '../portfolioData';
import {
  X,
  Sliders,
  Download,
  Copy,
  Check,
  RotateCcw,
  Palette,
  Sparkles,
  FileCode,
  Upload,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface UniversalPortfolioEditorProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioConfig;
  onUpdateData: (newData: PortfolioConfig) => void;
  accentColor: string;
  onUpdateAccentColor: (color: string) => void;
}

export const UniversalPortfolioEditor: React.FC<UniversalPortfolioEditorProps> = ({
  isOpen,
  onClose,
  data,
  onUpdateData,
  accentColor,
  onUpdateAccentColor,
}) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'meta' | 'colors' | 'overview' | 'export'>('presets');
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isOpen) return null;

  const colorPresets = [
    { name: 'Moon Violet', hex: '#7B5CFF' },
    { name: 'Cyber Cyan', hex: '#00C2CB' },
    { name: 'Sunset Tangerine', hex: '#FF7A00' },
    { name: 'Emerald Mint', hex: '#10B981' },
    { name: 'Rose Berry', hex: '#F43F5E' },
    { name: 'Electric Indigo', hex: '#6366F1' },
    { name: 'Solar Gold', hex: '#F59E0B' },
  ];

  const handleSelectPreset = (presetKey: string) => {
    const selected = portfolioPresets[presetKey];
    if (selected) {
      onUpdateData(selected);
      onUpdateAccentColor(selected.designSystem.colors.accent.hex);
      confetti({ particleCount: 30, spread: 50 });
    }
  };

  const handleReset = () => {
    onUpdateData(defaultPortfolioData);
    onUpdateAccentColor('#7B5CFF');
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.meta.studioName.toLowerCase().replace(/\s+/g, '-')}-portfolio.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg bg-[#181818] text-[#F8F6EF] h-full shadow-2xl flex flex-col border-l border-white/10 animate-slideLeft">
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#121212]">
          <div className="flex items-center gap-2">
            <Sliders size={18} className="text-[#7B5CFF]" />
            <h3 className="font-headline text-lg tracking-wide uppercase text-white">
              Universal Portfolio Editor
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#151515] px-3 pt-2 gap-1 overflow-x-auto text-xs font-headline tracking-wider">
          {[
            { id: 'presets', label: 'PRESETS' },
            { id: 'colors', label: 'COLORS' },
            { id: 'meta', label: 'IDENTITY' },
            { id: 'overview', label: 'OVERVIEW' },
            { id: 'export', label: 'EXPORT' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-2 rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#181818] text-[#7B5CFF] border-t-2 border-[#7B5CFF]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* ================= TAB 1: PRESETS ================= */}
          {activeTab === 'presets' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-headline text-sm text-white uppercase mb-1">
                  Ready-Made Templates
                </h4>
                <p className="font-text text-xs text-white/60">
                  Switch between example portfolio archetypes or use this codebase as your universal template:
                </p>
              </div>

              <div className="space-y-3">
                <div
                  onClick={() => handleSelectPreset('gikaGames')}
                  className="p-4 rounded-xl bg-[#202020] border border-white/10 hover:border-[#7B5CFF] cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline text-base text-[#7B5CFF] uppercase">
                      1. Gika Games (Exact Reference)
                    </span>
                    <span className="text-[10px] bg-[#7B5CFF]/20 text-[#7B5CFF] px-2 py-0.5 rounded font-bold">
                      Original
                    </span>
                  </div>
                  <p className="font-text text-xs text-white/70">
                    The exact 1:1 brand identity & games studio portfolio from your reference slides with two cat mascots and violet accents.
                  </p>
                </div>

                <div
                  onClick={() => handleSelectPreset('luminaStudio')}
                  className="p-4 rounded-xl bg-[#202020] border border-white/10 hover:border-[#00C2CB] cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline text-base text-[#00C2CB] uppercase">
                      2. Lumina UI Studio
                    </span>
                    <span className="text-[10px] bg-[#00C2CB]/20 text-[#00C2CB] px-2 py-0.5 rounded font-bold">
                      Design System
                    </span>
                  </div>
                  <p className="font-text text-xs text-white/70">
                    Calm, high-contrast product design portfolio with Cyan Flare accent for SaaS & UI engineers.
                  </p>
                </div>

                <div
                  onClick={() => handleSelectPreset('pixelcraft')}
                  className="p-4 rounded-xl bg-[#202020] border border-white/10 hover:border-[#FF7A00] cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline text-base text-[#FF7A00] uppercase">
                      3. PixelCraft Collective
                    </span>
                    <span className="text-[10px] bg-[#FF7A00]/20 text-[#FF7A00] px-2 py-0.5 rounded font-bold">
                      Retro Arcade
                    </span>
                  </div>
                  <p className="font-text text-xs text-white/70">
                    16-bit retro game studio aesthetic with deep space CRT palette and Sunset Amber highlights.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 transition-colors"
                >
                  <RotateCcw size={14} /> Reset All to Reference Defaults
                </button>
              </div>
            </div>
          )}

          {/* ================= TAB 2: COLORS ================= */}
          {activeTab === 'colors' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-headline text-sm text-white uppercase mb-1">
                  Accent Color Theme
                </h4>
                <p className="font-text text-xs text-white/60">
                  Instantly re-skins headlines, buttons, and highlights across the entire site in real-time.
                </p>
              </div>

              {/* Color Swatch Presets */}
              <div className="grid grid-cols-2 gap-2.5">
                {colorPresets.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => {
                      onUpdateAccentColor(c.hex);
                      onUpdateData({
                        ...data,
                        designSystem: {
                          ...data.designSystem,
                          colors: {
                            ...data.designSystem.colors,
                            accent: {
                              ...data.designSystem.colors.accent,
                              hex: c.hex,
                              name: c.name.toUpperCase(),
                            },
                          },
                        },
                      });
                    }}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all text-left ${
                      accentColor.toLowerCase() === c.hex.toLowerCase()
                        ? 'border-white bg-[#252525]'
                        : 'border-white/10 bg-[#1e1e1e] hover:border-white/30'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full shadow-inner flex-shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div>
                      <span className="block font-headline text-xs text-white uppercase">
                        {c.name}
                      </span>
                      <span className="block font-mono text-[10px] text-white/50">
                        {c.hex}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Hex Picker */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <label className="block font-headline text-xs text-white uppercase">
                  Custom Hex Code
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => onUpdateAccentColor(e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border border-white/20 p-1"
                  />
                  <input
                    type="text"
                    value={accentColor}
                    onChange={(e) => onUpdateAccentColor(e.target.value)}
                    className="flex-1 bg-[#202020] text-xs font-mono uppercase text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 3: IDENTITY ================= */}
          {activeTab === 'meta' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-headline text-sm text-white uppercase mb-1">
                  Brand & Project Identity
                </h4>
                <p className="font-text text-xs text-white/60">
                  Update creator names, titles, and tags:
                </p>
              </div>

              <div className="space-y-3 font-text text-xs">
                <div>
                  <label className="block text-white/60 mb-1">Studio / Brand Name</label>
                  <input
                    type="text"
                    value={data.meta.studioName}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        meta: { ...data.meta, studioName: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1">Discipline & Category</label>
                  <input
                    type="text"
                    value={data.meta.discipline}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        meta: { ...data.meta, discipline: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1">Hero Tagline</label>
                  <input
                    type="text"
                    value={data.meta.tagline}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        meta: { ...data.meta, tagline: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={data.meta.contactEmail}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        meta: { ...data.meta, contactEmail: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1">Live Display Domain</label>
                  <input
                    type="text"
                    value={data.overview.liveDisplay}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        overview: { ...data.overview, liveDisplay: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: OVERVIEW ================= */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-headline text-sm text-white uppercase mb-1">
                  Studio Overview & Metadata
                </h4>
                <p className="font-text text-xs text-white/60">
                  Custom copy for Slide 2 (The Studio):
                </p>
              </div>

              <div className="space-y-3 font-text text-xs">
                <div>
                  <label className="block text-white/60 mb-1">Headline</label>
                  <input
                    type="text"
                    value={data.overview.headline}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        overview: { ...data.overview, headline: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1">Role Description</label>
                  <input
                    type="text"
                    value={data.overview.role}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        overview: { ...data.overview, role: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1">Tools</label>
                  <input
                    type="text"
                    value={data.overview.tools}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        overview: { ...data.overview, tools: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 mb-1">Deliverables</label>
                  <textarea
                    rows={2}
                    value={data.overview.deliverables}
                    onChange={(e) =>
                      onUpdateData({
                        ...data,
                        overview: { ...data.overview, deliverables: e.target.value },
                      })
                    }
                    className="w-full bg-[#202020] text-white px-3 py-2 rounded-lg border border-white/10 outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 5: EXPORT / IMPORT ================= */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-headline text-sm text-white uppercase mb-1">
                  Universal JSON Configuration
                </h4>
                <p className="font-text text-xs text-white/60">
                  Export your modified portfolio configuration to reuse in any project or share with others:
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleDownloadJSON}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-[#7B5CFF] hover:bg-[#6c4bec] text-white text-xs font-headline tracking-wider py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <Download size={15} /> DOWNLOAD CONFIG.JSON
                </button>
                <button
                  onClick={handleCopyJSON}
                  className="flex items-center justify-center gap-1.5 bg-[#252525] hover:bg-[#333] text-white text-xs font-headline tracking-wider px-4 py-2.5 rounded-xl border border-white/10 transition-colors"
                >
                  {copiedJson ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  <span>{copiedJson ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Code Preview */}
              <div className="bg-[#121212] p-3 rounded-xl border border-white/10 max-h-60 overflow-y-auto">
                <pre className="font-mono text-[10px] text-white/70 leading-relaxed whitespace-pre-wrap">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/10 bg-[#121212] flex items-center justify-between text-xs text-white/50">
          <span>Changes take effect immediately live.</span>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg font-headline tracking-wider"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};
