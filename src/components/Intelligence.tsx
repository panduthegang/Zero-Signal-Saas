function Intelligence() {
  return (
    <section id="intelligence" className="px-16 py-24 relative border-t border-[#222]">
      <div className="mb-16 border-l-2 border-[#4ade80] pl-6">
        <span className="text-[#4ade80] text-xs mb-2 block">02 // LIVE INTEL</span>
        <h2 className="font-display text-4xl uppercase tracking-tight">Global Threat<br />Topology</h2>
      </div>

      <div className="w-full h-[500px] border border-[#222] bg-[#020202] relative overflow-hidden flex flex-col md:flex-row">
        <div className="absolute top-[-1px] left-[-1px] w-5 h-5 border border-white border-r-0 border-b-0" />
        <div className="absolute bottom-[-1px] right-[-1px] w-5 h-5 border border-white border-l-0 border-t-0" />

        <div className="w-full md:w-[250px] border-b md:border-b-0 md:border-r border-[#222] p-6 flex flex-row md:flex-col gap-4">
          <div className="mb-4">
            <label className="text-xs text-[#555] block mb-1">THREAT LEVEL</label>
            <div className="text-xl text-[#ef4444] font-display">ELEVATED</div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-[#555] block mb-1">ATTACKS BLOCKED (24H)</label>
            <div className="text-xl text-white font-display">8,492,104</div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-[#555] block mb-1">ACTIVE NODES</label>
            <div className="text-xl text-white font-display">412</div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-[#555] block mb-1">CURRENT TARGET</label>
            <div className="text-sm text-white font-mono">Unknown Proxy</div>
          </div>
        </div>

        <div className="flex-1 relative bg-[length:20px_20px]" style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)' }}>
          <div className="absolute w-1.5 h-1.5 bg-[#ef4444] shadow-[0_0_8px_#ef4444] rounded-full top-[30%] left-[40%]" />
          <div className="absolute w-1.5 h-1.5 bg-[#ef4444] shadow-[0_0_8px_#ef4444] rounded-full top-[60%] left-[70%]" />
          <div className="absolute w-1.5 h-1.5 bg-[#ef4444] shadow-[0_0_8px_#ef4444] rounded-full top-[45%] left-[20%]" />
          <div className="absolute w-1.5 h-1.5 bg-[#ef4444] shadow-[0_0_8px_#ef4444] rounded-full top-[80%] left-[50%]" />

          <div className="absolute h-px bg-[rgba(239,68,68,0.3)] origin-left top-[30%] left-[40%] w-[200px] rotate-[20deg]" />
          <div className="absolute h-px bg-[rgba(239,68,68,0.3)] origin-left top-[60%] left-[70%] w-[150px] rotate-[140deg]" />
          <div className="absolute h-px bg-[rgba(239,68,68,0.3)] origin-left top-[45%] left-[20%] w-[300px] -rotate-[10deg]" />
        </div>
      </div>
    </section>
  );
}

export default Intelligence;
