import type { Metadata } from "next";
import { Phone, Clock, CheckCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import QuoteForm from "@/components/form/QuoteForm";
import TestimonialCard from "@/components/content/TestimonialCard";
import { PHONE_TEL, PHONE_NUMBER } from "@/components/ui/PhoneNumber";

export const metadata: Metadata = {
	title: "Get a Free Quote | All Done Pest Control",
	description:
		"Request your free, no-obligation pest control quote from All Done Pest Control. Serving NY, NJ & CT.",
};

const expectSteps = [
	"We review your information and assess your needs",
	"A team member reaches out within 1 business day",
	"We schedule a convenient time for your free inspection",
];

export default function ContactPage() {
	return (
		<>
			{/* Hero area */}
			<section className="bg-gradient-to-br from-brand-blue-light via-white to-green-50 py-12 md:py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900">
						Get Your Free Quote
					</h1>
					<p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
						Get your free, no-obligation pest control quote. We&apos;ll respond
						quickly.
					</p>
				</div>
			</section>

			<Section bg="white">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Form — takes 2 columns */}
					<div className="lg:col-span-2">
						<QuoteForm />
					</div>

					{/* Sidebar */}
					<div className="space-y-8">
						{/* Phone */}
						<div className="bg-gray-50 rounded-xl p-6">
							<h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
								<Phone size={20} className="text-brand-green" />
								Prefer to Call?
							</h3>
							<a
								href={PHONE_TEL}
								className="text-2xl font-bold text-brand-green hover:text-brand-green-dark transition-colors"
							>
								{PHONE_NUMBER}
							</a>
						</div>

						{/* Hours */}
						<div className="bg-gray-50 rounded-xl p-6">
							<h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
								<Clock size={20} className="text-brand-green" />
								Service Hours
							</h3>
							<div className="space-y-1 text-sm text-gray-600">
								<p>
									<span className="font-medium">Sun – Thu:</span> 8:00 AM – 6:00 PM
								</p>
								<p>
									<span className="font-medium">Friday:</span> 8:00 AM – 12:00 PM
								</p>
								<p className="text-gray-400">
									<span className="font-medium">Saturday:</span> Closed
								</p>
							</div>
						</div>

						{/* What to Expect */}
						<div className="bg-gray-50 rounded-xl p-6">
							<h3 className="font-semibold text-gray-900 mb-3">
								What to Expect
							</h3>
							<ol className="space-y-3">
								{expectSteps.map((step, i) => (
									<li key={i} className="flex items-start gap-3 text-sm text-gray-600">
										<CheckCircle
											size={18}
											className="text-brand-green shrink-0 mt-0.5"
										/>
										{step}
									</li>
								))}
							</ol>
						</div>

						{/* Testimonial */}
						<TestimonialCard
							quote="All Done made the whole process stress-free. They were responsive, on time, and the results speak for themselves. Highly recommend."
							name="Jennifer M."
							location="New York"
						/>

						{/* Trust text */}
						<p className="text-sm text-gray-500 text-center">
							We&apos;ll never share your information. Your privacy is important to us.
						</p>
					</div>
				</div>
			</Section>
		</>
	);
}
