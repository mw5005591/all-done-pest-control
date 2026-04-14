"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { PHONE_TEL, PHONE_NUMBER } from "@/components/ui/PhoneNumber";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Service Areas", href: "/service-areas" },
	{ label: "Contact", href: "/contact" },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white border-b border-gray-200">
			{/* Top bar — hours + phone (desktop) */}
			<div className="hidden md:block bg-gray-50 border-b border-gray-100">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 py-1.5 text-sm text-gray-600">
					<span>Sun–Thu 8am–6pm | Fri 8am–12pm</span>
					<a
						href={PHONE_TEL}
						className="inline-flex items-center gap-1.5 font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
					>
						<Phone size={14} />
						{PHONE_NUMBER}
					</a>
				</div>
			</div>

			{/* Main nav bar */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 shrink-0">
						<span className="text-2xl font-bold">
							<span className="text-brand-orange">ALL DONE</span>{" "}
							<span className="text-brand-blue">Pest Control</span>
						</span>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-gray-700 hover:text-brand-green font-medium transition-colors"
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden md:block">
						<Button href="/contact" size="sm">
							Get a Free Quote
						</Button>
					</div>

					{/* Mobile: phone + hamburger */}
					<div className="flex md:hidden items-center gap-3">
						<a
							href={PHONE_TEL}
							className="p-2 text-brand-green"
							aria-label="Call us"
						>
							<Phone size={22} />
						</a>
						<button
							onClick={() => setMobileOpen(true)}
							className="p-2 text-gray-700"
							aria-label="Open menu"
						>
							<Menu size={24} />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu overlay */}
			{mobileOpen && (
				<div className="fixed inset-0 z-50 bg-white md:hidden">
					<div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
						<Link
							href="/"
							className="text-2xl font-bold"
							onClick={() => setMobileOpen(false)}
						>
							<span className="text-brand-orange">ALL DONE</span>{" "}
							<span className="text-brand-blue">Pest Control</span>
						</Link>
						<button
							onClick={() => setMobileOpen(false)}
							className="p-2 text-gray-700"
							aria-label="Close menu"
						>
							<X size={24} />
						</button>
					</div>
					<nav className="flex flex-col px-4 py-6 gap-1">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
								onClick={() => setMobileOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<div className="mt-6 px-4">
							<Button
								href="/contact"
								className="w-full"
								size="lg"
							>
								Get a Free Quote
							</Button>
						</div>
						<div className="mt-4 px-4 text-center">
							<a
								href={PHONE_TEL}
								className="inline-flex items-center gap-2 text-brand-green font-semibold"
							>
								<Phone size={18} />
								{PHONE_NUMBER}
							</a>
							<p className="text-sm text-gray-500 mt-2">
								Sun–Thu 8am–6pm | Fri 8am–12pm
							</p>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
