import Image from "next/image";

import { photos } from "@/lib/site";

import { SectionHeading } from "./section-heading";

export function MediaGallery() {
  return (
    <section className="pattern py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          eyebrow="Recognition & Media"
          title="Honours, Interviews and Consultations"
          text="Moments from Akanksha Ji's journey — award recognition, podcast interviews and personal tarot and astrology sessions."
        />
        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <figure className="group relative overflow-hidden rounded-3xl border-4 border-ivory shadow-xl md:row-span-2">
            <div className="relative aspect-[2/3] md:h-full md:aspect-auto">
              <Image src={photos.award.src} alt={photos.award.alt} fill sizes="(min-width:768px) 460px, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-5 pt-16 text-ivory">
              <span className="text-xs tracking-[0.2em] text-gold-light uppercase">Award</span>
              <b className="mt-1 block font-heading text-lg">IEA Excellence Award</b>
            </figcaption>
          </figure>
          {[photos.podcast, photos.tarot].map((p, i) => (
            <figure key={p.src} className="group relative overflow-hidden rounded-3xl border-4 border-ivory shadow-xl">
              <div className="relative aspect-[3/2]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 700px, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-5 pt-16 text-ivory">
                <span className="text-xs tracking-[0.2em] text-gold-light uppercase">{i === 0 ? "Podcast" : "Consultation"}</span>
                <b className="mt-1 block font-heading text-lg">{i === 0 ? "In Conversation on Love & Astrology" : "Tarot & Astrology Reading"}</b>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
