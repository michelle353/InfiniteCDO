"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="py-24 lg:py-32 bg-white" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Outcomes"
          heading="What clients say"
          subheading="Real results from organizations that have partnered with The Infinite CDO."
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          {/* Quote card */}
          <div className="relative bg-brand-lavenderLight rounded-2xl border border-brand-lavenderMid shadow-card p-10 lg:p-14 overflow-hidden">
            {/* Large quote mark */}
            <div className="absolute top-6 left-8 text-[8rem] leading-none text-brand-lavender font-serif select-none pointer-events-none" aria-hidden="true">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative"
              >
                <blockquote>
                  <p className="text-xl lg:text-2xl text-brand-nearBlack leading-relaxed font-light mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-plum flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-plum">{testimonial.author}</p>
                      <p className="text-sm text-brand-nearBlack/60">{testimonial.title}, {testimonial.org}</p>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === active
                    ? "w-8 h-2.5 bg-brand-deepPurple"
                    : "w-2.5 h-2.5 bg-brand-lavenderMid hover:bg-brand-lavender"
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-brand-lavenderMid bg-white hover:bg-brand-lavenderLight hover:border-brand-lavender flex items-center justify-center text-brand-plum transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-brand-lavenderMid bg-white hover:bg-brand-lavenderLight hover:border-brand-lavender flex items-center justify-center text-brand-plum transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
