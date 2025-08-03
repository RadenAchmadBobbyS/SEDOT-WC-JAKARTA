"use client"

import type React from "react"

import { useState, useEffect } from "react"
import LoadingScreen from "./loading-screen"

interface PageLoaderProps {
  children: React.ReactNode
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading

    // Also hide loading when page is fully loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return <>{children}</>
}
