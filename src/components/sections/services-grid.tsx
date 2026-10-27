import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icons";
import { services } from "@/lib/site";

import { ConsultButtons } from "./consult-buttons";
import { SectionHeading } from "./section-heading";

export function ServicesGrid({ limit, showAllLink = false }: { limit?: number; showAllLink?: boolean }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="bg-ivory py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          eyebrow="Our Best Services"
          title="Personalized Guidance for Love, Relationships and Family Life"
          text="Every consultation is private, carefully understood and supported with clear guidance and suitable remedies."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s) => (
            <article key={s.image} className="group flex flex-col rounded-2xl border border-border bg-cream/60 p-3 transition hover:border-gold/60 hover:bg-ivory hover:shadow-[0_18px_40px_-20px_rgb(20_36_79/0.5)]">
              <div className="relative">
                <div className="relative aspect-[7/6] overflow-hidden rounded-xl">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <span className="absolute -bottom-5 left-4 grid size-11 place-items-center rounded-full border-4 border-ivory bg-navy text-gold-light">
                  <Icon name={s.icon} className="size-4" />
                </span>
              </div>
              <div className="flex flex-1 flex-col px-2 pt-8 pb-2">
                <h3 className="font-heading text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ConsultButtons topic={s.title} />
              </div>
            </article>
          ))}
        </div>
        {showAllLink && (
          <div className="mt-10 text-center">
            <Link href="/services/" className="btn btn-gold">View All Services →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
