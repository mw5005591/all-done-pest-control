export const runtime = "edge";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, address, state, pestType, propertyType, message } = body;

    // 1. Validate data
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Send email using Resend
    // Note: Add RESEND_API_KEY to Cloudflare Pages environment variables
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "All Done Pest Control <onboarding@resend.dev>",
        to: ["mw5005591@gmail.com"],
        subject: `New Quote Request: ${firstName} ${lastName}`,
        html: `
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}, ${state}</p>
          <p><strong>Pest Type:</strong> ${pestType || "Not specified"}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
        `,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
