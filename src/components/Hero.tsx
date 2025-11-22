function Hero() {
  return (
    <header className="min-h-[90vh] flex items-center justify-between px-16 py-16 relative flex-col md:flex-row gap-16 md:gap-0">
      <section className="max-w-full md:max-w-[50%] z-10">
        <div className="text-[#666] text-xs tracking-[2px] mb-8 flex items-center gap-2.5">
          <div className="w-2 h-2 bg-[#4ade80] shadow-[0_0_10px_#4ade80] animate-pulse" />
          SYSTEM STATUS: OPERATIONAL
        </div>

        <h1 className="font-display text-6xl md:text-[5rem] leading-[0.9] mb-8 uppercase">
          DEFENSE<br />
          <span className="text-[#333]">PROTOCOL</span><br />
          ACTIVATED
        </h1>

        <div className="flex items-start gap-12 mb-12 flex-col md:flex-row">
          <p className="max-w-[400px] text-sm text-[#666] leading-relaxed">
            ZeroSignal deploys autonomous AI agents to intercept cyber threats before execution. Next-gen heuristics powered by Gemini Flash 2.5.
          </p>
          <div className="text-sm text-[#666]">
            LATENCY
            <span className="block text-2xl text-white mt-1">~14ms</span>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button className="px-8 py-4 uppercase text-xs cursor-pointer tracking-[2px] font-bold bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all">
            INITIATE SCAN
          </button>
          <button className="px-8 py-4 uppercase text-xs cursor-pointer tracking-[2px] font-bold bg-transparent text-white border border-[#333] hover:border-white transition-all">
            READ THE DOCS
          </button>
        </div>
      </section>

      <section className="w-full md:w-[45%] relative border border-[#222] p-5 min-h-[450px] bg-black/40">
        <div className="absolute top-[-1px] left-[-1px] w-5 h-5 border border-white border-r-0 border-b-0" />
        <div className="absolute bottom-[-1px] right-[-1px] w-5 h-5 border border-white border-l-0 border-t-0" />

        <div className="flex justify-between text-[#444] text-xs border-b border-[#222] pb-2.5 mb-5">
          <span>AI_CORE_MONITOR</span>
          <span>...</span>
        </div>

        <div className="flex flex-col justify-center h-[350px] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border border-dashed border-[#333] rounded-full flex items-center justify-center text-[#666] animate-spin-slow">
            <div>&gt;_</div>
          </div>

          <div className="text-xs text-[#333] leading-loose z-10">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>&gt;&gt; INITIALIZING_CORE...</div>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>&gt;&gt; HANDSHAKE_ESTABLISHED::SECURE</div>
            <div className="opacity-0 animate-fade-in text-[#555]" style={{ animationDelay: '1.0s' }}>&gt;&gt; LOADING_HEURISTICS_MODEL_V2</div>
            <div className="opacity-0 animate-fade-in text-[#555]" style={{ animationDelay: '1.4s' }}>&gt;&gt; SCANNING_NETWORK_TOPOLOGY...</div>
            <div className="opacity-0 animate-fade-in text-[#555]" style={{ animationDelay: '1.8s' }}>&gt;&gt; THREAT_VECTOR_ANALYSIS: ACTIVE</div>
            <div className="opacity-0 animate-fade-in text-[#555]" style={{ animationDelay: '2.2s' }}>&gt;&gt; ZERO_TRUST_PROTOCOL: ENFORCED</div>
            <div className="opacity-0 animate-fade-in text-[#555]" style={{ animationDelay: '2.2s' }}>&gt;&gt; AWAITING_INPUT_STREAM...</div>
            <br />
            <div className="opacity-0 animate-fade-in text-[#4ade80] [text-shadow:0_0_5px_rgba(74,222,128,0.5)]" style={{ animationDelay: '2.6s' }}>_ DETECTING_ANOMALIES...</div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
