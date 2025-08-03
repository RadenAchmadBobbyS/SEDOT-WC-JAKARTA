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
    <div className="fixed inset-0 bg-orange-300 flex items-center justify-center z-[9999]" data-loading-screen>
      <div className="text-center space-y-8 px-6">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-2xl">
            <Truck className="h-10 w-10 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-black">SedotWC Jakarta</h1>
            <p className="text-gray-900 text-sm">Layanan Terpercaya 24 Jam</p>
          </div>
        </div>

        {/* Animated Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 animate-pulse">
            <CurrentIcon className={`h-12 w-12 ${steps[currentStep].color} animate-pulse`} />
          </div>

          {/* Ripple Effect */}
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-blue-400/70 animate-ping"></div>
          <div className="absolute inset-2 w-20 h-20 mx-auto rounded-full border-2 border-blue-400/60 animate-ping animation-delay-75"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <p className="text-xl font-semibold text-black animate-fade-in">{steps[currentStep].text}</p>

          {/* Progress Bar */}
          <div className="w-80 max-w-full mx-auto">
            <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-orange-300 animate-pulse rounded-full"></div>
              </div>
            </div>
            <p className="text-black text-sm mt-2 font-medium">{progress}%</p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
          <div className="text-center space-y-2 opacity-80">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-black font-medium">24 Jam</p>
          </div>
          <div className="text-center space-y-2 opacity-80">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-black font-medium">Bergaransi</p>
          </div>
          <div className="text-center space-y-2 opacity-80">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-black font-medium">Profesional</p>
          </div>
        </div>
      </div>
    </div>
  )
}
