import { useRef, useEffect } from 'react';
import { cn } from '../utils/cn';

export default function BentoCard({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode, 
  className?: string, 
  delay?: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={cn("bento-card", className)} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bento-content h-full">
        {children}
      </div>
    </div>
  );
}
