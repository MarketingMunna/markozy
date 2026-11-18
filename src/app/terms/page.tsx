import LegalPage from "@/components/layout/LegalPage";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

// DRAFT. Have it reviewed by a lawyer before launch. Client engagements should be covered by a separate signed proposal.
export const metadata = pageMeta({
  title: "Terms of Service | Markozy",
  description: "The terms that apply when you use the Markozy website.",
  path: "/terms",
  imageLabel: "Terms of Service",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      updated="18 November 2026"
      intro="These terms apply to your use of the Markozy website. By using the site, you agree to them."
      sections={[
        {
          heading: "About this website",
          body: ["This website is operated by Markozy. It provides information about our services and lets you contact us. Nothing on it is a binding offer."],
        },
        {
          heading: "Our services",
          body: ["Any work we do for you is governed by a separate written proposal or agreement, which sets out the scope, fees, timelines and terms for that engagement. If those terms conflict with these, the signed agreement applies."],
        },
        {
          heading: "Content and intellectual property",
          body: ["The text, design, graphics and code on this website belong to Markozy unless stated otherwise. You may share links to our pages, but you may not copy or republish our content without written permission."],
        },
        {
          heading: "Information on this site",
          body: [
            "Articles and guides on this website are general information, not professional advice for your specific situation. Results from marketing activity depend on many factors, and we do not guarantee specific rankings, traffic or sales.",
            "Projects marked as demo or concept work are illustrations and do not describe real clients.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [["Do not use the site or contact form to send spam, malware or unlawful content", "Do not attempt to disrupt or gain unauthorised access to the site", "Do not submit someone else's personal data without their permission"]],
        },
        {
          heading: "Links to other websites",
          body: ["We link to third-party sites such as WhatsApp and social networks. We are not responsible for their content or privacy practices."],
        },
        {
          heading: "Liability",
          body: ["We work to keep this website accurate and available, but provide it \"as is\". To the extent permitted by law, Markozy is not liable for losses arising from your use of the website."],
        },
        {
          heading: "Governing law",
          body: ["These terms are governed by the laws of Malaysia, and the courts of Malaysia have jurisdiction over any dispute."],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Email ${site.email}.`],
        },
      ]}
    />
  );
}
