
import React from 'react';
import Terminal from './Terminal';
import type { BreachStatus } from '../App';

interface HeroProps {
  onTestDefense: () => void;
  breachStatus: BreachStatus;
}

const Hero: React.FC<HeroProps> = ({ onTestDefense, breachStatus }) => {
  return (
    <header className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 py-16 md:px-16 gap-12 pt-32">
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 z-10">
        <div className="flex items-center gap-3 mb-8 text-xs tracking-[0.2em] text-text-muted">
          <div className={`w-2 h-2 rounded-full shadow-[0_0_10px] animate-pulse-slow ${breachStatus === 'BREACH' ? 'bg-red-500 shadow-red-500' : 'bg-accent-green shadow-[#4ade80]'}`} />
          SYSTEM STATUS: {breachStatus === 'BREACH' ? 'CRITICAL FAILURE' : breachStatus === 'RESTORING' ? 'MITIGATING' : 'OPERATIONAL'}
        </div>

        <h1 className="mb-8 text-5xl md:text-7xl font-display font-bold leading-[0.9] uppercase">
          Defense<br />
          <span className="text-gray-800">Protocol</span><br />
          Activated
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
          <p className="max-w-md text-sm text-text-muted leading-relaxed">
            ZeroSignal deploys autonomous AI agents to intercept cyber threats before execution. Next-gen heuristics powered by Gemini Flash 2.5 architecture.
          </p>
          <div className="text-xs text-text-muted">
            LATENCY
            <span className="block mt-1 text-2xl text-white font-display">~14ms</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={onTestDefense}
            disabled={breachStatus !== 'IDLE'}
            className={`px-8 py-4 text-xs font-bold tracking-widest uppercase border transition-all duration-300 relative overflow-hidden group
                ${breachStatus === 'IDLE' ? 'bg-white text-black border-white hover:bg-transparent hover:text-white cursor-pointer' : 'bg-gray-900 text-gray-500 border-gray-800 cursor-not-allowed opacity-50'}
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              {breachStatus === 'IDLE' ? 'Test Defenses' : 'Simulation Active'}
              {breachStatus === 'IDLE' && (
                 <svg className="w-3 h-3 text-accent-red group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45zM11 16h2v2h-2v-2zm0-8h2v6h-2V8z"/></svg>
              )}
            </span>
          </button>
          <button className="px-8 py-4 text-xs font-bold tracking-widest text-white uppercase border border-gray-800 hover:border-white transition-all duration-300">
            Read The Docs
          </button>
        </div>
      </div>

      {/* Terminal Visual */}
      <div className="w-full lg:w-[45%] relative">
         <Terminal status={breachStatus} />
      </div>
    </header>
  );
};

export default Hero;
