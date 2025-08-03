import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, Star, CheckCircle, Truck, ArrowLeft, Users, Award, Shield } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import PageLoader from "@/components/page-loader"

export const metadata: Metadata = {
  title: "Sedot WC Jakarta Selatan Terpercaya 24 Jam - Kebayoran, Cilandak, Jagakarsa | Harga Murah",
  description:
    "⭐ SEDOT WC JAKARTA SELATAN TERPERCAYA ⭐ Melayani Kebayoran, Cilandak, Jagakarsa, Pasar Minggu, Pesanggrahan 24 jam. Harga mulai 150rb, Teknisi Profesional, Bergaransi, Respon 30 menit. HUBUNGI SEKARANG!",
  keywords:
    "sedot wc jakarta selatan, sedot wc kebayoran, sedot wc cilandak, sedot wc jagakarsa, sedot wc pasar minggu, sedot wc pesanggrahan, sedot wc mampang, sedot wc pancoran, sedot wc tebet, sedot wc setiabudi, jasa sedot wc jakarta selatan, layanan sedot wc jakarta selatan 24 jam, harga sedot wc jakarta selatan, sedot wc murah jakarta selatan, sedot wc darurat jakarta selatan, teknisi sedot wc jakarta selatan, perusahaan sedot wc jakarta selatan, kontraktor sedot wc jakarta selatan",
  openGraph: {
    title: "Sedot WC Jakarta Selatan Terpercaya 24 Jam - Harga Murah Bergaransi",
    description:
      "⭐ Layanan Sedot WC Jakarta Selatan TERPERCAYA ⭐ Melayani semua kecamatan 24 jam. Harga mulai 150rb, Teknisi Profesional, Bergaransi.",
    type: "website",
    locale: "id_ID",
    url: "https://sedotwcmandala.com/jakarta-selatan",
    images: [
      {
        url: "/og-sedot-wc-jakarta-selatan.jpg",
        width: 1200,
        height: 630,
        alt: "Sedot WC Jakarta Selatan - Layanan Profesional 24 Jam",
      },
    ],
  },
  alternates: {
    canonical: "https://sedotwcmandala.com/jakarta-selatan",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const kecamatanJaksel = [
  {
    name: "Kebayoran Baru",
    kelurahan: [
      "Senayan",
      "Kramat Pela",
      "Gandaria Utara",
      "Cipete Utara",
      "Pulo",
      "Melawai",
      "Petogogan",
      "Rawa Barat",
      "Gunung",
      "Selong",
    ],
    specialties: ["Apartemen Mewah", "Townhouse", "Perkantoran CBD"],
  },
  {
    name: "Kebayoran Lama",
    kelurahan: [
      "Kebayoran Lama Utara",
      "Kebayoran Lama Selatan",
      "Pondok Pinang",
      "Cipulir",
      "Grogol Utara",
      "Grogol Selatan",
    ],
    specialties: ["Perumahan Padat", "Ruko", "Apartemen"],
  },
  {
    name: "Pesanggrahan",
    kelurahan: ["Pesanggrahan", "Bintaro", "Petukangan Utara", "Petukangan Selatan", "Ulujami"],
    specialties: ["Cluster Modern", "Perumahan Subsidi", "Komplek"],
  },
  {
    name: "Cilandak",
    kelurahan: ["Cilandak Barat", "Lebak Bulus", "Pondok Labu", "Cipete Selatan"],
    specialties: ["Mall", "Apartemen", "Perumahan Elite"],
  },
  {
    name: "Pasar Minggu",
    kelurahan: [
      "Pasar Minggu",
      "Kebagusan",
      "Jati Padang",
      "Ragunan",
      "Pejaten Barat",
      "Pejaten Timur",
      "Cilandak Timur",
    ],
    specialties: ["Perumahan Tradisional", "Ruko", "Fasilitas Umum"],
  },
  {
    name: "Jagakarsa",
    kelurahan: ["Jagakarsa", "Tanjung Barat", "Lenteng Agung", "Ciganjur", "Srengseng Sawah", "Cipedak"],
    specialties: ["Perumahan Padat", "Kampung", "Cluster"],
  },
  {
    name: "Mampang Prapatan",
    kelurahan: ["Mampang Prapatan", "Bangka", "Kemang", "Pela Mampang", "Tegal Parang"],
    specialties: ["Apartemen Premium", "Cafe & Restoran", "Perkantoran"],
  },
  {
    name: "Pancoran",
    kelurahan: ["Pancoran", "Kalibata", "Rawa Jati", "Duren Tiga", "Cikoko", "Pengadegan"],
    specialties: ["Apartemen", "Rusun", "Perkantoran"],
  },
  {
    name: "Tebet",
    kelurahan: [
      "Tebet Barat",
      "Tebet Timur",
      "Kebon Baru",
      "Bukit Duri",
      "Manggarai",
      "Manggarai Selatan",
      "Menteng Dalam",
    ],
    specialties: ["Perumahan Menengah", "Apartemen", "Sekolah"],
  },
  {
    name: "Setiabudi",
    kelurahan: ["Setiabudi", "Karet", "Karet Semanggi", "Kuningan Timur", "Menteng Atas", "Pasar Manggis", "Guntur"],
    specialties: ["Gedung Tinggi", "Hotel Mewah", "Perkantoran Premium"],
  },
]

const testimonials = [
  {
    name: "Budi Santoso",
    location: "Kebayoran Baru",
    rating: 5,
    comment:
      "Pelayanan sangat memuaskan di area Kebayoran. Tim datang tepat waktu dan bekerja dengan sangat profesional. Apartemen saya di Senayan langsung bersih kembali.",
    service: "Sedot WC Apartemen",
    date: "2 minggu lalu",
  },
  {
    name: "Sari Dewi",
    location: "Cilandak",
    rating: 5,
    comment:
      "Sudah 3 kali menggunakan jasa mereka di Cilandak, selalu puas dengan hasilnya. Harga juga reasonable untuk area premium seperti ini.",
    service: "Sedot WC Rumah",
    date: "1 bulan lalu",
  },
  {
    name: "Ahmad Rahman",
    location: "Jagakarsa",
    rating: 5,
    comment:
      "Layanan darurat di Jagakarsa sangat membantu. Tim responsif dan peralatan lengkap. Datang dalam 25 menit!",
    service: "Layanan Darurat",
    date: "3 hari lalu",
  },
  {
    name: "Ibu Ratna",
    location: "Pondok Indah",
    rating: 5,
    comment:
      "Teknisi sangat profesional dan berpengalaman. Rumah di cluster kami ditangani dengan sangat baik dan bersih.",
    service: "Sedot WC Rumah",
    date: "1 minggu lalu",
  },
  {
    name: "Pak Hendro",
    location: "Kemang",
    rating: 5,
    comment:
      "Untuk restoran kami di Kemang, mereka selalu on time dan tidak mengganggu operasional. Sangat recommended!",
    service: "Sedot WC Komersial",
    date: "2 minggu lalu",
  },
  {
    name: "Dr. Susanto",
    location: "Tebet",
    rating: 5,
    comment: "Pelayanan untuk klinik kami di Tebet sangat memuaskan. Higienis dan sesuai standar kesehatan.",
    service: "Sedot WC Komersial",
    date: "1 bulan lalu",
  },
]

const whyChooseUs = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "3,500+ Pelanggan Jakarta Selatan",
    description: "Telah melayani ribuan pelanggan di Jakarta Selatan dengan tingkat kepuasan 99.2%",
    stats: "99.2% Tingkat Kepuasan",
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    title: "Spesialis Area Premium",
    description: "Berpengalaman menangani apartemen mewah, townhouse, dan gedung perkantoran di CBD",
    stats: "500+ Apartemen Mewah",
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-600" />,
    title: "Respon Tercepat",
    description: "Waktu respon tercepat 20-45 menit untuk seluruh area Jakarta Selatan",
    stats: "Rata-rata 32 Menit",
  },
]

const serviceProcess = [
  {
    step: "1",
    title: "Konsultasi Gratis",
    description: "Hubungi kami untuk konsultasi gratis dan penjadwalan layanan sesuai kebutuhan Anda",
    icon: "📞",
    color: "blue",
  },
  {
    step: "2",
    title: "Tim Profesional Datang",
    description: "Teknisi berpengalaman datang ke lokasi dengan peralatan lengkap dan modern",
    icon: "🚛",
    color: "green",
  },
  {
    step: "3",
    title: "Pelaksanaan Layanan",
    description: "Proses sedot WC dilakukan dengan standar profesional dan higienis",
    icon: "⚙️",
    color: "orange",
  },
  {
    step: "4",
    title: "Pembersihan & Garansi",
    description: "Area kerja dibersihkan dan Anda mendapat garansi layanan untuk kepuasan maksimal",
    icon: "✅",
    color: "purple",
  },
]

const servicePackages = [
  {
    title: "Rumah Tinggal",
    description: "Paket lengkap untuk rumah tinggal standar",
    features: [
      "Kapasitas sesuai kebutuhan",
      "Teknisi berpengalaman",
      "Peralatan higienis",
      "Garansi layanan",
      "Konsultasi gratis",
      "Pembersihan area kerja",
    ],
    popular: false,
    color: "blue",
  },
  {
    title: "Apartemen Premium",
    description: "Khusus apartemen dan townhouse",
    features: [
      "Koordinasi dengan pengelola",
      "Akses lift khusus",
      "Peralatan compact",
      "Layanan diskret",
      "Garansi extended",
      "Sertifikat layanan",
      "Emergency support",
    ],
    popular: true,
    color: "yellow",
  },
  {
    title: "Komersial & Gedung",
    description: "Untuk perkantoran dan komersial",
    features: [
      "Kapasitas besar",
      "Jadwal fleksibel",
      "Tim khusus komersial",
      "Kontrak maintenance",
      "Garansi premium",
      "Laporan lengkap",
      "Prioritas tinggi",
    ],
    popular: false,
    color: "green",
  },
]

export default function JakartaSelatanPage() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/sedot-wc-jakarta-selatan.webp')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <Link href="/" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Kembali</span>
                </Link>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                  🏙️ Spesialis Jakarta Selatan
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Sedot WC
                  <span className="block text-yellow-400">Jakarta Selatan</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl text-blue-200 font-normal mt-2 sm:mt-4">Terpercaya 24 Jam</span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Layanan sedot WC profesional di seluruh Jakarta Selatan. Melayani Kebayoran, Cilandak, Jagakarsa,
                  Pasar Minggu, Pesanggrahan dan sekitarnya dengan teknisi berpengalaman 24 jam.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Hubungi Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">20-45</div>
                  <div className="text-xs sm:text-sm text-blue-200">Menit Respon</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">3.5K+</div>
                  <div className="text-xs sm:text-sm text-blue-200">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">10</div>
                  <div className="text-xs sm:text-sm text-blue-200">Kecamatan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">99.2%</div>
                  <div className="text-xs sm:text-sm text-blue-200">Puas</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/sedot-wc-6.webp"
                  alt="Layanan Sedot WC Jakarta Selatan"
                  width={700}
                  height={600}
                  quality={90}
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-xl sm:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Keunggulan Kami</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Kami untuk Jakarta Selatan?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kami memahami karakteristik unik dan kebutuhan khusus masyarakat Jakarta Selatan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="group text-center p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="mb-4 sm:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">{item.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Area Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kecamatan yang Kami Layani di Jakarta Selatan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Tim profesional kami siap melayani seluruh kecamatan di Jakarta Selatan dengan respon cepat dan layanan
              berkualitas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {kecamatanJaksel.map((kecamatan, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {kecamatan.name}
                      </CardTitle>
                      <p className="text-xs sm:text-sm text-gray-500">{kecamatan.kelurahan.length} Kelurahan</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Spesialisasi:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {kecamatan.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Kelurahan:</h4>
                    <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                      {kecamatan.kelurahan.slice(0, 4).map((kel, idx) => (
                        <div key={idx}>• {kel}</div>
                      ))}
                      {kecamatan.kelurahan.length > 4 && (
                        <div className="text-blue-600 font-medium">
                          +{kecamatan.kelurahan.length - 4} kelurahan lainnya
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <span className="text-gray-600">Respon: 20-45 menit</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                        <span className="text-gray-600">24/7</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Specific to Jakarta Selatan */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Layanan Khusus</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Khusus Jakarta Selatan</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kami memahami karakteristik dan kebutuhan khusus masyarakat Jakarta Selatan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-blue-600 transition-colors">
                    Rumah Mewah & Townhouse
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Layanan khusus untuk rumah mewah di area Kebayoran, Pondok Indah, dan kompleks perumahan eksklusif
                  lainnya dengan standar premium.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Teknisi bersertifikat premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Peralatan khusus high-end</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Layanan diskret & profesional</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-green-600 transition-colors">
                    Apartemen High-End
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Pengalaman menangani apartemen mewah di Sudirman, Senayan, dan area premium Jakarta Selatan dengan
                  koordinasi pengelola.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Koordinasi dengan building management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Akses lift khusus service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Jadwal fleksibel sesuai aturan</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-purple-600 transition-colors">
                    Perkantoran CBD
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Layanan untuk gedung perkantoran di Central Business District dengan jadwal fleksibel sesuai
                  operasional kantor.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Jadwal di luar jam kerja</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Sertifikat K3 & lingkungan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Kontrak maintenance bulanan</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-yellow-500 text-black mb-4">Proses Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Proses Layanan Sedot WC Jakarta Selatan</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Proses yang sistematis dan profesional untuk kepuasan maksimal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {serviceProcess.map((process, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">Step {process.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{process.title}</h3>
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 ${
                  pkg.popular
                    ? "bg-yellow-500 text-black transform scale-105 shadow-2xl"
                    : "bg-white text-gray-900 shadow-xl"
                } hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-black text-yellow-500 text-center py-2 text-xs sm:text-sm font-bold">
                    ⭐ PALING POPULER ⭐
                  </div>
                )}

                <CardHeader className={`text-center ${pkg.popular ? "pt-10 sm:pt-12" : "pt-6 sm:pt-8"} pb-3 sm:pb-4`}>
                  <CardTitle className="text-lg sm:text-2xl font-bold mb-2">{pkg.title}</CardTitle>
                  <p className={`text-xs sm:text-sm ${pkg.popular ? "text-gray-700" : "text-gray-600"}`}>{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${pkg.popular ? "text-green-700" : "text-green-600"} flex-shrink-0`}
                        />
                        <span className={`text-xs sm:text-sm ${pkg.popular ? "text-gray-800" : "text-gray-600"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-4 sm:mt-6 ${
                      pkg.popular
                        ? "bg-black text-yellow-500 hover:bg-gray-800"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                    size="lg"
                  >
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Konsultasi Gratis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">
              💡 <strong>Konsultasi Gratis:</strong> Dapatkan estimasi dan saran terbaik untuk kebutuhan Anda!
            </p>
            <p className="text-xs sm:text-sm text-blue-200">*Layanan disesuaikan dengan kebutuhan dan kondisi lokasi</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Testimoni Pelanggan</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Pelanggan Jakarta Selatan</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kepercayaan pelanggan di Jakarta Selatan adalah kebanggaan kami
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-3 sm:mb-4 italic leading-relaxed text-sm sm:text-base">"{testimonial.comment}"</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-xs text-gray-400">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              Lihat Semua Testimoni
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Hubungi Kami</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami untuk Jakarta Selatan</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Tim khusus Jakarta Selatan siap melayani Anda 24 jam
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-2xl">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Hotline Jakarta Selatan</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Khusus untuk wilayah Jakarta Selatan</p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">0812-1906-7233</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">WhatsApp & Telepon • 24/7 Emergency</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-green-100 p-3 sm:p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Area Prioritas</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Kecamatan dengan respon tercepat</p>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                    <div>• Kebayoran Baru</div>
                    <div>• Kebayoran Lama</div>
                    <div>• Cilandak</div>
                    <div>• Jagakarsa</div>
                    <div>• Pasar Minggu</div>
                    <div>• Pesanggrahan</div>
                    <div>• Mampang Prapatan</div>
                    <div>• Pancoran</div>
                    <div>• Tebet</div>
                    <div>• Setiabudi</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-orange-100 p-3 sm:p-4 rounded-2xl">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Waktu Respon</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Estimasi waktu kedatangan tim</p>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>• Area Premium (Kebayoran, Senayan):</span>
                      <span className="font-semibold text-green-600">20-30 menit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Area Tengah (Cilandak, Tebet):</span>
                      <span className="font-semibold text-blue-600">30-40 menit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Area Pinggir (Jagakarsa, Pesanggrahan):</span>
                      <span className="font-semibold text-orange-600">40-45 menit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold">SedotWC Jakarta Selatan</span>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Spesialis layanan sedot WC di Jakarta Selatan sejak 2015</p>
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              <span className="font-semibold text-sm sm:text-base">0812-1906-7233</span>
            </div>
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
              ← Kembali ke Halaman Utama
            </Link>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2024 SedotWC Jakarta. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
    </PageLoader>
  )
}
