import Image from "next/image";

import { Icon, type AnyIconName } from "@/components/icons";
import { site } from "@/lib/site";

import { WhatsAppForm } from "./whatsapp-form";

const rows: { icon: AnyIconName; label: string; value: string; href?: string; external?: boolean }[] = [
  { icon: "phone", label: "Call Us", value: site.phoneDisplay, href: site.phoneHref },
  { icon: "wa", label: "WhatsApp", value: site.phoneDisplay, href: site.whatsappHref, external: true },
  { icon: "instagram", label: "Instagram", value: site.instagramHandle, href: site.instagram, external: true },
  { icon: "instagram", label: "Star Shuffle Instagram", value: site.instagramStarShuffleHandle, href: site.instagramStarShuffle, external: true },
  { icon: "youtube", label: "YouTube Podcast", value: "Watch the interview", href: site.youtubePodcast, external: true },
  { icon: "user", label: "Astrologer", value: `${site.shortName} — ${site.tagline}` },
];

export function ContactBlock({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <section id="contact" className="bg-ivory py-16 sm:py-20">
      <div className="wrap">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-30px_rgb(20_36_79/0.6)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="starfield p-7 text-ivory sm:p-10">
            <span className="text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">✦ Begin Your Journey ✦</span>
            <H className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Find Clarity Through Trusted Astrology</H>
            <p className="mt-3 text-sm leading-relaxed text-ivory/75">
              Receive personalized guidance and traditional astrological insight to make confident decisions and embrace a brighter future.
            </p>
            <ul className="mt-7 space-y-3">
              {rows.map((r) => {
                const inner = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/50 text-gold-light">
                      <Icon name={r.icon} className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <small className="block text-xs text-ivory/60">{r.label}</small>
                      <b className="block truncate text-[15px] font-semibold">{r.value}</b>
                    </span>
                  </>
                );
                return (
                  <li key={r.label}>
                    {r.href ? (
                      <a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener" } : {})} className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-2">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <a href={site.phoneHref} className="mt-6 block overflow-hidden rounded-xl">
              <Image src="/contact.gif" alt={`Call Astrologer Akanksha Pande ${site.phoneDisplay}`} width={550} height={150} className="h-auto w-full" />
            </a>
          </div>
          <div className="bg-cream p-7 sm:p-10">
            <span className="text-xs font-semibold tracking-[0.22em] text-gold-dark uppercase">✦ Quick Consultation Form ✦</span>
            <h2 className="mt-3 mb-6 font-heading text-2xl font-bold text-navy sm:text-3xl">Share Your Problem &amp; Receive Trusted Solutions</h2>
            <WhatsAppForm />
            <p className="mt-4 text-xs text-muted-foreground">Your details open in WhatsApp and are sent only to {site.phoneDisplay}. Nothing is stored on this website.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
