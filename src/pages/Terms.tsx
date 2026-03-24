import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft, Scale, AlertCircle, CheckCircle, FileText, Ban } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative z-10">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 transition-colors group"
          >
            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Conditions</span>
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 border-l-2 border-cyan-500/30 pl-4">
            <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <span>•</span>
            <p>Syarat Penggunaan Agung System</p>
          </div>
        </div>
        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section className="bg-space-800/50 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">1. Persetujuan Syarat</h2>
            </div>
            <p className="text-slate-400">
              Dengan mengakses atau menggunakan situs web dan layanan <strong>Agung System</strong>, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, maka Anda tidak diizinkan untuk mengakses layanan kami.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">2. Akun Pengguna</h2>
            </div>
            <div className="pl-9 space-y-4 text-slate-400">
              <p>
                Saat Anda membuat akun di sistem kami, Anda harus memberikan informasi yang akurat, lengkap, dan terkini. Kegagalan untuk melakukannya merupakan pelanggaran terhadap Syarat, yang dapat mengakibatkan penghentian segera akun Anda.
              </p>
              <div className="bg-space-950 p-6 rounded-xl border-l-4 border-cyan-500">
                <strong className="text-white block mb-2">Tanggung Jawab Keamanan:</strong>
                Anda bertanggung jawab untuk menjaga kata sandi yang Anda gunakan untuk mengakses layanan dan untuk segala aktivitas atau tindakan di bawah kata sandi Anda.
              </div>
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">3. Kekayaan Intelektual</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p>
                Layanan dan konten aslinya (tidak termasuk Konten yang disediakan oleh pengguna), fitur, dan fungsionalitas adalah dan akan tetap menjadi milik eksklusif Agung System dan pemberi lisensinya. Layanan ini dilindungi oleh hak cipta, merek dagang, dan hukum negara Indonesia.
              </p>
            </div>
          </section>

          <section className="bg-red-500/5 p-8 rounded-3xl border border-red-500/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <Ban className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">4. Aktivitas yang Dilarang</h2>
            </div>
            <ul className="list-disc space-y-3 pl-5 text-slate-400 marker:text-red-500">
              <li>Menggunakan layanan untuk tujuan ilegal atau tidak sah.</li>
              <li>Mencoba mengganggu atau merusak integritas atau kinerja sistem.</li>
              <li>Mencoba mendapatkan akses tidak sah ke sistem atau jaringan terkait.</li>
              <li>Menyalin, memodifikasi, atau mendistribusikan ulang bagian mana pun dari layanan tanpa izin.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">5. Batasan Tanggung Jawab</h2>
            </div>
            <div className="pl-9 text-slate-400">
              <p>
                Agung System tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau hukuman, termasuk namun tidak terbatas pada, hilangnya keuntungan, data, penggunaan, goodwill, atau kerugian tidak berwujud lainnya.
              </p>
            </div>
          </section>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-slate-500 italic">
              "Kami berhak, atas kebijakan kami sendiri, untuk memodifikasi atau mengganti Syarat ini kapan saja."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
