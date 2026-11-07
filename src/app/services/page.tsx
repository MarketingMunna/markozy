import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ServiceVisual from "@/components/ui/ServiceVisual";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import Process from "@/components/home/Process";
import CTASection from "@/components/home/CTASection";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SEO, AI automation, website development, Meta Ads, Google Ads and TikTok Ads — integrated digital growth services from Markozy.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything You Need to Grow Online."
        highlight={["Grow", "Online."]}
        description="Six specialist services, one integrated team. Pick what you need today and add more as you scale."
        crumbs={[{ label: "Services" }]}
      >
        <Reveal immediate delay={0.6}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className="glass inline-flex rounded-full px-4 py-2 text-sm text-white/90 transition-colors hover:bg-brand/20">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHero>

      <div className="container-x space-y-24 py-16 sm:space-y-32 sm:py-24">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-title`} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
              <ServiceVisual k={s.key} />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group flex items-center gap-4">
                <ServiceIcon k={s.key} />
                <span className="font-display text-sm text-white/30">{s.number} / 06</span>
              </div>
              <h2 id={`${s.slug}-title`} className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                {s.name} <span className="block text-xl font-medium text-brand-soft sm:text-2xl">{s.title}</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mist">{s.longDescription}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <MagneticButton href={`/services/${s.slug}`}>
                  Explore {s.name} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </MagneticButton>
                <Link href={`/contact?service=${encodeURIComponent(s.name)}`} className="text-sm font-medium text-mist underline-offset-4 hover:text-white hover:underline">
                  {s.cta}
                </Link>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      <Process />
      <CTASection />
    </>
  );
}
