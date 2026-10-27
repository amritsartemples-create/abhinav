import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-navy-deep text-[13px] text-ivory/85">
      <div className="wrap flex items-center justify-between gap-4 py-2">
        <span className="hidden md:inline">
          <span className="text-gold-light">✦</span> {site.tagline} — Trusted Guidance for Love, Marriage &amp; Family
        </span>
        <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
          <div className="flex items-center gap-4">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-gold-light">
              <Icon name="phone" className="size-4 text-gold-light" />
              {site.phoneDisplay}
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener" className="hidden items-center gap-1.5 hover:text-gold-light sm:flex">
              <Icon name="wa" className="size-4 text-gold-light" />
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram @i_akankshapande" className="hover:text-gold-light">
              <Icon name="instagram" className="size-4" />
            </a>
            <a href={site.instagramStarShuffle} target="_blank" rel="noopener" aria-label="Instagram @star.shuffle" className="hover:text-gold-light">
              <Icon name="instagram" className="size-4" />
            </a>
            <a href={site.youtubePodcast} target="_blank" rel="noopener" aria-label="YouTube podcast" className="hover:text-gold-light">
              <Icon name="youtube" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
