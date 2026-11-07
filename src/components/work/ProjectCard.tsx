"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectArt from "@/components/ui/ProjectArt";
import { DemoBadge } from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link href={`/work/${project.slug}`} data-cursor="View" className="block" aria-label={`View case study: ${project.name} (demo project)`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
          <motion.div style={{ y: imgY }} className="absolute -inset-[10%] transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105">
            <ProjectArt project={project} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <DemoBadge>Fictional demo project</DemoBadge>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span key={s} className="glass rounded-full px-3 py-1 text-xs text-white/90">{s}</span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">{project.industry}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{project.name}</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist">{project.summary}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
              View Case Study
              <span className="h-px w-6 bg-brand-soft transition-all duration-500 group-hover:w-12" />
            </span>
          </div>
          <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
