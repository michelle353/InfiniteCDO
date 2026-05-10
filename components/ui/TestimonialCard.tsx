"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  org: string;
  initials: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  active?: boolean;
}

export default function TestimonialCard({ testimonial, active = true }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative bg-white rounded-2xl border border-brand-lavenderMid shadow-card p-10 lg:p-14 overflow-hidden"
    >
      {/* Large quote mark — purple gradient */}
      <div
        className="absolute top-6 left-8 text-[9rem] leading-none select-none pointer-events-none font-serif bg-gradient-to-br from-brand-lavender to-brand-lavenderMid bg-clip-text text-transparent"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lavenderLight rounded-bl-3xl -z-0" aria-hidden="true" />

      <blockquote className="relative">
        <p className="text-xl lg:text-2xl text-brand-nearBlack leading-relaxed font-light mb-8">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <footer className="flex items-center gap-4 pt-6 border-t border-brand-lavenderMid">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-deepPurple to-brand-plum flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-sm font-bold text-white">{testimonial.initials}</span>
          </div>
          <div>
            <p className="font-semibold text-brand-plum">{testimonial.author}</p>
            <p className="text-sm text-brand-nearBlack/60">
              {testimonial.title}, {testimonial.org}
            </p>
          </div>
        </footer>
      </blockquote>
    </motion.div>
  );
}
