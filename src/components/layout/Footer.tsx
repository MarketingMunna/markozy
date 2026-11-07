import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";
import SocialIcons from "@/components/ui/SocialIcons";
import { navLinks, site, whatsappLink, formatPhone } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-coal/40">
      <div aria-hidden="true" className="absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              {site.positioning} We combine technology, creativity and performance marketing to help ambitious brands grow
              — built, automated and scaled.
            </p>
            <p className="mt-6 font-display text-sm font-medium tracking-wide text-brand-soft">{site.tagline}</p>
            <SocialIcons className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Services</h2>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-sm text-mist transition-colors hover:text-white">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Navigate</h2>
              <ul className="mt-5 space-y-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-mist transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
              <ul className="mt-5 space-y-4 text-sm text-mist">
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                    <Mail className="h-4 w-4 text-brand-soft" aria-hidden="true" /> {site.email}
                  </a>
                </li>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                    <MessageCircle className="h-4 w-4 text-brand-soft" aria-hidden="true" /> WhatsApp {formatPhone(site.whatsapp)}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" aria-hidden="true" />
                  <address className="not-italic leading-relaxed">{site.location}</address>
                </li>
              </ul>
              <Link href="/contact" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                Start a project
                <ArrowUpRight className="h-4 w-4 text-brand-soft transition-transform group-hover:rotate-45" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <p aria-hidden="true" className="mt-16 select-none text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-white/[0.03] lg:text-[12rem]">
          MARKOZY
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-mist sm:flex-row">
          <p>© {year} Markozy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
