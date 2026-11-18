import LegalPage from "@/components/layout/LegalPage";
import { pageMeta } from "@/lib/seo";
import { formatPhone, site } from "@/lib/site";

// DRAFT based on Malaysia's Personal Data Protection Act 2010 (PDPA). Have it reviewed by a lawyer before launch,
// and update the "Cookies" section if analytics or ad pixels (GA4, Meta Pixel, TikTok Pixel) are added.
export const metadata = pageMeta({
  title: "Privacy Policy | Markozy",
  description: "How Markozy collects, uses and protects personal data under Malaysia's Personal Data Protection Act 2010 (PDPA).",
  path: "/privacy",
  imageLabel: "Privacy Policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="18 November 2026"
      intro="This notice explains what personal data Markozy collects through this website, why we collect it and the choices you have, in line with Malaysia's Personal Data Protection Act 2010 (PDPA)."
      sections={[
        {
          heading: "Who we are",
          body: [`Markozy ("we", "us") is a digital growth agency based in ${site.location}. We are the data user responsible for personal data collected through this website.`],
        },
        {
          heading: "What we collect",
          body: [
            "We only collect what you choose to give us, mainly through the contact form, email or WhatsApp:",
            ["Your name and email address", "Your company name and website, if provided", "The service you are interested in, your budget range and project details", "Any information you share in messages to us"],
            "Our hosting provider also keeps standard server logs (such as IP address, browser type and pages requested) for security and to keep the site running.",
          ],
        },
        {
          heading: "Why we use it",
          body: [
            ["To reply to your enquiry and prepare a proposal", "To provide and manage services you sign up for", "To keep the website secure and prevent spam or abuse", "To meet our legal and accounting obligations"],
            "We do not sell your personal data, and we do not add you to marketing lists without your consent.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "We share personal data only with service providers that help us run the business, such as our email delivery, hosting and workflow tools, and only as needed for the purposes above. Some of these providers may store data outside Malaysia; where they do, we use reputable providers with appropriate safeguards.",
            "We may also disclose data where required by law or by a lawful request from the authorities.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "This website does not currently use advertising or analytics cookies. If we add analytics or advertising tools in future, we will update this policy and ask for your consent where required.",
          ],
        },
        {
          heading: "How long we keep it",
          body: ["We keep enquiry data for as long as needed to respond and follow up, and client records for as long as required for the engagement and by Malaysian law. We then delete or anonymise it."],
        },
        {
          heading: "Your rights",
          body: [
            "Under the PDPA you may ask to access or correct the personal data we hold about you, withdraw consent, or limit how we use it. Providing data through the contact form is voluntary, but without it we may not be able to respond to your enquiry.",
            `To make a request, email ${site.email} or message us on WhatsApp at ${formatPhone(site.whatsapp)}. We will respond within 21 days.`,
          ],
        },
        {
          heading: "Changes to this policy",
          body: ["We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated."],
        },
      ]}
    />
  );
}
