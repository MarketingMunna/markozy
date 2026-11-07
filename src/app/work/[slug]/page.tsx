import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Target } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ProjectArt from "@/components/ui/ProjectArt";
import { DemoBadge } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/home/CTASection";
import { getProject, projects } from "@/lib/projects";
import { services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} (Demo Case Study)`,
    description: `Illustrative demo project: ${p.summary}`,
    alternates: { canonical: `/work/${p.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <PageHero
        eyebrow={project.industry}
        title={project.name}
        description={project.summary}
        crumbs={[{ label: "Our Work", href: "/work" }, { label: project.name }]}
      >
        <Reveal immediate delay={0.55}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DemoBadge>Fictional demo project — not a real client</DemoBadge>
            {project.services.map((s) => {
              const svc = services.find((x) => x.name === s);
              return svc ? (
                <Link key={s} href={`/services/${svc.slug}`} className="glass rounded-full px-3 py-1 text-xs text-white/90 hover:bg-brand/20">
                  {s}
                </Link>
              ) : null;
            })}
          </div>
        </Reveal>
      </PageHero>

      <div className="container-x">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10">
            <ProjectArt project={project} />
          </div>
        </Reveal>
      </div>

      <div className="container-x grid gap-16 py-20 lg:grid-cols-12 sm:py-28">
        <aside className="lg:col-span-4">
          <div className="space-y-8 lg:sticky lg:top-32">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Industry</h2>
              <p className="mt-2 font-medium">{project.industry}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Services delivered</h2>
              <ul className="mt-2 space-y-1">{project.services.map((s) => <li key={s} className="font-medium">{s}</li>)}</ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Deliverables</h2>
              <ul className="mt-2 space-y-1">{project.deliverables.map((d) => <li key={d} className="text-white/85">{d}</li>)}</ul>
            </div>
          </div>
        </aside>

        <article className="space-y-16 lg:col-span-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Project overview</h2>
            <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{project.summary}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">The challenge</h2>
            <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Our approach</h2>
            <ol className="mt-6 space-y-4">
              {project.approach.map((a, i) => (
                <li key={a} className="flex gap-4 rounded-2xl border border-white/[0.07] bg-coal/60 p-5">
                  <span className="font-display text-sm text-brand-soft">0{i + 1}</span>
                  <span className="text-white/90">{a}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Project goals</h2>
            <p className="mt-3 text-sm text-mist">Illustrative objectives for this concept — not reported results.</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.goals.map((g) => (
                <li key={g} className="glow-border rounded-2xl bg-coal/60 p-5">
                  <Target className="h-5 w-5 text-brand-soft" aria-hidden="true" />
                  <p className="mt-3 text-sm text-white/90">{g}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-5 text-sm text-amber-50/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" aria-hidden="true" />
              This case study is a fictional demonstration of Markozy&apos;s process. Company names, scenarios and goals are
              illustrative and do not represent real client performance.
            </div>
          </Reveal>
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-10 sm:flex-row">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-mist hover:text-white">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All work
            </Link>
            <Link href={`/work/${next.slug}`} className="group inline-flex items-center gap-2 text-sm font-medium">
              Next: {next.name}
              <ArrowRight className="h-4 w-4 text-brand-soft transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>

      <CTASection />
    </>
  );
}
