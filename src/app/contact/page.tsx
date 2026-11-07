import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import { serviceOptions } from "@/lib/contact-schema";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your goals. Book a free consultation with Markozy or message us on WhatsApp.",
  alternates: { canonical: "/contact" },
};

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
