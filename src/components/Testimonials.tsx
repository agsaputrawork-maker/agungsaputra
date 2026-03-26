import React from 'react';
import BentoCard from './BentoCard';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Testimonials() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10 bg-[#0a0f1c]" id="testimoni" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-20 fade-up", isVisible && "is-visible")}>
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Bukti Withdrawal, Bukan Omong Kosong.</h2>
          <p className="text-lg text-slate-400">Kata mereka yang sudah berhenti deposit terus-menerus dan mulai menarik profit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BentoCard className={cn("p-8 flex flex-col justify-between border-white/5 hover:border-yellow-500/30", isVisible && "is-visible")}>
            <div className="bento-content">
              <div className="flex gap-1 mb-6 text-yellow-500">
                ★ ★ ★ ★ ★
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <p className="text-red-400"><span className="font-semibold text-white">Sebelum Join:</span> Sering Margin Call (MC) & FOMO.</p>
                <p className="text-green-400"><span className="font-semibold text-white">Sekarang:</span> Profit Harian $30 - $50 Stabil.</p>
                <p className="text-slate-300 italic">"Dulu asal liat candle hijau langsung buy, ujungnya nyangkut di pucuk. Di Gold Pulse diajarin sabar nunggu area supply. Winrate signal-nya ngeri, TP 2 sering banget kejemput."</p>
              </div>
            </div>
            <div className="bento-content border-t border-white/10 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">R</div>
              <div>
                <p className="font-bold text-white">Rian Santoso</p>
                <p className="text-xs text-slate-500">Trader Pemula (3 Bulan)</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className={cn("p-8 flex flex-col justify-between border-white/5 hover:border-yellow-500/30", isVisible && "is-visible")} delay={100}>
            <div className="bento-content">
              <div className="flex gap-1 mb-6 text-yellow-500">
                ★ ★ ★ ★ ★
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <p className="text-red-400"><span className="font-semibold text-white">Sebelum Join:</span> Sibuk kerja, gak sempat analisa.</p>
                <p className="text-green-400"><span className="font-semibold text-white">Sekarang:</span> Passive Income dari Copy Signal.</p>
                <p className="text-slate-300 italic">"Saya karyawan, gak bisa pantengin chart seharian. Fitur notifikasi signal-nya ngebantu banget. Tinggal pasang angka Entry, SL, TP sesuai instruksi admin, ditinggal kerja tau-tau profit."</p>
              </div>
            </div>
            <div className="bento-content border-t border-white/10 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">D</div>
              <div>
                <p className="font-bold text-white">Diana Putri</p>
                <p className="text-xs text-slate-500">Karyawan Swasta</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className={cn("p-8 flex flex-col justify-between border-white/5 hover:border-yellow-500/30", isVisible && "is-visible")} delay={200}>
            <div className="bento-content">
              <div className="flex gap-1 mb-6 text-yellow-500">
                ★ ★ ★ ★ ★
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <p className="text-red-400"><span className="font-semibold text-white">Sebelum Join:</span> Gagal terus Challenge Prop Firm.</p>
                <p className="text-green-400"><span className="font-semibold text-white">Sekarang:</span> Funded Trader $10k.</p>
                <p className="text-slate-300 italic">"Risk Reward Ratio (RR) di grup ini sehat banget, minimal 1:2. Makanya akun tumbuh pelan tapi pasti. Akhirnya bulan lalu lulus fase evaluasi prop firm berkat signal Gold Pulse."</p>
              </div>
            </div>
            <div className="bento-content border-t border-white/10 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">A</div>
              <div>
                <p className="font-bold text-white">Aditya Nugraha</p>
                <p className="text-xs text-slate-500">Full-time Trader</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}