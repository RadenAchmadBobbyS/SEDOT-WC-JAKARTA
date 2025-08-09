"use client"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowLeft, Clock, User, CheckCircle, AlertTriangle, Wrench, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Mengatasi WC Mampet: 8 Solusi Ampuh & Tips Pencegahan",
  description:
    "Panduan lengkap mengatasi WC mampet dengan 8 cara ampuh mulai dari plunger hingga jasa profesional, plus tips pencegahan terlengkap",
  image: "https://sedotwc-jakarta.com/og-wc-mampet-solutions.jpg",
  author: {
    "@type": "Organization",
    name: "SedotWC Jakarta",
    url: "https://sedotwc-jakarta.com",
  },
  publisher: {
    "@type": "Organization",
    name: "SedotWC Jakarta",
    logo: {
      "@type": "ImageObject",
      url: "https://sedotwc-jakarta.com/logo.png",
    },
  },
  datePublished: "2024-01-15",
  dateModified: "2024-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sedotwc-jakarta.com/artikel/wc-mampet",
  },
  articleSection: "Panduan & Tips",
  wordCount: 2500,
  articleBody: "WC mampet adalah masalah umum yang bisa diatasi dengan berbagai cara...",
  about: [
    {
      "@type": "Thing",
      name: "WC Mampet",
    },
    {
      "@type": "Thing",
      name: "Toilet Tersumbat",
    },
    {
      "@type": "Thing",
      name: "Sedot WC",
    },
  ],
}

export default function WCMampetArticle() {
  // Statistik global: ambil dan update jumlah view dari API
  const [viewCount, setViewCount] = useState<number>(0);
  useEffect(() => {
    // Tambah view setiap kali halaman diakses
    fetch("/api/artikel-views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setViewCount(data.views || 0);
      });
  }, []);
  const solutions = [
    {
      id: 1,
      title: "Gunakan Alat Penyedot (Plunger)",
      icon: "🪠",
      difficulty: "Mudah",
      time: "5-10 menit",
      description: "Alat ini bekerja dengan menciptakan tekanan untuk mendorong sumbatan keluar.",
      steps: [
        "Pastikan ada cukup air di dalam toilet untuk menutupi bagian karet plunger",
        "Posisikan plunger tepat di atas lubang pembuangan toilet",
        "Tekan plunger beberapa kali dengan kuat ke dalam lubang WC",
        "Tarik dengan cepat untuk menciptakan tekanan hisap",
        "Ulangi gerakan ini 10-15 kali dengan ritme yang konsisten",
        "Siram toilet untuk melihat apakah sumbatan sudah teratasi",
      ],
      tips: [
        "Gunakan plunger khusus toilet (flange plunger) untuk hasil maksimal",
        "Pastikan seal yang rapat antara plunger dan lubang toilet",
        "Jangan terlalu keras menekan agar tidak merusak keramik",
      ],
    },
    {
      id: 2,
      title: "Campuran Cuka dan Baking Soda",
      icon: "🧪",
      difficulty: "Mudah",
      time: "2-8 jam",
      description: "Reaksi kimia alami yang dapat melunakkan dan mengurai sumbatan organik.",
      steps: [
        "Siapkan 1 cangkir baking soda dan 2 cangkir cuka putih",
        "Tuangkan baking soda terlebih dahulu ke dalam toilet",
        "Tambahkan cuka secara perlahan (akan terjadi reaksi berbusa)",
        "Biarkan campuran bereaksi selama 30 menit hingga 2 jam",
        "Untuk sumbatan parah, diamkan semalaman (8 jam)",
        "Siram dengan air panas untuk membantu membersihkan sisa sumbatan",
      ],
      tips: [
        "Gunakan cuka putih untuk hasil terbaik",
        "Jangan gunakan air mendidih yang bisa merusak keramik",
        "Metode ini paling efektif untuk sumbatan organik",
      ],
    },
    {
      id: 3,
      title: "Air Panas",
      icon: "🔥",
      difficulty: "Sangat Mudah",
      time: "15-30 menit",
      description: "Efektif untuk meluruhkan sumbatan yang disebabkan oleh lemak, minyak, atau sabun.",
      steps: [
        "Panaskan air hingga hampir mendidih (jangan sampai mendidih)",
        "Biarkan air mendingin sedikit (suhu sekitar 60-70°C)",
        "Tuangkan air panas secara perlahan dari ketinggian pinggang",
        "Tuang dalam beberapa tahap, beri jeda 10-15 detik",
        "Diamkan selama 10-15 menit",
        "Coba siram toilet untuk melihat hasilnya",
      ],
      tips: [
        "JANGAN gunakan air mendidih - bisa merusak keramik toilet",
        "Tuang dari ketinggian untuk menambah tekanan gravitasi",
        "Efektif dikombinasikan dengan sabun cuci piring",
      ],
    },
    {
      id: 4,
      title: "Garam Kasar",
      icon: "🧂",
      difficulty: "Mudah",
      time: "8-12 jam",
      description: "Garam kasar dapat membantu mengikis dan melunakkan sumbatan keras.",
      steps: [
        "Siapkan 250-500 gram garam kasar (garam dapur biasa)",
        "Tuangkan garam langsung ke dalam lubang toilet",
        "Tambahkan air panas (tidak mendidih) secukupnya",
        "Aduk perlahan dengan sikat toilet jika perlu",
        "Diamkan semalaman (8-12 jam) untuk hasil maksimal",
        "Siram dengan air keesokan harinya",
      ],
      tips: [
        "Gunakan garam kasar, bukan garam halus",
        "Semakin lama didiamkan, semakin efektif",
        "Bisa dikombinasikan dengan baking soda untuk hasil lebih baik",
      ],
    },
    {
      id: 5,
      title: "Sabun Cuci Piring",
      icon: "🧽",
      difficulty: "Sangat Mudah",
      time: "30-60 menit",
      description: "Sabun cuci piring dapat melumasi dan melunakkan sumbatan.",
      steps: [
        "Tuangkan 1/4 hingga 1/2 cangkir sabun cuci piring ke dalam toilet",
        "Biarkan sabun mengendap selama 20-30 menit",
        "Tambahkan air panas (tidak mendidih) secara perlahan",
        "Diamkan selama 30-60 menit",
        "Gunakan plunger untuk membantu mendorong sumbatan",
        "Siram toilet untuk melihat hasilnya",
      ],
      tips: [
        "Gunakan sabun cuci piring yang kental dan berkualitas",
        "Sabun akan bertindak sebagai pelumas alami",
        "Kombinasi dengan air panas memberikan hasil terbaik",
      ],
    },
    {
      id: 6,
      title: "Soda Api (Sodium Hydroxide)",
      icon: "⚠️",
      difficulty: "Sulit",
      time: "2-4 jam",
      description: "Bahan kimia kuat yang dapat mengurai sumbatan keras, namun perlu kehati-hatian.",
      steps: [
        "WAJIB gunakan sarung tangan karet dan masker",
        "Pastikan ruangan berventilasi baik",
        "Tuangkan 2-3 sendok makan soda api ke dalam toilet",
        "Tambahkan air panas secara perlahan dan hati-hati",
        "Diamkan selama 2-4 jam (JANGAN lebih dari 6 jam)",
        "Siram dengan banyak air untuk membersihkan sisa kimia",
      ],
      tips: [
        "BAHAYA: Selalu gunakan APD lengkap",
        "Jangan dicampur dengan bahan kimia lain",
        "Jauhkan dari jangkauan anak-anak",
        "Jika tidak yakin, lebih baik panggil profesional",
      ],
    },
    {
      id: 7,
      title: "Alat Pembersih Pipa (Drain Snake)",
      icon: "🐍",
      difficulty: "Sedang",
      time: "30-60 menit",
      description: "Alat khusus yang dapat menjangkau sumbatan yang lebih dalam di dalam pipa.",
      steps: [
        "Siapkan drain snake atau auger toilet",
        "Masukkan ujung alat ke dalam lubang toilet secara perlahan",
        "Putar handle searah jarum jam sambil mendorong masuk",
        "Rasakan ketika alat menyentuh sumbatan",
        "Putar dan tarik bergantian untuk memecah sumbatan",
        "Tarik alat keluar dan siram toilet untuk tes",
      ],
      tips: [
        "Gunakan alat yang sesuai ukuran toilet",
        "Jangan terlalu memaksa agar tidak merusak pipa",
        "Bersihkan alat setelah digunakan",
      ],
    },
    {
      id: 8,
      title: "Jasa Sedot WC Profesional",
      icon: "🚛",
      difficulty: "Profesional",
      time: "30-90 menit",
      description: "Solusi terbaik untuk sumbatan parah yang tidak bisa diatasi dengan cara manual.",
      steps: [
        "Hubungi jasa sedot WC profesional terpercaya",
        "Jelaskan kondisi dan gejala WC mampet",
        "Jadwalkan kunjungan teknisi (layanan 24 jam tersedia)",
        "Teknisi akan melakukan inspeksi menyeluruh",
        "Proses penyedotan dengan peralatan profesional",
        "Pembersihan dan pengecekan sistem secara keseluruhan",
      ],
      tips: [
        "Pilih jasa yang berlisensi dan berpengalaman",
        "Pastikan ada garansi layanan",
        "Tanyakan estimasi waktu dan biaya di awal",
      ],
    },
  ]

  const causes = [
    {
      icon: "🧻",
      title: "Tisu Berlebihan",
      description: "Penggunaan tisu toilet berlebihan atau tisu yang tidak mudah larut",
    },
    {
      icon: "🩸",
      title: "Pembalut & Kapas",
      description: "Membuang pembalut, kapas, atau produk kebersihan lainnya",
    },
    {
      icon: "👶",
      title: "Mainan Anak",
      description: "Mainan kecil atau benda asing yang dibuang anak-anak",
    },
    {
      icon: "🍖",
      title: "Sisa Makanan",
      description: "Lemak, minyak, atau sisa makanan yang mengeras",
    },
    {
      icon: "💊",
      title: "Obat-obatan",
      description: "Obat kadaluarsa atau suplemen yang tidak larut",
    },
    {
      icon: "🔧",
      title: "Masalah Teknis",
      description: "Pipa tersumbat, tekanan air rendah, atau kerusakan sistem",
    },
  ]

  const preventionTips = [
    {
      icon: "✅",
      title: "Gunakan Tisu Secukupnya",
      description: "Pastikan tisu toilet mudah larut dan gunakan dalam jumlah wajar",
    },
    {
      icon: "🚫",
      title: "Jangan Buang Benda Asing",
      description: "Hindari membuang pembalut, kapas, kondom, atau benda lain ke toilet",
    },
    {
      icon: "🧼",
      title: "Perawatan Rutin",
      description: "Bersihkan toilet secara teratur dan lakukan maintenance berkala",
    },
    {
      icon: "💧",
      title: "Cek Tekanan Air",
      description: "Pastikan tekanan air cukup untuk pembilasan yang efektif",
    },
    {
      icon: "👨‍🔧",
      title: "Inspeksi Berkala",
      description: "Lakukan pemeriksaan sistem sanitasi setiap 6 bulan sekali",
    },
    {
      icon: "📚",
      title: "Edukasi Keluarga",
      description: "Ajarkan seluruh anggota keluarga cara penggunaan toilet yang benar",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Statistik Pengunjung Artikel Global */}
      <div className="fixed top-0 right-0 m-4 bg-white/90 border border-blue-200 rounded-xl shadow-lg px-4 py-2 text-sm text-blue-700 z-50">
        <span>Artikel ini sudah dilihat: <b>{viewCount}</b> kali</span>
      </div>
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Cara Mengatasi WC Mampet: 8 Solusi Ampuh & Tips Pencegahan
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>15 menit baca</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Tim SedotWC Jakarta</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>Panduan Terlengkap</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              WC mampet adalah masalah umum yang bisa sangat mengganggu aktivitas sehari-hari. Artikel ini memberikan
              panduan lengkap dengan 8 solusi terbukti ampuh, mulai dari cara sederhana yang bisa dilakukan sendiri
              hingga bantuan profesional untuk kasus yang lebih kompleks.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/sedot-7.webp"
              alt="Panduan Lengkap Mengatasi WC Mampet - SedotWC Jakarta"
              width={800}
              height={400}
              quality={90}
              className="w-full h-auto"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>WC mampet</strong> bisa diatasi dengan beberapa cara, mulai dari yang sederhana seperti
              menggunakan plunger atau cuka dan baking soda, hingga yang lebih kompleks seperti menggunakan alat
              pembersih pipa atau memanggil jasa sedot WC profesional.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Dalam panduan ini, kami akan membahas <strong>8 solusi efektif</strong> yang telah terbukti berhasil
              mengatasi berbagai jenis sumbatan WC, lengkap dengan langkah-langkah detail, tips keamanan, dan estimasi
              waktu yang dibutuhkan.
            </p>
          </div>

          {/* Causes Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              Penyebab Umum WC Mampet
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {causes.map((cause, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{cause.icon}</div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{cause.title}</h3>
                    <p className="text-gray-600">{cause.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Solutions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Wrench className="h-8 w-8 text-blue-500 mr-3" />8 Solusi Ampuh Mengatasi WC Mampet
            </h2>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <Card key={solution.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-5xl">{solution.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {index + 1}. {solution.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {solution.difficulty}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            ⏱️ {solution.time}
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg mb-6">{solution.description}</p>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="mb-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-4">Langkah-langkah:</h4>
                      <ol className="space-y-3">
                        {solution.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tips */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center">💡 Tips Penting:</h4>
                      <ul className="space-y-2">
                        {solution.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Prevention Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Shield className="h-8 w-8 text-green-500 mr-3" />
              Tips Pencegahan WC Mampet
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {preventionTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{tip.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                🌟 Ingat: Pencegahan Lebih Baik dari Pengobatan!
              </h3>
              <p className="text-green-700 text-lg">
                Dengan menerapkan tips pencegahan di atas secara konsisten, Anda dapat mengurangi risiko WC mampet
                hingga 90%. Perawatan rutin dan penggunaan yang bijak adalah kunci utama menjaga sistem sanitasi tetap
                lancar.
              </p>
            </div>
          </section>

          {/* Emergency CTA */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white overflow-hidden">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">🚨 WC Mampet Parah? Butuh Bantuan Segera?</h2>
                <p className="text-xl mb-6 text-red-100">
                  Jika semua cara di atas tidak berhasil, jangan panik! Tim profesional kami siap membantu 24 jam.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    <a href="tel:+6281234567890" className="font-bold">
                      📞 Hubungi Darurat: 081219067233
                    </a>
                  </Button>
                  <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                    <a href="https://wa.me/6281219067233?text=Halo, saya butuh jasa sedot WC Mandala" className="font-bold">
                      💬 WhatsApp Sekarang
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Professional Service CTA */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Kenapa Pilih SedotWC Jakarta?</h2>
                  <p className="text-xl text-blue-100">
                    Lebih dari 1000+ pelanggan puas telah mempercayai layanan profesional kami
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="font-bold mb-2">Respon Cepat</h3>
                    <p className="text-blue-100 text-sm">Tiba di lokasi dalam 30-60 menit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔧</div>
                    <h3 className="font-bold mb-2">Peralatan Modern</h3>
                    <p className="text-blue-100 text-sm">Teknologi terdepan & ramah lingkungan</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">👨‍🔧</div>
                    <h3 className="font-bold mb-2">Teknisi Bersertifikat</h3>
                    <p className="text-blue-100 text-sm">Berpengalaman 5+ tahun</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🛡️</div>
                    <h3 className="font-bold mb-2">Bergaransi</h3>
                    <p className="text-blue-100 text-sm">Garansi layanan & kepuasan</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
                    <Link href="/kontak">📞 Konsultasi Gratis Sekarang</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kesimpulan</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mengatasi WC mampet tidak selalu memerlukan bantuan profesional. Dengan 8 solusi yang telah dijelaskan
                di atas, Anda dapat menangani sebagian besar kasus sumbatan toilet secara mandiri. Mulailah dengan
                metode yang paling sederhana dan aman, kemudian tingkatkan ke solusi yang lebih kompleks jika
                diperlukan.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Namun, untuk kasus yang parah atau jika Anda tidak yakin dengan prosedurnya,
                <strong> jangan ragu untuk menghubungi jasa sedot WC profesional</strong>. Penanganan yang salah bisa
                menyebabkan kerusakan yang lebih besar dan biaya perbaikan yang mahal.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-blue-800 font-semibold">
                  💡 <strong>Ingat:</strong> Pencegahan selalu lebih baik dan lebih murah daripada perbaikan. Terapkan
                  tips pencegahan yang telah dijelaskan untuk menjaga toilet Anda tetap lancar dan bersih.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </div>
  )
}
