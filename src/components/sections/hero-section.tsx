import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import Image from "next/image";
import TypewriterText from "@/components/typewriter-text";
import { Truck, Zap, Users, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 text-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Mobile Background Pattern */}
      <div className="absolute inset-0 sm:hidden">
        {/* Mobile gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-orange-100"></div>
        
        {/* Mobile geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-sm"></div>
          <div className="absolute top-32 left-4 w-16 h-16 bg-orange-200/40 rounded-full blur-sm"></div>
          <div className="absolute top-64 right-8 w-12 h-12 bg-blue-300/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-40 left-8 w-24 h-24 bg-orange-200/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-20 right-4 w-18 h-18 bg-blue-200/40 rounded-full blur-sm"></div>
        </div>
        
        {/* Mobile wave pattern */}
        <div className="absolute top-1/4 left-0 w-full opacity-20">
          <svg viewBox="0 0 100 20" className="w-full h-8">
            <defs>
              <pattern id="wave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#3B82F6"/>
              </pattern>
            </defs>
            <rect width="100" height="20" fill="url(#wave)" />
          </svg>
        </div>
        
        {/* Mobile dotted pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full p-4">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Background Elements */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        {/* Floating circles similar to Gojek */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 border border-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-300/30 rounded-full animate-ping delay-1000"></div>
      </div>
      
      {/* Smooth Wave Transition to Orange Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-12 sm:h-16 lg:h-20" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
            className="fill-orange-300"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-1 px-4 sm:px-0">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-blue-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full border border-blue-500">
                🚛 Jasa Sedot WC Jakarta #1 Terpercaya
              </Badge>
            </div>
            
            {/* Main Heading - SEO Optimized - Mobile Responsive */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-black leading-tight">
                <span className="block">Jasa Sedot WC</span>
                <span className="block">Jakarta Terpercaya</span>
                <span className="block text-blue-600">24 Jam Siaga</span>
              </h1>
            </div>
            
            {/* Typewriter Effect - Mobile Optimized */}
            <div className="h-12 sm:h-16 md:h-20 flex justify-center lg:justify-start">
              <TypewriterText />
            </div>
            
            {/* Description - Mobile Optimized */}
            <p className="text-base sm:text-xl md:text-2xl text-black leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              <span className="font-bold text-blue-600">Sedot WC Jakarta Murah & Berkualitas</span> - Layanan profesional untuk seluruh DKI Jakarta. 
              Teknisi berpengalaman, peralatan modern, harga terjangkau. 
              <span className="text-blue-400 font-bold"> Garansi 100% & Respon 30 Menit!</span>
            </p>
            
            {/* Action Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-full w-full sm:w-auto"
                asChild
              >
                <a href="tel:+6281219067233" className="flex items-center justify-center">
                  <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7" />
                  <span>Hubungi Sekarang</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-gray-100 hover:text-gray-900 bg-white/80 backdrop-blur-sm font-bold px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-full transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="https://wa.me/6281219067233" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span>Konsultasi</span>
                </a>
              </Button>
            </div>
            
            {/* Trust Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 px-4 sm:px-0">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-black">24/7</div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">Siap Melayani</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-black">5000+</div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">Pelanggan Puas</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-black">30min</div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">Respon Cepat</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-black">100%</div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">Bergaransi</div>
              </div>
            </div>
          </div>
          
          {/* Right Image - Dynamic Layout like Gojek - Mobile Optimized */}
          <div className="relative order-2 lg:order-2 mt-8 lg:mt-0 px-4 sm:px-0">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-xl mx-auto">
              {/* Mobile background decoration */}
              <div className="absolute inset-0 sm:hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
              </div>
              
              {/* Main service truck image */}
              <div className="relative z-20">
                <Image
                  src="/jasa-sedot-wc.png"
                  alt="Layanan Sedot WC Jakarta - Truck Profesional"
                  width={600}
                  height={500}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  priority
                  loading="eager"
                />
              </div>
              
              {/* Floating service icons - Mobile Responsive */}
              <div className="absolute -top-2 sm:-top-4 lg:-top-8 -left-2 sm:-left-4 lg:-left-8 z-30 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#2c599d] to-blue-600 rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center">
                  <Truck className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-[8px] sm:text-[10px] lg:text-xs font-bold text-gray-800 mt-1 lg:mt-2 text-center">Sedot WC</div>
              </div>
              
              <div className="absolute -top-1 sm:-top-2 lg:-top-4 -right-3 sm:-right-6 lg:-right-12 z-30 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#f98125] to-[#fb9b50] rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center">
                  <Zap className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-[8px] sm:text-[10px] lg:text-xs font-bold text-gray-800 mt-1 lg:mt-2 text-center">Darurat</div>
              </div>
              
              <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-8 -left-1 sm:-left-2 lg:-left-4 z-30 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#fb9b50] to-[#f98125] rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-[8px] sm:text-[10px] lg:text-xs font-bold text-gray-800 mt-1 lg:mt-2 text-center">Tim Ahli</div>
              </div>
              
              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 -right-2 sm:-right-4 lg:-right-8 z-30 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#5b84c4] to-[#2c599d] rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center">
                  <Shield className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-[8px] sm:text-[10px] lg:text-xs font-bold text-gray-800 mt-1 lg:mt-2 text-center">Garansi</div>
              </div>
              
              {/* Background decoration circle - Mobile Responsive */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border border-blue-500/20 sm:border-2 lg:border-4 rounded-full z-10 animate-spin-slow"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Action Buttons - Mobile & Desktop */}
        <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6281219067233?text=Halo, saya butuh jasa sedot WC Mandala"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.945 3.585"/>
            </svg>
          </a>
          
          {/* Phone Button */}
          <a
            href="tel:+6281219067233"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
