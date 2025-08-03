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
  title: "Sedot WC Jakarta Utara Terpercaya 24 Jam - Kelapa Gading, Koja, Penjaringan | Layanan Profesional",
  description:
    "⭐ SEDOT WC JAKARTA UTARA TERPERCAYA ⭐ Melayani Cilincing, Kelapa Gading, Koja, Pademangan, Penjaringan, Tanjung Priok 24 jam. Teknisi Profesional, Bergaransi, Respon Cepat. HUBUNGI SEKARANG!",
  keywords:
    "sedot wc jakarta utara, sedot wc kelapa gading, sedot wc koja, sedot wc penjaringan, sedot wc cilincing, sedot wc pademangan, sedot wc tanjung priok, jasa sedot wc jakarta utara, layanan sedot wc jakarta utara 24 jam, sedot wc murah jakarta utara, sedot wc darurat jakarta utara, teknisi sedot wc jakarta utara, perusahaan sedot wc jakarta utara, kontraktor sedot wc jakarta utara",
  openGraph: {
    title: "Sedot WC Jakarta Utara Terpercaya 24 Jam - Layanan Profesional",
    description:
      "⭐ Layanan Sedot WC Jakarta Utara TERPERCAYA ⭐ Melayani semua kecamatan 24 jam. Teknisi Profesional, Bergaransi, Respon Cepat.",
    type: "website",
    locale: "id_ID",
    url: "https://sedotwcmandala.com/jakarta-utara",
    images: [
      {
        url: "/og-sedot-wc-jakarta-utara.jpg",
        width: 1200,
        height: 630,
        alt: "Sedot WC Jakarta Utara - Layanan Profesional 24 Jam",
      },
    ],
  },
  alternates: {
    canonical: "https://sedotwcmandala.com/jakarta-utara",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const kecamatanJakut = [
  {
    name: "Kelapa Gading",
    kelurahan: ["Kelapa Gading Barat", "Kelapa Gading Timur", "Pegangsaan Dua"],
    specialties: ["Mall Premium", "Apartemen Mewah", "Perkantoran Modern"],
  },
  {
    name: "Koja",
    kelurahan: ["Koja", "Rawa Badak Utara", "Rawa Badak Selatan", "Tugu Utara", "Tugu Selatan", "Lagoa"],
    specialties: ["Perumahan Padat", "Industri Kecil", "Pelabuhan"],
  },
  {
    name: "Penjaringan",
    kelurahan: ["Penjaringan", "Pluit", "Pejagalan", "Kapuk Muara", "Kamal Muara"],
    specialties: ["Apartemen Pantai", "Perumahan Elite", "Kawasan Wisata"],
  },
  {
    name: "Cilincing",
    kelurahan: ["Cilincing", "Semper Barat", "Semper Timur", "Sukapura", "Rorotan", "Kalibaru", "Marunda"],
    specialties: ["Kawasan Industri", "Pelabuhan", "Perumahan Subsidi"],
  },
  {
    name: "Pademangan",
    kelurahan: ["Pademangan Barat", "Pademangan Timur", "Ancol"],
    specialties: ["Kawasan Wisata", "Hotel", "Apartemen"],
  },
  {
    name: "Tanjung Priok",
    kelurahan: ["Tanjung Priok", "Kebon Bawang", "Sungai Bambu", "Papanggo", "Warakas", "Sunter Agung", "Sunter Jaya"],
    specialties: ["Pelabuhan Utama", "Industri Besar", "Pergudangan"],
  },
]

const testimonials = [
  {
    name: "Budi Hartono",
    location: "Kelapa Gading",
    rating: 5,
    comment:
      "Pelayanan di Kelapa Gading sangat memuaskan. Tim datang tepat waktu ke apartemen dan bekerja dengan sangat profesional. Koordinasi dengan building management juga lancar.",
    service: "Sedot WC Apartemen",
    date: "1 minggu lalu",
  },
  {
    name: "Sari Dewi",
    location: "Pluit",
    rating: 5,
    comment:
      "Sudah beberapa kali pakai jasa mereka di area Pluit, selalu puas dengan hasilnya. Tim sangat berpengalaman dan peralatan modern.",
    service: "Sedot WC Rumah",
    date: "2 minggu lalu",
  },
  {
    name: "Ahmad Rahman",
    location: "Tanjung Priok",
    rating: 5,
    comment:
      "Layanan untuk pabrik kami di Tanjung Priok sangat profesional. Peralatan industri lengkap dan sertifikat juga ada. Recommended!",
    service: "Sedot WC Industri",
    date: "3 hari lalu",
  },
  {
    name: "Ibu Ratna",
    location: "Ancol",
    rating: 5,
    comment: "Untuk hotel kami di Ancol, mereka sangat profesional. Tidak mengganggu tamu dan jadwal sangat fleksibel.",
    service: "Sedot WC Hotel",
    date: "1 bulan lalu",
  },
  {
    name: "Pak Joko",
    location: "Cilincing",
    rating: 5,
    comment: "Meski di kawasan industri Cilincing, mereka tetap bisa akses dengan baik. Teknisi sangat berpengalaman.",
    service: "Sedot WC Industri",
    date: "2 minggu lalu",
  },
  {
    name: "Maya Sari",
    location: "Koja",
    rating: 5,
    comment: "Pelayanan darurat di Koja sangat membantu. Tim responsif dan datang dalam 40 menit. Sangat puas!",
    service: "Layanan Darurat",
    date: "1 minggu lalu",
  },
]

const serviceProcess = [
  {
    step: "1",
    title: "Konsultasi & Koordinasi",
    description: "Konsultasi gratis dan koordinasi khusus untuk area Jakarta Utara",
    icon: "📞",
    color: "teal",
  },
  {
    step: "2",
    title: "Persiapan Khusus",
    description: "Persiapan peralatan sesuai karakteristik area pantai dan industri",
    icon: "🛠️",
    color: "blue",
  },
  {
    step: "3",
    title: "Eksekusi Profesional",
    description: "Pelaksanaan dengan standar tinggi sesuai kondisi lingkungan",
    icon: "⚙️",
    color: "green",
  },
  {
    step: "4",
    title: "Quality Assurance",
    description: "Pemeriksaan kualitas dan garansi layanan untuk kepuasan maksimal",
    icon: "✅",
    color: "purple",
  },
]

const servicePackages = [
  {
    title: "Residential Premium",
    description: "Untuk apartemen dan perumahan mewah",
    features: [
      "Koordinasi building management",
      "Peralatan premium",
      "Layanan diskret",
      "Garansi extended",
      "Konsultasi gratis",
      "Emergency support",
    ],
    popular: false,
    color: "teal",
  },
  {
    title: "Paket Hospitality",
    description: "Khusus hotel dan resort",
    features: [
      "Jadwal fleksibel 24/7",
      "Tim hospitality specialist",
      "Layanan tanpa gangguan tamu",
      "Prioritas tinggi",
      "Garansi premium",
      "Kontrak maintenance",
      "Sertifikat kebersihan",
    ],
    popular: true,
    color: "yellow",
  },
  {
    title: "Industrial & Port",
    description: "Untuk kawasan industri & pelabuhan",
    features: [
      "Peralatan heavy duty",
      "Tim spesialis industri",
      "Sertifikat K3 lengkap",
      "Kapasitas besar",
      "Garansi industri",
      "Laporan compliance",
      "Kontrak jangka panjang",
    ],
    popular: false,
    color: "blue",
  },
]

const whyChooseUs = [
  {
    icon: <Users className="h-8 w-8 text-teal-600" />,
    title: "1,800+ Pelanggan Jakarta Utara",
    description: "Telah melayani ribuan pelanggan di Jakarta Utara dengan tingkat kepuasan 99.1%",
    stats: "99.1% Tingkat Kepuasan",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Spesialis Area Pantai",
    description: "Berpengalaman menangani area pantai dengan kondisi lingkungan khusus",
    stats: "Coastal Specialist",
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: "Sertifikat Lengkap",
    description: "Memiliki sertifikat lengkap untuk melayani kawasan industri dan pelabuhan",
    stats: "Full Certified",
  },
]

export default function JakartaUtaraPage() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/sedot-wc-jakarta-utara.webp')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center space-x-4 mb-4 lg:mb-6">
                <Link href="/" className="flex items-center space-x-2 text-teal-200 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Kembali</span>
                </Link>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                  🏖️ Spesialis Jakarta Utara
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Sedot WC
                  <span className="block text-yellow-400">Jakarta Utara</span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-200 font-normal mt-2 sm:mt-4">Terpercaya 24 Jam</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-teal-100 leading-relaxed max-w-2xl">
                  Layanan sedot WC profesional di seluruh Jakarta Utara. Melayani Kelapa Gading, Koja, Penjaringan,
                  Cilincing, Pademangan, Tanjung Priok dengan teknisi berpengalaman 24 jam.
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
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-600 bg-transparent text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-6 lg:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">30-60</div>
                  <div className="text-xs sm:text-sm text-teal-200">Menit Respon</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">1.8K+</div>
                  <div className="text-xs sm:text-sm text-teal-200">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">6</div>
                  <div className="text-xs sm:text-sm text-teal-200">Kecamatan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">99.1%</div>
                  <div className="text-xs sm:text-sm text-teal-200">Puas</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <Image
                  src="/images/sedot-9.webp"
                  alt="Layanan Sedot WC Jakarta Utara"
                  width={700}
                  height={600}
                  quality={90}
                  className="rounded-xl lg:rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-teal-600/20 rounded-xl lg:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">Keunggulan Kami</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Kami untuk Jakarta Utara?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kami memahami karakteristik unik Jakarta Utara sebagai area pantai dengan kawasan industri dan pariwisata
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
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-xl lg:text-2xl font-bold text-teal-600">{item.stats}</div>
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
              Kecamatan yang Kami Layani di Jakarta Utara
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tim profesional kami siap melayani seluruh kecamatan di Jakarta Utara dengan keahlian khusus area pantai
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {kecamatanJakut.map((kecamatan, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
                  <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base lg:text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
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
                      {kecamatan.kelurahan.slice(0, 3).map((kel, idx) => (
                        <div key={idx}>• {kel}</div>
                      ))}
                      {kecamatan.kelurahan.length > 3 && (
                        <div className="text-teal-600 font-medium">
                          +{kecamatan.kelurahan.length - 3} kelurahan lainnya
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 lg:pt-4 border-t">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs lg:text-sm gap-2 sm:gap-0">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                        <span className="text-gray-600">Respon: 30-60 menit</span>
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

      {/* Services Specific to Jakarta Utara */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">Layanan Khusus</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Khusus Jakarta Utara</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kami memahami karakteristik dan kebutuhan khusus Jakarta Utara sebagai area pantai dan industri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 lg:pb-4 p-0">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <span className="text-lg lg:text-xl font-bold group-hover:text-teal-600 transition-colors">Hotel & Resort</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  Pengalaman menangani hotel dan resort di area Ancol, Pluit dengan standar hospitality dan jadwal yang
                  tidak mengganggu tamu.
                </p>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Layanan tanpa gangguan tamu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Jadwal fleksibel 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Sertifikat kebersihan hotel</span>
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
                    Kawasan Pelabuhan
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  Spesialis untuk kawasan pelabuhan Tanjung Priok dengan peralatan khusus dan sertifikat untuk area
                  restricted.
                </p>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Sertifikat akses pelabuhan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Peralatan tahan korosi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Tim berpengalaman maritim</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 lg:pb-4 p-0">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <span className="text-lg lg:text-xl font-bold group-hover:text-green-600 transition-colors">
                    Apartemen Pantai
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  Layanan khusus untuk apartemen di area pantai dengan kondisi lingkungan yang membutuhkan perawatan
                  ekstra.
                </p>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Peralatan anti korosi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Maintenance rutin area pantai</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-600" />
                    <span className="text-xs lg:text-sm text-gray-600">Koordinasi pengelola premium</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-yellow-500 text-black mb-4">Proses Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Proses Layanan Sedot WC Jakarta Utara</h2>
            <p className="text-base sm:text-lg lg:text-xl text-teal-100 max-w-3xl mx-auto px-4">
              Proses yang disesuaikan dengan karakteristik khusus area pantai dan industri
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
                  <p className="text-sm lg:text-base text-teal-100 leading-relaxed">{process.description}</p>
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
                    🏨 HOSPITALITY SPECIALIST 🏨
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
                        : "bg-teal-600 hover:bg-teal-700 text-white"
                    }`}
                    size="lg"
                  >
                    <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="text-sm lg:text-base">Konsultasi Gratis</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12 px-4">
            <p className="text-sm lg:text-base text-teal-100 mb-3 lg:mb-4">
              💡 <strong>Konsultasi Gratis:</strong> Dapatkan estimasi dan saran terbaik untuk kebutuhan Anda!
            </p>
            <p className="text-xs lg:text-sm text-teal-200">*Layanan disesuaikan dengan kebutuhan dan kondisi lokasi</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">Testimoni Pelanggan</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Testimoni Pelanggan Jakarta Utara</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kepercayaan pelanggan di Jakarta Utara adalah kebanggaan kami
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
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
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
            <Badge className="bg-teal-100 text-teal-800 mb-4">Hubungi Kami</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami untuk Jakarta Utara</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tim khusus Jakarta Utara siap melayani Anda 24 jam dengan keahlian area pantai
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="bg-teal-100 p-3 lg:p-4 rounded-2xl">
                  <Phone className="h-6 w-6 lg:h-8 lg:w-8 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Hotline Jakarta Utara</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Khusus untuk wilayah Jakarta Utara</p>
                  <p className="text-2xl lg:text-3xl font-bold text-teal-600">0812-1906-7233</p>
                  <p className="text-xs lg:text-sm text-gray-500 mt-2">WhatsApp & Telepon • 24/7 Emergency</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="bg-blue-100 p-3 lg:p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Area Spesialisasi</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Kecamatan dengan keahlian khusus</p>
                  <div className="grid grid-cols-2 gap-1 lg:gap-2 text-xs lg:text-sm text-gray-600">
                    <div>• Kelapa Gading</div>
                    <div>• Koja</div>
                    <div>• Penjaringan</div>
                    <div>• Cilincing</div>
                    <div>• Pademangan</div>
                    <div>• Tanjung Priok</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="bg-green-100 p-3 lg:p-4 rounded-2xl">
                  <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Waktu Respon</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">Estimasi waktu kedatangan tim</p>
                  <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-gray-600">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span>• Area Premium (Kelapa Gading, Pluit):</span>
                      <span className="font-semibold text-green-600 sm:ml-2">30-40 menit</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span>• Area Wisata (Ancol, Pademangan):</span>
                      <span className="font-semibold text-blue-600 sm:ml-2">35-45 menit</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span>• Area Industri (Cilincing, Tanjung Priok):</span>
                      <span className="font-semibold text-orange-600 sm:ml-2">45-60 menit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 lg:p-8 rounded-3xl">
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
              <Truck className="h-6 w-6 lg:h-8 lg:w-8 text-teal-400" />
              <span className="text-lg lg:text-xl font-bold">SedotWC Jakarta Utara</span>
            </div>
            <p className="text-sm lg:text-base text-gray-400 mb-3 lg:mb-4">Spesialis layanan sedot WC di Jakarta Utara sejak 2015</p>
            <div className="flex items-center justify-center space-x-2 mb-3 lg:mb-4">
              <Phone className="h-3 w-3 lg:h-4 lg:w-4 text-teal-400" />
              <span className="text-sm lg:text-base font-semibold">0812-1906-7233</span>
            </div>
            <Link href="/" className="text-sm lg:text-base text-teal-400 hover:text-teal-300 transition-colors">
              ← Kembali ke Halaman Utama
            </Link>
          </div>
          <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-gray-400">
            <p className="text-xs lg:text-sm">&copy; 2024 SedotWC Jakarta. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
    </PageLoader>
  )
}
