import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createTransporter, getMailFromTo, isSmtpConfigured } from "@/lib/mailer";

export const runtime = "nodejs";

function sanitize(value: unknown, max = 500) {
  let s = typeof value === "string" ? value : String(value ?? "");
  s = s.replace(/[\r\n]/g, " ").trim();
  if (s.length > max) s = s.slice(0, max);
  return s;
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

function asBool(v: string | undefined, fallback = false) {
  if (v == null) return fallback;
  return /^(1|true|yes)$/i.test(v);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      form.forEach((value, key) => {
        payload[key] = typeof value === "string" ? value : (value as File).name;
      });
    }

    const name = sanitize(payload.name);
    const email = sanitize(payload.email);
    const businessType = sanitize(payload.businessType);
    const service = sanitize(payload.service);
    const message = sanitize(payload.message, 5000);

    if (!name || !email || !isEmail(email)) {
      return NextResponse.redirect(new URL("/?contact=error", request.url));
    }

    const { mailFrom, mailTo } = getMailFromTo();
    const smtpConfigured = isSmtpConfigured();
    const transporter = createTransporter();

    const subject = `New enquiry from ${name} · ${service || "Consultation"}`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 12px">New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;border:1px solid #e2e8f0;border-radius:8px;padding:12px;background:#f8fafc">${message || "(none)"}</div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: isEmail(email) ? email : undefined,
      subject,
      html
    });

    if (!smtpConfigured) {
      console.info("[contact] SMTP not configured – message output (jsonTransport):", info.message);
    }

    const okUrl = new URL("/", request.url);
    okUrl.searchParams.set("contact", "ok");
    okUrl.hash = "contact";
    return NextResponse.redirect(okUrl);
  } catch (err) {
    console.error(err);
    const errUrl = new URL("/", request.url);
    errUrl.searchParams.set("contact", "error");
    errUrl.hash = "contact";
    return NextResponse.redirect(errUrl);
  }
}
