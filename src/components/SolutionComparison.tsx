import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const soloPoints = [
  "Analisa chart berjam-jam sampai mata lelah.",
  "Entry posisi berdasarkan tebak-tebakan (judi).",
  "Sering menggeser Stop Loss (SL) karena tidak rela rugi.",
  "Psikologi hancur sendirian saat floating minus."
];

const communityPoints = [
  <><strong className="text-white font-semibold">Tinggal Copy-Paste</strong> signal yang sudah matang.</>,
  "Entry, SL, & TP sudah dihitung dengan presisi.",
  <><strong className="text-white font-semibold">Disiplin Risk Management</strong> demi profit jangka panjang.</>,
  "Cuan bareng ratusan member, mental lebih sehat."
];

export default function SolutionComparison() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      className="py-24 relative z-10 border-y border-white/5 bg-[#0a0f1c] overflow-hidden" 
      id="solusi" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Berhenti Membakar Uang Anda. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Ubah Cara Trading Sekarang.
            </span>
          </h2>
          <p 
            className={cn(
              "text-lg text-slate-400 transition-all duration-700 delay-100 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Trading forex itu sulit jika sendirian. Lihat perbedaannya jika Anda bergabung dengan ekosistem Gold Pulse.
          </p>
        </div>

        <div 
          className={cn(
            "relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-1000 delay-200 transform group",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0a0f1c] border-2 border-white/10 rounded-full items-center justify-center text-slate-300 font-bold z-20 font-heading text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            VS
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-red-950/10 hover:bg-red-950/20 transition-colors duration-500 p-8 md:p-12 text-left border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-8 flex items-center gap-4">
                  <span 
                    className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span> 
                  Trading Solo
                </h3>
                <ul className="space-y-6 text-sm md:text-base text-slate-400">
                  {soloPoints.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <svg className="w-5 h-5 mt-0.5 text-red-500/40 group-hover/item:text-red-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed group-hover/item:text-slate-300 transition-colors">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-yellow-950/10 hover:bg-yellow-950/20 transition-colors duration-500 p-8 md:p-12 text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 via-transparent to-yellow-600/5 opacity-50" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-yellow-400 mb-8 flex items-center gap-4">
                  <span 
                    className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span> 
                  Gold Pulse Scalper
                </h3>
                <ul className="space-y-6 text-sm md:text-base text-slate-300">
                  {communityPoints.map((content, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <svg className="w-5 h-5 mt-0.5 text-yellow-500/60 group-hover/item:text-yellow-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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