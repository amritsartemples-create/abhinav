"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./section-heading";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const perView = Math.max(1, Math.round(el.clientWidth / card.offsetWidth));
      setPages(Math.ceil(testimonials.length / perView));
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };
    measure();
    let t: number | undefined;
    const onScroll = () => {
      window.clearTimeout(t);
      t = window.setTimeout(measure, 80);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const goTo = (p: number) => {
    const el = track.current;
    if (!el) return;
    const next = ((p % pages) + pages) % pages;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => goTo(page + 1), 6000);
    return () => window.clearTimeout(t);
  });

  return (
    <section className="pattern py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          text="Experiences from people who found clarity, direction and confidence through personalised astrological guidance."
        />
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
          <div ref={track} className="-mx-3 flex snap-x snap-mandatory overflow-x-auto pb-2 [scrollbar-width:none]">
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 snap-start px-3 md:w-1/2 lg:w-1/3">
                <TestimonialCard t={t} className="h-full" />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button type="button" onClick={() => goTo(page - 1)} aria-label="Previous reviews" className="grid size-10 place-items-center rounded-full border border-navy/20 text-xl text-navy hover:border-gold hover:text-gold-dark">‹</button>
            <div className="flex gap-2">
              {Array.from({ length: pages }, (_, i) => (
                <button key={i} type="button" onClick={() => goTo(i)} aria-label={`Reviews page ${i + 1}`} aria-current={i === page} className={cn("h-2.5 rounded-full transition-all", i === page ? "w-7 bg-gold" : "w-2.5 bg-navy/20")} />
              ))}
            </div>
            <button type="button" onClick={() => goTo(page + 1)} aria-label="Next reviews" className="grid size-10 place-items-center rounded-full border border-navy/20 text-xl text-navy hover:border-gold hover:text-gold-dark">›</button>
          </div>
          <div className="mt-8 text-center">
            <Link href="/review/" className="btn btn-navy">Read All Reviews →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
