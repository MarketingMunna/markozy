"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Info, LoaderCircle, Send } from "lucide-react";
import { contactSchema, serviceOptions, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<keyof ContactInput, string>>;
type Status = { state: "idle" | "submitting" | "success" | "error"; message?: string };

const fieldBase =
  "peer w-full scroll-mt-32 rounded-2xl border bg-white/[0.03] px-4 pb-3 pt-6 text-sm text-white outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-transparent focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.15)]";

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const initialService = serviceOptions.includes(defaultService as (typeof serviceOptions)[number]) ? defaultService! : "";
  const [values, setValues] = useState({ name: "", email: "", company: "", service: initialService, details: "", website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const update = (key: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as keyof Errors]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const result = contactSchema.safeParse(values);
    if (result.success) {
      setErrors({});
      return result.data;
    }
    const next: Errors = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof ContactInput;
      if (!next[key]) next[key] = issue.message;
    }
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) document.getElementById(`cf-${first}`)?.focus();
    return null;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fieldErrors?: Errors };
      if (res.ok && json.ok) {
        setStatus({ state: "success", message: "Thanks! Your inquiry has been sent. We'll get back to you within 24 hours." });
        setValues({ name: "", email: "", company: "", service: "", details: "", website: "" });
        return;
      }
      if (json.fieldErrors) setErrors(json.fieldErrors);
      setStatus({ state: "error", message: json.error || "Something went wrong sending your message. Please try again or email us directly." });
    } catch {
      setStatus({ state: "error", message: "We couldn't reach the server. Check your connection and try again, or contact us on WhatsApp." });
    }
  };

  const errorId = (k: string) => (errors[k as keyof Errors] ? `cf-${k}-error` : undefined);
  const borderFor = (k: keyof Errors) => (errors[k] ? "border-red-400/70" : "border-white/10 focus:border-brand-soft/70");

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-4" aria-describedby="cf-required-note">
      <p id="cf-required-note" className="text-xs text-mist">Fields marked * are required.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name *" error={errors.name}>
          <input id="cf-name" name="name" autoComplete="name" placeholder="Name" value={values.name} onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errorId("name")} aria-required="true" className={cn(fieldBase, borderFor("name"))} />
        </Field>
        <Field id="email" label="Email *" error={errors.email}>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="Email" value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errorId("email")} aria-required="true" className={cn(fieldBase, borderFor("email"))} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="company" label="Company" error={errors.company}>
          <input id="cf-company" name="company" autoComplete="organization" placeholder="Company" value={values.company} onChange={(e) => update("company", e.target.value)} aria-invalid={Boolean(errors.company)} aria-describedby={errorId("company")} className={cn(fieldBase, borderFor("company"))} />
        </Field>
        <Field id="service" label="Service Interested In *" error={errors.service} floatAlways>
          <select id="cf-service" name="service" value={values.service} onChange={(e) => update("service", e.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errorId("service")} aria-required="true" className={cn(fieldBase, borderFor("service"), "appearance-none pr-10 [&>option]:bg-coal", !values.service && "text-mist")}>
            <option value="" disabled>Choose a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </Field>
      </div>

      <Field id="details" label="Project Details *" error={errors.details}>
        <textarea id="cf-details" name="details" rows={5} placeholder="Project details" value={values.details} onChange={(e) => update("details", e.target.value)} aria-invalid={Boolean(errors.details)} aria-describedby={errorId("details")} aria-required="true" className={cn(fieldBase, borderFor("details"), "resize-y")} />
      </Field>

      {/* Honeypot for bots — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="group relative inline-flex h-14 shrink-0 items-center whitespace-nowrap justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-deep via-brand to-brand-soft px-8 font-medium text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.8)] transition-shadow hover:shadow-[0_14px_50px_-8px_rgba(139,92,246,1)] disabled:cursor-wait disabled:opacity-70"
        >
          {status.state === "submitting" ? (
            <>
              <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Submit Inquiry <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="text-xs text-mist">We reply within 24 hours. No spam, ever.</p>
      </div>

      <div aria-live="polite" role="status">
        <AnimatePresence>
          {(status.state === "success" || status.state === "error") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={cn(
                "mt-2 flex gap-3 rounded-2xl border p-4 text-sm",
                status.state === "success" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100" : "border-amber-300/30 bg-amber-300/10 text-amber-100",
              )}
            >
              {status.state === "success" ? <CircleCheck className="h-5 w-5 shrink-0" aria-hidden="true" /> : <Info className="h-5 w-5 shrink-0" aria-hidden="true" />}
              <p>{status.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Field({ id, label, error, children, floatAlways }: { id: string; label: string; error?: string; children: React.ReactNode; floatAlways?: boolean }) {
  return (
    <div>
      <div className="relative">
        {children}
        <label
          htmlFor={`cf-${id}`}
          className={cn(
            "pointer-events-none absolute left-4 text-mist transition-all duration-200",
            floatAlways
              ? "top-2 text-[11px]"
              : "top-2 text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-brand-soft",
          )}
        >
          {label}
        </label>
      </div>
      {error && (
        <p id={`cf-${id}-error`} className="mt-1.5 pl-1 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
