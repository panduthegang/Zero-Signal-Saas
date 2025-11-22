
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Capabilities', id: 'features' },
    { label: 'Advantage', id: 'why-us' },
    { label: 'Intel', id: 'intelligence' },
    { label: 'Reports', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 border-b border-border-dark bg-bg/80 backdrop-blur-md md:px-16">
      <a 
        href="#"
        onClick={(e) => scrollToSection(e, 'root')}
        className="flex items-center gap-3 cursor-pointer group"
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
        className="px-6 py-2 text-xs font-bold tracking-widest text-black bg-white hover:-translate-y-0.5 transition-transform duration-200"
      >
        GET ACCESS
      </a>
    </nav>
  );
};

export default Navbar;
