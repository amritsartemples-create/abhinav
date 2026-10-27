export const site = {
  name: "Astrologer Akanksha Pande",
  shortName: "Akanksha Pande",
  brand: "Star Shuffle",
  tagline: "Global Lady Astrologer",
  url: "https://www.astrologerakankshapande.com",
  phoneDisplay: "+91-9173629453",
  phoneHref: "tel:+919173629453",
  whatsapp: "919173629453",
  whatsappHref: "https://wa.me/919173629453",
  instagram: "https://www.instagram.com/i_akankshapande?obrf=bmt6MWs4NnVuNGo0",
  instagramHandle: "@i_akankshapande",
  instagramStarShuffle: "https://www.instagram.com/star.shuffle?dlrf=b2x2d2FlaTBlMGk2",
  instagramStarShuffleHandle: "@star.shuffle",
  youtubePodcast: "https://youtu.be/i5qj59k8L38?si=szEG03TllncDsAKI",
  youtubePodcastId: "i5qj59k8L38",
} as const;

export function whatsappLink(topic?: string) {
  if (!topic) return site.whatsappHref;
  const text = `Hello Astrologer Akanksha Pande, I need guidance for ${topic}.`;
  return `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services" },
  { href: "/review/", label: "Review" },
  { href: "/contact/", label: "Contact" },
] as const;

/** Hero carousel. Filenames are fixed: replace the file to change a slide. */
export const heroSlides = [
  { src: "/01.jpg", alt: "Star Shuffle Love Marriage Solution by Astrologer Akanksha Pande, call +91-9173629453" },
  { src: "/02.jpg", alt: "Star Shuffle Love Problem Solution by Astrologer Akanksha Pande, call +91-9173629453" },
  { src: "/03.jpg", alt: "Star Shuffle Husband and Wife Dispute Solution by Astrologer Akanksha Pande, call +91-9173629453" },
] as const;

/** Square posters 001 / 002 / 003. */
export const posters = [
  { src: "/001.jpg", title: "Lost Love Back", alt: "Star Shuffle Lost Love Back by Astrologer Akanksha Pande" },
  { src: "/002.jpg", title: "Family Problem Solution", alt: "Star Shuffle Family Problem Solution by Astrologer Akanksha Pande" },
  { src: "/003.jpg", title: "Divorce Problem Solution", alt: "Star Shuffle Divorce Problem Solution by Astrologer Akanksha Pande" },
] as const;

/** Photos of Akanksha Pande. Replace these files (same name) with the real photos. */
export const photos = {
  podcast: { src: "/images/akanksha-1.jpg", alt: "Astrologer Akanksha Pande in a podcast conversation", w: 1600, h: 1066 },
  portrait: { src: "/images/akanksha-2.jpg", alt: "Astrologer Akanksha Pande", w: 1600, h: 1066 },
  consult: { src: "/images/akanksha-3.jpg", alt: "Astrologer Akanksha Pande during a consultation", w: 1600, h: 1066 },
  tarot: { src: "/images/akanksha-4.jpg", alt: "Astrologer Akanksha Pande giving a tarot card reading", w: 1600, h: 1066 },
  award: { src: "/images/award.jpg", alt: "Astrologer Akanksha Pande receiving the IEA Excellence Award", w: 843, h: 1264 },
} as const;

export type IconName =
  | "ring" | "heart" | "return" | "users" | "scale" | "broken" | "home" | "lock" | "user"
  | "chat" | "globe" | "star" | "sun" | "lamp" | "chart" | "brief" | "phone";

export const chips: { label: string; icon: IconName }[] = [
  { label: "Love Marriage Solution", icon: "ring" },
  { label: "Love Problem Solution", icon: "heart" },
  { label: "Get Your Ex Love Back", icon: "return" },
  { label: "Family Problem Solution", icon: "users" },
  { label: "Divorce Problem Solution", icon: "scale" },
];

export const trustPoints: { title: string; text: string; icon: IconName }[] = [
  { title: "100% Private", text: "Confidential consultation", icon: "lock" },
  { title: "Personal Guidance", text: "Every case reviewed individually", icon: "user" },
  { title: "Call & WhatsApp", text: "Quick, easy access", icon: "chat" },
  { title: "Worldwide", text: "Online consultation", icon: "globe" },
];

export type GuidanceCard = { title: string; text: string; image: string; position?: string };

export const guidanceCards: GuidanceCard[] = [
  { title: "Parents Approval for Love Marriage", text: "Guidance to improve understanding and gain family support for your relationship.", image: "/images/Parents-Approval-for-Love-Marriage.jpg" },
  { title: "Family Problem Solution", text: "Personalized support for misunderstandings, conflicts and lack of peace at home.", image: "/images/Family-Problem-Solution.jpg" },
  { title: "GF/BF Problem Solution", text: "Guidance for distance, trust issues, frequent arguments and relationship confusion.", image: "/images/GFBF-Problem-Solution.jpg" },
  { title: "Divorce Problem Solution", text: "Confidential guidance for couples facing separation, distance and marital conflict.", image: "/images/Divorce-Problem-Solution.jpg" },
];

export type Service = GuidanceCard & { icon: IconName };

export const services: Service[] = [
  { title: "Breakup Problem Solution", text: "Understand the causes of a breakup and explore the right path toward healing or reconciliation.", image: "/images/Breakup-Problem-Solution.jpg", icon: "broken" },
  { title: "Love Problem Solution", text: "Support for misunderstandings, emotional distance, trust issues and repeated conflicts.", image: "/images/Love-Problem-Solution.jpg", icon: "heart" },
  { title: "Get Your Ex Love Back", text: "Guidance for reconnecting with a former partner and understanding the reasons behind separation.", image: "/images/Get-Your-Ex-Love-BackGet-Your-Ex-Love-Back.jpg", icon: "return" },
  { title: "Husband Wife Dispute", text: "Confidential support for frequent arguments, communication gaps and lack of harmony.", image: "/images/Husband-Wife-Dispute.jpg", icon: "users" },
  { title: "Lost Love Back Specialist", text: "Focused guidance for separation, emotional disconnection or a broken relationship.", image: "/images/Lost-Love-Back-Specialist.jpg", icon: "heart" },
  { title: "Family Problem Solution", text: "Consultation for family disputes, domestic stress and restoring peace at home.", image: "/images/Family-Problem-Solution.jpg", icon: "home" },
  { title: "Love Marriage Specialist", text: "Guidance for couples facing family resistance, delays or uncertainty about love marriage.", image: "/images/Love-Marriage-Specialist.jpg", icon: "ring" },
  { title: "Divorce Problem Solution", text: "Private support for serious marital conflict, separation concerns or divorce-related stress.", image: "/images/Divorce-Problem-Solution1.jpg", icon: "scale" },
];

export const whyChoose: { title: string; text: string; icon: IconName | "wa" }[] = [
  { title: "Personalized Consultation", text: "Every case is carefully reviewed according to the client's individual situation.", icon: "user" },
  { title: "Complete Confidentiality", text: "Personal details and consultation discussions are always kept private.", icon: "lock" },
  { title: "Clear & Honest Guidance", text: "Problems and possible solutions are explained clearly in simple language.", icon: "chat" },
  { title: "Practical Remedies", text: "Suitable remedies are suggested according to the concern, without unrealistic promises.", icon: "lamp" },
  { title: "Support for Life Concerns", text: "Guidance for love, marriage, relationships, family and personal challenges.", icon: "heart" },
  { title: "Easy Call & WhatsApp", text: "Connect quickly through call or WhatsApp without a complicated booking process.", icon: "wa" },
];

export const vedicServices: { title: string; text: string; icon: IconName }[] = [
  { title: "Kundali Reading", text: "A detailed study of your birth chart to understand strengths, challenges and the timing of important life events.", icon: "chart" },
  { title: "Kundali Matching", text: "Compatibility analysis for marriage, with clear explanation of guna milan and any doshas found in the charts.", icon: "ring" },
  { title: "Manglik Dosh Guidance", text: "Assessment of Mangal Dosha and suitable remedies for couples concerned about marriage delays or compatibility.", icon: "sun" },
  { title: "Vastu Consultation", text: "Simple Vastu suggestions for homes and workplaces to encourage harmony, positivity and a more balanced environment.", icon: "home" },
  { title: "Career & Business", text: "Guidance on career direction, job changes and business decisions based on your planetary periods.", icon: "brief" },
  { title: "Gemstone & Remedies", text: "Personalized recommendations for gemstones, mantras and simple daily practices suited to your chart.", icon: "lamp" },
];

export const serviceList = [
  "Love Marriage Specialist",
  "Love Problem Solution",
  "Husband Wife Dispute",
  "Divorce Problem Solution",
  "Family Problem Solution",
  "Get Your Ex Love Back",
  "Breakup Problem Solution",
  "Career Problem Solution",
  "Kundali Matching",
  "Manglik Dosh Solution",
  "Vastu Solutions",
];

export const pujas: { title: string; text: string; icon: IconName }[] = [
  { title: "Nakshatra Shanti Puja", text: "Performed to reduce challenging planetary influences and bring stability, peace and clarity.", icon: "star" },
  { title: "Pitra Dosh Puja", text: "Performed with respect for ancestors to support family harmony and emotional peace.", icon: "users" },
  { title: "Shani Puja", text: "Focused on discipline, patience and protection during difficult Saturn-related phases.", icon: "sun" },
  { title: "Puja for Peace", text: "A calming ritual for families experiencing stress, frequent conflict or lack of peace at home.", icon: "lamp" },
  { title: "Lakshmi Puja", text: "Performed to invite blessings for prosperity, financial stability and abundance.", icon: "star" },
  { title: "Puja for Wealth", text: "For those seeking better financial stability, business growth and career progress.", icon: "brief" },
  { title: "Kaal Sarp Dosh Nivaran Puja", text: "Recommended after proper chart assessment to address Kaal Sarp Dosh and support progress.", icon: "chart" },
  { title: "Puja for Marriage", text: "Ritual guidance for marriage delays, family resistance and compatibility concerns.", icon: "ring" },
];

export const steps: { title: string; text: string; icon: IconName }[] = [
  { title: "Reach Out Instantly", text: "Send a WhatsApp message or call directly to start your consultation.", icon: "phone" },
  { title: "Share Your Concerns", text: "Tell us about your challenges in love, marriage, family, career or finance.", icon: "chat" },
  { title: "Kundali Study", text: "Your birth chart and planetary positions are studied carefully and in depth.", icon: "chart" },
  { title: "Practical Remedies", text: "Receive clear guidance and suitable remedies to move forward with confidence.", icon: "lamp" },
];

export type Testimonial = { name: string; place: string; text: string };

export const testimonials: Testimonial[] = [
  { name: "Pankaj Verma", place: "Lucknow, India", text: "Our families were strongly against our love marriage. The consultation helped us understand how to handle the situation calmly and communicate with our parents in a better way. Gradually, the misunderstandings reduced and we received their support." },
  { name: "Anjali Mehta", place: "Mumbai, India", text: "There were frequent arguments and tension in our home over small issues. After following the personalized guidance and suggested remedies, communication improved and the family environment became much more peaceful." },
  { name: "Rohit Sharma", place: "Hyderabad, India", text: "Trust issues and repeated arguments had created distance in my relationship. The consultation helped me understand the real problem and guided me toward better communication with my partner." },
  { name: "Simran Kaur", place: "Amritsar, India", text: "I was going through a very difficult phase after a breakup. Akanksha Ji listened patiently and explained everything clearly. Her guidance gave me the confidence to move forward with a calm mind." },
  { name: "Vikas Malhotra", place: "Delhi, India", text: "My wife and I were thinking about separation. The consultation helped us look at our problems differently, and the simple remedies she suggested brought more patience and understanding into our marriage." },
  { name: "Priya Nair", place: "Bengaluru, India", text: "Our marriage was getting delayed again and again. The kundali matching and guidance on Manglik dosh were explained in simple words. The whole process was private and very respectful." },
  { name: "Harpreet Singh", place: "Toronto, Canada", text: "Living abroad, I was worried an online consultation would not feel personal. It was the opposite. Akanksha Ji gave me full time on WhatsApp and practical advice for my family situation back home." },
  { name: "Neha Gupta", place: "Jaipur, India", text: "My parents were not ready to accept my partner. With her guidance we approached the conversation in the right way and at the right time. Today both families are happy with our decision." },
  { name: "Arjun Patel", place: "London, UK", text: "I contacted her about career confusion and constant stress at home. The reading was honest, with no false promises, and the remedies were easy to follow. I feel much more settled now." },
];

export const countries: [string, string][] = [
  ["in", "India"], ["au", "Australia"], ["it", "Italy"], ["fj", "Fiji"],
  ["no", "Norway"], ["gb", "UK"], ["us", "USA"], ["sg", "Singapore"],
  ["de", "Germany"], ["ca", "Canada"], ["nl", "Holland"], ["nz", "New Zealand"],
  ["th", "Thailand"], ["ch", "Switzerland"], ["es", "Spain"], ["ae", "UAE"],
];
