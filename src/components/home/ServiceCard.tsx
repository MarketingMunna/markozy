"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { staggerChild } from "@/components/ui/Reveal";
import type { Service } from "@/lib/services";

/** Card with a cursor-following spotlight and a subtle 3D tilt. */
export default function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(-200);
  const py = useMotionValue(-200);
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${px}px ${py}px, rgba(139,92,246,0.18), transparent 60%)`;

  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    px.set(x);
    py.set(y);
    ry.set((x / r.width - 0.5) * 8);
    rx.set(-(y / r.height - 0.5) * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    px.set(-200);
    py.set(-200);
  };

  return (
    <motion.article variants={staggerChild} style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group glow-border relative flex h-full flex-col overflow-hidden rounded-3xl bg-coal/70 p-7 transition-colors duration-500 hover:bg-coal sm:p-8"
      >
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
        <div className="relative flex items-start justify-between">
          <ServiceIcon k={service.key} />
          <span className="font-display text-sm text-white/30 transition-colors group-hover:text-brand-soft">{service.number}</span>
        </div>
        <h3 className="relative mt-7 font-display text-2xl font-semibold">{service.name}</h3>
        <p className="relative mt-1 text-sm font-medium text-brand-soft">{service.title}</p>
        <p className="relative mt-4 text-sm leading-relaxed text-mist">{service.description}</p>
        <ul className="relative mt-6 space-y-2.5">
          {service.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-2.5 text-sm text-white/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <div className="relative mt-auto pt-8">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white after:absolute after:inset-0 after:content-['']"
            aria-label={`Explore ${service.title}`}
          >
            <span className="relative">
              Explore {service.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-soft transition-all duration-500 group-hover:w-full" />
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}
