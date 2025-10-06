'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function LogoPulse() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if page was accessed via reload
    const pageAccessedByReload = (
      (window.performance as any).navigation?.type === 1 ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => (nav as PerformanceNavigationTiming).type)
        .includes('reload')
    );

    if (!pageAccessedByReload) return;

    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.inOut',
      }
    });

    // Quick fade in
    tl.fromTo(containerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.15 }
    );

    // Quick pulse using opacity
    tl.to(containerRef.current, {
      opacity: 0.6,
      duration: 0.1
    }).to(containerRef.current, {
      opacity: 1,
      duration: 0.1
    });

    // Fade out
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.15
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
      style={{ opacity: 0 }}
    >
      <img 
        src="/logo.webp" 
        alt="HoneyBadger Charging" 
        className="w-32 h-32 object-contain"
      />
    </div>
  );
}