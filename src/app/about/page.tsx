import { Handshake, Target, Lightbulb, ShieldCheck, Layers, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FounderSection from "@/components/about/FounderSection";
import CTASection from "@/components/home/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { author, site } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Markozy: Digital Growth Agency in Malaysia",
  description:
    "Meet Markozy, a Malaysian digital growth agency led by Hasan Murad Munna. Our mission, values and how we help SMEs grow with SEO, automation and ads.",
  path: "/about",
  imageLabel: "About us",
});

const values = [
  { icon: Target, title: "Outcomes over output", text: "We measure success by your growth — leads, sales and efficiency — not by hours logged or reports sent." },
  { icon: ShieldCheck, title: "Radical honesty", text: "Real numbers, realistic timelines and clear recommendations, even when the answer is 'not yet'." },
  { icon: Layers, title: "Integrated thinking", text: "Web, search, ads and automation designed as one system, not six disconnected projects." },
  { icon: Lightbulb, title: "Curiosity", text: "We test, learn and stay ahead of platform changes so you don't have to." },
  { icon: Handshake, title: "Partnership", text: "We work as an extension of your team, with shared goals and open communication." },
  { icon: Users, title: "Craft", text: "Senior-level care on every detail, from a headline to a webhook." },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: author.name,
  jobTitle: author.role,
  image: `${site.url}${author.photo.src}`,
  url: `${site.url}/about`,
  description: author.shortBio,
  knowsAbout: author.knowsAbout,
  alumniOf: { "@type": "CollegeOrUniversity", name: author.alumniOf },
  worksFor: { "@id": `${site.url}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <JsonLd data={personJsonLd} />
      <PageHero
        eyebrow="About us"
        title="A Growth Partner for Malaysian SMEs."
        highlight={["Growth", "Partner"]}
        description="Markozy gives ambitious Malaysian businesses the digital capabilities of a larger in-house team (strategy, engineering, creative and media) without the overhead."
        crumbs={[{ label: "About" }]}
      />

      <FounderSection />

      <section aria-labelledby="mission-heading" className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHeading id="mission-heading" eyebrow="Our mission" title="Make Digital Growth Simple, Measurable and Accessible." highlight={["Simple,", "Measurable", "Accessible."]} />
          <Reveal delay={0.15}>
            <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg lg:pt-12">
              <p>
                Digital marketing has never had more potential, or more complexity. New platforms, AI tools and privacy
                changes arrive every quarter, and many SMEs end up paying for activity instead of progress.
              </p>
              <p>
                We started Markozy to change that. We keep strategy clear, execution sharp and reporting transparent, so
                you always know where your investment is going and what it&apos;s returning.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="pb-24 sm:pb-32">
        <div className="container-x">
          <SectionHeading id="values-heading" eyebrow="Our values" title="How We Work." highlight={["Work."]} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.08}>
                <div className="group glow-border h-full rounded-3xl bg-coal/60 p-8 transition-colors duration-500 hover:bg-coal">
                  <v.icon className="h-7 w-7 text-brand-soft transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
