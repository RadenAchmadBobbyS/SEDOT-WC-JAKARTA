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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        area: "",
        address: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="p-6 text-center shadow-2xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="flex flex-col items-center space-y-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
          <h3 className="text-xl font-bold text-gray-900">Pesan Terkirim!</h3>
          <p className="text-gray-600 text-sm">Terima kasih! Tim kami akan segera menghubungi Anda dalam 15 menit.</p>
          <div className="flex items-center space-x-2 text-blue-600">
            <Phone className="h-4 w-4" />
            <span className="font-semibold text-sm">0812-1906-7233</span>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-lg pb-4">
        <CardTitle className="text-xl font-bold text-slate-800">Konsultasi Gratis</CardTitle>
        <CardDescription className="text-slate-600 text-sm">
          Dapatkan estimasi harga dan jadwal layanan sekarang juga
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">Nama Lengkap</Label>
              <Input
                id="name"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm">Nomor WhatsApp</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="08xx-xxxx-xxxx"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="h-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area" className="text-sm">Area Jakarta</Label>
            <Select value={formData.area} onValueChange={(value) => handleChange("area", value)}>
              <SelectTrigger className="h-10">
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

          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm">Alamat Lengkap</Label>
            <Input
              id="address"
              type="text"
              placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              required
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm">Pesan (Opsional)</Label>
            <Textarea
              id="message"
              placeholder="Ceritakan masalah WC Anda atau kebutuhan khusus lainnya"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={2}
              className="resize-none"
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoadingSpinner />
                <span className="ml-2">Mengirim...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Kirim Pesan
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Atau hubungi langsung: <strong>0812-1906-7233</strong>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
