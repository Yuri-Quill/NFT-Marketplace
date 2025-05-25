import { Link, type LinkProps } from "react-router-dom";
import cn from "@/utils/cn";

import "./Buttons.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	ariaLabel: string;
	icon?: React.ReactElement;
};

type ButtonLinkProps = LinkProps & {
	className?: string;
	children: React.ReactNode;
	icon?: React.ReactElement;
};

export const Button = ({ children, className, type = "button", ariaLabel, icon, ...rest }: ButtonProps) => {
	return (
		<button
			className={cn({ baseClass: "button", additionalClass: className })}
			type={type}
			aria-label={ariaLabel}
			{...rest}
		>
			{icon}
			{children}
		</button>
	);
};

export const ButtonLink = ({ children, className, to, icon, ...rest }: ButtonLinkProps) => {
	return (
		<Link className={cn({ baseClass: "button-link", additionalClass: className })} to={to} {...rest}>
			{icon}
			{children}
		</Link>
	);
};
