# The Infinite CDO — Premium Rebuild

A production-ready Next.js 15 rebuild of [theinfinitecdo.com](https://www.theinfinitecdo.com), designed to premium SaaS/startup quality.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          — Root layout with metadata + fonts
  page.tsx            — Homepage
  services/page.tsx   — Services detail page
  about/page.tsx      — About Michelle page
  blog/page.tsx       — Blog listing
  blog/[slug]/page.tsx — Blog post template
  contact/page.tsx    — Contact + form
  not-found.tsx       — 404 page

components/
  layout/
    Navbar.tsx        — Sticky glass morphism nav
    Footer.tsx        — Full footer with links + socials
  sections/
    Hero.tsx          — Full-bleed dark hero
    Services.tsx      — 4-card service grid
    Stats.tsx         — Animated counter stats section
    About.tsx         — Split bio section
    Testimonials.tsx  — Interactive testimonial carousel
    BlogPreview.tsx   — Blog card preview section
    CTABand.tsx       — Reusable dark CTA section
    ContactForm.tsx   — Validated contact form
  ui/
    Button.tsx        — Multi-variant button
    Badge.tsx         — Color badge component
    SectionHeader.tsx — Reusable section heading block
    AnimatedCounter.tsx — Count-up animation
    ServiceIcon.tsx   — Icon switcher for services

lib/
  data.ts   — All site content as typed constants
  utils.ts  — cn() utility
```

## Deployment

This project is configured for [Vercel](https://vercel.com). Push to GitHub and import the repo in Vercel — zero configuration needed.

## Customization

All site content lives in [`lib/data.ts`](lib/data.ts). Update the content there without touching component files.

To add a real contact form backend, replace the `handleSubmit` simulation in [`components/sections/ContactForm.tsx`](components/sections/ContactForm.tsx) with a call to [Resend](https://resend.com), [Formspree](https://formspree.io), or your preferred service.


<!-- Test PR — verifying PR workflow -->
