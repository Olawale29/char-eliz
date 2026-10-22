"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data/services";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"fullName" | "email" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "w-full border border-border-subtle bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!fullName) nextErrors.fullName = "Please enter your full name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please tell us a little about the project.";

    setErrors(nextErrors);
    setServerError(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          company: data.get("company"),
          email,
          phone: data.get("phone"),
          serviceOfInterest: data.get("serviceOfInterest"),
          message,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setServerError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brand-blue/30 bg-brand-blue/5 p-8" role="status">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-navy">
          Thank you — your enquiry has been received.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          A member of the CharEliz team will review your project details and respond as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-5 text-sm font-semibold text-brand-blue"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-text-primary">
            Full name <span className="text-brand-rust">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClasses}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-1.5 text-xs text-brand-rust">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-text-primary">
            Company / organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
            Email address <span className="text-brand-rust">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-brand-rust">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-primary">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="serviceOfInterest" className="mb-1.5 block text-sm font-medium text-text-primary">
          Service of interest
        </label>
        <select id="serviceOfInterest" name="serviceOfInterest" defaultValue="" className={inputClasses}>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
          Project details <span className="text-brand-rust">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClasses}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-brand-rust">
            {errors.message}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <p role="alert" className="text-sm text-brand-rust">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 bg-brand-blue px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-brand-navy disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
