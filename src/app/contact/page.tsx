import type { Metadata } from "next";

import { ContactBlock } from "@/components/sections/contact-block";
import { Countries } from "@/components/sections/countries";
import { PageHero } from "@/components/sections/page-hero";
import { Steps } from "@/components/sections/steps";
import { TrustBand } from "@/components/sections/trust-band";

export const metadata: Metadata = {
  title: "Contact – Call or WhatsApp +91-9173629453",
  description: "Contact Astrologer Akanksha Pande by call or WhatsApp on +91-9173629453 for a private online astrology consultation, anywhere in the world.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Contact Us"
        text="Call or WhatsApp +91-9173629453 for a private consultation — available for clients in India and worldwide."
      />
      <ContactBlock />
      <TrustBand />
      <Steps />
      <Countries />
    </>
  );
}
