import Link from "next/link";
import { Phone, Clock } from "lucide-react";
import { PHONE_TEL, PHONE_NUMBER } from "@/components/ui/PhoneNumber";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Service Areas", href: "/service-areas" },
	{ label: "Contact", href: "/contact" },
];

const serviceLinks = [
	{ label: "Termites", href: "/services#termites" },
	{ label: "Rodents", href: "/services#rodents" },
	{ label: "Bed Bugs", href: "/services#bed-bugs" },
	{ label: "Ants", href: "/services#ants" },
	{ label: "Roaches", href: "/services#roaches" },
	{ label: "Mosquitoes", href: "/services#mosquitoes" },
	{ label: "Ticks", href: "/services#ticks" },
	{ label: "General Pest Control", href: "/services#general" },
];

const areaLinks = [
	{ label: "New York", href: "/service-areas#new-york" },
	{ label: "New Jersey", href: "/service-areas#new-jersey" },
	{ label: "Connecticut", href: "/service-areas#connecticut" },
];

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div>
						<Link href="/" className="inline-block mb-4">
							<span className="text-xl font-bold">
								<span className="text-brand-orange">ALL DONE</span>{" "}
								<span className="text-white">Pest Control</span>
							</span>
						</Link>
						<p className="text-sm text-gray-400 mb-4">
							Eco-friendly pest control for homes and businesses across New York,
							New Jersey, and Connecticut.
						</p>
						<a
							href={PHONE_TEL}
							className="inline-flex items-center gap-2 font-semibold text-brand-green-light hover:text-white transition-colors"
						>
							<Phone size={16} />
							{PHONE_NUMBER}
						</a>
						<div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
							<Clock size={14} />
							<span>Sun–Thu 8am–6pm | Fri 8am–12pm</span>
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-white font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm hover:text-white transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-white font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							{serviceLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm hover:text-white transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Service Areas */}
					<div>
						<h3 className="text-white font-semibold mb-4">Service Areas</h3>
						<ul className="space-y-2">
							{areaLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm hover:text-white transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-gray-800">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
					<p>&copy; {new Date().getFullYear()} All Done Pest Control. All rights reserved.</p>
					<div className="flex gap-4">
						<Link href="#" className="hover:text-gray-300 transition-colors">
							Privacy Policy
						</Link>
						<Link href="#" className="hover:text-gray-300 transition-colors">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
