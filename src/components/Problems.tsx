import React from 'react';
import BentoCard from './BentoCard';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Problems() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden bg-[#0a0f1c]" id="masalah" ref={sectionRef}>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className={cn("max-w-3xl mx-auto text-center mb-16 md:mb-24 transition-all duration-1000 transform opacity-0 translate-y-12", isVisible && "opacity-100 translate-y-0")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Realita Trader Pemula
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.15] tracking-tight mb-6">
            Sering "Senam Jantung" & Berakhir <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-yellow-500">
              Margin Call (MC)?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Market Gold (XAUUSD) sangat agresif. Tanpa strategi yang valid, modal Anda bisa lenyap dalam hitungan menit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <BentoCard className={cn("p-8 group relative overflow-hidden transition-all duration-700 opacity-0 translate-y-8 hover:bg-white/[0.02] hover:border-red-500/30", isVisible && "opacity-100 translate-y-0")}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/20 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-500">
              <svg className="w-7 h-7 text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-red-100 transition-colors">Psikologi & Emosi Hancur</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
              Terjebak FOMO saat harga terbang, panik Cut Loss di pucuk, atau nekat 'balas dendam' setelah loss. Trading dengan emosi adalah jalan tol menuju kebangkrutan.
            </p>
          </BentoCard>

          <BentoCard delay={100} className={cn("p-8 group relative overflow-hidden transition-all duration-700 opacity-0 translate-y-8 hover:bg-white/[0.02] hover:border-red-500/30", isVisible && "opacity-100 translate-y-0")}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/20 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-500">
              <svg className="w-7 h-7 text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-red-100 transition-colors">Waktu Terbuang Sia-sia</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
              Melototi chart berjam-jam, mengganggu pekerjaan utama, tapi malah entry saat market sideways. Lelah fisik dan mental, namun hasil tetap minus.
            </p>
          </BentoCard>

          <BentoCard delay={200} className={cn("p-8 group relative overflow-hidden transition-all duration-700 opacity-0 translate-y-8 hover:bg-white/[0.02] hover:border-red-500/30", isVisible && "opacity-100 translate-y-0")}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/20 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-500">
              <svg className="w-7 h-7 text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-red-100 transition-colors">Buta Arah Market</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
              Entry Buy di resistance, Sell di support. Tidak paham struktur market M5. Trading hanya berdasarkan tebak-tebakan (judi) tanpa analisa teknikal yang jelas.
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}