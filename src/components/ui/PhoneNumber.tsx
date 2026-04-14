import { Phone } from "lucide-react";

interface PhoneNumberProps {
	className?: string;
	iconSize?: number;
	showIcon?: boolean;
}

const PHONE_NUMBER = "(845) 751-DONE (3663)";
const PHONE_TEL = "tel:+18457513663";

export default function PhoneNumber({
	className = "",
	iconSize = 18,
	showIcon = true,
}: PhoneNumberProps) {
	return (
		<a
			href={PHONE_TEL}
			className={`inline-flex items-center gap-2 font-semibold text-brand-green hover:text-brand-green-dark transition-colors ${className}`}
		>
			{showIcon && <Phone size={iconSize} />}
			<span>{PHONE_NUMBER}</span>
		</a>
	);
}

export { PHONE_NUMBER, PHONE_TEL };
