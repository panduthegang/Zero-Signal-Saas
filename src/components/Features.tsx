
import React from 'react';

const FeatureCard: React.FC<{ id: string; title: string; desc: string; items: string[] }> = ({ id, title, desc, items }) => (
  <div className="group relative bg-bg-card border border-border-dark p-8 hover:-translate-y-2 hover:border-gray-500 transition-all duration-300">
    <div className="w-12 h-12 border border-gray-800 flex items-center justify-center text-white font-mono mb-6 group-hover:border-accent-green transition-colors">
      {id}
    </div>
    <h3 className="text-xl font-display uppercase mb-4">{title}</h3>
    <p className="text-sm text-text-muted mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
          <span className="text-accent-green">{`>`}</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      id: "01",
      title: "Neural Lace Encryption",
      desc: "End-to-end quantum-resistant encryption wrapping every data packet leaving your local environment.",
      items: ["256-bit AES GCM", "Key Rotation: 10s"]
    },
    {
      id: "02",
      title: "Predictive Heuristics",
      desc: "Our AI doesn't just react; it predicts attack vectors by analyzing global threat topology in real-time.",
      items: ["Zero-day prevention", "Behavioral Analysis"]
    },
    {
      id: "03",
      title: "Ghost Protocol",
      desc: "Obfuscates your digital footprint, making your infrastructure invisible to unauthorized network scans.",
      items: ["IP Masking", "Port Hopping"]
    }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-16 border-t border-border-dark scroll-mt-24">
      <div className="mb-16 pl-6 border-l-2 border-accent-green">
        <span className="block text-accent-green text-xs font-mono mb-2">01 // SYSTEM CAPABILITIES</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
          Integrated Defense<br />Architecture
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(f => <FeatureCard key={f.id} {...f} />)}
      </div>
    </section>
  );
};

export default Features;
