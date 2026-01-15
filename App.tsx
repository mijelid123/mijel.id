
import React, { useState, useEffect } from 'react';
import ImpactCalculator from './components/ImpactCalculator';
import { BlogPost, FAQItem, Testimonial } from './types';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "Apakah ada minimal jumlah liter untuk penjemputan?",
      answer: "Ya, untuk efisiensi penjemputan GRATIS, kami menetapkan minimal 5 liter untuk area Jakarta dan sekitarnya. Jika jumlahnya di bawah 5 liter, Anda disarankan untuk mengumpulkannya terlebih dahulu hingga mencapai batas minimal."
    },
    {
      question: "Berapa lama waktu penjemputan setelah konfirmasi?",
      answer: "Kami menyediakan layanan Sameday Service untuk area Jakarta jika konfirmasi dilakukan sebelum jam 12.00 siang. Untuk area di luar Jakarta atau konfirmasi setelah jam 12.00, penjemputan dilakukan pada H+1."
    },
    {
      question: "Bagaimana cara pembayarannya?",
      answer: "Pembayaran dilakukan secara instan di tempat setelah proses penimbangan selesai. Anda bisa memilih pembayaran tunai (cash) atau transfer bank/e-wallet (Gopay/OVO/Dana) saat kurir kami tiba."
    },
    {
      question: "Apakah jerigennya dikembalikan?",
      answer: "Untuk mitra rutin seperti restoran dan cafe, kami menggunakan sistem tukar jerigen. Kami akan membawa jerigen bersih sebagai pengganti jerigen penuh yang kami ambil agar operasional dapur Anda tidak terganggu."
    },
    {
      question: "Jenis minyak jelantah seperti apa yang diterima?",
      answer: "Kami menerima segala jenis minyak goreng bekas (jelantah) baik dari kelapa sawit, kelapa, maupun minyak sayur lainnya. Yang paling penting adalah minyak tidak bercampur dengan air, sabun, atau cairan kimia lainnya (seperti oli)."
    },
    {
      question: "Bagaimana kalau minyak jelantah saya sudah sangat hitam?",
      answer: "Tidak masalah. Tingkat kegelapan warna minyak tidak mempengaruhi penerimaan selama minyak tersebut murni bekas gorengan dan tidak mengandung endapan sisa makanan yang terlalu tebal."
    },
    {
      question: "Apakah ada biaya penjemputan?",
      answer: "Penjemputan sama sekali TIDAK dipungut biaya atau GRATIS selama memenuhi syarat minimal 5 liter. Anda justru akan mendapatkan uang tunai sesuai dengan harga berlaku."
    },
    {
      question: "Minyak jelantah akan diolah jadi apa?",
      answer: "Seluruh minyak jelantah yang kami kumpulkan akan dikirim ke pabrik pengolahan energi terbarukan bersertifikat ISCC untuk diubah menjadi Biodiesel, bukan dijernihkan kembali untuk dikonsumsi."
    },
    {
      question: "Apakah bisa dijadwalkan penjemputan rutin?",
      answer: "Sangat bisa! Layanan ini sangat populer bagi mitra restoran, hotel, dan katering. Anda bisa memilih jadwal rutin mingguan, dua mingguan, atau bulanan sesuai dengan kapasitas produksi limbah Anda."
    },
    {
      question: "Area mana saja yang dilayani?",
      answer: "Kami melayani seluruh wilayah DKI Jakarta (Pusat, Barat, Timur, Utara, Selatan) serta wilayah penyangga seperti Tangerang Kota, Bintaro, Ciledug, dan sekitarnya."
    }
  ];

  const handleWA = () => window.open('https://wa.me/6281919051690', '_blank');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <i className="fas fa-leaf text-xl"></i>
            </div>
            <span className="text-2xl font-black text-slate-800 tracking-tighter">Mijel<span className="text-emerald-600">.id</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <button onClick={() => scrollTo('cara-kerja')} className="text-slate-600 hover:text-emerald-600 transition">Cara Kerja</button>
            <button onClick={() => scrollTo('harga')} className="text-slate-600 hover:text-emerald-600 transition">Harga</button>
            <button onClick={() => scrollTo('siapa')} className="text-slate-600 hover:text-emerald-600 transition">Kemitraan</button>
            <button onClick={() => scrollTo('lokasi')} className="text-slate-600 hover:text-emerald-600 transition">Area</button>
          </div>
          <button onClick={handleWA} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold transition shadow-lg text-sm">Jemput Sekarang</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold mb-6">Harga Tertinggi di Jakarta</div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Ubah Minyak Jelantah Menjadi <span className="gradient-text">Cuan Hari Ini!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">Platform #1 di Jakarta untuk jual minyak jelantah. Harga transparan hingga Rp 7.500/liter. Armada kami siap jemput Sameday.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollTo('harga')} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-xl">Cek Pendapatan</button>
              <button onClick={handleWA} className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp"></i> Hubungi Admin
              </button>
            </div>
          </div>
          <div className="relative">
             <img src="./images/hero-jelantah.jpg" alt="Jemput Minyak Jelantah" className="rounded-[2.5rem] shadow-2xl border border-slate-100 transform rotate-2" />
          </div>
        </div>
      </header>

      {/* Cara Kerja Section */}
      <section id="cara-kerja" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Cara Jual Minyak Jelantah</h2>
            <p className="text-slate-500">Proses mudah dan cepat. Khusus Jakarta, kami layani penjemputan di hari yang sama.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-jar', title: 'Kumpulkan & Saring', desc: 'Saring sisa makanan dan masukkan ke wadah/jerigen.' },
              { icon: 'fa-phone-volume', title: 'Hubungi Admin', desc: 'Klik WhatsApp, infokan lokasi dan jumlah liter.' },
              { icon: 'fa-truck-fast', title: 'Jemput Sameday', desc: 'Kurir datang di hari yang sama (Khusus Jakarta).' },
              { icon: 'fa-wallet', title: 'Terima Bayaran', desc: 'Uang langsung cair via tunai atau transfer.' }
            ].map((step, i) => (
              <div key={i} className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="font-black text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactCalculator />

      {/* Area Layanan Section */}
      <section id="lokasi" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-black mb-4 tracking-tight">Jangkauan Luas Jakarta</h2>
              <p className="text-slate-400">Armada kami siap menjemput dengan layanan Sameday Service.</p>
            </div>
            <div className="bg-emerald-600/20 border border-emerald-500/30 px-6 py-3 rounded-2xl">
              <p className="text-emerald-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Sameday Service Aktif
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Jakarta Barat (Pusat Ops)', areas: 'Daan Mogot, Cengkareng, Kebon Jeruk, Kalideres, Grogol' },
              { title: 'Jakarta Selatan', areas: 'Tebet, Kebayoran, Cilandak, Pasar Minggu, Jagakarsa' },
              { title: 'Pusat, Utara, & Sekitarnya', areas: 'Menteng, Kemayoran, Kelapa Gading, Pluit, Tangerang Kota' }
            ].map((loc, i) => (
              <div key={i} className="border-l-4 border-emerald-600 pl-8">
                <h4 className="font-black text-xl mb-4">{loc.title}</h4>
                <p className="text-slate-400 leading-relaxed">{loc.areas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-black text-center mb-16">Pertanyaan Sering Diajukan</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                  <span className="font-black text-slate-800 pr-8 text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition ${activeFaq === i ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-200'}`}>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </button>
                {activeFaq === i && <div className="px-8 pb-8 text-slate-600 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 pt-20 pb-12 text-slate-500 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="text-white font-black text-2xl mb-8">Mijel<span className="text-emerald-500">.id</span></div>
          <p className="mb-12 max-w-md mx-auto">Tempat Jual Minyak Jelantah Terpercaya di Jakarta. Layanan Sameday Service dengan harga terbaik.</p>
          <div className="pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2024 MIJEL.ID — ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <a href="https://wa.me/6281919051690" target="_blank" className="bg-[#25D366] text-white p-5 rounded-3xl shadow-2xl flex items-center justify-center gap-3 border-4 border-white transition hover:scale-110">
          <i className="fab fa-whatsapp text-4xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
