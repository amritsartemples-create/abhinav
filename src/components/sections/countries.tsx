import Image from "next/image";

import { countries } from "@/lib/site";

import { SectionHeading } from "./section-heading";

export function Countries() {
  return (
    <section className="starfield py-16 sm:py-20">
      <div className="wrap">
        <SectionHeading
          dark
          eyebrow="Serving Clients Across the Globe"
          title="Trusted Astrology Guidance, Wherever You Are"
          text="Private online consultations for clients in India and countries worldwide."
        />
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {countries.map(([code, name]) => (
            <li key={code} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-ivory/80">
              <Image src={`https://flagcdn.com/w80/${code}.png`} alt={`${name} flag`} width={64} height={43} className="h-[30px] w-auto rounded shadow" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
