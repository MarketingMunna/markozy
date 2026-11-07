import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ServiceVisual from "@/components/ui/ServiceVisual";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Process from "@/components/home/Process";
import ContactSection from "@/components/contact/ContactSection";
import { getService, services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} — ${s.title}`,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.name} | Markozy`, description: s.description },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.title}
        description={service.longDescription}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.name }]}
      >
        <Reveal immediate delay={0.6}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href={`/contact?service=${encodeURIComponent(service.name)}`} size="lg">
              {service.cta} <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </MagneticButton>
            <MagneticButton href={whatsappLink(`Hi Markozy! I'm interested in ${service.name}.`)} external variant="ghost" size="lg">
              <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
            </MagneticButton>
          </div>
        </Reveal>
      </PageHero>

      <section aria-labelledby="benefits-heading" className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ServiceVisual k={service.key} />
          </Reveal>
          <div>
            <SectionHeading id="benefits-heading" eyebrow="Key benefits" title={service.tagline} />
            <ul className="mt-10 space-y-4">
              {service.benefits.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-coal/60 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/20">
                      <Check className="h-4 w-4 text-brand-soft" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-white/90 sm:text-base">{b}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="included-heading" className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading id="included-heading" eyebrow="Service details" title="What's Included." highlight={["Included."]} description={`A complete ${service.name} engagement, tailored to your goals and budget.`} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.details.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.08}>
                <div className="group glow-border h-full rounded-3xl bg-coal/60 p-7 transition-colors duration-500 hover:bg-coal">
                  <span className="font-display text-sm text-brand-soft">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/[0.07] bg-gradient-to-r from-brand/10 to-transparent p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">Ideal for</p>
                <p className="mt-2 text-white/90">{service.idealFor.join(" · ")}</p>
              </div>
              <MagneticButton href={`/contact?service=${encodeURIComponent(service.name)}`} variant="outline">
                {service.cta} <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Process />

      <section aria-labelledby="other-services-heading" className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading id="other-services-heading" eyebrow="Explore more" title="Pairs Well With." highlight={["Pairs"]} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col gap-5 rounded-3xl border border-white/[0.07] bg-coal/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-coal">
                  <ServiceIcon k={s.key} />
                  <span>
                    <span className="block font-display text-lg font-semibold">{s.name}</span>
                    <span className="mt-1 block text-xs text-mist">{s.title}</span>
                  </span>
                  <ArrowUpRight className="mt-auto h-5 w-5 text-brand-soft transition-transform group-hover:rotate-45" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection defaultService={service.name} />
    </>
  );
}
