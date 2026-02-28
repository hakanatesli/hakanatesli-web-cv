"use client";

import { useEffect, useState } from "react";

interface SlideIndicatorProps {
  totalSlides: number;
  sectionIds: string[];
}

export default function SlideIndicator({
  totalSlides,
  sectionIds,
}: SlideIndicatorProps) {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const updateSlide = () => {
      const vpMid = window.innerHeight / 2;
      let active = 0;

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= vpMid) {
            active = i;
          }
        }
      }

      setCurrentSlide(active + 1);
    };

    window.addEventListener("scroll", updateSlide, { passive: true });
    updateSlide();

    return () => window.removeEventListener("scroll", updateSlide);
  }, [sectionIds]);

  return (
    <div className="fixed right-4 bottom-6 md:right-6 md:bottom-8 z-50 flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-widest text-muted-soft">
      <span className="text-foreground font-semibold">
        {String(currentSlide).padStart(2, "0")}
      </span>
      <span>/</span>
      <span>{String(totalSlides).padStart(2, "0")}</span>
    </div>
  );
}
