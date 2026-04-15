"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address: string;
	state: string;
	pestType: string;
	propertyType: string;
	message: string;
}

const initialFormData: FormData = {
	firstName: "",
	lastName: "",
	phone: "",
	email: "",
	address: "",
	state: "",
	pestType: "",
	propertyType: "residential",
	message: "",
};

export default function QuoteForm() {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus("loading");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(formData),
				headers: { "Content-Type": "application/json" },
			});

			if (res.ok) {
				setStatus("success");
				setFormData(initialFormData);
			} else {
				setStatus("error");
			}
		} catch (error) {
			setStatus("error");
		}
	}

	function handleChange(e: any) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	if (status === "success") {
		return (
			<div className="bg-green-50 p-8 rounded-xl text-center border border-green-200">
				<h3 className="text-xl font-bold text-green-800">Request Sent!</h3>
				<p className="mt-2 text-green-700">We will get back to you within 1 business day.</p>
				<button onClick={() => setStatus("idle")} className="mt-4 text-green-600 underline">Send another</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			{status === "error" && <p className="text-red-500">Something went wrong. Please call us instead.</p>}
			{/* ... rest of your form fields ... */}
			<Button type="submit" disabled={status === "loading"}>
				{status === "loading" ? "Sending..." : "Request My Free Quote"}
			</Button>
		</form>
	);
}
