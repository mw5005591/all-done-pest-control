import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: React.ReactNode;
	className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
	href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		"bg-brand-green text-white hover:bg-brand-green-dark focus-visible:ring-brand-green",
	secondary:
		"border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus-visible:ring-brand-blue",
	ghost:
		"text-brand-green hover:text-brand-green-dark underline-offset-4 hover:underline focus-visible:ring-brand-green",
	white:
		"bg-white text-brand-green hover:bg-gray-100 focus-visible:ring-white",
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-4 py-2 text-sm",
	md: "px-6 py-3 text-base",
	lg: "px-8 py-4 text-lg",
};

export default function Button({
	variant = "primary",
	size = "md",
	children,
	className = "",
	...props
}: ButtonProps) {
	const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

	if ("href" in props && props.href) {
		return (
			<Link href={props.href} className={classes}>
				{children}
			</Link>
		);
	}

	const { ...buttonProps } = props as ButtonAsButton;
	return (
		<button className={classes} {...buttonProps}>
			{children}
		</button>
	);
}
