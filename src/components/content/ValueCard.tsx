import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
	return (
		<div className="text-center p-6">
			<div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
				<Icon size={28} className="text-brand-green" />
			</div>
			<h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
			<p className="text-gray-600 text-sm leading-relaxed">{description}</p>
		</div>
	);
}
