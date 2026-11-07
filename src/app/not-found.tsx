import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="noise relative flex min-h-[90svh] items-center overflow-hidden pt-24">
      <title>Page not found | Markozy</title>
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-70" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px]" />
      <div className="container-x relative text-center">
        <p className="font-display text-[7rem] font-bold leading-none text-gradient sm:text-[10rem]">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">This page drifted off the map.</h1>
        <p className="mx-auto mt-4 max-w-md text-mist">The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of these instead:</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="glass inline-flex rounded-full px-4 py-2 text-sm hover:bg-brand/20">{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="mt-10 inline-flex items-center gap-2 text-sm text-brand-soft hover:text-white">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
        </Link>
      </div>
    </section>
  );
}
