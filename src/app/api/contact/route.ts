import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  serviceOfInterest?: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { fullName, email, message } = body;

  if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Full name, email and project details are required." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const enquiry = {
    fullName: fullName.trim(),
    company: body.company?.toString().trim() || undefined,
    email: email.trim(),
    phone: body.phone?.toString().trim() || undefined,
    serviceOfInterest: body.serviceOfInterest?.toString().trim() || undefined,
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  const transporter = getTransporter();

  if (!transporter) {
    // SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASSWORD are not configured yet
    // (see .env.example) — the enquiry is logged server-side only, no email is sent.
    console.log("CharEliz website enquiry (SMTP not configured):", enquiry);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const toAddress = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER!;
  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!;

  const textBody = [
    `New project enquiry from the CharEliz website`,
    ``,
    `Name: ${enquiry.fullName}`,
    enquiry.company ? `Company: ${enquiry.company}` : null,
    `Email: ${enquiry.email}`,
    enquiry.phone ? `Phone: ${enquiry.phone}` : null,
    enquiry.serviceOfInterest ? `Service of interest: ${enquiry.serviceOfInterest}` : null,
    ``,
    `Message:`,
    enquiry.message,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <h2>New project enquiry from the CharEliz website</h2>
    <p><strong>Name:</strong> ${escapeHtml(enquiry.fullName)}</p>
    ${enquiry.company ? `<p><strong>Company:</strong> ${escapeHtml(enquiry.company)}</p>` : ""}
    <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
    ${enquiry.phone ? `<p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>` : ""}
    ${enquiry.serviceOfInterest ? `<p><strong>Service of interest:</strong> ${escapeHtml(enquiry.serviceOfInterest)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(enquiry.message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"CharEliz Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: enquiry.email,
      subject: `New project enquiry from ${enquiry.fullName}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (error) {
    console.error("Failed to send CharEliz website enquiry email:", error);
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
