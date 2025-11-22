function Footer() {
  return (
    <footer className="px-16 py-16 bg-[#020202] flex flex-col md:flex-row justify-between items-start text-sm text-[#555] gap-12">
      <div className="flex items-center gap-2.5 font-bold tracking-wider text-sm leading-tight self-start">
        <div className="w-6 h-6 bg-white flex items-center justify-center">
          <div className="w-2 h-2 border-2 border-black" />
        </div>
        <span>ZERO<br />SIGNAL</span>
      </div>

      <div className="footer-col">
        <h4 className="text-white mb-6">PLATFORM</h4>
        <ul className="list-none">
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Overview</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Integrations</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Documentation</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Status</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="text-white mb-6">COMPANY</h4>
        <ul className="list-none">
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">About</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Careers</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Blog</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Contact</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="text-white mb-6">LEGAL</h4>
        <ul className="list-none">
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Privacy Policy</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Terms of Service</li>
          <li className="mb-3 cursor-pointer hover:text-[#4ade80] transition-colors">Security Audit</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
