const DEFAULT_LOCATION = "Petaling Jaya, Selangor, Malaysia";

/** True when a value looks like a phone number rather than an address (guards against env-var mix-ups). */
function looksLikePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && /^[\s+()\-.\d]+$/.test(value.trim());
}

/** A social URL counts only if it points to an actual profile, not just a platform homepage. */
export function isProfileUrl(href: string | undefined): href is string {
  if (!href) return false;
  try {
    const u = new URL(href);
    return u.protocol === "https:" && u.pathname.replace(/\/+$/, "").length > 1;
  } catch {
    return false;
  }
}

const rawLocation = process.env.NEXT_PUBLIC_CONTACT_LOCATION?.trim();
const url = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

/**
 * Search engines may index only the production site. Any host starting with dev./staging./preview.,
 * localhost, or a *.vercel.app preview is kept out of the index. NEXT_PUBLIC_NOINDEX=true forces noindex anywhere.
 */
function computeIndexable() {
  if (process.env.NEXT_PUBLIC_NOINDEX === "true") return false;
  try {
    const host = new URL(url).hostname;
    if (host === "localhost" || host === "127.0.0.1") return false;
    if (/^(dev|staging|stage|preview|test|qa)\./.test(host)) return false;
    if (host.endsWith(".vercel.app") || host.endsWith(".netlify.app")) return false;
    return true;
  } catch {
    return false;
  }
}

const socialCandidates = [
  { label: "Instagram", key: "instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://www.instagram.com/markozydigital/" },
  { label: "LinkedIn", key: "linkedin", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "" },
  { label: "Facebook", key: "facebook", href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://www.facebook.com/p/Markozy-61586802032191/" },
  { label: "TikTok", key: "tiktok", href: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || "" },
];

export const site = {
  name: "MARKOZY",
  /** Brand line. */
  tagline: "We Build. We Automate. We Grow.",
  /** Supporting line. */
  positioning: "Your Digital Growth Partner in Malaysia.",
  description:
    "Markozy is a Malaysian digital growth agency combining SEO, AI automation, web development and performance advertising on Meta, Google and TikTok to help SMEs turn digital opportunities into measurable growth.",
  url,
  indexable: computeIndexable(),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@markozy.com",
  location: rawLocation && !looksLikePhone(rawLocation) ? rawLocation : DEFAULT_LOCATION,
  areaServed: "Malaysia",
  /** Digits only, international format. */
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "60177636862").replace(/\D/g, ""),
  responseTime: "Within 24 hours",
  /** SSM registration number, shown in the footer when set. */
  companyReg: process.env.NEXT_PUBLIC_COMPANY_REG_NO?.trim() || "",
  /** Calendly / Cal.com link. When set, consultation buttons open the booking page instead of the contact form. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "",
  /** Only real profile URLs are kept; bare platform homepages are dropped. */
  social: socialCandidates.filter((s) => isProfileUrl(s.href)),
};

export const author = {
  name: "Hasan Murad Munna",
  role: "Founder & Digital Marketing Lead",
  initials: "HM",
  photo: { src: "/team/hasan-murad-munna.jpg", width: 946, height: 1280 },
  shortBio:
    "Digital marketer with 6 years of hands-on experience in SEO, paid social and performance campaigns, currently pursuing a Master's by Research in Digital Marketing at Universiti Tenaga Nasional (UNITEN).",
  bio: [
    "Hasan Murad Munna has spent the last six years planning and running digital marketing for businesses, from search and content to paid campaigns on Meta, Google and TikTok.",
    "He is currently completing a Master's by Research in Digital Marketing at Universiti Tenaga Nasional (UNITEN), which keeps Markozy's work grounded in current research as well as day-to-day campaign data.",
  ],
  knowsAbout: ["Digital marketing", "SEO", "Performance advertising", "Marketing automation"],
  alumniOf: "Universiti Tenaga Nasional (UNITEN)",
};

/** Consultation CTA: books a call when a booking link exists, otherwise sends people to the request form. */
export const consultCta = site.bookingUrl
  ? { label: "Book a Free Consultation", href: site.bookingUrl, external: true }
  : { label: "Request a Free Consultation", href: "/contact", external: false };

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappLink(message = "Hi Markozy! I'd like to talk about growing my business.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Display formatting, e.g. 60177636862 → "+60 17-763 6862" (Malaysian mobile style). */
export function formatPhone(digits: string) {
  if (digits.startsWith("60") && (digits.length === 11 || digits.length === 12)) {
    const rest = digits.slice(2);
    const prefix = rest.length === 10 ? rest.slice(0, 3) : rest.slice(0, 2);
    const tail = rest.slice(prefix.length);
    return `+60 ${prefix}-${tail.slice(0, 3)} ${tail.slice(3)}`;
  }
  return `+${digits}`;
}
