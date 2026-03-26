import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const steps = [
  {
    num: "1",
    title: "Daftar Akun Trading",
    desc: (
      <>
        Registrasi di broker partner resmi kami lewat link yang disediakan. Pastikan akun Anda terverifikasi (KYC) agar aman saat deposit & withdrawal.
      </>
    ),
    containerClass: "bg-[#0c0c0c] border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]",
    numberClass: "text-slate-400 bg-space-900 border-white/10 shadow-lg",
    top: "top-[10vh] md:top-[15vh]",
    zIndex: "z-10",
    delay: 0
  },
  {
    num: "2",
    title: "Konfirmasi & Akses VIP",
    desc: (
      <>
        Kirimkan ID akun trading Anda ke admin untuk verifikasi. Setelah valid, Anda akan langsung dimasukkan ke channel <em className="text-yellow-500 not-italic font-medium">Telegram VIP Gold Pulse</em>.
      </>
    ),
    containerClass: "bg-[#121212] border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]",
    numberClass: "text-yellow-500 bg-space-900 border-yellow-500/20 shadow-glow-gold",
    top: "top-[13vh] md:top-[18vh]",
    zIndex: "z-20",
    delay: 100
  },
  {
    num: "3",
    title: "Copy Signal & Cuan",
    desc: (
      <>
        Nyalakan notifikasi Telegram. Saat signal masuk, segera entry di MT4/MT5 Anda sesuai instruksi. Pasang TP/SL, dan biarkan market bekerja. <em className="text-green-400 not-italic font-medium">Withdraw profitnya</em>.
      </>
    ),
    containerClass: "bg-gradient-to-r from-space-900 to-yellow-950/30 border-yellow-500/30 shadow-glow-gold",
    numberClass: "text-black bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-glow-gold font-bold",
    top: "top-[16vh] md:top-[21vh]",
    zIndex: "z-30",
    delay: 200
  }
];

export default function HowItWorks() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      className="py-24 md:py-32 relative z-10 bg-[#0a0f1c] overflow-hidden" 
      id="cara-kerja" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.02)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={cn(
            "text-center max-w-3xl mx-auto mb-16 md:mb-24 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-[1.15]"
          >
            3 Langkah Mudah Menuju <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
              Profit Konsisten
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400">
            Tanpa ribet, tanpa biaya tersembunyi. Mulai trading dengan panduan profesional hari ini juga.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto pb-24 md:pb-32 space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div 
              key={step.num}
              className={cn(
                "sticky transition-all duration-1000 transform",
                step.top,
                step.zIndex,
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div 
                className={cn(
                  "border rounded-[2rem] p-8 md:p-12 transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden",
                  step.containerClass
                )}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 relative z-10">
                  <div 
                    className={cn(
                      "w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border-2 font-heading font-black text-2xl md:text-3xl rounded-2xl md:rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2",
                      step.numberClass
                    )}
                  >
                    {step.num}
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-yellow-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 md:text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}