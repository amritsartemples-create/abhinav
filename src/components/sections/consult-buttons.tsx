import { Icon } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";

export function ConsultButtons({ topic }: { topic: string }) {
  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-4">
      <a href={site.phoneHref} className="btn btn-navy btn-sm flex-1" aria-label={`Call for ${topic}`}>
        <Icon name="phone" className="size-3.5" />
        Call
      </a>
      <a href={whatsappLink(topic)} target="_blank" rel="noopener" className="btn btn-wa btn-sm flex-1" aria-label={`WhatsApp for ${topic}`}>
        <Icon name="wa" className="size-3.5" />
        WhatsApp
      </a>
    </div>
  );
}
