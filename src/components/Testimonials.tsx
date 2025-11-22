
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "ZeroSignal stopped a state-sponsored DDoS in 4ms. We didn't even wake up. It's not just a firewall; it's an active combatant.",
      author: "ALEX R.",
      role: "CTO, FINTECH_CORP",
      id: "MSG_892"
    },
    {
      quote: "The visibility is insane. It's like having a god-mode view of our network topology. We saw the attack vector before it even executed.",
      author: "SARAH K.",
      role: "LEAD SECOPS, DATA_HAVEN",
      id: "MSG_114"
    },
    {
      quote: "Finally, security that moves faster than the attackers. The heuristic engine adapts faster than we can patch. Essential kit.",
      author: "MARCUS J.",
      role: "VP ENG, NEXUS_SYSTEMS",
      id: "MSG_337"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-16 border-t border-border-dark bg-[#030303] scroll-mt-24">
      <div className="flex items-end justify-between mb-16">
         <div className="pl-6 border-l-2 border-accent-green">
            <span className="block text-accent-green text-xs font-mono mb-2">04 // FIELD REPORTS</span>
            <h2 className="text-4xl font-display font-bold uppercase leading-tight">
              Field<br />Reports
            </h2>
         </div>
         <div className="hidden md:block text-right text-[10px] font-mono text-gray-600">
             <div>SECURE CHANNEL: OPEN</div>
             <div>ENCRYPTION: OFF</div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="relative bg-[#080808] border border-border-dark p-8 flex flex-col hover:border-gray-600 transition-colors group">
            {/* Decorative corner markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-accent-green font-mono tracking-widest">VERIFIED_USER</span>
                </div>
                <span className="text-[10px] text-gray-600 font-mono">{t.id}</span>
            </div>

            <p className="text-sm text-gray-300 leading-loose font-mono mb-8 flex-1">
              "{t.quote}"
            </p>

            <div>
                <div className="text-white font-bold font-display uppercase tracking-wider">{t.author}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
