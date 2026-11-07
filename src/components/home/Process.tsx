"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Lightbulb, Hammer, Rocket, Gauge, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { icon: Search, title: "Discover", text: "We dig into your business, audience, competitors and current performance to find the real opportunities." },
  { icon: Lightbulb, title: "Strategize", text: "A clear roadmap: channels, priorities, budgets, KPIs and the order we'll tackle them in." },
  { icon: Hammer, title: "Build", text: "Websites, tracking, automations and creative — the foundations that make growth measurable." },
  { icon: Rocket, title: "Launch", text: "Campaigns and systems go live with QA, monitoring and a clear testing plan." },
  { icon: Gauge, title: "Optimize", text: "Weekly analysis and iteration on creative, targeting, pages and workflows." },
  { icon: TrendingUp, title: "Scale", text: "We double down on what works and expand into new channels and markets." },
];

/** Vertical timeline whose line draws and steps light up as you scroll (GSAP ScrollTrigger). */
export default function Process() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(".process-line-fill", { scaleY: 1 });
        gsap.set(".process-step", { opacity: 1, y: 0 });
        gsap.set(".process-dot", { backgroundColor: "#8b5cf6", scale: 1 });
        return;
      }
      gsap.fromTo(
        ".process-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".process-list", start: "top 65%", end: "bottom 65%", scrub: 0.6 },
        },
      );
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((el) => {
        const dot = el.querySelector(".process-dot");
        gsap.fromTo(el, { opacity: 0.25, y: 40 }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none reverse" },
        });
        if (dot) {
          gsap.fromTo(dot, { backgroundColor: "#1a1a28", scale: 0.8 }, {
            backgroundColor: "#8b5cf6",
            scale: 1,
            boxShadow: "0 0 30px rgba(139,92,246,0.9)",
            scrollTrigger: { trigger: el, start: "top 65%", toggleActions: "play none none reverse" },
          });
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section aria-labelledby="process-heading" className="relative overflow-x-clip py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[120px]" />
      <div ref={root} className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="process-heading"
              eyebrow="Our process"
              title="From First Call to Compounding Growth."
              highlight={["Compounding", "Growth."]}
              description="A proven six-step framework that keeps every project focused, measurable and moving forward."
            />
          </div>
        </div>
        <div className="process-list relative lg:col-span-7">
          <div aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 w-px bg-white/10 sm:left-[27px]">
            <div className="process-line-fill h-full w-full origin-top bg-gradient-to-b from-brand-soft via-brand to-brand-deep" />
          </div>
          <ol className="relative">
          {steps.map((s, i) => (
            <li key={s.title} className="process-step relative flex gap-6 pb-14 last:pb-0 sm:gap-8">
              <div className="process-dot relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-coal-2 sm:h-14 sm:w-14">
                <s.icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-soft">Step 0{i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist sm:text-base">{s.text}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
