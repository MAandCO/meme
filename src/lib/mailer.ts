import nodemailer, { Transporter } from "nodemailer";

export type MailEnv = {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  MAIL_FROM?: string;
  MAIL_TO?: string;
};

function asBool(v: string | undefined, fallback = false) {
  if (v == null) return fallback;
  return /^(1|true|yes)$/i.test(v);
}

export function isSmtpConfigured(env?: MailEnv): boolean {
  const e = (env ?? (process.env as unknown as MailEnv));
  return Boolean(e.SMTP_HOST);
}

export function createTransporter(env?: MailEnv): Transporter {
  const e = (env ?? (process.env as unknown as MailEnv));
  const host = e.SMTP_HOST || "";
  const port = parseInt(e.SMTP_PORT || "0", 10) || 587;
  const secure = asBool(e.SMTP_SECURE, port === 465);
  const user = e.SMTP_USER || "";
  const pass = e.SMTP_PASS || "";

  if (!host) {
    return nodemailer.createTransport({ jsonTransport: true });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined
  });
}

export function getMailFromTo(env?: MailEnv) {
  const e = (env ?? (process.env as unknown as MailEnv));
  const mailFrom = e.MAIL_FROM || "Ma & Co Website <no-reply@maandcoaccountants.com>";
  const mailTo = e.MAIL_TO || "info@maandcoaccountants.com";
  return { mailFrom, mailTo };
}
