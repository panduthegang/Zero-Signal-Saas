
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 px-6 md:px-16 border-t border-border-dark bg-bg relative overflow-hidden scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:20px_20px] mask-image-linear-gradient(to left, black, transparent)"></div>

      <div className="flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="lg:w-1/3">
          <div className="mb-8 pl-6 border-l-2 border-accent-green">
            <span className="block text-accent-green text-xs font-mono mb-2">02 // THE UNFAIR ADVANTAGE</span>
            <h2 className="text-4xl font-display font-bold uppercase leading-tight">
              The Unfair<br />Advantage
            </h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Traditional firewalls react. ZeroSignal predicts. By utilizing a decentralized neural mesh, we identify threats based on intent, not just signatures.
          </p>
          <button className="text-xs font-bold border-b border-accent-green pb-1 hover:text-accent-green transition-colors">
            VIEW ARCHITECTURE DIAGRAM &rarr;
          </button>
        </div>

        {/* Right Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-border-dark border border-border-dark">
          {[
            {
              title: "Autonomous Response",
              desc: "Level 1-3 threats are neutralized automatically within 14ms without human intervention.",
              icon: (
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "Quantum Hardening",
              desc: "Post-quantum cryptography standards (NIST compliant) applied to all egress traffic.",
              icon: (
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Global Neural Net",
              desc: "Threat intelligence is shared instantly across the mesh. If one node sees it, everyone is immune.",
              icon: (
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              )
            },
            {
              title: "Zero Latency Overhead",
              desc: "Our edge-compute modules process packets in parallel, adding <1ms to your RTT.",
              icon: (
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-bg-card p-8 group hover:bg-[#0f0f0f] transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl font-display font-bold group-hover:opacity-20 transition-opacity">
                0{idx + 1}
              </div>
              <div className="mb-6 p-3 border border-white/10 inline-block rounded-sm bg-black group-hover:border-accent-green/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-display uppercase mb-3">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
