import { Search, BrainCircuit, CodeXml, Infinity as InfinityIcon, MousePointerClick, Clapperboard, type LucideIcon } from "lucide-react";
import type { ServiceKey } from "@/lib/services";
import { cn } from "@/lib/utils";

export const serviceIcons: Record<ServiceKey, LucideIcon> = {
  seo: Search,
  ai: BrainCircuit,
  web: CodeXml,
  meta: InfinityIcon,
  google: MousePointerClick,
  tiktok: Clapperboard,
};

/** Gradient tile with a rotating conic ring that speeds up on parent hover (.group). */
export default function ServiceIcon({ k, className, size = "md" }: { k: ServiceKey; className?: string; size?: "md" | "lg" }) {
  const Icon = serviceIcons[k];
  const dim = size === "lg" ? "h-20 w-20 rounded-3xl" : "h-14 w-14 rounded-2xl";
  return (
    <div className={cn("relative isolate flex shrink-0 items-center justify-center", dim, className)}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute -inset-px -z-10 animate-spin-slow opacity-60 transition-opacity duration-500 group-hover:opacity-100 [animation-duration:8s] group-hover:[animation-duration:2.5s]",
          dim,
        )}
        style={{ background: "conic-gradient(from 0deg, transparent 0 60%, #A78BFA 80%, transparent 100%)" }}
      />
      <div className={cn("absolute inset-[1px] -z-10 bg-gradient-to-br from-coal-2 to-ink", dim)} />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[inherit] bg-brand/20 blur-xl transition-opacity duration-500 group-hover:bg-brand/40"
      />
      <Icon
        className={cn(
          "text-brand-soft transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:text-white",
          size === "lg" ? "h-9 w-9" : "h-6 w-6",
        )}
        strokeWidth={1.6}
        aria-hidden="true"
      />
    </div>
  );
}
