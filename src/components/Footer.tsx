import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Footer() {
  const [footerRef, isVisible] = useIntersectionObserver();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#0a0f1c] pt-16 pb-8 border-t border-white/5 relative z-10 overflow-hidden"
      ref={footerRef}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-yellow-500/5 blur-[100px] pointer-events-none" />

      <div 
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <a 
            href="#" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-xl p-1"
          >
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border border-yellow-500/20">
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/30 transition-colors duration-500" />
                <img 
                  src="/logogps.jpg" 
                  alt="Gold Pulse Scalper Logo" 
                  className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight group-hover:text-yellow-100 transition-colors">
              Gold Pulse<span className="text-yellow-500 font-medium"> Scalper</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-slate-400">
            <Link to="/privacy"
              className="hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-sm"
            >
              Kebijakan Privasi
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              to="/terms" 
              className="hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-sm"
            >
              Disclaimer & Risiko
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {currentYear} Gold Pulse Scalper. All rights reserved.
          </p>
          <p className="order-1 md:order-2 uppercase tracking-[0.2em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
            XAUUSD Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}