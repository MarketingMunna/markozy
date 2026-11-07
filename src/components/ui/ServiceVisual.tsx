"use client";

import { motion } from "framer-motion";
import type { ServiceKey } from "@/lib/services";
import { cn } from "@/lib/utils";

const loop = (duration: number, delay = 0) => ({ duration, delay, repeat: Infinity, ease: "easeInOut" as const });

/** Animated illustration for each service. Purely decorative. */
export default function ServiceVisual({ k, className }: { k: ServiceKey; className?: string }) {
  return (
    <div className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-coal-2 via-coal to-ink", className)}>
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-60" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" />
      <svg viewBox="0 0 400 300" className="relative h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`sv-${k}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C4B5FD" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        {k === "seo" && <Seo id={`sv-${k}`} />}
        {k === "ai" && <Ai id={`sv-${k}`} />}
        {k === "web" && <Web id={`sv-${k}`} />}
        {k === "meta" && <Meta id={`sv-${k}`} />}
        {k === "google" && <Google id={`sv-${k}`} />}
        {k === "tiktok" && <Tiktok id={`sv-${k}`} />}
      </svg>
    </div>
  );
}

function Seo({ id }: { id: string }) {
  const bars = [50, 80, 70, 115, 140, 175];
  return (
    <g>
      <rect x="70" y="36" width="260" height="38" rx="19" fill="#ffffff10" stroke="#ffffff30" />
      <circle cx="94" cy="55" r="8" fill="none" stroke="#C4B5FD" strokeWidth="2.5" />
      <path d="M100 61l6 6" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <motion.rect x="116" y="50" height="10" rx="5" fill="#fff" opacity="0.7" initial={{ width: 0 }} animate={{ width: [0, 150, 150, 0] }} transition={loop(5)} />
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={90 + i * 40}
          width="24"
          rx="6"
          fill={`url(#${id})`}
          opacity={0.35 + i * 0.12}
          initial={{ y: 262 - h * 0.4, height: h * 0.4 }}
          animate={{ y: [262 - h * 0.4, 262 - h, 262 - h * 0.4], height: [h * 0.4, h, h * 0.4] }}
          transition={loop(4, i * 0.15)}
        />
      ))}
      <motion.path
        d="M90 230 L130 205 L170 212 L210 170 L250 150 L290 105"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ pathLength: [0, 1, 1] }}
        transition={loop(4)}
      />
      <motion.circle cx="290" cy="105" r="6" fill="#fff" animate={{ scale: [0, 1.4, 1] }} transition={loop(4)} />
    </g>
  );
}

function Ai({ id }: { id: string }) {
  const nodes = [
    [80, 80], [80, 220], [200, 150], [320, 70], [320, 150], [320, 230],
  ] as const;
  const edges = [[0, 2], [1, 2], [2, 3], [2, 4], [2, 5]] as const;
  return (
    <g>
      {edges.map(([a, b], i) => (
        <g key={i}>
          <line x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#ffffff25" strokeWidth="2" />
          <motion.circle
            r="4"
            fill="#C4B5FD"
            initial={{ cx: nodes[a][0], cy: nodes[a][1], opacity: 0 }}
            animate={{ cx: [nodes[a][0], nodes[b][0]], cy: [nodes[a][1], nodes[b][1]], opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: i * 0.35, repeat: Infinity, ease: "linear" }}
          />
        </g>
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <motion.circle cx={x} cy={y} r={i === 2 ? 34 : 18} fill="none" stroke="#A78BFA" strokeOpacity="0.5" animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }} transition={loop(2.4, i * 0.2)} style={{ transformOrigin: `${x}px ${y}px` }} />
          <circle cx={x} cy={y} r={i === 2 ? 28 : 14} fill={i === 2 ? `url(#${id})` : "#1A1A28"} stroke="#A78BFA" strokeWidth="1.5" />
        </g>
      ))}
      <text x="200" y="156" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="sans-serif">AI</text>
    </g>
  );
}

function Web({ id }: { id: string }) {
  const lines = [140, 90, 170, 120, 60, 150];
  return (
    <g>
      <rect x="50" y="40" width="300" height="220" rx="16" fill="#0b0b14" stroke="#ffffff25" />
      <rect x="50" y="40" width="300" height="32" rx="16" fill="#ffffff08" />
      {[72, 88, 104].map((cx) => (
        <circle key={cx} cx={cx} cy="56" r="5" fill="#ffffff35" />
      ))}
      <rect x="130" y="50" width="160" height="12" rx="6" fill="#ffffff10" />
      {lines.map((w, i) => (
        <motion.rect
          key={i}
          x={i % 2 ? 98 : 74}
          y={94 + i * 24}
          height="10"
          rx="5"
          fill={i % 3 === 0 ? `url(#${id})` : "#ffffff30"}
          initial={{ width: 0 }}
          animate={{ width: [0, w, w] }}
          transition={{ duration: 3.2, delay: i * 0.25, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
      <motion.g animate={{ x: [0, -40, 10, 0], y: [0, -30, -60, 0] }} transition={loop(6)}>
        <path d="M290 200 l0 30 l8 -8 l6 13 l6 -3 l-6 -12 l11 0 z" fill="#fff" stroke="#0b0b14" strokeWidth="1.5" />
      </motion.g>
    </g>
  );
}

function Meta({ id }: { id: string }) {
  const d = "M200 150 C 170 100, 100 100, 100 150 C 100 200, 170 200, 200 150 C 230 100, 300 100, 300 150 C 300 200, 230 200, 200 150 Z";
  return (
    <g>
      <path d={d} fill="none" stroke="#ffffff18" strokeWidth="18" strokeLinecap="round" />
      <motion.path d={d} fill="none" stroke={`url(#${id})`} strokeWidth="18" strokeLinecap="round" animate={{ pathLength: [0.15, 0.6, 0.15], pathOffset: [0, 0.5, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
      {[0, 1, 2].map((i) => (
        <motion.g key={i} animate={{ y: [0, -90], opacity: [0, 1, 0] }} transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeOut" }}>
          <circle cx={150 + i * 50} cy={250} r="14" fill="#1A1A28" stroke="#A78BFA" />
          <path d={`M${150 + i * 50} ${256} l-6 -6 a3.5 3.5 0 0 1 6 -4 a3.5 3.5 0 0 1 6 4 z`} fill="#C4B5FD" />
        </motion.g>
      ))}
    </g>
  );
}

function Google({ id }: { id: string }) {
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <motion.g key={i} initial={{ opacity: 0.4 }} animate={{ opacity: i === 0 ? [0.6, 1, 0.6] : 0.45 }} transition={loop(3)}>
          <rect x="60" y={50 + i * 72} width="280" height="58" rx="14" fill={i === 0 ? "#8B5CF620" : "#ffffff08"} stroke={i === 0 ? "#A78BFA" : "#ffffff20"} />
          <rect x="78" y={64 + i * 72} width="26" height="13" rx="4" fill={i === 0 ? `url(#${id})` : "#ffffff30"} />
          <text x="91" y={74 + i * 72} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="sans-serif">Ad</text>
          <rect x="112" y={65 + i * 72} width={i === 0 ? 170 : 140} height="10" rx="5" fill="#fff" opacity="0.75" />
          <rect x="78" y={86 + i * 72} width="220" height="8" rx="4" fill="#fff" opacity="0.25" />
        </motion.g>
      ))}
      <motion.g animate={{ x: [60, 0, 0, 60], y: [40, 0, 0, 40] }} transition={loop(3.5)}>
        <path d="M250 80 l0 30 l8 -8 l6 13 l6 -3 l-6 -12 l11 0 z" fill="#fff" stroke="#0b0b14" strokeWidth="1.5" />
      </motion.g>
      <motion.circle cx="252" cy="82" r="10" fill="none" stroke="#C4B5FD" strokeWidth="2" animate={{ scale: [0, 2.2], opacity: [1, 0] }} transition={{ duration: 3.5, repeat: Infinity, times: [0.35, 0.6] }} style={{ transformOrigin: "252px 82px" }} />
    </g>
  );
}

function Tiktok({ id }: { id: string }) {
  return (
    <g>
      <rect x="140" y="20" width="120" height="260" rx="22" fill="#0b0b14" stroke="#ffffff30" strokeWidth="2" />
      <rect x="150" y="32" width="100" height="236" rx="14" fill={`url(#${id})`} opacity="0.35" />
      <motion.circle cx="200" cy="140" r="26" fill="#ffffff20" animate={{ scale: [1, 1.15, 1] }} transition={loop(2)} style={{ transformOrigin: "200px 140px" }} />
      <path d="M193 128 l18 12 l-18 12 z" fill="#fff" />
      <rect x="158" y="236" width="70" height="7" rx="3.5" fill="#fff" opacity="0.7" />
      <rect x="158" y="248" width="50" height="6" rx="3" fill="#fff" opacity="0.35" />
      <rect x="150" y="262" width="100" height="3" fill="#ffffff30" />
      <motion.rect x="150" y="262" height="3" fill="#fff" initial={{ width: 0 }} animate={{ width: [0, 100] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
      {[0, 1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d="M0 4 l-7 -7 a4.5 4.5 0 0 1 7 -5 a4.5 4.5 0 0 1 7 5 z"
          fill={i % 2 ? "#F0ABFC" : "#C4B5FD"}
          initial={{ x: 238, y: 220, opacity: 0 }}
          animate={{ x: [238, 250 + i * 14, 262 + i * 6], y: [220, 150, 70], opacity: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.7, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <motion.g animate={{ rotate: [-6, 6, -6] }} transition={loop(3)} style={{ transformOrigin: "320px 80px" }}>
        <circle cx="320" cy="80" r="22" fill="#1A1A28" stroke="#A78BFA" />
        <path d="M324 68v18a5 5 0 1 1-4-5M324 68c.6 3 2.6 5 5.6 5.4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      </motion.g>
    </g>
  );
}
