import type { Metadata } from "next";

import { AboutIntro } from "@/components/sections/about-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { MediaGallery } from "@/components/sections/media-gallery";
import { PageHero } from "@/components/sections/page-hero";
import { PodcastVideo } from "@/components/sections/podcast-video";
import { Steps } from "@/components/sections/steps";
import { TrustBand } from "@/components/sections/trust-band";
import { WhyChoose } from "@/components/sections/why-choose";

export const metadata: Metadata = {
  title: "About Us – Global Lady Astrologer",
  description:
    "Meet Astrologer Akanksha Pande, Global Lady Astrologer and founder of Star Shuffle, offering private astrology and tarot guidance for love, marriage and family.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About Astrologer Akanksha Pande"
        text="Global Lady Astrologer and founder of Star Shuffle — private, personal guidance for love, marriage and family life."
      />
      <AboutIntro full />
      <TrustBand />
      <MediaGallery />
      <WhyChoose />
      <PodcastVideo />
      <Steps />
      <CtaBand />
    </>
  );
}
