import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Solusi', href: '#solusi' },
  { name: 'Cara Kerja', href: '#cara-kerja' },
  { name: 'Hasil', href: '#hasil' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        scrolled ? "bg-[#050505]/80 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2" : "bg-transparent border-transparent py-4"
      )} 
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <a 
            href="#" 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl"
            aria-label="Beranda Agung AI"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:bg-cyan-500/40 transition-colors duration-300" />
              <img 
                src="/LogoAgung.png" 
                alt="Agung AI Logo" 
                className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                loading="eager"
              />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight transition-colors group-hover:text-cyan-50">
              Agung<span className="text-cyan-500 font-medium">AI</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md px-2 py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
            
            <div className="magnetic-wrap ml-4">
              <a 
                href="#cta" 
                className="magnetic-btn group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="magnetic-text relative z-10">Konsultasi Gratis</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 p-2 rounded-xl bg-white/5 border border-white/10 transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg 
                className={cn("w-6 h-6 transition-transform duration-300", isOpen && "rotate-90")} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        id="mobile-menu"
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden shadow-2xl",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="block px-4 py-3.5 rounded-xl text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors border border-transparent hover:border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 mt-2">
            <a 
              href="#cta" 
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all active:scale-95"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
