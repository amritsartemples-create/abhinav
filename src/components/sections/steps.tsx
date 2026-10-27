import { Icon } from "@/components/icons";
import { steps } from "@/lib/site";

import { SectionHeading } from "./section-heading";

export function Steps() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Path to Clarity and Cosmic Guidance"
          text="Take the first step towards a brighter future with a confidential and easy consultation process."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-border bg-cream p-6 text-center">
              <span className="absolute top-4 right-5 font-heading text-3xl font-bold text-gold/30">0{i + 1}</span>
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-navy text-gold-light">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
