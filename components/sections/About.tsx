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
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-50 rounded-3xl" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-50 rounded-2xl" aria-hidden="true" />

            {/* Photo placeholder styled block */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-[4/5] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/60" />
              {/* Initials placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-xl">
                  <span className="text-4xl font-bold text-white">MG</span>
                </div>
                <p className="text-white font-semibold text-xl">{siteConfig.founder}</p>
                <p className="text-slate-400 text-sm mt-1">{siteConfig.credentials}</p>
              </div>

              {/* Floating credentials card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">Credentials</p>
                  <div className="flex flex-wrap gap-2">
                    {aboutContent.credentials.map((cred) => (
                      <span key={cred} className="text-xs bg-white/10 text-white rounded-lg px-2.5 py-1">
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
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
              About Michelle
            </p>
            <h2 className="text-display-md font-bold text-slate-900 tracking-tight mb-6">
              {aboutContent.headline}
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              {aboutContent.bio.slice(0, 2).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Callout box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-2">{aboutContent.callout.heading}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{aboutContent.callout.body}</p>
            </div>

            {/* Personal note */}
            <p className="text-slate-500 text-sm italic mb-8">{aboutContent.personal}</p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                Full Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
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
