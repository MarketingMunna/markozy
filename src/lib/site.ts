export const site = {
  name: "MARKOZY",
  tagline: "We Build. We Automate. We Grow.",
  positioning: "Your Digital Growth Partner.",
  description:
    "Markozy is a digital growth agency combining SEO, AI automation, web development and performance advertising on Meta, Google and TikTok to turn digital opportunities into measurable growth.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@markozy.com",
  location:
    process.env.NEXT_PUBLIC_CONTACT_LOCATION || "Jalan PJS 11/10, Bandar Sunway, 46150 Petaling Jaya, Selangor",
  /** Digits only, international format. */
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "60177636862").replace(/\D/g, ""),
  responseTime: "Within 24 hours",
  social: [
    { label: "Instagram", key: "instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://www.instagram.com/markozydigital/" },
    { label: "LinkedIn", key: "linkedin", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "" },
    { label: "Facebook", key: "facebook", href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://www.facebook.com/p/Markozy-61586802032191/" },
    { label: "TikTok", key: "tiktok", href: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || "" },
  ] as const,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
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
