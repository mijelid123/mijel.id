
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

  const testimonials: Testimonial[] = [
    {
      name: "Ibu Sari Hartati",
      role: "Ibu Rumah Tangga",
      content: "Dulu bingung mau buang minyak jelantah kemana, takut nyumbat got. Sekarang malah jadi tambahan uang belanja dapur. Penjemputannya juga ramah banget!",
      avatar: "./images/testi-sari.jpg"
    },
    {
      name: "Pak Budi Santoso",
      role: "Pemilik Warung Gorengan",
      content: "Sebagai pedagang gorengan, limbah minyak itu masalah besar. Mijel.id ngasih solusi yang menguntungkan. Timbangannya pas digital, bayarnya cash di tempat.",
      avatar: "./images/testi-budi.jpg"
    },
    {
      name: "Cafe Kopi Senja",
      role: "Mitra Restoran",
      content: "Sangat profesional. Jadwal penjemputan rutin and on-time. Sertifikat pengangkutannya juga jelas, jadi kami aman secara regulasi lingkungan.",
      avatar: "./images/testi-cafe.jpg"
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Bahaya Minyak Jelantah Bagi Kesehatan Jantung",
      category: "Kesehatan",
      date: "12 Okt 2023",
      author: "Dr. Rizky",
      summary: "Mengonsumsi minyak goreng berulang kali dapat meningkatkan risiko kolesterol jahat dan kanker. Pelajari dampak medisnya di sini.",
      image: "./images/blog-kesehatan.jpg"
    },
    {
      id: 2,
      title: "Perjalanan Jelantah Menjadi Biodiesel",
      category: "Teknologi",
      date: "08 Nov 2023",
      author: "Admin Mijel",
      summary: "Tahukah Anda bahwa limbah dapur Anda bisa menjadi bahan bakar pesawat? Simak proses pengolahan canggih mitra kami.",
      image: "./images/blog-biodiesel.jpg"
    },
    {
      id: 3,
      title: "Tips Mengumpulkan Jelantah di Rumah Agar Tidak Bau",
      category: "Tips",
      date: "15 Jan 2024",
      author: "Sari H.",
      summary: "Jangan asal simpan! Ikuti tips praktis ini agar wadah penampungan minyak bekas Anda tetap higienis dan tidak mengundang semut.",
      image: "./images/blog-tips.jpg"
    }
  ];

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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
            <button onClick={() => scrollTo('harga')} className="text-slate-600 hover:text-emerald-600 transition">Harga</button>
            <button onClick={() => scrollTo('edukasi')} className="text-slate-600 hover:text-emerald-600 transition">Edukasi</button>
            <button onClick={() => scrollTo('siapa')} className="text-slate-600 hover:text-emerald-600 transition">Kemitraan</button>
            <button onClick={() => scrollTo('faq')} className="text-slate-600 hover:text-emerald-600 transition">FAQ</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase text-emerald-700">Sameday Active</span>
            </div>
            <button onClick={handleWA} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold transition shadow-lg shadow-emerald-200 text-sm">
              Jemput Sekarang
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold mb-6">
              <i className="fas fa-bolt text-xs"></i>
              Harga Tertinggi di Jakarta & Sekitarnya
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Ubah Minyak Jelantah Menjadi <span className="gradient-text">Cuan Hari Ini!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Platform #1 di Jakarta untuk jual minyak jelantah. Harga transparan hingga <span className="font-bold text-slate-800">Rp 7.500/liter</span>. Tidak perlu menunggu berhari-hari, armada kami siap jemput <span className="underline decoration-emerald-400 decoration-4">Sameday</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollTo('harga')}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition text-lg shadow-xl shadow-slate-200"
              >
                Cek Pendapatan
              </button>
              <button onClick={handleWA} className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold transition text-lg flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp"></i> Hubungi Admin
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400 opacity-10 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 transform md:rotate-2 hover:rotate-0 transition duration-500">
              <img 
                src="./images/hero-jelantah.jpg" 
                alt="Jual Minyak Jelantah Jakarta - Layanan Jemput Sameday Mijel.id" 
                className="rounded-[2rem] w-full object-cover aspect-square mb-4 shadow-inner"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Update Harga</p>
                  <p className="text-2xl font-black text-slate-900">Rp 7.500<span className="text-sm font-normal text-slate-400">/Liter</span></p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Area Layanan</p>
                <p className="font-bold flex items-center gap-2"><i className="fas fa-map-marker-alt text-emerald-400"></i> Jakarta & Sekitarnya</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Tiers Section */}
      <section id="harga" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Reward & Keuntungan</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 tracking-tight">Makin Banyak, Makin Untung!</h2>
            <p className="text-slate-500 mt-6 max-w-xl mx-auto text-lg leading-relaxed">Nikmati sistem tier harga transparan. Kumpulkan dalam jerigen 20L untuk mendapatkan rate premium terbaik kami.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { range: '20 - 99 L', price: '6.000', label: 'Starter', icon: 'fa-leaf' },
              { range: '100 - 199 L', price: '6.500', label: 'Eco-Pro', icon: 'fa-medal', highlight: true },
              { range: '200 - 500 L', price: '7.000', label: 'Elite', icon: 'fa-crown' },
              { range: '500+ L', price: '7.500', label: 'Ultimate', icon: 'fa-gem' },
            ].map((tier, i) => (
              <div key={i} className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col items-center text-center group ${tier.highlight ? 'bg-emerald-600 text-white border-emerald-500 shadow-2xl shadow-emerald-200 scale-105 z-10' : 'bg-white border-slate-100 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-2'}`}>
                {tier.highlight && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Paling Populer</span>}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-transform group-hover:scale-110 ${tier.highlight ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                  <i className={`fas ${tier.icon}`}></i>
                </div>
                <p className={`text-xs font-black uppercase tracking-widest mb-2 ${tier.highlight ? 'text-emerald-100' : 'text-slate-400'}`}>{tier.label}</p>
                <h4 className="text-2xl font-black mb-6 tracking-tight">{tier.range}</h4>
                <div className="mt-auto">
                  <p className={`text-xs font-bold uppercase mb-2 ${tier.highlight ? 'text-emerald-200' : 'text-slate-400'}`}>Harga per liter</p>
                  <p className="text-4xl font-black tracking-tighter">Rp {tier.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <ImpactCalculator />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="edukasi" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Pelajari Tentang Jelantah</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">Mari bersama-sama menjaga ekosistem Jakarta dengan memahami cara pengelolaan minyak bekas yang benar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: 'fa-lightbulb', 
                color: 'bg-emerald-100 text-emerald-700', 
                title: 'Ekonomi Sirkular', 
                desc: 'Minyak bekas Anda diolah kembali menjadi energi terbarukan (Biodiesel), mengurangi emisi karbon hingga 80% dibanding bahan bakar fosil.' 
              },
              { 
                icon: 'fa-biohazard', 
                color: 'bg-rose-100 text-rose-700', 
                title: 'Bahaya Bagi Air', 
                desc: 'Setiap 1 liter minyak yang dibuang ke got akan mencemari 1 juta liter air bersih dan mematikan biota sungai di sekitar kita.' 
              },
              { 
                icon: 'fa-jar', 
                color: 'bg-teal-100 text-teal-700', 
                title: 'Cara Simpan Benar', 
                desc: 'Gunakan jerigen tertutup, saring sisa makanan agar tidak membusuk, dan simpan di tempat yang tidak terkena matahari langsung.' 
              },
            ].map((edu, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 ${edu.color}`}>
                  <i className={`fas ${edu.icon}`}></i>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight">{edu.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{edu.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-wand-sparkles"></i>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight">Panduan Pengumpulan</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { step: 1, text: 'Gunakan jerigen atau botol plastik bersih' },
                    { step: 2, text: 'Tunggu minyak dingin sebelum dituang' },
                    { step: 3, text: 'Saring sisa makanan & endapan' },
                    { step: 4, text: 'Simpan di tempat sejuk & kering' },
                    { step: 5, text: 'Jangan campur air atau deterjen' },
                    { step: 6, text: 'Min. 5L untuk jemput GRATIS Jakarta' },
                  ].map((tip, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-white/10 text-emerald-400 rounded-full flex-shrink-0 flex items-center justify-center font-black border border-white/20 group-hover:bg-emerald-500 group-hover:text-white transition duration-300">
                        {tip.step}
                      </div>
                      <p className="font-bold text-emerald-50 leading-snug">{tip.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/3 bg-white/10 p-8 rounded-[2rem] border border-white/20 backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 text-center">Butuh Jerigen?</p>
                <p className="text-lg font-medium text-emerald-50 leading-relaxed mb-8 text-center">Kami menyediakan penukaran jerigen bersih setiap pengambilan untuk mitra restoran rutin.</p>
                <button onClick={handleWA} className="w-full bg-white text-emerald-900 font-black py-4 rounded-xl hover:bg-emerald-50 transition shadow-xl">
                  Ajukan Mitra Rutin
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Section */}
      <section id="siapa" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 px-4 py-1.5 rounded-full text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-4 border border-emerald-100">Kemitraan Terbuka</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Siapa yang Bisa Jual?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Kami menerima setoran minyak jelantah dari berbagai skala volume, dari dapur rumah hingga pabrik.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: 'fa-house-chimney', 
                color: 'bg-blue-50 text-blue-600', 
                title: 'Rumah Tangga', 
                income: 'Rp 200–500rb/bulan', 
                desc: 'Bagi ibu rumah tangga yang ingin membersihkan dapur dan mendapatkan uang belanja tambahan.',
                action: 'Setoran minimal 5 Liter untuk jemput gratis.'
              },
              { 
                icon: 'fa-store', 
                color: 'bg-emerald-50 text-emerald-600', 
                title: 'Warung & UMKM', 
                income: 'Rp 500rb–1.5jt/bulan', 
                desc: 'Pedagang gorengan, warteg, atau katering rumahan yang ingin pengelolaan limbah lebih profesional.',
                action: 'Penjadwalan jemput rutin mingguan.'
              },
              { 
                icon: 'fa-utensils', 
                color: 'bg-amber-50 text-amber-600', 
                title: 'Restoran & Cafe', 
                income: 'Rp 2–5jt/bulan', 
                desc: 'Membantu bisnis kuliner menjaga standar higienitas dan mendapatkan sertifikat pengelolaan limbah.',
                action: 'Harga premium & Kontrak kemitraan resmi.'
              },
              { 
                icon: 'fa-industry-windows', 
                color: 'bg-purple-50 text-purple-600', 
                title: 'Pabrik & Industri', 
                income: 'Volume Based', 
                desc: 'Layanan manajemen limbah B3 skala besar dengan armada truk tangki dan kontrak jangka panjang.',
                action: 'Dedicated pickup & Dokumen Berita Acara.'
              },
            ].map((seg, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex gap-8 hover:shadow-2xl hover:border-emerald-200 transition-all group duration-500 relative overflow-hidden">
                <div className={`w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl ${seg.color} group-hover:scale-110 transition duration-500 shadow-sm`}>
                  <i className={`fas ${seg.icon}`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">{seg.title}</h3>
                    <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">{seg.income}</span>
                  </div>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">{seg.desc}</p>
                  <div className="flex items-center gap-3 text-emerald-600 text-sm font-bold bg-emerald-50/50 p-4 rounded-2xl">
                    <i className="fas fa-arrow-right-long text-xs animate-pulse"></i>
                    {seg.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Sering Ditanyakan</h2>
            <p className="text-slate-500 text-lg">Semua yang perlu Anda ketahui sebelum mulai menjual.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-100 transition"
                >
                  <span className="font-black text-slate-800 pr-8 text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-200 text-slate-400'}`}>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed animate-fade-in-down">
                    <div className="pt-4 border-t border-slate-200">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Visual Sitemap */}
      <footer className="bg-slate-950 pt-32 pb-12 text-slate-500 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 pb-24 border-b border-white/5">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                  <i className="fas fa-leaf"></i>
                </div>
                <span className="text-2xl font-black text-white tracking-tighter">Mijel<span className="text-emerald-500">.id</span></span>
              </div>
              <p className="text-lg leading-relaxed mb-12 max-w-sm">
                Pelopor pengelolaan minyak jelantah berbasis teknologi di Jakarta. Transparan, Ramah Lingkungan, dan Menguntungkan.
              </p>
              <div className="flex gap-4">
                {['instagram', 'tiktok', 'facebook-f'].map(icon => (
                  <a key={icon} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition duration-500 text-white border border-white/5">
                    <i className={`fab fa-${icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Visual Sitemap Column 1 */}
            <div className="md:col-span-2">
              <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Peta Situs</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-emerald-400 transition">Beranda</button></li>
                <li><button onClick={() => scrollTo('harga')} className="hover:text-emerald-400 transition">Cek Harga & Kalkulator</button></li>
                <li><button onClick={() => scrollTo('edukasi')} className="hover:text-emerald-400 transition">Edukasi & Tips</button></li>
                <li><button onClick={() => scrollTo('siapa')} className="hover:text-emerald-400 transition">Program Kemitraan</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:text-emerald-400 transition">Pusat Bantuan (FAQ)</button></li>
              </ul>
            </div>

            {/* Visual Sitemap Column 2 */}
            <div className="md:col-span-2">
              <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Layanan Kami</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><button onClick={handleWA} className="hover:text-emerald-400 transition text-left">Jemput Rumah Tangga</button></li>
                <li><button onClick={handleWA} className="hover:text-emerald-400 transition text-left">Limbah Resto & Cafe</button></li>
                <li><button onClick={handleWA} className="hover:text-emerald-400 transition text-left">Beli Partai Besar</button></li>
                <li><button onClick={handleWA} className="hover:text-emerald-400 transition text-left">Sertifikasi ISCC</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Hubungi Kami</h4>
              <ul className="space-y-8 text-sm font-bold">
                <li className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex-shrink-0 flex items-center justify-center text-emerald-500 border border-white/5">
                    <i className="fas fa-map-pin"></i>
                  </div>
                  <span className="leading-relaxed">Jl. Daan Mogot 2 No. B5, Jakarta Barat, Indonesia</span>
                </li>
                <li className="flex items-center gap-5">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex-shrink-0 flex items-center justify-center text-emerald-500 border border-white/5">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <span>0819-1905-1690</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] gap-8">
            <p className="text-slate-700">© 2024 MIJEL.ID — ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-12 text-slate-700">
              <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-[100] pointer-events-none sm:pointer-events-auto">
        <a 
          href="https://wa.me/6281919051690" 
          target="_blank" 
          className="pointer-events-auto bg-[#25D366] text-white p-5 rounded-3xl shadow-2xl shadow-emerald-400/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group border-4 border-white"
        >
          <div className="hidden lg:block overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap px-0 group-hover:px-2">
            <span className="font-black tracking-tight">Jemput Sameday</span>
          </div>
          <i className="fab fa-whatsapp text-4xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
