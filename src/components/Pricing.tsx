
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="access" className="py-24 px-6 md:px-16 border-t border-border-dark scroll-mt-24">
      <div className="mb-16 pl-6 border-l-2 border-accent-green">
        <span className="block text-accent-green text-xs font-mono mb-2">05 // ACCESS PROTOCOLS</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
          Select Clearance<br />Level
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <div className="border border-border-dark p-8 flex flex-col items-start hover:border-gray-500 transition-colors duration-300">
          <span className="text-xs text-accent-green border border-accent-green px-2 py-1 mb-6">OBSERVER</span>
          <div className="text-5xl font-display font-bold mb-8">$0<span className="text-base font-mono font-normal text-gray-500">/mo</span></div>
          <div className="flex-1 w-full space-y-4 mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-400">Basic Monitoring</div>
            <div className="flex items-center gap-3 text-sm text-gray-400">Threat Alerts (Email)</div>
            <div className="flex items-center gap-3 text-sm text-gray-800 line-through">Auto-Mitigation</div>
            <div className="flex items-center gap-3 text-sm text-gray-800 line-through">API Access</div>
          </div>
          <button className="w-full py-4 text-xs font-bold uppercase border border-gray-800 hover:border-white hover:text-white text-gray-400 transition-all">
            Initialize
          </button>
        </div>

        {/* Plan 2 - Highlighted */}
        <div className="relative border border-accent-green bg-accent-green/5 p-8 flex flex-col items-start transform md:-translate-y-4 shadow-[0_0_20px_rgba(74,222,128,0.05)]">
          <div className="absolute top-0 right-0 bg-accent-green text-black text-[10px] font-bold px-2 py-1">RECOMMENDED</div>
          <span className="text-xs text-accent-green border border-accent-green px-2 py-1 mb-6">OPERATOR</span>
          <div className="text-5xl font-display font-bold mb-8">$49<span className="text-base font-mono font-normal text-gray-500">/mo</span></div>
          <div className="flex-1 w-full space-y-4 mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-300">Real-time Monitoring</div>
            <div className="flex items-center gap-3 text-sm text-gray-300">Auto-Mitigation</div>
            <div className="flex items-center gap-3 text-sm text-gray-300">24/7 Support Uplink</div>
            <div className="flex items-center gap-3 text-sm text-gray-800 line-through">Source Code Access</div>
          </div>
          <button className="w-full py-4 text-xs font-bold uppercase bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all">
            Upgrade
          </button>
        </div>

        {/* Plan 3 */}
        <div className="border border-border-dark p-8 flex flex-col items-start hover:border-gray-500 transition-colors duration-300">
          <span className="text-xs text-accent-green border border-accent-green px-2 py-1 mb-6">ARCHITECT</span>
          <div className="text-5xl font-display font-bold mb-8">$299<span className="text-base font-mono font-normal text-gray-500">/mo</span></div>
          <div className="flex-1 w-full space-y-4 mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-400">Full Infrastructure Map</div>
            <div className="flex items-center gap-3 text-sm text-gray-400">Dedicated Neural Core</div>
            <div className="flex items-center gap-3 text-sm text-gray-400">Custom Heuristics</div>
            <div className="flex items-center gap-3 text-sm text-gray-400">API Access</div>
          </div>
          <button className="w-full py-4 text-xs font-bold uppercase border border-gray-800 hover:border-white hover:text-white text-gray-400 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
