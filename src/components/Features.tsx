function Features() {
  const features = [
    {
      icon: '01',
      title: 'Neural Lace Encryption',
      description: 'End-to-end quantum-resistant encryption wrapping every data packet leaving your local environment.',
      items: ['256-bit AES GCM', 'Key Rotation: 10s']
    },
    {
      icon: '02',
      title: 'Predictive Heuristics',
      description: 'Our AI doesn\'t just react; it predicts attack vectors by analyzing global threat topology in real-time.',
      items: ['Zero-day prevention', 'Behavioral Analysis']
    },
    {
      icon: '03',
      title: 'Ghost Protocol',
      description: 'Obfuscates your digital footprint, making your infrastructure invisible to unauthorized network scans.',
      items: ['IP Masking', 'Port Hopping']
    }
  ];

  return (
    <section id="features" className="px-16 py-24 border-t border-[#222]">
      <div className="mb-16 border-l-2 border-[#4ade80] pl-6">
        <span className="text-[#4ade80] text-xs mb-2 block">01 // SYSTEM CAPABILITIES</span>
        <h2 className="font-display text-4xl uppercase tracking-tight">Integrated Defense<br />Architecture</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] border border-[#222] p-8 relative hover:-translate-y-1 hover:border-[#666] transition-all"
          >
            <div className="text-2xl text-white mb-6 w-[50px] h-[50px] border border-[#333] flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl mb-4 text-white font-display uppercase">{feature.title}</h3>
            <p className="text-[#666] text-sm leading-relaxed">{feature.description}</p>
            <ul className="list-none mt-4">
              {feature.items.map((item, idx) => (
                <li key={idx} className="text-[#555] text-xs mb-2 flex items-center gap-2">
                  <span className="text-[#4ade80]">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
