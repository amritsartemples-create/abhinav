import { Icon } from "@/components/icons";
import { site, trustPoints } from "@/lib/site";

export function TrustBand() {
  return (
    <div className="bg-navy text-ivory">
      <div className="wrap grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-center">
        {trustPoints.map((t) => (
          <div key={t.title} className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/50 text-gold-light">
              <Icon name={t.icon} className="size-5" />
            </span>
            <span>
              <b className="block text-[15px] font-semibold">{t.title}</b>
              <small className="text-ivory/65">{t.text}</small>
            </span>
          </div>
        ))}
        <div className="flex flex-wrap gap-3 sm:col-span-2 lg:col-span-1">
          <a href={site.phoneHref} className="btn btn-gold btn-sm">
            <Icon name="phone" className="size-4" />
            {site.phoneDisplay}
          </a>
          <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn btn-wa btn-sm">
            <Icon name="wa" className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
