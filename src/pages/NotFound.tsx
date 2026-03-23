import React from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react'; // Pastikan install lucide-react jika belum, atau ganti ikon lain

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative z-10 px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Error Code Effect */}
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Lost in Space?
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Halaman yang Anda cari tidak dapat ditemukan. Mungkin telah dipindahkan, 
          dihapus, atau Anda salah mengetik URL. Jangan khawatir, mari kita kembali ke orbit yang benar.
        </p>

        {/* Action Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-space-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          <MoveLeft className="w-5 h-5" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Optional: Background decorative glow similar to your Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
    </div>
  );
};

export default NotFound;
