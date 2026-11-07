import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChoose from "@/components/home/WhyChoose";
import Process from "@/components/home/Process";
import PortfolioSection from "@/components/home/PortfolioSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChoose />
      <Process />
      <PortfolioSection />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  );
}
