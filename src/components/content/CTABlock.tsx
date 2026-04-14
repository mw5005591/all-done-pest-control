import Button from "@/components/ui/Button";
import PhoneNumber from "@/components/ui/PhoneNumber";

interface CTABlockProps {
	heading: string;
	description?: string;
	buttonLabel?: string;
	buttonHref?: string;
	showPhone?: boolean;
	bg?: "white" | "gray" | "blue";
}

const bgClasses = {
	white: "bg-white",
	gray: "bg-gray-50",
	blue: "bg-brand-blue",
};

export default function CTABlock({
	heading,
	description,
	buttonLabel = "Get Your Free Quote",
	buttonHref = "/contact",
	showPhone = true,
	bg = "blue",
}: CTABlockProps) {
	const isBlue = bg === "blue";

	return (
		<section className={`py-16 md:py-20 ${bgClasses[bg]}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				<h2
					className={`text-2xl md:text-4xl font-bold ${
						isBlue ? "text-white" : "text-gray-900"
					}`}
				>
					{heading}
				</h2>
				{description && (
					<p
						className={`mt-4 text-lg ${
							isBlue ? "text-blue-100" : "text-gray-600"
						}`}
					>
						{description}
					</p>
				)}
				<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button
						href={buttonHref}
						variant={isBlue ? "white" : "primary"}
						size="lg"
					>
						{buttonLabel}
					</Button>
				</div>
				{showPhone && (
					<div className="mt-6">
						<span
							className={`text-sm ${
								isBlue ? "text-blue-100" : "text-gray-500"
							}`}
						>
							or call us at{" "}
						</span>
						<PhoneNumber
							className={
								isBlue
									? "!text-white hover:!text-blue-100"
									: ""
							}
							showIcon={false}
						/>
					</div>
				)}
			</div>
		</section>
	);
}
