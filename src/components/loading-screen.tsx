"use client"

import { useState, useEffect } from "react"
import { Truck, Droplets, CheckCircle } from "lucide-react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { icon: Truck, text: "Memuat layanan sedot WC...", color: "text-blue-500" },
    { icon: Droplets, text: "Menyiapkan teknisi profesional...", color: "text-blue-400" },
    { icon: CheckCircle, text: "Siap melayani 24 jam!", color: "text-blue-300" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress < 40) setCurrentStep(0)
    else if (progress < 80) setCurrentStep(1)
    else setCurrentStep(2)
  }, [progress])

  const CurrentIcon = steps[currentStep].icon

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center z-[9999] animate-optimized" data-loading-screen>
      <div className="text-center space-y-8 px-6">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in-up">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-2xl animate-gentle-float">
            <Truck className="h-10 w-10 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-800 animate-fade-in-up animation-delay-150">SedotWC Jakarta</h1>
            <p className="text-gray-600 text-sm animate-fade-in-up animation-delay-200">Layanan Terpercaya 24 Jam</p>
          </div>
        </div>

        {/* Animated Icon */}
        <div className="relative animate-fade-in-up animation-delay-300">
          <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 animate-smooth-pulse shadow-lg">
            <CurrentIcon className={`h-12 w-12 ${steps[currentStep].color} transition-all duration-500`} />
          </div>

          {/* Enhanced Ripple Effect */}
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-blue-400/50 animate-ping"></div>
          <div className="absolute inset-2 w-20 h-20 mx-auto rounded-full border-2 border-blue-400/40 animate-ping animation-delay-75"></div>
          <div className="absolute inset-4 w-16 h-16 mx-auto rounded-full border-2 border-blue-400/30 animate-ping animation-delay-150"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4 animate-fade-in-up animation-delay-400">
          <p className="text-xl font-semibold text-gray-800 transition-all duration-500">{steps[currentStep].text}</p>

          {/* Enhanced Progress Bar */}
          <div className="w-80 max-w-full mx-auto">
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 to-orange-500 h-full rounded-full transition-all duration-500 ease-out relative animate-glow-pulse"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-shimmer rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2 font-medium transition-all duration-300">{progress}%</p>
          </div>
        </div>

        {/* Enhanced Features Preview */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto animate-fade-in-up animation-delay-500">
          <div className="text-center space-y-2 transition-all duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto shadow-lg animate-gentle-float">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-gray-700 font-medium">24 Jam</p>
          </div>
          <div className="text-center space-y-2 transition-all duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto shadow-lg animate-gentle-float animation-delay-200">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-gray-700 font-medium">Bergaransi</p>
          </div>
          <div className="text-center space-y-2 transition-all duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto shadow-lg animate-gentle-float animation-delay-400">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-gray-700 font-medium">Profesional</p>
          </div>
        </div>
      </div>
    </div>
  )
}
