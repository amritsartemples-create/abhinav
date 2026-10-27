"use client";

import Image from "next/image";
import { useState } from "react";

import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

import { SectionHeading } from "./section-heading";

export function PodcastVideo() {
  const [playing, setPlaying] = useState(false);
  const id = site.youtubePodcastId;
  return (
    <section id="podcast" className="bg-cream py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          eyebrow="Watch the Podcast"
          title="Astrology Insights with Astrologer Akanksha Pande"
          text="Watch Akanksha Ji's podcast conversation on love, relationships, tarot and practical remedies."
        />
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-3xl border-4 border-ivory bg-navy-deep shadow-[0_24px_60px_-24px_rgb(20_36_79/0.7)]">
            {playing ? (
              <iframe
                className="absolute inset-0 size-full"
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
                title="Astrologer Akanksha Pande podcast"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0" aria-label="Play podcast video">
                <Image src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="Astrologer Akanksha Pande podcast thumbnail" fill sizes="(min-width:1024px) 900px, 100vw" className="object-cover" />
                <span className="absolute inset-0 bg-navy-deep/30 transition group-hover:bg-navy-deep/15" />
                <span className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ff0000] text-white shadow-xl ring-8 ring-white/25 transition group-hover:scale-110">
                  <Icon name="play" className="ml-1 size-9" />
                </span>
              </button>
            )}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={site.youtubePodcast} target="_blank" rel="noopener" className="btn btn-navy">
              <Icon name="youtube" className="size-4" />
              Watch on YouTube
            </a>
            <a href={site.instagram} target="_blank" rel="noopener" className="btn border border-navy/20 text-navy hover:border-gold hover:text-gold-dark">
              <Icon name="instagram" className="size-4" />
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
