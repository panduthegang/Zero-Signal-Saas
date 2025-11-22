
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Capabilities', id: 'features' },
    { label: 'Advantage', id: 'why-us' },
    { label: 'Intel', id: 'intelligence' },
    { label: 'Reports', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 border-b border-border-dark backdrop-blur-md md:px-16 transition-all duration-300 ${
        isScrolled ? 'bg-bg/95 shadow-lg shadow-black/50' : 'bg-bg/80'
      }`}>
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'root')}
          className="flex items-center gap-3 cursor-pointer group relative z-50"
        >
          <div className="flex items-center justify-center w-6 h-6 bg-white transition-colors group-hover:bg-accent-green">
            <div className="w-2 h-2 border-2 border-black"></div>
          </div>
          <div className="font-bold tracking-widest text-xs leading-tight font-display">
            ZERO<br/>SIGNAL
          </div>
        </a>

        <ul className="hidden gap-8 md:flex list-none">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-xs tracking-widest text-gray-400 uppercase hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#access"
          onClick={(e) => scrollToSection(e, 'access')}
          className="hidden md:block px-6 py-2 text-xs font-bold tracking-widest text-black bg-white hover:-translate-y-0.5 transition-transform duration-200"
        >
          GET ACCESS
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <div className={`absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-bg border-l border-border-dark flex flex-col transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex-1 flex flex-col justify-center px-8 py-24">
            <div className="mb-12">
              <div className="text-[10px] text-accent-green font-mono tracking-widest mb-2">NAVIGATION</div>
              <div className="h-px bg-gradient-to-r from-accent-green/50 to-transparent" />
            </div>

            <ul className="space-y-2 mb-12">
              {navItems.map((item, idx) => (
                <li key={item.label} className="group" style={{ animationDelay: `${idx * 50}ms` }}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="flex items-center gap-4 text-lg font-display uppercase tracking-wider text-gray-400 hover:text-white transition-all duration-300 py-3 border-l-2 border-transparent hover:border-accent-green hover:pl-4"
                  >
                    <span className="text-[10px] text-gray-600 font-mono group-hover:text-accent-green">0{idx + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#access"
              onClick={(e) => scrollToSection(e, 'access')}
              className="w-full px-8 py-4 text-xs font-bold tracking-widest text-black bg-white hover:bg-accent-green transition-colors duration-300 text-center"
            >
              GET ACCESS
            </a>

            <div className="mt-12 pt-8 border-t border-border-dark">
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-border-dark hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-border-dark hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="px-8 py-6 border-t border-border-dark">
            <div className="flex items-center gap-2 text-[10px] text-gray-600 font-mono">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isScrolled ? 'bg-accent-green' : 'bg-gray-600'}`} />
              SYSTEM STATUS: OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
