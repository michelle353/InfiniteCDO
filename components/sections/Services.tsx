"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { cn } from "@/lib/utils";

// All variants use refined purple/lavender shades to stay on-brand
// while giving each card a subtle visual distinction.
const colorMap: Record<string, { icon: string; iconBg: string; accent: string; ring: string }> = {
  blue: {
    icon: "text-brand-deepPurple",
    iconBg: "bg-brand-lavenderLight",
    accent: "text-brand-deepPurple",
    ring: "group-hover:border-brand-lavender group-hover:shadow-glow-lavender/40",
  },
  cyan: {
    icon: "text-brand-plumLight",
    iconBg: "bg-brand-lavenderLight",
    accent: "text-brand-plumLight",
    ring: "group-hover:border-brand-lavender group-hover:shadow-glow-lavender/40",
  },
  purple: {
    icon: "text-brand-plum",
    iconBg: "bg-brand-lavenderMid/60",
    accent: "text-brand-plum",
    ring: "group-hover:border-brand-lavender group-hover:shadow-glow-lavender/40",
  },
  green: {
    icon: "text-brand-deepPurpleHover",
    iconBg: "bg-brand-lavenderLight",
    accent: "text-brand-deepPurpleHover",
    ring: "group-hover:border-brand-lavender group-hover:shadow-glow-lavender/40",
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="services" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          heading="Strategic expertise across four core areas"
          subheading="Whether you need a comprehensive digital strategy or targeted support in one area, we deliver enterprise-grade thinking tailored to your scale."
          className="mb-16"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <motion.div key={service.id} variants={item}>
                <Link
                  href={`/services#${service.id}`}
                  className={cn(
                    "group block p-8 bg-white rounded-2xl border border-brand-lavenderMid/60 transition-all duration-300",
                    "hover:shadow-card-hover hover:-translate-y-0.5 hover:border-brand-lavender",
                    colors.ring
                  )}
                >
                  {/* Icon */}
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5", colors.iconBg)}>
                    <ServiceIcon icon={service.icon} className={cn("w-6 h-6", colors.icon)} />
                  </div>

                  {/* Content */}
                  <p className={cn("text-xs font-semibold uppercase tracking-wider mb-1", colors.accent)}>
                    {service.tagline}
                  </p>
                  <h3 className="text-xl font-bold text-brand-nearBlack mb-3 group-hover:text-brand-deepPurple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-nearBlack/60 leading-relaxed text-sm mb-5">
                    {service.description}
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-brand-nearBlack/60">
                        <svg className={cn("w-4 h-4 flex-shrink-0", colors.icon)} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-brand-nearBlack/40 group-hover:text-brand-deepPurple transition-colors">
                    Learn more
                    <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
