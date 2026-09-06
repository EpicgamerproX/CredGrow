"use client";

import { useState, useEffect, useCallback } from "react";
import { SectorCard } from "@/components/sector-card";
import type { Sector } from "@/lib/site";

export function SectorCarousel({ sectors }: { sectors: Sector[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % sectors.length);
  }, [sectors.length]);

  const prev = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + sectors.length) % sectors.length);
  }, [sectors.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000); // Shift every 6 seconds
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + sectors.length) % sectors.length;
    // Map diff: 0 = center, 1 = right-1, 2 = right-2, 3 = left-2, 4 = left-1
    if (diff === 0) return "center";
    if (diff === 1) return "right-1";
    if (diff === 2) return "right-2";
    if (diff === sectors.length - 2) return "left-2";
    if (diff === sectors.length - 1) return "left-1";
    return "hidden";
  };

  return (
    <div 
      className="sector-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="carousel-btn prev" onClick={prev} aria-label="Previous sector">
        ←
      </button>
      <button className="carousel-btn next" onClick={next} aria-label="Next sector">
        →
      </button>

      <div className="carousel-track">
        {sectors.map((sector, idx) => (
          <div
            key={sector.slug}
            className={`carousel-slide pos-${getPosition(idx)}`}
            onClick={() => {
              if (idx !== currentIndex) {
                setCurrentIndex(idx);
              }
            }}
          >
            <SectorCard sector={sector} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots">
          {sectors.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to sector ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
