import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import CTABand from "@/components/sections/CTABand";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const postContent: Record<string, string[]> = {
  "strategy-before-tools": [
    "One of the most common mistakes I see organizations make — businesses and nonprofits alike — is investing in technology before they've built the strategy to support it. They buy the CRM before defining the customer journey. They implement the analytics platform before deciding what questions they need to answer. They adopt AI tools before understanding what problem they're solving.",
    "The result is almost always the same: tools that don't get used, data that doesn't get analyzed, and transformation initiatives that stall out after the initial excitement fades.",
    "**Strategy has to come first.** Not because tools aren't important — they are — but because strategy determines which tools are worth buying, how they should be configured, and how your team will actually use them day to day.",
    "A strong digital foundation starts with three questions: Where are we now? Where do we need to go? And what's the most direct path between those two points? The answers to these questions shape everything that follows — your technology choices, your data architecture, your team structure, and your change management plan.",
    "This is the work I do before any tool recommendation. It's slower at the start, but it's the only approach that actually works at the end.",
  ],
  "bringing-expertise-to-business-world": [
    "After two decades leading digital transformation at some of Canada's largest financial institutions, I had a realization that changed the direction of my career.",
    "The organizations that needed enterprise-grade digital and AI leadership most — growing businesses, nonprofits, social enterprises — were the exact organizations that couldn't access it. A full-time CDO costs $300,000 to $500,000 annually. Consulting firms charge hundreds of dollars an hour for junior associates with slide decks and no accountability.",
    "There was a gap between what these organizations needed and what was available to them. And I was sitting on exactly the expertise that could fill it.",
    "That's why I launched The Infinite CDO as a fractional practice. The model is simple: you get the same quality of strategic thinking and hands-on leadership that a Fortune 500 CDO brings — embedded with your team, accountable to your goals — at a fraction of the cost.",
    "It's not consulting in the traditional sense. I don't hand you a report and disappear. I work alongside your leadership team, bring a real point of view, and stay accountable for outcomes. That's the difference.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug] ?? [
    "This article is coming soon. Check back shortly.",
  ];

  const related = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Post header */}
      <div className="bg-slate-950 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="blue">{post.category}</Badge>
            <span className="text-sm text-slate-400">{post.date}</span>
            <span className="text-sm text-slate-400">{post.readTime}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Post body */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author line */}
          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">MG</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Michelle Ghai</p>
              <p className="text-xs text-slate-500">Fractional CDO · CMA, CPA, MBA, SAFe</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none">
            {content.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <p key={i} className="font-bold text-slate-900 text-xl my-6">
                    {para.replace(/\*\*/g, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-slate-600 leading-relaxed mb-5 text-lg">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Author bio */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <div className="bg-slate-50 rounded-2xl p-8 flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">MG</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Michelle Ghai, CMA, CPA, MBA, SAFe</p>
                <p className="text-sm text-blue-600 font-medium mb-3">Fractional Chief Digital, Data & AI Officer</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  20+ years of enterprise digital transformation experience, now helping businesses and nonprofits unlock the potential of digital and AI without the cost of a full-time CDO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="bg-slate-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">Continue Reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Badge variant="slate" className="mb-3">{p.category}</Badge>
                  <h3 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <CTABand
        heading="Enjoyed this article?"
        subheading="Let's explore what digital and AI transformation could look like for your organization."
        primaryLabel="Book a Free Call"
      />
    </>
  );
}
