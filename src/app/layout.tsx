import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Poppins } from "next/font/google";

import { FloatingActions } from "@/components/site/floating-actions";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TopBar } from "@/components/site/top-bar";
import { site } from "@/lib/site";

import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-cinzel", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500"], style: ["italic"], variable: "--font-playfair", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline} – Love Marriage & Family Problem Solution`,
    template: `%s | ${site.name}`,
  },
  description:
    "Star Shuffle by Astrologer Akanksha Pande, Global Lady Astrologer, offers private consultation for love marriage, love problems, husband wife disputes, divorce, family problems and lost love back. Call or WhatsApp +91-9173629453.",
  keywords: [
    "Astrologer Akanksha Pande",
    "Global Lady Astrologer",
    "Star Shuffle",
    "love marriage specialist",
    "love problem solution",
    "husband wife dispute solution",
    "family problem solution",
    "divorce problem solution",
    "lost love back",
    "tarot reading",
    "kundali matching",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: "Private astrology consultation for love, marriage and family concerns. Call or WhatsApp +91-9173629453.",
    images: [{ url: "/01.jpg", width: 1600, height: 700, alt: site.name }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#14244f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.brand,
  description: "Private astrology and tarot consultation for love marriage, love problems, husband wife disputes, divorce, family problems and lost love back.",
  telephone: "+91-9173629453",
  url: site.url,
  image: `${site.url}/logo.png`,
  areaServed: "Worldwide",
  priceRange: "₹₹",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  sameAs: [site.instagram.split("?")[0], site.instagramStarShuffle.split("?")[0], site.youtubePodcast.split("?")[0]],
  founder: { "@type": "Person", name: "Akanksha Pande", jobTitle: "Astrologer" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${poppins.variable} antialiased`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only z-50 rounded bg-navy px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
          Skip to content
        </a>
        <TopBar />
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
