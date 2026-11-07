/**
 * FICTIONAL DEMO PROJECTS.
 * These are illustrative concepts that show how Markozy presents work.
 * They are not real clients and contain no real performance results.
 * Replace them with real, approved case studies before launch.
 */
export type Project = {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  summary: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  goals: string[];
  /** Two hues (0–360) used to generate the project artwork */
  hues: [number, number];
  pattern: "orbits" | "waves" | "grid" | "bars";
};

export const projects: Project[] = [
  {
    slug: "lumen-skincare",
    name: "Lumen Skincare",
    industry: "Beauty & D2C E-commerce",
    services: ["Website Development", "Meta Ads", "TikTok Ads"],
    summary:
      "A concept relaunch for an indie skincare brand: a fast Shopify storefront, creator-led TikTok content and a structured Meta testing framework.",
    challenge:
      "The (fictional) brand relied on a slow template store and a handful of boosted posts. Traffic was inconsistent and there was no reliable way to see which content drove sales.",
    approach: [
      "Rebuilt the storefront with a mobile-first product page and simplified checkout",
      "Created a hook library and briefed creators for UGC-style videos",
      "Set up Pixel, Conversions API and TikTok Events API for clean attribution",
      "Ran structured creative tests across Meta and TikTok with weekly reviews",
    ],
    deliverables: ["Shopify storefront", "Creative testing framework", "UGC creator program", "Tracking setup"],
    goals: ["Increase mobile conversion rate", "Lower cost per purchase", "Build an evergreen creative pipeline"],
    hues: [280, 330],
    pattern: "orbits",
  },
  {
    slug: "northpeak-logistics",
    name: "Northpeak Logistics",
    industry: "B2B Logistics",
    services: ["AI Automation", "SEO"],
    summary:
      "A concept automation and search program for a regional freight company — AI quote handling, CRM automation and service-page SEO.",
    challenge:
      "In this scenario, quote requests arrived by email, phone and forms, and were tracked in spreadsheets. Responses were slow and the website barely ranked for core services.",
    approach: [
      "Mapped the quoting process and identified repetitive steps",
      "Built an AI intake assistant that structures quote requests into the CRM",
      "Automated follow-ups and internal notifications with n8n",
      "Restructured service pages around location and freight-type searches",
    ],
    deliverables: ["AI quote intake agent", "CRM automation flows", "Technical SEO audit", "Service page rebuild"],
    goals: ["Faster quote response times", "Less manual data entry", "More organic enquiries for core services"],
    hues: [255, 200],
    pattern: "grid",
  },
  {
    slug: "verde-kitchen",
    name: "Verde Kitchen Co.",
    industry: "Restaurants & Hospitality",
    services: ["Google Ads", "Meta Ads", "Website Development"],
    summary:
      "A concept growth plan for a multi-location restaurant group: a reservation-first website, local search campaigns and social promotion.",
    challenge:
      "The imagined group had three locations, an outdated site and no way to connect ads to actual bookings.",
    approach: [
      "Designed a reservation-first website with location pages and menus",
      "Launched local Search campaigns targeting 'near me' and cuisine searches",
      "Promoted seasonal menus and events with Meta Reels campaigns",
      "Connected booking events to GA4 for spend-to-reservation visibility",
    ],
    deliverables: ["Multi-location website", "Local Google Ads", "Meta event campaigns", "GA4 booking tracking"],
    goals: ["More direct online reservations", "Stronger local visibility", "Clear view of ad spend vs bookings"],
    hues: [150, 270],
    pattern: "waves",
  },
  {
    slug: "atlas-property",
    name: "Atlas Property Group",
    industry: "Real Estate",
    services: ["SEO", "Google Ads", "AI Automation"],
    summary:
      "A concept lead-generation system for a property developer — project landing pages, high-intent search ads and an AI lead-qualification assistant.",
    challenge:
      "In this example, leads came in at all hours but sales agents only followed up during office time, and many enquiries went cold.",
    approach: [
      "Built fast landing pages for each development with clear enquiry paths",
      "Ran Search and Performance Max campaigns around project and area keywords",
      "Deployed a WhatsApp AI assistant to qualify leads and book viewings 24/7",
      "Synced qualified leads to the CRM with automatic agent assignment",
    ],
    deliverables: ["Project landing pages", "Search & PMax campaigns", "WhatsApp AI assistant", "CRM lead routing"],
    goals: ["Respond to every lead within minutes", "Higher share of qualified leads", "More booked viewings"],
    hues: [265, 45],
    pattern: "bars",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
