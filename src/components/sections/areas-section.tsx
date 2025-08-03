"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { jakartaAreas } from "@/data/areas";
import { Phone } from "lucide-react";

export function AreasSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 1024; // lg breakpoint
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrentSlide(0);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // Calculate total slides based on screen size
  const getTotalSlides = () => {
    if (isMobile) {
      return jakartaAreas.length; // 1 card per slide on mobile/tablet
    } else {
      return Math.ceil(jakartaAreas.length / 2); // 2 cards per slide on desktop
    }
  };

  const totalSlides = getTotalSlides();

  // Navigation functions
  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);
  // Define colors for each area
  const getAreaColors = (index: number) => {
    const colors = [
      { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' },
      { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', button: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' },
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-black">
            Jasa Sedot WC Mandala - Area Layanan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-bold">
            <span className="font-black text-blue-600">Sedot WC Jakarta Terdekat</span> melayani seluruh wilayah DKI Jakarta dengan tim profesional dan peralatan lengkap. 
            Respon cepat ke semua kecamatan di Jakarta Selatan, Jakarta Barat, Jakarta Timur, Jakarta Utara, dan Jakarta Pusat!
          </p>
        </div>
        
        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 z-20 border border-gray-200"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 z-20 border border-gray-200"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700" />
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden px-2 lg:px-4 py-8">
            {/* Mobile/Tablet Layout - 1 card per slide */}
            <div className="lg:hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {jakartaAreas.map((area, index) => {
                  const colors = getAreaColors(index);
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div 
                        className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-md mx-auto`}
                      >
                        {/* Icon */}
                        <div className={`${colors.icon} mb-4`}>
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <span className="text-2xl">🏢</span>
                          </div>
                        </div>

                        {/* Area Name */}
                        <h3 className="text-xl font-black mb-2 text-gray-800">
                          {area.name}
                        </h3>
                        
                        {/* Response Time */}
                        <p className="text-sm text-gray-600 mb-3 font-semibold">
                          Respon: 30-45 menit
                        </p>

                        {/* Description */}
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                          {area.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <span>📍</span>
                            <span className="font-semibold">10 Kecamatan</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>🕐</span>
                            <span className="font-semibold">24/7 Available</span>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-between gap-3">
                          <a 
                            href={`tel:+6281234567890`}
                            className="bg-gray-800 hover:bg-gray-700 text-white font-black p-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                          >
                            <Phone className="h-4 w-4 text-blue-400" />
                          </a>
                          <a 
                            href={`/area/${area.slug}`}
                            className={`flex-1 bg-gradient-to-r ${colors.button} text-white font-black py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center text-sm`}
                          >
                            Lihat Detail Area
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop Layout - 2 cards per slide */}
            <div className="hidden lg:block">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(jakartaAreas.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 gap-8 px-8">
                      {jakartaAreas
                        .slice(slideIndex * 2, slideIndex * 2 + 2)
                        .map((area, index) => {
                          const colors = getAreaColors(slideIndex * 2 + index);
                          return (
                            <div 
                              key={`${slideIndex}-${index}`}
                              className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                            >
                              {/* Icon */}
                              <div className={`${colors.icon} mb-6`}>
                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                  <span className="text-3xl">🏢</span>
                                </div>
                              </div>

                              {/* Area Name */}
                              <h3 className="text-2xl font-black mb-3 text-gray-800">
                                {area.name}
                              </h3>
                              
                              {/* Response Time */}
                              <p className="text-base text-gray-600 mb-4 font-semibold">
                                Respon: 30-45 menit
                              </p>

                              {/* Description */}
                              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                                {area.description}
                              </p>

                              {/* Stats */}
                              <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <span>📍</span>
                                  <span className="font-semibold">10 Kecamatan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🕐</span>
                                  <span className="font-semibold">24/7 Available</span>
                                </div>
                              </div>

                              {/* Buttons */}
                              <div className="flex items-center justify-between gap-4">
                                <a 
                                  href={`tel:+6281234567890`}
                                  className="bg-gray-800 hover:bg-gray-700 text-white font-black p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                                >
                                  <Phone className="h-5 w-5 text-blue-400" />
                                </a>
                                <a 
                                  href={`/area/${area.slug}`}
                                  className={`flex-1 bg-gradient-to-r ${colors.button} text-white font-black py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center text-base`}
                                >
                                  Lihat Detail Area
                                </a>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
