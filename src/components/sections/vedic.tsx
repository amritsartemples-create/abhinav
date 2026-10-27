import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icons";
import { serviceList, site, vedicServices } from "@/lib/site";

export function VedicSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <span className="text-xs font-semibold tracking-[0.22em] text-gold-dark uppercase">✦ Vedic Astrology &amp; Remedies ✦</span>
          <h2 className="mt-3 font-heading text-[26px] leading-tight font-bold text-navy sm:text-4xl">Kundali, Vastu and Planetary Guidance for a Balanced Life</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Alongside relationship consultations, Astrologer Akanksha Pande offers traditional Vedic astrology services that help you understand planetary influences in your birth chart and take practical steps toward peace, stability and progress.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {vedicServices.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-ivory p-5">
                <h3 className="flex items-center gap-3 font-heading text-base font-semibold text-navy">
                  <span className="grid size-9 place-items-center rounded-full bg-navy text-gold-light">
                    <Icon name={v.icon} className="size-4" />
                  </span>
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="h-max rounded-2xl bg-navy p-6 text-ivory lg:sticky lg:top-28">
          <h3 className="font-heading text-lg font-semibold text-gold-light">Services That We Offer</h3>
          <ul className="mt-4 divide-y divide-white/10 text-sm">
            {serviceList.map((s) => (
              <li key={s}>
                <Link href="/services/" className="flex items-center justify-between py-2.5 hover:text-gold-light">
                  {s}
                  <span aria-hidden="true" className="text-gold">›</span>
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.phoneHref} className="mt-5 block overflow-hidden rounded-xl">
            <Image src="/contact.gif" alt={`Call Astrologer Akanksha Pande ${site.phoneDisplay}`} width={550} height={150} className="h-auto w-full" />
          </a>
        </aside>
      </div>
    </section>
  );
}
