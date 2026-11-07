"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading, { DemoBadge } from "@/components/ui/SectionHeading";

/**
 * PLACEHOLDER TESTIMONIALS — not real reviews.
 * Replace with genuine, approved client quotes before launch.
 */
const testimonials = [
  {
    quote: "Placeholder testimonial: this is where a client will describe how Markozy's SEO and website work changed the way customers find them.",
    name: "Client Name",
    role: "Founder, Example Company",
    service: "SEO & Website",
  },
  {
    quote: "Placeholder testimonial: a quote about how AI automation saved the team time on lead follow-up and reporting will appear here.",
    name: "Client Name",
    role: "Operations Lead, Example Company",
    service: "AI Automation",
  },
  {
    quote: "Placeholder testimonial: feedback on Meta and TikTok creative strategy, testing and transparent reporting will be shown here.",
    name: "Client Name",
    role: "Marketing Manager, Example Brand",
    service: "Meta & TikTok Ads",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[index];
  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section aria-labelledby="testimonials-heading" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionHeading id="testimonials-heading" eyebrow="Testimonials" title="What Partners Will Say." highlight={["Partners"]} align="center" />
          <DemoBadge className="mt-6">Demo content — placeholder testimonials, not real client reviews</DemoBadge>
        </div>

        <div
          className="glow-border relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[2rem] bg-coal/60 px-6 py-12 sm:px-14 sm:py-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Placeholder testimonials"
        >
          <div aria-hidden="true" className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/20 blur-3xl" />
          <Quote className="relative h-10 w-10 text-brand" aria-hidden="true" />
          <div className="relative min-h-[220px] sm:min-h-[180px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-deep font-display font-semibold">
                    ?
                  </span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className="block text-sm text-mist">{t.role} · {t.service}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="relative mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-brand-soft" : "w-2 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand hover:bg-brand/20">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand hover:bg-brand/20">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
