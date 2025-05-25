import { ErrorMessage, Field } from "formik";
import type { JSX } from "react";

import cn from "@/utils/cn";

import "./Input.scss";

type inputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	children?: React.ReactNode;
	icon?: React.ReactElement;
	additionalIcon?: React.ReactElement;
	as?: keyof JSX.IntrinsicElements | React.ComponentType<object>;
};

const Input = ({ name, className, type, children, icon, additionalIcon, as, ...rest }: inputProps) => {
	return (
		<div className={cn({ baseClass: "input", additionalClass: className })}>
			{icon}

			<Field className="input__field" name={name} type={type} children={children} as={as} {...rest} />

			{additionalIcon}

			<ErrorMessage className="input__error" name={name} component="span" />
		</div>
	);
};

export default Input;
