import Link from "next/link";

import { Icon } from "@/components/icons";
import { chips } from "@/lib/site";

export function ServiceChips() {
  return (
    <div className="border-b border-border bg-ivory">
      <div className="wrap flex snap-x gap-3 overflow-x-auto py-4 [scrollbar-width:none] lg:justify-center">
        {chips.map((c) => (
          <Link
            key={c.label}
            href="/services/"
            className="flex shrink-0 snap-start items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm font-medium text-navy transition hover:border-gold hover:bg-gold/10"
          >
            <span className="grid size-7 place-items-center rounded-full bg-navy text-gold-light">
              <Icon name={c.icon} className="size-3.5" />
            </span>
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
