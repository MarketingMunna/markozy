import { ArrowUpRight, MessageCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";

export default function CTASection({
  title = "Let's Build Your Next Stage of Growth.",
  text = "Tell us where you want to go. We'll come back with a clear, honest plan to get there — no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-label="Get in touch" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="noise relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-deep/60 via-coal to-ink px-6 py-16 text-center sm:px-12 sm:py-24">
          <div aria-hidden="true" className="absolute left-1/2 top-0 h-80 w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/40 blur-[100px]" />
          <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative mx-auto max-w-3xl">
            <TextReveal as="h2" text={title} highlight={["Growth."]} className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl" />
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-base text-mist sm:text-lg">{text}</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <MagneticButton href="/contact" size="lg">
                  Book a Free Consultation <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </MagneticButton>
                <MagneticButton href={whatsappLink()} external variant="ghost" size="lg">
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
