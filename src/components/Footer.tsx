import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Footer() {
  const [footerRef, isVisible] = useIntersectionObserver();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#050505] pt-16 pb-8 border-t border-white/5 relative z-10 overflow-hidden"
      ref={footerRef}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div 
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <a 
            href="#" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl p-1"
            aria-label="Kembali ke atas"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md group-hover:bg-cyan-500/30 transition-colors duration-500" />
              <img 
                src="/LogoAgung.png" 
                alt="Agung AI Logo" 
                className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight group-hover:text-cyan-50 transition-colors">
              Agung<span className="text-cyan-500 font-medium">AI</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-slate-400" aria-label="Footer Navigation">
            <Link to="/privacy"
              className="hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm"
            >
              Privasi
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <a 
              href="#" 
              className="hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm"
            >
              Syarat & Ketentuan
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {currentYear} Agung Saputra. All rights reserved.
          </p>
          <p className="order-1 md:order-2 uppercase tracking-[0.2em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
            Built for Conversion
          </p>
        </div>
      </div>
    </footer>
  );
}
