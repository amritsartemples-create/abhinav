import Image from "next/image";

import { site } from "@/lib/site";

export function PromoBanner() {
  return (
    <section aria-label="Call Astrologer Akanksha Pande" className="bg-cream py-10">
      <div className="wrap">
        <a href={site.phoneHref} className="block overflow-hidden rounded-2xl shadow-[0_18px_40px_-20px_rgb(20_36_79/0.6)]">
          <Image
            src="/gif.gif"
            alt={`Star Shuffle – Astrologer Akanksha Pande: Love Marriage, Love Problem, Lost Love Back, Divorce, Family Problem, Husband Wife Dispute. Call ${site.phoneDisplay}`}
            width={1600}
            height={500}
            sizes="(min-width:1200px) 1168px, 100vw"
            className="h-auto w-full"
          />
        </a>
      </div>
    </section>
  );
}
