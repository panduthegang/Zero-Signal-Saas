
import React, { useEffect, useState, useRef } from 'react';
import type { BreachStatus } from '../App';

interface TerminalLine {
  text: string;
  type?: 'normal' | 'command' | 'error' | 'success' | 'warning';
}

const Terminal: React.FC<{ status?: BreachStatus }> = ({ status = 'IDLE' }) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [activeProcess, setActiveProcess] = useState("IDLE");
  const scrollRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  // Initial Boot Sequence
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const bootSequence = [
      { text: ">> ZERO_SIGNAL_KERNEL_V2.5.0 LOADING...", delay: 200 },
      { text: ">> MOUNTING_VIRTUAL_FILE_SYSTEM... [OK]", delay: 400 },
      { text: ">> ALLOCATING_NEURAL_BUFFERS... [OK]", delay: 600 },
      { text: ">> INITIALIZING_HEURISTICS_ENGINE...", delay: 800 },
      { text: ">> LOADING_THREAT_SIGNATURES_DB...", delay: 1200 },
      { text: ">> ESTABLISHING_SECURE_HANDSHAKE...", delay: 1600 },
      { text: ">> CONNECTION_SECURED::256_AES_GCM", delay: 1900 },
      { text: ">> STARTING_DAEMON_PROCESSES...", delay: 2200 },
      { text: ">> NETWORK_TOPOLOGY_SCAN: INITIATED", delay: 2500 },
      { text: ">> DETECTED_NODES: 412 [ACTIVE]", delay: 2800 },
      { text: ">> THREAT_VECTOR_ANALYSIS: RUNNING", delay: 3100 },
      { text: ">> SYSTEM_INTEGRITY: 100%", delay: 3400 },
      { text: ">> READY_FOR_INPUT", delay: 3700 },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    bootSequence.forEach(({ text, delay }, index) => {
      const timeout = setTimeout(() => {
         setLines(prev => [...prev, { text, type: 'normal' }]);
         // Update "process" based on lines for visual flair
         if(index < 5) setActiveProcess("BOOT");
         else if(index < 10) setActiveProcess("NET_INIT");
         else setActiveProcess("MONITORING");
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Handle Breach Simulation Events
  useEffect(() => {
    if (status === 'BREACH') {
      setActiveProcess("CRITICAL_FAILURE");
      setLines(prev => [
        ...prev,
        { text: "", type: 'normal' },
        { text: "!!! CRITICAL ALERT: UNKNOWN SIGNAL DETECTED !!!", type: 'error' },
        { text: ">> ANOMALY DETECTED IN SECTOR 7G", type: 'error' },
        { text: ">> INTRUSION VECTOR: SQL_INJECTION_BLIND", type: 'warning' },
        { text: ">> FIREWALL: BYPASSED", type: 'error' },
        { text: ">> UNAUTHORIZED ROOT ACCESS ATTEMPT...", type: 'warning' },
        { text: ">> EXFILTRATION DETECTED", type: 'error' },
        { text: "!!! SYSTEM COMPROMISED !!!", type: 'error' },
      ]);
    } else if (status === 'RESTORING') {
      setActiveProcess("MITIGATING");
      // Simulate a typing effect or rapid log for countermeasures
      const restorationLogs = [
        { text: ">> ZEROSIGNAL DEFENSE PROTOCOL: ENGAGED", type: 'success' },
        { text: ">> ISOLATING COMPROMISED NODES...", type: 'normal' },
        { text: ">> DEPLOYING NEURAL COUNTER-MEASURES...", type: 'normal' },
        { text: ">> TRACING SOURCE IP...", type: 'command' },
        { text: ">> REWRITING IPTABLES...", type: 'command' },
        { text: ">> INJECTING NULL-ROUTE TO ATTACKER...", type: 'success' },
        { text: ">> PURGING MALICIOUS PAYLOADS...", type: 'normal' },
      ];
      
      let delay = 0;
      restorationLogs.forEach((log: any) => {
        delay += 200;
        setTimeout(() => {
          setLines(prev => [...prev, log]);
        }, delay);
      });

    } else if (status === 'SECURED') {
      setActiveProcess("SECURE");
      setLines(prev => [
        ...prev,
        { text: "", type: 'normal' },
        { text: ">> THREAT NEUTRALIZED", type: 'success' },
        { text: ">> INTEGRITY VERIFICATION: PASSED", type: 'success' },
        { text: ">> SYSTEM RESTORED TO OPTIMAL STATE", type: 'normal' },
        { text: ">> RESUMING STANDARD WATCHDOG...", type: 'normal' },
      ]);
    }
  }, [status]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className={`relative w-full h-[450px] bg-[#050505] border flex flex-col overflow-hidden shadow-2xl group transition-colors duration-300
      ${status === 'BREACH' ? 'border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 'border-border-dark'}
    `}>
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />
      <div className={`absolute inset-0 pointer-events-none z-10 animate-pulse-slow opacity-5 mix-blend-overlay ${status === 'BREACH' ? 'bg-red-500' : 'bg-white'}`} />

      {/* Tech Borders */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-30 transition-colors ${status === 'BREACH' ? 'border-red-500' : 'border-white/50'}`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-30 transition-colors ${status === 'BREACH' ? 'border-red-500' : 'border-white/50'}`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-30 transition-colors ${status === 'BREACH' ? 'border-red-500' : 'border-white/50'}`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-30 transition-colors ${status === 'BREACH' ? 'border-red-500' : 'border-white/50'}`} />

      {/* Header Bar */}
      <div className={`h-8 border-b flex items-center justify-between px-4 select-none z-30 transition-colors
         ${status === 'BREACH' ? 'bg-red-900/20 border-red-500/50' : 'bg-[#111] border-border-dark'}
      `}>
        <div className="flex gap-2">
           <div className="w-2 h-2 rounded-full bg-red-500/50" />
           <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
           <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] font-mono text-gray-500 tracking-widest">
          ROOT@ZEROSIGNAL:~
        </div>
        <div className={`text-[10px] font-mono font-bold ${status === 'BREACH' ? 'text-red-500 animate-pulse' : 'text-accent-green'}`}>
          {activeProcess}
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={scrollRef}
        className="flex-1 p-6 font-mono text-xs overflow-y-auto custom-scrollbar relative z-10"
      >
        {lines.map((line, idx) => (
          <div key={idx} className={`mb-1 break-words
            ${line.type === 'error' ? 'text-red-500 font-bold shadow-red-500/20 text-shadow' : ''}
            ${line.type === 'warning' ? 'text-yellow-500' : ''}
            ${line.type === 'success' ? 'text-accent-green font-bold' : ''}
            ${line.type === 'command' ? 'text-blue-400' : ''}
            ${line.type === 'normal' ? 'text-gray-300' : ''}
            ${!line.type ? 'text-gray-300' : ''}
          `}>
             <span className="opacity-90">{line.text}</span>
          </div>
        ))}
        
        {/* Active Cursor Line */}
        <div className="mb-1">
            <span><span className={`${status === 'BREACH' ? 'text-red-500' : 'text-accent-green'}`}>{`>`}</span> <span className="animate-pulse text-white">_</span></span>
        </div>
      </div>

      {/* Footer Status */}
      <div className={`h-6 border-t flex items-center justify-between px-4 text-[9px] font-mono uppercase z-30
          ${status === 'BREACH' ? 'bg-red-900/20 border-red-500/30 text-red-400' : 'bg-[#0a0a0a] border-border-dark text-gray-600'}
      `}>
        <div className="flex gap-4">
            <span>CPU: {status === 'BREACH' ? '99%' : '12%'}</span>
            <span>MEM: {status === 'BREACH' ? 'OVERFLOW' : '4.2GB'}</span>
            <span>NET: {status === 'BREACH' ? 'UNAUTHORIZED' : 'SECURE'}</span>
        </div>
        <div>{status === 'BREACH' ? 'LOCKDOWN_MODE' : 'SECURE_SHELL_V2'}</div>
      </div>
    </div>
  );
};

export default Terminal;
