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

const pestOptions = ["", "Termites", "Rodents", "Bed Bugs", "Ants", "Roaches", "Mosquitoes", "Ticks", "Other / Not Sure"];
const stateOptions = [
	{ value: "", label: "Select State" },
	{ value: "NY", label: "New York" },
	{ value: "NJ", label: "New Jersey" },
	{ value: "CT", label: "Connecticut" },
	{ value: "other", label: "Other" },
];

export default function QuoteForm() {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

	function validate() {
		const newErrors: any = {};
		if (!formData.firstName) newErrors.firstName = "Required";
		if (!formData.lastName) newErrors.lastName = "Required";
		if (!formData.email) newErrors.email = "Required";
		if (!formData.phone) newErrors.phone = "Required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (!validate()) return;
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
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name as keyof FormData]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	}

	if (status === "success") {
		return (
			<div className="bg-green-50 p-8 rounded-xl text-center border border-green-200">
				<h3 className="text-xl font-bold text-green-800">Request Sent Successfully!</h3>
				<p className="mt-2 text-green-700">We will get back to you within 1 business day.</p>
				<button onClick={() => setStatus("idle")} className="mt-4 text-green-600 underline">Send another request</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			{status === "error" && (
				<div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
					Something went wrong. Please call us at (845) 751-DONE instead.
				</div>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Field label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} required />
				<Field label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName} required />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Field label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required />
				<Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Field label="Service Address or ZIP" name="address" value={formData.address} onChange={handleChange} />
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
					<select name="state" value={formData.state} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2.5">
						{stateOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
					</select>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1.5">Pest Type</label>
					<select name="pestType" value={formData.pestType} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2.5">
						<option value="">Not sure / Select</option>
						{pestOptions.filter(Boolean).map(opt => <option key={opt} value={opt}>{opt}</option>)}
					</select>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
					<div className="flex gap-4 mt-2">
						<label className="flex items-center gap-2"><input type="radio" name="propertyType" value="residential" checked={formData.propertyType === "residential"} onChange={handleChange} /> Residential</label>
						<label className="flex items-center gap-2"><input type="radio" name="propertyType" value="commercial" checked={formData.propertyType === "commercial"} onChange={handleChange} /> Commercial</label>
					</div>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
				<textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 resize-none" placeholder="Tell us about your pest concern..." />
			</div>

			<Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
				{status === "loading" ? "Sending..." : "Request My Free Quote"}
			</Button>
		</form>
	);
}

function Field({ label, name, type = "text", value, onChange, error, required }: any) {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1.5">{label} {required && "*"}</label>
			<input type={type} name={name} value={value} onChange={onChange} className={`w-full rounded-lg border px-4 py-2.5 ${error ? "border-red-400" : "border-gray-300"}`} />
			{error && <p className="text-red-500 text-xs mt-1">{error}</p>}
		</div>
	);
}
