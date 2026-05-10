"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-lavenderLight"
      aria-label="Hero"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-lavender/40 blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-brand-lavenderMid/60 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-deepPurple/10 blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,35,109,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,35,109,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 pt-32 lg:pt-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-lavenderMid text-brand-deepPurple text-sm font-medium shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-deepPurple animate-pulse" />
              Fractional Chief Digital, Data & AI Officer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-nearBlack leading-[1.05] tracking-tight"
          >
            Infinite Potential.{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-brand-deepPurple via-brand-plumLight to-brand-deepPurple bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 text-xl sm:text-2xl text-brand-nearBlack/70 leading-relaxed max-w-2xl font-light"
          >
            Enterprise-grade digital transformation leadership for businesses and nonprofits — without the cost of a full-time executive.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-deepPurple text-white font-semibold rounded-xl hover:bg-brand-deepPurpleHover hover:shadow-glow-purple transition-all duration-200 active:scale-[0.98]"
            >
              Book a Free Assessment
              <ArrowRightIcon />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-plum font-semibold rounded-xl border border-brand-lavenderMid hover:bg-brand-lavenderLight hover:border-brand-lavender transition-all duration-200"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {[
              "20+ Years Experience",
              "$300MM+ Spend Managed",
              "$500MM+ Benefits Generated",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-brand-plum">
                <svg className="w-4 h-4 text-brand-deepPurple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
