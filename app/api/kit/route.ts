import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

type KitSubscriberInput = {
  email: string;
  name: string;
  user_type: string;
  favorite_sport: string | null;
  referral_code: string | null;
};

const KIT_API_URL = "https://api.convertkit.com/v3";
const RESEND_API_URL = "https://api.resend.com/emails";
const SIDELINE_LOGO_CONTENT_ID = "sideline-logo";

function isKitSubscriberInput(value: unknown): value is KitSubscriberInput {
  if (!value || typeof value !== "object") {
    return false;
  }

  const subscriber = value as Partial<KitSubscriberInput>;

  return (
    typeof subscriber.email === "string" &&
    subscriber.email.trim().length > 0 &&
    typeof subscriber.name === "string" &&
    typeof subscriber.user_type === "string" &&
    (subscriber.favorite_sport === null ||
      typeof subscriber.favorite_sport === "string") &&
    (subscriber.referral_code === null ||
      typeof subscriber.referral_code === "string")
  );
}

async function addSubscriberToWaitlistTag(
  subscriber: KitSubscriberInput,
  apiKey: string,
  tagId: string,
  includeCustomFields: boolean,
) {
  const fields = Object.fromEntries(
    Object.entries({
      user_type: subscriber.user_type,
      favorite_sport: subscriber.favorite_sport,
      referral_code: subscriber.referral_code,
    }).filter((entry): entry is [string, string] => Boolean(entry[1])),
  );

  return fetch(
    `${KIT_API_URL}/tags/${encodeURIComponent(tagId)}/subscribe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        api_key: apiKey,
        email: subscriber.email,
        first_name: subscriber.name,
        ...(includeCustomFields && Object.keys(fields).length ? { fields } : {}),
      }),
      cache: "no-store",
    },
  );
}

async function syncSubscriberToKit(
  subscriber: KitSubscriberInput,
  apiKey: string,
  tagId: string,
) {
  let response = await addSubscriberToWaitlistTag(
    subscriber,
    apiKey,
    tagId,
    true,
  );

  if (!response.ok) {
    console.error(
      "Kit tag subscription with custom fields failed; retrying without custom fields.",
      {
        status: response.status,
        response: await response.text(),
      },
    );

    response = await addSubscriberToWaitlistTag(
      subscriber,
      apiKey,
      tagId,
      false,
    );
  }

  if (!response.ok) {
    throw new Error(
      `Kit tag subscription failed (${response.status}): ${await response.text()}`,
    );
  }

  console.info("Kit subscriber synced successfully.", {
    email: subscriber.email,
    tagId,
    tag: "Sideline Waitlist",
  });
}

async function sendWelcomeEmail(
  subscriber: KitSubscriberInput,
  apiKey: string,
  fromEmail: string,
) {
  const logo = await readFile(
    path.join(
      process.cwd(),
      "public",
      "assets",
      "sideline-logo-transparent.png",
    ),
  );

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Sideline <${fromEmail}>`,
      to: [subscriber.email],
      subject: "Welcome to Sideline 🚀",
      attachments: [
        {
          filename: "sideline-logo.png",
          content: logo.toString("base64"),
          content_id: SIDELINE_LOGO_CONTENT_ID,
        },
      ],
      html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="color-scheme" content="dark">
          </head>
          <body style="margin:0;background:#050706;color:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
            <div style="background:#050706;padding:32px 16px">
              <div style="margin:0 auto;max-width:600px;overflow:hidden;border:1px solid #29331e;border-radius:10px;background:#0a0d0b">
                <div style="height:4px;background:#b9ff22"></div>
                <div style="padding:32px 28px 12px;text-align:center">
                  <img src="cid:${SIDELINE_LOGO_CONTENT_ID}" width="210" alt="Sideline" style="display:block;width:210px;max-width:72%;height:auto;margin:0 auto">
                </div>
                <div style="padding:22px 28px 36px">
                  <p style="margin:0;color:#f4f4f5;font-size:17px;line-height:1.7">Thank you for joining the Sideline waitlist.</p>
                  <p style="margin:18px 0 0;color:#b7b9bd;font-size:16px;line-height:1.7">We're building a platform that brings sports fans, creators, and communities together in one place.</p>
                  <p style="margin:18px 0 12px;color:#b7b9bd;font-size:16px;line-height:1.7">As an early supporter, you'll be among the first to receive:</p>
                  <table role="presentation" style="width:100%;border-collapse:collapse">
                    <tr><td style="width:24px;padding:6px 8px 6px 0;color:#b9ff22;font-size:18px;vertical-align:top">•</td><td style="padding:6px 0;color:#f4f4f5;font-size:16px;line-height:1.5">Product updates</td></tr>
                    <tr><td style="width:24px;padding:6px 8px 6px 0;color:#b9ff22;font-size:18px;vertical-align:top">•</td><td style="padding:6px 0;color:#f4f4f5;font-size:16px;line-height:1.5">Early testing opportunities</td></tr>
                    <tr><td style="width:24px;padding:6px 8px 6px 0;color:#b9ff22;font-size:18px;vertical-align:top">•</td><td style="padding:6px 0;color:#f4f4f5;font-size:16px;line-height:1.5">Creator program announcements</td></tr>
                    <tr><td style="width:24px;padding:6px 8px 6px 0;color:#b9ff22;font-size:18px;vertical-align:top">•</td><td style="padding:6px 0;color:#f4f4f5;font-size:16px;line-height:1.5">Launch access and exclusive perks</td></tr>
                  </table>
                  <p style="margin:22px 0 0;color:#b7b9bd;font-size:16px;line-height:1.7">We're just getting started, and we're glad to have you with us as we build Sideline.</p>
                  <div style="margin-top:28px;border-top:1px solid #252a25;padding-top:22px">
                    <p style="margin:0;color:#f4f4f5;font-size:16px;line-height:1.6">See you on the Sideline,</p>
                    <p style="margin:5px 0 0;color:#b9ff22;font-size:16px;font-weight:700;line-height:1.6">Team Sideline</p>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: [
        "Thank you for joining the Sideline waitlist.",
        "",
        "We're building a platform that brings sports fans, creators, and communities together in one place.",
        "",
        "As an early supporter, you'll be among the first to receive:",
        "",
        "• Product updates",
        "• Early testing opportunities",
        "• Creator program announcements",
        "• Launch access and exclusive perks",
        "",
        "We're just getting started, and we're glad to have you with us as we build Sideline.",
        "",
        "See you on the Sideline,",
        "",
        "Team Sideline",
      ].join("\n"),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Resend welcome email failed (${response.status}): ${await response.text()}`,
    );
  }

  console.info("Waitlist welcome email sent.", {
    email: subscriber.email,
    provider: "Resend",
  });
}

export async function POST(request: Request) {
  try {
    const kitApiKey = process.env.KIT_API_KEY;
    const tagId = process.env.KIT_TAG_ID;
    const resendApiKey = process.env.RESEND_API_KEY;
    const waitlistFromEmail = process.env.WAITLIST_FROM_EMAIL;

    const subscriber: unknown = await request.json();

    if (!isKitSubscriberInput(subscriber)) {
      return NextResponse.json({ error: "Invalid subscriber data." }, { status: 400 });
    }

    const results = await Promise.allSettled([
      kitApiKey && tagId
        ? syncSubscriberToKit(subscriber, kitApiKey, tagId)
        : Promise.reject(
            new Error("KIT_API_KEY or KIT_TAG_ID is not configured."),
          ),
      resendApiKey && waitlistFromEmail
        ? sendWelcomeEmail(subscriber, resendApiKey, waitlistFromEmail)
        : Promise.reject(
            new Error(
              "RESEND_API_KEY or WAITLIST_FROM_EMAIL is not configured.",
            ),
          ),
    ]);

    const [kitResult, emailResult] = results;

    if (kitResult.status === "rejected") {
      console.error("Kit subscriber sync failed.", kitResult.reason);
    }

    if (emailResult.status === "rejected") {
      console.error("Waitlist welcome email failed.", emailResult.reason);
    }

    return NextResponse.json({
      ok: true,
      kitSynced: kitResult.status === "fulfilled",
      welcomeEmailSent: emailResult.status === "fulfilled",
    });
  } catch (error) {
    console.error("Waitlist post-signup processing failed.", error);
    return NextResponse.json(
      { error: "Waitlist post-signup processing failed." },
      { status: 500 },
    );
  }
}
