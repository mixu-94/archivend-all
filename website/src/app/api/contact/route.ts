import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
  datenschutz: boolean;
}

const sanitize = (s: string) => s.replace(/<[^>]*>/g, "").trim();

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte warten Sie einen Moment." },
      { status: 429 }
    );
  }

  let body: ContactFormData;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name, email, message, interest, datenschutz } = body;

  if (!name?.trim() || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Bitte geben Sie Ihren Namen ein." },
      { status: 422 }
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email?.trim() || !emailRegex.test(email.trim())) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 422 }
    );
  }
  if (!message?.trim() || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Ihre Nachricht ist zu kurz (mindestens 10 Zeichen)." },
      { status: 422 }
    );
  }
  if (!datenschutz) {
    return NextResponse.json(
      { error: "Bitte bestätigen Sie die Datenschutzerklärung." },
      { status: 422 }
    );
  }

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safePhone = body.phone ? sanitize(body.phone) : "Nicht angegeben";
  const safeInterest = sanitize(interest ?? "Sonstiges");
  const safeMessage = sanitize(message);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.strato.de",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { rejectUnauthorized: true },
  });

  const subject = `[Archivend] Kontaktanfrage — ${safeInterest} von ${safeName}`;

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#1B2F5C;padding:20px 24px;">
        <h1 style="color:#fff;margin:0;font-size:20px;">Neue Kontaktanfrage</h1>
        <p style="color:#C9A84C;margin:4px 0 0;font-size:13px;">Archivend GmbH — Kontaktformular</p>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:8px 0;font-weight:bold;width:110px;color:#374151;">Name:</td><td style="padding:8px 0;color:#111827;">${safeName}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">E-Mail:</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#1B2F5C;">${safeEmail}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Telefon:</td><td style="padding:8px 0;color:#111827;">${safePhone}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Interesse:</td><td style="padding:8px 0;color:#111827;">${safeInterest}</td></tr>
        </table>
        <div style="background:#f9fafb;padding:16px;border-radius:6px;border-left:3px solid #C9A84C;">
          <p style="font-weight:bold;margin:0 0 8px;color:#374151;">Nachricht:</p>
          <p style="margin:0;color:#111827;white-space:pre-wrap;">${safeMessage}</p>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Gesendet über das Kontaktformular auf archivend.de</p>
      </div>
    </div>
  `;

  const text = [
    `Name: ${safeName}`,
    `E-Mail: ${safeEmail}`,
    `Telefon: ${safePhone}`,
    `Interesse: ${safeInterest}`,
    ``,
    `Nachricht:`,
    safeMessage,
    ``,
    `---`,
    `Gesendet über das Kontaktformular auf archivend.de`,
  ].join("\n");

  const confirmationHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#1B2F5C;padding:20px 24px;">
        <h1 style="color:#fff;margin:0;font-size:20px;">Vielen Dank für Ihre Anfrage</h1>
        <p style="color:#C9A84C;margin:4px 0 0;font-size:13px;">Archivend GmbH — Bestätigung</p>
      </div>
      <div style="padding:24px;">
        <p style="color:#111827;margin-bottom:16px;">Guten Tag ${safeName},</p>
        <p style="color:#374151;margin-bottom:16px;">wir haben Ihre Nachricht erhalten und werden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen melden.</p>
        <div style="background:#f9fafb;padding:16px;border-radius:6px;border-left:3px solid #C9A84C;margin-bottom:20px;">
          <p style="font-weight:bold;margin:0 0 8px;color:#374151;">Ihre Anfrage (Thema: ${safeInterest}):</p>
          <p style="margin:0;color:#111827;white-space:pre-wrap;">${safeMessage}</p>
        </div>
        <p style="color:#374151;margin-bottom:4px;">Bei dringenden Fragen erreichen Sie uns direkt:</p>
        <p style="color:#374151;margin-bottom:4px;"><strong>Tel:</strong> +49 (0) 7951 / 472 14 29</p>
        <p style="color:#374151;margin-bottom:20px;"><strong>E-Mail:</strong> info@archivend.de</p>
        <p style="color:#6b7280;font-size:13px;">Mit freundlichen Grüßen<br/>Archivend GmbH · Dossenbergerstr. 5 · 89312 Günzburg</p>
      </div>
    </div>
  `;

  const confirmationText = [
    `Guten Tag ${safeName},`,
    ``,
    `wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.`,
    ``,
    `Ihre Anfrage (Thema: ${safeInterest}):`,
    safeMessage,
    ``,
    `Bei dringenden Fragen erreichen Sie uns direkt:`,
    `Tel: +49 (0) 7951 / 472 14 29`,
    `E-Mail: info@archivend.de`,
    ``,
    `Mit freundlichen Grüßen`,
    `Archivend GmbH · Dossenbergerstr. 5 · 89312 Günzburg`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Archivend Website" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      replyTo: `"${safeName}" <${safeEmail}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      subject,
      text,
      html,
    });

    await transporter.sendMail({
      from: `"Archivend GmbH" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: `"${safeName}" <${safeEmail}>`,
      subject: `Ihre Anfrage bei Archivend GmbH — ${safeInterest}`,
      text: confirmationText,
      html: confirmationHtml,
    });

    return NextResponse.json(
      { message: "Ihre Nachricht wurde erfolgreich gesendet." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json(
      {
        error:
          "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon.",
      },
      { status: 500 }
    );
  }
}
