
import React, { useState } from 'react';
import ImpactCalculator from './components/ImpactCalculator';
import { BlogPost, FAQItem, Testimonial } from './types';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const testimonials: Testimonial[] = [
    {
      name: "Ibu Sari Hartati",
      role: "Ibu Rumah Tangga",
      content: "Dulu bingung mau buang minyak jelantah kemana, takut nyumbat got. Sekarang malah jadi tambahan uang belanja dapur. Penjemputannya juga ramah banget!",
      avatar: "https://picsum.photos/seed/sari/100/100"
    },
    {
      name: "Pak Budi Santoso",
      role: "Pemilik Warung Gorengan",
      content: "Sebagai pedagang gorengan, limbah minyak itu masalah besar. Mijel.id ngasih solusi yang menguntungkan. Timbangannya pas digital, bayarnya cash di tempat.",
      avatar: "https://picsum.photos/seed/budi/100/100"
    },
    {
      name: "Cafe Kopi Senja",
      role: "Mitra Restoran",
      content: "Sangat profesional. Jadwal penjemputan rutin dan on-time. Sertifikat pengangkutannya juga jelas, jadi kami aman secara regulasi lingkungan.",
      avatar: "https://picsum.photos/seed/cafe/100/100"
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
      image: "https://picsum.photos/seed/health/600/400"
    },
    {
      id: 2,
      title: "Perjalanan Jelantah Menjadi Biodiesel",
      category: "Teknologi",
      date: "08 Nov 2023",
      author: "Admin Mijel",
      summary: "Tahukah Anda bahwa limbah dapur Anda bisa menjadi bahan bakar pesawat? Simak proses pengolahan canggih mitra kami.",
      image: "https://picsum.photos/seed/bio/600/400"
    },
    {
      id: 3,
      title: "Tips Mengumpulkan Jelantah di Rumah Agar Tidak Bau",
      category: "Tips",
      date: "15 Jan 2024",
      author: "Sari H.",
      summary: "Jangan asal simpan! Ikuti tips praktis ini agar wadah penampungan minyak bekas Anda tetap higienis dan tidak mengundang semut.",
      image: "https://picsum.photos/seed/tips/600/400"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Apakah ada minimal jumlah liter untuk penjemputan?",
      answer: "Ya, untuk efisiensi penjemputan gratis, kami menetapkan minimal 5 liter untuk area Jakarta dan sekitarnya. Jika jumlahnya kurang, Anda bisa mengumpulkannya terlebih dahulu atau membawanya ke drop point terdekat kami."
    },
    {
      question: "Jenis minyak apa saja yang diterima?",
      answer: "Kami menerima hampir semua jenis minyak jelantah bekas gorengan dari kelapa sawit, baik yang sudah keruh maupun yang masih relatif jernih. Namun, kami tidak menerima minyak pelumas mesin (oli) atau minyak yang sudah bercampur air/sabun."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran dilakukan secara instan setelah timbangan diverifikasi di tempat. Anda bisa memilih antara uang tunai (cash) atau transfer bank/e-wallet (Gopay/OVO/Dana)."
    },
    {
      question: "Minyak jelantahnya akan dijadikan apa?",
      answer: "Kami berkomitmen pada ekonomi sirkular. Minyak jelantah yang Anda setor akan dikirim ke pabrik pengolahan biodiesel bersertifikat ISCC untuk diolah menjadi energi terbarukan."
    }
  ];

  const navLinks = [
    { label: 'Beranda', href: '#' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Harga', href: '#harga' },
    { label: 'Tentang Kami', href: '#tentang' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-leaf text-xl"></i>
            </div>
            <span className="text-2xl font-black text-slate-800 tracking-tighter">Mijel<span className="text-emerald-600">.id</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-600 hover:text-emerald-600 font-medium transition">
                {link.label}
              </a>
            ))}
          </div>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold transition shadow-lg shadow-emerald-200">
            Jemput Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Harga Tertinggi di Jakarta
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Ubah Minyak Jelantah Menjadi <span className="gradient-text">Cuan Hari Ini!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Platform #1 di Jakarta untuk jual minyak jelantah. Harga transparan <span className="font-bold text-slate-800">Rp 6.000/liter</span>. Tidak perlu menunggu berhari-hari, armada kami siap jemput <span className="underline decoration-emerald-400 decoration-4">Sameday</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('harga')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition text-lg"
              >
                Cek Pendapatan
              </button>
              <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold transition text-lg flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp"></i> Hubungi Admin
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-12">
              <div>
                <p className="text-3xl font-black text-slate-900">Rp 150JT+</p>
                <p className="text-sm text-slate-500 font-medium">Uang Disalurkan</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-3xl font-black text-slate-900">2.500+</p>
                <p className="text-sm text-slate-500 font-medium">Mitra Bergabung</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400 opacity-10 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <img 
                src="https://picsum.photos/seed/cooking/800/800" 
                alt="Used Cooking Oil" 
                className="rounded-[2rem] w-full object-cover aspect-square mb-6"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Update Harga</p>
                  <p className="text-2xl font-black text-slate-900">Rp 6.000<span className="text-sm font-normal text-slate-400">/Liter</span></p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Area Layanan</p>
                <p className="font-bold">Jakarta & Sekitarnya</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="py-12 border-y border-slate-100 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Dipercaya oleh Mitra Pengolah Biodiesel & Komunitas Hijau</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-black text-xl"><i className="fas fa-check-circle text-emerald-600"></i> ISCC Certified</div>
            <div className="flex items-center gap-2 font-black text-xl"><i className="fas fa-flask text-emerald-600"></i> Mitra Biodiesel</div>
            <div className="flex items-center gap-2 font-black text-xl"><i className="fas fa-seedling text-emerald-600"></i> Eco Green ID</div>
            <div className="flex items-center gap-2 font-black text-xl"><i className="fas fa-recycle text-emerald-600"></i> Zero Waste All.</div>
            <div className="flex items-center gap-2 font-black text-xl"><i className="fas fa-globe-asia text-emerald-600"></i> Bumi Bersih</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-weight-hanging', title: 'Transparan', desc: 'Penimbangan digital di tempat, tanpa manipulasi berat.' },
              { icon: 'fa-leaf', title: 'Eco-Partner', desc: 'Minyak diolah menjadi biodiesel, bukan dijernihkan kembali.' },
              { icon: 'fa-bolt', title: 'Sameday Jakarta', desc: 'Pesan hari ini, kami jemput hari ini juga (Khusus Area Jakarta).' },
              { icon: 'fa-tags', title: 'Harga Terbaik', desc: 'Rp 6.000/liter atau Rp 120.000/jerigen (20L).' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 text-2xl mb-6">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mijel */}
      <section id="tentang" className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-6">Mengapa Jual di <span className="text-emerald-600">Mijel.id?</span></h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Kami bukan sekadar pembeli minyak jelantah. Kami adalah mitra Anda di Jakarta dan sekitarnya yang menawarkan layanan Jemput Cepat (Sameday khusus Jakarta) dengan harga kompetitif. Minyak yang Anda jual akan dikelola secara bertanggung jawab untuk energi terbarukan.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mt-1 flex-shrink-0">
                  <i className="fas fa-check text-[10px]"></i>
                </div>
                <span className="text-slate-700 font-medium">Mencegah penyumbatan saluran drainase ibukota.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mt-1 flex-shrink-0">
                  <i className="fas fa-check text-[10px]"></i>
                </div>
                <span className="text-slate-700 font-medium">Dapat uang tunai instan Rp 120.000 per jerigen.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mt-1 flex-shrink-0">
                  <i className="fas fa-check text-[10px]"></i>
                </div>
                <span className="text-slate-700 font-medium">Layanan cepat tanpa menunggu berhari-hari.</span>
              </li>
            </ul>
            <button className="text-emerald-600 font-bold flex items-center gap-2 group">
              Pelajari Visi Kami <i className="fas fa-arrow-right group-hover:translate-x-1 transition"></i>
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/river/400/500" className="rounded-2xl mt-8 shadow-lg" alt="River Clean" />
            <img src="https://picsum.photos/seed/city/400/500" className="rounded-2xl shadow-lg" alt="Jakarta City" />
          </div>
        </div>
      </section>

      {/* Business Partners */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Khusus Restoran, Hotel, & Katering</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Mitra Terpercaya Bisnis Kuliner Jakarta</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Mijel.id memberikan solusi manajemen limbah minyak profesional untuk bisnis Anda. Tingkatkan citra eco-friendly restoran Anda sambil mendapatkan penghasilan tambahan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: 'fa-sync', title: 'Tukar Jerigen Bersih', desc: 'Kami sediakan jerigen kosong pengganti setiap pengambilan. Dapur tetap bersih & higienis.' },
              { icon: 'fa-calendar-check', title: 'Jadwal Rutin / On-Demand', desc: 'Penjemputan terjadwal (Mingguan/Bulanan) atau panggil kami saat jerigen penuh.' },
              { icon: 'fa-file-signature', title: 'Berita Acara & Kontrak', desc: 'Dokumen lengkap untuk audit lingkungan dan kepatuhan regulasi limbah B3.' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-emerald-500 transition">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 text-2xl mb-8">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 bg-emerald-600 rounded-[3rem] p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="z-10 text-center md:text-left">
              <h4 className="text-3xl font-black mb-2">Gabung Jadi Mitra Bisnis</h4>
              <p className="text-emerald-100 font-medium">Optimalkan limbah dapur menjadi profit perusahaan.</p>
            </div>
            <div className="z-10 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-emerald-600" alt="Partner" />
                ))}
              </div>
              <p className="text-lg font-bold"><span className="block text-3xl">500+</span> Mitra Resto di Jakarta</p>
            </div>
            <button className="z-10 bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-5 rounded-2xl font-black shadow-xl transition scale-110">
              Hubungi Sales
            </button>
          </div>
        </div>
      </section>

      {/* Impact Calculator (Component) */}
      <ImpactCalculator />

      {/* How it Works */}
      <section id="cara-kerja" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Proses Jual Cepat</span>
            <h2 className="text-4xl font-black mt-4 mb-6">Cara Jual Minyak Jelantah</h2>
            <p className="text-slate-600 text-lg">Proses mudah dan cepat. Khusus area Jakarta, kami layani penjemputan di hari yang sama (Sameday).</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-emerald-100 -translate-y-1/2 -z-0"></div>
            {[
              { icon: 'fa-filter', step: '1', title: 'Kumpulkan & Saring', desc: 'Kumpulkan minyak jelantah Anda ke dalam botol atau jerigen (20L).' },
              { icon: 'fa-comment-dots', step: '2', title: 'Hubungi Admin', desc: 'Klik tombol WhatsApp. Infokan lokasi dan jumlah liter.' },
              { icon: 'fa-truck-fast', step: '3', title: 'Jemput Sameday', desc: 'Kurir kami akan datang di hari yang sama untuk menimbang.' },
              { icon: 'fa-wallet', step: '4', title: 'Terima Pembayaran', desc: 'Langsung terima uang tunai atau transfer di tempat.' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-6 shadow-lg border-4 border-white">
                  {s.step}
                </div>
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 text-2xl mb-6 border border-slate-100">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 w-full">
              <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl"></div>
                <h2 className="text-3xl font-black mb-8 relative z-10">Jangkauan Luas Jakarta</h2>
                
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 relative z-10">
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <i className="fas fa-location-dot"></i> Jakarta Barat
                    </h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li>Daan Mogot (Pusat Ops)</li>
                      <li>Cengkareng</li>
                      <li>Kebon Jeruk</li>
                      <li>Kalideres</li>
                      <li>Grogol</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <i className="fas fa-location-dot"></i> Jakarta Selatan
                    </h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li>Tebet</li>
                      <li>Kebayoran Baru</li>
                      <li>Cilandak</li>
                      <li>Pasar Minggu</li>
                      <li>Jagakarsa</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <i className="fas fa-location-dot"></i> Jakarta Pusat & Utara
                    </h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li>Menteng</li>
                      <li>Kemayoran</li>
                      <li>Kelapa Gading</li>
                      <li>Pluit</li>
                      <li>PIK</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <i className="fas fa-location-dot"></i> Sekitarnya
                    </h4>
                    <ul className="space-y-2 text-slate-400 text-sm italic">
                      <li>Tangerang Kota</li>
                      <li>Ciledug / Cipondoh</li>
                      <li>Bintaro</li>
                      <li>Poris</li>
                      <li>Non-Sameday (H+1)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-4xl font-black mb-6">Kami Menjemput di <span className="text-emerald-600">Jakarta & Sekitarnya</span></h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Mijel.id berpusat di Daan Mogot, Jakarta Barat. Armada kami siap menjemput minyak jelantah Anda dengan layanan Sameday Service khusus area ibukota.
              </p>
              
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl animate-pulse">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Status Operasional</h4>
                    <p className="text-emerald-600 text-sm font-bold">Sameday Service Aktif</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6">
                  Hubungi sebelum jam 12 siang untuk penjemputan di hari yang sama khusus area Jakarta. Untuk Tangerang dan sekitarnya estimasi H+1.
                </p>
                <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition">
                  Cek Jadwal Hari Ini
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Kata Mereka Tentang Mijel.id</h2>
            <p className="text-slate-600">Bergabunglah dengan ribuan mitra rumah tangga dan restoran yang telah menukarkan jelantah mereka.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="flex text-emerald-400 mb-6">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-slate-600 italic mb-8 flex-grow">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black mb-4">Blog & Edukasi</h2>
              <p className="text-slate-600">Seputar Jelantah, Lingkungan, dan Energi Terbarukan.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:underline">
              Lihat Semua Artikel <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img src={post.image} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-500" alt={post.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{post.summary}</p>
                <span className="text-slate-900 font-bold flex items-center gap-2 text-sm">
                  Baca Selengkapnya <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition"></i>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Pertanyaan Sering Diajukan</h2>
            <p className="text-slate-600">Punya pertanyaan lain? Cek jawaban di bawah atau hubungi admin.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-emerald-600' : 'text-slate-300'}`}></i>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                    <div className="pt-2 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Sudah Siap Menukar Jelantah?</h2>
            <p className="text-emerald-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Jangan tunggu sampai menumpuk. Hubungi kami sekarang, kami jemput gratis, dan uang langsung cair. Praktis, bukan?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-3">
                <i className="fab fa-whatsapp"></i> Chat WhatsApp
              </button>
              <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition transform hover:scale-105">
                Cek Harga Hari Ini
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white">
                <i className="fas fa-leaf"></i>
              </div>
              <span className="text-xl font-black text-white tracking-tighter">Mijel<span className="text-emerald-500">.id</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Tempat Jual Minyak Jelantah Terpercaya di Jakarta dan sekitarnya. Layanan Sameday Service (Jakarta) dengan harga terbaik.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition text-white">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Navigasi</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">Beranda</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Cara Jual</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Cek Harga</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Layanan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">Jemput Rumah Tangga</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Mitra Restoran</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Beli Jelantah Partai Besar</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Edukasi Lingkungan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Hubungi Kami</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-emerald-500 mt-1"></i>
                <span>Jl. Daan Mogot 2 No. B5, Jakarta Barat, Indonesia</span>
              </li>
              <li className="flex items-start gap-4">
                <i className="fab fa-whatsapp text-emerald-500 mt-1"></i>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-4">
                <i className="fas fa-envelope text-emerald-500 mt-1"></i>
                <span>halo@mijel.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-medium uppercase tracking-widest gap-4">
          <p>© 2024 Mijel.id. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition flex items-center justify-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">Chat Admin Sekarang</span>
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default App;
