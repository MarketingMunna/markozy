import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/lib/projects";

export default function PortfolioSection() {
  return (
    <section aria-labelledby="work-heading" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="work-heading"
            eyebrow="Our work"
            title="Selected Projects & Concepts."
            highlight={["Projects"]}
            description="These are fictional demo projects that illustrate how we approach challenges across industries. Real client case studies will be published here with permission."
          />
          <Reveal className="shrink-0">
            <MagneticButton href="/work" variant="outline">
              View all work <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-24" : undefined}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
