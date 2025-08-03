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
        {/* Enhanced floating circles with smooth animations */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-500/30 rounded-full animate-smooth-pulse animate-optimized"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 border border-blue-400/20 rounded-full animate-gentle-float animation-delay-200 animate-optimized"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-smooth-pulse animation-delay-300 animate-optimized"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-300/30 rounded-full animate-smooth-pulse animation-delay-500 animate-optimized"></div>
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
            <div className="flex justify-center lg:justify-start animate-fade-in-up">
              <Badge className="bg-blue-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full border border-blue-500 hover-glow btn-smooth">
                🚛 Jasa Sedot WC Jakarta #1 Terpercaya
              </Badge>
            </div>
            
            {/* Main Heading - SEO Optimized - Mobile Responsive */}
            <div className="space-y-2 sm:space-y-4 animate-fade-in-up animation-delay-150">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-black leading-tight animate-optimized">
                <span className="block animate-fade-in-left">Jasa Sedot WC</span>
                <span className="block animate-fade-in-left animation-delay-200">Jakarta Terpercaya</span>
                <span className="block text-blue-600 animate-fade-in-left animation-delay-300">24 Jam Siaga</span>
              </h1>
            </div>
            
            {/* Typewriter Effect - Mobile Optimized */}
            <div className="h-12 sm:h-16 md:h-20 flex justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <TypewriterText />
            </div>
            
            {/* Description - Mobile Optimized */}
            <p className="text-base sm:text-xl md:text-2xl text-black leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 sm:px-0 animate-fade-in-up animation-delay-500">
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
                  src="/jasa-sedot-wc.webp"
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
      </div>
    </section>
  );
}
