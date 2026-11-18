import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import PostCard, { PostCover } from "@/components/blog/PostCard";
import AuthorBox from "@/components/blog/AuthorBox";
import ShareLinks from "@/components/blog/ShareLinks";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { getPost, posts, slugify } from "@/lib/posts";
import { services } from "@/lib/services";
import { author, site } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";
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
  return pageMeta({
    title: `${post.title} | Markozy`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    imageLabel: post.category,
    type: "article",
    publishedTime: post.date,
    authors: [author.name],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const headings = post.content.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  const relatedServices = services.filter((s) => post.services.includes(s.slug));
  const url = `${site.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}/og?title=${encodeURIComponent(post.title)}`,
    author: { "@type": "Person", name: author.name, jobTitle: author.role, url: `${site.url}/about`, image: `${site.url}${author.photo.src}` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: url,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
      >
        <Reveal immediate delay={0.5}>
          <p className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-mist">
            <Image src={author.photo.src} alt="" width={36} height={36} className="mr-1.5 h-9 w-9 rounded-full object-cover object-top" />
            By <Link href="/about" className="text-white hover:underline">{author.name}</Link> ·{" "}
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
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

          {headings.length > 2 && (
            <nav aria-labelledby="toc-heading" className="not-prose my-10 rounded-2xl border border-white/[0.07] bg-coal/60 p-6">
              <p id="toc-heading" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">In this article</p>
              <ol className="mt-4 space-y-2 text-sm">
                {headings.map((h) => (
                  <li key={h.text}>
                    <a href={`#${slugify(h.text)}`} className="text-white/85 hover:text-white hover:underline">{h.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {post.content.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} id={slugify(block.text)} className="scroll-mt-28">{block.text}</h2>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              );
            return <p key={i}>{block.text}</p>;
          })}

          {relatedServices.length > 0 && (
            <div className="not-prose mt-14 rounded-3xl border border-white/[0.07] bg-gradient-to-r from-brand/10 to-transparent p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">Need a hand with this?</p>
              <p className="mt-3 text-base text-white/90">
                We help Malaysian businesses put this into practice. See how we work:
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <MagneticButton key={s.slug} href={`/services/${s.slug}`} variant="outline">
                    {s.name} <ArrowUpRight className="h-4 w-4" />
                  </MagneticButton>
                ))}
              </div>
            </div>
          )}

          <ShareLinks url={url} title={post.title} />
          <AuthorBox />

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
