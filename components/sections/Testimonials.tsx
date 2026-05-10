"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { testimonials, trustIndicators } from "@/lib/data";
import Heading from "@/components/ui/Heading";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-white" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Client Outcomes"
          title="Trusted by leaders who demand more"
          subtitle="Real results from organizations that have partnered with The Infinite CDO."
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={active}
              testimonial={testimonials[active]}
              active
            />
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-10" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === active
                    ? "w-10 h-2.5 bg-brand-deepPurple"
                    : "w-2.5 h-2.5 bg-brand-lavenderMid hover:bg-brand-lavender"
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-brand-lavenderMid bg-white hover:bg-brand-lavenderLight hover:border-brand-lavender flex items-center justify-center text-brand-plum transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-brand-lavenderMid bg-white hover:bg-brand-lavenderLight hover:border-brand-lavender flex items-center justify-center text-brand-plum transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Trust indicators row */}
          <div className="mt-20 pt-12 border-t border-brand-lavenderMid">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deepPurple text-center mb-8">
              Executive Credibility
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-brand-lavenderLight border border-brand-lavenderMid rounded-xl p-4"
                >
                  <svg className="w-5 h-5 text-brand-deepPurple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-brand-nearBlack/80 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
