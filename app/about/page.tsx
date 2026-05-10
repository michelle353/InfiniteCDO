import type { Metadata } from "next";
import { aboutContent, siteConfig, stats } from "@/lib/data";
import CTABand from "@/components/sections/CTABand";
import PageHero from "@/components/sections/PageHero";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Michelle Ghai",
  description:
    "Meet Michelle Ghai — CMA, CPA, MBA, SAFe-certified fractional CDO with 20+ years leading digital transformation at major Canadian financial institutions.",
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
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* Photo block — see About.tsx for swap-in instructions */}
              <div className="rounded-2xl overflow-hidden bg-gradient-lavender aspect-[3/4] shadow-card border border-brand-lavenderMid mb-8">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-plum flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">MG</span>
                  </div>
                  <p className="text-brand-plum font-semibold text-xl">{siteConfig.founder}</p>
                  <p className="text-brand-plum/70 text-sm mt-1">{siteConfig.credentials}</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-brand-lavenderLight rounded-2xl border border-brand-lavenderMid p-6 mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-deepPurple mb-4">Credentials</p>
                <ul className="space-y-2.5">
                  {aboutContent.credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-2.5 text-sm text-brand-nearBlack/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-deepPurple flex-shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="bg-brand-plum rounded-2xl p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-lavender mb-5">By the Numbers</p>
                <div className="space-y-5">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-white tabular-nums">
                        <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm text-white/60 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-nearBlack tracking-tight mb-6">
                  {aboutContent.headline}
                </h2>
                <div className="space-y-5 text-brand-nearBlack/70 leading-relaxed text-lg">
                  {aboutContent.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Callout */}
              <div className="bg-brand-lavenderLight border border-brand-lavenderMid rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-deepPurple flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-plum mb-2">{aboutContent.callout.heading}</h3>
                    <p className="text-brand-nearBlack/70 leading-relaxed">{aboutContent.callout.body}</p>
                  </div>
                </div>
              </div>

              {/* Personal */}
              <div className="border-l-4 border-brand-lavender pl-6">
                <p className="text-brand-nearBlack/60 italic leading-relaxed">{aboutContent.personal}</p>
              </div>

              {/* Mission statement */}
              <div className="bg-brand-plum rounded-2xl p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-lavender mb-4">Mission</p>
                <p className="text-2xl font-light text-white leading-relaxed">
                  &ldquo;To enable businesses and nonprofits to unlock the potential of digital and AI.&rdquo;
                </p>
                <p className="text-white/60 mt-4 text-sm">— {siteConfig.founder}</p>
              </div>
            </div>
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
