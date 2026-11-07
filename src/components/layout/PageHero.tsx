import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs = [],
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string[];
  description?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="noise relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-70" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
      <div className="container-x relative">
        {crumbs.length > 0 && (
          <Reveal immediate y={10}>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-mist">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3 w-3" aria-hidden="true" />
                    {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}
        <Reveal immediate delay={0.15} y={14}><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <TextReveal
          as="h1"
          immediate
          delay={0.3}
          text={title}
          highlight={highlight}
          className="mt-6 max-w-5xl font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl"
        />
        {description && (
          <Reveal immediate delay={0.5} y={20}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{description}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
