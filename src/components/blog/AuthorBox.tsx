import Image from "next/image";
import Link from "next/link";
import { author } from "@/lib/site";

export default function AuthorBox() {
  return (
    <aside aria-label="About the author" className="not-prose mt-10 flex flex-col gap-5 rounded-3xl border border-white/[0.07] bg-coal/60 p-7 sm:flex-row sm:items-start">
      <Image
        src={author.photo.src}
        alt={author.name}
        width={80}
        height={80}
        className="h-20 w-20 shrink-0 rounded-full object-cover object-top ring-2 ring-brand/50"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">Written by</p>
        <p className="mt-1 font-display text-lg font-semibold">
          <Link href="/about" className="hover:underline">{author.name}</Link>
        </p>
        <p className="text-sm text-mist">{author.role}, Markozy</p>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{author.shortBio}</p>
      </div>
    </aside>
  );
}
