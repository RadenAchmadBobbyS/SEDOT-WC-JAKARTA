"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesSection() {
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const totalServiceSlides = services.length;

  // Touch event handling for service slider
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe && currentServiceSlide < totalServiceSlides - 1) {
      setCurrentServiceSlide(currentServiceSlide + 1);
    } else if (isLeftSwipe && currentServiceSlide === totalServiceSlides - 1) {
      setCurrentServiceSlide(0);
    }

    if (isRightSwipe && currentServiceSlide > 0) {
      setCurrentServiceSlide(currentServiceSlide - 1);
    } else if (isRightSwipe && currentServiceSlide === 0) {
      setCurrentServiceSlide(totalServiceSlides - 1);
    }
  };

  return (
    <section className="py-24 bg-orange-300 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold tracking-tight mb-6 text-black leading-tight">
            <span className="block sm:inline">Jasa Sedot WC Mandala</span>
            <span className="block sm:inline"> Profesional & Terpercaya</span>
            <span className="block text-blue-700"> Melayani Seluruh DKI Jakarta</span>
          </h2>
          <p className="text-lg sm:text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold">Sedot WC Jakarta Murah</span> dengan layanan 24 jam, teknisi berpengalaman, peralatan modern, dan harga terjangkau. Melayani Jakarta Selatan, Jakarta Barat, Jakarta Timur, Jakarta Utara, dan Jakarta Pusat.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/kontak" className="flex items-center space-x-2">
              <span>Konsultasi Gratis Sedot WC</span>
              <span>→</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* FULL WIDTH CONTAINER */}
      <div className="bg-white/100 backdrop-blur-sm rounded-t-[3rem] rounded-b-[2rem] mx-0 px-6 lg:px-8 xl:px-12 py-16 shadow-2xl mb-0 border-b border-white/20">
        <div className="container mx-auto">
          {/* Awards Section */}
          <div className="mb-20">


            {/* Cards Container with Background */}
            <div className="overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-5 px-4 sm:px-6 lg:px-8">
                {/* Operational Area */}
                <Card className="bg-gradient-to-r from-[#f98125] to-orange-400 border-0 overflow-visible group hover:scale-105 transition-all duration-300 rounded-3xl relative h-72 sm:h-80 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4),0_4px_8px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.5),0_6px_12px_-3px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative h-full flex flex-col justify-end">
                    {/* 3D Isometric Platform */}
                    <div className="absolute -top-20 sm:-top-24 lg:-top-28 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 lg:w-64 h-40 sm:h-46 lg:h-52">
                      <div className="relative w-full h-full">
                        {/* Isometric base platform - LAYER 1 */}
                        <div className="absolute bottom-12 sm:bottom-14 lg:bottom-16 w-full h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 transform skew-y-12 rounded-xl lg:rounded-2xl shadow-[0_6px_12px_-2px_rgba(0,0,0,0.3)] border border-blue-300/30 lg:border-2"></div>
                        {/* Isometric base platform - LAYER 2 */}
                        <div className="absolute bottom-15 sm:bottom-17 lg:bottom-20 w-full h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 transform -skew-y-12 rounded-xl lg:rounded-2xl shadow-[0_6px_12px_-2px_rgba(0,0,0,0.3)] border border-pink-300/30 lg:border-2"></div>
                      </div>
                    </div>
                    
                    <div className="mt-auto py-4 sm:py-6 lg:py-13">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Area Operasional</h3>
                      <p className="text-gray-100 font-medium text-sm sm:text-base">Operasional di seluruh Jakarta dan sekitarnya</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Driver Partners */}
                <Card className="bg-gradient-to-r from-[#f98125] to-orange-400 border-0 overflow-visible group hover:scale-105 transition-all duration-300 rounded-3xl relative h-72 sm:h-80 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4),0_4px_8px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.5),0_6px_12px_-3px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative h-full flex flex-col justify-end">
                    {/* 3D Isometric Platform */}
                    <div className="absolute -top-20 sm:-top-24 lg:-top-28 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 lg:w-64 h-40 sm:h-46 lg:h-52">
                      <div className="relative w-full h-full">
                        {/* Isometric base platform - LAYER 1 */}
                        <div className="absolute bottom-12 sm:bottom-14 lg:bottom-16 w-full h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 transform skew-y-12 rounded-xl lg:rounded-2xl shadow-[0_6px_12px_-2px_rgba(0,0,0,0.3)] border border-orange-300/30 lg:border-2"></div>
                        {/* Isometric base platform - LAYER 2 */}
                        <div className="absolute bottom-15 sm:bottom-17 lg:bottom-20 w-full h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 transform -skew-y-12 rounded-xl lg:rounded-2xl shadow-[0_6px_12px_-2px_rgba(0,0,0,0.3)] border border-blue-300/30 lg:border-2"></div>
                      </div>
                    </div>
                    
                    <div className="mt-auto py-4 sm:py-6 lg:py-13">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">5,000+</h3>
                      <p className="text-gray-100 font-medium text-sm sm:text-base">Pelanggan yang telah dilayani</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Merchants */}
                <Card className="bg-gradient-to-r from-[#f98125] to-orange-400 border-0 overflow-visible group hover:scale-105 transition-all duration-300 rounded-3xl relative h-72 sm:h-80 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4),0_4px_8px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.5),0_6px_12px_-3px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative h-full flex flex-col justify-end">
                    {/* 3D Isometric Platform */}
                    <div className="absolute -top-20 sm:-top-24 lg:-top-28 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 lg:w-64 h-40 sm:h-46 lg:h-52">
                      <div className="relative w-full h-full">
                        {/* Isometric base platform - LAYER 1 */}
                        <div className="absolute bottom-12 sm:bottom-14 lg:bottom-16 w-full h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 transform skew-y-12 rounded-xl lg:rounded-2xl shadow-[0_6px_12px_-2px_rgba(0,0,0,0.3)] border border-green-300/30 lg:border-2"></div>
                        {/* Isometric base platform - LAYER 2 */}
                        <div className="absolute bottom-15 sm:bottom-17 lg:bottom-20 w-full h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 transform -skew-y-12 rounded-xl lg:rounded-2xl shadow-[0_6px_12px_-2px_rgba(0,0,0,0.3)] border border-blue-300/30 lg:border-2"></div>
                      </div>
                    </div>
                    
                    <div className="mt-auto py-4 sm:py-6 lg:py-13">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">9+ Tahun</h3>
                      <p className="text-gray-100 font-medium text-sm sm:text-base">Pengalaman melayani Jakarta</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Service Types - Enhanced SEO Optimized */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Layanan Sedot WC Mandala Profesional Terpercaya
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Jasa Sedot WC Jakarta terlengkap dengan layanan 24 jam, harga murah, teknisi profesional, dan jangkauan ke seluruh DKI Jakarta. 
                <span className="font-bold text-blue-600"> Rating 5.0 Bintang | 5000+ Pelanggan Puas | Garansi Kualitas</span>
              </p>
            </div>
            
            {/* Mobile: Single Card Slider */}
            <div className="block md:hidden">
              <div className="relative max-w-sm mx-auto">
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentServiceSlide(currentServiceSlide > 0 ? currentServiceSlide - 1 : services.length - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                <button
                  onClick={() => setCurrentServiceSlide(currentServiceSlide < services.length - 1 ? currentServiceSlide + 1 : 0)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>

                {/* Single Card Container */}
                <div 
                  className="overflow-hidden rounded-3xl"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="group bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-blue-300 hover:from-blue-50 hover:to-white transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.25)]">
                          <CardContent className="p-6 text-center relative overflow-hidden h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-[3rem] opacity-50"></div>
                            
                            <div className="relative z-10 flex-grow flex flex-col">
                              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
                                <service.icon className="h-10 w-10 text-white" />
                              </div>
                              
                              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                                {service.title}
                              </h4>
                              
                              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm flex-grow">
                                {service.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 space-x-3">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentServiceSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentServiceSlide === index 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg' 
                          : 'bg-gradient-to-r from-gray-400 to-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Swipe hint */}
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span>←</span> Geser untuk melihat layanan lain <span>→</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Slider Layout (3 cards per slide) */}
            <div className="hidden md:block">
              <div className="relative max-w-7xl mx-auto">
                {/* Navigation Arrows for Desktop */}
                <button
                  onClick={() => setCurrentServiceSlide(currentServiceSlide > 0 ? currentServiceSlide - 1 : Math.ceil(services.length / 3) - 1)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 shadow-xl rounded-full p-4 transition-all duration-300 hover:scale-110 z-20 border border-gray-200"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={() => setCurrentServiceSlide(currentServiceSlide < Math.ceil(services.length / 3) - 1 ? currentServiceSlide + 1 : 0)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 shadow-xl rounded-full p-4 transition-all duration-300 hover:scale-110 z-20 border border-gray-200"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>

                {/* Cards Container */}
                <div className="overflow-hidden px-4 py-8">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
                  >
                    {Array.from({ length: Math.ceil(services.length / 3) }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4">
                          {services
                            .slice(slideIndex * 3, slideIndex * 3 + 3)
                            .map((service, index) => (
                              <Card key={`${slideIndex}-${index}`} className="group bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-blue-300 hover:from-blue-50 hover:to-white transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.25)]">
                                <CardContent className="p-6 text-center relative overflow-hidden h-full flex flex-col">
                                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-[3rem] opacity-50"></div>
                                  
                                  <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
                                      <service.icon className="h-10 w-10 text-white" />
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                                      {service.title}
                                    </h4>
                                    
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm flex-grow">
                                      {service.description}
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Slide Indicators */}
                <div className="flex justify-center mt-8 space-x-3">
                  {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentServiceSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentServiceSlide === index 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
