import Image from "next/image";

import { guidanceCards } from "@/lib/site";

import { ConsultButtons } from "./consult-buttons";
import { SectionHeading } from "./section-heading";

export function GuidanceGrid() {
  return (
    <section className="pattern py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          eyebrow="Global Lady Astrologer"
          title="Find the Right Guidance for Your Situation"
          text="Explore focused astrological guidance for love, family, relationships and personal concerns through a private consultation."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guidanceCards.map((c) => (
            <article key={c.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-ivory shadow-[0_10px_30px_-18px_rgb(20_36_79/0.45)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(20_36_79/0.55)]">
              <div className="relative aspect-[7/6] overflow-hidden">
                <Image src={c.image} alt={c.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <ConsultButtons topic={c.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
