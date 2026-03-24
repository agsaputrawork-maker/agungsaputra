import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft, Shield, Lock, Eye, FileText, Server } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 transition-colors group"
          >
            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Policy</span>
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 border-l-2 border-cyan-500/30 pl-4">
            <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <span>•</span>
            <p>Berlaku untuk semua pengguna Agung System</p>
          </div>
        </div>
        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section className="bg-space-800/50 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">1. Pendahuluan</h2>
            </div>
            <p className="mb-4 text-slate-400">
              Di <strong>Agung System</strong>, privasi Anda adalah prioritas utama kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan kami.
            </p>
            <p className="text-slate-400">
              Dengan mengakses atau menggunakan platform kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini. Kami berkomitmen untuk menjaga data Anda tetap aman dalam infrastruktur kami.
            </p>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">2. Informasi yang Kami Kumpulkan</h2>
            </div>
            <div className="pl-9">
              <p className="mb-4 text-slate-400">Kami dapat mengumpulkan jenis informasi berikut:</p>
              <ul className="list-disc space-y-3 pl-5 text-slate-400 marker:text-cyan-500">
                <li>
                  <strong className="text-white">Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, dan informasi kontak lainnya yang Anda berikan saat mendaftar.
                </li>
                <li>
                  <strong className="text-white">Data Penggunaan:</strong> Informasi tentang bagaimana Anda berinteraksi dengan layanan kami, termasuk log akses, durasi kunjungan, dan fitur yang digunakan.
                </li>
                <li>
                  <strong className="text-white">Informasi Teknis:</strong> Alamat IP, jenis browser, dan informasi perangkat untuk keperluan keamanan dan optimasi sistem.
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">3. Penggunaan Informasi</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p className="mb-4">Informasi yang kami kumpulkan digunakan untuk:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-space-950 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Operasional Layanan</h3>
                  <p className="text-sm">Menyediakan, memelihara, dan meningkatkan fitur Agung System.</p>
                </div>
                <div className="bg-space-950 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Komunikasi</h3>
                  <p className="text-sm">Mengirimkan pembaruan teknis, peringatan keamanan, dan dukungan pelanggan.</p>
                </div>
                <div className="bg-space-950 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Keamanan</h3>
                  <p className="text-sm">Mendeteksi, mencegah, dan menangani masalah teknis atau penipuan.</p>
                </div>
                <div className="bg-space-950 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Analisis</h3>
                  <p className="text-sm">Memahami tren penggunaan untuk pengembangan fitur masa depan.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gradient-to-r from-space-800 to-space-900 p-8 rounded-3xl border border-cyan-500/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mt-1">4. Keamanan Data</h2>
              </div>
            </div>
            <p className="text-slate-400 mb-4 ml-16">
              Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran.
            </p>
            <p className="text-slate-400 ml-16">
              Meskipun tidak ada layanan online yang 100% aman, kami bekerja keras menggunakan standar enkripsi industri dan protokol keamanan terbaik.
            </p>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">5. Cookies & Tracking</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p>
                Kami menggunakan cookies dan teknologi pelacakan serupa untuk melacak aktivitas pada layanan kami dan menyimpan informasi tertentu. Anda dapat menginstruksikan browser Anda untuk menolak semua cookie atau untuk menunjukkan kapan cookie dikirim.
              </p>
            </div>
          </section>
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Masih ada pertanyaan tentang privasi?</h3>
            <p className="text-slate-400 mb-6">
              Jangan ragu untuk menghubungi tim kepatuhan data kami.
            </p>
            <a 
              href="mailto:agsaputra.work@gmail.com" 
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-space-900 font-bold rounded-full transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
