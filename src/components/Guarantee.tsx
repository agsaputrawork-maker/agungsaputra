import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Guarantee() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      className="py-16 md:py-24 relative z-10 overflow-hidden bg-[#0a0f1c]" 
      ref={sectionRef}
      aria-labelledby="guarantee-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div 
        className={cn(
          "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <div className="relative group rounded-[2.5rem] p-[1px] overflow-hidden bg-gradient-to-b from-yellow-500/40 via-yellow-500/5 to-transparent shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-[#050505] rounded-[2.5rem]" />
          
          <div className="relative bg-yellow-500/5 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] text-center overflow-hidden transition-colors duration-500 group-hover:bg-yellow-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
            
            <div 
              className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl md:rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] transition-all duration-500 group-hover:-translate-y-2"
              aria-hidden="true"
            >
              <svg 
                className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 
                id="guarantee-heading" 
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-yellow-400 mb-6 tracking-tight group-hover:text-yellow-300 transition-colors"
              >
                Garansi Bimbingan Sampai Bisa
              </h2>
              <p className="text-slate-300 md:text-lg leading-relaxed max-w-3xl mx-auto group-hover:text-slate-200 transition-colors">
                Kami tidak menjanjikan kekayaan instan, tapi kami menjanjikan <strong className="text-white font-semibold">transparansi penuh</strong>. Jika Anda masih bingung cara entry atau menghitung lot, tim mentor kami siap membimbing <em className="text-white not-italic font-medium">1-on-1</em> hingga Anda paham, <u className="decoration-yellow-500/50 underline-offset-4 font-medium text-white group-hover:decoration-yellow-400 transition-colors">gratis selamanya</u>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}