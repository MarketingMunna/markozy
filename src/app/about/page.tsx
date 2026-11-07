import type { Metadata } from "next";
import { Handshake, Target, Lightbulb, ShieldCheck, Layers, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import AboutSection from "@/components/home/AboutSection";
import WhyChoose from "@/components/home/WhyChoose";
import Process from "@/components/home/Process";
import CTASection from "@/components/home/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Markozy is a digital growth partner that combines technology, creativity and performance marketing to help ambitious brands grow.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Outcomes over output", text: "We measure success by your growth — leads, sales and efficiency — not by hours logged or reports sent." },
  { icon: ShieldCheck, title: "Radical honesty", text: "Real numbers, realistic timelines and clear recommendations, even when the answer is 'not yet'." },
  { icon: Layers, title: "Integrated thinking", text: "Web, search, ads and automation designed as one system, not six disconnected projects." },
  { icon: Lightbulb, title: "Curiosity", text: "We test, learn and stay ahead of platform changes so you don't have to." },
  { icon: Handshake, title: "Partnership", text: "We work as an extension of your team, with shared goals and open communication." },
  { icon: Users, title: "Craft", text: "Senior-level care on every detail, from a headline to a webhook." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We Build. We Automate. We Grow."
        highlight={["Build.", "Automate.", "Grow."]}
        description="Markozy exists to give ambitious businesses the digital capabilities of a large in-house team — strategy, engineering, creative and media — without the overhead."
        crumbs={[{ label: "About" }]}
      />

      <AboutSection />

      <section aria-labelledby="mission-heading" className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHeading id="mission-heading" eyebrow="Our mission" title="Make Digital Growth Simple, Measurable and Accessible." highlight={["Simple,", "Measurable", "Accessible."]} />
          <Reveal delay={0.15}>
            <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg lg:pt-12">
              <p>
                Digital marketing has never had more potential — or more complexity. New platforms, AI tools and privacy
                changes arrive every quarter. Many businesses end up paying for activity instead of progress.
              </p>
              <p>
                We started Markozy to change that. Our team blends developers, automation engineers, creatives and media
                buyers who share one scoreboard: your growth. We keep strategy clear, execution sharp and reporting
                transparent, so you always know where your investment is going and what it&apos;s returning.
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

      <WhyChoose />
      <Process />
      <CTASection />
    </>
  );
}
