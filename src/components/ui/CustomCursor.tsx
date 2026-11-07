"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Desktop-only cursor: a dot plus a trailing ring that grows over interactive elements. */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "a, button, [role='button'], [data-cursor], select, label",
      );
      setHovering(Boolean(target));
      setLabel(target?.dataset.cursor ?? null);
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          width: label ? 84 : hovering ? 52 : 34,
          height: label ? 84 : hovering ? 52 : 34,
          opacity: visible ? 1 : 0,
          backgroundColor: label ? "rgba(139,92,246,0.9)" : hovering ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-soft/60 text-[11px] font-semibold uppercase tracking-wider text-white"
      >
        {label}
      </motion.div>
      <motion.div
        style={{ x, y }}
        animate={{ opacity: visible && !label ? 1 : 0, scale: hovering ? 0.5 : 1 }}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </div>
  );
}
