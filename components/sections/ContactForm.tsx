"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  message: string;
}

const INITIAL: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1400));
    setState("success");
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border border-brand-lavenderMid p-12 text-center shadow-card"
      >
        <div className="w-16 h-16 rounded-full bg-brand-lavenderLight flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-deepPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-nearBlack mb-3">Message sent!</h3>
        <p className="text-brand-nearBlack/60 mb-8 leading-relaxed">
          Thanks for reaching out. You&apos;ll hear back within one business day to schedule your discovery call.
        </p>
        <button
          onClick={() => { setState("idle"); setForm(INITIAL); }}
          className="text-sm font-semibold text-brand-deepPurple hover:text-brand-plum transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-brand-lavenderMid p-8 lg:p-10 shadow-card">
      <h2 className="text-2xl font-bold text-brand-nearBlack mb-2">Send a message</h2>
      <p className="text-brand-nearBlack/60 text-sm mb-8">We read every message and respond within one business day.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} error={errors.firstName} required placeholder="Michelle" />
          <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} error={errors.lastName} required placeholder="Smith" />
        </div>

        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} required placeholder="you@organization.org" />

        <Field label="Organization" name="organization" value={form.organization} onChange={handleChange} placeholder="Your company or nonprofit (optional)" />

        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-sm font-medium text-brand-nearBlack/80">
            Message <span className="text-brand-deepPurple" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your organization and what you're hoping to achieve..."
            className={`w-full rounded-xl border px-4 py-3 text-sm text-brand-nearBlack placeholder:text-brand-nearBlack/40 outline-none transition-all resize-none ${
              errors.message
                ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                : "border-brand-lavenderMid focus:border-brand-deepPurple focus:ring-2 focus:ring-brand-lavenderLight"
            }`}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-red-600 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-deepPurple text-white font-semibold rounded-xl hover:bg-brand-deepPurpleHover transition-all duration-200 shadow-sm hover:shadow-glow-purple disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]"
        >
          {state === "submitting" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-brand-nearBlack/40 text-center leading-relaxed">
          By submitting this form, you agree to be contacted about services. We never share your information.
        </p>
      </form>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}

function Field({ label, name, value, onChange, error, required, placeholder, type = "text" }: FieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-brand-nearBlack/80">
        {label}
        {required && <span className="text-brand-deepPurple ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={name === "email" ? "email" : name === "firstName" ? "given-name" : name === "lastName" ? "family-name" : "organization"}
        className={`w-full rounded-xl border px-4 py-3 text-sm text-brand-nearBlack placeholder:text-brand-nearBlack/40 outline-none transition-all ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
            : "border-brand-lavenderMid focus:border-brand-deepPurple focus:ring-2 focus:ring-brand-lavenderLight"
        }`}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? "true" : undefined}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-600 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
