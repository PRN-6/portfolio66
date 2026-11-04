import React, { useState, useEffect } from 'react';
import { Activity, Server, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

interface NexaFlowProps {
  className?: string;
  interactive?: boolean;
}

export const NexaFlowDashboardMockup: React.FC<NexaFlowProps> = ({
  className = '',
  interactive = true,
}) => {
  const [latency, setLatency] = useState(18);
  const [throughput, setThroughput] = useState(52.4);
  const [status, setStatus] = useState<'healthy' | 'boosted'>('healthy');

  useEffect(() => {
    if (!interactive) return;
    const interval = setInterval(() => {
      setLatency(prev => 16 + Math.floor(Math.sin(Date.now() / 1000) * 4) + Math.floor(Math.random() * 3));
      setThroughput(prev => +(52.0 + Math.sin(Date.now() / 1500) * 1.5).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, [interactive]);

  const handleBoost = () => {
    setStatus('boosted');
    setLatency(9);
    setTimeout(() => setStatus('healthy'), 3000);
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] sm:max-w-[390px] rounded-[36px] p-4 bg-[#0d0f17] shadow-2xl border-[3px] border-[#25283b] select-none text-white ${className}`}
    >
      {/* Chrome Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-headline tracking-wider text-xs text-violet-300">
            NEXAFLOW CLOUD
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/50 bg-white/5 px-2 py-0.5 rounded">
          us-east-1 · v2.4
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-2 my-3">
        <div className="bg-[#141829] p-2.5 rounded-xl border border-white/5">
          <span className="text-[10px] font-mono text-white/50 block">THROUGHPUT</span>
          <span className="font-headline text-2xl text-white tracking-wide">
            {throughput}k<span className="text-xs text-[#00D2D3]">/s</span>
          </span>
        </div>
        <div className="bg-[#141829] p-2.5 rounded-xl border border-white/5">
          <span className="text-[10px] font-mono text-white/50 block">P99 LATENCY</span>
          <span className="font-headline text-2xl text-[#7B5CFF] tracking-wide">
            {latency}<span className="text-xs text-white/70">ms</span>
          </span>
        </div>
      </div>

      {/* Real-Time Waveform Telemetry Chart */}
      <div className="bg-[#121524] p-3 rounded-2xl border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-headline tracking-wider text-white/70 flex items-center gap-1.5">
            <Activity size={13} className="text-[#00D2D3]" /> REALTIME EVENT STREAM
          </span>
          <span className="text-emerald-400 font-mono text-[10px]">99.99% UP</span>
        </div>

        {/* SVG Wave chart */}
        <div className="h-20 w-full overflow-hidden flex items-end">
          <svg viewBox="0 0 300 70" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="gradViolet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7B5CFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7B5CFF" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 45 Q 30 20, 60 38 T 120 30 T 180 15 T 240 25 T 300 18 L 300 70 L 0 70 Z"
              fill="url(#gradViolet)"
            />
            <path
              d="M0 45 Q 30 20, 60 38 T 120 30 T 180 15 T 240 25 T 300 18"
              stroke="#7B5CFF"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>

      {/* Nodes Topology */}
      <div className="mt-3 p-2.5 bg-[#141829] rounded-xl border border-white/5 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5">
          <Server size={13} className="text-violet-400" />
          <span className="font-headline text-white/80">32 DISTRIBUTED NODES</span>
        </div>
        {interactive && (
          <button
            onClick={handleBoost}
            className="bg-[#7B5CFF] hover:bg-[#6846ed] text-white px-2.5 py-1 rounded-lg font-headline text-[10px] tracking-wider transition-all"
          >
            {status === 'boosted' ? '⚡ BOOSTED' : 'BOOST CACHE'}
          </button>
        )}
      </div>
    </div>
  );
};
