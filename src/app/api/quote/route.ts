export async function POST(request: Request) {
	try {
		const data = await request.json();

		// Validate required fields
		const requiredFields = ["firstName", "lastName", "email", "phone"];
		for (const field of requiredFields) {
			if (!data[field]) {
				return Response.json(
					{ error: `Missing required field: ${field}` },
					{ status: 400 }
				);
			}
		}

		// TODO: Send email or integrate with CRM (SendGrid, Mailgun, Zapier, etc.)
		console.log("Quote request received:", data);

		return Response.json(
			{ success: true, message: "Quote request submitted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error processing quote:", error);
		return Response.json(
			{ error: "Failed to process quote request" },
			{ status: 500 }
		);
	}
}
