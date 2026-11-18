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
  /** Keyword-led <title> for the service page. */
  seoTitle: string;
  /** What happens in month 1, by month 3 and by month 6. Specific to this service, not the generic process. */
  timeline: { phase: string; text: string }[];
  faqs: { q: string; a: string }[];
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
      "Organic traffic that keeps working when ad spend stops",
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
    seoTitle: "SEO Services in Malaysia: Technical, Local & Content SEO",
    timeline: [
      { phase: "Month 1", text: "Technical audit, keyword and intent research, Google Search Console and GA4 checks, and a prioritised fix list." },
      { phase: "By month 3", text: "Technical fixes and on-page updates live on your key pages, Google Business Profile optimised, first content pieces published." },
      { phase: "By month 6", text: "A steady publishing rhythm, internal linking in place, and monthly reports tracking rankings, organic traffic and enquiries." },
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Technical fixes can lift visibility within weeks, but most sites see meaningful organic growth after three to six months of consistent work. Competitive keywords take longer." },
      { q: "Do you do local SEO for Malaysian businesses?", a: "Yes. We optimise your Google Business Profile, local citations and location pages so you show up for searches in your city or across Malaysia." },
      { q: "Can you guarantee first place on Google?", a: "No one can honestly guarantee rankings, because Google controls them. We commit to the work, the process and transparent reporting on what it achieves." },
      { q: "Does SEO still matter with AI search?", a: "Yes. AI overviews and answer engines still rely on pages they can crawl and trust, so technical health, clear structure and expert content matter more than before." },
    ],
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
    seoTitle: "AI Automation Services in Malaysia: Chatbots, CRM & Workflows",
    timeline: [
      { phase: "Month 1", text: "Process mapping workshop, a ranked list of automation opportunities, and the first workflow built and tested." },
      { phase: "By month 3", text: "Lead capture, WhatsApp or website assistant and follow-up sequences running, with error alerts and documentation." },
      { phase: "By month 6", text: "Reporting and back-office automations added, team trained, and a review of hours saved and response times." },
    ],
    faqs: [
      { q: "Which tools do you build automations with?", a: "We use n8n, Make, Zapier and custom code, connected to the CRM, forms, spreadsheets and messaging tools you already use." },
      { q: "Can you build a WhatsApp chatbot?", a: "Yes. We build WhatsApp and website assistants that answer common questions, qualify leads and pass serious enquiries to your team." },
      { q: "What happens if an automation breaks?", a: "Every workflow we hand over includes monitoring and alerts, plus documentation so your team knows what each step does." },
      { q: "Is my customer data safe?", a: "We design workflows to keep personal data to a minimum, use the access controls of each platform, and follow Malaysia's PDPA principles." },
    ],
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
      "Fast load times, checked against Core Web Vitals before launch",
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
    seoTitle: "Website Development in Malaysia: Business Sites & E-commerce",
    timeline: [
      { phase: "Month 1", text: "Discovery, sitemap, wireframes and visual design direction agreed with you before any build starts." },
      { phase: "By month 3", text: "Site built, content loaded, tracking set up, speed and accessibility tested, then launched." },
      { phase: "By month 6", text: "Post-launch improvements based on analytics and user behaviour, plus ongoing updates on a care plan if you choose one." },
    ],
    faqs: [
      { q: "How long does a website take to build?", a: "A typical business website takes six to ten weeks from kick-off to launch. Larger e-commerce builds take longer depending on products and integrations." },
      { q: "Which platform will you use?", a: "We recommend Next.js, Shopify or WordPress depending on your needs, budget and who will manage the site day to day." },
      { q: "Can I update the website myself?", a: "Yes. Every site comes with an editor your team can use, and we include a short training session at handover." },
      { q: "Do you connect Malaysian payment gateways?", a: "Yes. We integrate common Malaysian payment options such as FPX and e-wallets through providers like Stripe, Billplz or iPay88." },
    ],
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
    seoTitle: "Meta Ads Agency in Malaysia: Facebook & Instagram Advertising",
    timeline: [
      { phase: "Month 1", text: "Account and tracking audit, Pixel and Conversions API setup, audience plan and the first round of creative tests." },
      { phase: "By month 3", text: "Winning hooks and offers identified, retargeting running, and budget shifted toward the best-performing ad sets." },
      { phase: "By month 6", text: "A steady creative testing cycle, scaling rules in place, and reporting on cost per lead or ROAS against your targets." },
    ],
    faqs: [
      { q: "What budget do I need for Meta Ads?", a: "It depends on your goals and market. We will recommend a test budget after reviewing your offer, margins and past results, and we never ask you to commit to spend you can't track." },
      { q: "Do you make the ad creative?", a: "Yes. We produce static, carousel and short-form video ads, including UGC-style content, with several hooks per concept for testing." },
      { q: "Can ads send leads to WhatsApp?", a: "Yes. Click-to-WhatsApp campaigns work well in Malaysia, and we can connect them to your CRM so no lead is missed." },
      { q: "Who owns the ad account?", a: "You do. We work inside your Business Manager with partner access, so your data and history stay with you." },
    ],
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
      "Measurable results as soon as conversion data comes in",
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
    seoTitle: "Google Ads Agency in Malaysia: Search, Shopping & YouTube",
    timeline: [
      { phase: "Month 1", text: "Account audit, keyword research, conversion tracking through GA4 and Tag Manager, and restructured Search campaigns." },
      { phase: "By month 3", text: "Negative keyword lists refined, ad copy tested, and Performance Max or Shopping added where it fits." },
      { phase: "By month 6", text: "Bidding tuned to real conversion data, landing page improvements made, and remarketing on Display and YouTube." },
    ],
    faqs: [
      { q: "How quickly do Google Ads bring leads?", a: "Search campaigns can bring enquiries within days of launch. Results then improve over the first months as we gather conversion data and cut wasted spend." },
      { q: "Do you take a percentage of ad spend?", a: "We explain our fee structure up front during the consultation, and your ad spend is always paid directly to Google from your own account." },
      { q: "Can you fix an account someone else set up?", a: "Yes. We start with an audit, keep what works and restructure what doesn't, without losing your account history." },
      { q: "Do you set up conversion tracking?", a: "Always. We set up GA4, Google Tag Manager and enhanced conversions so every campaign is judged on real leads and sales." },
    ],
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
    seoTitle: "TikTok Ads Agency in Malaysia: Spark Ads, Creators & TikTok Shop",
    timeline: [
      { phase: "Month 1", text: "Account, Pixel and Events API setup, trend and competitor research, and the first batch of native video concepts." },
      { phase: "By month 3", text: "Creator partnerships running, Spark Ads boosting the best posts, and a library of proven hooks." },
      { phase: "By month 6", text: "A regular creative refresh cycle to manage ad fatigue, plus TikTok Shop or conversion campaigns scaled where they pay off." },
    ],
    faqs: [
      { q: "Is TikTok right for my business?", a: "TikTok works best for visual, consumer-facing products and brands willing to show up in a native, less polished style. We will tell you honestly if another channel fits better." },
      { q: "Do you work with Malaysian creators?", a: "Yes. We source, brief and manage local creators for authentic UGC in English, Malay or other languages your audience uses." },
      { q: "Can you help with TikTok Shop?", a: "Yes. We support product showcases, live shopping and GMV-focused campaigns for TikTok Shop sellers." },
      { q: "How often does TikTok creative need refreshing?", a: "Often. Ads tire quickly on TikTok, so we plan new hooks and variations every few weeks to keep results steady." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
