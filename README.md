# Markozy — Digital Growth Agency Website

Premium, animated marketing site for **MARKOZY** — *We Build. We Automate. We Grow.*

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger,
Lenis smooth scrolling, React Three Fiber and Lucide icons.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: 3D hero, about, services, why us, process timeline, work, testimonials, contact |
| `/about` | Mission, values, approach |
| `/services` | All six services in detail |
| `/services/[slug]` | Individual service pages (`seo`, `ai-automation`, `website-development`, `meta-ads`, `google-ads`, `tiktok-ads`) |
| `/work`, `/work/[slug]` | Portfolio and case studies (**fictional demo projects**, noindex, not linked) |
| `/blog`, `/blog/[slug]` | Articles with author byline, table of contents, share links and service CTA |
| `/privacy`, `/terms` | Privacy Policy (PDPA) and Terms of Service |
| `/contact` | Contact form + WhatsApp (accepts `?service=SEO` to preselect) |

## Configuration (`.env.local`)

* `NEXT_PUBLIC_WHATSAPP_NUMBER` — defaults to `60177636862` (+60 17-763 6862).
* `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_LOCATION`, `NEXT_PUBLIC_SITE_URL`
* `NEXT_PUBLIC_SOCIAL_*` — social profile URLs; empty ones render as disabled "coming soon" icons.
* Contact form delivery — configure **one**:
  * `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (+ `CONTACT_FROM_EMAIL` on a verified domain), or
  * `CONTACT_WEBHOOK_URL` (Zapier, Make, n8n, Slack…)

If neither is configured, the form validates input and then tells the visitor honestly that the form isn't
connected yet (HTTP 503) — it never shows a fake success.

## Content to replace before launch

* `src/lib/projects.ts` — fictional demo projects. `/work` is noindex, out of the nav and sitemap, and the
  homepage no longer shows it. Re-add `<PortfolioSection />` to `src/app/page.tsx` once real case studies exist.
* `src/components/home/Testimonials.tsx` — placeholder testimonials, removed from the homepage. Re-add
  `<Testimonials />` only with real, approved quotes.
* `src/lib/site.ts` → `author` — founder bio. Replace the initials avatar in `FounderSection` / `AuthorBox` with a photo.
* `src/app/privacy` and `src/app/terms` — drafts; have them legally reviewed.
* Contact details, booking link, SSM number and social links via environment variables.

## SEO notes

* Every page builds its metadata with `pageMeta()` (`src/lib/seo.tsx`): unique title, canonical, og:url,
  Twitter tags and a per-page share image from `/og?title=…`.
* Dev/staging/preview hosts are noindex automatically (meta robots, `X-Robots-Tag` header, `robots.txt`
  disallow-all and an empty sitemap). Also protect the dev site with a password at the host.

## Structure

```
src/
  app/                 routes, metadata, sitemap, robots, OG image, API route
  components/
    home/              homepage sections (Hero + 3D scene, services, process…)
    layout/            Navbar, Footer, PageHero
    contact/           ContactSection + validated ContactForm
    work/ blog/        cards for portfolio and blog
    ui/                design-system primitives (MagneticButton, TextReveal, Reveal, cursor…)
    providers/         Lenis smooth scroll + Framer Motion config
  lib/                 site config, services, projects, posts, shared zod schema
```

## Accessibility & motion

* Respects `prefers-reduced-motion` (smooth scroll, cursor, 3D animation and transitions are reduced or disabled).
* Custom cursor only on fine-pointer (desktop) devices.
* Skip link, semantic landmarks, labelled form fields with inline errors, keyboard-accessible mobile menu (Esc to close).
