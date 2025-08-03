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
        <section className="py-24 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-300">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Hubungi Kami Sekarang
              </h2>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                Konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan sedot WC Anda
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-black mb-6">Informasi Kontak</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Telepon/WhatsApp</h4>
                        <p className="text-lg font-bold text-black">0812-1906-7233</p>
                        <p className="text-sm text-gray-700">24 Jam Siaga</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Email</h4>
                        <p className="text-lg text-black">info@sedotwcjakarta.com</p>
                        <p className="text-sm text-gray-700">Respon dalam 1 jam</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Jam Operasional</h4>
                        <p className="text-lg text-black">24 Jam</p>
                        <p className="text-sm text-gray-700">Setiap hari termasuk hari libur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Area Layanan</h4>
                        <p className="text-lg text-black">Seluruh Jakarta</p>
                        <p className="text-sm text-gray-700">Jakarta Selatan, Barat, Timur, Utara, Pusat</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-white/10 rounded-xl">
                    <h4 className="font-bold text-black mb-3">✨ Keunggulan Kami</h4>
                    <ul className="space-y-2 text-sm text-gray-800">
                      <li>✅ Gratis konsultasi dan survei</li>
                      <li>✅ Tim berpengalaman 9+ tahun</li>
                      <li>✅ Peralatan modern & higienis</li>
                      <li>✅ Harga transparan tanpa biaya tersembunyi</li>
                      <li>✅ Garansi layanan</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Contact Form */}
              <div>
                <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white text-black py-12">
          <div className="container mx-auto px-6 lg:px-8 xl:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Jasa Sedot WC Jakarta</h3>
                <p className="text-gray-600 mb-4">
                  Layanan sedot WC terpercaya dengan pengalaman 9+ tahun melayani masyarakat Jakarta.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Area Layanan</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Jakarta Selatan</li>
                  <li>Jakarta Barat</li>
                  <li>Jakarta Timur</li>
                  <li>Jakarta Utara</li>
                  <li>Jakarta Pusat</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Kontak</h4>
                <div className="space-y-2 text-gray-600">
                  <p>📞 081219067233</p>
                  <p>📧 info@sedotwcjakarta.com</p>
                  <p>🕒 24 Jam Siaga</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2024 Jasa Sedot WC Jakarta. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageLoader>
  );
}
