
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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Bahaya Minyak Jelantah Bagi Kesehatan Jantung",
      category: "Kesehatan",
      date: "12 Okt 2023",
      author: "Dr. Rizky",
      summary: "Mengonsumsi minyak goreng berulang kali dapat meningkatkan risiko kolesterol jahat dan kanker. Pelajari dampak medisnya di sini.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "Perjalanan Jelantah Menjadi Biodiesel",
      category: "Teknologi",
      date: "08 Nov 2023",
      author: "Admin Mijel",
      summary: "Tahukah Anda bahwa limbah dapur Anda bisa menjadi bahan bakar pesawat? Simak proses pengolahan canggih mitra kami.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Tips Mengumpulkan Jelantah di Rumah Agar Tidak Bau",
      category: "Tips",
      date: "15 Jan 2024",
      author: "Sari H.",
      summary: "Jangan asal simpan! Ikuti tips praktis ini agar wadah penampungan minyak bekas Anda tetap higienis.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Ibu Sari Hartati",
      role: "Ibu Rumah Tangga",
      content: "Dulu bingung mau buang minyak jelantah kemana, takut nyumbat got. Sekarang malah jadi tambahan uang belanja dapur. Penjemputannya juga ramah banget!",
      avatar: "https://i.pravatar.cc/150?u=sari"
    },
    {
      name: "Pak Budi Santoso",
      role: "Pemilik Warung Gorengan",
      content: "Sebagai pedagang gorengan, limbah minyak itu masalah besar. Mijel.id ngasih solusi yang menguntungkan. Timbangannya pas digital, bayarnya cash di tempat.",
      avatar: "https://i.pravatar.cc/150?u=budi"
    },
    {
      name: "Cafe Kopi Senja",
      role: "Mitra Restoran",
      content: "Sangat profesional. Jadwal penjemputan rutin dan on-time. Sertifikat pengangkutannya juga jelas, jadi kami aman secara regulasi lingkungan.",
      avatar: "https://i.pravatar.cc/150?u=cafe"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Apakah ada minimal jumlah liter untuk penjemputan?",
      answer: "Ya, untuk efisiensi penjemputan gratis, kami menetapkan minimal 5 liter untuk area Jakarta dan sekitarnya."
    },
    {
      question: "Jenis minyak apa saja yang diterima?",
      answer: "Kami menerima semua jenis minyak goreng bekas nabati (sawit, kelapa) yang tidak bercampur air atau sabun."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran dilakukan instan di tempat (Cash atau Transfer) segera setelah proses penimbangan selesai."
    },
    {
      question: "Minyak jelantahnya akan dijadikan apa?",
      answer: "Seluruh minyak akan diolah menjadi Biodiesel melalui mitra pengolah resmi kami, mendukung energi terbarukan."
    }
  ];

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
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-slate-200 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-emerald-200 group-hover:rotate-12 transition-transform">
              <i className="fas fa-leaf text-xl"></i>
            </div>
            <span className="text-2xl font-black text-slate-800 tracking-tighter">Mijel<span className="text-emerald-600">.id</span></span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-slate-600">
            <button onClick={() => scrollTo('cara-kerja')} className="hover:text-emerald-600 transition">Cara Kerja</button>
            <button onClick={() => scrollTo('harga')} className="hover:text-emerald-600 transition">Harga</button>
            <button onClick={() => scrollTo('siapa')} className="hover:text-emerald-600 transition">Mitra Bisnis</button>
            <button onClick={() => scrollTo('tentang')} className="hover:text-emerald-600 transition">Tentang Kami</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-emerald-600 transition">Bantuan</button>
          </div>
          <button onClick={() => window.open('https://wa.me/6281919051690', '_blank')} className="bg-slate-900 hover:bg-emerald-600 text-white px-7 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-emerald-200 active:scale-95 text-sm">Jemput Sekarang</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 md:pt-56 md:pb-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Layanan Jemput Sameday Jakarta
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Ubah Limbah Minyak Jadi <span className="gradient-text">Cuan Instan!</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
              Platform #1 di Jakarta untuk jual minyak jelantah. Harga transparan <span className="text-slate-900 font-bold">Rp 6.000/liter</span>. Tidak perlu menunggu lama, armada kami siap jemput hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button onClick={() => scrollTo('harga')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-200 transition-all active:scale-95">Cek Pendapatan</button>
              <button onClick={() => window.open('https://wa.me/6281919051690', '_blank')} className="bg-white border-2 border-slate-200 hover:border-emerald-600 text-slate-800 hover:text-emerald-600 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3">
                <i className="fab fa-whatsapp text-2xl"></i> Hubungi Admin
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center md:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/ISCC_logo.png" alt="ISCC" className="h-8" title="ISCC Certified" />
               <span className="font-black text-slate-400">Eco-Partner ID</span>
               <span className="font-black text-slate-400">Zero Waste All.</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
            <img src="https://images.unsplash.com/photo-1594488651083-206019a8090a?auto=format&fit=crop&q=80&w=800" alt="Jual Minyak Jelantah" className="relative rounded-[3rem] shadow-2xl border-4 border-white transform rotate-2 group-hover:rotate-0 transition-all duration-700" />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-bounce-slow">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Disalurkan</p>
              <p className="text-3xl font-black text-emerald-600">Rp 150JT+</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tentang Kami Section (Expanded & SEO Optimized) */}
      <section id="tentang" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10"></div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">Profil Mijel.id: Jakarta Tanpa <span className="text-emerald-600">Limbah Minyak</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                <strong>Mijel.id</strong> adalah platform pengepul minyak jelantah profesional yang berpusat di Jakarta Barat. Kami lahir dari sebuah visi besar untuk mengatasi masalah drainase ibukota yang sering tersumbat akibat pembuangan minyak goreng bekas secara sembarangan.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sebagai mitra ekonomi sirkular terpercaya, kami menghubungkan rumah tangga dan bisnis kuliner di Jakarta dengan pabrik pengolahan biodiesel resmi. Kami menjamin setiap liter minyak yang Anda jual akan dikelola secara bertanggung jawab untuk masa depan bumi yang lebih hijau.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white flex flex-col justify-end min-h-[240px]">
                <p className="text-5xl font-black mb-2">2.5k</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Mitra Terdaftar</p>
              </div>
              <div className="bg-slate-100 p-8 rounded-[2.5rem] text-slate-800 flex flex-col justify-end min-h-[240px] mt-8">
                <p className="text-5xl font-black mb-2">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Daur Ulang Resmi</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-10 bg-slate-50 rounded-[3rem] border border-transparent hover:border-emerald-200 transition-all hover:shadow-2xl hover:shadow-emerald-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Transparansi Total</h4>
              <p className="text-slate-500 leading-relaxed">Kami menggunakan timbangan digital bersertifikat untuk memastikan keakuratan hasil timbang. Kejujuran adalah pondasi utama layanan kami.</p>
            </div>
            <div className="group p-10 bg-slate-50 rounded-[3rem] border border-transparent hover:border-emerald-200 transition-all hover:shadow-2xl hover:shadow-emerald-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                <i className="fas fa-truck-fast"></i>
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Layanan Sameday</h4>
              <p className="text-slate-500 leading-relaxed">Kami menghargai waktu Anda. Khusus area Jakarta, armada kami siap menjemput minyak jelantah Anda di hari yang sama setelah konfirmasi.</p>
            </div>
            <div className="group p-10 bg-slate-50 rounded-[3rem] border border-transparent hover:border-emerald-200 transition-all hover:shadow-2xl hover:shadow-emerald-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                <i className="fas fa-leaf"></i>
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Dampak Ekologis</h4>
              <p className="text-slate-500 leading-relaxed">Setiap liter jelantah yang Anda berikan setara dengan penyelamatan jutaan liter air tanah dari kontaminasi zat berbahaya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitra Bisnis Section */}
      <section id="siapa" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Khusus Restoran, Hotel, & Katering</h2>
              <p className="text-slate-400 text-xl mb-10 leading-relaxed">
                Mijel.id memberikan solusi manajemen limbah minyak profesional untuk bisnis Anda di Jakarta. Tingkatkan citra eco-friendly bisnis kuliner Anda.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex-shrink-0 flex items-center justify-center text-white"><i className="fas fa-check"></i></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Tukar Jerigen Bersih</h4>
                    <p className="text-slate-500">Kami sediakan jerigen pengganti yang bersih agar operasional dapur tetap lancar dan higienis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex-shrink-0 flex items-center justify-center text-white"><i className="fas fa-check"></i></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Berita Acara & Kontrak</h4>
                    <p className="text-slate-500">Dokumen lengkap (BAP) untuk kebutuhan audit lingkungan dan regulasi limbah B3 perusahaan.</p>
                  </div>
                </div>
              </div>
              <button onClick={() => window.open('https://wa.me/6281919051690', '_blank')} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black transition-all">Gabung Jadi Mitra Bisnis</button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-8 rounded-3xl text-center">
                  <p className="text-4xl font-black text-emerald-400 mb-2">500+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Mitra Resto di Jakarta</p>
                </div>
                <div className="bg-slate-800 p-8 rounded-3xl text-center mt-10">
                  <p className="text-4xl font-black text-emerald-400 mb-2">2.5k+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Mitra Rumah Tangga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactCalculator />

      {/* Blog/Artikel Section */}
      <section id="edukasi" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Seputar Minyak Jelantah</h2>
              <p className="text-slate-500 text-lg">Edukasi penting untuk menjaga kesehatan keluarga dan kelestarian bumi kita.</p>
            </div>
            <button className="text-emerald-600 font-black flex items-center gap-2 hover:gap-4 transition-all">
              Lihat Semua Artikel <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map(post => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-600">
                    {post.category}
                  </div>
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">{post.date} • {post.author}</p>
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-20">Kata Mereka Tentang Mijel.id</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 relative">
                <div className="absolute -top-6 left-10 w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-emerald-200">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-emerald-100" />
                  <div>
                    <h4 className="font-black text-slate-800 text-sm">{t.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Punya Pertanyaan?</h2>
            <p className="text-slate-500">Berikut adalah hal-hal yang paling sering ditanyakan oleh mitra kami.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] border border-slate-200 overflow-hidden transition-all hover:border-emerald-200">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={`font-black pr-8 text-lg transition-colors ${activeFaq === i ? 'text-emerald-600' : 'text-slate-800 group-hover:text-emerald-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-emerald-600 text-white rotate-180' : 'bg-white text-slate-400'}`}>
                    <i className="fas fa-chevron-down text-sm"></i>
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} px-8 pb-8`}>
                  <p className="text-slate-600 leading-relaxed text-lg border-t border-slate-200 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Sudah Siap Menukar Jelantah?</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10">Jangan tunggu sampai menumpuk. Hubungi kami sekarang, kami jemput gratis, dan uang langsung cair.</p>
            <button onClick={() => window.open('https://wa.me/6281919051690', '_blank')} className="bg-white text-emerald-600 hover:bg-slate-900 hover:text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all shadow-xl active:scale-95 relative z-10">
              <i className="fab fa-whatsapp mr-2"></i> Chat WhatsApp Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-24 pb-12 text-slate-500">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="text-white font-black text-3xl mb-8 tracking-tighter">Mijel<span className="text-emerald-500">.id</span></div>
              <p className="text-lg leading-relaxed max-sm mb-8">
                Pusat pengumpulan minyak jelantah terpercaya di Jakarta dan sekitarnya. Layanan Sameday Service (Jakarta) dengan penawaran harga terbaik.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Layanan Kami</h5>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-emerald-500 transition">Jemput Rumah Tangga</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Mitra Restoran & Katering</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Beli Jelantah Partai Besar</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Edukasi & Dampak Lingkungan</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Hubungi Kami</h5>
              <ul className="space-y-4 text-sm font-bold">
                <li className="flex gap-3"><i className="fas fa-map-marker-alt text-emerald-500"></i> Jl. Daan Mogot 2 No. B5, Jakarta Barat</li>
                <li className="flex gap-3"><i className="fas fa-phone-alt text-emerald-500"></i> +62 819-1905-1690</li>
                <li className="flex gap-3"><i className="fas fa-envelope text-emerald-500"></i> halo@mijel.id</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold tracking-widest uppercase">© 2024 MIJEL.ID — ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
              <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Mobile Only / Desktop Style */}
      <div className="fixed bottom-10 right-10 z-[100] group">
        <div className="absolute bottom-full right-0 mb-4 bg-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
          <p className="text-slate-800 font-black text-sm">Ada pertanyaan? Chat admin!</p>
        </div>
        <a 
          href="https://wa.me/6281919051690" 
          target="_blank" 
          className="bg-[#25D366] text-white w-16 h-16 rounded-[1.5rem] shadow-2xl flex items-center justify-center text-3xl border-4 border-white transition-all transform hover:scale-110 active:scale-90"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
