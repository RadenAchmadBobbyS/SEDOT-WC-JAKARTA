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
  title: "Sedot WC Jakarta Timur Terpercaya 24 Jam - Cakung, Cipayung, Kramat Jati | Harga Terjangkau",
  description:
    "⭐ SEDOT WC JAKARTA TIMUR TERPERCAYA ⭐ Melayani Cakung, Cipayung, Kramat Jati, Makasar, Pasar Rebo, Jatinegara 24 jam. Teknisi Profesional, Bergaransi, Respon Cepat. HUBUNGI SEKARANG!",
  keywords:
    "sedot wc jakarta timur, sedot wc cakung, sedot wc cipayung, sedot wc kramat jati, sedot wc makasar, sedot wc pasar rebo, sedot wc jatinegara, sedot wc duren sawit, sedot wc matraman, sedot wc pulo gadung, jasa sedot wc jakarta timur, layanan sedot wc jakarta timur 24 jam, sedot wc murah jakarta timur, sedot wc darurat jakarta timur, teknisi sedot wc jakarta timur, perusahaan sedot wc jakarta timur, kontraktor sedot wc jakarta timur",
  openGraph: {
    title: "Sedot WC Jakarta Timur Terpercaya 24 Jam - Layanan Profesional",
    description:
      "⭐ Layanan Sedot WC Jakarta Timur TERPERCAYA ⭐ Melayani semua kecamatan 24 jam. Teknisi Profesional, Bergaransi, Respon Cepat.",
    type: "website",
    locale: "id_ID",
    url: "https://sedotwcmandala.com/jakarta-timur",
    images: [
      {
        url: "/og-sedot-wc-jakarta-timur.jpg",
        width: 1200,
        height: 630,
        alt: "Sedot WC Jakarta Timur - Layanan Profesional 24 Jam",
      },
    ],
  },
  alternates: {
    canonical: "https://sedotwcmandala.com/jakarta-timur",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const kecamatanJaktim = [
  {
    name: "Cakung",
    kelurahan: [
      "Cakung Barat",
      "Cakung Timur",
      "Rawa Terate",
      "Jatinegara",
      "Penggilingan",
      "Pulogebang",
      "Ujung Menteng",
    ],
    specialties: ["Kawasan Industri", "Perumahan Padat", "Gudang"],
  },
  {
    name: "Cipayung",
    kelurahan: ["Cipayung", "Cilangkap", "Setu", "Bambu Apus", "Ceger", "Munjul", "Pondok Ranggon", "Lubang Buaya"],
    specialties: ["Perumahan Subsidi", "Cluster", "Kawasan Hijau"],
  },
  {
    name: "Kramat Jati",
    kelurahan: ["Kramat Jati", "Tengah", "Dukuh", "Cawang", "Cililitan", "Batu Ampar", "Balekambang", "Kampung Tengah"],
    specialties: ["Pasar Induk", "Perumahan Menengah", "Terminal"],
  },
  {
    name: "Makasar",
    kelurahan: ["Makasar", "Pinang Ranti", "Kebon Pala", "Halim Perdana Kusuma", "Cipinang Melayu"],
    specialties: ["Bandara", "Perumahan Elite", "Perkantoran"],
  },
  {
    name: "Pasar Rebo",
    kelurahan: [
      "Pasar Rebo",
      "Pekayon",
      "Kalisari",
      "Cijantung",
      "Gedong",
      "Baru",
      "Susukan",
      "Kampung Baru",
      "Kampung Gedong",
    ],
    specialties: ["Perumahan Padat", "Kampung", "Ruko"],
  },
  {
    name: "Jatinegara",
    kelurahan: [
      "Jatinegara",
      "Kampung Melayu",
      "Bidaracina",
      "Cipinang Besar Utara",
      "Cipinang Besar Selatan",
      "Cipinang Cempedak",
      "Cipinang Muara",
      "Rawa Bunga",
    ],
    specialties: ["Stasiun Kereta", "Perumahan Tua", "Industri Kecil"],
  },
  {
    name: "Duren Sawit",
    kelurahan: ["Duren Sawit", "Pondok Bambu", "Pondok Kelapa", "Pondok Kopi", "Malaka Jaya", "Malaka Sari", "Klender"],
    specialties: ["Perumahan Modern", "Mall", "Apartemen"],
  },
  {
    name: "Matraman",
    kelurahan: ["Matraman", "Palmeriam", "Kebon Manggis", "Utan Kayu Utara", "Utan Kayu Selatan", "Kayu Manis"],
    specialties: ["Perumahan Menengah", "Sekolah", "Rumah Sakit"],
  },
  {
    name: "Pulo Gadung",
    kelurahan: [
      "Pulo Gadung",
      "Jati",
      "Rawamangun",
      "Kayu Putih",
      "Jatinegara Kaum",
      "Pisangan Timur",
      "Pisangan Baru",
    ],
    specialties: ["Kawasan Industri", "Perumahan", "Perkantoran"],
  },
  {
    name: "Pasar Minggu",
    kelurahan: ["Ciracas", "Susukan", "Kelapa Dua Wetan", "Cibubur"],
    specialties: ["Perumahan Baru", "Cluster Modern", "Kawasan Berkembang"],
  },
]

const testimonials = [
  {
    name: "Andi Prasetyo",
    location: "Cakung",
    rating: 5,
    comment:
      "Pelayanan di Cakung sangat memuaskan. Tim datang tepat waktu meski akses ke kawasan industri agak sulit. Profesional sekali!",
    service: "Sedot WC Industri",
    date: "1 minggu lalu",
  },
  {
    name: "Ibu Ratna",
    location: "Cipayung",
    rating: 5,
    comment:
      "Sudah beberapa kali pakai jasa mereka di Cipayung, selalu puas. Tim sangat berpengalaman dan peralatan lengkap.",
    service: "Sedot WC Rumah",
    date: "2 minggu lalu",
  },
  {
    name: "Pak Joko",
    location: "Kramat Jati",
    rating: 5,
    comment: "Layanan darurat di Kramat Jati sangat membantu. Datang dalam 45 menit dan langsung selesai. Recommended!",
    service: "Layanan Darurat",
    date: "5 hari lalu",
  },
  {
    name: "Sari Dewi",
    location: "Makasar",
    rating: 5,
    comment: "Untuk apartemen kami di Makasar, mereka sangat profesional. Koordinasi dengan pengelola juga lancar.",
    service: "Sedot WC Apartemen",
    date: "3 minggu lalu",
  },
  {
    name: "Ahmad Yusuf",
    location: "Duren Sawit",
    rating: 5,
    comment: "Pelayanan untuk rumah di Duren Sawit sangat baik. Teknisi ramah dan hasil kerja memuaskan.",
    service: "Sedot WC Rumah",
    date: "1 bulan lalu",
  },
  {
    name: "Dr. Susanto",
    location: "Matraman",
    rating: 5,
    comment: "Untuk klinik kami di Matraman, layanan sangat higienis dan sesuai standar kesehatan.",
    service: "Sedot WC Komersial",
    date: "2 minggu lalu",
  },
]

const serviceProcess = [
  {
    step: "1",
    title: "Konsultasi & Survey",
    description: "Konsultasi gratis dan survey lokasi untuk menentukan metode terbaik",
    icon: "📋",
    color: "orange",
  },
  {
    step: "2",
    title: "Persiapan Tim",
    description: "Tim profesional mempersiapkan peralatan sesuai kondisi lokasi",
    icon: "🔧",
    color: "blue",
  },
  {
    step: "3",
    title: "Eksekusi Profesional",
    description: "Pelaksanaan sedot WC dengan standar keamanan dan kebersihan tinggi",
    icon: "⚙️",
    color: "green",
  },
  {
    step: "4",
    title: "Finishing & Garansi",
    description: "Pembersihan menyeluruh dan pemberian garansi layanan",
    icon: "✨",
    color: "purple",
  },
]

const servicePackages = [
  {
    title: "Rumah Tinggal",
    description: "Paket standar untuk rumah tinggal",
    features: [
      "Kapasitas sesuai kebutuhan",
      "Teknisi berpengalaman",
      "Peralatan modern",
      "Garansi layanan",
      "Konsultasi gratis",
      "Pembersihan area",
    ],
    popular: false,
    color: "orange",
  },
  {
    title: "Paket Komprehensif",
    description: "Layanan lengkap dengan maintenance",
    features: [
      "Layanan maintenance berkala",
      "Pemeriksaan rutin",
      "Prioritas layanan",
      "Tim dedicated",
      "Garansi extended",
      "Monitoring kondisi",
      "Emergency support",
    ],
    popular: true,
    color: "yellow",
  },
  {
    title: "Industri & Komersial",
    description: "Untuk kawasan industri & komersial",
    features: [
      "Kapasitas industri",
      "Peralatan heavy duty",
      "Sertifikat lengkap",
      "Tim spesialis",
      "Garansi premium",
      "Laporan detail",
      "Kontrak maintenance",
    ],
    popular: false,
    color: "blue",
  },
]

const whyChooseUs = [
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "2,200+ Pelanggan Jakarta Timur",
    description: "Telah melayani ribuan pelanggan di Jakarta Timur dengan tingkat kepuasan 98.5%",
    stats: "98.5% Tingkat Kepuasan",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Spesialis Area Luas",
    description: "Berpengalaman menangani area luas Jakarta Timur dengan berbagai karakteristik",
    stats: "10 Kecamatan",
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: "Jangkauan Terluas",
    description: "Coverage area terluas di Jakarta Timur dengan respon time yang kompetitif",
    stats: "45-90 Menit",
  },
]

export default function JakartaTimurPage() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 text-white py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/sedot-wc-jakarta-timur.webp')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-orange-200 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Kembali</span>
                </Link>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                  🌇 Spesialis Jakarta Timur
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Sedot WC
                  <span className="block text-yellow-400">Jakarta Timur</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl text-orange-200 font-normal mt-2 sm:mt-4">Terpercaya 24 Jam</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 leading-relaxed max-w-2xl">
                  Layanan sedot WC profesional di seluruh Jakarta Timur. Melayani Cakung, Cipayung, Kramat Jati,
                  Makasar, Pasar Rebo, Jatinegara dan sekitarnya dengan teknisi berpengalaman 24 jam.
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
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">10-20</div>
                  <div className="text-xs sm:text-sm text-orange-200">Menit Respon</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">2.2K+</div>
                  <div className="text-xs sm:text-sm text-orange-200">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">10</div>
                  <div className="text-xs sm:text-sm text-orange-200">Kecamatan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">98.5%</div>
                  <div className="text-xs sm:text-sm text-orange-200">Puas</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/sedot-wc-8.webp"
                  alt="Layanan Sedot WC Jakarta Timur"
                  width={700}
                  height={600}
                  quality={90}
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-xl sm:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Keunggulan Kami</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Kami untuk Jakarta Timur?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kami memahami karakteristik unik dan tantangan khusus di Jakarta Timur yang memiliki area terluas
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
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">{item.stats}</div>
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
            <Badge className="bg-blue-100 text-blue-800 mb-4">Area Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kecamatan yang Kami Layani di Jakarta Timur
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Tim profesional kami siap melayani seluruh kecamatan di Jakarta Timur dengan coverage area terluas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {kecamatanJaktim.map((kecamatan, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
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
                        <div className="text-orange-600 font-medium">
                          +{kecamatan.kelurahan.length - 4} kelurahan lainnya
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <span className="text-gray-600">Respon: 10-30 menit</span>
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

      {/* Services Specific to Jakarta Timur */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Layanan Khusus</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Khusus Jakarta Timur</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kami memahami karakteristik dan kebutuhan khusus masyarakat Jakarta Timur dengan area terluas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-orange-600 transition-colors">
                    Kawasan Industri
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Pengalaman menangani kawasan industri di Cakung, Pulo Gadung dengan peralatan khusus untuk kapasitas
                  besar dan standar industri.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Peralatan industri heavy duty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Sertifikat K3 & lingkungan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Kontrak maintenance industri</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-blue-600 transition-colors">Perumahan Luas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Spesialis untuk perumahan dengan area luas di Cipayung, Pasar Rebo dengan akses yang menantang dan
                  jarak tempuh jauh.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Peralatan mobile jarak jauh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Tim berpengalaman area luas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Koordinasi RT/RW setempat</span>
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
                  <span className="text-lg sm:text-xl font-bold group-hover:text-green-600 transition-colors">Fasilitas Umum</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Layanan untuk fasilitas umum seperti terminal, stasiun, dan pasar dengan koordinasi khusus dan jadwal
                  yang fleksibel.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Koordinasi dengan pengelola</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Jadwal di luar jam operasional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Sertifikat untuk fasilitas publik</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-yellow-500 text-black mb-4">Proses Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Proses Layanan Sedot WC Jakarta Timur</h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto">
              Proses yang sistematis dan efisien untuk area Jakarta Timur yang luas
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
                  <p className="text-orange-100 leading-relaxed text-sm sm:text-base">{process.description}</p>
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
                        : "bg-orange-600 hover:bg-orange-700 text-white"
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
            <p className="text-orange-100 mb-3 sm:mb-4 text-sm sm:text-base">
              💡 <strong>Konsultasi Gratis:</strong> Dapatkan estimasi dan saran terbaik untuk kebutuhan Anda!
            </p>
            <p className="text-xs sm:text-sm text-orange-200">*Layanan disesuaikan dengan kebutuhan dan kondisi lokasi</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Testimoni Pelanggan</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Pelanggan Jakarta Timur</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kepercayaan pelanggan di Jakarta Timur adalah motivasi kami
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

                  <p className="text-gray-600 mb-3 sm:mb-4 italic leading-relaxed text-sm sm:text-base">&ldquo;{testimonial.comment}&rdquo;</p>

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
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
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
            <Badge className="bg-orange-100 text-orange-800 mb-4">Hubungi Kami</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami untuk Jakarta Timur</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Tim khusus Jakarta Timur siap melayani Anda 24 jam dengan coverage terluas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-orange-100 p-3 sm:p-4 rounded-2xl">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Hotline Jakarta Timur</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Khusus untuk wilayah Jakarta Timur</p>
                  <p className="text-2xl sm:text-3xl font-bold text-orange-600">0812-1906-7233</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">WhatsApp & Telepon • 24/7 Emergency</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Area Coverage Terluas</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">10 Kecamatan dengan jangkauan terluas</p>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                    <div>• Cakung</div>
                    <div>• Cipayung</div>
                    <div>• Kramat Jati</div>
                    <div>• Makasar</div>
                    <div>• Pasar Rebo</div>
                    <div>• Jatinegara</div>
                    <div>• Duren Sawit</div>
                    <div>• Matraman</div>
                    <div>• Pulo Gadung</div>
                    <div>• Ciracas</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-green-100 p-3 sm:p-4 rounded-2xl">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Waktu Respon</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Estimasi waktu kedatangan tim</p>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>• Area Dekat (Matraman, Jatinegara):</span>
                      <span className="font-semibold text-green-600">10-30 menit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Area Tengah (Kramat Jati, Makasar):</span>
                      <span className="font-semibold text-blue-600">10-35 menit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Area Jauh (Cipayung, Pasar Rebo):</span>
                      <span className="font-semibold text-orange-600">10-30 menit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 sm:p-8 rounded-3xl">
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
              <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
              <span className="text-lg sm:text-xl font-bold">SedotWC Jakarta Timur</span>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Spesialis layanan sedot WC di Jakarta Timur sejak 2015</p>
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
              <span className="font-semibold text-sm sm:text-base">0812-1906-7233</span>
            </div>
            <Link href="/" className="text-orange-400 hover:text-orange-300 transition-colors text-sm sm:text-base">
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
