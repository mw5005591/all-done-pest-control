import Button from "@/components/ui/Button";

interface PageHeroProps {
	title: string;
	tagline?: string;
	subtitle?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	compact?: boolean;
}

export default function PageHero({
	title,
	tagline,
	subtitle,
	primaryCta,
	secondaryCta,
	compact = false,
}: PageHeroProps) {
	return (
		<section
			className={`bg-gradient-to-br from-brand-blue-light via-white to-green-50 ${
				compact ? "py-12 md:py-16" : "py-16 md:py-28"
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				{tagline && (
					<p className="text-brand-green font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
						{tagline}
					</p>
				)}
				<h1
					className={`font-bold text-gray-900 ${
						compact
							? "text-3xl md:text-4xl"
							: "text-3xl md:text-5xl lg:text-6xl"
					}`}
				>
					{title}
				</h1>
				{subtitle && (
					<p
						className={`mt-4 md:mt-6 text-gray-600 mx-auto ${
							compact
								? "text-base md:text-lg max-w-2xl"
								: "text-lg md:text-xl max-w-3xl"
						}`}
					>
						{subtitle}
					</p>
				)}
				{(primaryCta || secondaryCta) && (
					<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
						{primaryCta && (
							<Button href={primaryCta.href} size="lg">
								{primaryCta.label}
							</Button>
						)}
						{secondaryCta && (
							<Button href={secondaryCta.href} variant="secondary" size="lg">
								{secondaryCta.label}
							</Button>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
