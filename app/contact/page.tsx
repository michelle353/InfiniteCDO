import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute discovery call with Michelle Ghai to explore how digital and AI capabilities can create meaningful change for your organization.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-slate-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Let&apos;s collaborate
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Start with a free 30-minute discovery call. We&apos;ll talk through your goals, challenges, and what&apos;s possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How it works</h2>
                <ol className="space-y-5">
                  {[
                    { n: "01", title: "Send a message", desc: "Tell us a bit about your organization and what you're working on." },
                    { n: "02", title: "We respond in 24hrs", desc: "You'll hear back within one business day to schedule a time." },
                    { n: "03", title: "Free discovery call", desc: "30 minutes to explore what's possible. No sales pitch — just a real conversation." },
                    { n: "04", title: "Proposal if it fits", desc: "If there's a good fit, we'll outline a scope and engagement structure." },
                  ].map(({ n, title, desc }) => (
                    <li key={n} className="flex gap-4">
                      <span className="text-2xl font-bold text-blue-100 font-mono leading-none flex-shrink-0 w-8">{n}</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-0.5">{title}</p>
                        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Connect</h3>
                <div className="space-y-3">
                  {[
                    { label: "LinkedIn", href: siteConfig.social.linkedin },
                    { label: "X / Twitter", href: siteConfig.social.twitter },
                    { label: "Instagram", href: siteConfig.social.instagram },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                      </span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Not ready for a call yet?</span>{" "}
                  Feel free to reach out just to say hello or ask a question. There&apos;s no minimum commitment to get in touch.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
