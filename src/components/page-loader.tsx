"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import LoadingScreen from "./loading-screen"

interface PageLoaderProps {
  children: React.ReactNode
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasTimedOut, setHasTimedOut] = useState(false)

  const hideLoader = useCallback(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // For development: Faster loading (500ms), for production use longer time
    const loadingTime = process.env.NODE_ENV === 'development' ? 500 : 1500;
    
    // Maximum loading time to prevent infinite loading (safety timeout)
    const maxLoadingTime = process.env.NODE_ENV === 'development' ? 2000 : 5000;
    
    const timer = setTimeout(() => {
      hideLoader()
    }, loadingTime)

    // Safety timeout to prevent white screen
    const safetyTimeout = setTimeout(() => {
      setHasTimedOut(true)
      hideLoader()
    }, maxLoadingTime)

    // Also hide loading when page is fully loaded
    const handleLoad = () => {
      const minWait = process.env.NODE_ENV === 'development' ? 300 : 1000;
      setTimeout(hideLoader, minWait)
    }

    // Handle visibility change to prevent issues when tab is not visible
    const handleVisibilityChange = () => {
      if (!document.hidden && document.readyState === 'complete') {
        setTimeout(hideLoader, 100)
      }
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      document.addEventListener("visibilitychange", handleVisibilityChange)
    }

    return () => {
      clearTimeout(timer)
      clearTimeout(safetyTimeout)
      window.removeEventListener("load", handleLoad)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [hideLoader])

  // Show content immediately if loading takes too long (fallback)
  if (hasTimedOut || !isLoading) {
    return <>{children}</>
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return <>{children}</>
}
