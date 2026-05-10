"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { aboutContent, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="about" aria-label="About Michelle Ghai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-lavenderLight rounded-3xl" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-lavenderMid rounded-2xl" aria-hidden="true" />

            {/* Photo card
                TO ADD A REAL HEADSHOT:
                1. Drop a photo at /public/headshot.jpg (or .png)
                2. Uncomment the <Image /> block below
                3. Delete or hide the branded fallback below it */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-lavender aspect-[4/5] shadow-card border border-brand-lavenderMid">
              {/*
              <Image
                src="/headshot.jpg"
                alt={`${siteConfig.founder}, ${siteConfig.credentials}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
              */}

              {/* Branded fallback — remove when adding real photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-plum flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl font-bold text-white">MG</span>
                </div>
                <p className="text-brand-plum font-semibold text-xl">{siteConfig.founder}</p>
                <p className="text-brand-plum/70 text-sm mt-1">{siteConfig.credentials}</p>
              </div>

              {/* Floating credentials card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-brand-lavenderMid shadow-sm">
                  <p className="text-xs font-semibold text-brand-deepPurple uppercase tracking-widest mb-2">Credentials</p>
                  <div className="flex flex-wrap gap-2">
                    {aboutContent.credentials.map((cred) => (
                      <span key={cred} className="text-xs bg-brand-lavenderLight text-brand-plum rounded-lg px-2.5 py-1 font-medium">
                        {cred.split(" ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-deepPurple mb-3">
              About Michelle
            </p>
            <h2 className="text-display-md font-bold text-brand-nearBlack tracking-tight mb-6">
              {aboutContent.headline}
            </h2>

            <div className="space-y-4 text-brand-nearBlack/70 leading-relaxed mb-8">
              {aboutContent.bio.slice(0, 2).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Callout box */}
            <div className="bg-brand-lavenderLight border border-brand-lavenderMid rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-brand-plum mb-2">{aboutContent.callout.heading}</h3>
              <p className="text-brand-nearBlack/70 text-sm leading-relaxed">{aboutContent.callout.body}</p>
            </div>

            {/* Personal note */}
            <p className="text-brand-nearBlack/50 text-sm italic mb-8">{aboutContent.personal}</p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-deepPurple text-white text-sm font-semibold rounded-lg hover:bg-brand-deepPurpleHover transition-colors shadow-sm hover:shadow-md"
              >
                Full Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-lavenderMid text-brand-plum text-sm font-semibold rounded-lg hover:border-brand-lavender hover:bg-brand-lavenderLight transition-colors"
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
