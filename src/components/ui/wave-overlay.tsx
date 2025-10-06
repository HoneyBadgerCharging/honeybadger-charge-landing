'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function WaveOverlay() {
  const svgRef = useRef<SVGSVGElement>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    if (!svgRef.current) return;

    // Check if page was accessed via reload
    const pageAccessedByReload = (
      (window.performance as any).navigation?.type === 1 ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => (nav as PerformanceNavigationTiming).type)
        .includes('reload')
    );

    if (!pageAccessedByReload) return;

    const overlay = svgRef.current;
    const paths = overlay.querySelectorAll(".wave-overlay__path");
    const numPoints = 10;
    const numPaths = paths.length;
    const delayPointsMax = 0.15;
    const delayPerPath = 0.12;
    const pointsDelay: number[] = [];
    let isOpened = false;

    const tl = gsap.timeline({
      onUpdate: render,
      defaults: {
        ease: "power2.inOut",
        duration: 0.5,
      },
    });

    const allPoints: number[][] = [];
    for (let i = 0; i < numPaths; i++) {
      let points: number[] = [];
      allPoints.push(points);
      for (let j = 0; j < numPoints; j++) {
        points.push(100);
      }
    }

    function toggle() {
      if (isActiveRef.current) return;
      isActiveRef.current = true;

      tl.progress(0).clear();
      for (let i = 0; i < numPoints; i++) {
        pointsDelay[i] = Math.random() * delayPointsMax;
      }

      for (let i = 0; i < numPaths; i++) {
        let points = allPoints[i];
        let pathDelay = delayPerPath * (isOpened ? i : numPaths - i - 1);

        for (let j = 0; j < numPoints; j++) {
          let delay = pointsDelay[j];
          tl.to(
            points,
            {
              [j]: 0,
            },
            delay + pathDelay
          );
        }
      }

      tl.then(() => {
        isActiveRef.current = false;
        isOpened = !isOpened;
      });
    }

    function render() {
      for (let i = 0; i < numPaths; i++) {
        let path = paths[i];
        let points = allPoints[i];

        let d = "";
        d += isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

        for (let j = 0; j < numPoints - 1; j++) {
          let p = ((j + 1) / (numPoints - 1)) * 100;
          let cp = p - ((1 / (numPoints - 1)) * 100) / 2;
          d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
        }

        d += isOpened ? ` V 100 H 0` : ` V 0 H 0`;
        path.setAttribute("d", d);
      }
    }

    // Initial animation (only on reload)
    setTimeout(toggle, 500);

    // Click to toggle
    overlay.addEventListener("click", toggle);

    return () => {
      overlay.removeEventListener("click", toggle);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="wave-overlay"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Primary green gradient */}
        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(122, 39%, 49%)" />
          <stop offset="100%" stopColor="hsl(122, 39%, 65%)" />
        </linearGradient>
        {/* Lighter green gradient */}
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(122, 39%, 65%)" />
          <stop offset="100%" stopColor="hsl(122, 20%, 92%)" />
        </linearGradient>
        {/* Energy flow gradient */}
        <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(122, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(122, 100%, 80%)" />
        </linearGradient>
      </defs>
      <path className="wave-overlay__path" fill="url(#waveGradient1)" />
      <path className="wave-overlay__path" fill="url(#waveGradient2)" />
      <path className="wave-overlay__path" fill="url(#waveGradient3)" />
      <style>{`
        .wave-overlay {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          cursor: pointer;
          z-index: 9999;
          pointer-events: none;
        }
      `}</style>
    </svg>
  );
}