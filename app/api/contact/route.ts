import { NextResponse } from "next/server";
import { Resend } from "resend";


async function verifyTurnstile(token: string): Promise<boolean> {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, email, phone, service, business, turnstileToken } = body;

    // Basic validation
    if (!name || !email || !business) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Turnstile verification — skip in development
    if (process.env.NODE_ENV === "production") {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "Security check failed. Please try again." },
          { status: 400 }
        );
      }
      const valid = await verifyTurnstile(turnstileToken);
      if (!valid) {
        return NextResponse.json(
          { error: "Security check failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // Input sanitisation — strip HTML tags
    const sanitise = (str: string) =>
      str.replace(/<[^>]*>/g, "").trim().slice(0, 2000);

    await resend.emails.send({
      from: "CBS Website <noreply@callusbrandsolutions.com>",
      to: [process.env.CONTACT_EMAIL ?? "hello@callusbrandsolutions.com"],
      replyTo: email,
      subject: `New enquiry from ${sanitise(name)} — ${service || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#1a1410;color:#f5f0ea;border-radius:12px;">
          <div style="margin-bottom:24px;">
            <div style="font-size:22px;font-weight:600;color:#e8eaed;margin-bottom:4px;">New enquiry — Callus Brand Solutions</div>
            <div style="font-size:13px;color:#8a9099;">Submitted via callusbrandsolutions.com</div>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);color:#8a9099;font-size:13px;width:130px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);font-size:14px;">${sanitise(name)}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);color:#8a9099;font-size:13px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);font-size:14px;">${sanitise(email)}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);color:#8a9099;font-size:13px;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);font-size:14px;">${sanitise(phone || "Not provided")}</td></tr>
            <tr><td style="padding:10px 0;color:#8a9099;font-size:13px;">Service</td>
                <td style="padding:10px 0;font-size:14px;">${sanitise(service || "Not specified")}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:rgba(123,79,46,0.15);border-radius:8px;border:1px solid rgba(200,160,80,0.15);">
            <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#b8963e;margin-bottom:10px;">Message</div>
            <div style="font-size:14px;line-height:1.7;color:#c8cdd4;">${sanitise(business)}</div>
          </div>
          <div style="margin-top:24px;font-size:12px;color:#8a9099;">
            Reply directly to this email to respond to ${sanitise(name)}.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}