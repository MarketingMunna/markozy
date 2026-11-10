import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Markozy — Digital Growth Agency | We Build. We Automate. We Grow.",
    template: "%s | Markozy",
  },
  description: site.description,
  applicationName: "Markozy",
  keywords: ["digital marketing agency", "SEO", "AI automation", "website development", "Meta ads", "Google ads", "TikTok ads", "growth agency"],
  openGraph: {
    type: "website",
    siteName: "Markozy",
    title: "Markozy — Your Digital Growth Partner",
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markozy — Your Digital Growth Partner",
    description: site.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090F",
  colorScheme: "dark",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Markozy",
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan PJS 11/10, Bandar Sunway",
    postalCode: "46150",
    addressLocality: "Petaling Jaya",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="font-sans text-white antialiased">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Providers>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main id="main" className="overflow-x-clip">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
