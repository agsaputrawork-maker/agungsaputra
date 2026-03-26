import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#0a0f1c] overflow-hidden -z-50 pointer-events-none select-none">
      
      <div 
        className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] bg-yellow-600/10 rounded-full blur-[120px] animate-aurora opacity-60 mix-blend-screen"
        style={{ animationDuration: '25s' }}
      ></div>
      
      <div 
        className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-yellow-800/10 rounded-full blur-[120px] animate-aurora opacity-50 mix-blend-screen" 
        style={{ animationDelay: '-5s', animationDuration: '30s', animationDirection: 'reverse' }}
      ></div>

      <div 
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-red-900/10 rounded-full blur-[100px] animate-pulse-slow opacity-40 mix-blend-screen"
        style={{ animationDuration: '15s' }}
      ></div>

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/50 to-[#0a0f1c] pointer-events-none"></div>

    </div>
  );
}