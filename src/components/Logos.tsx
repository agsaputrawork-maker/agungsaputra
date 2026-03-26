import React from 'react';

export default function Logos() {
  const logos = [
    {
      name: 'MetaTrader 5',
      icon: (
        <svg className="w-8 h-8 text-yellow-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V9h2v8z" />
        </svg>
      ),
      className: 'font-heading font-bold text-2xl tracking-tight'
    },
    {
      name: 'TradingView',
      icon: (
        <svg className="w-8 h-8 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12c-2.5 0-4.5 2-6 3.5-1.5-1.5-3.5-3.5-6-3.5s-4.5 2-6 3.5V8c1.5-1.5 3.5-3.5 6-3.5s4.5 2 6 3.5 4.5-2 6-3.5v7.5z" />
          <circle cx="9" cy="12" r="1.5" className="text-black" />
        </svg>
      ),
      className: 'font-heading font-extrabold text-2xl tracking-tighter'
    },
    {
      name: 'XAU/USD Prime',
      icon: (
        <div className="w-8 h-8 rounded-full border-2 border-yellow-500 text-yellow-500 flex items-center justify-center text-xs font-bold shrink-0">
          Au
        </div>
      ),
      className: 'font-heading font-semibold text-2xl text-yellow-100'
    },
    {
      name: 'ECN Direct',
      icon: (
        <svg className="w-8 h-8 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      className: 'font-heading font-black text-2xl italic tracking-wide'
    },
    {
      name: 'Global Forex',
      icon: (
        <svg className="w-8 h-8 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
        </svg>
      ),
      className: 'font-heading font-medium text-2xl uppercase'
    }
  ];

  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-white/5 bg-[#0a0f1c] z-10 relative overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-10">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
          Kompatibel dengan semua Broker & Platform Global
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-16 md:gap-24 px-8 md:px-12">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-slate-500 opacity-60 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default grayscale hover:grayscale-0 ${logo.className}`}
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