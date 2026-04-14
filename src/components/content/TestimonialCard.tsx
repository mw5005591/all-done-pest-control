import { Star } from "lucide-react";

interface TestimonialCardProps {
	quote: string;
	name: string;
	location: string;
	rating?: number;
}

export default function TestimonialCard({
	quote,
	name,
	location,
	rating = 5,
}: TestimonialCardProps) {
	return (
		<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col">
			<div className="flex gap-1 mb-4">
				{Array.from({ length: rating }).map((_, i) => (
					<Star
						key={i}
						size={18}
						className="fill-brand-orange text-brand-orange"
					/>
				))}
			</div>
			<blockquote className="text-gray-700 leading-relaxed flex-1">
				&ldquo;{quote}&rdquo;
			</blockquote>
			<div className="mt-4 pt-4 border-t border-gray-100">
				<p className="font-semibold text-gray-900">{name}</p>
				<p className="text-sm text-gray-500">{location}</p>
			</div>
		</div>
	);
}
