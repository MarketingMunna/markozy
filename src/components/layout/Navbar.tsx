"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/providers/SmoothScroll";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 400 && y > prev && !open);
  });

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll + Escape to close while menu is open
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-x pt-3 sm:pt-4">
          <nav
            aria-label="Main"
            className={cn(
              "flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5",
              scrolled || open ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]" : "border border-transparent",
            )}
          >
            <Logo />
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      isActive(l.href) ? "text-white" : "text-mist hover:text-white",
                    )}
                  >
                    {isActive(l.href) && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <MagneticButton href="/contact" size="md">
                  Let&apos;s Talk <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </MagneticButton>
              </div>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div aria-hidden="true" className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
            <nav aria-label="Mobile" className="container-x relative flex flex-1 flex-col justify-center pt-24">
              <ul className="space-y-1">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={cn(
                        "flex items-baseline gap-4 py-2 font-display text-4xl font-semibold sm:text-5xl",
                        isActive(l.href) ? "text-gradient" : "text-white",
                      )}
                    >
                      <span className="text-sm font-normal text-mist">0{i + 1}</span>
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-10 space-y-4 border-t border-white/10 pt-8"
              >
                <MagneticButton href="/contact" size="lg" className="w-full">
                  Let&apos;s Talk <ArrowUpRight className="h-5 w-5" />
                </MagneticButton>
                <a href={`mailto:${site.email}`} className="block text-mist hover:text-white">
                  {site.email}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
