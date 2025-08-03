import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import Image from "next/image";
import TypewriterText from "@/components/typewriter-text";
import { Truck, Zap, Users, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-white text-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"></div>
        {/* Floating circles similar to Gojek - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-40 left-10 w-20 h-20 border border-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 sm:w-4 sm:h-4 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 sm:w-6 sm:h-6 bg-blue-300/30 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-1 lg:order-1">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-blue-500 text-white font-bold text-sm px-6 py-2 rounded-full border border-blue-500">
                🚛 Jasa Sedot WC Jakarta #1 Terpercaya
              </Badge>
            </div>
            
            {/* Main Heading - SEO Optimized */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-black leading-none">
                <span className="block">Jasa Sedot WC</span>
                <span className="block">Jakarta Terpercaya</span>
                <span className="block text-blue-600">24 Jam Siaga</span>
              </h1>
            </div>
            
            {/* Typewriter Effect */}
            <div className="h-16 sm:h-20 flex justify-center lg:justify-start">
              <TypewriterText />
            </div>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl text-black leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              <span className="font-bold text-blue-600">Sedot WC Jakarta Murah & Berkualitas</span> - Layanan profesional untuk seluruh DKI Jakarta. 
              Teknisi berpengalaman, peralatan modern, harga terjangkau. 
              <span className="text-blue-400 font-bold"> Garansi 100% & Respon 30 Menit!</span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-6 text-xl rounded-full"
                asChild
              >
                <a href="tel:+6281234567890" className="flex items-center justify-center">
                  <Phone className="mr-3 h-7 w-7" />
                  <span>Hubungi Sekarang</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-gray-100 hover:text-gray-900 bg-transparent/20 backdrop-blur-sm font-bold px-10 py-6 text-xl rounded-full transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span>Konsultasi</span>
                </a>
              </Button>
            </div>
            
            {/* Trust Stats - Horizontal */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-black">24/7</div>
                <div className="text-sm text-gray-700 font-medium">Siap Melayani</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">5000+</div>
                <div className="text-sm text-gray-700 font-medium">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">30min</div>
                <div className="text-sm text-gray-700 font-medium">Respon Cepat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">100%</div>
                <div className="text-sm text-gray-700 font-medium">Bergaransi</div>
              </div>
            </div>
          </div>
          
          {/* Right Image - Dynamic Layout like Gojek */}
          <div className="relative order-2 lg:order-2 mt-12 lg:mt-0 px-4 sm:px-0">
            <div className="relative max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
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
              
              {/* Floating service icons - like Gojek's floating products */}
              <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 z-30 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-[#2c599d] to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Truck className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-800 mt-1 sm:mt-2 text-center">Sedot WC</div>
              </div>
              
              <div className="absolute -top-2 sm:-top-4 -right-6 sm:-right-12 z-30 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-[#f98125] to-[#fb9b50] rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Zap className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-800 mt-1 sm:mt-2 text-center">Darurat</div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-8 -left-2 sm:-left-4 z-30 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-[#fb9b50] to-[#f98125] rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Users className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-800 mt-1 sm:mt-2 text-center">Tim Ahli</div>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-8 -right-4 sm:-right-8 z-30 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-[#5b84c4] to-[#2c599d] rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-800 mt-1 sm:mt-2 text-center">Garansi</div>
              </div>
              
              {/* Background decoration circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-2 sm:border-4 border-blue-500/20 rounded-full z-10 animate-spin-slow"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Action Buttons - Mobile & Desktop */}
        <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6281234567890?text=Halo, saya butuh jasa sedot WC Jakarta"
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
            href="tel:+6281234567890"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
