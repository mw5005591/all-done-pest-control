import type { LucideIcon } from "lucide-react";

interface StateCardProps {
	icon: LucideIcon;
	state: string;
	description: string;
	id?: string;
}

export default function StateCard({ icon: Icon, state, description, id }: StateCardProps) {
	return (
		<div
			id={id}
			className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center"
		>
			<div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-5">
				<Icon size={32} className="text-brand-blue" />
			</div>
			<h3 className="text-xl font-bold text-gray-900 mb-3">{state}</h3>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</div>
	);
}
