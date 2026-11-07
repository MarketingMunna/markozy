import { cn } from "@/lib/utils";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string[];
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
  id?: string;
};

export default function SectionHeading({ eyebrow, title, highlight, description, align = "left", className, as = "h2", id }: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal y={16}>
        <Eyebrow className={align === "center" ? "justify-center" : undefined}>{eyebrow}</Eyebrow>
      </Reveal>
      <TextReveal
        as={as}
        id={id}
        text={title}
        highlight={highlight}
        className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
      />
      {description && (
        <Reveal delay={0.15} y={20}>
          <p className={cn("mt-6 text-base leading-relaxed text-mist sm:text-lg", align === "center" && "mx-auto max-w-2xl")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-soft", className)}>
      <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-brand-soft" />
      {children}
    </p>
  );
}

export function DemoBadge({ children = "Demo content", className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-200",
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-300" />
      {children}
    </span>
  );
}
