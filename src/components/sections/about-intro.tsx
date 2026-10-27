import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icons";
import { photos, site } from "@/lib/site";

const ticks = [
  "Personalized consultation for every case",
  "Private and confidential guidance",
  "Clear explanation of problems and solutions",
  "Support for love, marriage and family",
  "Practical remedies for individual concerns",
  "Respectful, transparent process",
];

export function AboutIntro({ full = false }: { full?: boolean }) {
  const photo = full ? photos.consult : photos.portrait;
  return (
    <section id="about" className="overflow-hidden bg-ivory py-16 sm:py-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-3 rotate-2 rounded-[28px] bg-gradient-to-br from-gold-light/60 to-gold-dark/40" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-ivory shadow-xl">
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width:1024px) 520px, 90vw" className="object-cover object-[60%_center]" />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-navy px-6 py-3 text-center text-ivory shadow-lg">
            <b className="block font-heading text-lg text-gold-light">Akanksha Pande Ji</b>
            <span className="text-xs tracking-[0.2em] uppercase">{site.tagline}</span>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold-dark uppercase">✦ About Us ✦</span>
          <h2 className="mt-3 font-heading text-[26px] leading-tight font-bold text-navy sm:text-4xl">
            Meet {site.tagline} — Astrologer Akanksha Pande Ji
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Astrologer Akanksha Pande, founder of <b className="text-navy">{site.brand}</b>, provides personalized astrological and tarot guidance for people facing challenges in love, marriage, relationships, family life and personal matters. Every consultation is handled privately, with careful attention to the client&apos;s situation, concerns and expectations.
          </p>
          <blockquote className="my-6 rounded-r-xl border-l-4 border-gold bg-cream px-5 py-4 font-serif text-lg text-navy italic">
            The focus is not on giving generic predictions. Each case is understood individually before suitable guidance and practical remedies are suggested.
          </blockquote>
          {full && (
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Whether you are dealing with relationship misunderstandings, family resistance, marriage concerns, separation or emotional stress, the aim is to help you understand the situation clearly and make better decisions. Clients from India and around the world consult her online by call and WhatsApp.
            </p>
          )}
          <ul className="grid gap-3 sm:grid-cols-2">
            {ticks.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/20 text-[11px] text-gold-dark">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn btn-navy">
              <Icon name="phone" className="size-4" />
              Talk to Astrologer
            </a>
            {!full && (
              <Link href="/about/" className="btn border border-navy/20 text-navy hover:border-gold hover:text-gold-dark">
                Read More About Us →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
