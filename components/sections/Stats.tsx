"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Stats() {
  return (
    <section className="py-20 bg-brand-lavenderLight" aria-label="Impact statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-deepPurple mb-2">
            Proven Track Record
          </p>
          <h2 className="text-3xl font-bold text-brand-nearBlack">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="relative">
                {i > 0 && (
                  <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-brand-lavender/50" />
                )}
                <div className="text-5xl lg:text-6xl font-bold text-brand-plum tabular-nums mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-base font-semibold text-brand-nearBlack mb-1">{stat.label}</p>
                <p className="text-sm text-brand-nearBlack/60 max-w-[200px] mx-auto">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
