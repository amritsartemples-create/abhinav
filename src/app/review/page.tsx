import type { Metadata } from "next";

import { Icon } from "@/components/icons";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { PodcastVideo } from "@/components/sections/podcast-video";
import { SectionHeading } from "@/components/sections/section-heading";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Read reviews from clients in India and abroad who consulted Astrologer Akanksha Pande for love, marriage and family guidance.",
  alternates: { canonical: "/review/" },
};

const stats = [
  { value: "5.0", label: "Average rating" },
  { value: "16+", label: "Countries served" },
  { value: "100%", label: "Private consultations" },
];

export default function ReviewPage() {
  return (
    <>
      <PageHero
        crumb="Review"
        title="Client Reviews"
        text="Real experiences from people who found clarity, direction and confidence through personalised guidance."
      />
      <section className="bg-navy text-ivory">
        <div className="wrap grid gap-6 py-8 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <b className="block font-heading text-3xl text-gold-light">{s.value}</b>
              <span className="text-sm text-ivory/70">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="pattern py-16 sm:py-20">
        <div className="wrap">
          <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-border bg-ivory p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-navy">Consulted Akanksha Ji? Share Your Experience</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Send your review on WhatsApp or tag us on Instagram — it helps others find the right guidance.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={`${site.whatsappHref}?text=${encodeURIComponent("Hello Akanksha Ji, I would like to share my review:")}`} target="_blank" rel="noopener" className="btn btn-wa">
                <Icon name="wa" className="size-4" />
                Send Review on WhatsApp
              </a>
              <a href={site.instagram} target="_blank" rel="noopener" className="btn btn-navy">
                <Icon name="instagram" className="size-4" />
                {site.instagramHandle}
              </a>
              <a href={site.instagramStarShuffle} target="_blank" rel="noopener" className="btn border border-navy/20 text-navy hover:border-gold hover:text-gold-dark">
                <Icon name="instagram" className="size-4" />
                {site.instagramStarShuffleHandle}
              </a>
            </div>
          </div>
        </div>
      </section>
      <PodcastVideo />
      <CtaBand />
    </>
  );
}
