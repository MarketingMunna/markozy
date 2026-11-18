import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChoose from "@/components/home/WhyChoose";
import Process from "@/components/home/Process";
import FounderSection from "@/components/about/FounderSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/contact/ContactSection";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Markozy: Digital Growth Agency in Malaysia | SEO, AI Automation & Ads",
  description: site.description,
  path: "/",
});

// The demo portfolio and placeholder testimonials are left out until real client work and quotes exist.
// Re-add <PortfolioSection /> and <Testimonials /> here once they hold genuine content.
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChoose />
      <Process />
      <FounderSection compact />
      <CTASection />
      <ContactSection />
    </>
  );
}
