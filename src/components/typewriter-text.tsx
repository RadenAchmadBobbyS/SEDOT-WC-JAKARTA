"use client"

import { useState, useEffect } from "react"

const texts = [
  "Profesional 24 Jam",
  "Terpercaya & Bergaransi",
  "Harga Terjangkau",
  "Teknisi Berpengalaman",
  "Respon Cepat",
  "Layanan Premium",
]

export default function TypewriterText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typeSpeed, setTypeSpeed] = useState(40) // Dipercepat lagi untuk lebih responsif

  useEffect(() => {
    const handleType = () => {
      const fullText = texts[currentTextIndex]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypeSpeed(20) // Lebih cepat saat menghapus
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypeSpeed(40) // Lebih cepat saat mengetik
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 800) // Pause lebih singkat
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    const timer = setTimeout(handleType, typeSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, typeSpeed])

  return (
    <div className="h-12 md:h-16 flex items-center">
      <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-black whitespace-nowrap">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
}
