import React from 'react';

const Marquee: React.FC = () => {
  const content = "AI DRIVEN DEFENSE /// ZERO LATENCY /// QUANTUM SAFE /// SECURE THE SIGNAL /// ";
  
  return (
    <div className="w-full overflow-hidden bg-black border-y border-border-dark py-4">
      <div className="whitespace-nowrap animate-marquee flex w-[200%]">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex shrink-0">
             {content.repeat(2).split('///').map((text, idx) => (
               text.trim() ? (
                 <span key={idx} className="mx-8 text-xs font-bold tracking-[0.25em] text-white uppercase">
                   {text} <span className="text-gray-700 ml-4">///</span>
                 </span>
               ) : null
             ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;