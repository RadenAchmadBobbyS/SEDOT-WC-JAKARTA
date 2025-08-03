"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Send, CheckCircle } from "lucide-react"
import LoadingSpinner from "./loading-spinner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    address: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Option 1: WhatsApp Direct Integration
      const whatsappMessage = `*PERMINTAAN LAYANAN SEDOT WC*%0A%0A` +
        `👤 *Nama:* ${formData.name}%0A` +
        `📱 *WhatsApp:* ${formData.phone}%0A` +
        `📍 *Area:* ${formData.area.replace('-', ' ').toUpperCase()}%0A` +
        `🏠 *Alamat:* ${formData.address}%0A` +
        `💬 *Pesan:* ${formData.message || 'Tidak ada pesan tambahan'}%0A%0A` +
        `⏰ *Waktu Request:* ${new Date().toLocaleString('id-ID')}%0A%0A` +
        `_Mohon konfirmasi ketersediaan dan estimasi biaya. Terima kasih!_`

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Auto-redirect to WhatsApp
      const whatsappUrl = `https://wa.me/6281219067233?text=${whatsappMessage}`
      
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Open WhatsApp after showing success message
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
      }, 1000)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          area: "",
          address: "",
          message: "",
        })
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitting(false)
      // Handle error state here
      alert('Terjadi kesalahan. Silakan hubungi langsung via WhatsApp: 0812-1906-7233')
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="p-4 sm:p-6 text-center shadow-2xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 mx-2 sm:mx-0">
        <div className="flex flex-col items-center space-y-3">
          <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Pesan Terkirim!</h3>
          <p className="text-gray-600 text-xs sm:text-sm text-center">
            Kami akan membuka WhatsApp untuk konfirmasi layanan. 
            <br />Tim kami akan merespon dalam <strong>15 menit</strong>.
          </p>
          <div className="flex items-center space-x-2 text-blue-600">
            <Phone className="h-4 w-4" />
            <span className="font-semibold text-sm">0812-1906-7233</span>
          </div>
          <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-700">
              💬 Tunggu redirect ke WhatsApp atau klik tombol di bawah
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/6281219067233`, '_blank')}
              className="mt-2 bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2"
            >
              Buka WhatsApp Manual
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm w-full max-w-none">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-lg pb-3 sm:pb-4 px-3 sm:px-4 lg:px-6">
        <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 text-center sm:text-left">� Hubungi Teknisi Ahli Sedot WC</CardTitle>
        <CardDescription className="text-slate-600 text-xs sm:text-sm text-center sm:text-left">
        </CardDescription>
        {/* Urgency Banner */}
        <div className="mt-1 sm:mt-3 p-2 sm:p-3 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-lg">
          <div className="text-center sm:flex sm:items-center sm:justify-between">
            <span className="text-orange-700 font-semibold text-xs sm:text-sm block sm:inline">
              🔥 Diskon 15% untuk panggilan darurat!
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 lg:p-6">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Compelling Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-lg p-2 sm:p-3 lg:p-4 mb-3 sm:mb-4">
            <div className="text-center">
              <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-800 mb-2">🏆 Dapatkan Layanan Terbaik Jakarta!</h3>
              <div className="grid grid-cols-3 gap-1 sm:gap-2 text-xs">
                <div className="flex flex-col items-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">⚡</span>
                  <span className="font-semibold text-blue-700 text-xs">Respon Cepat</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">🚀</span>
                  <span className="font-semibold text-orange-700 text-xs">Langsung Datang</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">💯</span>
                  <span className="font-semibold text-green-700 text-xs">Hasil Bersih</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="name" className="text-xs sm:text-sm font-medium">Nama Lengkap</Label>
              <Input
                id="name"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="phone" className="text-xs sm:text-sm font-medium">Nomor WhatsApp</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="08xx-xxxx-xxxx"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="area" className="text-xs sm:text-sm font-medium">Area Jakarta</Label>
            <Select value={formData.area} onValueChange={(value) => handleChange("area", value)}>
              <SelectTrigger className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm">
                <SelectValue placeholder="Pilih area Jakarta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta-selatan">Jakarta Selatan</SelectItem>
                <SelectItem value="jakarta-barat">Jakarta Barat</SelectItem>
                <SelectItem value="jakarta-timur">Jakarta Timur</SelectItem>
                <SelectItem value="jakarta-utara">Jakarta Utara</SelectItem>
                <SelectItem value="jakarta-pusat">Jakarta Pusat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="address" className="text-xs sm:text-sm font-medium">Alamat Lengkap</Label>
            <Input
              id="address"
              type="text"
              placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              required
              className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="message" className="text-xs sm:text-sm font-medium">Pesan (Opsional)</Label>
            <Textarea
              id="message"
              placeholder="Ceritakan masalah WC Anda atau kebutuhan khusus lainnya"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={2}
              className="resize-none text-xs sm:text-sm"
            />
          </div>

          {/* Social Proof Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <span className="text-green-600 font-bold">1,247+</span>
                <span className="text-gray-600">Customer Puas</span>
              </div>
              <div className="hidden sm:block w-1 h-4 bg-gray-300 rounded"></div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-gray-600 text-xs">(4.9/5)</span>
              </div>
              <div className="hidden sm:block w-1 h-4 bg-gray-300 rounded"></div>
              <div className="flex items-center space-x-1">
                <span className="text-blue-600 font-bold">24/7</span>
                <span className="text-gray-600">Siaga</span>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 py-2 sm:py-3 lg:py-4" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoadingSpinner />
                <span className="ml-2 text-xs sm:text-sm">Memproses & Membuka WhatsApp...</span>
              </>
            ) : (
              <>
                <Send className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                <span className="text-xs sm:text-sm lg:text-base font-semibold">� Panggil Teknisi Sekarang</span>
              </>
            )}
          </Button>

          {/* Emergency Contact Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2">
            {/* WhatsApp Direct */}
            <Button 
              type="button"
              variant="outline" 
              onClick={() => window.open('https://wa.me/6281219067233', '_blank')}
              className="border-2 border-green-500 text-green-700 hover:bg-green-50 font-semibold py-2 sm:py-3"
            >
              <span className="text-xs sm:text-sm">📱 Chat WhatsApp Langsung</span>
            </Button>
            
            {/* Emergency Call */}
            <Button 
              type="button"
              variant="outline"
              onClick={() => window.open('tel:+6281219067233', '_self')}
              className="border-2 border-red-500 text-red-700 hover:bg-red-50 font-semibold py-2 sm:py-3"
            >
              <span className="text-xs sm:text-sm">🚨 Panggilan Darurat</span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
