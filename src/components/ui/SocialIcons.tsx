import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 10v6.5M7.5 7.4v.1M11 16.5V10m0 3c0-1.8 1-3 2.6-3S16.5 11 16.5 13v3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  facebook: (
    <path d="M14 21v-7.5h2.6l.4-3H14V8.7c0-.9.3-1.5 1.6-1.5H17V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8.3v3H11V21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  tiktok: (
    <path d="M14.5 3.5v11.2a3.7 3.7 0 1 1-3.2-3.7M14.5 3.5c.4 2.4 2 4 4.5 4.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

/** Renders only real profile links (site.social drops empty values and bare platform homepages). */
export default function SocialIcons({ className }: { className?: string }) {
  if (site.social.length === 0) return null;
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {site.social.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Markozy on ${s.label}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist transition-colors duration-300 hover:border-brand-soft/60 hover:bg-brand/15 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
              {icons[s.key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
