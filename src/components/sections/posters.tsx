import Image from "next/image";

import { Icon } from "@/components/icons";
import { posters, site, whatsappLink } from "@/lib/site";

import { SectionHeading } from "./section-heading";

export function Posters() {
  return (
    <section className="starfield py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          dark
          eyebrow="Star Shuffle Specials"
          title="Special Solutions by Astrologer Akanksha Pande"
          text="Focused, confidential guidance for the problems people bring to us most often."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posters.map((p) => (
            <article key={p.src} className="group overflow-hidden rounded-2xl border border-gold/30 bg-white/5 p-3 backdrop-blur">
              <a href={site.phoneHref} className="relative block aspect-[5/6] overflow-hidden rounded-xl">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </a>
              <div className="flex items-center justify-between gap-3 px-1 pt-4 pb-1">
                <h3 className="font-heading text-base font-semibold text-ivory">{p.title}</h3>
                <a href={whatsappLink(p.title)} target="_blank" rel="noopener" className="btn btn-wa btn-sm shrink-0" aria-label={`WhatsApp for ${p.title}`}>
                  <Icon name="wa" className="size-3.5" />
                  Ask Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
