"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { heroSlides, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERVAL = 5000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured services"
      className="relative overflow-hidden bg-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <h1 className="sr-only">{site.name} – {site.tagline} for Love Marriage, Love Problem and Family Problem Solution</h1>
      <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {heroSlides.map((s, i) => (
          <a
            key={s.src}
            href={site.phoneHref}
            className="relative block aspect-[16/7] w-full shrink-0"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${count}`}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
          >
            <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-navy/70 text-xl text-ivory backdrop-blur transition hover:bg-navy sm:left-4 sm:size-12 sm:text-2xl"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-navy/70 text-xl text-ivory backdrop-blur transition hover:bg-navy sm:right-4 sm:size-12 sm:text-2xl"
      >
        ›
      </button>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-4">
        {heroSlides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={cn("h-2.5 rounded-full transition-all", i === index ? "w-8 bg-gold" : "w-2.5 bg-ivory/80 hover:bg-ivory")}
          />
        ))}
      </div>
    </section>
  );
}
