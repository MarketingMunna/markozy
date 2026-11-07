import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactForm from "./ContactForm";
import { formatPhone, site, whatsappLink } from "@/lib/site";

export default function ContactSection({ defaultService, headingAs = "h2" }: { defaultService?: string; headingAs?: "h1" | "h2" }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute left-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[120px]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-heading"
            as={headingAs}
            eyebrow="Contact"
            title="Ready to Grow Your Business?"
            highlight={["Grow"]}
            description="Share a few details about your goals and we'll come back with ideas, a recommended approach and next steps."
          />
          <Reveal delay={0.15}>
            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"><Mail className="h-5 w-5 text-brand-soft" aria-hidden="true" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mist">Email</p>
                  <a href={`mailto:${site.email}`} className="font-medium hover:text-brand-soft">{site.email}</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"><MessageCircle className="h-5 w-5 text-brand-soft" aria-hidden="true" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mist">WhatsApp</p>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand-soft">{formatPhone(site.whatsapp)}</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"><MapPin className="h-5 w-5 text-brand-soft" aria-hidden="true" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mist">Location</p>
                  <p className="font-medium">{site.location}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"><Clock className="h-5 w-5 text-brand-soft" aria-hidden="true" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mist">Response time</p>
                  <p className="font-medium">{site.responseTime}</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.06] p-6">
              <p className="font-display text-lg font-semibold">Prefer a quick chat?</p>
              <p className="mt-2 text-sm text-mist">Message us on WhatsApp and talk directly with a strategist.</p>
              <div className="mt-5">
                <MagneticButton href={whatsappLink()} external variant="outline" className="border-emerald-400/40 hover:border-emerald-300 hover:bg-emerald-400/10">
                  <MessageCircle className="h-4 w-4 text-emerald-300" /> Chat on WhatsApp
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="glow-border rounded-[2rem] bg-coal/70 p-6 sm:p-10">
            <ContactForm defaultService={defaultService} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
