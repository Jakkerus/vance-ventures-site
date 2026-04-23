import { NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export async function POST(req: Request) {
  try {
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
              error: "Too many requests. Please wait and try again later.",
            },
            { status: 429 }
          );
        }

        existing.count += 1;
        rateLimitMap.set(ip, existing);
      }
    }

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

    // Honeypot
    if (company_website) {
      return NextResponse.json({ ok: true });
    }

    // Basic validation
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

    console.log("Contact submission received:", {
      inquiryType,
      name,
      company,
      email,
      subject,
      message,
      ip,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
