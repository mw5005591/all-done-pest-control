interface SectionProps {
	children: React.ReactNode;
	className?: string;
	bg?: "white" | "gray" | "blue";
	id?: string;
}

const bgClasses = {
	white: "bg-white",
	gray: "bg-gray-50",
	blue: "bg-brand-blue text-white",
};

export default function Section({
	children,
	className = "",
	bg = "white",
	id,
}: SectionProps) {
	return (
		<section id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</section>
	);
}
