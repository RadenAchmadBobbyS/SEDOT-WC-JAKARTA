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
    // Simulate loading time - minimum 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Also hide loading when page is fully loaded, but wait at least 2.5 seconds
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2500)
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
