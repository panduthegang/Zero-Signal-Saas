import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Intelligence from './components/Intelligence';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      <div className="fixed inset-0 grid-bg -z-10" />
      <Navigation />
      <Hero />
      <Marquee />
      <Features />
      <Intelligence />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
