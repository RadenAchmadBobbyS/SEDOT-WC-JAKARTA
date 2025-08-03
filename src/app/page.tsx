import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Static imports for critical components
import Navbar from "@/components/navbar";
import PageLoader from "@/components/page-loader";
import { HeroSection } from "@/components/sections/hero-section";

// Dynamic imports for non-critical sections with loading fallbacks
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96"></div>,
});

const AreasSection = dynamic(() => import("@/components/sections/areas-section").then(mod => ({ default: mod.AreasSection })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96"></div>,
});

const WhyChooseUsSection = dynamic(() => import("@/components/sections/why-choose-us-section").then(mod => ({ default: mod.WhyChooseUsSection })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96"></div>,
});

const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96"></div>,
});

const ContactForm = dynamic(() => import("@/components/contact-form"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96"></div>,
});

// Generate metadata for SEO (SSR)
export const metadata: Metadata = {
  title: 'Jasa Sedot WC Jakarta Terpercaya 24 Jam - Murah & Profesional',
  description: 'Jasa Sedot WC Jakarta terpercaya dengan layanan 24 jam, harga murah mulai Rp 100.000. Melayani seluruh DKI Jakarta dengan teknisi profesional dan bergaransi.',
  keywords: 'sedot wc jakarta, jasa sedot wc jakarta murah, sedot wc 24 jam jakarta, sedot wc jakarta selatan barat timur utara pusat',
  openGraph: {
    title: 'Jasa Sedot WC Jakarta Terpercaya 24 Jam',
    description: 'Layanan sedot WC Jakarta profesional dengan harga terjangkau. Respon cepat, teknisi berpengalaman, bergaransi.',
    type: 'website',
    locale: 'id_ID',
  },
  alternates: {
    canonical: '/',
  },
};

// SSR-optimized Homepage Component
export default function HomePage() {
  return (
    <PageLoader>
      <div className="min-h-screen">
        <Navbar />

        {/* Critical above-the-fold content - loaded immediately */}
        <HeroSection />

        {/* Non-critical sections - loaded with dynamic imports and suspense */}
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96"></div>}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96"></div>}>
          <AreasSection />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96"></div>}>
          <WhyChooseUsSection />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96"></div>}>
          <TestimonialsSection />
        </Suspense>

        {/* Contact Section */}
        <section className="py-8 sm:py-12 lg:py-24 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-300 contact-section">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3 lg:mb-4 mobile-text-wrap">
              Hubungi Kami Sekarang
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-2xl mx-auto mobile-text-wrap">
              Konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan sedot WC Anda
            </p>
          </div>
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-start">
            {/* Left Side - Contact Information */}
            <div className="order-2 lg:order-1 w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 border border-white/20 w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4 lg:mb-6 mobile-text-wrap">Informasi Kontak</h3>
                  
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    {/* Telepon/WhatsApp */}
                    <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg sm:text-xl lg:text-2xl">📞</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-black text-xs sm:text-sm lg:text-base leading-tight mobile-text-wrap">Telepon/WhatsApp</h4>
                        <p className="text-sm sm:text-base lg:text-lg font-bold text-black mobile-text-wrap">0812-1906-7233</p>
                        <p className="text-xs sm:text-sm text-gray-700 mobile-text-wrap">24 Jam Siaga</p>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg sm:text-xl lg:text-2xl">📧</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-black text-xs sm:text-sm lg:text-base leading-tight mobile-text-wrap">Email</h4>
                        <p className="text-sm sm:text-base lg:text-lg text-black mobile-text-wrap">info@sedotwcmandala.com</p>
                        <p className="text-xs sm:text-sm text-gray-700 mobile-text-wrap">Respon dalam 1 jam</p>
                      </div>
                    </div>
                    
                    {/* Jam Operasional */}
                    <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg sm:text-xl lg:text-2xl">🕒</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-black text-xs sm:text-sm lg:text-base leading-tight mobile-text-wrap">Jam Operasional</h4>
                        <p className="text-sm sm:text-base lg:text-lg text-black mobile-text-wrap">24 Jam</p>
                        <p className="text-xs sm:text-sm text-gray-700 mobile-text-wrap">Setiap hari termasuk hari libur</p>
                      </div>
                    </div>
                    
                    {/* Area Layanan */}
                    <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg sm:text-xl lg:text-2xl">📍</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-black text-xs sm:text-sm lg:text-base leading-tight mobile-text-wrap">Area Layanan</h4>
                        <p className="text-sm sm:text-base lg:text-lg text-black mobile-text-wrap">Seluruh Jakarta</p>
                        <p className="text-xs sm:text-sm text-gray-700 mobile-text-wrap">Jakarta Selatan, Barat, Timur, Utara, Pusat</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Keunggulan Kami */}
                  <div className="mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 lg:p-6 bg-white/10 rounded-lg sm:rounded-xl">
                    <h4 className="font-bold text-black mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base mobile-text-wrap">✨ Keunggulan Kami</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-800">
                      <li className="mobile-text-wrap">✅ Gratis konsultasi dan survei</li>
                      <li className="mobile-text-wrap">✅ Tim berpengalaman 9+ tahun</li>
                      <li className="mobile-text-wrap">✅ Peralatan modern & higienis</li>
                      <li className="mobile-text-wrap">✅ Harga transparan tanpa biaya tersembunyi</li>
                      <li className="mobile-text-wrap">✅ Garansi layanan</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            {/* Right Side - Contact Form */}
            <div className="order-1 lg:order-2 w-full">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
        </section>

        {/* Footer */}
        <footer className="bg-white text-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Jasa Sedot WC Jakarta</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Layanan sedot WC terpercaya dengan pengalaman 9+ tahun melayani masyarakat Jakarta.
              </p>
            </div>
            
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Area Layanan</h4>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>Jakarta Selatan</li>
                  <li>Jakarta Barat</li>
                  <li>Jakarta Timur</li>
                  <li>Jakarta Utara</li>
                  <li>Jakarta Pusat</li>
                </ul>
              </div>
              
              <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Kontak</h4>
                <div className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                  <p>📞 0812-1906-7233</p>
                  <p className="break-all">📧 info@sedotwcmandala.com</p>
                  <p>🕒 24 Jam Siaga</p>
                </div>
              </div>
            </div>
            
          <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-600">
            <p className="text-sm sm:text-base">&copy; 2024 Jasa Sedot WC Jakarta. All rights reserved.</p>
          </div>
        </div>
        </footer>
      </div>
    </PageLoader>
  );
}
