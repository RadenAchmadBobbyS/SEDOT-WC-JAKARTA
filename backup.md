            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Penghargaan & Sertifikasi
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kepercayaan dan pengakuan dari berbagai institusi untuk pelayanan terbaik kami
              </p>
            </div>

            {/* Awards Section - Static for Desktop, Slider for Mobile */}
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Arrows for Awards - Only visible on mobile */}
              <button
                onClick={() => setCurrentAwardSlide(currentAwardSlide > 0 ? currentAwardSlide - 1 : totalAwardSlides - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10 md:hidden"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={() => setCurrentAwardSlide(currentAwardSlide < totalAwardSlides - 1 ? currentAwardSlide + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10 md:hidden"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>

              {/* Desktop - Static Layout (No Slider) */}
              <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                  <div className="group text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#f98125] to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-3">
                      Partner Terpercaya Sanitasi
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                                                    Penghargaan &ldquo;Best Sanitation Service Provider Jakarta 2024&rdquo; dari Dinas Kebersihan DKI
                    </div>
                  </div>
                  <div className="group text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#f98125] to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-3">
                      Sertifikat Eco-Friendly
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                                                    Sertifikat &ldquo;Eco-Friendly Waste Management&rdquo; dari Kementerian Lingkungan Hidup
                    </div>
                  </div>
                  <div className="group text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#f98125] to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-3">
                      Jakarta Bersih 2024
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      Telah melayani 5,000+ rumah tangga dengan tingkat kepuasan 99%
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile - Slider Layout */}
              <div className="md:hidden">
                <div className="overflow-hidden rounded-3xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentAwardSlide * 100}%)` }}
                  >
                    {/* Slide 1: Award 1 */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 gap-6 px-4">
                        <div className="group text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#f98125] to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Shield className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-lg font-bold text-gray-900 mb-3">
                            Partner Terpercaya Sanitasi
                          </div>
                          <div className="text-sm text-gray-600 leading-relaxed">
                            Penghargaan &ldquo;Best Sanitation Service Provider Jakarta 2024&rdquo; dari Dinas Kebersihan DKI
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: Award 2 (for mobile) */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 gap-6 px-4">
                        <div className="group text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#f98125] to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-lg font-bold text-gray-900 mb-3">
                            Sertifikat Eco-Friendly
                          </div>
                          <div className="text-sm text-gray-600 leading-relaxed">
                            Sertifikat &ldquo;Eco-Friendly Waste Management&rdquo; dari Kementerian Lingkungan Hidup
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 3: Award 3 (for mobile) */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 gap-6 px-4">
                        <div className="group text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#f98125] to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-lg font-bold text-gray-900 mb-3">
                            Jakarta Bersih 2024
                          </div>
                          <div className="text-sm text-gray-600 leading-relaxed">
                            Telah melayani 5,000+ rumah tangga dengan tingkat kepuasan 99%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Indicators for Awards - Only visible on mobile */}
                <div className="flex justify-center mt-8 space-x-3">
                  {Array.from({ length: totalAwardSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAwardSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentAwardSlide === index
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg'
                          : 'bg-gradient-to-r from-gray-400 to-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Services Cards */}
          <div className="mb-16">
            <h3 className="text-4xl font-extrabold tracking-tight text-center mb-4 text-black">Layanan Kami</h3>
            <div className="text-center mb-30">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white tracking-wide font-semibold p-5 rounded-full"
                asChild
              >
                <a href="tel:+6281234567890">Hubungi Kami</a>
              </Button>
            </div>
