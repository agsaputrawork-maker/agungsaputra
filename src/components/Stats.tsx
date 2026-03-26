import React, { useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

function Counter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const [elementRef, isVisible] = useIntersectionObserver();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const end = target;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      
      const timer = setInterval(() => {
        start += increment;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function Stats() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 relative z-10 border-y border-white/5 bg-[#0a0f1c]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className={cn("fade-up py-4", isVisible && "is-visible")}>
            <h3 className="text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 mb-2">
              <Counter target={70} duration={1500} />%
            </h3>
            <p className="text-lg text-white font-medium">Win Rate Rata-rata</p>
            <p className="text-sm text-slate-500 mt-2">Konsisten & terukur tiap bulan.</p>
          </div>
          <div className={cn("fade-up py-4", isVisible && "is-visible")} style={{ transitionDelay: '100ms' }}>
            <h3 className="text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">
              <Counter target={1000} duration={2000} />+
            </h3>
            <p className="text-lg text-white font-medium">Trader Bergabung</p>
            <p className="text-sm text-slate-500 mt-2">Komunitas aktif belajar bareng.</p>
          </div>
          <div className={cn("fade-up py-4", isVisible && "is-visible")} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600 mb-2">
              <Counter target={600} duration={2000} />+
            </h3>
            <p className="text-lg text-white font-medium">Pips Profit / Bulan</p>
            <p className="text-sm text-slate-500 mt-2">Akumulasi profit bersih.</p>
          </div>
        </div>
      </div>
    </section>
  );
}