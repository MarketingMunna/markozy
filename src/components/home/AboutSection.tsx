"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Palette, TrendingUp, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const pillars = [
  { icon: Cpu, title: "Technology", text: "Modern websites, data pipelines and AI automation that make growth repeatable." },
  { icon: Palette, title: "Creativity", text: "Distinctive brand experiences and ad creative people actually stop to watch." },
  { icon: TrendingUp, title: "Performance", text: "Every campaign tied to clear goals, honest tracking and continuous optimisation." },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <section id="about" ref={ref} aria-labelledby="about-heading" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="about-heading"
            eyebrow="About Markozy"
            title="More Than an Agency. Your Growth Partner."
            highlight={["Growth", "Partner"]}
          />
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mist sm:text-lg">
              <p>
                Most businesses juggle a web developer, an ads freelancer, an SEO consultant and a tangle of tools that
                don&apos;t talk to each other. Markozy brings it all under one roof — so strategy, creative and technology
                pull in the same direction.
              </p>
              <p>
                We start with your business goals, not a service menu. Then we build the digital foundations, automate the
                busywork and run performance campaigns that compound — with transparent reporting at every step.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <MagneticButton href="/about" variant="outline">
                Our approach <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Parallax visual */}
        <div className="relative h-[460px] sm:h-[520px]" aria-hidden="true">
          <motion.div style={{ y: y1, rotate }} className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 sm:h-96 sm:w-96">
            <div className="h-full w-full rounded-[40%] bg-[conic-gradient(from_120deg,#8b5cf6,#2e1065,#a78bfa,#4c1d95,#8b5cf6)] opacity-80 blur-[2px] animate-spin-slow" />
            <div className="absolute inset-6 rounded-[38%] bg-ink/80 backdrop-blur-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-display text-6xl font-bold text-gradient sm:text-7xl">M</p>
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute inset-0">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={[
                  "glass absolute flex items-center gap-3 rounded-2xl px-4 py-3",
                  i === 0 && "left-0 top-6",
                  i === 1 && "right-0 top-1/2 -translate-y-1/2",
                  i === 2 && "bottom-6 left-6",
                ].filter(Boolean).join(" ")}
              >
                <p.icon className="h-5 w-5 text-brand-soft" />
                <span className="text-sm font-medium">{p.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container-x mt-20 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="group glow-border h-full rounded-3xl bg-coal/60 p-7 transition-colors duration-500 hover:bg-coal">
              <p.icon className="h-7 w-7 text-brand-soft transition-transform duration-500 group-hover:-translate-y-1" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
