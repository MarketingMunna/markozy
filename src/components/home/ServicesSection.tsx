"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerParent } from "@/components/ui/Reveal";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";

export default function ServicesSection({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-40 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Six Services. One Growth Engine."
            highlight={["Growth", "Engine."]}
            description="Each service is powerful on its own. Together, they form an integrated system where your website, search presence, ads and automation feed each other."
          />
          {showAllLink && (
            <div className="shrink-0">
              <MagneticButton href="/services" variant="outline">
                All services <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          )}
        </div>
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
