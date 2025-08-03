import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, Mail, MessageCircle, Truck, Shield, Zap, CheckCircle } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import PageLoader from "@/components/page-loader"

export const metadata: Metadata = {
  title: "Kontak Kami - SedotWC Jakarta | Hubungi Layanan Sedot WC 24 Jam",
  description:
    "Hubungi SedotWC Jakarta untuk layanan sedot WC profesional 24 jam. Telepon: 0812-3456-7890, WhatsApp tersedia. Konsultasi gratis, respon cepat 30 menit ke seluruh Jakarta.",
  keywords:
    "kontak sedot wc jakarta, telepon sedot wc, whatsapp sedot wc, alamat sedot wc jakarta, customer service sedot wc, layanan darurat sedot wc",
  openGraph: {
    title: "Kontak SedotWC Jakarta - Layanan 24 Jam Siap Melayani",
    description:
      "Hubungi kami kapan saja untuk layanan sedot WC profesional di Jakarta. Telepon & WhatsApp: 0812-3456-7890. Konsultasi gratis!",
    type: "website",
    locale: "id_ID",
    url: "https://sedotwc-jakarta.com/kontak",
  },
  alternates: {
    canonical: "https://sedotwc-jakarta.com/kontak",
  },
}

const contactMethods = [
  {
    icon: Phone,
    title: "Telepon & WhatsApp",
    primary: "0812-3456-7890",
    secondary: "Tersedia 24 jam sehari",
    action: "tel:+6281234567890",
    actionText: "Hubungi Sekarang",
    color: "green",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    primary: "Chat Langsung",
    secondary: "Respon cepat dalam hitungan menit",
    action: "https://wa.me/6281234567890",
    actionText: "Chat WhatsApp",
    color: "green",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@sedotwc-jakarta.com",
    secondary: "Untuk pertanyaan dan konsultasi",
    action: "mailto:info@sedotwc-jakarta.com",
    actionText: "Kirim Email",
    color: "gray",
  },
]

const emergencyServices = [
  {
    icon: Zap,
    title: "Layanan Darurat",
    description: "Siap melayani panggilan darurat 24/7",
    time: "Respon < 30 menit",
  },
  {
    icon: Shield,
    title: "Konsultasi Gratis",
    description: "Dapatkan saran dan estimasi harga gratis",
    time: "Tanpa biaya tersembunyi",
  },
  {
    icon: CheckCircle,
    title: "Garansi Layanan",
    description: "Semua layanan bergaransi kualitas",
    time: "100% kepuasan terjamin",
  },
]

const serviceAreas = ["Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara", "Jakarta Pusat"]

export default function KontakPage() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white pt-32 pb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-green-900/30"></div>
          <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-green-500 text-white hover:bg-green-400 font-semibold mb-6">
                ⚡ Respon Cepat 24 Jam ⚡
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hubungi SedotWC Jakarta</h1>
              <p className="text-xl text-gray-100 leading-relaxed font-medium max-w-3xl mx-auto">
                📞 Siap melayani kebutuhan sedot WC Anda kapan saja, di mana saja di seluruh Jakarta. Tim profesional
                kami siaga 24 jam dengan respon cepat dalam 30 menit!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Menghubungi Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pilih cara yang paling nyaman untuk Anda. Kami siap membantu dengan respon yang cepat dan profesional
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg group"
                >
                  <CardHeader className="pb-6">
                    <div
                      className={`mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-${method.color}-500 to-${method.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{method.title}</CardTitle>
                    <div className="text-2xl font-bold text-green-600 mb-2">{method.primary}</div>
                    <p className="text-gray-600">{method.secondary}</p>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className={`w-full bg-${method.color}-600 hover:bg-${method.color}-700 text-white font-semibold`}
                      asChild
                    >
                      <a href={method.action} target={method.action.startsWith("http") ? "_blank" : undefined}>
                        {method.actionText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Unggulan Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Komitmen kami untuk memberikan layanan terbaik dengan standar profesional tinggi
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {emergencyServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="bg-green-50 px-4 py-2 rounded-full">
                      <span className="text-green-700 font-semibold">{service.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Informasi Kontak Lengkap</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Kami siap melayani Anda dengan berbagai cara komunikasi yang mudah dan cepat
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">📱 Telepon & WhatsApp</h3>
                      <p className="text-gray-600 mb-2">Hubungi kami kapan saja, 24 jam sehari</p>
                      <a href="tel:+6281234567890" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                        0812-3456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">⏰ Jam Operasional</h3>
                      <p className="text-gray-600">24 Jam - 7 Hari Seminggu</p>
                      <p className="text-gray-600">Termasuk hari libur dan darurat</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">🗺️ Area Layanan</h3>
                      <p className="text-gray-600 mb-2">Seluruh DKI Jakarta:</p>
                      <div className="flex flex-wrap gap-2">
                        {serviceAreas.map((area, index) => (
                          <Badge key={index} variant="outline" className="text-gray-600">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">📧 Email</h3>
                      <p className="text-gray-600 mb-2">Untuk pertanyaan dan konsultasi</p>
                      <a
                        href="mailto:info@sedotwc-jakarta.com"
                        className="text-lg font-semibold text-purple-600 hover:text-purple-700"
                      >
                        info@sedotwc-jakarta.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 shadow-xl border-0">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900">Kirim Pesan Kepada Kami</CardTitle>
                    <p className="text-gray-600">
                      Isi form di bawah ini untuk mendapatkan konsultasi gratis dan estimasi harga
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">🚨 Butuh Layanan Darurat?</h2>
              <p className="text-xl text-red-100 mb-8">
                Jangan panik! Tim darurat kami siap membantu Anda 24/7. Hubungi sekarang untuk respon cepat dalam 30
                menit!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <a href="tel:+6281234567890">
                    <Phone className="mr-2 h-6 w-6" />
                    HUBUNGI DARURAT: 0812-3456-7890
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4 bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    WhatsApp Darurat
                  </a>
                </Button>
              </div>
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
                <a href="tel:+6281234567890" className="font-semibold hover:text-blue-400">
                  0812-3456-7890
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
