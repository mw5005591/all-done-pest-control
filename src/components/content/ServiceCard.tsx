import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
	icon: LucideIcon;
	name: string;
	description: string;
	id?: string;
}

export default function ServiceCard({ icon: Icon, name, description, id }: ServiceCardProps) {
	return (
		<div
			id={id}
			className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
		>
			<div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4">
				<Icon size={24} className="text-brand-green" />
			</div>
			<h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
			<p className="text-gray-600 text-sm leading-relaxed">{description}</p>
		</div>
	);
}
