import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.SES_REGION,
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID!,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY!,
  },
});

// Simple in-memory rate limit (dev/basic protection)
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export async function POST(req: Request) {
  try {
    // ===== Rate limiting =====
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    const now = Date.now();
    const existing = rateLimitMap.get(ip);

    if (!existing) {
      rateLimitMap.set(ip, { count: 1, firstRequest: now });
    } else {
      if (now - existing.firstRequest > WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
      } else {
        if (existing.count >= MAX_REQUESTS) {
          return NextResponse.json(
            {
              ok: false,
              error: "Too many requests. Please try again later.",
            },
            { status: 429 }
          );
        }

        existing.count += 1;
        rateLimitMap.set(ip, existing);
      }
    }

    // ===== Parse body =====
    const body = await req.json();

    const {
      inquiryType,
      name,
      company,
      email,
      subject,
      message,
      company_website,
    } = body;

    // ===== Turnstile Token =====
    const { turnstileToken } = body;

    if (!turnstileToken) {
      return NextResponse.json(
        { ok: false, error: "Verification required." },
        { status: 400 }
      );
    }

    // ===== Honeypot =====
    if (company_website) {
      return NextResponse.json({ ok: true });
    }

    // ===== Validation =====
    if (!inquiryType || !name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || message.trim().length < 20) {
      return NextResponse.json(
        { ok: false, error: "Message must be at least 20 characters." },
        { status: 400 }
      );
    }

    // ===== Turnstile Verification =====
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      }
    );

const verifyData = await verifyRes.json();

if (!verifyData.success) {
  return NextResponse.json(
    { ok: false, error: "Failed verification." },
    { status: 400 }
  );
}

    // ===== Send Email via SES =====
    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!],
      },
      Message: {
        Subject: {
          Data: `New Inquiry: ${inquiryType}`,
        },
        Body: {
          Text: {
            Data: `
New Contact Form Submission

Inquiry Type: ${inquiryType}
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
          },
        },
      },
    });

    await ses.send(command);

    console.log("Email sent successfully:", {
      inquiryType,
      name,
      email,
      ip,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
