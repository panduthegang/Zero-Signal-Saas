import React, { useEffect, useState } from 'react';

interface AttackLog {
  id: number;
  ip: string;
  vector: string;
  location: string;
}

const AttackFeed: React.FC = () => {
  const [attacks, setAttacks] = useState<AttackLog[]>([]);

  const vectors = ["SQL Injection", "XSS Payload", "Brute Force", "DDoS Volumetric", "Port Scan", "Zero-Day Exploit"];
  const locations = ["CN", "RU", "US", "KP", "BR", "DE", "IN"];

  useEffect(() => {
    const interval = setInterval(() => {
      const newAttack = {
        id: Date.now(),
        ip: `192.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.x`,
        vector: vectors[Math.floor(Math.random() * vectors.length)],
        location: locations[Math.floor(Math.random() * locations.length)]
      };

      setAttacks(prev => [newAttack, ...prev].slice(0, 8));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-40 hidden xl:block w-72 font-mono text-[10px]">
      <div className="flex items-center justify-between mb-2 px-2">
        <span className="text-gray-500 uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent-red rounded-full animate-pulse"></span>
          Live Intercepts
        </span>
      </div>
      
      <div className="bg-black/80 border border-white/10 backdrop-blur-sm p-2 space-y-1 shadow-2xl relative overflow-hidden">
        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_3px] opacity-50 z-10"></div>
        
        {attacks.map((attack) => (
          <div key={attack.id} className="flex justify-between items-center text-gray-400 border-l-2 border-transparent hover:border-accent-green hover:bg-white/5 px-2 py-1 transition-all animate-fade-in">
             <div className="flex flex-col">
               <span className="text-accent-red font-bold">{attack.vector}</span>
               <span className="text-gray-600">{attack.ip}</span>
             </div>
             <span className="text-gray-500 bg-white/5 px-1 rounded">{attack.location}</span>
          </div>
        ))}
        
        {attacks.length === 0 && (
           <div className="text-gray-600 text-center py-4">INITIALIZING FEED...</div>
        )}
      </div>
    </div>
  );
};

export default AttackFeed;