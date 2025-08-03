"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  fallbackVisible?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '50px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
    fallbackVisible = false
  } = options;

  const [isVisible, setIsVisible] = useState(fallbackVisible);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback for cases where IntersectionObserver might fail
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    cleanup();

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
          
          if (triggerOnce) {
            observerRef.current?.unobserve(entry.target);
          }
        } else if (!triggerOnce && hasIntersected) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observerRef.current.observe(element);

    return cleanup;
  }, [threshold, rootMargin, triggerOnce, delay, hasIntersected, cleanup]);

  return { ref, isVisible };
}

export function useStaggeredAnimation(count: number, baseDelay: number = 0, staggerDelay: number = 100) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback for unsupported browsers
    if (!window.IntersectionObserver) {
      setVisibleItems(new Array(count).fill(true));
      return;
    }

    // Cleanup previous observer and timeouts
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          
          // Stagger the animations with proper cleanup
          for (let i = 0; i < count; i++) {
            const timeout = setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, baseDelay + (i * staggerDelay));
            
            timeoutsRef.current.push(timeout);
          }
          
          observerRef.current?.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [count, baseDelay, staggerDelay, hasTriggered]);

  return { ref, visibleItems };
}
