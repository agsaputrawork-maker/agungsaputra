import React from 'react';
import BentoCard from './BentoCard';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Testimonials() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10 bg-space-900" id="hasil" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-20 fade-up", isVisible && "is-visible")}>
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Bukti Nyata, Bukan Sekadar Teori.</h2>
          <p className="text-lg text-slate-400">Klien yang telah mengotomatisasi mesin pencetak uang mereka.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BentoCard className={cn("p-8 flex flex-col justify-between", isVisible && "is-visible")}>
            <div className="bento-content">
              <div className="flex gap-1 mb-6 text-fuchsia-500">
                ★ ★ ★ ★ ★
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <p className="text-rose-400"><span className="font-semibold text-white">Masalah:</span> Kehilangan omzet B2B malam hari.</p>
                <p className="text-cyan-400"><span className="font-semibold text-white">Solusi:</span> AI Sales Agent.</p>
                <p className="text-slate-300 italic">"Bangun tidur tinggal cek mutasi. AI-nya cerdas, bantu klien pilih paket harga tanpa kelihatan seperti robot. ROI bulan pertama nutup biaya pembuatan!"</p>
              </div>
            </div>
            <div className="bento-content border-t border-white/10 pt-4">
              <p className="font-bold text-white">Budi Pratama</p>
              <p className="text-xs text-slate-500">Founder, TechNesia</p>
            </div>
          </BentoCard>

          <BentoCard className={cn("p-8 flex flex-col justify-between", isVisible && "is-visible")} delay={100}>
            <div className="bento-content">
              <div className="flex gap-1 mb-6 text-fuchsia-500">
                ★ ★ ★ ★ ★
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <p className="text-rose-400"><span className="font-semibold text-white">Masalah:</span> Conversion rate web di bawah 1%.</p>
                <p className="text-cyan-400"><span className="font-semibold text-white">Solusi:</span> CRO Web + Webhook.</p>
                <p className="text-slate-300 italic">"Mas Agung ngerti psikologi orang beli. Web baru ini loadingnya ngebut, copy-nya nendang, dan otomatis kirim notif ke WA tiap ada lead masuk."</p>
              </div>
            </div>
            <div className="bento-content border-t border-white/10 pt-4">
              <p className="font-bold text-white">Sarah Wijaya</p>
              <p className="text-xs text-slate-500">Dir. Marketing, Optima Corp</p>
            </div>
          </BentoCard>

          <BentoCard className={cn("p-8 flex flex-col justify-between", isVisible && "is-visible")} delay={200}>
            <div className="bento-content">
              <div className="flex gap-1 mb-6 text-fuchsia-500">
                ★ ★ ★ ★ ★
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <p className="text-rose-400"><span className="font-semibold text-white">Masalah:</span> Gaji 3 admin bengkak, human error tinggi.</p>
                <p className="text-cyan-400"><span className="font-semibold text-white">Solusi:</span> Full AI Operational.</p>
                <p className="text-slate-300 italic">"Terima kasih banget! Biaya CS hemat drastis. AI-nya konsisten dan nggak pernah komplain. Tim manusia sekarang fokus hal strategis."</p>
              </div>
            </div>
            <div className="bento-content border-t border-white/10 pt-4">
              <p className="font-bold text-white">David Hermawan</p>
              <p className="text-xs text-slate-500">Owner, Sinergi Retail</p>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
