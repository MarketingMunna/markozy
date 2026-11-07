import { NextResponse } from "next/server";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

/** Very small in-memory rate limit (per server instance). */
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendWithResend(data: ContactInput) {
  const html = `
    <h2>New inquiry from the Markozy website</h2>
    <p><strong>Name:</strong> ${escape(data.name)}</p>
    <p><strong>Email:</strong> ${escape(data.email)}</p>
    <p><strong>Company:</strong> ${escape(data.company || "—")}</p>
    <p><strong>Service:</strong> ${escape(data.service)}</p>
    <p><strong>Details:</strong></p>
    <p style="white-space:pre-wrap">${escape(data.details)}</p>`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Markozy Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!.split(",").map((s) => s.trim()),
      reply_to: data.email,
      subject: `New inquiry: ${data.service} — ${data.name}`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
}

async function sendToWebhook(data: ContactInput) {
  const res = await fetch(process.env.CONTACT_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, website: undefined, source: "markozy-website", submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, error: "Please fix the highlighted fields.", fieldErrors }, { status: 422 });
  }

  // Honeypot filled → silently drop without pretending it was delivered to a person
  if (parsed.data.website) {
    return NextResponse.json({ ok: false, error: "Submission rejected." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please wait a few minutes and try again." }, { status: 429 });
  }

  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
  const hasWebhook = Boolean(process.env.CONTACT_WEBHOOK_URL);

  if (!hasResend && !hasWebhook) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our contact form isn't connected yet, so your message was not sent. Please email us or reach out on WhatsApp instead.",
      },
      { status: 503 },
    );
  }

  try {
    if (hasResend) await sendWithResend(parsed.data);
    else await sendToWebhook(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't deliver your message right now. Please try again shortly or email us directly." },
      { status: 502 },
    );
  }
}
