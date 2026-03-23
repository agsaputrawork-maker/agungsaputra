import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const manualPoints = [
  "Balas chat nunggu staf online (hitungan jam).",
  "Sering lupa follow-up prospek potensial.",
  "Biaya bulanan tinggi untuk gaji banyak staf.",
  "Operasional berhenti total saat tanggal merah."
];

const aiPoints = [
  <><strong className="text-white font-semibold">Respons instan &lt; 3 detik</strong>, 24/7/365.</>,
  "Follow-up otomatis tanpa emosi atau lelah.",
  <><strong className="text-white font-semibold">Satu kali investasi setup</strong>, hemat biaya selamanya.</>,
  "Bisnis tetap menghasilkan uang saat Anda tidur."
];

export default function SolutionComparison() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      className="py-24 relative z-10 border-y border-white/5 bg-white/[0.02] overflow-hidden" 
      id="solusi" 
      ref={sectionRef}
      aria-labelledby="comparison-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 
            id="comparison-heading"
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Masalahnya Bukan Pada Tim Anda, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Tapi Pada Sistem yang Manual.
            </span>
          </h2>
          <p 
            className={cn(
              "text-lg text-slate-400 transition-all duration-700 delay-100 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Saatnya beralih ke masa depan. Lihat bagaimana AI mengubah cara bisnis beroperasi secara instan.
          </p>
        </div>

        <div 
          className={cn(
            "relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-1000 delay-200 transform group",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-full items-center justify-center text-slate-400 font-bold z-20 font-heading text-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110">
            VS
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-rose-950/10 hover:bg-rose-950/20 transition-colors duration-500 p-8 md:p-12 text-left border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-rose-300 mb-8 flex items-center gap-4">
                  <span 
                    className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span> 
                  Sistem Manual
                </h3>
                <ul className="space-y-6 text-sm md:text-base text-slate-400" role="list">
                  {manualPoints.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <svg className="w-5 h-5 mt-0.5 text-rose-500/40 group-hover/item:text-rose-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed group-hover/item:text-slate-300 transition-colors">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-cyan-950/10 hover:bg-cyan-950/20 transition-colors duration-500 p-8 md:p-12 text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 via-transparent to-fuchsia-500/5 opacity-50" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-cyan-300 mb-8 flex items-center gap-4">
                  <span 
                    className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-glow-cyan"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span> 
                  AI System
                </h3>
                <ul className="space-y-6 text-sm md:text-base text-slate-300" role="list">
                  {aiPoints.map((content, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <svg className="w-5 h-5 mt-0.5 text-cyan-500/60 group-hover/item:text-cyan-400 shrink-0 transition-colors shadow-glow-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed group-hover/item:text-white transition-colors">{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
