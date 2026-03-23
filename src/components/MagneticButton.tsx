import { useRef, useEffect } from 'react';

export default function MagneticButton({ children, className = "", href = "#" }: { children: React.ReactNode, className?: string, href?: string }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const text = textRef.current;
    if (!btn || !text) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - v;

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      text.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = `translate(0px, 0px)`;
      text.style.transform = `translate(0px, 0px)`;
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="magnetic-wrap">
      <a ref={btnRef} href={href} className={`magnetic-btn ${className}`}>
        <span ref={textRef} className="magnetic-text relative z-10 block pointer-events-none">
          {children}
        </span>
      </a>
    </div>
  );
}
