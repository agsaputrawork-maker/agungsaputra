import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft, Scale, AlertCircle, CheckCircle, FileText, Ban, AlertTriangle } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative z-10 bg-[#0a0f1c]">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors group"
          >
            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Disclaimer</span>
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 border-l-2 border-yellow-500/30 pl-4">
            <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <span>•</span>
            <p>Penting untuk Trader Gold Pulse Scalper</p>
          </div>
        </div>
        <div className="space-y-12 text-slate-300 leading-relaxed">
          
          <section className="bg-red-500/10 p-8 rounded-3xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">1. Peringatan Risiko Tinggi (Risk Disclosure)</h2>
            </div>
            <p className="text-slate-300 mb-4">
              Trading Forex dan Komoditas (XAUUSD/Gold) melibatkan risiko yang signifikan dan mungkin tidak cocok untuk semua investor. Tingkat leverage yang tinggi dapat bekerja melawan Anda maupun untuk Anda.
            </p>
            <p className="text-slate-300 font-bold">
              Sebelum memutuskan untuk trading, Anda harus mempertimbangkan tujuan investasi, tingkat pengalaman, dan selera risiko Anda. Ada kemungkinan Anda bisa kehilangan sebagian atau seluruh investasi awal Anda. Jangan investasikan uang yang Anda tidak mampu untuk kehilangan (uang panas).
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">2. Sifat Layanan</h2>
            </div>
            <div className="pl-9 space-y-4 text-slate-400">
              <p>
                <strong>Gold Pulse Scalper</strong> adalah penyedia layanan edukasi dan informasi pasar. Signal trading yang kami berikan hanyalah referensi berdasarkan analisa teknikal kami.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-yellow-500">
                <strong className="text-white block mb-2">Bukan Penasihat Keuangan:</strong>
                Segala keputusan Entry (Buy/Sell), Stop Loss, dan Take Profit sepenuhnya berada di tangan Anda. Kami tidak bertanggung jawab atas kerugian finansial yang mungkin terjadi akibat mengikuti signal kami.
              </div>
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">3. Keanggotaan & Akses</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p>
                Akses ke grup VIP diberikan secara gratis dengan syarat mendaftar melalui link broker partner kami (IB). Kami berhak mencabut akses keanggotaan jika ditemukan akun trading tidak aktif (tidak ada transaksi) selama periode tertentu atau melakukan pelanggaran komunitas.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Ban className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">4. Larangan Keras</h2>
            </div>
            <ul className="list-disc space-y-3 pl-14 text-slate-400 marker:text-red-500">
              <li>Menjual kembali (Reselling) signal Gold Pulse Scalper ke pihak lain.</li>
              <li>Membagikan screenshot area VIP ke grup publik tanpa izin.</li>
              <li>Melakukan spam atau promosi layanan lain di dalam grup komunitas.</li>
              <li>Menggunakan bahasa kasar, SARA, atau memicu keributan (FUD) saat market floating.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">5. Batasan Tanggung Jawab</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p>
                Kinerja masa lalu (Backtest/History) tidak menjamin hasil di masa depan. Market bergerak dinamis dan dipengaruhi oleh faktor fundamental global yang di luar kendali kami. Kami tidak memberikan jaminan profit pasti (Fixed Income).
              </p>
            </div>
          </section>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-slate-500 italic">
              "Dengan bergabung, Anda menyatakan telah membaca, memahami, dan menyetujui risiko yang terlibat dalam perdagangan derivatif keuangan."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;