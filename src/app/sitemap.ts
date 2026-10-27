import type { MetadataRoute } from "next";

import { navLinks, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((l) => ({ url: `${site.url}${l.href}`, changeFrequency: "monthly", priority: l.href === "/" ? 1 : 0.8 }));
}
