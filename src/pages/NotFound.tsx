import React from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative z-10 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Signal Not Found
        </h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Halaman yang Anda cari sepertinya sudah terkena <em className="text-red-400 not-italic font-medium">Stop Loss</em>. 
          Mungkin link sudah kadaluarsa atau Anda salah memasukkan alamat. Jangan panik, mari kembali ke zona profit.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
        >
          <MoveLeft className="w-5 h-5" />
          Kembali ke Dashboard
        </Link>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
    </div>
  );
};

export default NotFound;