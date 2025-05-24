import clsx from "clsx";
interface ICnProps {
	baseClass: string;
	modifier?: string;
	mod?: boolean;
	additionalClass?: string;
}

const cn = ({ baseClass, modifier, mod = false, additionalClass }: ICnProps): string => {
	const className = clsx(baseClass, mod && modifier ? `${baseClass}--${modifier}` : null, additionalClass);
	return className;
};

export default cn;
