import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Generated SVG artwork used as project imagery for demo projects.
 * Lightweight (no network requests) and swappable for real screenshots later.
 */
export default function ProjectArt({
  project,
  className,
}: {
  project: Pick<Project, "slug" | "hues" | "pattern" | "name">;
  className?: string;
}) {
  const [h1, h2] = project.hues;
  const id = `pa-${project.slug}`;
  const c1 = `hsl(${h1} 85% 62%)`;
  const c2 = `hsl(${h2} 80% 58%)`;

  return (
    <svg viewBox="0 0 800 560" className={cn("h-full w-full", className)} role="img" aria-label={`Illustrative artwork for the ${project.name} demo project`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={`${id}-a`} cx="25%" cy="20%" r="70%">
          <stop offset="0" stopColor={c1} stopOpacity="0.9" />
          <stop offset="1" stopColor={c1} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-b`} cx="85%" cy="90%" r="65%">
          <stop offset="0" stopColor={c2} stopOpacity="0.75" />
          <stop offset="1" stopColor={c2} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-l`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="800" height="560" fill="#0d0d16" />
      <rect width="800" height="560" fill={`url(#${id}-a)`} />
      <rect width="800" height="560" fill={`url(#${id}-b)`} />

      {project.pattern === "orbits" &&
        [80, 140, 200, 260].map((r, i) => (
          <ellipse key={r} cx="400" cy="280" rx={r * 1.4} ry={r * 0.6} fill="none" stroke="#fff" strokeOpacity={0.35 - i * 0.06} transform={`rotate(${-18 + i * 9} 400 280)`} />
        ))}
      {project.pattern === "orbits" && <circle cx="400" cy="280" r="58" fill={`url(#${id}-l)`} opacity="0.85" />}

      {project.pattern === "waves" &&
        Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M-20 ${200 + i * 26} C 200 ${120 + i * 30}, 520 ${330 + i * 14}, 820 ${210 + i * 24}`} fill="none" stroke="#fff" strokeOpacity={0.08 + i * 0.04} strokeWidth="1.5" />
        ))}

      {project.pattern === "grid" && (
        <g>
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 11 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={100 + c * 60} cy={100 + r * 60} r={(r + c) % 4 === 0 ? 5 : 2} fill="#fff" opacity={(r + c) % 4 === 0 ? 0.9 : 0.3} />
            )),
          )}
          <path d="M100 400 L220 340 L340 360 L460 220 L580 260 L700 130" fill="none" stroke={`url(#${id}-l)`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {project.pattern === "bars" && (
        <g>
          {[120, 180, 150, 240, 210, 300, 280, 360].map((h, i) => (
            <rect key={i} x={150 + i * 64} y={460 - h} width="38" height={h} rx="10" fill="#fff" opacity={0.12 + i * 0.09} />
          ))}
        </g>
      )}

      {/* Floating UI card */}
      <g transform="translate(470 70)">
        <rect width="270" height="120" rx="20" fill="#0b0b14" fillOpacity="0.55" stroke="#fff" strokeOpacity="0.18" />
        <circle cx="38" cy="40" r="14" fill={c1} />
        <rect x="64" y="30" width="130" height="9" rx="4.5" fill="#fff" opacity="0.8" />
        <rect x="64" y="46" width="90" height="7" rx="3.5" fill="#fff" opacity="0.35" />
        <rect x="24" y="78" width="222" height="8" rx="4" fill="#fff" opacity="0.12" />
        <rect x="24" y="78" width="150" height="8" rx="4" fill={c2} />
      </g>
    </svg>
  );
}
