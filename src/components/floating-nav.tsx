"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, X } from "lucide-react";
import { jakartaAreas } from "@/data/areas";
import { usePathname } from "next/navigation";

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset state when pathname changes
    setIsVisible(false);
    setIsOpen(false); // Close dropdown when navigating
    
    // Simple timer to show floating nav after page load - sync with FloatingActionButtons
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Don't show if not visible yet
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-33 right-4 z-[60] sm:bottom-32 sm:right-4 animate-fade-in-up" data-floating-element="nav">
      {/* Floating Navigation Button */}
      <button
        onClick={toggleDropdown}
        className="w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 btn-smooth animate-gentle-float animate-optimized"
      >
        <MapPin className="h-5 w-5 text-white" />
      </button>

      {/* Area Dropdown */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 py-4 animate-in slide-in-from-bottom-2 duration-200 animate-fade-in-up"
             style={{ animationDelay: '0ms' }}>
          {/* Close Button - Inside menu at top right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gray-100 hover:bg-red-100 transition-colors duration-200 flex items-center justify-center group btn-smooth"
          >
            <X className="h-4 w-4 text-gray-600 group-hover:text-red-600" />
          </button>

          <div className="px-4 pb-3 border-b border-gray-100 pr-12">
            <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-500" />
              Area Layanan Jakarta
            </h3>
            <p className="text-xs text-gray-600 mt-1">Pilih area sesuai lokasi Anda</p>
          </div>
          <div className="py-2 max-h-64 overflow-y-auto">
            {jakartaAreas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/area/${area.slug}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors group btn-smooth animate-optimized"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110 animate-optimized ${
                  index % 2 === 0 ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-200' : 'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
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
                <div className="text-green-500 text-xs font-semibold transition-all duration-300 group-hover:text-green-600 group-hover:scale-110 animate-optimized">
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
      )}
    </div>
  );
}
