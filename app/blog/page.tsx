import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights on digital transformation, data strategy, and AI adoption from Michelle Ghai, Fractional CDO.",
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="The Blog"
        subtitle="Practical thinking on digital transformation, data strategy, and what it really takes to build lasting organizational change."
      />

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured post */}
          {featured && (
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-deepPurple mb-5">Featured</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block bg-white rounded-2xl border border-brand-lavenderMid overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 hover:border-brand-lavender transition-all duration-300"
              >
                <div className="h-1.5 bg-gradient-plum" />
                <div className="p-10 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <Badge variant="purple">{featured.category}</Badge>
                    <span className="text-sm text-brand-nearBlack/50">{featured.date}</span>
                    <span className="text-sm text-brand-nearBlack/50">{featured.readTime}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-brand-nearBlack leading-snug mb-4 group-hover:text-brand-deepPurple transition-colors tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="text-lg text-brand-nearBlack/70 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deepPurple">
                    Read article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* All posts grid */}
          {rest.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-nearBlack/50 mb-5">All Articles</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl border border-brand-lavenderMid overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 hover:border-brand-lavender transition-all duration-300"
                  >
                    <div className="h-1.5 bg-brand-lavenderMid group-hover:bg-gradient-plum transition-all duration-300" />
                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="lavender">{post.category}</Badge>
                        <span className="text-xs text-brand-nearBlack/40">{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-brand-nearBlack leading-snug mb-3 group-hover:text-brand-deepPurple transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-brand-nearBlack/60 leading-relaxed mb-5">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-brand-nearBlack/40">{post.date}</span>
                        <span className="text-sm font-semibold text-brand-deepPurple flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
