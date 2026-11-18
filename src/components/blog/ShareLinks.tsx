/** Plain share links (no third-party scripts, so no tracking cookies). */
export default function ShareLinks({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { label: "X", href: `https://x.com/intent/post?url=${u}&text=${t}` },
  ];
  return (
    <div className="not-prose mt-10 flex flex-wrap items-center gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Share</p>
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${l.label}`}
              className="inline-flex rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/90 transition-colors hover:border-brand-soft/70 hover:bg-brand/10"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
