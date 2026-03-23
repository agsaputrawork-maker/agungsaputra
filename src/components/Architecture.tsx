import React from 'react';
import BentoCard from './BentoCard';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function Architecture() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn("text-center max-w-2xl mx-auto mb-20 fade-up", isVisible && "is-visible")}>
                <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-xs mb-4 block">Arsitektur Sistem</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Sistem Apa yang Akan Saya Bangun Untuk Anda?</h2>
                <p className="text-slate-400 text-lg">Solusi <em>Done-For-You</em>. Anda fokus pada ekspansi, biarkan AI yang mengeksekusi operasional teknis di belakang layar.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                
                <BentoCard className={cn("md:col-span-2 p-10 flex flex-col justify-between", isVisible && "is-visible")}>
                    <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                        <div className="w-full md:w-1/2">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/20">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-4">1. Custom AI Sales Agent</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">Bukan <em>chatbot</em> kaku. AI ini di-training dengan <strong>brand voice</strong> bisnis Anda. Mampu melakukan negosiasi, <em>handling objection</em>, dan menggiring prospek ke pembelian layaknya Sales SuperStar.</p>
                            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400"><span className="w-2 h-2 rounded-full bg-cyan-500 shadow-glow-cyan animate-pulse"></span> Respons 3 Detik (Konversi Meroket)</div>
                        </div>
                        <div className="w-full md:w-1/2 h-full bg-space-900/50 rounded-2xl border border-white/5 p-4 flex flex-col justify-end relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-fuchsia-500/20 blur-2xl rounded-full"></div>
                            <div className="bg-white/5 border border-white/5 p-3 rounded-xl text-xs text-slate-300 mb-3 self-start max-w-[85%]">"Bisa kurang harganya?"</div>
                            <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-500/30 p-3 rounded-xl text-xs text-white self-end max-w-[85%] relative z-10 shadow-glow-cyan">"Tentu, khusus pengambilan jumlah besar kami ada Corporate Rate diskon 15%. Mau saya buatkan invoice-nya?"</div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className={cn("p-10 flex flex-col", isVisible && "is-visible")} delay={100}>
                    <div className="w-12 h-12 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center mb-6 border border-white/10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">Operasional Autopilot 24/7</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Sistem terus melayani pelanggan dan memproses pesanan tanpa cuti, libur, atau tidur. Tidur nyenyak, bisnis tetap jalan.</p>
                </BentoCard>

                <BentoCard className={cn("p-10 flex flex-col", isVisible && "is-visible")} delay={200}>
                    <div className="w-12 h-12 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center mb-6 border border-white/10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">2. Modern Website CRO</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Bukan cuma bot, tapi Landing Page premium super cepat (terlihat ultra-profesional) yang dirancang secara psikologis untuk mengubah pengunjung jadi pembeli.</p>
                </BentoCard>

                <BentoCard className={cn("md:col-span-2 p-10 flex flex-col justify-between", isVisible && "is-visible")} delay={300}>
                    <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-heading font-bold text-white mb-4">3. Seamless Automation</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">Tidak perlu login banyak aplikasi. Sistem menyatukan semuanya. Notifikasi <em>hot leads</em> dan pembayaran masuk langsung ke WhatsApp / HP Anda secara instan.</p>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-400 opacity-90" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-cyan-400">+</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
                            <div className="w-full h-full border border-white/10 rounded-2xl bg-gradient-to-br from-space-800 to-space-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent rotate-45 animate-pulse-slow"></div>
                                <div className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent -rotate-45 animate-pulse-slow"></div>
                                <div className="w-16 h-16 rounded-full bg-space-900 border border-white/20 z-10 flex items-center justify-center shadow-glow-purple">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard className={cn("md:col-span-3 p-10 bg-gradient-to-r from-space-800 via-cyan-950/20 to-space-800 flex flex-col md:flex-row items-center justify-between", isVisible && "is-visible")} delay={400}>
                    <div className="max-w-2xl mb-6 md:mb-0">
                        <h3 className="text-2xl font-heading font-bold text-white mb-2">Hemat Ratusan Juta Rupiah (ROI)</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Gantikan biaya gaji bulanan, THR, dan sewa software terpisah dengan satu investasi cerdas di awal. Margin profit bisnis Anda menjadi jauh lebih sehat dan terukur.</p>
                    </div>
                    <div className="magnetic-wrap">
                        <a href="#cta" className="magnetic-btn inline-flex px-8 py-4 bg-white text-space-900 font-bold rounded-full text-sm">
                            <span className="magnetic-text">Tingkatkan Margin Profit</span>
                        </a>
                    </div>
                </BentoCard>

            </div>
        </div>
    </section>
  );
}
