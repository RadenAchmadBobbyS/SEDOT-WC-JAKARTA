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
  title: "Sedot WC Jakarta Barat Terpercaya 24 Jam - Kebon Jeruk, Kembangan, Palmerah | Harga Murah",
  description:
    "⭐ SEDOT WC JAKARTA BARAT TERPERCAYA ⭐ Melayani Kebon Jeruk, Kembangan, Palmerah, Grogol Petamburan, Cengkareng 24 jam. Teknisi Profesional, Bergaransi, Respon 1-5 menit. HUBUNGI SEKARANG!",
  keywords:
    "sedot wc jakarta barat, sedot wc kebon jeruk, sedot wc kembangan, sedot wc palmerah, sedot wc grogol petamburan, sedot wc cengkareng, sedot wc taman sari, sedot wc tambora, sedot wc kalideres, jasa sedot wc jakarta barat, layanan sedot wc jakarta barat 24 jam, harga sedot wc jakarta barat, sedot wc murah jakarta barat, sedot wc darurat jakarta barat, teknisi sedot wc jakarta barat, perusahaan sedot wc jakarta barat, kontraktor sedot wc jakarta barat",
  openGraph: {
    title: "Sedot WC Jakarta Barat Terpercaya 24 Jam - Harga Murah Bergaransi",
    description:
      "⭐ Layanan Sedot WC Jakarta Barat TERPERCAYA ⭐ Melayani semua kecamatan 24 jam. Teknisi Profesional, Bergaransi.",
    type: "website",
    locale: "id_ID",
    url: "https://sedotwcmandala.com/jakarta-barat",
    images: [
      {
        url: "/og-sedot-wc-jakarta-barat.jpg",
        width: 1200,
        height: 630,
        alt: "Sedot WC Jakarta Barat - Layanan Profesional 24 Jam",
      },
    ],
  },
  alternates: {
    canonical: "https://sedotwcmandala.com/jakarta-barat",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const kecamatanJakbar = [
  {
    name: "Kebon Jeruk",
    kelurahan: [
      "Kebon Jeruk",
      "Sukabumi Utara",
      "Sukabumi Selatan",
      "Kedoya Utara",
      "Kedoya Selatan",
      "Duri Kepa",
      "Kelapa Dua",
    ],
    specialties: ["Perumahan Menengah", "Apartemen", "Perkantoran"],
  },
  {
    name: "Kembangan",
    kelurahan: ["Kembangan Utara", "Kembangan Selatan", "Meruya Utara", "Meruya Selatan", "Srengseng"],
    specialties: ["Perumahan Padat", "Cluster", "Ruko"],
  },
  {
    name: "Palmerah",
    kelurahan: ["Palmerah", "Slipi", "Kota Bambu Utara", "Kota Bambu Selatan", "Jati Pulo", "Kemanggisan"],
    specialties: ["Apartemen Modern", "Perkantoran", "Mall"],
  },
  {
    name: "Grogol Petamburan",
    kelurahan: [
      "Grogol",
      "Tanjung Duren Utara",
      "Tanjung Duren Selatan",
      "Tomang",
      "Jelambar",
      "Jelambar Baru",
      "Wijaya Kusuma",
    ],
    specialties: ["Perumahan Tua", "Apartemen", "Industri Kecil"],
  },
  {
    name: "Cengkareng",
    kelurahan: ["Cengkareng Barat", "Cengkareng Timur", "Rawa Buaya", "Kedaung Kali Angke", "Kapuk", "Duri Kosambi"],
    specialties: ["Kawasan Industri", "Perumahan Subsidi", "Gudang"],
  },
  {
    name: "Taman Sari",
    kelurahan: ["Taman Sari", "Krukut", "Maphar", "Tangki", "Mangga Besar", "Keagungan", "Glodok", "Pinangsia"],
    specialties: ["Perumahan Padat", "Ruko Tua", "Kawasan Perdagangan"],
  },
  {
    name: "Tambora",
    kelurahan: [
      "Tambora",
      "Roa Malaka",
      "Pekojan",
      "Jembatan Lima",
      "Krendang",
      "Duri Utara",
      "Duri Selatan",
      "Kali Anyar",
      "Tanah Sereal",
      "Angke",
      "Jembatan Besi",
    ],
    specialties: ["Perumahan Tradisional", "Industri", "Perdagangan"],
  },
  {
    name: "Kalideres",
    kelurahan: ["Kalideres", "Semanan", "Tegal Alur", "Pegadungan", "Kamal"],
    specialties: ["Kawasan Industri", "Perumahan Baru", "Pabrik"],
  },
]

const testimonials = [
  {
    name: "Indra Wijaya",
    location: "Kebon Jeruk",
    rating: 5,
    comment:
      "Pelayanan di Kebon Jeruk sangat memuaskan. Tim datang cepat dan bekerja dengan profesional sekali. Apartemen saya langsung bersih.",
    service: "Sedot WC Apartemen",
    date: "1 minggu lalu",
  },
  {
    name: "Maya Sari",
    location: "Kembangan",
    rating: 5,
    comment:
      "Sudah beberapa kali pakai jasa mereka di area Kembangan, selalu puas dengan hasilnya. Harga juga masuk akal. Recommended!",
    service: "Sedot WC Rumah",
    date: "2 minggu lalu",
  },
  {
    name: "Budi Hartono",
    location: "Palmerah",
    rating: 5,
    comment: "Layanan darurat di Palmerah sangat membantu. Tim responsif dan peralatan lengkap. Datang dalam 35 menit!",
    service: "Layanan Darurat",
    date: "4 hari lalu",
  },
  {
    name: "Pak Joko",
    location: "Cengkareng",
    rating: 5,
    comment:
      "Untuk pabrik kami di Cengkareng, mereka sangat profesional. Peralatan industri lengkap dan sertifikat juga ada.",
    service: "Sedot WC Industri",
    date: "1 bulan lalu",
  },
  {
    name: "Ibu Siti",
    location: "Taman Sari",
    rating: 5,
    comment: "Meski di gang sempit Taman Sari, mereka tetap bisa akses dengan baik. Teknisi sangat berpengalaman.",
    service: "Sedot WC Rumah",
    date: "3 minggu lalu",
  },
  {
    name: "Ahmad Yusuf",
    location: "Grogol",
    rating: 5,
    comment: "Pelayanan untuk ruko kami di Grogol sangat baik. Tidak mengganggu aktivitas bisnis sama sekali.",
    service: "Sedot WC Komersial",
    date: "2 minggu lalu",
  },
]

const whyChooseUs = [
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "2,800+ Pelanggan Jakarta Barat",
    description: "Telah melayani ribuan pelanggan di Jakarta Barat dengan tingkat kepuasan 98.8%",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Spesialis Akses Sulit",
    description: "Berpengalaman menangani gang sempit, perumahan padat, dan kawasan industri",
  },
  {
    icon: <Shield className="h-8 w-8 text-orange-600" />,
    title: "Harga Terjangkau",
    description: "Harga paling kompetitif di Jakarta Barat dengan kualitas layanan terbaik",
  },
]

const serviceProcess = [
  {
    step: "1",
    title: "Konsultasi Gratis",
    description: "Hubungi kami untuk konsultasi gratis dan penjadwalan layanan sesuai kebutuhan Anda",
    icon: "📞",
    color: "green",
  },
  {
    step: "2",
    title: "Survey Lokasi",
    description: "Tim melakukan survey lokasi untuk menentukan metode dan peralatan yang tepat",
    icon: "🔍",
    color: "blue",
  },
  {
    step: "3",
    title: "Pelaksanaan Profesional",
    description: "Proses sedot WC dilakukan dengan peralatan modern dan standar keamanan tinggi",
    icon: "⚙️",
    color: "orange",
  },
  {
    step: "4",
    title: "Quality Check & Garansi",
    description: "Pemeriksaan hasil kerja dan pemberian garansi untuk kepuasan pelanggan",
    icon: "✅",
    color: "purple",
  },
]

const servicePackages = [
  {
    title: "Rumah Tinggal",
    description: "Cocok untuk rumah tinggal standar",
    features: [
      "Kapasitas sesuai kebutuhan",
      "Akses gang sempit OK",
      "Peralatan compact",
      "Garansi layanan",
      "Konsultasi gratis",
      "Pembersihan area kerja",
    ],
    popular: false,
    color: "green",
  },
  {
    title: "Paket Maintenance",
    description: "Layanan maintenance rutin terjadwal",
    features: [
      "Jadwal maintenance rutin",
      "Pemeliharaan berkala",
      "Monitoring kondisi",
      "Prioritas layanan",
      "Garansi extended",
      "Teknisi tetap",
      "Reminder otomatis",
    ],
    popular: true,
    color: "yellow",
  },
  {
    title: "Industri & Pabrik",
    description: "Untuk kawasan industri & pabrik",
    features: [
      "Kapasitas besar",
      "Peralatan industri",
      "Sertifikat K3",
      "Tim khusus industri",
      "Garansi premium",
      "Laporan lengkap",
      "Kontrak jangka panjang",
    ],
    popular: false,
    color: "blue",
  },
]

export default function JakartaBaratPage() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/sedot-wc-jakarta-barat.webp')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Kembali</span>
                </Link>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                  🌆 Spesialis Jakarta Barat
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Sedot WC
                  <span className="block text-yellow-400">Jakarta Barat</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl text-green-200 font-normal mt-2 sm:mt-4">Terpercaya 24 Jam</span>
                </h1>
                <p className="text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl">
                  Layanan sedot WC profesional di seluruh Jakarta Barat. Melayani Kebon Jeruk, Kembangan, Palmerah,
                  Grogol Petamburan, Cengkareng dan sekitarnya dengan teknisi berpengalaman 24 jam.
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
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">1</div>
                  <div className="text-xs sm:text-sm text-green-200">Menit Respon</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">2.8K+</div>
                  <div className="text-xs sm:text-sm text-green-200">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">8</div>
                  <div className="text-xs sm:text-sm text-green-200">Kecamatan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">98.8%</div>
                  <div className="text-xs sm:text-sm text-green-200">Puas</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 h-64 sm:h-80 md:h-96 lg:h-auto">
                <Image
                  src="/images/sedot-wc-7.webp"
                  alt="Layanan Sedot WC Jakarta Barat"
                  width={700}
                  height={600}
                  quality={90}
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-green-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">Keunggulan Kami</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Kami untuk Jakarta Barat?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kami memahami karakteristik unik dan tantangan khusus di Jakarta Barat
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
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{item.description}</p>
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
            <Badge className="bg-blue-100 text-blue-800 mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">Area Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kecamatan yang Kami Layani di Jakarta Barat
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tim profesional kami siap melayani seluruh kecamatan di Jakarta Barat dengan respon cepat dan layanan
              berkualitas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {kecamatanJakbar.map((kecamatan, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
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
                        <div className="text-green-600 font-medium">
                          +{kecamatan.kelurahan.length - 4} kelurahan lainnya
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <span className="text-gray-600">Respon: 1-5 menit</span>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
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

      {/* Services Specific to Jakarta Barat */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">Layanan Khusus</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Khusus Jakarta Barat</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kami memahami karakteristik dan kebutuhan khusus masyarakat Jakarta Barat
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-green-600 transition-colors">
                    Perumahan Padat
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Pengalaman menangani area perumahan padat di Tambora, Taman Sari, dan kawasan pemukiman dengan akses
                  terbatas.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Peralatan compact untuk gang sempit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Teknisi berpengalaman akses sulit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Koordinasi dengan RT/RW</span>
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
                  <span className="text-lg sm:text-xl font-bold group-hover:text-blue-600 transition-colors">
                    Kawasan Industri
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Layanan untuk pabrik dan kawasan industri di Cengkareng, Kalideres dengan peralatan khusus untuk
                  kapasitas besar.
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
                    <span className="text-xs sm:text-sm text-gray-600">Kontrak maintenance reguler</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-orange-600 transition-colors">
                    Apartemen & Rusun
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Spesialis untuk apartemen dan rumah susun di area Kebon Jeruk, Palmerah dengan koordinasi pengelola
                  yang baik.
                </p>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Koordinasi building management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Akses lift service khusus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600">Jadwal sesuai aturan gedung</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-yellow-500 text-black mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">Proses Layanan</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Proses Layanan Sedot WC Jakarta Barat</h2>
            <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto px-4">
              Proses yang terstruktur dan profesional untuk hasil optimal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {serviceProcess.map((process, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">Step {process.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{process.title}</h3>
                  <p className="text-sm sm:text-base text-green-100 leading-relaxed">{process.description}</p>
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
                    💰 PALING HEMAT 💰
                  </div>
                )}

                <CardHeader className={`text-center ${pkg.popular ? "pt-10 sm:pt-12" : "pt-6 sm:pt-8"} pb-3 sm:pb-4 px-4 sm:px-6`}>
                  <CardTitle className="text-xl sm:text-2xl font-bold mb-2">{pkg.title}</CardTitle>
                  <p className={`text-xs sm:text-sm ${pkg.popular ? "text-gray-700" : "text-gray-600"}`}>{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-6">
                  <div className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
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
                        : "bg-green-600 hover:bg-green-700 text-white"
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
            <p className="text-sm sm:text-base text-green-100 mb-4 px-4">
              💡 <strong>Konsultasi Gratis:</strong> Dapatkan estimasi dan saran terbaik untuk kebutuhan Anda!
            </p>
            <p className="text-xs sm:text-sm text-green-200 px-4">*Layanan disesuaikan dengan kebutuhan dan kondisi lokasi</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">Testimoni Pelanggan</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Testimoni Pelanggan Jakarta Barat</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kepercayaan pelanggan di Jakarta Barat adalah motivasi kami
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

                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 italic leading-relaxed">&ldquo;{testimonial.comment}&rdquo;</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</p>
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
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
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
            <Badge className="bg-green-100 text-green-800 mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">Hubungi Kami</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami untuk Jakarta Barat</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tim khusus Jakarta Barat siap melayani Anda 24 jam
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-green-100 p-3 sm:p-4 rounded-2xl">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Hotline Jakarta Barat</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Khusus untuk wilayah Jakarta Barat</p>
                  <p className="text-2xl sm:text-3xl font-bold text-green-600">0812-1906-7233</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">WhatsApp & Telepon • 24/7 Emergency</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Area Prioritas</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Kecamatan dengan respon tercepat</p>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                    <div>• Kebon Jeruk</div>
                    <div>• Kembangan</div>
                    <div>• Palmerah</div>
                    <div>• Grogol Petamburan</div>
                    <div>• Cengkareng</div>
                    <div>• Taman Sari</div>
                    <div>• Tambora</div>
                    <div>• Kalideres</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-orange-100 p-3 sm:p-4 rounded-2xl">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Waktu Respon</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Estimasi waktu kedatangan tim</p>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>• Area Tengah (Kebon Jeruk, Palmerah):</span>
                      <span className="font-semibold text-green-600">30-40 menit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Area Industri (Cengkareng, Kalideres):</span>
                      <span className="font-semibold text-blue-600">40-50 menit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Area Padat (Tambora, Taman Sari):</span>
                      <span className="font-semibold text-orange-600">50-60 menit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
              <span className="text-lg sm:text-xl font-bold">SedotWC Jakarta Barat</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4">Spesialis layanan sedot WC di Jakarta Barat sejak 2015</p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
              <span className="text-sm sm:text-base font-semibold">0812-1906-7233</span>
            </div>
            <Link href="/" className="text-sm sm:text-base text-green-400 hover:text-green-300 transition-colors">
              ← Kembali ke Halaman Utama
            </Link>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2024 SedotWC Jakarta. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
    </PageLoader>
  )
}
