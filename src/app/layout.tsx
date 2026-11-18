import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";
import { author, site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["400", "500", "600", "700", "800"] });

// Pages set their own title, canonical, Open Graph and Twitter tags via pageMeta() in src/lib/seo.tsx.
// Nothing page-specific (og:url, canonical) lives here, so it can never leak onto inner pages.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Markozy: Digital Growth Agency in Malaysia",
    template: "%s | Markozy",
  },
  description: site.description,
  applicationName: "Markozy",
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#09090F",
  colorScheme: "dark",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: "Markozy",
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/og`,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  areaServed: { "@type": "Country", name: site.areaServed },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan PJS 11/10, Bandar Sunway",
    postalCode: "46150",
    addressLocality: "Petaling Jaya",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
  founder: { "@type": "Person", name: author.name, jobTitle: author.role, image: `${site.url}${author.photo.src}` },
  ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
  ...(site.companyReg ? { identifier: site.companyReg } : {}),
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
          <StickyWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
