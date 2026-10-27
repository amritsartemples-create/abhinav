import { AboutIntro } from "@/components/sections/about-intro";
import { ServiceChips } from "@/components/sections/chips";
import { Countries } from "@/components/sections/countries";
import { CtaBand } from "@/components/sections/cta-band";
import { GuidanceGrid } from "@/components/sections/guidance-grid";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { PodcastVideo } from "@/components/sections/podcast-video";
import { Posters } from "@/components/sections/posters";
import { PromoBanner } from "@/components/sections/promo-banner";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Steps } from "@/components/sections/steps";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { TrustBand } from "@/components/sections/trust-band";
import { WhyChoose } from "@/components/sections/why-choose";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ServiceChips />
      <TrustBand />
      <GuidanceGrid />
      <AboutIntro />
      <Posters />
      <ServicesGrid limit={4} showAllLink />
      <WhyChoose />
      <PromoBanner />
      <Steps />
      <PodcastVideo />
      <TestimonialSlider />
      <CtaBand />
      <Countries />
    </>
  );
}
