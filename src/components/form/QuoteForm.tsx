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

const pestOptions = [
	"",
	"Termites",
	"Rodents",
	"Bed Bugs",
	"Ants",
	"Roaches",
	"Mosquitoes",
	"Ticks",
	"Other / Not Sure",
];

const stateOptions = [
	{ value: "", label: "Select State" },
	{ value: "NY", label: "New York" },
	{ value: "NJ", label: "New Jersey" },
	{ value: "CT", label: "Connecticut" },
	{ value: "other", label: "Other" },
];

export default function QuoteForm() {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

	function validate(): boolean {
		const newErrors: Partial<Record<keyof FormData, string>> = {};

		if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
		if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
		if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email";
		}
		if (!formData.address.trim()) newErrors.address = "Address or ZIP is required";
		if (!formData.state) newErrors.state = "Please select a state";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	function handleSubmit(e: React.FormEvent) {
		if (!validate()) {
			e.preventDefault();
		}
	}

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name as keyof FormData]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	}

	return (
		<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" noValidate className="space-y-5">
			{/* Name row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Field
					label="First Name"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					error={errors.firstName}
					required
				/>
				<Field
					label="Last Name"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					error={errors.lastName}
					required
				/>
			</div>

			{/* Contact row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Field
					label="Phone Number"
					name="phone"
					type="tel"
					value={formData.phone}
					onChange={handleChange}
					error={errors.phone}
					required
				/>
				<Field
					label="Email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
					required
				/>
			</div>

			{/* Location row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Field
					label="Service Address or ZIP"
					name="address"
					value={formData.address}
					onChange={handleChange}
					error={errors.address}
					required
				/>
				<div>
					<label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1.5">
						State <span className="text-red-500">*</span>
					</label>
					<select
						id="state"
						name="state"
						value={formData.state}
						onChange={handleChange}
						className={`w-full rounded-lg border px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
							errors.state ? "border-red-400" : "border-gray-300"
						}`}
					>
						{stateOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
					{errors.state && (
						<p className="text-red-500 text-sm mt-1">{errors.state}</p>
					)}
				</div>
			</div>

			{/* Pest + property type */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label htmlFor="pestType" className="block text-sm font-medium text-gray-700 mb-1.5">
						Pest Type
					</label>
					<select
						id="pestType"
						name="pestType"
						value={formData.pestType}
						onChange={handleChange}
						className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
					>
						<option value="">Not sure / Select</option>
						{pestOptions.filter(Boolean).map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1.5">
						Property Type
					</label>
					<div className="flex gap-4 mt-2">
						<label className="flex items-center gap-2 cursor-pointer">
							<input
								type="radio"
								name="propertyType"
								value="residential"
								checked={formData.propertyType === "residential"}
								onChange={handleChange}
								className="accent-brand-green"
							/>
							<span className="text-gray-700">Residential</span>
						</label>
						<label className="flex items-center gap-2 cursor-pointer">
							<input
								type="radio"
								name="propertyType"
								value="commercial"
								checked={formData.propertyType === "commercial"}
								onChange={handleChange}
								className="accent-brand-green"
							/>
							<span className="text-gray-700">Commercial</span>
						</label>
					</div>
				</div>
			</div>

			{/* Message */}
			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={4}
					value={formData.message}
					onChange={handleChange}
					placeholder="Tell us about your pest concern..."
					className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"
				/>
			</div>

			{/* Submit */}
			<div>
				<Button
					type="submit"
					size="lg"
					className="w-full sm:w-auto"
				>
					Request My Free Quote
				</Button>
				<p className="text-sm text-gray-500 mt-3">
					No obligation &bull; We typically respond within 1 business day
				</p>
			</div>
		</form>
	);
}

function Field({
	label,
	name,
	type = "text",
	value,
	onChange,
	error,
	required,
}: {
	label: string;
	name: string;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	required?: boolean;
}) {
	return (
		<div>
			<label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				className={`w-full rounded-lg border px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
					error ? "border-red-400" : "border-gray-300"
				}`}
			/>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
}
