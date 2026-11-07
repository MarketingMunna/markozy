import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function PostCover({ hue, title, className }: { hue: number; title: string; className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div
        className="h-full w-full"
        style={{
          background: `radial-gradient(circle at 20% 20%, hsl(${hue} 85% 62% / 0.75), transparent 55%), radial-gradient(circle at 85% 80%, hsl(${(hue + 50) % 360} 80% 55% / 0.55), transparent 55%), #0d0d16`,
        }}
      >
        <div className="flex h-full items-end p-6">
          <span className="line-clamp-2 font-display text-xl font-semibold text-white/15">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-coal/60 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <PostCover hue={post.hue} title={post.title} className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-mist">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">{post.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium">
          Read article <ArrowUpRight className="h-4 w-4 text-brand-soft transition-transform group-hover:rotate-45" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
