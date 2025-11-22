function Pricing() {
  const plans = [
    {
      tier: 'OBSERVER',
      price: 0,
      features: [
        { name: 'Basic Monitoring', enabled: true },
        { name: 'Threat Alerts (Email)', enabled: true },
        { name: 'Auto-Mitigation', enabled: false },
        { name: 'API Access', enabled: false }
      ],
      buttonText: 'INITIALIZE',
      buttonStyle: 'secondary'
    },
    {
      tier: 'OPERATOR',
      price: 49,
      features: [
        { name: 'Real-time Monitoring', enabled: true },
        { name: 'Auto-Mitigation', enabled: true },
        { name: '24/7 Support Uplink', enabled: true },
        { name: 'Source Code Access', enabled: false }
      ],
      buttonText: 'UPGRADE',
      buttonStyle: 'primary',
      highlight: true
    },
    {
      tier: 'ARCHITECT',
      price: 299,
      features: [
        { name: 'Full Infrastructure Map', enabled: true },
        { name: 'Dedicated Neural Core', enabled: true },
        { name: 'Custom Heuristics', enabled: true },
        { name: 'API Access', enabled: true }
      ],
      buttonText: 'CONTACT SALES',
      buttonStyle: 'secondary'
    }
  ];

  return (
    <section id="pricing" className="px-16 py-24 border-t border-[#222]">
      <div className="mb-16 border-l-2 border-[#4ade80] pl-6">
        <span className="text-[#4ade80] text-xs mb-2 block">03 // ACCESS PROTOCOLS</span>
        <h2 className="font-display text-4xl uppercase tracking-tight">Select Clearance<br />Level</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border p-12 flex flex-col items-start relative ${
              plan.highlight
                ? 'border-[#4ade80] bg-[rgba(74,222,128,0.02)]'
                : 'border-[#222]'
            }`}
          >
            <span className="text-xs text-[#4ade80] mb-4 border border-[#4ade80] px-2 py-0.5">
              {plan.tier}
            </span>
            <div className="text-4xl font-display mb-8">
              ${plan.price}<span className="text-base text-[#555] font-mono">/mo</span>
            </div>

            <div className="mb-12 flex-1">
              {plan.features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`mb-3 text-sm flex items-center gap-2.5 ${
                    feature.enabled ? 'text-[#aaa]' : 'text-[#333] line-through'
                  }`}
                >
                  {feature.name}
                </div>
              ))}
            </div>

            <button
              className={`w-full px-8 py-4 uppercase text-xs cursor-pointer tracking-[2px] font-bold transition-all ${
                plan.buttonStyle === 'primary'
                  ? 'bg-white text-black border border-white hover:bg-transparent hover:text-white'
                  : 'bg-transparent text-white border border-[#333] hover:border-white'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
