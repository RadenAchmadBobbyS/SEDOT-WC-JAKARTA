"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Phone, Clock, Truck, Home, Info, MessageCircle, X, ChevronDown, MapPin, Camera, Image as ImageIcon, Grip } from "lucide-react"
import { jakartaAreas } from "@/data/areas"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)

  const navigation = [
    { name: "Beranda", href: "/"},
    { name: "Tentang Kami", href: "/tentang-kami"},
    { name: "Kontak", href: "/kontak"},
  ]

  const galleryItems = [
    { name: "Foto Layanan", href: "/gallery", icon: Camera },
    { name: "Before & After", href: "/galeri/before-after", icon: ImageIcon },
  ]

  const handleDropdownEnter = (dropdown: string) => {
    setDropdownOpen(dropdown)
  }

  const handleDropdownLeave = () => {
    setDropdownOpen(null)
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === dropdown ? null : dropdown)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-3xl shadow-2xl">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Truck className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-orange-400 transition-colors">
                Sedot WC Mandala
              </h1>
              <p className="text-xs text-gray-900 font-medium">Layanan Terpercaya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-black hover:text-white hover:bg-orange-400 transition-all duration-300 font-medium"
              >
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Daerah Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('areas')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-black hover:text-white hover:bg-orange-400 transition-all duration-300 font-medium">
                <span>Daerah</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {dropdownOpen === 'areas' && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 py-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        Area Layanan Jakarta
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">Pilih area sesuai lokasi Anda</p>
                    </div>
                    <div className="py-2">
                      {jakartaAreas.map((area, index) => (
                        <Link
                          key={area.slug}
                          href={`/area/${area.slug}`}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                            index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                          }`}>
                            🏢
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">
                              {area.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              Respon 30-45 menit
                            </div>
                          </div>
                          <div className="text-green-500 text-xs font-semibold">
                            24/7
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        📞 <span className="font-semibold">0812-1906-7233</span> untuk konsultasi
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Galeri Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('gallery')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-black hover:text-white hover:bg-orange-400 transition-all duration-300 font-medium">
                <span>Galeri</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {dropdownOpen === 'gallery' && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 py-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                        <Camera className="h-4 w-4 text-orange-500" />
                        Galeri Layanan
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">Lihat dokumentasi pekerjaan kami</p>
                    </div>
                    <div className="py-2">
                      {galleryItems.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors group"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                              index === 0 ? 'bg-blue-100 text-blue-600' : 
                              index === 1 ? 'bg-green-100 text-green-600' : 
                              'bg-purple-100 text-purple-600'
                            }`}>
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">
                                {item.name}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        Dokumentasi hasil kerja profesional
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
              <Phone className="h-4 w-4 text-blue-400" />
              <a href="tel:+6281219067233" className="font-bold text-white hover:text-white transition-colors">
              </a>
            </div>
            <div className="flex items-center space-x-2 bg-orange-400 px-4 py-2 rounded-full">
              <Clock className="h-4 w-4 text-white" />
              <span className="font-semibold text-white">24 Jam</span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            
            {/* Hamburger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2 text-black hover:text-white hover:bg-orange-500 transition-all duration-300 rounded-xl group">
                  <Grip className="h-30 w-30 group-hover:scale-110 transition-transform duration-300" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-80 bg-gray-900/98 backdrop-blur-md border-l border-gray-700 p-0 h-full">
                <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                <div className="flex flex-col h-full max-h-screen">
                  {/* Header with Close Button */}
                  <div className="flex items-center justify-center px-6 py-6 border-b border-gray-700 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl shadow-lg">
                        <Truck className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-white text-sm">SedotWC Jakarta</span>
                        <p className="text-xs text-gray-400 font-medium">Layanan Terpercaya 24 Jam</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu - Scrollable */}
                  <nav className="flex-1 overflow-y-auto px-6 py-8">
                    <div className="space-y-3 pb-20">{/* Extra padding bottom for scroll */}
                      {navigation.map((item, index) => {
                        const getIcon = (name: string) => {
                          switch (name) {
                            case "Beranda": return Home
                            case "Tentang Kami": return Info
                            case "Kontak": return MessageCircle
                            default: return Home
                          }
                        }
                        const IconComponent = getIcon(item.name)
                        
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-4 px-4 py-4 rounded-2xl text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-medium group transform hover:scale-105"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="w-12 h-12 bg-gray-800 group-hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                              <IconComponent className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-lg">{item.name}</span>
                          </Link>
                        )
                      })}
                      
                      {/* Daerah Menu */}
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleMobileDropdown('areas')}
                          className="w-full flex items-center justify-between px-4 py-4 text-orange-400 font-bold hover:bg-gray-800 rounded-2xl transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                              <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-lg">Daerah Jakarta</span>
                          </div>
                          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                            mobileDropdownOpen === 'areas' ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Dropdown Content with Animation */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          mobileDropdownOpen === 'areas' 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pl-16 space-y-2 pt-2">
                            {jakartaAreas.map((area, index) => (
                              <Link
                                key={area.slug}
                                href={`/area/${area.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-3 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-xs transition-all duration-300 ${
                                  index % 2 === 0 ? 'bg-blue-600 group-hover:bg-blue-500' : 'bg-orange-600 group-hover:bg-orange-500'
                                }`}>
                                  🏢
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold">{area.name}</div>
                                  <div className="text-xs text-gray-500">Respon 30-45 menit</div>
                                </div>
                                <div className="text-green-400 text-xs font-bold">24/7</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Galeri Menu */}
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleMobileDropdown('gallery')}
                          className="w-full flex items-center justify-between px-4 py-4 text-blue-400 font-bold hover:bg-gray-800 rounded-2xl transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                              <Camera className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-lg">Galeri</span>
                          </div>
                          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                            mobileDropdownOpen === 'gallery' ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Dropdown Content with Animation */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          mobileDropdownOpen === 'gallery' 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pl-16 space-y-2 pt-2">
                            {galleryItems.map((item, index) => {
                              const IconComponent = item.icon
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center px-3 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                                >
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 ${
                                    index === 0 ? 'bg-blue-600 group-hover:bg-blue-500' : 
                                    index === 1 ? 'bg-green-600 group-hover:bg-green-500' : 
                                    'bg-purple-600 group-hover:bg-purple-500'
                                  }`}>
                                    <IconComponent className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold">{item.name}</div>
                                    <div className="text-xs text-gray-500">Dokumentasi profesional</div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* Footer CTA - Fixed at bottom */}
                  <div className="border-t border-gray-700 px-6 pt-6 pb-6 space-y-4 flex-shrink-0 bg-gray-900/98">
                    {/* Emergency Call Button */}
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
                      <a href="tel:+6281219067233" className="flex items-center justify-center space-x-3">
                        <Phone className="h-5 w-5" />
                        <span className="text-lg">Hubungi Sekarang</span>
                      </a>
                    </Button>
                    
                    {/* WhatsApp Button */}
                    <Button variant="outline" className="w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-4 rounded-2xl transition-all duration-300" asChild>
                      <a href="https://wa.me/6281219067233" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-lg">Chat WhatsApp</span>
                      </a>
                    </Button>
                    
                    {/* 24/7 Badge */}
                    <div className="text-center -pt-1">
                      <div className="inline-flex items-center space-x-3 text-blue-400 bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-2 rounded-2xl shadow-lg">
                        <Clock className="h-5 w-5" />
                        <span className="font-bold text-sm">Layanan 24 Jam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
