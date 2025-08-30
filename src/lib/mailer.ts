import nodemailer from "nodemailer";

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

export function isSmtpConfigured(env: MailEnv = process.env): boolean {
  return Boolean(env.SMTP_HOST);
}

export function createTransporter(env: MailEnv = process.env) {
  const host = env.SMTP_HOST || "";
  const port = parseInt(env.SMTP_PORT || "0", 10) || 587;
  const secure = asBool(env.SMTP_SECURE, port === 465);
  const user = env.SMTP_USER || "";
  const pass = env.SMTP_PASS || "";

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

export function getMailFromTo(env: MailEnv = process.env) {
  const mailFrom = env.MAIL_FROM || "Ma & Co Website <no-reply@maandcoaccountants.com>";
  const mailTo = env.MAIL_TO || "info@maandcoaccountants.com";
  return { mailFrom, mailTo };
}

