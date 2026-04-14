import { Leaf, Heart, MapPin, CalendarCheck, Clock } from "lucide-react";

const trustItems = [
	{ icon: Leaf, label: "Eco-Friendly Solutions" },
	{ icon: Heart, label: "Family & Pet Safe" },
	{ icon: MapPin, label: "Serving NY, NJ & CT" },
	{ icon: CalendarCheck, label: "Free Estimates" },
	{ icon: Clock, label: "Sun–Thu 8–6 | Fri 8–12" },
];

export default function TrustBar() {
	return (
		<section className="bg-brand-green text-white py-4">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
					{trustItems.map((item) => (
						<div
							key={item.label}
							className="flex items-center gap-2 text-sm font-medium"
						>
							<item.icon size={18} className="shrink-0" />
							<span>{item.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
