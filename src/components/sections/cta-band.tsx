import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-ivory py-14">
      <div className="wrap">
        <div className="starfield relative overflow-hidden rounded-3xl border border-gold/30 px-6 py-10 sm:px-12">
          <div aria-hidden="true" className="absolute -right-16 -bottom-24 size-72 rounded-full border border-gold/20" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-gold-light uppercase">Need Private Astrology Guidance?</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-ivory sm:text-3xl">Discuss Your Concern With Astrologer Akanksha Pande</h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-gold">
                <Icon name="phone" className="size-4" />
                Call Now
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn btn-wa">
                <Icon name="wa" className="size-4" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
