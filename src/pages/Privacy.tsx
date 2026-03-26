import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft, Shield, Lock, Eye, FileText, Server } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative z-10 bg-[#0a0f1c]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors group"
          >
            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Policy</span>
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 border-l-2 border-yellow-500/30 pl-4">
            <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <span>•</span>
            <p>Berlaku untuk semua member Gold Pulse Scalper</p>
          </div>
        </div>
        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-yellow-500/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-yellow-500/10 rounded-xl">
                <Shield className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">1. Pendahuluan</h2>
            </div>
            <p className="mb-4 text-slate-400">
              Di <strong>Gold Pulse Scalper</strong>, kami menghargai privasi dan keamanan data trading Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengelola data yang Anda berikan saat bergabung dengan komunitas dan menggunakan layanan signal kami.
            </p>
            <p className="text-slate-400">
              Dengan bergabung ke grup Telegram atau mendaftar melalui link partnership kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">2. Data yang Kami Kumpulkan</h2>
            </div>
            <div className="pl-9">
              <p className="mb-4 text-slate-400">Untuk keperluan verifikasi dan layanan signal, kami mengumpulkan:</p>
              <ul className="list-disc space-y-3 pl-5 text-slate-400 marker:text-yellow-500">
                <li>
                  <strong className="text-white">Identitas Trading:</strong> Nomor Akun MetaTrader (MT4/MT5) dan Nama yang terdaftar di broker partner untuk validasi keanggotaan VIP.
                </li>
                <li>
                  <strong className="text-white">Kontak Digital:</strong> Username Telegram dan Nomor WhatsApp untuk distribusi signal dan edukasi eksklusif.
                </li>
                <li>
                  <strong className="text-white">Data Transaksi:</strong> Kami tidak menyimpan dana Anda. Dana deposit dan withdrawal sepenuhnya dikelola oleh pihak Broker, namun kami mungkin menerima laporan volume lot untuk keperluan partnership.
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">3. Penggunaan Informasi</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p className="mb-4">Informasi Anda digunakan semata-mata untuk:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Akses VIP</h3>
                  <p className="text-sm">Memastikan hanya member terdaftar yang mendapatkan akses ke signal premium XAUUSD.</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Edukasi & Support</h3>
                  <p className="text-sm">Mengirimkan materi webinar, setup chart, dan bimbingan teknikal personal.</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Kepatuhan</h3>
                  <p className="text-sm">Mencegah penyalahgunaan layanan atau pembagian signal ilegal (reselling).</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <h3 className="text-white font-semibold mb-2">Pembaruan Sistem</h3>
                  <p className="text-sm">Memberikan notifikasi jika ada perubahan jadwal trading atau maintenance server.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gradient-to-r from-yellow-900/10 to-black p-8 rounded-3xl border border-yellow-500/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <Lock className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mt-1">4. Keamanan Dana & Data</h2>
              </div>
            </div>
            <p className="text-slate-400 mb-4 ml-16">
              <strong>Penting:</strong> Gold Pulse Scalper adalah penyedia edukasi dan signal. Kami <span className="text-red-400">TIDAK PERNAH</span> meminta akses password akun trading Anda, dan <span className="text-red-400">TIDAK MENERIMA</span> deposit dana dalam bentuk apapun.
            </p>
            <p className="text-slate-400 ml-16">
              Semua aktivitas keuangan dilakukan langsung antara Anda dan Broker Regulasi yang Anda pilih. Data kontak Anda dilindungi dengan enkripsi dan tidak diperjualbelikan ke pihak ketiga.
            </p>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">5. Pihak Ketiga (Broker)</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p>
                Kami bekerja sama dengan broker partner resmi. Kebijakan privasi terkait data keuangan dan verifikasi identitas (KYC) tunduk pada aturan masing-masing broker. Kami menyarankan Anda membaca kebijakan privasi broker tempat Anda mendaftar.
              </p>
            </div>
          </section>
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Butuh bantuan verifikasi?</h3>
            <p className="text-slate-400 mb-6">
              Tim admin kami siap membantu proses pendaftaran akun Anda.
            </p>
            <a 
              href="https://t.me/GoldPulseAdmin" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            >
              Hubungi Admin Telegram
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;