import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // ── Validation ──────────────────────────────────────────
    const trimmedName = name?.trim() ?? "";
    const trimmedEmail = email?.trim() ?? "";
    const trimmedMessage = message?.trim() ?? "";

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (trimmedName.length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (trimmedMessage.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }
    if (trimmedMessage.length > 2000) {
      return NextResponse.json({ error: "Message must be under 2000 characters." }, { status: 400 });
    }

    // ── Send email via Resend ───────────────────────────────
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "vithurshanthangavel@gmail.com"],
      subject: `Portfolio Contact from ${trimmedName}`,
      replyTo: trimmedEmail,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0f; color: #e4e4e7; border-radius: 16px;">
          <div style="border-bottom: 1px solid #27272a; padding-bottom: 20px; margin-bottom: 24px;">
            <h2 style="margin: 0; font-size: 20px; color: #a78bfa;">📩 New Portfolio Message</h2>
          </div>
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">From</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600;">${trimmedName}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">Email</p>
            <p style="margin: 0; font-size: 16px;"><a href="mailto:${trimmedEmail}" style="color: #818cf8; text-decoration: none;">${trimmedEmail}</a></p>
          </div>
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <div style="background: #18181b; padding: 16px; border-radius: 12px; border: 1px solid #27272a; margin-top: 8px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${trimmedMessage}</p>
            </div>
          </div>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #27272a;">
            <p style="margin: 0; font-size: 12px; color: #52525b;">Sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
