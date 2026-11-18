import PageHero from "@/components/layout/PageHero";
import PostCard from "@/components/blog/PostCard";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/home/CTASection";
import { posts } from "@/lib/posts";
import { JsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Digital Marketing Blog: SEO, Ads & AI Automation Tips | Markozy",
  description: "Practical guides on SEO, AI automation, websites and Meta, Google and TikTok ads for Malaysian businesses, from the Markozy team.",
  path: "/blog",
  imageLabel: "Blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />
      <PageHero
        eyebrow="Insights"
        title="Ideas for Smarter Growth."
        highlight={["Smarter", "Growth."]}
        description="Practical guides on search, automation, websites and advertising — written to help you make better decisions."
        crumbs={[{ label: "Blog" }]}
      />
      <section aria-label="Articles" className="pb-24 sm:pb-32">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : undefined}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
