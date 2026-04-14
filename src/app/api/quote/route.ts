import { NextResponse } from "next/server";

interface QuoteRequest {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address: string;
	state: string;
	pestType?: string;
	propertyType?: string;
	message?: string;
}

export async function POST(request: Request) {
	try {
		const body: QuoteRequest = await request.json();

		// Server-side validation
		const requiredFields: (keyof QuoteRequest)[] = [
			"firstName",
			"lastName",
			"phone",
			"email",
			"address",
			"state",
		];

		const missing = requiredFields.filter(
			(field) => !body[field] || String(body[field]).trim() === ""
		);

		if (missing.length > 0) {
			return NextResponse.json(
				{ error: "Missing required fields", fields: missing },
				{ status: 400 }
			);
		}

		// Basic email format check
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 }
			);
		}

		// TODO: Plug in email service or CRM delivery here
		// For now, log the submission and return success
		console.log("Quote request received:", {
			name: `${body.firstName} ${body.lastName}`,
			phone: body.phone,
			email: body.email,
			address: body.address,
			state: body.state,
			pestType: body.pestType || "Not specified",
			propertyType: body.propertyType || "residential",
			message: body.message || "",
			timestamp: new Date().toISOString(),
		});

		return NextResponse.json(
			{ success: true, message: "Quote request received" },
			{ status: 200 }
		);
	} catch {
		return NextResponse.json(
			{ error: "Invalid request" },
			{ status: 400 }
		);
	}
}
