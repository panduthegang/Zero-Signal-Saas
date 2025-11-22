import { useState } from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Intelligence from './components/Intelligence';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export type BreachStatus = 'IDLE' | 'BREACH' | 'RESTORING' | 'SECURED';

function App() {
  const [breachStatus, setBreachStatus] = useState<BreachStatus>('IDLE');

  const handleTestDefense = () => {
    setBreachStatus('BREACH');

    setTimeout(() => {
      setBreachStatus('RESTORING');
    }, 3000);

    setTimeout(() => {
      setBreachStatus('SECURED');
    }, 5000);

    setTimeout(() => {
      setBreachStatus('IDLE');
    }, 8000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      <div className="fixed inset-0 grid-bg -z-10" />
      <Navigation />
      <Hero onTestDefense={handleTestDefense} breachStatus={breachStatus} />
      <Marquee />
      <Features />
      <Intelligence />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
