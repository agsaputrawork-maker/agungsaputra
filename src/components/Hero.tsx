import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const phrases = ["AI 24/7", "Sistem"];

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [heroRef, isHeroVisible] = useIntersectionObserver();

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center z-10 overflow-hidden" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            <div className="max-w-2xl relative z-20">
                <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-cyan-400 mb-8 fade-up", isHeroVisible && "is-visible")}>
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Sistem AI Next-Gen untuk B2B & Retail
                </div>
                
                <h1 className={cn("text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tighter mb-6 fade-up delay-100", isHeroVisible && "is-visible")} style={{ transitionDelay: '100ms' }}>
                    Lipatgandakan Omzet 24/7 Tanpa Tambah Karyawan dengan <br className="hidden lg:block" />
                    <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 min-h-[1em] inline-block">
                        {text}
                    </span>
                    <span className="text-cyan-400 animate-pulse">|</span>
                </h1>
                
                <p className={cn("text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light fade-up max-w-xl delay-200", isHeroVisible && "is-visible")} style={{ transitionDelay: '200ms' }}>
                    Saya bantu bisnis Anda membangun <strong className="text-white font-medium">"Karyawan Digital"</strong> otomatis yang membalas chat prospek dalam 3 detik, mengurus operasional, dan mendatangkan <em>sales</em>—bahkan saat Anda tertidur.
                </p>
                
                <div className={cn("flex flex-col sm:flex-row gap-5 mb-10 fade-up delay-300", isHeroVisible && "is-visible")} style={{ transitionDelay: '300ms' }}>
                    <div className="magnetic-wrap">
                        <a href="#cta" className="magnetic-btn inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 bg-white text-space-900 font-bold rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                            <span className="magnetic-text">Bangun Sistem AI Saya</span>
                        </a>
                    </div>
                    <a href="#cara-kerja" className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 backdrop-blur-sm transition-all text-lg group">
                        Lihat Cara Kerja <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
                
                <div className={cn("flex items-center gap-4 text-sm text-slate-500 fade-up delay-400", isHeroVisible && "is-visible")} style={{ transitionDelay: '400ms' }}>
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-space-900 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="User" />
                        <img className="w-10 h-10 rounded-full border-2 border-space-900 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" alt="User" />
                        <div className="w-10 h-10 rounded-full border-2 border-space-900 bg-space-800 flex items-center justify-center text-xs text-white font-medium">+40</div>
                    </div>
                    <p>Telah mentransformasi bisnis UMKM & Startup.</p>
                </div>
            </div>

            <div className={cn("relative lg:h-[600px] flex items-center justify-center z-20 fade-up delay-500", isHeroVisible && "is-visible")} style={{ transitionDelay: '500ms' }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-3xl rounded-full mix-blend-screen"></div>
                
                <div className="relative w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] animate-float">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow-cyan">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-space-800 rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-white leading-tight">AI Agent System</h3>
                                <p className="text-xs text-cyan-400 font-medium tracking-wide">ONLINE & RESPONDING</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-5 text-sm">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-slate-300 text-xs font-medium border border-white/5">P</div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none text-slate-300 leading-relaxed backdrop-blur-md">
                                Halo, apakah layanan B2B premium masih tersedia? Saya butuh secepatnya untuk 50 user. <span className="block text-[10px] text-slate-500 mt-2">02:15 AM</span>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 flex-row-reverse opacity-50">
                            <div className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-100 p-3 rounded-2xl rounded-tr-none shadow-glow-cyan flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-400" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-row-reverse relative">
                            <div className="absolute -left-12 top-4 bg-space-800/90 border border-white/10 backdrop-blur-xl p-3 rounded-xl shadow-xl animate-float-delayed flex items-center gap-2 z-10">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                <div className="text-xs font-medium">
                                    <p className="text-white">Deal Closed</p>
                                    <p className="text-green-400">Rp 15.000.000</p>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-glow-cyan">AI</div>
                            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-white p-4 rounded-2xl rounded-tr-none shadow-glow-cyan leading-relaxed backdrop-blur-md">
                                Halo! Layanan premium B2B tersedia. Khusus 50 user, Anda mendapat <strong>Corporate Rate diskon 15%</strong>. Invoice draft telah saya siapkan. Lanjut proses? 🚀 <span className="block text-[10px] text-cyan-300/70 mt-2">02:15:03 AM (Resp: 3s)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
