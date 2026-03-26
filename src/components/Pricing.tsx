import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Pricing() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10 bg-[#0a0f1c]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-20 fade-up", isVisible && "is-visible")}>
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Kenapa Harus Bayar Mahal?</h2>
          <p className="text-lg text-slate-400">Stop buang uang untuk biaya membership. Gunakan uang Anda untuk modal trading.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className={cn("bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-md fade-up relative overflow-hidden", isVisible && "is-visible")}>
            <h3 className="text-xl font-bold text-slate-400 mb-2">Mentor / Grup VIP Lain</h3>
            <div className="space-y-6 mt-8">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-300 text-sm">Biaya Join Awal</span>
                <span className="font-semibold text-red-400">Rp 5.000.000+</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-300 text-sm">Langganan Bulanan</span>
                <span className="font-semibold text-red-400">Rp 500.000/bln</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-300 text-sm">E-Book & Materi</span>
                <span className="font-semibold text-red-400">Bayar Terpisah</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-white">Total Biaya Hangus</span>
                <span className="font-bold text-red-500 text-xl">~ Rp 10 Juta+</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="inline-block px-4 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">MAHAL & BERISIKO</span>
            </div>
          </div>

          <div className={cn("bg-gradient-to-b from-yellow-900/20 to-black p-10 rounded-[2rem] border border-yellow-500/50 shadow-[0_0_50px_-10px_rgba(234,179,8,0.2)] relative transform md:scale-105 fade-up", isVisible && "is-visible")} style={{ transitionDelay: '100ms' }}>
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Best Value</div>
            <h3 className="text-3xl font-heading font-bold text-white mb-2">Gold Pulse VIP</h3>
            <p className="text-yellow-500 text-sm">Full Akses Seumur Hidup.</p>
            
            <ul className="space-y-5 mt-8 text-slate-300 text-sm">
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <strong className="text-white">GRATIS</strong> Biaya Pendaftaran</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <strong className="text-white">GRATIS</strong> Signal Harian Premium</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <strong className="text-white">GRATIS</strong> Edukasi & Webinar</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Modal 100% Masuk ke Akun Anda</li>
            </ul>

            <div className="mt-10 pt-8 border-t border-yellow-500/20 text-center">
              <p className="text-slate-400 text-xs mb-6 uppercase tracking-widest">Syarat: Daftar di Broker Partner Kami</p>
              <div className="magnetic-wrap w-full">
                <a href="#join-group" className="magnetic-btn block w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl text-lg hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                  <span className="magnetic-text">Ambil Slot Gratis Saya</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}