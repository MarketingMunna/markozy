"use client";

import { motion } from "framer-motion";
import { Compass, ChartLine, Palette, Zap, Rocket, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerChild, staggerParent } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const reasons = [
  { icon: Compass, title: "Strategy-First Approach", text: "We understand your market, margins and goals before touching a campaign or a line of code." },
  { icon: ChartLine, title: "Data-Driven Decisions", text: "Clean tracking and real numbers guide every decision — not hunches or vanity metrics." },
  { icon: Palette, title: "Creative Execution", text: "Design and content crafted to stand out in crowded feeds and competitive search results." },
  { icon: Zap, title: "Smart Automation", text: "We automate repetitive work so your team and budget focus on what moves the needle." },
  { icon: Rocket, title: "Performance-Focused Growth", text: "Campaigns optimised continuously against the outcomes that matter to your business." },
  { icon: Eye, title: "Transparent Reporting", text: "Clear dashboards and plain-language reports. You always know what's working and why." },
];

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Markozy"
          title="Built Different. Measured Honestly."
          highlight={["Different.", "Honestly."]}
          description="We work as an extension of your team — accountable for results and open about how we get there."
          align="center"
        />
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((r, i) => (
            <motion.li key={r.title} variants={staggerChild} className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-coal sm:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(400px_circle_at_0%_0%,rgba(139,92,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-brand/50 group-hover:bg-brand/15">
                    <r.icon className="h-5 w-5 text-brand-soft transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  </span>
                  <span className={cn("font-display text-sm text-white/20")}>0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{r.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
