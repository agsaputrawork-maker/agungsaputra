import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function CTA() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center z-10" 
      id="join-group" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-black to-[#1a1500] z-0 pointer-events-none" />
      <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-yellow-600/10 blur-[100px] md:blur-[120px] rounded-full top-1/2 left-0 md:left-1/4 transform -translate-y-1/2 z-0 animate-pulse-slow pointer-events-none" />
      <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-red-600/10 blur-[100px] md:blur-[120px] rounded-full top-1/2 right-0 md:right-1/4 transform -translate-y-1/2 z-0 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={cn(
            "relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 lg:p-20 rounded-[2.5rem] md:rounded-[3.5rem] text-center shadow-[0_0_80px_rgba(234,179,8,0.15)] overflow-hidden transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 md:mb-8 leading-[1.15] tracking-tight"
            >
              Siap Panen Dollar dari <br className="hidden md:block"/>HP Anda <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Mulai Hari Ini?</span>
            </h2>
            
            <p className="text-base md:text-xl text-slate-300 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              Jangan sampai ketinggalan momentum XAUUSD berikutnya. Saya batasi penerimaan member baru bulan ini untuk menjaga <strong className="text-white font-semibold">kualitas signal & bimbingan eksklusif</strong>.
            </p>
            
            <div className="magnetic-wrap inline-block">
              <a 
                href="https://t.me/GoldPulseScalper" 
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-lg md:text-xl font-bold overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="magnetic-text relative z-10 block pointer-events-none">Join Grup Telegram Gratis</span>
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8 md:mt-12 flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="text-sm md:text-base text-yellow-500 font-medium tracking-wide uppercase">
                Slot Terbatas | Signal Aktif
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}