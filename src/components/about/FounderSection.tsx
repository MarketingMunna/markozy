import Image from "next/image";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { author } from "@/lib/site";

/** Founder profile with photo (public/team/hasan-murad-munna.jpg). */
export default function FounderSection({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-labelledby="founder-heading" className="relative py-24 sm:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <figure className="glow-border relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] bg-coal/70">
            <Image
              src={author.photo.src}
              alt={`${author.name}, ${author.role} at Markozy`}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 100vw"
              className="object-cover object-top"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent px-6 pb-6 pt-16">
              <p className="font-display text-xl font-semibold">{author.name}</p>
              <p className="mt-1 text-sm text-white/80">{author.role}</p>
            </figcaption>
          </figure>
        </Reveal>
        <div className="lg:col-span-8">
          <SectionHeading
            id="founder-heading"
            eyebrow="Who you'll work with"
            title="Led by a Practitioner, Not a Sales Team."
            highlight={["Practitioner,"]}
          />
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mist sm:text-lg">
              {(compact ? [author.shortBio] : author.bio).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              <li className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-coal/60 p-4 text-sm text-white/90">
                <Briefcase className="h-5 w-5 shrink-0 text-brand-soft" aria-hidden="true" /> 6 years in digital marketing
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-coal/60 p-4 text-sm text-white/90">
                <GraduationCap className="h-5 w-5 shrink-0 text-brand-soft" aria-hidden="true" /> Master&apos;s by Research, {author.alumniOf}
              </li>
            </ul>
            {compact && (
              <div className="mt-10">
                <MagneticButton href="/about" variant="outline">
                  More about Markozy <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
