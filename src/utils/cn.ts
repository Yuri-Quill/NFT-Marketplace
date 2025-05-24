import clsx from "clsx";

const cn = (baseClass: string, modifier?: string, mod: boolean = false, additionalClass?: string): string => {
	const className = clsx(baseClass, mod && modifier ? `${baseClass}--${modifier}` : null, additionalClass);
	return className;
};

export default cn;
