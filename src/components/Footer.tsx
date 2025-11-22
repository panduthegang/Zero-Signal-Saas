
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 px-6 md:px-16 border-t border-border-dark text-sm">
      {/* Top Section: Logo & Links */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6 max-w-xs">
           <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 bg-white">
              <div className="w-2 h-2 border-2 border-black"></div>
            </div>
            <div className="font-bold tracking-widest text-xs leading-tight font-display text-white">
              ZERO<br/>SIGNAL
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed font-mono">
            Deploying autonomous neural defense matrices for next-generation infrastructure. Secure your signal.
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex flex-wrap gap-16">
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-widest text-xs font-display">PLATFORM</h4>
            <ul className="flex flex-col gap-3 text-gray-500 text-xs font-mono">
              <li className="hover:text-accent-green cursor-pointer transition-colors">Overview</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Integrations</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Status</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-widest text-xs font-display">COMPANY</h4>
            <ul className="flex flex-col gap-3 text-gray-500 text-xs font-mono">
              <li className="hover:text-accent-green cursor-pointer transition-colors">About</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-widest text-xs font-display">LEGAL</h4>
            <ul className="flex flex-col gap-3 text-gray-500 text-xs font-mono">
              <li className="hover:text-accent-green cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-accent-green cursor-pointer transition-colors">Security Audit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        
        {/* Left: Copyright & Address */}
        <div className="flex flex-col gap-4">
          <div className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">
             <span className="text-accent-green">///</span> HQ_COORDS: 37.7749° N, 122.4194° W<br/>
             1010 Binary Blvd, Silicon Valley, CA
          </div>
          <div className="text-[10px] text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} ZeroSignal Inc. All Systems Secured.
          </div>
        </div>

        {/* Right: Contact & Socials */}
        <div className="flex flex-col gap-4 items-start md:items-end">
           <a href="mailto:support@zerosignal.dev" className="text-xs font-mono text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
             <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-accent-green transition-colors"></span>
             support@zerosignal.dev
           </a>

           <div className="flex gap-4">
              {/* Twitter / X */}
              <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center border border-gray-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              
              {/* GitHub */}
              <a href="#" aria-label="GitHub" className="w-8 h-8 flex items-center justify-center border border-gray-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-gray-400">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center border border-gray-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-gray-400">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
