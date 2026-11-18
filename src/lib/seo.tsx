import type { Metadata } from "next";
import { site } from "./site";

type PageMetaInput = {
  /** Full <title>, used as-is (no template suffix). */
  title: string;
  description: string;
  /** Path starting with "/", used for canonical and og:url. */
  path: string;
  /** Short label printed on the generated share image. */
  imageLabel?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  /** Force noindex for this page (e.g. demo content). */
  noindex?: boolean;
};

/** Per-page title, canonical, Open Graph and Twitter tags that always agree with each other. */
export function pageMeta({ title, description, path, imageLabel, type = "website", publishedTime, authors, noindex }: PageMetaInput): Metadata {
  const image = {
    url: `/og?title=${encodeURIComponent(title.replace(/ \| Markozy$/, ""))}${imageLabel ? `&label=${encodeURIComponent(imageLabel)}` : ""}`,
    width: 1200,
    height: 630,
    alt: title,
  };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: "Markozy",
      locale: "en_MY",
      title,
      description,
      url: path,
      images: [image],
      ...(type === "article" ? { publishedTime, authors } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
    ...(noindex || !site.indexable ? { robots: { index: false, follow: !noindex && site.indexable } } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
