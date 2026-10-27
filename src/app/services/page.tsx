import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { GuidanceGrid } from "@/components/sections/guidance-grid";
import { PageHero } from "@/components/sections/page-hero";
import { Posters } from "@/components/sections/posters";
import { PromoBanner } from "@/components/sections/promo-banner";
import { Pujas } from "@/components/sections/pujas";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Steps } from "@/components/sections/steps";
import { VedicSection } from "@/components/sections/vedic";

export const metadata: Metadata = {
  title: "Services – Love, Marriage & Family Problem Solutions",
  description:
    "Love marriage, love problem, lost love back, husband wife dispute, divorce and family problem solutions, plus kundali, vastu and devotional pujas by Astrologer Akanksha Pande.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Our Services"
        text="Personalized astrology, tarot and Vedic remedies for love, relationships, marriage, family and career."
      />
      <ServicesGrid />
      <Posters />
      <GuidanceGrid />
      <VedicSection />
      <PromoBanner />
      <Pujas />
      <Steps />
      <CtaBand />
    </>
  );
}
