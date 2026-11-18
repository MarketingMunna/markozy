import ContactSection from "@/components/contact/ContactSection";
import { serviceOptions } from "@/lib/contact-schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Markozy: Request a Free Consultation in Malaysia",
  description: "Tell us about your goals. Request a free consultation with Markozy or message us on WhatsApp. We reply within 24 hours.",
  path: "/contact",
  imageLabel: "Contact",
});

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const { service } = await searchParams;
  const value = Array.isArray(service) ? service[0] : service;
  const defaultService = serviceOptions.find((s) => s === value);

  return (
    <div className="pt-16">
      <ContactSection defaultService={defaultService} headingAs="h1" />
    </div>
  );
}
