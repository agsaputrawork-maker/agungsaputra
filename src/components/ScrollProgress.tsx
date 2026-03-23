import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="scroll-progress" 
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 z-[100] transition-all duration-150 ease-out"
      style={{ width: `${scroll}%` }}
    ></div>
  );
}
