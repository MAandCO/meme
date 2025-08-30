import { NextResponse } from "next/server";
import { createTransporter, getMailFromTo, isSmtpConfigured } from "@/lib/mailer";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const toParam = searchParams.get("to") || undefined;
    const { mailFrom, mailTo } = getMailFromTo();
    const to = toParam || mailTo;
    const transporter = createTransporter();
    const smtp = isSmtpConfigured();

    const info = await transporter.sendMail({
      from: mailFrom,
      to,
      subject: "Test email from Ma & Co website",
      text: "If you received this, SMTP is working.",
      html: "<p>If you received this, SMTP is working.</p>"
    });

    return NextResponse.json({ ok: true, smtpConfigured: smtp, info });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 });
  }
}

