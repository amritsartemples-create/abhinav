import { Icon } from "@/components/icons";
import type { Testimonial } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TestimonialCard({ t, className }: { t: Testimonial; className?: string }) {
  return (
    <figure className={cn("flex flex-col rounded-2xl border border-border bg-ivory p-6 shadow-[0_10px_30px_-20px_rgb(20_36_79/0.5)]", className)}>
      <div className="flex items-center justify-between">
        <div className="text-gold" aria-label="5 out of 5 stars">★★★★★</div>
        <Icon name="quote" className="size-7 text-gold/30" />
      </div>
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink">{t.text}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="grid size-11 place-items-center rounded-full bg-navy font-heading font-bold text-gold-light">{t.name[0]}</span>
        <span>
          <b className="block text-sm text-navy">{t.name}</b>
          <small className="text-muted-foreground">{t.place}</small>
        </span>
      </figcaption>
    </figure>
  );
}
