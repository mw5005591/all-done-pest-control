import type { Metadata } from "next";
import { Leaf, Heart, Search, Shield } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import ValueCard from "@/components/content/ValueCard";
import CTABlock from "@/components/content/CTABlock";

export const metadata: Metadata = {
	title: "About Us | All Done Pest Control",
	description:
		"Learn about All Done Pest Control — our commitment to eco-friendly solutions, family safety, and reliable pest control across the tri-state area.",
};

const values = [
	{
		icon: Leaf,
		title: "Eco-Friendly Methods",
		description:
			"We use EPA-approved products and targeted treatments that eliminate pests while minimizing environmental impact.",
	},
	{
		icon: Heart,
		title: "Family & Pet Safety",
		description:
			"Your family's health comes first. Every product and method we use is selected with kids and pets in mind.",
	},
	{
		icon: Search,
		title: "Thorough Process",
		description:
			"We don't cut corners. From in-depth inspections to follow-up visits, we make sure the job is done right.",
	},
	{
		icon: Shield,
		title: "Reliable Results",
		description:
			"Our treatments are designed to last. We stand behind our work and follow up to make sure pests stay gone.",
	},
];

export default function AboutPage() {
	return (
		<>
			<PageHero
				title="About All Done Pest Control"
				subtitle="We're a pest control company built on a simple idea: you shouldn't have to choose between effective pest treatment and the safety of your family, pets, and environment."
				compact
			/>

			{/* Our Story */}
			<Section bg="white">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Our Story
					</h2>
					<div className="prose prose-lg text-gray-600 space-y-4">
						<p>
							All Done Pest Control was founded with a clear mission: to provide
							reliable, effective pest control that families and businesses can
							trust — without compromising on safety or the environment.
						</p>
						<p>
							Serving homes and businesses across New York, New Jersey, and
							Connecticut, we&apos;ve built our reputation on doing the job right
							the first time. We combine modern, eco-friendly treatment methods
							with old-fashioned attention to detail, because we believe the best
							pest control is the kind that works and the kind you feel good about.
						</p>
						<p>
							Whether it&apos;s a termite inspection, a rodent problem, or seasonal
							pest prevention, our team brings the same level of care and
							professionalism to every job. We treat your home like we&apos;d treat
							our own.
						</p>
					</div>
				</div>
			</Section>

			{/* Values */}
			<Section bg="gray">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						What Drives Us
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((value) => (
						<ValueCard key={value.title} {...value} />
					))}
				</div>
			</Section>

			{/* Eco-Friendly Commitment */}
			<Section bg="white">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Our Commitment to Safety
					</h2>
					<div className="prose prose-lg text-gray-600 space-y-4">
						<p>
							When we say &quot;eco-friendly,&quot; we mean it. Our treatments use
							EPA-approved products that are specifically selected for their
							effectiveness against pests and their low impact on the environment.
						</p>
						<p>
							We use targeted application methods to minimize the amount of product
							needed, reducing waste and exposure. Our technicians are trained not
							only in pest elimination but in responsible treatment practices that
							protect your yard, your home, and the broader ecosystem.
						</p>
						<p>
							The result? Pests are gone. Your family is safe. And you can feel
							good about how it was done.
						</p>
					</div>
				</div>
			</Section>

			{/* Service Hours */}
			<Section bg="gray">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						When We&apos;re Available
					</h2>
					<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 inline-block">
						<div className="space-y-2 text-lg">
							<p className="text-gray-700">
								<span className="font-semibold">Sunday – Thursday:</span> 8:00 AM – 6:00 PM
							</p>
							<p className="text-gray-700">
								<span className="font-semibold">Friday:</span> 8:00 AM – 12:00 PM
							</p>
							<p className="text-gray-500">
								<span className="font-semibold">Saturday:</span> Closed
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* CTA */}
			<CTABlock
				heading="Ready to Protect Your Home?"
				description="Get a free, no-obligation quote and see why families across NY, NJ, and CT trust All Done."
			/>
		</>
	);
}
