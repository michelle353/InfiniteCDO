"use client";

import { motion, useReducedMotion } from "framer-motion";
import AmbientBackground from "@/components/ui/ambient-background";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-white min-h-[92vh] lg:min-h-screen flex items-center"
      aria-label="Hero"
    >
      {/* Premium ambient background — soft lavender glow, drifting orbs,
          faint dot grid, edge fade to white. Sits behind all content. */}
      <AmbientBackground />

      {/* Floating geometric accents — purely decorative, motion-safe */}
      {!reduceMotion && (
        <>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-[10%] w-3 h-3 rounded-full bg-brand-deepPurple/40 hidden md:block pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-40 left-[8%] w-4 h-4 rounded-sm bg-brand-lavender/60 hidden md:block pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 right-[6%] w-2 h-2 rounded-full bg-brand-plum/50 hidden md:block pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      {/* Content layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 pt-32 lg:pt-40 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow pill */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-brand-lavenderMid text-brand-deepPurple text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                {!reduceMotion && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-deepPurple opacity-75" />
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-deepPurple" />
              </span>
              Fractional Chief Digital, Data &amp; AI Officer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-brand-nearBlack leading-[1.05] tracking-tight"
          >
            Infinite Potential.
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-brand-deepPurple via-brand-plumLight to-brand-deepPurple bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
              <svg
                className="absolute -bottom-3 left-0 w-full h-3"
                viewBox="0 0 400 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9 C 100 2, 200 2, 398 9"
                  fill="none"
                  stroke="#B9A0F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 text-xl lg:text-2xl text-brand-nearBlack/65 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Enterprise-grade digital, data &amp; AI leadership for businesses and nonprofits — without the cost of a full-time executive.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4 items-center justify-center"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-brand-deepPurple text-white font-semibold rounded-xl hover:bg-brand-deepPurpleHover hover:shadow-glow-purple transition-all duration-300 active:scale-[0.98]"
            >
              Book a Free Assessment
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/80 backdrop-blur-md text-brand-plum font-semibold rounded-xl border border-brand-lavenderMid hover:bg-white hover:border-brand-lavender hover:shadow-md transition-all duration-300"
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
            className="mt-16 pt-10 border-t border-brand-lavenderMid/60 flex flex-wrap items-center gap-x-8 gap-y-3 justify-center"
          >
            {[
              "25+ Years Experience",
              "$300MM+ Spend Managed",
              "300+ Team Members Led",
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

      {/* Wave curve into next section — preserves the elegant transition */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0] pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
          <path
            d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
