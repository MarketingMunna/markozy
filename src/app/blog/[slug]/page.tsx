import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import PostCard, { PostCover } from "@/components/blog/PostCard";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/ui/Reveal";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Markozy" },
    publisher: { "@type": "Organization", name: "Markozy" },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
      >
        <Reveal immediate delay={0.5}>
          <p className="mt-6 text-sm text-mist">
            By the Markozy Team · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
          </p>
        </Reveal>
      </PageHero>

      <div className="container-x">
        <Reveal>
          <PostCover hue={post.hue} title={post.title} className="aspect-[21/9] overflow-hidden rounded-[2rem] border border-white/10" />
        </Reveal>
      </div>

      <article className="container-x py-16 sm:py-24">
        <div className="prose-markozy mx-auto max-w-3xl text-base sm:text-lg">
          <p className="!text-xl !leading-relaxed !text-white">{post.excerpt}</p>
          {post.content.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              );
            return <p key={i}>{block.text}</p>;
          })}
          <div className="mt-14 border-t border-white/10 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-mist hover:text-white">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-heading" className="pb-16">
        <div className="container-x">
          <h2 id="related-heading" className="font-display text-3xl font-semibold">Keep reading</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
