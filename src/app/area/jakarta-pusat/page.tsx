import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, Star, CheckCircle, Truck, ArrowLeft, Users, Award, Shield } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Sedot WC Jakarta Pusat Terpercaya 24 Jam - Menteng, Gambir, Tanah Abang | Layanan Premium",
  description:
    "⭐ SEDOT WC JAKARTA PUSAT TERPERCAYA ⭐ Melayani Gambir, Tanah Abang, Menteng, Senen, Cempaka Putih, Johar Baru 24 jam. Teknisi Profesional, Bergaransi, Respon Tercepat 20 menit. HUBUNGI SEKARANG!",
  keywords:
    "sedot wc jakarta pusat, sedot wc menteng, sedot wc gambir, sedot wc tanah abang, sedot wc senen, sedot wc cempaka putih, sedot wc johar baru, sedot wc kemayoran, sedot wc sawah besar, jasa sedot wc jakarta pusat, layanan sedot wc jakarta pusat 24 jam, sedot wc murah jakarta pusat, sedot wc darurat jakarta pusat, teknisi sedot wc jakarta pusat, perusahaan sedot wc jakarta pusat, kontraktor sedot wc jakarta pusat",
  openGraph: {
    title: "Sedot WC Jakarta Pusat Terpercaya 24 Jam - Layanan Premium",
    description:
      "⭐ Layanan Sedot WC Jakarta Pusat TERPERCAYA ⭐ Melayani semua kecamatan 24 jam. Teknisi Profesional, Bergaransi, Respon Tercepat.",
    type: "website",
    locale: "id_ID",
    url: "https://sedotwc-jakarta.com/jakarta-pusat",
    images: [
      {
        url: "/og-sedot-wc-jakarta-pusat.jpg",
        width: 1200,
        height: 630,
        alt: "Sedot WC Jakarta Pusat - Layanan Profesional 24 Jam",
      },
    ],
  },
  alternates: {
    canonical: "https://sedotwc-jakarta.com/jakarta-pusat",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const kecamatanJakpus = [
  {
    name: "Menteng",
    kelurahan: ["Menteng", "Pegangsaan", "Cikini", "Gondangdia", "Kebon Sirih"],
    specialties: ["Perumahan Elite", "Kedutaan", "Perkantoran Premium"],
  },
  {
    name: "Gambir",
    kelurahan: ["Gambir", "Cideng", "Petojo Utara", "Petojo Selatan", "Kebon Kelapa", "Duri Pulo"],
    specialties: ["Stasiun Pusat", "Hotel Mewah", "Gedung Pemerintah"],
  },
  {
    name: "Tanah Abang",
    kelurahan: [
      "Tanah Abang",
      "Bendungan Hilir",
      "Karet Tengsin",
      "Kebon Melati",
      "Kebon Kacang",
      "Kampung Bali",
      "Petamburan",
    ],
    specialties: ["Pusat Tekstil", "Apartemen", "Perkantoran"],
  },
  {
    name: "Senen",
    kelurahan: ["Senen", "Kwitang", "Kenari", "Paseban", "Kramat", "Bungur"],
    specialties: ["Pasar Tradisional", "Perumahan Menengah", "Sekolah"],
  },
  {
    name: "Cempaka Putih",
    kelurahan: ["Cempaka Putih Timur", "Cempaka Putih Barat", "Rawasari"],
    specialties: ["Perumahan Padat", "Industri Kecil", "Rumah Sakit"],
  },
  {
    name: "Johar Baru",
    kelurahan: ["Johar Baru", "Kampung Rawa", "Galur", "Tanah Tinggi"],
    specialties: ["Perumahan Tradisional", "Masjid Bersejarah", "Sekolah"],
  },
  {
    name: "Kemayoran",
    kelurahan: [
      "Kemayoran",
      "Kebon Kosong",
      "Cempaka Baru",
      "Sumur Batu",
      "Serdang",
      "Utan Panjang",
      "Harapan Mulya",
      "Gunung Sahari Utara",
    ],
    specialties: ["Pameran", "Hotel", "Apartemen Modern"],
  },
  {
    name: "Sawah Besar",
    kelurahan: ["Sawah Besar", "Pasar Baru", "Karang Anyar", "Kartini", "Gunung Sahari Selatan"],
    specialties: ["Pusat Perdagangan", "Ruko", "Perumahan Tua"],
  },
]

const testimonials = [
  {
    name: "Dr. Susanto",
    location: "Menteng",
    rating: 5,
    comment:
      "Pelayanan di Menteng sangat profesional dan diskret. Tim datang tepat waktu dan bekerja dengan sangat rapi. Cocok untuk area premium seperti ini.",
    service: "Sedot WC Premium",
    date: "1 minggu lalu",
  },
  {
    name: "Budi Hartono",
    location: "Gambir",
    rating: 5,
    comment:
      "Untuk hotel kami di Gambir, mereka sangat profesional. Tidak mengganggu tamu dan koordinasi dengan management sangat baik.",
    service: "Sedot WC Hotel",
    date: "2 minggu lalu",
  },
  {
    name: "Sari Dewi",
    location: "Tanah Abang",
    rating: 5,
    comment:
      "Sudah beberapa kali pakai jasa mereka di area Tanah Abang, selalu puas. Tim sangat berpengalaman dan peralatan modern.",
    service: "Sedot WC Apartemen",
    date: "3 hari lalu",
  },
  {
    name: "Ahmad Rahman",
    location: "Kemayoran",
    rating: 5,
    comment:
      "Layanan untuk gedung pameran kami di Kemayoran sangat memuaskan. Jadwal fleksibel dan hasil kerja berkualitas tinggi.",
    service: "Sedot WC Komersial",
    date: "1 bulan lalu",
  },
  {
    name: "Ibu Ratna",
    location: "Senen",
    rating: 5,
    comment: "Meski di area padat Senen, mereka tetap bisa akses dengan baik. Teknisi sangat berpengalaman dan ramah.",
    service: "Sedot WC Rumah",
    date: "2 minggu lalu",
  },
  {
    name: "Pak Joko",
    location: "Cempaka Putih",
    rating: 5,
    comment: "Pelayanan darurat di Cempaka Putih sangat membantu. Tim responsif dan datang dalam 25 menit. Excellent!",
    service: "Layanan Darurat",
    date: "1 minggu lalu",
  },
]

const serviceProcess = [
  {
    step: "1",
    title: "Konsultasi Premium",
    description: "Konsultasi gratis dengan standar layanan premium Jakarta Pusat",
    icon: "👔",
    color: "purple",
  },
  {
    step: "2",
    title: "Assessment Profesional",
    description: "Tim melakukan assessment menyeluruh sesuai standar area premium",
    icon: "🔍",
    color: "blue",
  },
  {
    step: "3",
    title: "Eksekusi Premium",
    description: "Pelaksanaan dengan standar premium dan peralatan terdepan",
    icon: "⭐",
    color: "gold",
  },
  {
    step: "4",
    title: "Quality Assurance",
    description: "Pemeriksaan kualitas premium dan garansi layanan terbaik",
    icon: "✨",
    color: "green",
  },
]

const servicePackages = [
  {
    title: "Executive Package",
    description: "Untuk perumahan dan kantor premium",
    features: [
      "Layanan premium diskret",
      "Teknisi bersertifikat tinggi",
      "Peralatan terdepan",
      "Garansi premium",
      "Konsultasi eksklusif",
      "Priority support",
    ],
    popular: false,
    color: "purple",
  },
  {
    title: "VIP Corporate",
    description: "Khusus gedung perkantoran & hotel",
    features: [
      "Jadwal fleksibel 24/7",
      "Tim corporate specialist",
      "Layanan tanpa gangguan operasional",
      "Prioritas tertinggi",
      "Garansi corporate",
      "Kontrak maintenance",
      "Dedicated account manager",
    ],
    popular: true,
    color: "yellow",
  },
  {
    title: "Government & Embassy",
    description: "Untuk gedung pemerintah & kedutaan",
    features: [
      "Clearance khusus",
      "Tim tersertifikasi security",
      "Protokol keamanan tinggi",
      "Koordinasi khusus",
      "Garansi institusional",
      "Laporan compliance",
      "Emergency protocol",
    ],
    popular: false,
    color: "blue",
  },
]

const whyChooseUs = [
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: "1,200+ Pelanggan Jakarta Pusat",
    description: "Telah melayani ribuan pelanggan premium di Jakarta Pusat dengan tingkat kepuasan 99.5%",
    stats: "99.5% Tingkat Kepuasan",
  },
  {
    icon: <Award className="h-8 w-8 text-gold-600" />,
    title: "Premium Service Specialist",
    description: "Spesialis layanan premium untuk area elit Jakarta Pusat dengan standar internasional",
    stats: "Premium Certified",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Respon Tercepat",
    description: "Waktu respon tercepat di Jakarta dengan rata-rata 20-45 menit ke seluruh Jakarta Pusat",
    stats: "20-45 Menit",
  },
]

export default function JakartaPusatPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Jakarta+Pusat+Background')] opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center space-x-4 mb-4 lg:mb-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Kembali</span>
                </Link>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                  🏛️ Spesialis Jakarta Pusat
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Sedot WC
                  <span className="block text-yellow-400">Jakarta Pusat</span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-200 font-normal mt-2 sm:mt-4">
                    Premium Service 24 Jam
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed max-w-2xl">
                  Layanan sedot WC premium di seluruh Jakarta Pusat. Melayani Menteng, Gambir, Tanah Abang, Senen,
                  Cempaka Putih, Kemayoran dengan standar layanan premium 24 jam.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  Hubungi Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 bg-transparent text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  Konsultasi Premium
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-6 lg:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">20-45</div>
                  <div className="text-xs sm:text-sm text-purple-200">Menit Respon</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">1.2K+</div>
                  <div className="text-xs sm:text-sm text-purple-200">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">8</div>
                  <div className="text-xs sm:text-sm text-purple-200">Kecamatan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">99.5%</div>
                  <div className="text-xs sm:text-sm text-purple-200">Puas</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <Image
                  src="/images/sedot-7.webp"
                  alt="Layanan Sedot WC Jakarta Pusat"
                  width={700}
                  height={600}
                  quality={90}
                  className="rounded-xl lg:rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-purple-600/20 rounded-xl lg:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Keunggulan Kami</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Kami untuk Jakarta Pusat?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kami memahami standar premium yang dibutuhkan Jakarta Pusat sebagai pusat pemerintahan dan bisnis
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="group text-center p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="mb-4 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-xl lg:text-2xl font-bold text-purple-600">{item.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Area Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kecamatan yang Kami Layani di Jakarta Pusat
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tim profesional kami siap melayani seluruh kecamatan di Jakarta Pusat dengan standar premium
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {kecamatanJakpus.map((kecamatan, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
                  <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base lg:text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {kecamatan.name}
                      </CardTitle>
                      <p className="text-xs lg:text-sm text-gray-500">{kecamatan.kelurahan.length} Kelurahan</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 lg:space-y-4 p-4 lg:p-6 pt-0">
                  <div>
                    <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-2">Spesialisasi:</h4>
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                      {kecamatan.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-2">Kelurahan:</h4>
                    <div className="text-xs lg:text-sm text-gray-600 space-y-1">
                      {kecamatan.kelurahan.slice(0, 4).map((kel, idx) => (
                        <div key={idx}>• {kel}</div>
                      ))}
                      {kecamatan.kelurahan.length > 4 && (
                        <div className="text-purple-600 font-medium">
                          +{kecamatan.kelurahan.length - 4} kelurahan lainnya
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 lg:pt-4 border-t">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs lg:text-sm gap-2 sm:gap-0">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                        <span className="text-gray-600">Respon: 20-45 menit</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600" />
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

      {/* Services Specific to Jakarta Pusat */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Layanan Premium</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Premium Jakarta Pusat</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kami memahami standar premium yang dibutuhkan Jakarta Pusat sebagai pusat pemerintahan dan bisnis
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 lg:pb-4 p-0">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <span className="text-lg lg:text-xl font-bold group-hover:text-purple-600 transition-colors">
                    Gedung Pemerintah
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  Pengalaman menangani gedung pemerintahan dan instansi dengan protokol keamanan tinggi dan clearance
                  khusus.
                </p>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Security clearance tersertifikasi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Protokol keamanan tinggi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Koordinasi dengan security</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 lg:pb-4 p-0">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <span className="text-lg lg:text-xl font-bold group-hover:text-blue-600 transition-colors">
                    Hotel & Kedutaan
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  Spesialis untuk hotel mewah dan kedutaan besar dengan standar internasional dan layanan diskret.
                </p>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Standar hospitality internasional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Layanan diskret premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Diplomatic protocol</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 lg:pb-4 p-0">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <span className="text-lg lg:text-xl font-bold group-hover:text-yellow-600 transition-colors">
                    Perumahan Elite
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  Layanan premium untuk perumahan elite di Menteng dan area eksklusif dengan standar layanan tertinggi.
                </p>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">White glove service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Peralatan premium terdepan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Concierge level service</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-yellow-500 text-black mb-4">Proses Premium</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Proses Layanan Premium Jakarta Pusat</h2>
            <p className="text-base sm:text-lg lg:text-xl text-purple-100 max-w-3xl mx-auto px-4">
              Proses yang disesuaikan dengan standar premium dan protokol khusus Jakarta Pusat
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {serviceProcess.map((process, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">Step {process.step}</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">{process.title}</h3>
                  <p className="text-sm lg:text-base text-purple-100 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {servicePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 ${
                  pkg.popular
                    ? "bg-yellow-500 text-black lg:transform lg:scale-105 shadow-2xl"
                    : "bg-white text-gray-900 shadow-xl"
                } hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-black text-yellow-500 text-center py-1 lg:py-2 text-xs lg:text-sm font-bold">
                    👑 VIP CORPORATE 👑
                  </div>
                )}

                <CardHeader className={`text-center ${pkg.popular ? "pt-8 sm:pt-10 lg:pt-12" : "pt-6 lg:pt-8"} pb-3 lg:pb-4 px-4 lg:px-6`}>
                  <CardTitle className="text-lg lg:text-2xl font-bold mb-2">{pkg.title}</CardTitle>
                  <p className={`text-xs lg:text-sm ${pkg.popular ? "text-gray-700" : "text-gray-600"}`}>{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-3 lg:space-y-4 px-4 lg:px-6">
                  <div className="space-y-2 lg:space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 lg:space-x-3">
                        <CheckCircle
                          className={`h-4 w-4 lg:h-5 lg:w-5 ${pkg.popular ? "text-green-700" : "text-green-600"} flex-shrink-0`}
                        />
                        <span className={`text-xs lg:text-sm ${pkg.popular ? "text-gray-800" : "text-gray-600"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-4 lg:mt-6 ${
                      pkg.popular
                        ? "bg-black text-yellow-500 hover:bg-gray-800"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                    size="lg"
                  >
                    <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="text-sm lg:text-base">Konsultasi Premium</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12 px-4">
            <p className="text-sm lg:text-base text-purple-100 mb-3 lg:mb-4">
              💎 <strong>Konsultasi Premium:</strong> Dapatkan layanan terbaik dengan standar internasional!
            </p>
            <p className="text-xs lg:text-sm text-purple-200">*Layanan disesuaikan dengan protokol dan standar premium</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Testimoni Premium</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Testimoni Pelanggan Jakarta Pusat</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kepercayaan pelanggan premium di Jakarta Pusat adalah kehormatan kami
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-3 lg:mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>

                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 italic leading-relaxed">"{testimonial.comment}"</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm lg:text-base font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs lg:text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-xs text-gray-400">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
            >
              Lihat Semua Testimoni
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Hubungi Kami</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami untuk Jakarta Pusat</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tim premium Jakarta Pusat siap melayani Anda 24 jam dengan standar layanan tertinggi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="bg-purple-100 p-3 lg:p-4 rounded-2xl">
                  <Phone className="h-6 w-6 lg:h-8 lg:w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Premium Hotline Jakarta Pusat</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Layanan premium khusus Jakarta Pusat</p>
                  <p className="text-2xl lg:text-3xl font-bold text-purple-600">0812-1906-7233</p>
                  <p className="text-xs lg:text-sm text-gray-500 mt-2">WhatsApp & Telepon • 24/7 Premium Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="bg-blue-100 p-3 lg:p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Area Premium Coverage</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">8 Kecamatan dengan layanan premium</p>
                  <div className="grid grid-cols-2 gap-1 lg:gap-2 text-xs lg:text-sm text-gray-600">
                    <div>• Menteng</div>
                    <div>• Gambir</div>
                    <div>• Tanah Abang</div>
                    <div>• Senen</div>
                    <div>• Cempaka Putih</div>
                    <div>• Johar Baru</div>
                    <div>• Kemayoran</div>
                    <div>• Sawah Besar</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="bg-yellow-100 p-3 lg:p-4 rounded-2xl">
                  <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Premium Response Time</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Respon tercepat di Jakarta</p>
                  <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-gray-600">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span>• Area Premium (Menteng, Gambir):</span>
                      <span className="font-semibold text-green-600 sm:ml-2">20-30 menit</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span>• Area Bisnis (Tanah Abang, Kemayoran):</span>
                      <span className="font-semibold text-blue-600 sm:ml-2">25-35 menit</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span>• Area Lainnya (Senen, Cempaka Putih):</span>
                      <span className="font-semibold text-orange-600 sm:ml-2">30-45 menit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 lg:p-8 rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3 lg:mb-4">
              <Truck className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400" />
              <span className="text-lg lg:text-xl font-bold">SedotWC Jakarta Pusat</span>
            </div>
            <p className="text-sm lg:text-base text-gray-400 mb-3 lg:mb-4">Layanan sedot WC premium di Jakarta Pusat sejak 2015</p>
            <div className="flex items-center justify-center space-x-2 mb-3 lg:mb-4">
              <Phone className="h-3 w-3 lg:h-4 lg:w-4 text-purple-400" />
              <span className="text-sm lg:text-base font-semibold">0812-1906-7233</span>
            </div>
            <Link href="/" className="text-sm lg:text-base text-purple-400 hover:text-purple-300 transition-colors">
              ← Kembali ke Halaman Utama
            </Link>
          </div>
          <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-gray-400">
            <p className="text-xs lg:text-sm">&copy; 2024 SedotWC Jakarta. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
