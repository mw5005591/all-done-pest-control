export const onRequestPost = async (context: any) => {
  try {
    const body = await context.request.json() as any;
    const { firstName, lastName, email, phone, address, state, pestType, propertyType, message } = body;

    // 1. Send to Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "All Done Pest Control <onboarding@resend.dev>",
        to: ["mw5005591@gmail.com"],
        subject: `New Quote Request: ${firstName} ${lastName}`,
        html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    if (!res.ok) return new Response(JSON.stringify({ error: "Failed to send" }), { status: 500 });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
};
