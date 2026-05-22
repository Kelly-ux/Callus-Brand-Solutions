import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // 1. Safe Check: Verify API key exists before instantiating to prevent server crashes
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Email service configuration missing" },
        { status: 500 }
      );
    }

    // 2. Instantiate inside the handler so it executes at runtime, not build time
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, email, phone, service, business } = body;

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

    // Send email via Resend
    await resend.emails.send({
      from: "CBS Website <noreply@callusbrandsolutions.com>",
      to: [process.env.CONTACT_EMAIL ?? "hello@callusbrandsolutions.com"],
      replyTo: email,
      subject: `New enquiry from ${name} — ${service || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#1a1410;color:#f5f0ea;border-radius:12px;">
          <div style="margin-bottom:24px;">
            <div style="font-size:22px;font-weight:600;color:#e8eaed;margin-bottom:4px;">New enquiry — Callus Brand Solutions</div>
            <div style="font-size:13px;color:#8a9099;">Submitted via callusbrandsolutions.com</div>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);color:#8a9099;font-size:13px;width:130px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);font-size:14px;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);color:#8a9099;font-size:13px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);font-size:14px;">${email}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);color:#8a9099;font-size:13px;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(200,160,80,0.15);font-size:14px;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:10px 0;color:#8a9099;font-size:13px;">Service</td>
                <td style="padding:10px 0;font-size:14px;">${service || "Not specified"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:rgba(123,79,46,0.15);border-radius:8px;border:1px solid rgba(200,160,80,0.15);">
            <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#b8963e;margin-bottom:10px;">Message</div>
            <div style="font-size:14px;line-height:1.7;color:#c8cdd4;">${business}</div>
          </div>
          <div style="margin-top:24px;font-size:12px;color:#8a9099;">
            Reply directly to this email to respond to ${name}.
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