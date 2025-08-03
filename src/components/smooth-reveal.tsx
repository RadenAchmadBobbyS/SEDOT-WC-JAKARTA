"use client";

import { useEffect, useRef, useState } from "react";

interface SmoothRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "slideInUp";
  threshold?: number;
  fallbackVisible?: boolean;
}

export function SmoothReveal({ 
  children, 
  className = "", 
  delay = 0, 
  animation = "fadeInUp",
  threshold = 0.1,
  fallbackVisible = false
}: SmoothRevealProps) {
  const [isVisible, setIsVisible] = useState(fallbackVisible);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback for unsupported browsers or slow devices
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          observerRef.current?.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    observerRef.current.observe(element);

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, threshold, hasIntersected]);

  const getAnimationClass = () => {
    if (!isVisible) {
      // Provide immediate fallback to prevent white screen
      return 'opacity-0 translate-y-4';
    }

    switch (animation) {
      case "fadeInUp":
        return "animate-fade-in-up opacity-100 translate-y-0";
      case "fadeInLeft":
        return "animate-fade-in-left opacity-100 translate-x-0";
      case "fadeInRight":
        return "animate-fade-in-right opacity-100 translate-x-0";
      case "zoomIn":
        return "zoom-in opacity-100 scale-100";
      case "slideInUp":
        return "slide-in-up opacity-100 translate-y-0";
      default:
        return "animate-fade-in-up opacity-100 translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out will-change-transform ${getAnimationClass()} ${className}`}
      style={{
        // Ensure minimum visibility to prevent white screen
        minHeight: isVisible ? 'auto' : '1px',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    >
      {children}
    </div>
  );
}
