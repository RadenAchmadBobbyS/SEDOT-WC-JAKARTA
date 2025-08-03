"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SmoothRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  threshold?: number;
  triggerOnce?: boolean;
}

export function SmoothReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
  threshold = 0.1,
  triggerOnce = true,
}: SmoothRevealProps) {
  const { isVisible, elementRef } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeInUp':
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8';
      case 'fadeInLeft':
        return isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-8';
      case 'fadeInRight':
        return isVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-8';
      case 'fadeIn':
        return isVisible ? 'animate-fadeIn' : 'opacity-0';
      case 'scaleIn':
        return isVisible ? 'animate-scaleIn' : 'opacity-0 scale-95';
      default:
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}
