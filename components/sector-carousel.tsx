"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { SectorCard } from "@/components/sector-card";
import type { Sector } from "@/lib/site";

export function SectorCarousel({ sectors }: { sectors: Sector[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % sectors.length);
  }, [sectors.length]);

  const prev = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + sectors.length) % sectors.length);
  }, [sectors.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + sectors.length) % sectors.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right-1";
    if (diff === 2) return "right-2";
    if (diff === sectors.length - 2) return "left-2";
    if (diff === sectors.length - 1) return "left-1";
    return "hidden";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="sector-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-live={isPaused ? "polite" : "off"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Sectors carousel"
    >
      <button className="carousel-btn prev" onClick={prev} aria-label="Previous sector">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <button className="carousel-btn next" onClick={next} aria-label="Next sector">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      <div className="carousel-track">
        {sectors.map((sector, idx) => (
          <div
            key={sector.slug}
            className={`carousel-slide pos-${getPosition(idx)}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Sector ${idx + 1} of ${sectors.length}`}
            aria-hidden={idx !== currentIndex}
            {...(idx !== currentIndex ? { inert: true } : {})}
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
