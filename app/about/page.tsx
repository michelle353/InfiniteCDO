import type { Metadata } from "next";
import { aboutContent, siteConfig, stats } from "@/lib/data";
import CTABand from "@/components/sections/CTABand";
import PageHero from "@/components/sections/PageHero";
import StatCard from "@/components/ui/StatCard";

export const metadata: Metadata = {
  title: "About Michelle Ghai",
  description:
    "Meet Michelle Ghai — CMA, CPA, MBA, SAFe-certified fractional CDO with 25+ years leading digital transformation at major Canadian financial institutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Meet ${siteConfig.founder}`}
        subtitle={`${siteConfig.credentials} — Fractional Chief Digital, Data & AI Officer`}
      />

      {/* Bio section */}
      <div className="relative bg-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-brand-lavenderLight blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              {/* Photo block
                  TO ADD A REAL HEADSHOT:
                  1. Save photo to /public/headshot.jpg
                  2. Replace branded fallback below with Image component
                     (see About.tsx for full instructions) */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-lavenderLight via-brand-lavenderMid to-brand-lavender aspect-[3/4] shadow-card-hover border-4 border-white mb-8">
                <div className="h-full flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-deepPurple via-brand-plumLight to-brand-plum flex items-center justify-center mb-5 shadow-glow-purple">
                    <span className="text-4xl font-bold text-white">MG</span>
                  </div>
                  <p className="text-brand-plum font-bold text-2xl">{siteConfig.founder}</p>
                  <p className="text-brand-plum/70 text-sm mt-1 tracking-wider">{siteConfig.credentials}</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-brand-lavenderLight rounded-2xl border border-brand-lavenderMid p-6 mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-deepPurple mb-4">Credentials</p>
                <ul className="space-y-2.5">
                  {aboutContent.credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-2.5 text-sm text-brand-nearBlack/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-deepPurple flex-shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deepPurple mb-3">My Story</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-nearBlack tracking-tight mb-5 leading-tight">
                  {aboutContent.headline}
                </h2>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-brand-deepPurple to-brand-lavender mb-7" aria-hidden="true" />
                <div className="space-y-5 text-brand-nearBlack/70 leading-relaxed text-lg">
                  {aboutContent.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Callout */}
              <div className="relative bg-gradient-to-br from-brand-lavenderLight to-white border border-brand-lavenderMid rounded-2xl p-7 lg:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-lavender/30 rounded-bl-3xl -mr-2 -mt-2" aria-hidden="true" />
                <div className="relative flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-deepPurple to-brand-plumLight flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-plum mb-2 text-lg">{aboutContent.callout.heading}</h3>
                    <p className="text-brand-nearBlack/70 leading-relaxed">{aboutContent.callout.body}</p>
                  </div>
                </div>
              </div>

              {/* Personal */}
              <div className="border-l-4 border-brand-lavender pl-6">
                <p className="text-brand-nearBlack/60 italic leading-relaxed text-lg">{aboutContent.personal}</p>
              </div>

              {/* Mission statement */}
              <div className="relative bg-brand-plum rounded-2xl p-8 lg:p-10 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #B9A0F5 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lavender mb-4">Mission</p>
                  <p className="text-2xl lg:text-3xl font-light text-white leading-relaxed">
                    &ldquo;To enable businesses and nonprofits to unlock the potential of digital and AI.&rdquo;
                  </p>
                  <p className="text-white/60 mt-5 text-sm">— {siteConfig.founder}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative bg-brand-lavenderLight py-20 lg:py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deepPurple mb-3">Career Highlights</p>
            <h2 className="text-3xl lg:text-display-md font-bold text-brand-nearBlack tracking-tight">By the numbers</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-brand-deepPurple to-brand-lavender mx-auto mt-5" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      <CTABand
        heading="Ready to work together?"
        subheading="Let's have a real conversation about what's possible for your organization."
        primaryLabel="Book a Free Call"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
