"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

const styles = {
  primary:
    "bg-gradient-to-r from-brand-deep via-brand to-brand-soft text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.8)] hover:shadow-[0_14px_50px_-8px_rgba(139,92,246,1)]",
  ghost: "glass text-white hover:bg-white/10",
  outline: "border border-white/15 text-white hover:border-brand-soft/70 hover:bg-brand/10",
};

export default function MagneticButton({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-[box-shadow,background-color,border-color] duration-300",
    size === "lg" ? "h-14 px-7 text-base" : "h-11 px-5 text-sm",
    styles[variant],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  return (
    <motion.span
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
            {inner}
          </a>
        ) : (
          <Link href={href} className={classes} aria-label={ariaLabel}>
            {inner}
          </Link>
        )
      ) : (
        <button type={type} disabled={disabled} onClick={onClick} className={classes} aria-label={ariaLabel}>
          {inner}
        </button>
      )}
    </motion.span>
  );
}
