import Image from "next/image";

import { Icon } from "@/components/icons";
import { photos, whyChoose } from "@/lib/site";

import { SectionHeading } from "./section-heading";

export function WhyChoose() {
  return (
    <section className="starfield py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title="Guidance Built on Trust, Privacy and Personal Attention"
          text="Every consultation is handled with care, privacy and a clear understanding of your personal concerns."
        />
        <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr]">
          <div className="text-center">
            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full border-4 border-gold/70 p-1 shadow-[0_0_60px_-10px_rgb(201_151_58/0.6)] sm:w-72">
              <div className="relative size-full overflow-hidden rounded-full">
                <Image src={photos.tarot.src} alt={photos.tarot.alt} fill sizes="300px" className="object-cover object-[55%_center]" />
              </div>
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold text-gold-light">Astrologer Akanksha Pande</h3>
            <p className="text-sm text-ivory/70">Trusted Guidance for a Better Tomorrow</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/50 hover:bg-white/10">
                <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-navy-deep">
                  <Icon name={w.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-ivory">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
