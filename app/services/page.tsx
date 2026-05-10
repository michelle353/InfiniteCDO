import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServiceIcon from "@/components/ui/ServiceIcon";
import CTABand from "@/components/sections/CTABand";
import PageHero from "@/components/sections/PageHero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fractional CDO services: Digital Strategy & Roadmap, Data Analytics, AI Revenue Intelligence, and Finance & Operations for businesses and nonprofits.",
};

// All variants now use coordinated purple/lavender shades on-brand.
const colorMap: Record<string, { icon: string; iconBg: string; badge: string }> = {
  blue: {
    icon: "text-brand-deepPurple",
    iconBg: "bg-brand-lavenderLight",
    badge: "bg-brand-lavenderMid text-brand-plum",
  },
  cyan: {
    icon: "text-brand-plumLight",
    iconBg: "bg-brand-lavenderLight",
    badge: "bg-brand-lavenderMid text-brand-plum",
  },
  purple: {
    icon: "text-brand-plum",
    iconBg: "bg-brand-lavenderMid/70",
    badge: "bg-brand-plum text-white",
  },
  green: {
    icon: "text-brand-deepPurpleHover",
    iconBg: "bg-brand-lavenderLight",
    badge: "bg-brand-lavenderMid text-brand-plum",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Services designed for impact"
        subtitle="Enterprise-calibre digital leadership delivered at the scale and cost that works for your organization."
      />

      {/* Services detail */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => {
              const colors = colorMap[service.color];
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-20",
                    !isEven && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Visual side */}
                  <div className={cn("rounded-2xl p-10 border border-brand-lavenderMid flex items-center justify-center min-h-[320px]", colors.iconBg)}>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white shadow-card">
                        <ServiceIcon icon={service.icon} className={cn("w-10 h-10", colors.icon)} />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-plum mb-2">{service.title}</h3>
                      <p className={cn("text-sm font-semibold uppercase tracking-wider", colors.icon)}>{service.tagline}</p>
                    </div>
                  </div>

                  {/* Content side */}
                  <div>
                    <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4", colors.badge)}>
                      {service.shortTitle}
                    </span>
                    <h2 className="text-3xl font-bold text-brand-nearBlack mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-brand-nearBlack/70 leading-relaxed mb-8 text-lg">{service.description}</p>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-deepPurple mb-4">What&apos;s Included</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <div className={cn("w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5", colors.iconBg)}>
                              <svg className={cn("w-3 h-3", colors.icon)} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-brand-nearBlack/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How we work */}
      <div className="bg-brand-lavenderLight py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-deepPurple mb-3">The Process</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-nearBlack tracking-tight">How an engagement works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery Call", desc: "30 minutes to understand your goals, challenges, and current state." },
              { step: "02", title: "Needs Assessment", desc: "We dig deeper — documenting your landscape, gaps, and opportunities." },
              { step: "03", title: "Proposal & Scope", desc: "A clear engagement proposal: scope, timeline, deliverables, and investment." },
              { step: "04", title: "Embedded Partnership", desc: "We work alongside your team to deliver lasting, measurable change." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl border border-brand-lavenderMid p-7 shadow-card">
                <p className="text-4xl font-bold text-brand-lavender mb-4 font-mono">{step}</p>
                <h3 className="font-bold text-brand-plum mb-2">{title}</h3>
                <p className="text-sm text-brand-nearBlack/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABand
        heading="Find the right engagement for your organization"
        subheading="Whether you need a strategic partner for an ongoing transformation or targeted help in one area, we'll find the right fit."
        primaryLabel="Start with a Free Call"
        secondaryLabel="Learn About Michelle"
        secondaryHref="/about"
      />
    </>
  );
}
