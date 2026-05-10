"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTABandProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({
  heading = "Ready to unlock your infinite potential?",
  subheading = "Start with a free 30-minute discovery call. No commitment, no jargon — just a real conversation about what's possible.",
  primaryLabel = "Book a Free Call",
  primaryHref = "/contact",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}: CTABandProps) {
  return (
    <section className="py-24 lg:py-32 bg-brand-plum relative overflow-hidden" aria-label="Call to action">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-brand-deepPurple/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-brand-lavender/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-lavender mb-4">
            Get Started
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            {heading}
          </h2>
          <p className="text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            {subheading}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-plum font-semibold rounded-xl hover:bg-brand-lavenderLight transition-all duration-200 shadow-lg hover:shadow-glow-lavender hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {primaryLabel}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
