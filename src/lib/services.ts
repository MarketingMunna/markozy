export type ServiceKey = "seo" | "ai" | "web" | "meta" | "google" | "tiktok";

export type Service = {
  slug: string;
  key: ServiceKey;
  number: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  details: { title: string; text: string }[];
  idealFor: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "seo",
    key: "seo",
    number: "01",
    name: "SEO",
    title: "Search Engine Optimization",
    tagline: "Be found by the customers already searching for you.",
    description:
      "Technical, on-page and content SEO that builds compounding organic visibility — on Google and in AI-powered search.",
    longDescription:
      "Organic search is the one channel that keeps paying back long after the work is done. We fix the technical foundations, map content to real buyer intent and build authority so your brand shows up where decisions are made — including AI overviews and answer engines.",
    benefits: [
      "Compounding traffic that doesn't stop when ad spend does",
      "Visibility for high-intent, ready-to-buy searches",
      "Technical health that also speeds up your site",
      "Content that earns trust and links naturally",
    ],
    details: [
      { title: "Technical SEO audit", text: "Crawlability, indexation, Core Web Vitals, structured data and site architecture — prioritised by impact." },
      { title: "Keyword & intent strategy", text: "Research that maps search demand to pages, funnel stage and revenue potential." },
      { title: "On-page optimisation", text: "Titles, headings, internal linking and copy improvements on your money pages." },
      { title: "Content engine", text: "Briefs and articles built around topics your customers actually search for." },
      { title: "Local & AI search", text: "Google Business Profile, local citations and content structured for AI answer engines." },
      { title: "Monthly reporting", text: "Rankings, traffic and conversions tied back to business outcomes — in plain language." },
    ],
    idealFor: ["Service businesses", "E-commerce stores", "B2B companies with long sales cycles"],
    cta: "Get an SEO roadmap",
  },
  {
    slug: "ai-automation",
    key: "ai",
    number: "02",
    name: "AI Automation",
    title: "Intelligent Workflow Automation",
    tagline: "Give your team hours back every single week.",
    description:
      "AI agents, chatbots and connected workflows that remove repetitive work, respond to leads instantly and keep your data in sync.",
    longDescription:
      "Most growing teams lose hours to copy-pasting, chasing leads and updating spreadsheets. We map your processes, find the bottlenecks and build reliable automations — from AI assistants that qualify leads to back-office flows that run while you sleep.",
    benefits: [
      "Instant lead response, day or night",
      "Fewer manual errors across tools and teams",
      "Hours freed up for higher-value work",
      "Systems that scale without adding headcount",
    ],
    details: [
      { title: "Process mapping", text: "We document how work flows today and pinpoint where automation has the biggest payoff." },
      { title: "AI chat & lead agents", text: "Website and WhatsApp assistants that answer questions, qualify leads and book calls." },
      { title: "CRM & sales automation", text: "Lead routing, follow-up sequences and pipeline updates without manual effort." },
      { title: "Workflow integrations", text: "Connect forms, CRMs, sheets, email and payment tools using n8n, Make, Zapier or custom code." },
      { title: "Document & data processing", text: "Extract, classify and summarise invoices, forms and emails with AI." },
      { title: "Monitoring & handover", text: "Error alerts, documentation and training so your team stays in control." },
    ],
    idealFor: ["Teams drowning in admin", "Businesses with high lead volume", "Operations-heavy companies"],
    cta: "Automate my workflows",
  },
  {
    slug: "website-development",
    key: "web",
    number: "03",
    name: "Website Development",
    title: "Modern Business Websites & E-commerce",
    tagline: "Websites engineered to convert, not just impress.",
    description:
      "Fast, beautiful and conversion-focused websites and online stores built on modern technology that's easy to manage.",
    longDescription:
      "Your website is your hardest-working salesperson. We design and build fast, accessible sites and stores with clear messaging, strong visual identity and conversion paths that guide visitors to act — all on a stack your team can manage.",
    benefits: [
      "Lightning-fast load times on every device",
      "Clear user journeys designed to convert",
      "SEO-ready structure from day one",
      "Easy content management for your team",
    ],
    details: [
      { title: "UX strategy & wireframes", text: "Information architecture and page flows shaped around how your buyers decide." },
      { title: "Premium UI design", text: "A distinctive visual identity with motion and interaction that feels high-end." },
      { title: "Development", text: "Next.js, Shopify or WordPress builds — chosen for your needs, not our habits." },
      { title: "E-commerce", text: "Product pages, checkout optimisation, payment gateways and inventory integrations." },
      { title: "Performance & accessibility", text: "Core Web Vitals, semantic HTML and WCAG-minded builds." },
      { title: "Launch & care plans", text: "Analytics, tracking, hosting setup and ongoing improvements after go-live." },
    ],
    idealFor: ["Brands outgrowing a template site", "New product launches", "Online stores ready to scale"],
    cta: "Plan my website",
  },
  {
    slug: "meta-ads",
    key: "meta",
    number: "04",
    name: "Meta Ads",
    title: "Facebook & Instagram Advertising",
    tagline: "Thumb-stopping creative, backed by sharp targeting.",
    description:
      "Full-funnel Facebook and Instagram campaigns that pair scroll-stopping creative with disciplined testing and tracking.",
    longDescription:
      "On Meta, creative is the targeting. We build campaigns around strong hooks and structured creative testing, set up clean conversion tracking with the Conversions API, and scale what works — so every ringgit, dollar or pound is accountable.",
    benefits: [
      "Reach the right audience at every funnel stage",
      "Creative testing that finds winners faster",
      "Accurate tracking with Pixel + Conversions API",
      "Clear reporting on cost per result",
    ],
    details: [
      { title: "Account & tracking setup", text: "Business Manager structure, Pixel, Conversions API and event prioritisation." },
      { title: "Audience strategy", text: "Broad, interest, lookalike and retargeting audiences mapped to your funnel." },
      { title: "Creative production", text: "Static, carousel, UGC-style and video ads with multiple hooks per concept." },
      { title: "Structured testing", text: "Systematic tests on creative, offers and audiences — never random tweaks." },
      { title: "Lead generation", text: "Instant forms, Messenger and WhatsApp campaigns with CRM follow-up." },
      { title: "Scaling & optimisation", text: "Budget scaling rules and weekly optimisation against your target CPA or ROAS." },
    ],
    idealFor: ["E-commerce & D2C brands", "Local service businesses", "Lead-generation campaigns"],
    cta: "Launch Meta campaigns",
  },
  {
    slug: "google-ads",
    key: "google",
    number: "05",
    name: "Google Ads",
    title: "Search, Display & Performance Marketing",
    tagline: "Capture demand the moment intent is highest.",
    description:
      "Search, Performance Max, Display and YouTube campaigns engineered around high-intent keywords and real conversion data.",
    longDescription:
      "When someone searches for what you sell, you need to be there — with the right message and a landing page that converts. We build tightly structured Google Ads accounts, protect your budget from wasted clicks and optimise towards the conversions that actually matter to your business.",
    benefits: [
      "Show up exactly when buyers are searching",
      "Less wasted spend through negative keyword control",
      "Conversion tracking tied to real leads and sales",
      "Fast, measurable results from day one",
    ],
    details: [
      { title: "Account audit & structure", text: "Campaign architecture built around intent, products and margins." },
      { title: "Search campaigns", text: "Keyword research, match-type strategy and ad copy that earns the click." },
      { title: "Performance Max & Shopping", text: "Feed optimisation and asset groups for e-commerce growth." },
      { title: "Display & YouTube", text: "Remarketing and awareness campaigns that keep your brand top of mind." },
      { title: "Conversion tracking", text: "GA4, Google Tag Manager, enhanced conversions and offline conversion imports." },
      { title: "Landing page CRO", text: "Recommendations and builds that lift conversion rates from paid traffic." },
    ],
    idealFor: ["Businesses with active search demand", "E-commerce with product feeds", "B2B lead generation"],
    cta: "Grow with Google Ads",
  },
  {
    slug: "tiktok-ads",
    key: "tiktok",
    number: "06",
    name: "TikTok Ads",
    title: "TikTok Advertising & Creative Strategy",
    tagline: "Native creative that feels like content, sells like ads.",
    description:
      "TikTok-first creative strategy, creator partnerships and Spark Ads that capture attention and convert a new generation of buyers.",
    longDescription:
      "TikTok rewards brands that act like creators. We develop native creative concepts, brief creators, run Spark Ads and TikTok Shop campaigns, and test hooks relentlessly — turning attention into traffic, leads and sales.",
    benefits: [
      "Reach audiences other platforms miss",
      "Creative that blends into the feed",
      "Creator & UGC content at scale",
      "TikTok Shop and conversion campaigns",
    ],
    details: [
      { title: "Creative strategy", text: "Trend research, hook libraries and scripts built for the first three seconds." },
      { title: "Creator partnerships", text: "Sourcing, briefing and managing creators for authentic UGC." },
      { title: "Spark Ads", text: "Boost high-performing organic and creator posts as paid ads." },
      { title: "TikTok Shop campaigns", text: "Product showcase, live shopping support and GMV-focused campaigns." },
      { title: "Pixel & events API", text: "Accurate conversion tracking with TikTok Pixel and Events API." },
      { title: "Rapid testing", text: "High-volume creative testing to keep fatigue low and results steady." },
    ],
    idealFor: ["Consumer brands", "Products with visual appeal", "Brands targeting Gen Z & Millennials"],
    cta: "Start on TikTok",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
