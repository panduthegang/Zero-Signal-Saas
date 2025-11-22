
import React, { useEffect, useState } from 'react';

// Mock Data Generators
const generateDataPoint = () => Math.floor(Math.random() * 40) + 30; // Kept between 30-70 for nice visual

interface DataPoint {
  value: number;
  timestamp: number;
}

const IntelSection: React.FC = () => {
  // Graph Data State
  const [graphData, setGraphData] = useState<DataPoint[]>(() => {
    const now = Date.now();
    return Array(30).fill(0).map((_, i) => ({
      value: 30 + Math.random() * 10,
      timestamp: now - (29 - i) * 500
    }));
  });

  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const [logs, setLogs] = useState<{id: number, time: string, msg: string, type: 'info'|'warn'|'block'}[]>([
    { id: 1, time: '10:24:01', msg: 'Packet intercepted from 192.168.x.x', type: 'info' },
    { id: 2, time: '10:24:05', msg: 'Handshake attempt blocked', type: 'block' },
    { id: 3, time: '10:24:12', msg: 'Anomalous payload detected', type: 'warn' },
  ]);

  // Animation Loop
  useEffect(() => {
    const interval = setInterval(() => {
      // Update Graph
      setGraphData(prev => {
        const newPoint = { value: generateDataPoint(), timestamp: Date.now() };
        // Keep strictly 30 points
        return [...prev.slice(1), newPoint];
      });

      // Randomly add log
      if (Math.random() > 0.7) {
        const actions = [
            { msg: 'Inbound connection blocked: Port 445', type: 'block' },
            { msg: 'Signature match: Trojan.Win32', type: 'warn' },
            { msg: 'Scanning node 224...', type: 'info' },
            { msg: 'Encrypted packet secured', type: 'info' },
            { msg: 'Brute force attempt deflected', type: 'block' }
        ];
        const action = actions[Math.floor(Math.random() * actions.length)];
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        setLogs(prev => [
            ...prev.slice(-4), 
            { id: Date.now(), time: timeStr, msg: action.msg, type: action.type as any }
        ]);
      }
    }, 500); // Faster update for smoother "live" feel

    return () => clearInterval(interval);
  }, []);

  // SVG Coordinate Calculation
  // We map the data to a 100x100 coordinate system
  // X goes from 0 to 100
  // Y goes from 100 (bottom) to 0 (top) based on value (0-100)
  const points = graphData.map((d, i) => {
    const x = (i / (graphData.length - 1)) * 100;
    const y = 100 - d.value; 
    return `${x},${y}`;
  }).join(" ");

  // Close the path for the fill area
  const fillPoints = `0,100 ${points} 100,100`;

  return (
    <section id="intelligence" className="py-24 px-6 md:px-16 border-t border-border-dark bg-bg relative overflow-hidden scroll-mt-24">
      
      {/* Section Header */}
      <div className="mb-16 pl-6 border-l-2 border-accent-green relative z-10">
        <span className="block text-accent-green text-xs font-mono mb-2">03 // LIVE INTEL</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
          Global Threat<br />Dashboard
        </h2>
      </div>

      {/* Dashboard Container */}
      <div className="relative w-full border border-border-dark bg-[#020202] grid grid-cols-1 lg:grid-cols-4 gap-px shadow-2xl ring-1 ring-white/5">
        
        {/* Global Stats Sidebar (Col 1) */}
        <div className="bg-[#080808] p-6 flex flex-col justify-between gap-8 border-r border-white/5">
          <div>
             <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-accent-red rounded-full animate-pulse"></span>
               Threat Status
             </h3>
             <div className="text-3xl font-display text-accent-red animate-pulse mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">CRITICAL</div>
             <div className="text-xs text-gray-400">Level 4 Active Intercept</div>
          </div>

          <div className="space-y-6">
            <div>
               <div className="flex justify-between text-xs text-gray-500 mb-1">BLOCK RATE</div>
               <div className="w-full bg-gray-900 h-1 relative overflow-hidden">
                 <div className="bg-accent-green h-1 w-[98%] shadow-[0_0_10px_#4ade80] relative z-10"></div>
                 <div className="absolute inset-0 bg-accent-green/20 animate-pulse"></div>
               </div>
               <div className="text-right text-[10px] text-accent-green mt-1 font-mono">99.9%</div>
            </div>
            <div>
               <div className="flex justify-between text-xs text-gray-500 mb-1">SYS LOAD</div>
               <div className="w-full bg-gray-900 h-1">
                 <div className="bg-yellow-500 h-1 w-[45%] shadow-[0_0_10px_#eab308]"></div>
               </div>
               <div className="text-right text-[10px] text-yellow-500 mt-1 font-mono">45%</div>
            </div>
          </div>

          <div>
             <div className="text-[10px] text-gray-600 uppercase mb-1">Uptime</div>
             <div className="font-mono text-white tracking-wider">412d 14h 22m</div>
          </div>
        </div>

        {/* Main Chart Area (Col 2 & 3) */}
        <div className="lg:col-span-2 bg-[#030303] relative flex flex-col border-r border-white/5 min-h-[300px]">
           {/* Chart Header */}
           <div className="flex justify-between items-center px-6 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="text-[10px] text-accent-green uppercase tracking-widest flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                </span>
                Live Traffic Volume
              </div>
              <div className="flex gap-1">
                 {[1,2,3].map(i => <div key={i} className={`w-8 h-1 rounded-sm ${i===3 ? 'bg-accent-green animate-pulse' : 'bg-gray-800'}`}></div>)}
              </div>
           </div>

           {/* SVG Graph Container */}
           <div 
                className="flex-1 relative w-full h-full overflow-hidden group"
                onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* Background Grid */}
              <div className="absolute inset-0 pointer-events-none" 
                   style={{
                       backgroundImage: `
                         linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                       `, 
                       backgroundSize: '50px 50px'
                   }}>
              </div>

              {/* SVG Chart */}
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#4ade80" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Area Fill */}
                <polygon 
                    points={fillPoints} 
                    fill="url(#chartGradient)"
                    className="transition-all duration-300 ease-linear"
                />

                {/* Line Stroke */}
                <polyline 
                    points={points}
                    fill="none" 
                    stroke="#4ade80" 
                    strokeWidth="1.5" 
                    vectorEffect="non-scaling-stroke"
                    filter="url(#glow)"
                    className="transition-all duration-300 ease-linear drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                />

                {/* Interactive Overlay & Hover Effects inside SVG for correct scaling */}
                {graphData.map((d, i) => {
                    const x = (i / (graphData.length - 1)) * 100;
                    // Slightly wide rects for easier hit detection
                    const width = 100 / (graphData.length - 1); 
                    return (
                        <rect
                            key={d.timestamp}
                            x={x - width/2}
                            y="0"
                            width={width}
                            height="100"
                            fill="transparent"
                            className="cursor-crosshair"
                            onMouseEnter={() => setHoveredPoint(i)}
                        />
                    );
                })}

                {/* Highlight hovered point */}
                {hoveredPoint !== null && graphData[hoveredPoint] && (
                    <g pointerEvents="none">
                         {/* Vertical Line */}
                        <line 
                            x1={(hoveredPoint / (graphData.length - 1)) * 100}
                            y1="0"
                            x2={(hoveredPoint / (graphData.length - 1)) * 100}
                            y2="100"
                            stroke="rgba(255, 255, 255, 0.2)"
                            strokeWidth="0.5"
                            vectorEffect="non-scaling-stroke"
                            strokeDasharray="2 2"
                        />
                        {/* Circle Point */}
                        <circle 
                            cx={(hoveredPoint / (graphData.length - 1)) * 100}
                            cy={100 - graphData[hoveredPoint].value}
                            r="1.5"
                            fill="#4ade80"
                            stroke="#000"
                            strokeWidth="0.5"
                            vectorEffect="non-scaling-stroke"
                        />
                    </g>
                )}
              </svg>
              
              {/* Tooltip HTML Overlay */}
              {hoveredPoint !== null && graphData[hoveredPoint] && (
                <div 
                    className="absolute z-20 pointer-events-none bg-black/90 border border-accent-green/30 p-2 rounded text-[10px] font-mono shadow-xl backdrop-blur-sm whitespace-nowrap"
                    style={{
                        left: `${(hoveredPoint / (graphData.length - 1)) * 100}%`,
                        top: `${100 - graphData[hoveredPoint].value}%`,
                        transform: hoveredPoint > graphData.length / 2 ? 'translate(-110%, -50%)' : 'translate(10%, -50%)'
                    }}
                >
                    <div className="text-gray-400 mb-1">
                        {new Date(graphData[hoveredPoint].timestamp).toLocaleTimeString()}
                    </div>
                    <div className="text-accent-green font-bold flex items-center gap-2">
                        {graphData[hoveredPoint].value} GB/s
                    </div>
                </div>
              )}

              {/* Scanning Line Effect (only when not hovering to reduce visual noise) */}
              {hoveredPoint === null && (
                  <div className="absolute top-0 bottom-0 w-px bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-[scan_4s_linear_infinite] pointer-events-none"></div>
              )}
           </div>
           
           <div className="px-6 py-3 bg-black/60 backdrop-blur-sm border-t border-white/5 flex justify-between text-[10px] text-gray-500 font-mono z-10">
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-accent-green rounded-full"></span> INGRESS: 14.2 GB/s</span>
              <span>EGRESS: 8.1 GB/s</span>
              <span>LATENCY: 14ms</span>
           </div>
        </div>

        {/* Right Panel: Threat Log & Mini Chart (Col 4) */}
        <div className="bg-[#080808] flex flex-col border-l border-white/5">
            {/* Top Half: Threat Breakdown */}
            <div className="h-1/2 border-b border-white/5 p-6 bg-[#0a0a0a]">
               <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-4">Vectors</h3>
               <div className="space-y-4">
                 {[
                    { name: 'DDoS', val: '70%', col: 'bg-accent-red', glow: 'shadow-[0_0_10px_#ef4444]' },
                    { name: 'Malware', val: '40%', col: 'bg-yellow-500', glow: 'shadow-[0_0_10px_#eab308]' },
                    { name: 'Phishing', val: '25%', col: 'bg-blue-500', glow: 'shadow-[0_0_10px_#3b82f6]' },
                 ].map((item, i) => (
                     <div key={i}>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1.5">
                            <span className="tracking-wider">{item.name}</span>
                        </div>
                        <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
                            <div className={`h-full ${item.col} ${item.glow} relative`} style={{width: item.val}}>
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                            </div>
                        </div>
                     </div>
                 ))}
               </div>
            </div>

            {/* Bottom Half: Terminal Log */}
            <div className="h-1/2 bg-black p-5 font-mono text-[10px] overflow-hidden relative group">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-gray-600 uppercase tracking-widest">Packet Log</h3>
                  <span className="w-2 h-2 border border-gray-700 animate-spin-slow"></span>
                </div>
                <div className="space-y-2.5">
                    {logs.map((log) => (
                        <div key={log.id} className="animate-fade-in flex gap-3 border-l border-transparent hover:border-white/20 pl-1 transition-colors">
                            <span className="text-gray-600 shrink-0">[{log.time}]</span>
                            <span className={`truncate ${
                                log.type === 'block' ? 'text-accent-red' : 
                                log.type === 'warn' ? 'text-yellow-500' : 'text-gray-400'
                            }`}>
                                {log.msg}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]"></div>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
            0% { left: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default IntelSection;
