import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icons";
import { navLinks, serviceList, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="starfield text-ivory/75">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1.1fr]">
        <div>
          <Link href="/" className="inline-block rounded-xl bg-ivory p-3">
            <Image src="/logo.png" alt={site.name} width={600} height={190} className="h-14 w-auto" />
          </Link>
          <p className="mt-5 text-sm leading-relaxed">
            Personalised astrology guidance for love, marriage, relationships and family concerns by {site.tagline.toLowerCase()} {site.shortName}. Every consultation is handled privately and respectfully.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram @i_akankshapande" className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-navy-deep">
              <Icon name="instagram" className="size-4" />
            </a>
            <a href={site.instagramStarShuffle} target="_blank" rel="noopener" aria-label="Instagram @star.shuffle" className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-navy-deep">
              <Icon name="instagram" className="size-4" />
            </a>
            <a href={site.youtubePodcast} target="_blank" rel="noopener" aria-label="YouTube podcast" className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-navy-deep">
              <Icon name="youtube" className="size-4" />
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-navy-deep">
              <Icon name="wa" className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-gold-light">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceList.slice(0, 7).map((s) => (
              <li key={s}>
                <Link href="/services/" className="hover:text-gold-light">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-gold-light">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-light">{l.label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-heading text-lg font-semibold text-gold-light">We Accept</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
            {["Paytm", "VISA", "G Pay", "PayPal", "MasterCard"].map((p) => (
              <span key={p} className="rounded bg-ivory px-2 py-1 text-navy">{p}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-gold-light">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold-light">
                <Icon name="phone" className="size-4 text-gold-light" /> Call: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold-light">
                <Icon name="wa" className="size-4 text-gold-light" /> WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.youtubePodcast} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold-light">
                <Icon name="youtube" className="size-4 text-gold-light" /> Watch the Podcast
              </a>
            </li>
          </ul>
          <p className="mt-5 rounded-lg border border-gold/30 bg-white/5 p-3 text-xs leading-relaxed">
            <b className="text-gold-light">Note:</b> Beware of fake names and profiles. Use only the official contact details listed on this website.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p className="max-w-xl sm:text-right">
            Disclaimer: Astrology consultations are based on traditional beliefs and should not replace professional medical, legal, financial or psychological advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
