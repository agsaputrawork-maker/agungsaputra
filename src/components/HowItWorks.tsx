import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const steps = [
  {
    num: "1",
    title: "Konsultasi & Blueprint",
    desc: (
      <>
        Kita bedah alur bisnis Anda lewat Zoom. Saya merancang arsitektur sistem otomatisasi dan menyiapkan <em className="text-white not-italic font-medium">copywriting</em> yang memicu konversi.
      </>
    ),
    containerClass: "bg-[#0c0c0c] border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]",
    numberClass: "text-cyan-400 bg-space-900 border-white/10 shadow-glow-cyan",
    top: "top-[10vh] md:top-[15vh]",
    zIndex: "z-10",
    delay: 0
  },
  {
    num: "2",
    title: "Development & AI Training",
    desc: (
      <>
        Saya membangun <em className="text-white not-italic font-medium">Landing Page</em> premium dan "menyekolahkan" AI dengan <em className="text-white not-italic font-medium">knowledge base</em> bisnis Anda agar merespons secara akurat dan bernada manusia.
      </>
    ),
    containerClass: "bg-[#121212] border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]",
    numberClass: "text-fuchsia-400 bg-space-900 border-white/10 shadow-glow-purple",
    top: "top-[13vh] md:top-[18vh]",
    zIndex: "z-20",
    delay: 100
  },
  {
    num: "3",
    title: "Launch & Profit",
    desc: (
      <>
        Sistem berjalan otomatis 24/7. Anda tinggal memantau notifikasi <em className="text-white not-italic font-medium">sales</em> dan transferan masuk dari <em className="text-white not-italic font-medium">dashboard</em> atau layar HP Anda.
      </>
    ),
    containerClass: "bg-gradient-to-r from-space-900 to-cyan-950/30 border-cyan-500/30 shadow-glow-cyan",
    numberClass: "text-white bg-gradient-to-br from-cyan-400 to-blue-600 shadow-glow-cyan",
    top: "top-[16vh] md:top-[21vh]",
    zIndex: "z-30",
    delay: 200
  }
];

export default function HowItWorks() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      className="py-24 md:py-32 relative z-10 bg-space-800 overflow-hidden" 
      id="cara-kerja" 
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={cn(
            "text-center max-w-3xl mx-auto mb-16 md:mb-24 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 
            id="how-it-works-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-[1.15]"
          >
            Terima Beres. Anda Fokus Bisnis, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Saya Urus Teknisnya.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400">
            Proses kerja <em>Done-For-You</em> yang transparan dan anti-ribet.
          </p>
        </div>

        <ol className="relative max-w-4xl mx-auto pb-24 md:pb-32" role="list">
          {steps.map((step, index) => (
            <li 
              key={step.num}
              className={cn(
                "sticky pt-4 transition-all duration-1000 transform",
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
                      "w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border font-heading font-black text-2xl md:text-3xl rounded-2xl md:rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2",
                      step.numberClass
                    )}
                    aria-hidden="true"
                  >
                    {step.num}
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-slate-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 md:text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
