import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ProjectCard from "@/components/work/ProjectCard";
import CTASection from "@/components/home/CTASection";
import { DemoBadge } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore how Markozy approaches growth challenges across industries through illustrative demo projects.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Ideas Engineered for Growth."
        highlight={["Growth."]}
        description="A look at how we combine strategy, technology and creative across different industries."
        crumbs={[{ label: "Our Work" }]}
      >
        <Reveal immediate delay={0.6}>
          <div className="mt-8 max-w-2xl rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-5">
            <DemoBadge>Please note</DemoBadge>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/80">
              The projects below are <strong>fictional demo concepts</strong> created to illustrate our approach. They are
              not real clients and show no real performance results. Verified client case studies will be added here with
              permission.
            </p>
          </div>
        </Reveal>
      </PageHero>

      <section aria-label="Projects" className="pb-24 sm:pb-32">
        <div className="container-x grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-24" : undefined}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Your Project Could Be Next." text="Bring us your challenge. We'll show you how we'd approach it — before you commit to anything." />
    </>
  );
}
