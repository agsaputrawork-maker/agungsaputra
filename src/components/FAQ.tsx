import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

export default function FAQ() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 relative z-10" id="faq" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16 fade-up", isVisible && "is-visible")}>
          <h2 className="text-4xl font-heading font-bold text-white">FAQ</h2>
        </div>

        <div className={cn("space-y-4 fade-up", isVisible && "is-visible")} style={{ transitionDelay: '100ms' }}>
          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm" open>
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white">
              <span>Berapa lama proses pembuatannya?</span>
              <span className="transition group-open:rotate-180 text-cyan-400"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
            </summary>
            <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed">
              Umumnya 14 hingga 21 hari kerja. Ini mencakup riset <em>copywriting</em>, desain web, integrasi, dan pelatihan AI dengan data spesifik bisnis Anda agar siap tempur.
            </div>
          </details>
          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white">
              <span>Apakah bisa integrasi dengan WhatsApp?</span>
              <span className="transition group-open:rotate-180 text-cyan-400"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
            </summary>
            <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed">Sangat bisa. Sistem dihubungkan ke WhatsApp API/pihak ketiga untuk notifikasi, balas otomatis, atau alert pembayaran.</div>
          </details>
          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white">
              <span>Bagaimana jika saya sudah punya website?</span>
              <span className="transition group-open:rotate-180 text-cyan-400"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
            </summary>
            <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed">Bisa di-<em>embed</em> ke website Anda yang sudah ada (WordPress, Shopify, dll) selama mendukung custom script.</div>
          </details>
          <details className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-white">
              <span>Apakah AI bisa bahasa gaul/lokal?</span>
              <span className="transition group-open:rotate-180 text-cyan-400"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
            </summary>
            <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed">Berkat <em>custom prompt engineering</em>, AI akan merespons dengan gaya bahasa yang natural, gaul, atau formal sesuai kultur pelanggan Anda.</div>
          </details>
        </div>
      </div>
    </section>
  );
}
