import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServiceIcon from "@/components/ui/ServiceIcon";
import CTABand from "@/components/sections/CTABand";
import PageHero from "@/components/sections/PageHero";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fractional CDO services: AI Readiness, Digital Transformation, Data & Analytics, Governance & Risk, Sponsorship & Revenue Strategy, Fractional Executive Advisory, and Board Workshops.",
};

const variantMap: Record<string, { iconBg: string; iconColor: string; badge: string; accent: string }> = {
  deepPurple: {
    iconBg: "bg-gradient-to-br from-brand-deepPurple to-brand-plumLight",
    iconColor: "text-white",
    badge: "bg-brand-lavenderMid text-brand-plum",
    accent: "text-brand-deepPurple",
  },
  plum: {
    iconBg: "bg-gradient-to-br from-brand-plum to-brand-deepPurple",
    iconColor: "text-white",
    badge: "bg-brand-plum text-white",
    accent: "text-brand-plum",
  },
  plumLight: {
    iconBg: "bg-gradient-to-br from-brand-plumLight to-brand-lavender",
    iconColor: "text-white",
    badge: "bg-brand-lavenderMid text-brand-plum",
    accent: "text-brand-plumLight",
  },
  lavender: {
    iconBg: "bg-gradient-to-br from-brand-lavender to-brand-lavenderMid",
    iconColor: "text-brand-plum",
    badge: "bg-brand-lavenderLight text-brand-deepPurple",
    accent: "text-brand-deepPurple",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Services designed for impact"
        subtitle="Enterprise-calibre digital, data & AI leadership delivered at the scale and cost that works for your organization."
      />

      {/* Services detail — alternating layout */}
      <div className="relative bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => {
              const variant = variantMap[service.color] ?? variantMap.deepPurple;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center scroll-mt-24",
                    !isEven && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Visual side */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-lavenderLight rounded-2xl rotate-6" aria-hidden="true" />
                    <div className="relative rounded-2xl p-10 lg:p-12 bg-white border border-brand-lavenderMid shadow-card flex items-center justify-center min-h-[320px]">
                      <div className="text-center">
                        <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg", variant.iconBg)}>
                          <ServiceIcon icon={service.icon} className={cn("w-10 h-10", variant.iconColor)} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-plum mb-2 tracking-tight">{service.title}</h3>
                        <p className={cn("text-sm font-semibold uppercase tracking-[0.15em]", variant.accent)}>{service.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div>
                    <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider", variant.badge)}>
                      {service.shortTitle}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-brand-nearBlack mb-3 tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    {/* Accent line */}
                    <div className="h-1 w-14 rounded-full bg-gradient-to-r from-brand-deepPurple to-brand-lavender mb-6" aria-hidden="true" />
                    <p className="text-brand-nearBlack/70 leading-relaxed mb-8 text-lg">{service.description}</p>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-deepPurple mb-4">What&apos;s Included</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 bg-brand-lavenderLight">
                              <svg className={cn("w-3.5 h-3.5", variant.accent)} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-brand-nearBlack/80 leading-relaxed">{benefit}</span>
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
      <div className="relative bg-brand-lavenderLight py-20 lg:py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading
            eyebrow="The Process"
            title="How an engagement works"
            subtitle="A clear, predictable path from first conversation to lasting impact."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Discovery Call", desc: "30 minutes to understand your goals, challenges, and current state." },
              { step: "02", title: "Needs Assessment", desc: "We dig deeper — documenting your landscape, gaps, and opportunities." },
              { step: "03", title: "Proposal & Scope", desc: "A clear engagement proposal: scope, timeline, deliverables, and investment." },
              { step: "04", title: "Embedded Partnership", desc: "We work alongside your team to deliver lasting, measurable change." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="group relative bg-white rounded-2xl border border-brand-lavenderMid p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-lavender transition-all duration-300">
                <p className="text-5xl font-bold bg-gradient-to-br from-brand-lavender to-brand-lavenderMid bg-clip-text text-transparent mb-4 font-mono leading-none">{step}</p>
                <h3 className="font-bold text-brand-plum mb-2 text-lg">{title}</h3>
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
