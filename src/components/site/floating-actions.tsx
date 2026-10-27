import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col gap-3">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-wa text-white shadow-lg ring-4 ring-wa/25 transition hover:scale-105"
      >
        <Icon name="wa" className="size-7" />
      </a>
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phoneDisplay}`}
        className="grid size-14 place-items-center rounded-full border-2 border-gold bg-navy text-gold-light shadow-lg ring-4 ring-gold/25 transition hover:scale-105"
      >
        <Icon name="phone" className="size-6" />
      </a>
    </div>
  );
}
