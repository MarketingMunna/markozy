import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id="mk-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A78BFA" />
          <stop offset="0.55" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#5B21B6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#mk-g)" />
      <rect x="1.5" y="1.5" width="37" height="37" rx="10.5" fill="none" stroke="rgba(255,255,255,0.35)" />
      {/* An "M" whose last stroke becomes a growth arrow */}
      <path
        d="M10 28V13.5l7.2 8.6 5.6-6.6"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22.8 15.5 30 9" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M24.5 8.5H30.5V14.5" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 20v8" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Markozy home" className={cn("group inline-flex items-center gap-2.5", className)}>
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105" />
      <span className="font-display text-lg font-bold tracking-[0.18em] text-white">MARKOZY</span>
    </Link>
  );
}
