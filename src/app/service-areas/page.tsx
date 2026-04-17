"use client";

import { MapPin } from "lucide-react";
import PageHead from "@/components/layout/PageHead";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import StateCard from "@/components/content/StateCard";
import CTABlock from "@/components/content/CTABlock";

const states = [
	{
		id: "new-york",
		icon: MapPin,
		state: "New York",
		description:
			"We proudly serve homes and businesses throughout New York state. Whether you're in the Hudson Valley, Westchester, the boroughs, or Long Island, All Done brings reliable, eco-friendly pest control to your door.",
	},
	{
		id: "new-jersey",
		icon: MapPin,
		state: "New Jersey",
		description:
			"From North Jersey suburbs to the Shore and everywhere in between, All Done provides thorough, family-safe pest control that New Jersey homeowners and businesses trust.",
	},
	{
		id: "connecticut",
		icon: MapPin,
		state: "Connecticut",
		description:
			"Connecticut homes deserve pest control that's as safe as it is effective. We serve communities across the state with the same care and eco-friendly approach we're known for.",
	},
];

export default function ServiceAreasPage() {
	return (
		<>
			<PageHead 
				title="Service Areas — NY, NJ & CT | All Done Pest Control"
				description="All Done Pest Control serves New York, New Jersey, and Connecticut with eco-friendly residential and commercial pest control services."
			/>
			<PageHero
				title="Service Areas"
				subtitle="All Done Pest Control proudly serves homes and businesses across New York, New Jersey, and Connecticut."
				compact
			/>

			{/* State Sections */}
			<Section bg="white">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{states.map((state) => (
						<StateCard key={state.id} {...state} />
					))}
				</div>
			</Section>

			{/* Coverage Note */}
			<Section bg="gray">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Not Sure If We Serve Your Area?
					</h2>
					<p className="text-gray-600 text-lg mb-4">
						We&apos;re always expanding our coverage across the tri-state area. If
						you&apos;re not sure whether we serve your specific town or neighborhood,
						just give us a call or request a quote — we&apos;re happy to help.
					</p>
					<p className="text-gray-600 text-lg">
						Our team knows the tri-state area inside and out, and we&apos;re
						familiar with the specific pest challenges that come with each region
						and season.
					</p>
				</div>
			</Section>

			{/* CTA */}
			<CTABlock
				heading="Protect Your Home Today"
				description="Get a free, no-obligation quote for eco-friendly pest control in your area."
			/>
		</>
	);
}
