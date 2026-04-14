import type { Metadata } from "next";
import {
	Bug,
	Rat,
	BedDouble,
	ShieldCheck,
	Search,
	ClipboardList,
	SprayCan,
	RefreshCw,
	Building2,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/content/ServiceCard";
import CTABlock from "@/components/content/CTABlock";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
	title: "Pest Control Services | All Done Pest Control",
	description:
		"From termites to rodents to mosquitoes, All Done Pest Control provides safe, effective treatment for homes and businesses in NY, NJ & CT.",
};

const residentialServices = [
	{
		id: "termites",
		icon: Bug,
		name: "Termites",
		description:
			"Termites can cause serious structural damage before you even know they're there. Our thorough inspections identify the problem early, and our eco-friendly treatments eliminate colonies at the source while protecting your home long-term.",
	},
	{
		id: "rodents",
		icon: Rat,
		name: "Rodents",
		description:
			"Mice and rats carry disease and cause property damage. We safely remove rodents using family-safe methods, then seal entry points to prevent them from coming back. Humane, effective, and lasting.",
	},
	{
		id: "bed-bugs",
		icon: BedDouble,
		name: "Bed Bugs",
		description:
			"Bed bugs are stubborn, but we're more stubborn. Our discreet, thorough treatment process eliminates bed bugs at every life stage so you can sleep easy again — without harsh chemicals in your bedroom.",
	},
	{
		id: "ants",
		icon: Bug,
		name: "Ants",
		description:
			"A few ants quickly become thousands. We use targeted colony treatment that stops the problem at its source with eco-friendly solutions that are safe for your home and family.",
	},
	{
		id: "roaches",
		icon: Bug,
		name: "Roaches",
		description:
			"Roaches are resilient, but our treatment plans are more effective. We eliminate existing populations and implement prevention strategies to keep them from returning. Clean, sanitary, professional approach.",
	},
	{
		id: "mosquitoes",
		icon: Bug,
		name: "Mosquitoes",
		description:
			"Take back your yard. Our professional mosquito treatments reduce populations dramatically so your family can enjoy the outdoors without the bites — and without the worry of mosquito-borne diseases.",
	},
	{
		id: "ticks",
		icon: Bug,
		name: "Ticks",
		description:
			"Ticks carry Lyme disease and other serious illnesses. Our property-wide tick treatments protect your family and pets by targeting tick habitats and reducing populations where they live.",
	},
	{
		id: "general",
		icon: ShieldCheck,
		name: "General Pest Control",
		description:
			"Not sure what you're dealing with? Our comprehensive pest management plans include seasonal treatments, ongoing monitoring, and proactive prevention for year-round peace of mind.",
	},
];

const processSteps = [
	{
		icon: Search,
		title: "Inspection",
		description:
			"We start with a thorough inspection of your property to identify the pest, the extent of the problem, and how they're getting in.",
	},
	{
		icon: ClipboardList,
		title: "Custom Plan",
		description:
			"Based on our findings, we create a targeted treatment plan tailored to your specific situation, using eco-friendly products.",
	},
	{
		icon: SprayCan,
		title: "Treatment",
		description:
			"Our trained technicians apply treatments with precision — effective against pests, safe for your family and pets.",
	},
	{
		icon: RefreshCw,
		title: "Follow-Up",
		description:
			"We follow up to make sure the treatment worked and the pests are gone. If they come back, so do we.",
	},
];

export default function ServicesPage() {
	return (
		<>
			<PageHero
				title="Our Pest Control Services"
				subtitle="Eco-friendly, family-safe pest control for homes and businesses across New York, New Jersey, and Connecticut."
				compact
			/>

			{/* Residential Services */}
			<Section bg="white">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Residential Pest Control
					</h2>
					<p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
						Your home should be safe and pest-free. We offer targeted solutions
						for the most common household pests, using methods that are safe for
						your family and the environment.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{residentialServices.map((service) => (
						<ServiceCard key={service.id} {...service} />
					))}
				</div>
				<div className="text-center mt-10">
					<Button href="/contact">Get a Free Quote</Button>
				</div>
			</Section>

			{/* Our Approach */}
			<Section bg="gray">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Our Approach
					</h2>
					<p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
						Every job follows our proven four-step process to deliver results
						that last.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{processSteps.map((step, index) => (
						<div key={step.title} className="text-center">
							<div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4 relative">
								<step.icon size={28} className="text-brand-green" />
								<span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center">
									{index + 1}
								</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								{step.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</Section>

			{/* Commercial Services */}
			<Section bg="white">
				<div className="max-w-3xl mx-auto text-center">
					<div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
						<Building2 size={32} className="text-brand-blue" />
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Commercial Pest Control
					</h2>
					<p className="text-gray-600 text-lg mb-4">
						Pests in your business aren&apos;t just a nuisance — they&apos;re a risk to
						your reputation, your employees, and your compliance. All Done provides
						commercial pest control for offices, restaurants, retail spaces, property
						management companies, and more.
					</p>
					<p className="text-gray-600 text-lg mb-8">
						We offer the same eco-friendly, thorough approach we bring to residential
						clients, tailored to the unique needs and regulations of commercial
						properties.
					</p>
					<Button href="/contact">Request a Commercial Quote</Button>
				</div>
			</Section>

			{/* CTA */}
			<CTABlock
				heading="Not Sure What You're Dealing With?"
				description="No problem. Get a free inspection and quote — we'll identify the issue and recommend the right solution."
			/>
		</>
	);
}
