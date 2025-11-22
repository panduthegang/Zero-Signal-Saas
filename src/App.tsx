
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import IntelSection from './components/IntelSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export type BreachStatus = 'IDLE' | 'BREACH' | 'RESTORING' | 'SECURED';

const App: React.FC = () => {
  const [breachStatus, setBreachStatus] = useState<BreachStatus>('IDLE');

  const triggerSimulation = () => {
    if (breachStatus !== 'IDLE') return;

    // 1. Trigger Breach
    setBreachStatus('BREACH');

    // 2. Restore System (after 2.5s)
    setTimeout(() => {
      setBreachStatus('RESTORING');
    }, 2500);

    // 3. Secure System (after another 1.5s)
    setTimeout(() => {
      setBreachStatus('SECURED');
    }, 4000);

    // 4. Reset to Idle (after another 3s)
    setTimeout(() => {
      setBreachStatus('IDLE');
    }, 7000);
  };

  return (
    <div className={`relative min-h-screen font-mono text-white selection:bg-accent-green selection:text-black bg-bg overflow-hidden transition-all duration-100 
      ${breachStatus === 'BREACH' ? 'animate-shake glitch-active' : ''}`}>
      
      {/* Visual Effects Overlay */}
      {/* Red Flash during breach */}
      <div className={`fixed inset-0 z-50 pointer-events-none bg-red-600 mix-blend-overlay transition-opacity duration-100 
         ${breachStatus === 'BREACH' ? 'opacity-40' : 'opacity-0'}`} />
      
      {/* Warning Text Overlay */}
      {breachStatus === 'BREACH' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
           <div className="bg-black/80 p-8 border-2 border-red-500 text-red-500 font-display font-bold text-4xl md:text-6xl tracking-tighter animate-pulse text-center">
              ⚠️ CRITICAL FAILURE<br/>SYSTEM COMPROMISED
           </div>
        </div>
      )}

      {/* Restoration Scanline (Green Wipe) */}
      <div className={`fixed inset-0 z-[70] pointer-events-none bg-accent-green/20 transition-transform duration-[1500ms] ease-out
         ${breachStatus === 'RESTORING' ? 'translate-y-0' : '-translate-y-full'}`}
      >
         <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-accent-green to-transparent shadow-[0_0_50px_#4ade80]"></div>
      </div>

      {/* Secured Success Message */}
      <div className={`fixed top-10 left-0 right-0 z-[80] flex justify-center pointer-events-none transition-all duration-500
         ${breachStatus === 'SECURED' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
         <div className="bg-black border border-accent-green shadow-[0_0_30px_rgba(74,222,128,0.3)] px-12 py-4 flex items-center gap-4">
             <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
             <div className="text-accent-green font-bold font-display tracking-widest text-lg">
                THREAT NEUTRALIZED
             </div>
         </div>
      </div>


      {/* Fixed Background Grid - Adjusted for better visibility */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)'
        }}
      />

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero onTestDefense={triggerSimulation} breachStatus={breachStatus} />
          <Marquee />
          <Features />
          <WhyChooseUs />
          <IntelSection />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
