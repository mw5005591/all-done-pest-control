import {
	Bug,
	Rat,
	BedDouble,
	ShieldCheck,
	Leaf,
	Heart,
	Search,
	MapPin,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import TrustBar from "@/components/content/TrustBar";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/content/ServiceCard";
import ValueCard from "@/components/content/ValueCard";
import TestimonialCard from "@/components/content/TestimonialCard";
import CTABlock from "@/components/content/CTABlock";
import Button from "@/components/ui/Button";

const services = [
	{
		icon: Bug,
		name: "Termites",
		description:
			"Protect your home from structural damage with thorough inspections and eco-friendly termite treatment that lasts.",
	},
	{
		icon: Rat,
		name: "Rodents",
		description:
			"Safe, humane removal with entry point sealing to keep mice and rats out for good. Family-safe methods guaranteed.",
	},
	{
		icon: BedDouble,
		name: "Bed Bugs",
		description:
			"Discreet, effective bed bug elimination. We treat the problem thoroughly so you can sleep easy again.",
	},
	{
		icon: Bug,
		name: "Ants",
		description:
			"Targeted colony treatment that stops ants at the source. Eco-friendly solutions safe for your home.",
	},
	{
		icon: Bug,
		name: "Roaches",
		description:
			"Complete roach elimination with prevention strategies to keep them from coming back. Clean, sanitary approach.",
	},
	{
		icon: Bug,
		name: "Mosquitoes",
		description:
			"Reclaim your yard with professional mosquito treatment. Enjoy the outdoors without the bites.",
	},
	{
		icon: Bug,
		name: "Ticks",
		description:
			"Property-wide tick treatment to protect your family and pets from Lyme disease and other tick-borne illnesses.",
	},
	{
		icon: ShieldCheck,
		name: "General Pest Control",
		description:
			"Comprehensive pest management plans with seasonal treatments for year-round protection and peace of mind.",
	},
];

const values = [
	{
		icon: Leaf,
		title: "Eco-Friendly Solutions",
		description:
			"We use EPA-approved, environmentally responsible products that are tough on pests but gentle on the planet.",
	},
	{
		icon: Heart,
		title: "Safe for Families & Pets",
		description:
			"Every treatment is selected with your family's safety in mind. Kid-friendly, pet-conscious methods — always.",
	},
	{
		icon: Search,
		title: "Thorough Inspections",
		description:
			"We don't just treat the symptoms. Our detailed inspections find the root of the problem for lasting results.",
	},
	{
		icon: MapPin,
		title: "Tri-State Expertise",
		description:
			"Proudly serving New York, New Jersey, and Connecticut with the local knowledge that makes a difference.",
	},
];

const testimonials = [
	{
		quote:
			"All Done came out the same week we called. They found the termite damage we didn't even know about, treated it fast, and the follow-up was just as thorough. Really impressed with how professional and careful they were.",
		name: "Michael R.",
		location: "New York",
	},
	{
		quote:
			"I was worried about chemicals with two toddlers and a dog at home, but the team explained everything they were using and why it was safe. The ants are gone and I feel good about how it was handled.",
		name: "Sarah T.",
		location: "New Jersey",
	},
	{
		quote:
			"We had a mouse problem in our basement for months. All Done sealed every entry point and cleared them out completely. Haven't seen one since. Worth every penny.",
		name: "David K.",
		location: "Connecticut",
	},
];

export default function HomePage() {
	return (
		<>
			{/* Hero */}
			<PageHero
				tagline="They Hide. We Seek."
				title="Eco-Friendly Pest Control for Homes Across NY, NJ & CT"
				subtitle="Safe for your family. Safe for your pets. Effective against pests. Get reliable, eco-friendly pest control from a team you can trust."
				primaryCta={{ label: "Get Your Free Quote", href: "/contact" }}
				secondaryCta={{ label: "Our Services", href: "/services" }}
			/>

			{/* Trust Bar */}
			<TrustBar />

			{/* Services Overview */}
			<Section bg="white">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						What We Treat
					</h2>
					<p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
						From common household pests to serious infestations, we have the
						expertise and eco-friendly solutions to handle it all.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service) => (
						<ServiceCard key={service.name} {...service} />
					))}
				</div>
				<div className="text-center mt-10">
					<Button href="/services" variant="secondary">
						See All Services
					</Button>
				</div>
			</Section>

			{/* Why Choose Us */}
			<Section bg="gray">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Why All Done Pest Control?
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((value) => (
						<ValueCard key={value.title} {...value} />
					))}
				</div>
				<div className="text-center mt-10">
					<Button href="/contact">Get Your Free Quote</Button>
				</div>
			</Section>

			{/* Service Areas Snapshot */}
			<Section bg="white">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Proudly Serving the Tri-State Area
					</h2>
					<p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
						All Done Pest Control provides reliable, eco-friendly pest control
						for homes and businesses across New York, New Jersey, and
						Connecticut.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
					{["New York", "New Jersey", "Connecticut"].map((state) => (
						<div
							key={state}
							className="text-center p-6 bg-brand-blue/5 rounded-xl"
						>
							<MapPin
								size={32}
								className="text-brand-blue mx-auto mb-3"
							/>
							<h3 className="text-lg font-semibold text-gray-900">
								{state}
							</h3>
						</div>
					))}
				</div>
				<div className="text-center mt-8">
					<Button href="/service-areas" variant="ghost">
						View Service Areas →
					</Button>
				</div>
			</Section>

			{/* Testimonials */}
			<Section bg="gray">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						What Our Customers Say
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<TestimonialCard key={testimonial.name} {...testimonial} />
					))}
				</div>
			</Section>

			{/* Final CTA */}
			<CTABlock
				heading="Ready to Get Started?"
				description="Get your free, no-obligation quote in minutes. We'll take it from there."
			/>
		</>
	);
}


