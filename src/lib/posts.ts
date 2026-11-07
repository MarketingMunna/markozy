export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  hue: number;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "seo-in-the-age-of-ai-search",
    title: "SEO in the Age of AI Search: What Still Matters",
    excerpt:
      "AI overviews and answer engines are changing how people search. Here's what to keep doing, what to stop, and how to stay visible.",
    category: "SEO",
    date: "2026-10-14",
    readTime: "6 min read",
    hue: 265,
    content: [
      { type: "p", text: "Search is no longer just ten blue links. AI overviews, chat-based answer engines and richer results now sit between your customer and your website. That has led many businesses to ask whether SEO is still worth the investment. The short answer: yes — but the priorities have shifted." },
      { type: "h2", text: "The fundamentals got more important, not less" },
      { type: "p", text: "AI systems still need to find, crawl and understand your content. Sites that are slow, poorly structured or full of thin pages are harder for both search engines and language models to trust. Technical health is now the entry ticket." },
      { type: "ul", items: ["Make sure important pages are indexable and internally linked", "Use structured data to describe products, services, FAQs and your organisation", "Keep Core Web Vitals in the green, especially on mobile"] },
      { type: "h2", text: "Write for questions, not just keywords" },
      { type: "p", text: "Answer engines pull from content that directly and clearly answers a question. Structure pages so each section answers one specific question in the first sentence or two, then expands with detail, examples and evidence." },
      { type: "h2", text: "Experience and expertise are your moat" },
      { type: "p", text: "Generic content is cheap to produce, so it's everywhere. What AI can't easily copy is first-hand experience: your process, your opinions, your original data and your customers' real questions. Put that front and centre." },
      { type: "h2", text: "Measure what matters" },
      { type: "p", text: "Rankings alone are a weaker signal than they used to be. Track branded search growth, conversions from organic traffic and how often you're cited in AI answers. SEO success is ultimately measured in leads and revenue, not positions." },
    ],
  },
  {
    slug: "business-workflows-to-automate-first",
    title: "5 Business Workflows Worth Automating First",
    excerpt:
      "Not every process should be automated. These five usually deliver the fastest payoff with the lowest risk.",
    category: "AI Automation",
    date: "2026-09-30",
    readTime: "5 min read",
    hue: 220,
    content: [
      { type: "p", text: "Automation is most valuable when it removes repetitive, rules-based work that slows your team down. Before you buy another tool, start with workflows that are frequent, predictable and painful. Here are five we recommend looking at first." },
      { type: "h2", text: "1. Lead capture and instant response" },
      { type: "p", text: "Speed matters. An automation that captures leads from every channel, logs them in your CRM and sends a helpful first response within seconds is one of the highest-leverage systems a business can build." },
      { type: "h2", text: "2. Lead qualification" },
      { type: "p", text: "An AI assistant on your website or WhatsApp can ask the right questions, answer FAQs and route serious enquiries to the right person — so your sales team spends time on conversations that matter." },
      { type: "h2", text: "3. Follow-up sequences" },
      { type: "p", text: "Most deals are lost to silence, not rejection. Automated, personalised follow-ups after a quote, call or demo keep momentum without relying on memory." },
      { type: "h2", text: "4. Reporting" },
      { type: "p", text: "Pulling numbers from five platforms into a spreadsheet every Monday is a perfect candidate for automation. Connect your sources to a live dashboard and reclaim those hours." },
      { type: "h2", text: "5. Document processing" },
      { type: "p", text: "Invoices, order forms and applications can be read, classified and entered into your systems with AI — with a human review step for anything unusual." },
      { type: "h2", text: "Start small, then scale" },
      { type: "ul", items: ["Pick one workflow and document how it runs today", "Automate the most repetitive steps first", "Add monitoring and alerts so failures never go unnoticed", "Expand once the first automation is stable"] },
    ],
  },
  {
    slug: "meta-vs-google-vs-tiktok-ads",
    title: "Meta vs Google vs TikTok Ads: Choosing the Right Channel",
    excerpt:
      "Each platform plays a different role in the buyer journey. Here's a practical way to decide where your next ad budget should go.",
    category: "Paid Media",
    date: "2026-09-12",
    readTime: "7 min read",
    hue: 300,
    content: [
      { type: "p", text: "There is no single 'best' ad platform. Google, Meta and TikTok each reach people in a different mindset, and the right mix depends on your product, your margins and how people already look for what you sell." },
      { type: "h2", text: "Google Ads: capture existing demand" },
      { type: "p", text: "People on Google are actively searching. If customers already type in what you offer, Search campaigns put you in front of them at the moment of highest intent. It's usually the first channel to test for service businesses and established product categories." },
      { type: "h2", text: "Meta Ads: create and nurture demand" },
      { type: "p", text: "Facebook and Instagram excel at showing people something they didn't know they wanted. Strong creative and a clear offer are essential. Meta is also powerful for retargeting visitors who didn't convert the first time." },
      { type: "h2", text: "TikTok Ads: earn attention with native creative" },
      { type: "p", text: "TikTok rewards content that feels like it belongs in the feed. Creator-style videos, quick hooks and authentic demonstrations tend to outperform polished brand ads. It's especially strong for visual, consumer-facing products." },
      { type: "h2", text: "A simple decision framework" },
      { type: "ul", items: ["If people already search for your solution, start with Google Search", "If your product needs to be seen to be wanted, test Meta and TikTok", "If you have strong creative capacity, TikTok can open new audiences", "Whatever you choose, set up accurate conversion tracking first"] },
      { type: "p", text: "Most growing brands end up using a combination — Google to capture demand, Meta and TikTok to create it — with consistent tracking so budget can move to wherever returns are strongest." },
    ],
  },
  {
    slug: "what-makes-a-business-website-convert",
    title: "What Makes a Business Website Convert",
    excerpt:
      "Beautiful design isn't enough. These are the principles that turn visitors into enquiries and customers.",
    category: "Web Development",
    date: "2026-08-26",
    readTime: "5 min read",
    hue: 250,
    content: [
      { type: "p", text: "A website can look stunning and still fail to generate business. Conversion comes from clarity, speed and trust working together. Here are the principles we build every site around." },
      { type: "h2", text: "Clarity in five seconds" },
      { type: "p", text: "A visitor should understand what you do, who it's for and what to do next within a few seconds of landing. Lead with the outcome you deliver, not your company history." },
      { type: "h2", text: "Speed is a feature" },
      { type: "p", text: "Every extra second of load time costs attention. Optimised images, modern frameworks and lean code keep pages fast — which helps both conversions and search rankings." },
      { type: "h2", text: "One clear next step" },
      { type: "p", text: "Too many options create hesitation. Each page should have a primary action — book a call, request a quote, buy now — repeated at natural decision points." },
      { type: "h2", text: "Trust signals in the right places" },
      { type: "ul", items: ["Show real work and real reviews — never invented ones", "Make contact details easy to find", "Explain your process so buyers know what happens next", "Use secure, accessible forms with clear validation"] },
      { type: "h2", text: "Measure and iterate" },
      { type: "p", text: "Launch is the beginning. Analytics, heatmaps and conversion tracking show where visitors hesitate, so you can keep improving the experience over time." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
