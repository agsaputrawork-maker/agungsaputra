import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Pricing() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-20 fade-up", isVisible && "is-visible")}>
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Investasi yang Membayar Dirinya Sendiri.</h2>
          <p className="text-lg text-slate-400">Berapa banyak uang yang Anda buang tiap tahun untuk sistem usang?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className={cn("bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-md fade-up", isVisible && "is-visible")}>
            <h3 className="text-xl font-bold text-slate-400 mb-2">Biaya Cara Lama (Tahunan)</h3>
            <div className="space-y-6 mt-8">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-300 text-sm">Gaji 3 Admin/CS (24 Jam)</span>
                <span className="font-semibold text-rose-400">Rp 100+ Jt</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-300 text-sm">Web Developer Terpisah</span>
                <span className="font-semibold text-rose-400">Rp 15+ Jt</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-300 text-sm">Otomasi Bulanan</span>
                <span className="font-semibold text-rose-400">Rp 12+ Jt</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-white">Total Biaya/Tahun</span>
                <span className="font-bold text-rose-500 text-xl">~ Rp 127 Jt</span>
              </div>
            </div>
          </div>

          <div className={cn("bg-gradient-to-b from-[#0a192f] to-[#020c1b] p-10 rounded-[2rem] border border-cyan-500/30 shadow-glow-cyan relative transform md:scale-105 fade-up", isVisible && "is-visible")} style={{ transitionDelay: '100ms' }}>
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-glow-cyan">Investasi Pintar</div>
            <h3 className="text-3xl font-heading font-bold text-white mb-2">Custom AI System</h3>
            <p className="text-cyan-400 text-sm">Paket <em>All-in-One</em> khusus bisnis Anda.</p>
            
            <ul className="space-y-5 mt-8 text-slate-300 text-sm">
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom Trained AI Sales Agent</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> CRO-Optimized Landing Page</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Seamless Automation Integrations</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <strong className="text-white">Lifetime Asset (Tanpa Gaji Bulanan)</strong></li>
            </ul>

            <div className="mt-10 pt-8 border-t border-cyan-500/20 text-center">
              <p className="text-slate-400 text-xs mb-6 uppercase tracking-widest">Satu Kali Setup + Hemat Selamanya</p>
              <div className="magnetic-wrap w-full">
                <a href="#cta" className="magnetic-btn block w-full px-6 py-4 bg-white text-space-900 font-bold rounded-xl text-lg hover:scale-[1.02] transition-transform">
                  <span className="magnetic-text">Minta Penawaran Kustom</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
