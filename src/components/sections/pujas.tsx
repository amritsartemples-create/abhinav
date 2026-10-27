import { Icon } from "@/components/icons";
import { pujas, site } from "@/lib/site";

import { SectionHeading } from "./section-heading";

export function Pujas() {
  return (
    <section id="pujas" className="pattern py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          eyebrow="Sacred Ritual Services"
          title="Devotional Pujas & Anushthans"
          text="Traditional Vedic rituals for peace, prosperity, protection, family harmony and greater balance in life."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {pujas.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-2xl border border-border bg-ivory p-5 transition hover:border-gold/60">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-navy-deep">
                <Icon name={p.icon} className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <a href={site.phoneHref} className="mt-2 inline-block text-sm font-semibold text-gold-dark hover:text-navy">Consult Now →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
