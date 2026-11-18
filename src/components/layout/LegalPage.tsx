import PageHero from "@/components/layout/PageHero";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export type LegalSection = { heading: string; body: (string | string[])[] };

/** Shared layout for Privacy Policy and Terms. Strings render as paragraphs, string arrays as bullet lists. */
export default function LegalPage({
  title,
  path,
  updated,
  intro,
  sections,
}: {
  title: string;
  path: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: title, path }])} />
      <PageHero eyebrow="Legal" title={title} description={intro} crumbs={[{ label: title }]} />
      <article className="container-x pb-24 sm:pb-32">
        <div className="prose-markozy mx-auto max-w-3xl text-base">
          <p className="!text-sm !text-mist">Last updated: {updated}</p>
          {sections.flatMap((s) => [
            <h2 key={s.heading}>{s.heading}</h2>,
            ...s.body.map((b, i) =>
              Array.isArray(b) ? (
                <ul key={`${s.heading}-${i}`}>{b.map((li) => <li key={li}>{li}</li>)}</ul>
              ) : (
                <p key={`${s.heading}-${i}`}>{b}</p>
              ),
            ),
          ])}
        </div>
      </article>
    </>
  );
}
