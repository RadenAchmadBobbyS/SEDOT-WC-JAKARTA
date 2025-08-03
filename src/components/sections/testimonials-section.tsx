"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrentSlide(0);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // Calculate total slides dynamically based on screen size
  const getTotalTestimonialSlides = () => {
    if (isMobile) {
      return testimonials.length; // Mobile: 1 testimoni per slide
    } else {
      return Math.ceil(testimonials.length / 3); // Desktop: 3 testimoni per slide
    }
  };

  // Auto-slide functionality for testimonials
  useEffect(() => {
    const getTotalSlides = () => {
      if (isMobile) {
        return testimonials.length;
      } else {
        return Math.ceil(testimonials.length / 3);
      }
    };

    const interval = setInterval(() => {
      const maxSlide = getTotalSlides() - 1;
      setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 text-black">
            <span className="block sm:inline">Testimoni Pelanggan</span>
            <span className="block text-blue-500">Jasa Sedot WC Jakarta</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            <span className="font-bold text-blue-600">Ulasan Sedot WC Jakarta</span> dari pelanggan setia kami. 
            Kepuasan pelanggan adalah prioritas utama dengan rating 5.0 bintang!
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Add padding to prevent shadow clipping */}
          <div className="px-4 py-8 overflow-hidden">
            {/* Mobile Layout - 1 testimonial per slide */}
            <div className="md:hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      {/* Header with avatar and rating */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center flex-1 min-w-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="font-bold text-blue-600">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-gray-900 text-sm truncate">{testimonial.name}</h4>
                            <p className="text-xs text-gray-600 truncate">{testimonial.location}</p>
                          </div>
                        </div>
                        <div className="flex ml-3 flex-shrink-0">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`w-3 h-3 ${
                                starIndex < testimonial.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-gray-700 leading-relaxed text-sm">
                        &ldquo;{testimonial.comment}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - 3 testimonials per slide */}
            <div className="hidden md:block">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4">
                      {testimonials
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((testimonial, index) => (
                          <div key={`${slideIndex}-${index}`} className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span className="font-bold text-blue-600">{testimonial.name.charAt(0)}</span>
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-600">{testimonial.location}</p>
                              </div>
                            </div>
                            <div className="flex mb-3">
                              {Array.from({ length: 5 }).map((_, starIndex) => (
                                <Star
                                  key={starIndex}
                                  className={`w-4 h-4 ${
                                    starIndex < testimonial.rating 
                                      ? 'text-yellow-400 fill-current' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <blockquote className="text-gray-700 leading-relaxed">
                              &ldquo;{testimonial.comment}&rdquo;
                            </blockquote>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: getTotalTestimonialSlides() }).map((_, index) => (
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
