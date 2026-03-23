import React from 'react';

export default function Logos() {
  const logos = [
    {
      name: 'TechNesia',
      icon: (
        <svg className="w-8 h-8 text-cyan-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      className: 'font-heading font-extrabold text-2xl tracking-tighter'
    },
    {
      name: 'Sinergi',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-white text-[#050505] flex items-center justify-center text-sm font-bold shrink-0">
          S
        </div>
      ),
      className: 'font-heading font-bold text-2xl tracking-wide'
    },
    {
      name: 'ScaleUp',
      icon: (
        <svg className="w-8 h-8 text-fuchsia-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      className: 'font-heading font-black text-2xl italic'
    },
    {
      name: 'Optima',
      icon: <span className="text-cyan-500 shrink-0">●</span>,
      className: 'font-heading font-semibold text-2xl uppercase tracking-widest'
    }
  ];

  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01] z-10 relative overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-10">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest">
          Dipercaya oleh ekosistem bisnis modern
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-16 md:gap-24 px-8 md:px-12">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-slate-400 opacity-50 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default hover:scale-105 ${logo.className}`}
            >
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
