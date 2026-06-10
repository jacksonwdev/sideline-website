import { NextResponse } from "next/server";

type ContactNotification = {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";

function isContactNotification(value: unknown): value is ContactNotification {
  if (!value || typeof value !== "object") {
    return false;
  }

  const contact = value as Partial<ContactNotification>;

  return (
    typeof contact.name === "string" &&
    contact.name.trim().length > 0 &&
    typeof contact.email === "string" &&
    contact.email.trim().length > 0 &&
    typeof contact.category === "string" &&
    contact.category.trim().length > 0 &&
    typeof contact.subject === "string" &&
    typeof contact.message === "string" &&
    contact.message.trim().length > 0
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !notificationEmail || !fromEmail) {
      throw new Error(
        "RESEND_API_KEY, CONTACT_NOTIFICATION_EMAIL, or CONTACT_FROM_EMAIL is not configured.",
      );
    }

    const contact: unknown = await request.json();

    if (!isContactNotification(contact)) {
      return NextResponse.json(
        { error: "Invalid contact notification data." },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "America/Chicago",
    });

    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notificationEmail],
        reply_to: contact.email,
        subject: `New Sideline contact: ${contact.subject || contact.category}`,
        html: `
          <div style="background:#080b0c;color:#f4f4f5;font-family:Arial,sans-serif;padding:32px">
            <div style="margin:0 auto;max-width:640px;border:1px solid #29301f;background:#0d1010;padding:28px">
              <p style="margin:0 0 8px;color:#b9ff22;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase">Sideline Contact Form</p>
              <h1 style="margin:0 0 24px;font-size:26px">New contact submission</h1>
              <table style="width:100%;border-collapse:collapse;color:#d4d4d8">
                <tr><td style="padding:8px 12px 8px 0;color:#71717a">Name</td><td style="padding:8px 0;font-weight:700">${escapeHtml(contact.name)}</td></tr>
                <tr><td style="padding:8px 12px 8px 0;color:#71717a">Email</td><td style="padding:8px 0">${escapeHtml(contact.email)}</td></tr>
                <tr><td style="padding:8px 12px 8px 0;color:#71717a">Category</td><td style="padding:8px 0">${escapeHtml(contact.category)}</td></tr>
                <tr><td style="padding:8px 12px 8px 0;color:#71717a">Subject</td><td style="padding:8px 0">${escapeHtml(contact.subject || "(No subject)")}</td></tr>
                <tr><td style="padding:8px 12px 8px 0;color:#71717a">Submitted</td><td style="padding:8px 0">${escapeHtml(submittedAt)}</td></tr>
              </table>
              <div style="margin-top:24px;border-top:1px solid #27272a;padding-top:20px">
                <p style="margin:0 0 8px;color:#71717a;font-size:12px;text-transform:uppercase">Message</p>
                <p style="margin:0;white-space:pre-wrap;line-height:1.65">${escapeHtml(contact.message)}</p>
              </div>
            </div>
          </div>
        `,
        text: [
          "New Sideline contact submission",
          "",
          `Name: ${contact.name}`,
          `Email: ${contact.email}`,
          `Category: ${contact.category}`,
          `Subject: ${contact.subject || "(No subject)"}`,
          `Submission time: ${submittedAt}`,
          "",
          "Message:",
          contact.message,
        ].join("\n"),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Resend notification failed (${response.status}): ${await response.text()}`,
      );
    }

    console.info("Contact notification email sent.", {
      category: contact.category,
      submittedAt,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact notification email failed.", error);
    return NextResponse.json(
      { error: "Contact notification email failed." },
      { status: 502 },
    );
  }
}
