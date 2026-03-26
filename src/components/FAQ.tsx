import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function FAQ() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10 bg-[#0a0f1c]" id="faq" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16 fade-up", isVisible && "is-visible")}>
          <h2 className="text-4xl font-heading font-bold text-white">Pertanyaan Sering Diajukan</h2>
          <p className="text-slate-400 mt-4">Jawaban cepat untuk keraguan Anda sebelum bergabung.</p>
        </div>

        <div className={cn("space-y-4 fade-up", isVisible && "is-visible")} style={{ transitionDelay: '100ms' }}>
          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm open:bg-white/[0.07] open:border-yellow-500/30 transition-all duration-300" open>
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white select-none">
              <span>Apakah grup ini benar-benar 100% Gratis?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-yellow-500">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2">
              Ya, <strong>gratis seumur hidup</strong> tanpa biaya langganan bulanan. Kami menggunakan sistem <em>Partnership (IB)</em> resmi dengan broker. Anda cukup mendaftar akun trading melalui link kami, dan komisi operasional kami dibayarkan oleh broker, bukan memotong saldo Anda.
            </div>
          </details>

          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm open:bg-white/[0.07] open:border-yellow-500/30 transition-all duration-300">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white select-none">
              <span>Berapa modal minimal untuk mulai trading?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-yellow-500">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2">
              Anda bisa mulai dengan deposit minimal broker (biasanya <strong>$10 - $50</strong>). Namun, untuk keamanan margin (Risk Management) yang ideal di pair XAUUSD, kami menyarankan modal awal <strong>$100</strong> agar bisa menahan volatilitas pasar dengan lebih tenang.
            </div>
          </details>

          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm open:bg-white/[0.07] open:border-yellow-500/30 transition-all duration-300">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white select-none">
              <span>Saya gaptek & pemula total, apakah bisa ikut?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-yellow-500">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2">
              Sangat bisa. Signal kami formatnya "Copy-Paste" angka. Kami juga menyediakan <strong>Video Panduan Dasar</strong>: cara instal MetaTrader, cara input Entry/SL/TP, dan cara menghitung lot. Admin juga siap membimbing via chat.
            </div>
          </details>

          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm open:bg-white/[0.07] open:border-yellow-500/30 transition-all duration-300">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white select-none">
              <span>Platform trading apa yang digunakan?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-yellow-500">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2">
              Kami menggunakan <strong>MetaTrader 4 (MT4)</strong> atau <strong>MetaTrader 5 (MT5)</strong> yang merupakan standar industri global. Aplikasi ini tersedia di Android, iOS, Windows, dan Mac.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}