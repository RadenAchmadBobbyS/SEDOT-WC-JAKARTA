import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Users, Award, Shield, Clock, Truck, Target, Heart, CheckCircle, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import PageLoader from "@/components/page-loader"

export const metadata: Metadata = {
  title: "Tentang Kami - SedotWC Jakarta | Perusahaan Sedot WC Terpercaya Sejak 2015",
  description:
    "Mengenal lebih dekat SedotWC Jakarta - Perusahaan layanan sedot WC terpercaya dengan pengalaman 9+ tahun melayani seluruh Jakarta. Tim profesional, peralatan modern, bergaransi.",
  keywords:
    "tentang sedot wc jakarta, profil perusahaan sedot wc, sejarah sedot wc jakarta, visi misi sedot wc, tim profesional sedot wc",
  openGraph: {
    title: "Tentang Kami - SedotWC Jakarta Terpercaya Sejak 2015",
    description:
      "Perusahaan sedot WC terpercaya dengan 9+ tahun pengalaman melayani Jakarta. Tim profesional, teknologi modern, bergaransi.",
    type: "website",
    locale: "id_ID",
    url: "https://sedotwcmandala.com/tentang-kami",
  },
  alternates: {
    canonical: "https://sedotwcmandala.com/tentang-kami",
  },
}

const achievements = [
  {
    icon: Users,
    number: "10,000+",
    label: "Pelanggan Puas",
    description: "Telah melayani ribuan pelanggan di seluruh Jakarta",
  },
  {
    icon: Clock,
    number: "9+",
    label: "Tahun Pengalaman",
    description: "Berpengalaman sejak 2015 dalam layanan sedot WC",
  },
  {
    icon: Award,
    number: "100%",
    label: "Bergaransi",
    description: "Semua layanan kami bergaransi kualitas",
  },
  {
    icon: Truck,
    number: "24/7",
    label: "Layanan Siaga",
    description: "Siap melayani kapan saja Anda membutuhkan",
  },
]

const teamMembers = [
  {
    name: "Budi Hartono",
    position: "Direktur Utama",
    experience: "15+ tahun",
    image: "/images/worker-2.webp",
  },
  {
    name: "Adi Wijaya",
    position: "Manajer Operasional",
    experience: "12+ tahun",
    image: "/images/worker-1.webp",
  },
  {
    name: "Ahmad Rizki",
    position: "Kepala Teknisi",
    experience: "10+ tahun",
    image: "/images/worker-3.webp",
  },
]

const values = [
  {
    icon: Shield,
    title: "Integritas",
    description: "Kami berkomitmen memberikan layanan yang jujur, transparan, dan dapat dipercaya",
  },
  {
    icon: Target,
    title: "Profesionalisme",
    description: "Tim berpengalaman dengan standar kerja tinggi dan peralatan modern",
  },
  {
    icon: Heart,
    title: "Kepedulian",
    description: "Mengutamakan kepuasan dan kenyamanan pelanggan dalam setiap layanan",
  },
  {
    icon: CheckCircle,
    title: "Kualitas",
    description: "Menjamin hasil kerja berkualitas tinggi dengan garansi layanan",
  },
]

export default function TentangKamiPage() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500 text-white pt-32 pb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-blue-900/30"></div>
          <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-blue-500 text-white hover:bg-blue-400 font-semibold mb-6">
                ⭐ Terpercaya Sejak 2015 ⭐
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Tentang SedotWC Jakarta</h1>
              <p className="text-xl text-gray-100 leading-relaxed font-medium max-w-3xl mx-auto">
                🏆 Perusahaan layanan sedot WC terpercaya dengan pengalaman 9+ tahun melayani masyarakat Jakarta.
                Komitmen kami adalah memberikan layanan berkualitas tinggi dengan teknologi modern dan tim profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sejarah Perusahaan</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    SedotWC Jakarta didirikan pada tahun 2015 dengan visi menjadi penyedia layanan sedot WC terdepan di
                    Jakarta. Berawal dari keprihatinan terhadap sulitnya mendapatkan layanan sedot WC yang profesional
                    dan terpercaya di Jakarta.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Dengan modal awal satu unit mobil sedot dan tekad yang kuat, kami mulai melayani masyarakat Jakarta.
                    Kini, setelah 9+ tahun beroperasi, kami telah melayani lebih dari 10.000 pelanggan dengan tingkat
                    kepuasan 99%.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold" asChild>
                      <a href="/kontak">Hubungi Kami</a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      asChild
                    >
                      <a href="tel:+6281219067233">
                        <Phone className="mr-2 h-4 w-4" />
                        0812-1906-7233
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/sedot-11.webp"
                  alt="Sejarah SedotWC Jakarta - Perusahaan Terpercaya Sejak 2015"
                  width={600}
                  height={500}
                  quality={90}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Angka-angka yang membuktikan dedikasi dan komitmen kami dalam melayani masyarakat Jakarta
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                    <CardTitle className="text-xl font-bold text-gray-900">{achievement.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Visi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Menjadi perusahaan penyedia layanan sedot WC terdepan dan terpercaya di Jakarta, yang memberikan
                    solusi terbaik untuk kebutuhan sanitasi masyarakat dengan standar internasional dan teknologi
                    modern.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Misi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Memberikan layanan sedot WC berkualitas tinggi dengan harga terjangkau</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Menggunakan teknologi dan peralatan modern untuk hasil optimal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Melayani dengan profesional, cepat, dan ramah 24 jam</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Menjaga lingkungan dengan penanganan limbah yang bertanggung jawab</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-24 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 text-white">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai-Nilai Perusahaan</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <value.icon className="h-10 w-10 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tim Profesional Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dipimpin oleh para ahli berpengalaman yang berkomitmen memberikan layanan terbaik
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative h-80 w-full overflow-hidden bg-gray-50">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.position} SedotWC Jakarta`}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                    <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600">Pengalaman: {member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Siap Melayani Kebutuhan Sedot WC Anda</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Dengan pengalaman 9+ tahun dan tim profesional, kami siap memberikan layanan sedot WC terbaik untuk Anda.
              Hubungi kami sekarang untuk konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold w-full sm:w-auto" asChild>
                <a href="tel:+6281219067233">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Hubungi Sekarang
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent w-full sm:w-auto"
                asChild
              >
                <a href="/kontak">Lihat Kontak Lengkap</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Truck className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">SedotWC Jakarta</span>
              </div>
              <p className="text-gray-400 mb-4">Layanan sedot WC profesional terpercaya di Jakarta sejak 2015</p>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+6281219067233" className="font-semibold hover:text-blue-400">
                  0812-1906-7233
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 SedotWC Jakarta. Semua hak dilindungi.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageLoader>
  )
}
