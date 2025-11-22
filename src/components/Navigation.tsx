function Navigation() {
  return (
    <nav className="flex justify-between items-center px-16 py-8 border-b border-[#222] bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2.5 font-bold tracking-wider text-sm cursor-pointer leading-tight">
        <div className="w-6 h-6 bg-white flex items-center justify-center">
          <div className="w-2 h-2 border-2 border-black" />
        </div>
        <span>ZERO<br />SIGNAL</span>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#features" className="text-[#888] no-underline text-xs uppercase tracking-widest hover:text-white transition-colors">Capabilities</a></li>
        <li><a href="#intelligence" className="text-[#888] no-underline text-xs uppercase tracking-widest hover:text-white transition-colors">Intel</a></li>
        <li><a href="#pricing" className="text-[#888] no-underline text-xs uppercase tracking-widest hover:text-white transition-colors">Access</a></li>
      </ul>

      <a href="#" className="bg-white text-black px-6 py-2.5 font-bold no-underline text-xs tracking-widest hover:-translate-y-0.5 transition-transform inline-block">
        GET ACCESS
      </a>
    </nav>
  );
}

export default Navigation;
