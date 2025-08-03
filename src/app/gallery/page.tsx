import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin, Clock, CheckCircle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery Layanan Sedot WC Jakarta | Dokumentasi Pekerjaan Profesional",
  description:
    "Lihat dokumentasi lengkap layanan sedot WC profesional di Jakarta. Foto-foto hasil kerja berkualitas tinggi dengan peralatan modern dan tim berpengalaman.",
  keywords:
    "gallery sedot wc jakarta, foto layanan sedot wc, dokumentasi pekerjaan, before after sedot wc, peralatan modern, tim profesional",
  openGraph: {
    title: "Gallery Layanan Sedot WC Jakarta | Dokumentasi Profesional",
    description: "Dokumentasi lengkap layanan sedot WC profesional di Jakarta dengan hasil kerja berkualitas tinggi.",
    url: "https://sedotwcjakarta.com/gallery",
    siteName: "Sedot WC Jakarta",
    images: [
      {
        url: "/images/gallery-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gallery Layanan Sedot WC Jakarta",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery Layanan Sedot WC Jakarta",
    description: "Dokumentasi lengkap layanan sedot WC profesional di Jakarta",
    images: ["/images/gallery-twitter.jpg"],
  },
  alternates: {
    canonical: "https://sedotwcjakarta.com/gallery",
  },
}

const galleryImages = [
  {
    id: 1,
    src: "/images/sedot-1.webp",
    alt: "Truk sedot WC modern dengan peralatan canggih",
    title: "Peralatan Modern",
    location: "Jakarta Selatan",
    category: "Equipment",
    description: "Truk sedot WC dengan teknologi terdepan",
  },
  {
    id: 2,
    src: "/images/sedot-2.webp",
    alt: "Teknisi profesional sedang bekerja",
    title: "Tim Profesional",
    location: "Jakarta Barat",
    category: "Team",
    description: "Teknisi berpengalaman dengan standar keselamatan tinggi",
  },
  {
    id: 3,
    src: "/images/sedot-4.webp",
    alt: "Hasil pembersihan septic tank yang bersih",
    title: "Hasil Berkualitas",
    location: "Jakarta Timur",
    category: "Results",
    description: "Septic tank bersih setelah layanan profesional",
  },
  {
    id: 4,
    src: "/images/sedot-6.webp",
    alt: "Proses penyedotan dengan peralatan modern",
    title: "Proses Penyedotan",
    location: "Jakarta Utara",
    category: "Process",
    description: "Proses penyedotan menggunakan teknologi modern",
  },
  {
    id: 5,
    src: "/images/sedot-7.webp",
    alt: "Layanan sedot WC rumah tinggal",
    title: "Layanan Residensial",
    location: "Jakarta Pusat",
    category: "Residential",
    description: "Layanan khusus untuk rumah tinggal",
  },
  {
    id: 6,
    src: "/images/sedot-wc-1.webp",
    alt: "Layanan sedot WC gedung perkantoran",
    title: "Layanan Komersial",
    location: "Jakarta Selatan",
    category: "Commercial",
    description: "Layanan untuk gedung perkantoran dan komersial",
  },
  {
    id: 7,
    src: "/images/sedot-wc-2.webp",
    alt: "Inspeksi septic tank dengan alat profesional",
    title: "Inspeksi Menyeluruh",
    location: "Jakarta Barat",
    category: "Inspection",
    description: "Inspeksi detail menggunakan alat profesional",
  },
  {
    id: 8,
    src: "/images/sedot-wc-3.webp",
    alt: "Layanan darurat 24 jam",
    title: "Layanan Darurat",
    location: "Jakarta Timur",
    category: "Emergency",
    description: "Siap melayani panggilan darurat 24 jam",
  },
  {
    id: 9,
    src: "/images/sedot-wc-6.webp",
    alt: "Layanan sedot WC apartemen",
    title: "Layanan Apartemen",
    location: "Jakarta Utara",
    category: "Apartment",
    description: "Spesialisasi layanan untuk apartemen dan kondominium",
  },
  {
    id: 10,
    src: "/images/sedot-wc-7.webp",
    alt: "Layanan sedot WC industri",
    title: "Layanan Industri",
    location: "Jakarta Pusat",
    category: "Industrial",
    description: "Layanan khusus untuk kawasan industri",
  },
  {
    id: 11,
    src: "/images/sedot-wc-8.webp",
    alt: "Perawatan dan perbaikan septic tank",
    title: "Perawatan & Perbaikan",
    location: "Jakarta Selatan",
    category: "Maintenance",
    description: "Layanan perawatan dan perbaikan septic tank",
  },
  {
    id: 12,
    src: "/images/sedot-wc-jakarta.webp",
    alt: "Proses ramah lingkungan",
    title: "Ramah Lingkungan",
    location: "Jakarta Barat",
    category: "Eco-Friendly",
    description: "Proses pembersihan yang ramah lingkungan",
  },
]

const categories = [
  "All",
  "Equipment",
  "Team",
  "Results",
  "Process",
  "Residential",
  "Commercial",
  "Inspection",
  "Emergency",
  "Apartment",
  "Industrial",
  "Maintenance",
  "Eco-Friendly",
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <Camera className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gallery Layanan
              <span className="block text-blue-200">Sedot WC Jakarta</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Dokumentasi lengkap layanan profesional kami dengan peralatan modern dan tim berpengalaman
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="font-semibold">100+ Proyek Selesai</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-blue-200" />
                <span className="font-semibold">Seluruh Jakarta</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span className="font-semibold">Layanan 24 Jam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105 ${
                  category === "All"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12">
          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className={`break-inside-avoid group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                  index % 3 === 0
                    ? "animate-fade-in"
                    : index % 3 === 1
                      ? "animate-fade-in animation-delay-150"
                      : "animate-fade-in animation-delay-300"
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    loading={index < 6 ? "eager" : "lazy"}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-blue-600 text-white text-xs">{image.category}</Badge>
                        <div className="flex items-center space-x-1 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{image.location}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200 leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Muat Lebih Banyak Foto
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Layanan Sedot WC Profesional?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Tim profesional kami siap memberikan layanan terbaik dengan peralatan modern dan hasil yang memuaskan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6281234567890"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                📞 Hubungi Sekarang
              </a>
              <a
                href="https://wa.me/6281219067233"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Gallery Layanan Sedot WC Jakarta",
            description:
              "Dokumentasi lengkap layanan sedot WC profesional di Jakarta dengan peralatan modern dan tim berpengalaman",
            url: "https://sedotwcjakarta.com/gallery",
            provider: {
              "@type": "LocalBusiness",
              name: "Sedot WC Jakarta",
              telephone: "+6281219067233",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "ID",
              },
            },
            image: galleryImages.map((img) => ({
              "@type": "ImageObject",
              url: `https://sedotwcjakarta.com${img.src}`,
              name: img.title,
              description: img.description,
              contentLocation: img.location,
            })),
          }),
        }}
      />
    </div>
  )
}
