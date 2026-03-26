import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const phrases = ["XAUUSD", "Scalping M5", "Profit Harian"];

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
    <section className="relative min-h-screen pt-32 pb-20 flex items-center z-10 overflow-hidden bg-[#0a0f1c]" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            <div className="max-w-2xl relative z-20">
                <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/5 border border-yellow-500/20 backdrop-blur-md text-sm font-medium text-yellow-400 mb-8 fade-up", isHeroVisible && "is-visible")}>
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    Signal Trading Gold Akurasi Tinggi
                </div>
                
                <h1 className={cn("text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tighter mb-6 fade-up delay-100", isHeroVisible && "is-visible")} style={{ transitionDelay: '100ms' }}>
                    Raih Profit Konsisten di Market Gold dengan <br className="hidden lg:block" />
                    <span className="text-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-500 min-h-[1em] inline-block">
                        {text}
                    </span>
                    <span className="text-yellow-500 animate-pulse">|</span>
                </h1>
                
                <p className={cn("text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light fade-up max-w-xl delay-200", isHeroVisible && "is-visible")} style={{ transitionDelay: '200ms' }}>
                    Gabung komunitas <strong className="text-yellow-400 font-medium">Gold Pulse Scalper</strong> gratis. Dapatkan panduan entry & exit XAUUSD timeframe M5 yang presisi. Cocok untuk pemula yang ingin cuan tanpa analisa chart seharian.
                </p>
                
                <div className={cn("flex flex-col sm:flex-row gap-5 mb-10 fade-up delay-300", isHeroVisible && "is-visible")} style={{ transitionDelay: '300ms' }}>
                    <div className="magnetic-wrap">
                        <a href="#join-group" className="magnetic-btn inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)]">
                            <span className="magnetic-text">Join Group Gratis</span>
                        </a>
                    </div>
                    <a href="#result" className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 backdrop-blur-sm transition-all text-lg group">
                        Lihat History Profit <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </a>
                </div>
                
                <div className={cn("flex items-center gap-4 text-sm text-slate-500 fade-up delay-400", isHeroVisible && "is-visible")} style={{ transitionDelay: '400ms' }}>
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-[#0a0f1c] object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="Trader" />
                        <img className="w-10 h-10 rounded-full border-2 border-[#0a0f1c] object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80" alt="Trader" />
                        <div className="w-10 h-10 rounded-full border-2 border-[#0a0f1c] bg-slate-800 flex items-center justify-center text-xs text-yellow-400 font-bold">+2k</div>
                    </div>
                    <p>Trader aktif profit setiap hari di dalam grup.</p>
                </div>
            </div>

            <div className={cn("relative lg:h-[600px] flex items-center justify-center z-20 fade-up delay-500", isHeroVisible && "is-visible")} style={{ transitionDelay: '500ms' }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-red-600/10 blur-3xl rounded-full mix-blend-screen"></div>
                
                <div className="relative w-full max-w-md bg-[#0f172a]/80 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] animate-float">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-slate-800 to-black border border-yellow-500/30 flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-white leading-tight">Gold Pulse VIP</h3>
                                <p className="text-xs text-yellow-500/80 font-medium tracking-wide">LIVE SIGNAL • XAUUSD</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-5 text-sm">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-slate-300 text-xs font-medium border border-white/5">U</div>
                            <div className="bg-slate-800/50 border border-white/5 p-4 rounded-2xl rounded-tl-none text-slate-300 leading-relaxed backdrop-blur-md">
                                Coach, market sesi New York malam ini ada setup Buy? <span className="block text-[10px] text-slate-500 mt-2">19:30 PM</span>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 flex-row-reverse opacity-50">
                            <div className="bg-slate-800/80 border border-yellow-500/20 text-yellow-100 p-3 rounded-2xl rounded-tr-none flex items-center gap-2">
                                <div className="text-xs text-slate-400 italic">Typing signal...</div>
                                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
                                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-150"></div>
                                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-row-reverse relative">
                            <div className="absolute -left-8 top-12 bg-[#0a0f1c] border border-green-500/30 backdrop-blur-xl p-3 rounded-xl shadow-xl animate-float-delayed flex items-center gap-3 z-10">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Result</p>
                                    <p className="text-sm font-bold text-white">TP 1 HIT <span className="text-green-400">+40 Pips</span></p>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex-shrink-0 flex items-center justify-center text-black text-xs font-bold shadow-lg shadow-yellow-500/20">GP</div>
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-yellow-500/30 text-white p-0 rounded-2xl rounded-tr-none shadow-lg overflow-hidden w-full">
                                <div className="bg-yellow-500/10 p-3 border-b border-yellow-500/10 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Signal Alert</span>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-end mb-2">
                                        <h4 className="font-bold text-lg">XAUUSD</h4>
                                        <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-bold border border-green-500/20">BUY NOW</span>
                                    </div>
                                    <div className="space-y-1 text-sm font-mono text-slate-300">
                                        <div className="flex justify-between"><span>Entry:</span> <span className="text-white">2024.50 - 2022.00</span></div>
                                        <div className="flex justify-between text-red-400"><span>SL:</span> <span>2019.00</span></div>
                                        <div className="flex justify-between text-green-400"><span>TP 1:</span> <span>2028.50</span></div>
                                        <div className="flex justify-between text-green-400"><span>TP 2:</span> <span>2035.00</span></div>
                                    </div>
                                    <span className="block text-[10px] text-slate-500 mt-3 text-right">19:32 PM</span>
                                </div>
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