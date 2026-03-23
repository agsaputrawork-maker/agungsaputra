export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full animate-aurora"></div>
      <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-fuchsia-600/10 blur-[150px] rounded-full animate-aurora" style={{ animationDelay: '-5s' }}></div>
    </div>
  );
}
