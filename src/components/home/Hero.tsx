"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowDown, ArrowRight, BrainCircuit, CalendarCheck, ChartNoAxesColumnIncreasing, Search, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import { services } from "@/lib/services";

function SphereFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="h-[55%] w-auto aspect-square rounded-full bg-[radial-gradient(circle_at_35%_30%,#c4b5fd_0%,#8b5cf6_30%,#3b0764_70%,transparent_72%)] opacity-80 blur-[1px] animate-pulse-glow" />
    </div>
  );
}

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false, loading: SphereFallback });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function FloatCard({
  children,
  className,
  mx,
  my,
  depth,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  delay: number;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass animate-float rounded-2xl px-4 py-3 shadow-[0_20px_60px_-20px_rgba(139,92,246,0.6)]" style={{ animationDelay: `${delay}s` }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => setWebgl(hasWebGL()), []);

  const onMove = (e: MouseEvent) => {
    const r = section.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 40);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 40);
  };

  return (
    <section
      ref={section}
      onMouseMove={onMove}
      aria-labelledby="hero-title"
      className="noise relative flex min-h-[100svh] flex-col overflow-hidden pt-28"
    >
      {/* Lighting */}
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-70" />
      <div aria-hidden="true" className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-brand/25 blur-[120px]" />
      <div aria-hidden="true" className="absolute -right-20 bottom-0 h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/15 blur-[120px]" />

      {/* 3D sphere */}
      <motion.div
        style={{ y: sceneY, opacity: sceneOpacity }}
        className="pointer-events-none absolute inset-0 lg:left-[46%]"
      >
        <div className="h-full w-full scale-90 opacity-40 sm:scale-100 lg:opacity-100">
          {webgl === false ? <SphereFallback /> : webgl ? <HeroScene /> : null}
        </div>
      </motion.div>

      {/* Floating UI elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <FloatCard mx={mx} my={my} depth={0.8} delay={1.1} className="right-[30%] top-[20%] xl:right-[34%]">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/25"><Search className="h-4 w-4 text-brand-soft" /></span>
            <div>
              <p className="text-xs font-semibold text-white">SEO audit</p>
              <p className="text-[11px] text-mist">Technical scan running…</p>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-brand to-brand-soft" initial={{ width: "10%" }} animate={{ width: ["10%", "92%", "10%"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </FloatCard>

        <FloatCard mx={mx} my={my} depth={-1.2} delay={1.3} className="right-[6%] top-[20%]">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15"><BrainCircuit className="h-4 w-4 text-emerald-300" /></span>
            <div>
              <p className="text-xs font-semibold text-white">AI workflow</p>
              <p className="flex items-center gap-1.5 text-[11px] text-emerald-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> Active</p>
            </div>
          </div>
        </FloatCard>

        <FloatCard mx={mx} my={my} depth={1.4} delay={1.5} className="bottom-[22%] right-[30%]">
          <p className="text-[11px] uppercase tracking-wider text-mist">Campaign performance</p>
          <div className="mt-2 flex h-12 items-end gap-1.5">
            {[30, 45, 38, 60, 52, 75, 88].map((h, i) => (
              <motion.span key={i} className="w-3 rounded-sm bg-gradient-to-t from-brand-deep to-brand-soft" initial={{ height: "10%" }} animate={{ height: `${h}%` }} transition={{ delay: 1.6 + i * 0.08, duration: 0.8 }} />
            ))}
            <ChartNoAxesColumnIncreasing className="ml-2 h-4 w-4 self-start text-brand-soft" />
          </div>
        </FloatCard>

        <FloatCard mx={mx} my={my} depth={-0.7} delay={1.7} className="bottom-[30%] right-[5%]">
          <div className="flex items-center gap-2.5">
            <CalendarCheck className="h-4 w-4 text-brand-soft" />
            <p className="text-xs font-medium text-white">Strategy call booked</p>
          </div>
        </FloatCard>
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY }} className="container-x relative z-10 flex flex-1 flex-col justify-center pb-16">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/90"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-soft" aria-hidden="true" />
          Your Digital Growth Partner
        </motion.p>

        <TextReveal
          as="h1"
          id="hero-title"
          immediate
          delay={0.45}
          text="We Build Digital Experiences That Drive Growth."
          highlight={["Digital", "Experiences", "Growth"]}
          className="mt-7 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:max-w-[40rem] lg:text-[4.2rem] xl:max-w-3xl xl:text-[5.4rem]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
        >
          From intelligent automation to performance marketing, we help ambitious brands turn digital opportunities into
          measurable business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <MagneticButton href="#services" size="lg">
            Explore Our Services <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton href="/contact" variant="ghost" size="lg">
            Book a Free Consultation
          </MagneticButton>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 hidden w-fit items-center gap-3 text-xs uppercase tracking-[0.25em] text-mist hover:text-white sm:inline-flex"
        >
          <span className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
            <motion.span className="h-2 w-1 rounded-full bg-brand-soft" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />
          </span>
          Scroll to explore
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </motion.a>
      </motion.div>

      {/* Service marquee */}
      <div className="relative z-10 border-y border-white/[0.06] bg-ink/60 py-5 backdrop-blur-sm">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden="true">
            {[...services, ...services, ...services, ...services].map((s, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-medium text-white/70 sm:text-2xl">
                {s.title}
                <Sparkles className="h-4 w-4 text-brand" />
              </span>
            ))}
          </div>
        </div>
        <p className="sr-only">Our services: {services.map((s) => s.title).join(", ")}.</p>
      </div>
    </section>
  );
}
