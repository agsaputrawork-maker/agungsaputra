import React from 'react';
import BentoCard from './BentoCard';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Architecture() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10 bg-[#0a0f1c]" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn("text-center max-w-2xl mx-auto mb-20 fade-up", isVisible && "is-visible")}>
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-4 block">Ekosistem Trading</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Apa yang Anda Dapatkan di Dalam Grup?</h2>
                <p className="text-slate-400 text-lg">Bukan sekadar signal, tapi sebuah sistem trading lengkap. Anda terima beres, tinggal eksekusi sesuai instruksi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                
                <BentoCard className={cn("md:col-span-2 p-10 flex flex-col justify-between group", isVisible && "is-visible")}>
                    <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                        <div className="w-full md:w-1/2">
                            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6 border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-4">1. High-Accurate Signals</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">Signal XAUUSD (Gold) harian dengan probabilitas tinggi. Dilengkapi area <strong>Entry, Stop Loss (SL), dan Take Profit (TP) 1-3</strong> yang jelas. Tidak ada signal ambigu atau "ghosting" saat loss.</p>
                            <div className="flex items-center gap-2 text-xs font-medium text-yellow-500"><span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></span> Win Rate Stabil 70-80%</div>
                        </div>
                        <div className="w-full md:w-1/2 h-full bg-[#050505]/50 rounded-2xl border border-white/5 p-4 flex flex-col justify-center relative overflow-hidden group-hover:border-yellow-500/30 transition-colors duration-500">
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full"></div>
                            
                            <div className="space-y-3 relative z-10">
                                <div className="flex justify-between items-center text-xs text-slate-400 font-mono border-b border-white/5 pb-2">
                                    <span>XAUUSD</span>
                                    <span className="text-green-400">BUY NOW</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300">Entry</span>
                                    <span className="text-white font-bold">2030.50</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300">SL</span>
                                    <span className="text-red-400 font-bold">2027.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300">TP 2</span>
                                    <span className="text-green-400 font-bold">2038.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className={cn("p-10 flex flex-col group", isVisible && "is-visible")} delay={100}>
                    <div className="w-12 h-12 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center mb-6 border border-white/10 group-hover:text-yellow-500 group-hover:border-yellow-500/30 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">Edukasi Teknikal</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Belajar cara analisa market sederhana tapi powerfull. Pahami struktur market, Supply Demand, dan konfirmasi candlestick sebelum entry.</p>
                </BentoCard>

                <BentoCard className={cn("p-10 flex flex-col group", isVisible && "is-visible")} delay={200}>
                    <div className="w-12 h-12 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center mb-6 border border-white/10 group-hover:text-red-500 group-hover:border-red-500/30 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">Risk Management</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Rumus menghitung Lot size yang aman sesuai saldo akun. Menjaga psikologi agar tidak MC meski terkena Stop Loss beberapa kali.</p>
                </BentoCard>

                <BentoCard className={cn("md:col-span-2 p-10 flex flex-col justify-between group", isVisible && "is-visible")} delay={300}>
                    <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-heading font-bold text-white mb-4">2. Live Trading Session</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">Trading bareng mentor saat momen news besar (NFP, CPI, FOMC). Rasakan sensasi profit ribuan persen saat market bergerak ekstrem dalam hitungan detik.</p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-xs font-bold text-slate-300">High Impact News</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                    <span className="text-xs font-bold text-slate-300">Scalping M1</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
                            <div className="w-full h-32 border border-white/10 rounded-2xl bg-[#0a0f1c] flex items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-all">
                                {/* Simulated Chart Line */}
                                <svg className="w-full h-full absolute inset-0 text-yellow-500/20" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <path fill="currentColor" d="M0 50 L0 30 L10 25 L20 35 L30 15 L40 25 L50 10 L60 20 L70 5 L80 15 L90 5 L100 20 L100 50 Z" />
                                </svg>
                                <svg className="w-full h-full absolute inset-0 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <path d="M0 30 L10 25 L20 35 L30 15 L40 25 L50 10 L60 20 L70 5 L80 15 L90 5 L100 20" />
                                </svg>
                                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>
                                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0f1c]"></div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className={cn("md:col-span-3 p-10 bg-gradient-to-r from-slate-900 via-yellow-950/20 to-slate-900 flex flex-col md:flex-row items-center justify-between group border-yellow-500/10 hover:border-yellow-500/30 transition-colors", isVisible && "is-visible")} delay={400}>
                    <div className="max-w-2xl mb-6 md:mb-0">
                        <h3 className="text-2xl font-heading font-bold text-white mb-2">100% Gratis Selamanya</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Tanpa biaya langganan bulanan. Cukup daftar akun trading melalui link partnership kami untuk mendapatkan akses premium seumur hidup.</p>
                    </div>
                    <div className="magnetic-wrap">
                        <a href="#join-group" className="magnetic-btn inline-flex px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-sm hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                            <span className="magnetic-text">Ambil Akses Gratis</span>
                        </a>
                    </div>
                </BentoCard>

            </div>
        </div>
    </section>
  );
}