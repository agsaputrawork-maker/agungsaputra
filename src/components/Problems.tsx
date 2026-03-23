import React from 'react';
import BentoCard from './BentoCard';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Problems() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden" id="masalah" ref={sectionRef}>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className={cn("max-w-3xl mx-auto text-center mb-16 md:mb-24 transition-all duration-1000 transform opacity-0 translate-y-12", isVisible && "opacity-100 translate-y-0")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/5 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Titik Kritis Bisnis
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.15] tracking-tight mb-6">
            Pernah menghitung berapa banyak <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-500 to-rose-400">
              uang yang hilang
            </span> saat Anda tidur?
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Sistem manual adalah pembunuh senyap bagi omzet bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <BentoCard className={cn("p-8 group relative overflow-hidden transition-all duration-700 opacity-0 translate-y-8 hover:bg-white/[0.02] hover:border-rose-500/30", isVisible && "opacity-100 translate-y-0")}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 border border-rose-500/20 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] transition-all duration-500">
              <svg className="w-7 h-7 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-rose-100 transition-colors">CS Lambat & Human Error</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
              Prospek membandingkan Anda dengan 3 kompetitor sekaligus. Balas telat 10 menit, mereka <em className="text-rose-400 not-italic font-medium">closing</em> di tempat lain. Belum lagi drama <em>typo</em> harga.
            </p>
          </BentoCard>

          <BentoCard delay={100} className={cn("p-8 group relative overflow-hidden transition-all duration-700 opacity-0 translate-y-8 hover:bg-white/[0.02] hover:border-rose-500/30", isVisible && "opacity-100 translate-y-0")}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 border border-rose-500/20 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] transition-all duration-500">
              <svg className="w-7 h-7 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-rose-100 transition-colors">Lost Sales Malam Hari</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
              Banyak pembeli B2B mencari solusi jam 10 malam. Tanpa tim responsif 24 jam, itu murni omzet yang menguap ke kompetitor.
            </p>
          </BentoCard>

          <BentoCard delay={200} className={cn("p-8 group relative overflow-hidden transition-all duration-700 opacity-0 translate-y-8 hover:bg-white/[0.02] hover:border-rose-500/30", isVisible && "opacity-100 translate-y-0")}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 border border-rose-500/20 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] transition-all duration-500">
              <svg className="w-7 h-7 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-rose-100 transition-colors">Biaya Operasional Membengkak</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
              Merekrut 3 shift CS untuk cover 24 jam berarti "membakar uang" puluhan juta tiap bulan untuk operasional yang sering tidak produktif.
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
