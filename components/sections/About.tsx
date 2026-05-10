"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { aboutContent, siteConfig } from "@/lib/data";
import Heading from "@/components/ui/Heading";

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden" id="about" aria-label="About Michelle Ghai">
      {/* Soft background flourishes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-brand-lavenderLight blur-[80px]" />
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-brand-lavenderMid/40 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Photo card (5/12) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Background decoration squares */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-lavender rounded-3xl rotate-6" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-lavenderMid rounded-3xl -rotate-3" aria-hidden="true" />

            {/* Photo card
                === TO ADD A REAL HEADSHOT ===
                1. Save photo to /public/headshot.jpg
                2. Replace the inner branded fallback below with:

                   <Image
                     src="/headshot.jpg"
                     alt="Michelle Ghai, Founder of The Infinite CDO"
                     fill
                     sizes="(max-width: 1024px) 100vw, 42vw"
                     priority
                     className="object-cover"
                   />

                3. Don't forget to: import Image from "next/image" */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-lavenderLight via-brand-lavenderMid to-brand-lavender aspect-[4/5] shadow-card-hover border-4 border-white">
              {/* Branded fallback */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-deepPurple via-brand-plumLight to-brand-plum flex items-center justify-center mb-5 shadow-glow-purple">
                  <span className="text-4xl font-bold text-white tracking-tight">MG</span>
                </div>
                <p className="text-brand-plum font-bold text-2xl">{siteConfig.founder}</p>
                <p className="text-brand-plum/70 text-sm mt-1 tracking-wider">{siteConfig.credentials}</p>
              </div>

              {/* Floating credentials card */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border border-brand-lavenderMid shadow-md">
                  <p className="text-[10px] font-semibold text-brand-deepPurple uppercase tracking-[0.15em] mb-2">Credentials</p>
                  <div className="flex flex-wrap gap-1.5">
                    {aboutContent.credentials.map((cred) => (
                      <span key={cred} className="text-xs bg-brand-lavenderLight text-brand-plum rounded-md px-2 py-1 font-semibold">
                        {cred.split(" ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content (7/12) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Heading
              eyebrow="About Michelle"
              title={aboutContent.headline}
              align="left"
              size="md"
              className="mb-8"
            />

            <div className="space-y-4 text-brand-nearBlack/70 leading-relaxed mb-10 text-base lg:text-lg">
              {aboutContent.bio.slice(0, 2).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Metrics row — premium executive summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {aboutContent.metrics.map((m) => (
                <div
                  key={m.label}
                  className="text-center bg-gradient-to-br from-brand-lavenderLight to-white border border-brand-lavenderMid rounded-xl p-4 hover:border-brand-lavender hover:shadow-card transition-all duration-300"
                >
                  <p className="text-2xl lg:text-3xl font-bold text-brand-plum mb-1 tabular-nums leading-none">{m.value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-brand-nearBlack/60 font-semibold leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Callout box */}
            <div className="relative bg-gradient-to-br from-brand-lavenderLight via-white to-brand-lavenderLight/70 border border-brand-lavenderMid rounded-2xl p-6 lg:p-7 mb-8 overflow-hidden">
              {/* Decorative quote-y accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-lavender/30 rounded-bl-3xl -mr-2 -mt-2" aria-hidden="true" />
              <div className="relative">
                <h3 className="font-bold text-brand-plum mb-2 text-lg">{aboutContent.callout.heading}</h3>
                <p className="text-brand-nearBlack/70 leading-relaxed">{aboutContent.callout.body}</p>
              </div>
            </div>

            <p className="text-brand-nearBlack/55 text-sm italic mb-8 pl-4 border-l-2 border-brand-lavender">
              {aboutContent.personal}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-deepPurple text-white text-sm font-semibold rounded-xl hover:bg-brand-deepPurpleHover hover:shadow-glow-purple transition-all duration-300"
              >
                Full Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-lavenderMid text-brand-plum text-sm font-semibold rounded-xl hover:border-brand-lavender hover:bg-brand-lavenderLight transition-all duration-300"
              >
                Work Together
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
