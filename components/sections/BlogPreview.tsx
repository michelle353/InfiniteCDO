"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import InfinityWatermark from "@/components/ui/InfinityWatermark";

export default function BlogPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-lavenderLight overflow-hidden" aria-label="Recent articles">
      <InfinityWatermark position="bottom-right" size="xl" color="purple" opacity="subtle" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <Heading
            eyebrow="Insights"
            title="From the blog"
            subtitle="Practical thinking on digital transformation, data strategy, and AI adoption."
            align="left"
            className="max-w-xl"
          />
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deepPurple hover:text-brand-plum flex-shrink-0"
          >
            All articles
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-brand-lavenderMid overflow-hidden hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-lavender transition-all duration-300 h-full"
              >
                {/* Color band */}
                <div
                  className={`h-1.5 ${
                    post.featured
                      ? "bg-gradient-to-r from-brand-deepPurple via-brand-plumLight to-brand-lavender"
                      : "bg-brand-lavenderMid group-hover:bg-gradient-to-r group-hover:from-brand-deepPurple group-hover:to-brand-lavender"
                  } transition-all duration-300`}
                />

                <div className="p-7 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant={post.featured ? "purple" : "lavender"}>{post.category}</Badge>
                    <span className="text-xs text-brand-nearBlack/40">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-nearBlack leading-snug mb-3 group-hover:text-brand-deepPurple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-nearBlack/65 leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-lavenderMid">
                    <span className="text-xs text-brand-nearBlack/45">{post.date}</span>
                    <span className="text-sm font-semibold text-brand-deepPurple flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      Read article
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
