"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

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
      {/*
        === BACKGROUND LAYER STACK ===

        Now that the shader renders white→purple (no gray, no fade-in), we
        can use it nearer full opacity and drop the heavy center mask.

        Back → front:
          1. SmokeBackground   - tinted to brand deepPurple, near full opacity
          2. Light center mask - lifts text legibility a touch (was much heavier)
          3. Top + bottom fade - white gradients for clean section transitions
          4. Dot grid          - faint brand-purple texture overlay
          5. Decorative orbs   - 3 floating shapes (motion-safe)
      */}

      {/* Layer 1: smoke shader — visible immediately, brand-tinted */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <SmokeBackground smokeColor="#5B3FD6" />
      </div>

      {/* Layer 2: very light center wash for typography legibility
          (no longer hiding gray — just gives headline a touch more contrast) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 45%, rgba(255,255,255,0.35) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 3a: top fade-to-white (under navbar) */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 3b: bottom fade-to-white (into next section) */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Layer 4: faint dot grid (brand purple), masked to center */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(250 67% 54% / 0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 50%, black 35%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 50%, black 35%, transparent 78%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 5: floating geometric accents (motion-safe) */}
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

      {/* === CONTENT === */}
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-brand-lavenderMid text-brand-deepPurple text-sm font-medium shadow-sm">
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
            className="mt-8 text-xl lg:text-2xl text-brand-nearBlack/70 leading-relaxed max-w-2xl mx-auto font-light"
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
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/85 backdrop-blur-md text-brand-plum font-semibold rounded-xl border border-brand-lavenderMid hover:bg-white hover:border-brand-lavender hover:shadow-md transition-all duration-300"
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

      {/* Wave curve into next section */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0] pointer-events-none z-[2]" aria-hidden="true">
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
